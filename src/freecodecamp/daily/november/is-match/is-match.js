/**
 * FreeCodeCamp Problem: Is Match
 * Category: FreeCodeCamp
 *
 * @param {string} fingerprint1 - The first fingerprint string
 * @param {string} fingerprint2 - The second fingerprint string
 * @returns {boolean} Returns true if the fingerprints match according to the rules, otherwise false
 */
function isMatch(fingerprint1, fingerprint2) {
  let len1 = fingerprint1.length;
  let len2 = fingerprint2.length;

  // If lengths differ, return false
  if (len1 !== len2) {
    return false;
  }

  let differences = 0;

  for (let i = 0; i < len1; i++) {
    if (fingerprint1[i] !== fingerprint2[i]) {
      differences++;
    }
  }

  return differences <= len1 * 0.1;
}

export default isMatch;
