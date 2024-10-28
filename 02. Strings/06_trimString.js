/*
    Problem: Write a function to trim a string without build-in method.

    Algorithm:
    1. Initialize pointers
    2. Trace whitespaces from both ends
    3. Trim the string
    4. Return the trimmed string
*/

// --- Solution ---
function trimString(string) {
  // Step 1: Initialize pointers
  let start = 0;
  let end = string.length - 1;

  // Step 2: Trace whitespaces from both ends
  while (string[start] === " ") {
    start++;
  }

  while (string[end] == " ") {
    end--;
  }

  // Step 3: Trim the string
  const trimmed = string.slice(start, end + 1);

  // Step 4: Return the trimmed string
  return trimmed;
}

// --- Test Cases ---
console.log(trimString("   Hello   !")); // Expected output: Hello   !
console.log(trimString("     This is a sample string.     ")); // Expected output: This is a sample string.

/*
--- Notes ---
    Two Pointers: We can use two pointers techniques to trace both ends of the strings, aarays, etc.
    
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(n)
  
    where 'n' is the length of the input string
*/
