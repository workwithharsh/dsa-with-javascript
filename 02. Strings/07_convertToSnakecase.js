/*
    Problem: Convert a string from camel case ("helloWorld") to snake case ("hello_world").

    Algorithm:
    1. Iterate through the string
    2. Check if character is an uppercase character
    3. Replace with _ and character, if its not a starting character
    4. Return the new string
*/

// --- Solution ---
function convertToSnakeCase(string) {
  let result = "";

  // Step 1: Iterate through the string
  for (let character of string) {
    // Step 2: Check if character is an uppercase character
    if (character === character.toUpperCase()) {
      // Step 3: Replace with _ and character, if its not a starting character
      if (result.length > 0) {
        result += "_";
      }

      result += character.toLowerCase();
    } else {
      result += character;
    }
  }

  // Step 4: Return the new string
  return result;
}

// --- Test Cases ---
console.log(convertToSnakeCase("helloWorld")); // Expected output: "hello_world"
console.log(convertToSnakeCase("helloWorld123")); // Expected output: "hello_world123"
console.log(convertToSnakeCase("HelloWorld")); // Expected output: "hello_world"

/*
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(n)
  
    where 'n' is the length of the input string
*/
