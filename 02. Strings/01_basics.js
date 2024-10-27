// --- String Declarations ---
const firstname = "Tony"; // A basic string (string primitive)
const lastname = `Stark`; // Another basic string (using template literals)
const nickname = new String("Ironman"); // A string object (wraps around the primitive)

// --- String Length ---
console.log(nickname.length); // Gets the length of the string -> 7

// --- Accessing Characters in a String ---
console.log(nickname[1]); // Access character at index 1 -> "r"
// Only works with positive indices; negative indices return undefined
console.log(nickname.charAt(6)); // Access character at index 6 -> "n"
// Returns an empty string for out-of-range indices
console.log(nickname.charCodeAt(5)); // ASCII code at index 5 -> 97 for 'a'

// --- Basic String Methods ---
// These methods do not change the original string; they return new strings instead

// Change case
console.log(firstname.toUpperCase()); // Converts to uppercase -> "TONY"
console.log(lastname.toLowerCase()); // Converts to lowercase -> "stark"

// Trim whitespace
const spaced = "  Hello World!  ";
console.log(spaced.trim()); // Removes whitespace from both ends -> "Hello World!"
console.log(spaced.trimStart()); // Removes whitespace from the start -> "Hello World!  "
console.log(spaced.trimEnd()); // Removes whitespace from the end -> "  Hello World!"

// Split string into array
console.log(nickname.split("")); // Splits each character -> ["I", "r", "o", "n", "m", "a", "n"]
console.log("Iron,Man".split(",")); // Splits by comma -> ["Iron", "Man"]

// Replace substring
console.log(nickname.replace("Iron", "Super")); // Replaces "Iron" with "Super" -> "Superman"
console.log("foo foo".replace("foo", "bar")); // Only replaces the first match -> "bar foo"

// Repeat string
console.log(firstname.repeat(3)); // Repeats the string 3 times -> "TonyTonyTony"

// Padding strings
console.log(firstname.padStart(10, "-")); // Pads start to reach 10 characters -> "------Tony"
console.log(lastname.padEnd(10, ".")); // Pads end to reach 10 characters -> "Stark....."

// --- Checking for Presence of Substrings ---
console.log(nickname.startsWith("Iron")); // Checks if nickname starts with "Iron" -> true
console.log(nickname.endsWith("man")); // Checks if nickname ends with "man" -> true
console.log(nickname.includes("man")); // Checks if "man" is anywhere in nickname -> true

// --- Finding Index of Substrings ---
console.log(nickname.indexOf("man")); // First occurrence of "man" -> 4
console.log(nickname.indexOf("man", 6)); // "man" starting from index 6 -> -1 (not found)
console.log(nickname.lastIndexOf("man")); // Last occurrence of "man" in nickname -> 4
console.log(nickname.lastIndexOf("man", 6)); // Last "man" within first 6 characters -> 4

// --- Extracting Substrings ---
// Note: Original strings are not modified
const sampleText = "Hello, World!";
console.log(sampleText.slice(0, 5)); // Extracts substring from index 0 to 5 -> "Hello"
console.log(sampleText.substring(7, 12)); // Extracts substring from index 7 to 12 -> "World"
console.log(sampleText.substr(7, 5)); // Extracts 5 characters from index 7 -> "World"

// --- Comparing Two Strings ---
console.log(firstname.localeCompare(lastname)); // Lexicographic comparison -> 1 ("Tony" > "Stark")
// Returns:
// 0 if equal, -1 if firstname < lastname, 1 if firstname > lastname

// --- Concatenating Strings ---
const info = `My name is ${firstname} ${lastname} and I am ${nickname}.`;
// Combines strings using template literals -> "My name is Tony Stark and I am Ironman."
console.log(firstname.concat(" ", lastname)); // Concatenates two strings -> "Tony Stark"

// --- Template Literals ---
const age = 40;
const description = `I am ${firstname} ${lastname}, known as ${nickname}, and I am ${age} years old.`;
// Allows embedding variables and expressions within strings -> "I am Tony Stark, known as Ironman, and I am 40 years old."
console.log(description);
