/**
 * FreeCodeCamp Problem: Signature Validation
 * Category: Daily
 *
 * @description
 * Validates a signature based on character values where:
 * - a-z have values 1-26
 * - A-Z have the same values as their lowercase counterparts
 * - Non-alphabetic characters have value 0
 *
 * @example
 * verify("foo", "bar", 57) // true
 * // Because:
 * // f(6) + o(15) + o(15) = 36
 * // b(2) + a(1) + r(18) = 21
 * // 36 + 21 = 57
 *
 * @complexity
 * Time: O(n + m) where n and m are the lengths of message and key
 * Space: O(1) as we only use primitive variables
 */

function verify(message, key, signature) {
  // Función para obtener el valor de un carácter
  function getCharValue(char) {
    const code = char.charCodeAt(0);

    // Convertir mayúsculas a minúsculas
    const lowerChar = char.toLowerCase();
    const lowerCode = lowerChar.charCodeAt(0);

    // Letras a-z: valores 1-26
    if (lowerCode >= 97 && lowerCode <= 122) {
      return lowerCode - 96;
    }

    // Cualquier otro carácter: valor 0
    return 0;
  }

  // Función para calcular la suma de los valores de dos cadenas
  function calculateSignature(msg, secret) {
    let sum = 0;

    // Sumamos los valores de los caracteres del mensaje
    for (const char of msg) {
      const value = getCharValue(char);
      console.log(`Char: ${char}, Value: ${value}`);
      sum += value;
    }

    // Sumamos los valores de los caracteres de la clave
    for (const char of secret) {
      const value = getCharValue(char);
      console.log(`Char: ${char}, Value: ${value}`);
      sum += value;
    }

    console.log("Total sum:", sum);
    return sum;
  } // Calculamos la firma y la comparamos con la proporcionada
  const calculatedSignature = calculateSignature(message, key);
  return calculatedSignature === signature;
}

export default verify;
