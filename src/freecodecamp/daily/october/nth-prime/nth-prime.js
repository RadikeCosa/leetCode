/**
 * FreeCodeCamp Problem: Nth Prime
 * Category: Daily
 *
 * Encuentra el n-ésimo número primo usando una estrategia optimizada pero legible:
 * 1. Caché de primeros primos para casos base
 * 2. Verificación solo contra primos ya encontrados
 * 3. Solo verifica números impares
 * 4. Optimización con raíz cuadrada
 */
function nthPrime(n) {
  // Casos especiales y caché inicial de primos conocidos
  if (n < 1) return null;
  const smallPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  if (n <= 10) return smallPrimes[n - 1];

  // Inicializamos nuestra lista con los primos conocidos
  const primes = [...smallPrimes];

  // Empezamos a buscar desde el siguiente número impar
  let num = primes[primes.length - 1] + 2;

  // Función optimizada que solo verifica divisibilidad por primos ya encontrados
  function isPrime(num) {
    const sqrt = Math.sqrt(num);
    // Solo necesitamos verificar hasta la raíz cuadrada del número
    for (let i = 0; primes[i] <= sqrt; i++) {
      if (num % primes[i] === 0) return false;
    }
    return true;
  }

  // Buscamos primos hasta encontrar el n-ésimo
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num += 2; // Solo verificamos números impares
  }

  return primes[n - 1];
}
export default nthPrime;
