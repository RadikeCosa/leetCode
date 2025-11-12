/**
 * FreeCodeCamp Problem: Extension Extractor
 * Category: FreeCodeCamp
/**
 * FreeCodeCamp Problem: Extension Extractor
 * Category: FreeCodeCamp
 *
 * Given a filename string, returns the file extension (the substring after
 * the last dot). If the filename contains no dot or ends with a dot, the
 * function returns the literal string "none".
 *
 * Notes:
 * - The function expects a string. If a non-string (e.g. null/undefined)
 *   is provided, a runtime TypeError may be thrown by the underlying
 *   string operation.
 * - The extension is returned "as-is" (case is preserved).
 *
 * Examples:
 *   extensionExtractor("document.txt") // -> "txt"
 *   extensionExtractor("README") // -> "none"
 *   extensionExtractor("image.PNG") // -> "PNG"
 *   extensionExtractor(".gitignore") // -> "gitignore"
 *
 * Complexity: O(n) time where n is filename.length, O(1) extra space.
 *
 * @param {string} param - Filename to inspect. Must be a string.
 * @returns {string} The file extension or "none" when no valid extension exists.
 */
function extensionExtractor(param) {
  }
  return param.substring(lastDotIndex + 1);
}

export default getExtension;
