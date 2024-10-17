/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s = str.replace(/[\$\!\#\?\,\$\%\&\'\*\.\[\]\\\@\+\t\s ]/g, '')
  const l = s.length;
  for (let i = 0; i < l/2; i++) {
    if (s[i].toLowerCase() !== s[l-i-1].toLowerCase()) return false;
  }
  return true;
}

module.exports = isPalindrome;
