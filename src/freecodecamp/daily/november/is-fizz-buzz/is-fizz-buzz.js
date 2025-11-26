/**
 * Determina si una secuencia corresponde al patrón clásico de Fizz Buzz.
 *
 * En Fizz Buzz, para cada número en la secuencia:
 * - Si es divisible por 3, se espera "Fizz"
 * - Si es divisible por 5, se espera "Buzz"
 * - Si es divisible por ambos, se espera "FizzBuzz"
 * - Si no es divisible por ninguno, se espera el número
 *
 * @param {Array<string|number>} sequence - Secuencia de valores (números y/o strings) a verificar.
 * @returns {boolean} True si la secuencia sigue el patrón Fizz Buzz, false en caso contrario.
 */
function isFizzBuzz(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    const num = i + 1;
    let expected;

    if (num % 3 === 0 && num % 5 === 0) {
      expected = "FizzBuzz";
    } else if (num % 3 === 0) {
      expected = "Fizz";
    } else if (num % 5 === 0) {
      expected = "Buzz";
    } else {
      expected = num;
    }

    if (sequence[i] !== expected) {
      return false;
    }
  }

  return true;
}

export default isFizzBuzz;
