## Name
Fuzzer application (SWEN 331 Project 1)
​
## Description
A fuzzer is a type of exploratory testing tool used for finding weaknesses in a program by scanning its attack surface.
​
This is the repository for the RIT SWEN 331 (Engineering secure software) project number 1: Fuzzer.
​
The intent behind this tool is that it will be able to crawl a website and programmatically look for and report vulnerabilities
​
For a more detailed description of this task, see the project overview here: https://www.se.rit.edu/~swen-331/projects/fuzzer/
    * This tool is currently in the "Part 2" stage of development
​
## Installation
user must have python 3.0 or later
    *Latest version of Python can be found here: https://www.python.org/downloads/
​
user must have the argsparse library installed, this can be done by performing the following steps:
    *If you have pip installed and added to the PATH environmental variable, run the following in the terminal:
        *"pip install argparse"
    *If you do NOT have pip installed, run the following instead:
        *"python -m pip install argparse"
​
user must have the MechanicalSoup library installed
    *If you have pip installed and added to the PATH environmental variable, run the following in the terminal:
        *"pip install MechanicalSoup"
    If you do NOT have pip installed, run the following instead:
        *"python -m pip install MechanicalSoup"
​
## Usage
this is a command line tool, and can be called from the root directory of this project using the following convention:
fuzz [discover | test] url OPTIONS
​
  COMMANDS:
    discover  Output a comprehensive, human-readable list of all discovered inputs to the system. Techniques include both crawling and guessing.
    test      Discover all inputs, then attempt a list of exploit vectors on those inputs. Report anomalies that could be vulnerabilities.
​
  OPTIONS:

    --custom-auth=string     Signal that the fuzzer should use hard-coded authentication for a specific application (e.g. dvwa).
    
    Discover options:
      --common-words=file    Newline-delimited file of common words to be used in page guessing. Required.
      --extensions=file      Newline-delimited file of path extensions, e.g. ".php". Optional. Defaults to ".php" and the empty string if not specified
    
    Test options:
      --common-words=file    Same option as in discover - see above.
      --extensions=file      Same option as in discover - see above.
      --vectors=file         Newline-delimited file of common exploits to vulnerabilities. Required.
      --sanitized-chars=file Newline-delimited file of characters that should be sanitized from inputs. Defaults to just < and >
      --sensitive=file       Newline-delimited file data that should never be leaked. It's assumed that this data is in the application's database (e.g. test data), but is not reported in any response. Required.
      --slow=500             Number of milliseconds considered when a response is considered "slow". Optional. Default is 500 milliseconds
​

    
Example Commands:
    python fuzz.py discover http://127.0.0.1/ --custom-auth=dvwa --common-words=commonWords.txt --extensions=extensions.txt
    python fuzz.py discover http://127.0.0.1/ --custom-auth=dvwa 
    python fuzz.py test http://127.0.0.1/ --custom-auth=dvwa --common-words=commonWords.txt --extensions=extensions.txt --vectors=vectors.txt --sanitized-chars=sanitizedChars.txt --sensitive=sensitive.txt --slow=500
        *Note* By default, this command will do a fuzz discover using the provided link with the words from the commonWords.txt and extensions.txt files 

    
​
## Known bugs and issues
        1)  If a type error occurs when running on local machine, go to line 288, comment out the command, and the remove the hastag from line 287. The fuzzer should work as usual now. 
## Support
For more information on Fuzzing, OWASP has an excellent article detailing methodology, advantages and limitations:
    https://owasp.org/www-community/Fuzzing#:~:text=A%20fuzzer%20is%20a%20program,identification%20relies%20on%20debugging%20tools.
​
For more information on this project in its current state, and future plans, look at the project overview:
    https://www.se.rit.edu/~swen-331/projects/fuzzer/
​
The creator (Addo Davies Jr.) can be contacted directly at the following email address:
    asd1520@rit.edu
​
## Authors and acknowledgment
Author: Addo Davies Jr.
Original project idea courtesy of Rochester Institute of Technology
​
## Project status
Currently in Part 2 of 2
