/**
 * Aplica operaciones aritméticas secuencialmente de izquierda a derecha sobre un arreglo de números,
 * ignorando la precedencia estándar de operadores. Repite los operadores según sea necesario hasta
 * consumir todos los números.
 *
 * @param {number[]} numbers - Arreglo de números enteros a evaluar.
 * @param {string[]} operators - Arreglo de operadores aritméticos ('+', '-', '*', '/', '%') que se aplican en orden y se repiten si es necesario.
 * @returns {number} El resultado final de aplicar las operaciones secuencialmente de izquierda a derecha.
 *
 * @example
 * // 1 + 2 * 3 + 4 * 5 (de izquierda a derecha, sin precedencia)
 * evaluate([1, 2, 3, 4, 5], ['+', '*']); // retorna 25
 */
function evaluate(numbers, operators) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const op = operators[(i - 1) % operators.length];
    const num = numbers[i];
    switch (op) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "*":
        result *= num;
        break;
      case "/":
        result = Math.trunc(result / num);
        break;
      case "%":
        result %= num;
        break;
    }
  }
  return result;
}
export default evaluate;
