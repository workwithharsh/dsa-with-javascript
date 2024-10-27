/* 
    Problem: Create a function that splits a string by spaces and joins the parts using a separator.

    Algorithm:
    1. Split the string into an array of words based on spaces.
    2. Join the words in the array using the specified separator.
*/

// --- Solution ---
function splitAndJoin(string, separator) {
  // Step 1: Split the string into an array of words
  const words = string.split(" ");

  // Step 2: Join the array elements with the separator and return the result
  return words.join(separator);
}

// --- Test Cases ---
console.log(splitAndJoin("Hello World", "-")); // Expected output: "Hello-World"
console.log(splitAndJoin("JavaScript", "_")); // Expected output: "JavaScript"
console.log(splitAndJoin("This is a sentence", " ")); // Expected output: "This is a sentence"

/* 
--- Notes ---
    1. The split() method splits a string into an array of substrings and returns the new array.
    2. The join() method joins all elements of an array into a string.

--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(n)

    where 'n' is the length of the input string
*/
