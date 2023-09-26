/**
 * Author: Addo Davies Jr. 
 *
 * This file is used to hold all functions used for validiating and handling inputs
 *
 **/


const sanitizeHTML = require('sanitize-html');

module.exports = {
    sum,
    isTitle,
    countPages,
    cleanPageNum,
    isSameTitle,
    cleanForHTML,
  };

// Sanity check method to make sure you have your environment up and running.
function sum(a, b){
    return a + b;
  }

/*
  Valid book titles in this situation can include:
    - Cannot be any form of "Boaty McBoatface", case insensitive
    - English alphabet characters
    - Arabic numerals
    - Spaces, but no other whitespace like tabs or newlines
    - Quotes, both single and double
    - Hyphens
    - No leading or trailing whitespace
    - No newlines or tabs
*/
function isTitle(str){

    //Specify blockList, List of already false title names 
    const blockList = ["Boaty McBoatface"];

    //Establish regex rule
    const regex = /^[\p{Letter}\d'" -]+$/u;
  
    const composed = str.normalize("NFC");  // normalize to composed form
    const decomposed = str.normalize("NFD");  // normalize to decomposed form
  
    // Check if the composed or decomposed string matches the title regex
    return !blockList.some(block => str.toLowerCase().includes(block.toLowerCase())) && (regex.test(composed.trim()) || regex.test(decomposed.trim())) && str === str.trim();
  }
  
  
/*
  Perform a best-effort cleansing of the page number.
  Given: a raw string
  Returns: an integer, ignoring leading and trailing whitespace. And it can have p in front of it.
*/
function cleanPageNum(str){

    str = str.trim();

    // remove p from letter if there
    if (str.charAt(0) === 'p') {

      str = str.slice(1);

    }

    // if current string is a number
    if (str.match(/^[0-9]+$/)) {

      const num = parseInt(str, 10);

      // if num is an allowable number return number
      if (num >= 0 && num <= Number.MAX_SAFE_INTEGER) {

        return num;

      }
    }

    // else it is undefined
    return undefined;
}

/*
  Are the two titles *effectively* the same when searching?

  This function will be used as part of a search feature, so it should be
  flexible when dealing with diacritics and ligatures.

  Input: two raw strings
  Output: true if they are "similar enough" to each other

  We define two strings as the "similar enough" as:

    * ignore leading and trailing whitespace
    * same sequence of "letters", ignoring diacritics and ligatures, that is:
      anything that is NOT a letter in the UTF-8 decomposed form is removed
    * Ligature "\u00E6" or æ is equivalent to "ae"
    * German character "\u1E9E" or ẞ is equivalent to "ss"
*/
function isSameTitle(strA, strB) {

    // Check if strings or instance of a string
    if ((typeof strA !== 'string' && !(strA instanceof String)) || (typeof strB !== 'string' && !(strB instanceof String))) {
        return false;
    }
    
    // Remove leading/trailing whitespace
    strA = strA.trim();
    strB = strB.trim();
    
    // Convert ligatures and German ẞ
    strA = strA.replace(/\u00E6/g, 'ae').replace(/[\uFB00-\uFB04]/g, "ff").replace(/\u1E9E/g, 'ss');
    strB = strB.replace(/\u00E6/g, 'ae').replace(/[\uFB00-\uFB04]/g, "ff").replace(/\u1E9E/g, 'ss');
    
    // Normalize using NFD and remove diacritics
    strA = strA.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    strB = strB.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
    // Remove non-letters and compare
    strA = strA.replace(/[^a-zA-Z\u0900-\u097F]/g, '');
    strB = strB.replace(/[^a-zA-Z\u0900-\u097F]/g, ''); 
    
    // Return comparaison of both strings
    return strA.toLowerCase().toString() === strB.toLowerCase().toString();
  }

/*
  Page range string.

  Count, inclusively, the number of pages mentioned in the string.

  This is modeled after the string you can use to specify page ranges in
  books, or in a print dialog.

  Example page ranges, copied from our test cases:
    1          ===> 1 page
    p3         ===> 1 page
    1-2        ===> 2 pages
    10-100     ===> 91 pages
    1-3,5-6,9  ===> 6 pages
    1-3,5-6,p9 ===> 6 pages

  A range that goes DOWN still counts, but is never negative.

  Whitespace is allowed anywhere in the string with no effect.

  If the string is over 1000 characters, return undefined
  If the string returns in NaN, return undefined
  If the string does not properly fit the format, return 0

*/
function countPages(rawStr) {

    // Check if input is a string and has length less than or equal to 1000
    if (typeof rawStr !== 'string' || rawStr.length > 1000) {
      return 0;
    }
  
    // Check if input contains control characters
    if (/[\0-\x1F]/.test(rawStr)) {
      return 0;
    }
  
    // Split input string into array of page ranges
    const ranges = rawStr.split(",");
    
    let totalPages = 0;
  
    // Loop through each page range
    for (let i = 0; i < ranges.length; i++) {

      // Split range into start and end pages and convert to numbers
      const 
      range = ranges[i].trim().split("-").map(cleanPageNum);
  
      // Check if range contains non-numeric characters or has more than 2 elements
      if (range.some(isNaN) || range.length > 2) {
        return 0;
      }
  
      // Increment total pages for single-page ranges
      if (range.length === 1) {

        totalPages++;

      } else if (range.length === 2) {
        
        // Calculate number of pages in range and add to total pages
        const [start, end] = range;
        
        // Always subtract highest number from lowest number before adding 1
        if (start <= end) {

          totalPages += end - start + 1;

        } else {

          totalPages += start - end + 1;

        }
  
        // Check for integer overflow
        if (totalPages > Number.MAX_SAFE_INTEGER) {
          return undefined;
        }
      }
    }
  
    // Return total number of pages
    return totalPages;
  }


/*
  Given a string, return another string that is safe for embedding into HTML.
    * Use the sanitize-html library: https://www.npmjs.com/package/sanitize-html
    * Configure it to *only* allow <b> tags and <i> tags
      (Read the README to learn how to do this)
*/
function cleanForHTML(dirty) {

  // Manually coded Options to be use for sanitizeHTML method
  const options = {

    allowedTags: ['b', 'i'], //specifies which tags are allowed
    disallowedTagsMode: 'escape', //escapes output instead of discrading it 

  };

  // sanitize input based on provide options and dirty string
  const sanitized = sanitizeHTML(dirty, options);

  //Replace ' " ' (double quotes) & " ' " (single quotes) with nthier respective HTML Entity Encodes
  const sanitizedQuotes = sanitized.replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

  return sanitizedQuotes;
}