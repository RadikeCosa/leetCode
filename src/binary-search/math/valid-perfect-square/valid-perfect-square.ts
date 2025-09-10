/**
 * LeetCode Problem 367: Valid Perfect Square
 * Difficulty: Easy
 * Topics: Math, Binary Search
 *
 * Given a positive integer num, return true if num is a perfect square or false otherwise.
 * A perfect square is an integer that is the square of an integer. In other words,
 * it is the product of some integer with itself.
 * You must not use any built-in library function, such as sqrt.
 *
 * Time Complexity: O(log n) - binary search on reduced range [1, num/2+1]
 * Space Complexity: O(1) - only uses constant extra space for variables
 */

/*
// SOLUCIÓN "FÁCIL" USANDO sqrt (NO PERMITIDA):
export function isPerfectSquare(num: number): boolean {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

// Explicación de la solución prohibida:
// 1. Math.sqrt(num) calcula la raíz cuadrada
// 2. Math.floor(sqrt) redondea hacia abajo al entero más cercano
// 3. Si sqrt === Math.floor(sqrt), significa que sqrt es un entero
// 4. Si la raíz es un entero, entonces num es un cuadrado perfecto
// 
// Ejemplos:
// - Math.sqrt(16) = 4.0 → 4.0 === Math.floor(4.0) = 4 → true
// - Math.sqrt(14) = 3.742... → 3.742... !== Math.floor(3.742...) = 3 → false
//
// ¿Por qué está prohibida? 
// - El problema quiere que implementemos la lógica nosotros mismos
// - Es una forma de practicar binary search y matemáticas
// - Math.sqrt() puede tener problemas de precisión con números muy grandes
*/

export function isPerfectSquare(num: number): boolean {
  // Early returns para casos triviales
  if (num === 1) return true; // 1² = 1
  if (num < 4) return false; // 2 y 3 no son cuadrados perfectos

  // Optimización: para num > 4, la raíz cuadrada siempre es <= num/2
  // Esto reduce el espacio de búsqueda aproximadamente a la mitad
  let left = 1;
  let right = Math.floor(num / 2) + 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Protección contra overflow: evitar calcular mid * mid si es muy grande
    if (mid > num / mid) {
      right = mid - 1;
      continue;
    }

    const square = mid * mid;

    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
