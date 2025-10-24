/**
 * FreeCodeCamp Problem: 2nd Largest
 * Category: Daily
 */
function secondLargest(arr) {
  // Crear Set para eliminar duplicados
  const uniqueNumbers = [...new Set(arr)];

  // Ordenar de mayor a menor
  uniqueNumbers.sort((a, b) => b - a);

  // Retornar el segundo elemento
  return uniqueNumbers[1];
}

export default secondLargest;
