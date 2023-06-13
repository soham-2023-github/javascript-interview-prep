// Anagram Check: Write a function to determine if two strings are anagrams of each other.

function anagramCheck (str1, str2) {
  return str1.split('').sort().join() === str2.split('').sort().join()
}
