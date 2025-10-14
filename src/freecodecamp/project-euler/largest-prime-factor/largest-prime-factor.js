/**
 * Project Euler Problem 3: Largest prime factor
 * Category: Project Euler
 * Difficulty: Medium
 * Topics: Math, Prime Numbers
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the given number?
 *
 * Example:
 * largestPrimeFactor(13195) should return 29
 * largestPrimeFactor(600851475143) should return 6857
 *
 * Constraints:
 * - The number will be a positive integer greater than 1
 * - The number can be very large (up to 600851475143)
 */
function largestPrimeFactor(number) {
  // Optimización: Primero eliminamos todos los factores de 2
  // El 2 es el único número primo par, así podemos trabajar solo con impares después
  while (number % 2 === 0) {
    number = Math.floor(number / 2);
  }

  // Si después de dividir por 2 el número es 1, significa que era una potencia de 2
  // En este caso, el factor primo más grande es 2
  if (number === 1) return 2;

  // Para números impares, buscamos el factor primo más grande
  // Inicializamos con 1, pero se actualizará con cada factor encontrado
  let largest = 1;

  // Solo necesitamos verificar hasta la raíz cuadrada del número
  // Usamos i*i <= number para evitar calcular Math.sqrt() en cada iteración
  for (let i = 3; i * i <= number; i += 2) {
    // Mientras i divida al número, lo usamos como factor
    while (number % i === 0) {
      largest = i; // Actualizamos el factor más grande encontrado
      number = Math.floor(number / i);
    }
  }

  // Si queda un número > 1 después del bucle, significa que es un factor primo
  // Este sería el factor primo más grande (caso de números primos grandes)
  if (number > 1) {
    largest = number;
  }

  return largest;
}

module.exports = largestPrimeFactor;
