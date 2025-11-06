/**
 * FreeCodeCamp Problem: Unnatural Prime
 * Category: Daily August
 *
 * Determine if a number is a prime number or a negative prime number.
 * - Prime: positive integer > 1 divisible only by 1 and itself
 * - Negative prime: negative of a positive prime
 * - 1, 0, -1 are not prime
 *
 * @param {number} n - The number to check
 * @return {boolean} - True if prime or negative prime, false otherwise
 */
function isUnnaturalPrime(n) {
  // Casos especiales: 0, 1, -1 no son primos
  if (Math.abs(n) <= 1) {
    return false;
  }

  // Verificar si el valor absoluto es primo
  return isPrime(Math.abs(n));
}

// Función helper para verificar si un número positivo es primo
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Chequear divisores desde 5 hasta sqrt(num), saltando pares
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

export default isUnnaturalPrime;
