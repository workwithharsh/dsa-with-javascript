/*
    Problem: Write a function to find the first non-repeating character in a string.

    Algorithm:
    1. Split the string into an array of characters
    2. Reduce the array into an object
    3. Count the occurrence of each character, skip spaces
    4. Find the key-value pair whose value is 1
    5. Conditionally return the key
*/

// --- Solution ---
function nonRepeatingCharacter(string) {
  // Step 1: Split the string into an array of characters
  const characters = string.split("");

  // Step 2: Reduce the array into an object
  const count = characters.reduce((accumulator, character) => {
    // Step 3: Count the occurrence of each character, skip spaces
    if (character !== " ") {
      accumulator[character] = (accumulator[character] || 0) + 1;
    }

    return accumulator;
  }, {});

  // Step 4: Find the key-value pair whose value is 1
  const result = Object.entries(count).find(([key, value]) => value === 1);

  // Step 5: Conditionally return the key
  return result ? result[0] : null;
}

// --- Test cases ---
console.log(nonRepeatingCharacter("hello harsh"));
console.log(nonRepeatingCharacter("harshharsh"));
console.log(nonRepeatingCharacter(""));

/*
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(n)
  
    where 'n' is the length of the input string
*/
