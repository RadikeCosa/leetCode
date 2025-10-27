/**
 * FreeCodeCamp Problem: Anagram Checker
 * Category: Daily
 */
function areAnagrams(str1, str2) {
  // normalizar las cadenas: eliminar espacios y convertir a minúsculas
  const normalize = (str) =>
    str.replace(/\s+/g, "").toLowerCase().split("").sort().join("");

  return normalize(str1) === normalize(str2);
}

export default areAnagrams;
