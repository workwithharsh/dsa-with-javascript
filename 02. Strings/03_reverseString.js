/*
    Problem: Create a function that reverses a string without build-in method.

    Algorithm:
    1. Initialize an empty string to store the reversed characters.
    2. Iterate through the original string from the last character to the first.
    3. Append each character to the empty string.
    4. Return the reversed string.
*/

// --- Solution ---
function reverseString(string) {
  // Step 1: Initialize an empty string
  let reversed = "";

  // Step 2: Iterate from the last character to the first
  for (let i = string.length - 1; i >= 0; i--) {
    // Step 3: Append each character to the reversed string
    reversed += string[i];
  }

  // Step 4: Return the reversed string
  return reversed;
}

// --- Test Cases ---
console.log(reverseString("javascript")); // Expected output: "tpircsavaj"
console.log(reverseString("hello")); // Expected output: "olleh"
console.log(reverseString("")); // Expected output: ""

/* 
--- Notes ---

    We could have write this code in one line with build-in method:
  
    ` return string.split("").reverse().join(""); `

    1. The split() method splits a string into an array of substrings and returns the new array.
    2. The reverse() method reverses the order of the elements in an array in-place.
    3. The join() method joins all elements of an array into a string.
  
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(n)
  
    where 'n' is the length of the input string
  */
