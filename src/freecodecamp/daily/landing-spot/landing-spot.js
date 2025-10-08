/**
 * FreeCodeCamp Problem: Landing Spot
 * Category: Daily
 * Difficulty: Medium
 * Topics: Matrix, Array, Search
 *
 * Given a matrix of numbers (array of arrays), representing potential landing spots for your rover.
 * Find the safest landing spot based on the following rules:
 * - Each spot in the matrix will contain a number from 0-9, inclusive.
 * - Any 0 represents a potential landing spot.
 * - Any number other than 0 is too dangerous to land. The higher the number, the more dangerous.
 * - The safest spot is defined as the 0 cell whose surrounding cells (up to 4 neighbors, ignore diagonals) have the lowest total danger.
 * - Ignore out-of-bounds neighbors (corners and edges just have fewer neighbors).
 * - Return the indices of the safest landing spot. There will always only be one safest spot.
 *
 * Time Complexity: O(n*m) - scan all cells
 * Space Complexity: O(1) - constant extra space
 */

// Suma los valores de los vecinos directos (arriba, abajo, izquierda, derecha) de una celda
function sumarVecinos(matrix, fila, columna) {
  let suma = 0;
  // Arriba
  if (fila > 0) suma += matrix[fila - 1][columna];
  // Abajo
  if (fila < matrix.length - 1) suma += matrix[fila + 1][columna];
  // Izquierda
  if (columna > 0) suma += matrix[fila][columna - 1];
  // Derecha
  if (columna < matrix[0].length - 1) suma += matrix[fila][columna + 1];
  return suma;
}

/**
 * Busca el lugar más seguro para aterrizar el rover en la matriz.
 * Recorre todas las posiciones, calcula la suma de peligros de los vecinos para cada cero,
 * y retorna la posición con menor suma.
 */
function findLandingSpot(matrix) {
  function sumarVecinos(matrix, fila, columna) {
    let suma = 0;
    // Arriba
    if (fila > 0) suma += matrix[fila - 1][columna];
    // Abajo
    if (fila < matrix.length - 1) suma += matrix[fila + 1][columna];
    // Izquierda
    if (columna > 0) suma += matrix[fila][columna - 1];
    // Derecha
    if (columna < matrix[0].length - 1) suma += matrix[fila][columna + 1];
    return suma;
  }

  const cols = matrix[0].length; // Número de columnas
  let minSuma = Infinity; // Suma mínima encontrada
  let mejorPos = [-1, -1]; // Posición del lugar más seguro

  // Recorremos toda la matriz
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < cols; j++) {
      // Solo consideramos los ceros (posibles lugares de aterrizaje)
      if (matrix[i][j] === 0) {
        // Calculamos la suma de peligros de los vecinos
        const suma = sumarVecinos(matrix, i, j);
        // Si es la suma más baja hasta ahora, actualizamos la mejor posición
        if (suma < minSuma) {
          minSuma = suma;
          mejorPos = [i, j];
        }
      }
    }
  }
  // Retornamos la posición del lugar más seguro
  return mejorPos;
}

module.exports = findLandingSpot;
