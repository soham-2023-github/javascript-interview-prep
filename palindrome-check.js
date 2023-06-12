// Palindrome Check: Write a function to determine whether a given string is a palindrome.

function reverseString(str) {
    str.split('').reverse().join();
 }

function checkPalindrome(str) {
  return reverseString(str).toLowerCase() === str.toLowerCase();
}

console.log(checkPalindrome('bob'));
