/*
    Problem: Write a function to count the number of consonents in a string.

    Algorithm:
    1. Create an array of vowels
    2. Iterate through the string
    3. If the current character is not a vowel, increment the count
    4. Return the count
*/

// --- Solution ---
function consonentCount(string) {
  // Step 1: Create an array of vowels
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;

  // Step 2: Iterate through the string
  for (let i = 0; i < string.length; i++) {
    // Step 3: If the current character is not a vowel, increment the count
    if (!vowels.includes(string[i])) {
      count++;
    }
  }

  // Step 4: Return the count
  return count;
}

// --- Test Cases ---
console.log(consonentCount("Hello World")); // Expected output: 8
console.log(consonentCount("JavaScript")); // Expected output: 7
console.log(consonentCount("")); // Expected output: 0

/*
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(1)
  
    where 'n' is the length of the input string
*/
