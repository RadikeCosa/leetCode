/**
 * FreeCodeCamp Problem: Ipv4 Validator
 * Category: FreeCodeCamp
 *
 * @param {string} ipv4 - The IPv4 address string to validate
 * @returns {boolean} Returns true if the input is a valid IPv4 address, otherwise false
 */
function isValidIPv4(ipv4) {
  const blocks = ipv4.split(".");
  if (blocks.length !== 4) return false;
  for (const block of blocks) {
    if (!/^\d+$/.test(block)) return false; // Solo dígitos
    if (block.length > 1 && block.charAt(0) === "0") return false; // Cero a la izquierda
    const num = Number(block);
    if (num < 0 || num > 255) return false;
  }
  return true;
}

export default isValidIPv4;
