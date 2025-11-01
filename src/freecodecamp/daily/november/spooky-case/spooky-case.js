/**
 * FreeCodeCamp Problem: SpOoKy~CaSe
 * Category: Daily November
 *
 * Given a string, convert it to "spooky case" with the following rules:
 * 1. Replace all underscores (_) and hyphens (-) with tildes (~)
 * 2. Capitalize first letter and every other letter after that
 * 3. Ignore tilde when counting for capitalization pattern
 *
 * The function works in two steps:
 * 1. First replaces all separators with tildes using regex
 * 2. Then iterates through the string once, keeping track of capitalization state
 *    while ignoring tildes in the counting
 *
 * @example
 * spookify("hello_world") // returns "HeLlO~wOrLd"
 * spookify("TRICK-or-TREAT") // returns "TrIcK~oR~tReAt"
 *
 * Complexity:
 * - Time complexity: O(n) where n is the length of the input string
 * - Space complexity: O(n) to store the result string
 *
 * @param {string} boo - The input string to be converted to spooky case
 * @return {string} - The string converted to spooky case format
 */
function spookify(boo) {
  const str = boo.replace(/[-_]/g, "~");
  let result = "";
  let capitalize = true;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "~") {
      result += "~";
      // No cambiamos el estado de capitalize para las tildes
    } else {
      result += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
  }

  return result;
}

export default spookify;
