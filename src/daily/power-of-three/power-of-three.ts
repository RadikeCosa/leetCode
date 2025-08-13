export function isPowerOfThree(n: number): boolean {
  // Caso base para números inválidos
  if (n <= 0) return false;

  // El número mágico
  const maxPowerOfThree = Math.pow(3, 19); // 3^19 es el mayor poder de 3 dentro del rango de 32 bits

  // La condición mágica
  return maxPowerOfThree % n === 0;
}

/* export function isPowerOfThree(n: number): boolean {
  // Enfoque: División iterativa
  // Si n es potencia de 3, podemos dividir entre 3 repetidamente hasta llegar a 1

  // Casos base obvios
  if (n <= 0) return false; // Números negativos y cero no son potencias de 3
  if (n === 1) return true; // 3^0 = 1

  // Dividir repetidamente entre 3
  while (n > 1) {
    if (n % 3 !== 0) {
      return false; // Si no es divisible por 3, no es potencia de 3
    }
    n = n / 3;
  }

  return true; // Si llegamos hasta aquí, llegamos a 1
}
 */
