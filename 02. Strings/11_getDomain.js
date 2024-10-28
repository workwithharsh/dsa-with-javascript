/* 
    Problem: Write a function to extract the domain from a URL (e.g., "https://example.com/search?q=example" → "example.com").

    Algorithm:
    1. Find the first occurrence of "://" in the URL
    2. Find the first occurrence of ".com" after the first occurrence of "://"
    3. Extract the substring between the two occurrences

*/

// --- Solution ---
function getDomain(url) {
  // Step 1: Find the first occurrence of "://"
  const start = url.indexOf("://") + 3;

  // Step 2: Find the first occurrence of ".com" after the first occurrence of "://"
  const end = url.indexOf(".com", start) + 4;

  // Step 3: Extract the substring between the two occurrences
  const domain = url.substring(start, end);

  return domain;
}

// --- Test Cases ---
console.log(getDomain("https://example.com/search?q=example"));
console.log(getDomain("https://google.com"));

/*
--- Complexity Analysis ---
    Time Complexity: O(n)
    Space Complexity: O(n)
  
    where 'n' is the length of the input string
*/
