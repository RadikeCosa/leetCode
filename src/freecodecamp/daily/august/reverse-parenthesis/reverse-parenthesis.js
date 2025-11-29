/**
 * FreeCodeCamp Problem: Reverse Parenthesis
 * Category: FreeCodeCamp
 *
 * @param {string} s - The input string containing nested parentheses
 * @returns {string} The decoded string with parentheses content reversed
 */
function decode(str) {
  // La pila guardará cadenas (strings) en cada nivel de paréntesis
  const stack = [];

  // Esta variable va construyendo la cadena del nivel actual
  let current = "";

  for (let char of str) {
    if (char === "(") {
      // Guardamos lo que llevamos hasta ahora en la pila
      stack.push(current);
      // Empezamos un nuevo nivel vacío
      current = "";
    } else if (char === ")") {
      // Ya terminamos este nivel: revertimos lo que hay en "current"
      current = current.split("").reverse().join("");

      // Si había algo antes de este paréntesis, lo recuperamos
      if (stack.length > 0) {
        const previous = stack.pop(); // sacamos lo de antes
        current = previous + current; // lo pegamos al inicio
      }
    } else {
      // Es una letra normal, la agregamos al nivel actual
      current += char;
    }
  }

  // Al final, "current" tiene toda la respuesta
  return current;
}
export default decode;
