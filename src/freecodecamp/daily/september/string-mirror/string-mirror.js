/**
 * FreeCodeCamp Problem: String Mirror
 * Category: Daily
 */
function isMirror(str1, str2) {
  // Remove non-alphabetical characters (keep case sensitivity)
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, "");
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, "");

  // Check if the first string equals the reverse of the second string
  return cleanStr1 === cleanStr2.split("").reverse().join("");
}

export default isMirror;
