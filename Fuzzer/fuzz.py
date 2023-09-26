import argparse
import mechanicalsoup

browser = mechanicalsoup.StatefulBrowser(user_agent='MechanicalSoup', soup_config={'features': 'xml'})

def parse_urls(urls): 
    """
    Used to parse given urls 
    """
    parsed_urls = []
    for url in urls:
        parsed_url = url.split("?")[0]
        parsed_urls.append(parsed_url)
    return parsed_urls

def print_urls(urls): 
    """
    Use to print urls neatly by row 
    """
    for url in urls: 
        print(url)

def custom_auth(args):
    """
    Hard-Coded Authemntication for dvwa 
    """

    print("CHANGING SECUIRTY LEVEL TO LOW")

    #Creates DB
    browser.open("{}/setup.php".format(args.url)) 
    db_form = browser.select_form('form[action="#"]')
    browser.submit_selected()

    #Logins to DVWA
    browser.open("{}/login.php".format(args.url)) 
    login_form =  browser.select_form('form[action="login.php"]')
    login_form['username'] = 'admin'
    login_form['password'] = 'password'
    browser.submit_selected()
            
    #Switches Security Level to Low
    browser.open("{}/security.php".format(args.url)) 
    browser.select_form('form[action="#"]')
    browser['security'] = 'Low'

    browser.submit_selected()

    #Go Back to Home Page 
    browser.open("{}/index.php".format(args.url)) 

    browser.refresh() #Make sure security changes are shown
    print("SECURITY LEVEL CHANGE SUCCESSFULLY")

def guess_urls(args):
    """
    Based on the given args, guess urls using words and extensions from text files in directory 
    """

    guessed_urls = [] 

    # Load word list and extensions
    with open(args.common_words) as f:
        words = [line.strip() for line in f.readlines()]
    with open(args.extensions) as f:
        extensions = [line.strip() for line in f.readlines()]
    
    # Beginning guessing each possible url combination
    for word in words:
        for ext in extensions:
            # Construct URL to guess
            url = args.url.rstrip('/') + '/' + word + '.' + ext.lstrip('.') #with extension 
            
            if str(browser.open(url)) == '<Response [200]>':
                #print('Link Found: ', url)
                guessed_urls.append(url)

    return guessed_urls

def discover_urls(args, guessed_urls):
    """
    Search for all possible in-website urls based on the guessed urls found. 
    """

    discovered_urls = []
    
    # Using the urls guessed, discover all the url on each page
    for url in guessed_urls: 
        browser.open(url)
        # find all urls on page
        urls = browser.page.find_all('a')
        # extract href value for each url
        for discovered in urls:
            if discovered == None: 
                continue
            else:
                href = discovered.get('href')
                if href == None or "http" in href or 'logout' in href: # making sure we are getting a url to the website and not somewhere else
                    continue
                if "/" == href[-1] or '.php' in href: # making sure we are getting a urll to the website and not somewhere else
                    if href not in discovered_urls and href not in guessed_urls:
                        discover_url = args.url.rstrip('/') + '/' + href
                        if discover_url not in discovered_urls:
                            discovered_urls.append(discover_url)
    
    return discovered_urls

def input_search(urls):
    """
    Search for all the inputs from the given list of urls
    """

    discovered_inputs = {}
    
    # Loop through the URLs
    for url in urls:
        
        browser.open(url)

        forms = browser.page.find_all('form') # Get all form tags on page 
        
        for form in forms: 
            
            title = browser.get_current_page().title.string #Get title of page
            method = form.get("method")
            dc_inputs = form.find_all('input')
            msg_texts = form.find_all('textarea') # Some forms have txtarea which is considered an input 
            
            for inp in dc_inputs:
                name = inp.get('name') # Get name of input 
                value = inp.get('value') # Get value of input 
                inp_type = inp.get('type') #Get type of inpput

                if inp_type != 'submit' and inp_type != 'file': # If input is not a login/submit or upload button 

                    if title not in discovered_inputs.keys(): # If this is a new page not already in dictionary 
                        
                        discovered_inputs[title] = {'inputs': [], 'parsed_url': url, 'form': 'form[method={}]'.format(method)}
                    
                    discovered_inputs[title]['inputs'].append((name,value))
                    
                
            if msg_texts: # If page has a text box 
                for msg in msg_texts: 
                    name = msg.get("name")
                    value = msg.get("value")
                    discovered_inputs[title]['inputs'].append((name,value))

    return discovered_inputs

def cookies_search(args):
    """
    Discover all the cookies with a given url's session
    """
    discovered_cookies = []

    browser.get(args.url) # Get args url 
    cookies = browser.session.cookies # Get session cookies 
    for name, value in cookies.items():
        discovered_cookies.append((name,value)) # add cookie name and value to list 
    
    return discovered_cookies
    
def discover(args): 
    """
    Output a comprehensive, human-readable list of all discovered inputs to the system. 
    Techniques include both crawling and guessing.
    """

    guessed_urls = [] # List for guessued urls 
    discovered_urls = [] # List for discovered urls
    discovered_inputs = {} # Dictionary for discovered inputs from discovered and guessed urls
    discovered_cookies = [] # List of discovered cookies 
    fuzz_urls = [] # List of urls to be fuzzed (find the inputs for)
    
    if args.custom_auth == 'dvwa': # If User requests hard-coded authetitication to dvwa
        custom_auth(args)
    
    
    # --- Beginning Fuzzer Discover Operations ---


    print("\n********************************************\nGUESSING FOR LINKS\n********************************************\n")
    
    guessed_urls = guess_urls(args)

    print("********************************************\nLINKS GUESSED\n********************************************\n")
    
    # Print Guessed Links
    print_urls(guessed_urls)
    
    print("\n********************************************\nDISCOVERING LINKS NOW\n********************************************\n")
    
    discovered_urls = discover_urls(args, guessed_urls)
    
    print("********************************************\nLINKS DISCOVERED\n********************************************\n")
    
    # Print Links Discovered
    print_urls(discovered_urls)

    print("\n********************************************\nPARSING LINKS NOW\n********************************************\n")
    
    fuzz_urls = parse_urls(discovered_urls + guessed_urls)
    print_urls(fuzz_urls)
        
    print("\n********************************************\nSEARCHING FOR INPUTS NOW\n********************************************\n")

    # Using the fuzz links, search all links for any inputs 
    discovered_inputs = input_search(fuzz_urls)
    
    print("********************************************\nINPUTS FOUND\n********************************************\n")
    
    #Print discovered inputs 
    for page in discovered_inputs:
        print("********************************************")
        print("Page Title: {}".format(page))
        
        for tup in discovered_inputs[page]['inputs']:
            print("Name: {}".format(tup[0]))
            print("Value: {}".format(tup[1]))
        
        print("********************************************\n")
        

    print("********************************************\nSEARCHING FOR COOKIES\n********************************************\n")
    #Search for all the cookies on the site using the url provided by the user 
    
    discovered_cookies = cookies_search(args)
    
    print("********************************************\nCOOKIES FOUND\n********************************************\n")
    #Print discovered cookies 
    for tup in discovered_cookies:
        print("{}={}".format(tup[0],tup[1]))

    print("\n********************************************\nDISCOVER COMPLETED\n********************************************\n")

    # --- Fuzzer Discover Operations Completed ---
    
    return discovered_inputs

def test(args): 
    """
    Discover all inputs, then attempt a list of exploit vectors on those inputs. 
    Report anomalies that could be vulnerabilities.
    """
    # Set up counters for results
    unsanitized_count = 0
    sql_injection_count = 0
    sensitive_data_count = 0
    dos_count = 0
    response_error_count = 0
    
    discovered_inputs = discover(args)

    # Load vectors
    with open(args.vectors, "r") as f:
        vectors = f.read().splitlines()

    # Load sanitized characters
    with open(args.sanitized_chars, "r") as f:
        sanitized_chars = f.read().splitlines()

    # Load sensitive data
    with open(args.sensitive, "r") as f:
        sensitive_data = f.read().splitlines()

    # iterate through page and vectors and test for vulnerabilities
    for page in discovered_inputs:

        url = discovered_inputs[page]['parsed_url']
        form_str = discovered_inputs[page]['form']
        names = discovered_inputs[page]['inputs']
    

        for vector in vectors: 
            
            browser.open(url) # Go to url 
            form = browser.select_form(form_str) # Select Form 
            
            if form is None: # If no form on page 
                continue
            
            for name in names: # For each input name, input a vector 
                form[name[0]] = vector
            
            response = browser.submit_selected()
            #response_text = response.text #use only when TypeError: a bytes-like object is required, not 'str' occurs.
            response_text = response.text.encode('utf-8')
            
            
            # check for lack of sanitization
            for char in sanitized_chars:

                if char in response_text:
                    unsanitized_count += 1
                            
            # Check for SQL injection vulnerabilities
            if "You have an error in your SQL syntax" in response_text:
                sql_injection_count += 1
                print("-----------------ERROR-----------------")
                print(response_text)
                print(vector)

            # Check for sensitive data leakages
            for data in sensitive_data:
                if data in response_text:
                    sensitive_data_count += 1
                            

            # Check for DOS vulnerabilities
            if response.elapsed.total_seconds() > (args.slow/1000):
                dos_count += 1
                
            # check for non-200 HTTP response code
            if response.status_code != 200:
                # Check for HTTP/response code errors
                response_error_count += 1
                print("-----------------ERROR-----------------")
                print("{} => {} for {} -- unhandled response".format(response.status_code, response.reason,response.url))
            
    # Output results
    print("\n*************************************")
    print("*          TEST RESULTS:            *")
    print("*************************************")
    print("Number of Unsanitized inputs: {}".format(unsanitized_count))
    print("Number of Possible SQL Injection Vulnerabilities: {}".format(sql_injection_count))
    print("Number of possible Sensitive Data Leakages: {}".format(sensitive_data_count))
    print("Number of possible DOS vulnerabilities: {}".format(dos_count))
    print("Number of HTTP/Response Code Errors: {}".format(response_error_count))
    
if __name__ == "__main__":
    # Set up the argument parser
    parser = argparse.ArgumentParser()

    # Add the arguments
    parser.add_argument('function',choices=['discover', 'test'], type=str, help='Functions for Fuzzer Program')
    parser.add_argument('url', type=str, help='The URL of the website to discover')
    parser.add_argument("--custom-auth", type=str, help="Custom authentication value")
    parser.add_argument('--common-words', type=str, default='commonWords.txt', help='Path to word list file (default: word.txt)')
    parser.add_argument('--extensions', type=str, default='extensions.txt', help='Path to extensions file (default:extensions.txt)')
    parser.add_argument('--vectors', default='vectors.txt', help='Newline-delimited file of common exploits to vulnerabilities. Required.')
    parser.add_argument('--sanitized-chars', default='sanitizedChars.txt', help='Newline-delimited file of characters that should be sanitized from inputs. Defaults to just < and >')
    parser.add_argument('--sensitive', default='sensitive.txt', help='Newline-delimited file data that should never be leaked. It\'s assumed that this data is in the application\'s database (e.g. test data), but is not reported in any response. Required.')
    parser.add_argument('--slow', type=int, default=500, help='Number of milliseconds considered when a response is considered "slow". Optional. Default is 500 milliseconds')


    # Parse the arguments
    args = parser.parse_args()

    if args.function == 'discover' : 
        discover(args)
            
    
    elif args.function == 'test': 
        test(args)
        

    else:
        print("Command not found") 
    
    browser.close()
        


