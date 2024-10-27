/*
    Problem: Create a function that reverses a string.

    Algorithm:
    1. Split the string into an array of characters
    2. Reverse the array
    3. Join the array into a string
    4. Return the reversed string
*/

// --- Solution ---
function reverseString(string) {
  // Step 1: Split the string into an array of characters
  const characters = string.split("");

  // Step 2: Reverse the array
  characters.reverse();

  // Step 3: Join the array into a string
  return characters.join("");
}

// --- Test Cases ---
console.log(reverseString("javascript")); // Expected output: "tpircsavaj"
console.log(reverseString("hello")); // Expected output: "olleh"
console.log(reverseString("")); // Expected output: ""

/* 
--- Notes ---
    1. The split() method splits a string into an array of substrings and returns the new array.
    2. The reverse() method reverses the order of the elements in an array in-place.
    3. The join() method joins all elements of an array into a string.

    We could have write this code in one line:
  
    ` return string.split("").reverse().join(""); `
  
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(n)
  
    where 'n' is the length of the input string
  */
