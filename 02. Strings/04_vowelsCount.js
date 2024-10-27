/*
    Problem: Write a function to count the number of vowels in a string.

    Algorithm:
    1. Create an array of vowels
    2. Iterate through the string
    3. If the current character is a vowel, increment the count
*/

// --- Solution ---
function vowelsCount(string) {
  // Step 1: Create an array of vowels
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;

  // Step 2: Iterate through the string
  for (let i = 0; i < string.length; i++) {
    // Step 3: If the current character is a vowel, increment the count
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
}

// --- Test Cases ---
console.log(vowelsCount("Hello World")); // Expected output: 3
console.log(vowelsCount("JavaScript")); // Expected output: 3
console.log(vowelsCount("")); // Expected output: 0
console.log(vowelsCount("aeiou")); // Expected output: 5

/*
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(1)
  
    where 'n' is the length of the input string
*/
