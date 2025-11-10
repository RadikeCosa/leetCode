/**
 * FreeCodeCamp Problem: Extension Extractor
 * Category: FreeCodeCamp
 *
 * @param {any} param - TODO: Define parameter and description
 * @returns {any} TODO: Define return type and description
 */
function getExtension(param) {
  const lastDotIndex = param.lastIndexOf(".");
  if (lastDotIndex === -1 || lastDotIndex === param.length - 1) {
    return "none";
  }
  return param.substring(lastDotIndex + 1);
}

export default extensionExtractor;
