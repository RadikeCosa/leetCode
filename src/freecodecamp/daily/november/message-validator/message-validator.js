/**
 * FreeCodeCamp Problem: Message Validator
 * Category: FreeCodeCamp
 *
 * @param {string} message - The message to validate
 * @param {string} validator - The validator string
 * @returns {boolean} Whether the message is valid according to the validator
 */
function isValidMessage(message, validator) {
  const words = message
    .replace(/[^a-zA-Z\s]/g, "")
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  if (words.length !== validator.length) {
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i][0].toLowerCase() !== validator[i].toLowerCase()) {
      return false;
    }
  }

  return true;
}
export default isValidMessage;
