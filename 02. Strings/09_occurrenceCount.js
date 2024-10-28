/* 
    Problem: Count the occurrence of each character in a string.

    Algorithm:
    1. Split the string into an array of characters
    2. Reduce the array into an object
    3. Count the occurrence of each character
    4. Return the count
*/

// --- Solution ---
function occurrenceCount(string) {
  // Step 1: Split the string into an array of characters
  const characters = string.split("");

  // Step 2: Reduce the array into an object
  const count = characters.reduce((accumulator, character) => {
    // Step 3: Count the occurrence of each character
    accumulator[character] = (accumulator[character] || 0) + 1;

    return accumulator;
  }, {});

  // Step 4: Return the count
  return count;
}

// --- Test cases ---
console.log(occurrenceCount("hello hello hello")); // Expected output: { h: 3, e: 3, l: 6, o: 3, ' ': 2 }
console.log(occurrenceCount("aaabbccc")); // Expected output: { a: 3, b: 2, c: 3 }
console.log(occurrenceCount("")); // Expected output: {}

/*
--- Notes ---
    1. The reduce() method executes a reducer function (callback) on each element of the array, 
       in order, passing in the return value from the calculation on the preceding element.

--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(n)
  
    where 'n' is the length of the input string
*/
