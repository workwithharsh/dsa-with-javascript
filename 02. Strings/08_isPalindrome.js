/*
    Problem: Write a function to check if a string is a palindrome.

    Algorithm:
    1. Initialize pointers
    2. Iterate through the string until both pointers meet
    3. Compare the characters, if they are not equal, return false else move pointers
    4. Return true if the string is a palindrome

*/

// --- Solution ---
function isPalindrome(string) {
  // Step 1: Initialize pointers
  let start = 0;
  let end = string.length - 1;

  // Step 2: Iterate through the string until both pointers meet
  while (start <= end) {
    // Step 3: Compare the characters, if they are not equal, return false else move pointers
    if (string[start] !== string[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }

  // Step 4: Return true if the string is a palindrome
  return true;
}

// --- Test Cases ---
console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false
console.log(isPalindrome("")); // Expected output: true

/*
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(1)
  
    where 'n' is the length of the input string
*/
