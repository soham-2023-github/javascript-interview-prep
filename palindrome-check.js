// Palindrome Check: Write a function to determine whether a given string is a palindrome.

function checkPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome('bob')); // Output: true

