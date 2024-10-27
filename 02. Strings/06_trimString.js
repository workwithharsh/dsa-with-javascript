/*
    Problem: Write a function to trim a string without build-in method.

    Algorithm:
    1. Split the string into an array of characters
    2. If array starts with space, remove it
    3. If array ends with space, remove it
    4. Return the trimmed string
*/

// --- Solution ---
function trimString(string) {
  // Step 1: Split the string into an array of characters
  let characters = string.split("");

  // Step 2: If array starts with space, remove it
  while (characters[0] === " ") {
    characters.shift();
  }

  // Step 3: If array starts with space, remove it
  while (characters[characters.length - 1] === " ") {
    characters.pop();
  }

  // Step 4: Return the trimmed string
  return characters.join("");
}

// --- Test Cases ---
console.log(trimString("   Hello   !")); // Expected output: Hello   !
console.log(trimString("     This is a sample string.     ")); // Expected output: This is a sample string.

/*
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(n)
  
    where 'n' is the length of the input string
*/
