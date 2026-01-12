/**
* FreeCodeCamp Problem: Circular Prime
 * Category: FreeCodeCamp
  
* Determina si un número es un primo circular.
 * Un primo circular es aquel que sigue siendo primo al rotar sus dígitos en cualquier posición.
 * Por ejemplo, 197 es primo circular porque 197, 971 y 719 son todos primos.
 *
 * @param {number} n - Número a verificar
 * @returns {boolean} True si es primo circular, false en caso contrario
 */
function isCircularPrime(n) {
  // Función auxiliar para verificar si un número es primo
  const isPrime = (num) => {
    if (num < 2) return false; // Los números menores a 2 no son primos
    // Solo es necesario verificar hasta la raíz cuadrada de num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // Si es divisible, no es primo
    }
    return true;
  };

  // Función auxiliar para rotar los dígitos de un número hacia la izquierda
  // Ejemplo: 197 -> 971
  const rotateNumber = (num) => {
    const strNum = num.toString();
    // Toma todos los dígitos excepto el primero y lo concatena al final
    return parseInt(strNum.slice(1) + strNum[0], 10);
  };

  let rotated = n;
  // Recorre todas las rotaciones posibles del número
  do {
    if (!isPrime(rotated)) return false; // Si alguna rotación no es prima, retorna false
    rotated = rotateNumber(rotated); // Rota el número para la siguiente iteración
  } while (rotated !== n); // Termina cuando vuelve a la rotación original

  return true; // Si todas las rotaciones son primas, retorna true
}
export default isCircularPrime;
