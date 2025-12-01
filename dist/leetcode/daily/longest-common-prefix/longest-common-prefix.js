/**
 * 14. Longest Common Prefix - Easy
 *
 * Find the longest common prefix string amongst an array of strings.
 *
 * @param strs - Array of strings
 * @returns The longest common prefix string, or empty string if no common prefix
 *
 * Time Complexity: O(S * log n + m) donde S es la suma total de caracteres, n es el número de strings, m es la longitud del prefijo común
 * Space Complexity: O(1) - solo variables auxiliares (no considerando el espacio del sorting)
 */
export function longestCommonPrefix(strs) {
    let commonPrefix = "";
    let sortedArray = strs.sort();
    if (sortedArray.length === 0)
        return commonPrefix;
    if (sortedArray[0] === "")
        return commonPrefix;
    let firstString = sortedArray[0];
    let lastString = sortedArray[sortedArray.length - 1];
    let limit = Math.min(firstString.length, lastString.length);
    for (let i = 0; i < limit; i++) {
        if (firstString[i] !== lastString[i])
            break;
        commonPrefix += firstString[i];
    }
    return commonPrefix;
}
