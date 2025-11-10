/**
 * Busca una palabra en una matriz bidimensional de letras.
 * Retorna las posiciones de inicio y fin si la palabra se encuentra en línea recta.
 *
 * @param {string[][]} matriz - Matriz de letras minúsculas.
 * @param {string} palabra - Palabra a buscar.
 * @returns {Array<Array<number>> | null} Posiciones de inicio y fin, o null si no se encuentra.
 */
export default function findWord(matriz, palabra) {
  // Definir las 4 direcciones posibles: derecha, izquierda, abajo y arriba
  const direcciones = [
    [0, 1], // derecha (misma fila, columna siguiente)
    [0, -1], // izquierda (misma fila, columna anterior)
    [1, 0], // abajo (fila siguiente, misma columna)
    [-1, 0], // arriba (fila anterior, misma columna)
  ];

  /**
   * Verifica si la palabra existe desde una posición inicial en una dirección dada.
   * @param {number} filaInicio - Fila inicial.
   * @param {number} colInicio - Columna inicial.
   * @param {number} deltaFila - Desplazamiento de fila por paso.
   * @param {number} deltaCol - Desplazamiento de columna por paso.
   * @returns {boolean} True si la palabra se encuentra en esa dirección.
   */
  function verificarDireccion(filaInicio, colInicio, deltaFila, deltaCol) {
    let fila = filaInicio;
    let col = colInicio;

    // Verificar cada letra de la palabra
    for (let i = 0; i < palabra.length; i++) {
      // Comprobar límites de la matriz
      if (
        fila < 0 ||
        fila >= matriz.length ||
        col < 0 ||
        col >= matriz[0].length
      ) {
        return false;
      }

      // Comprobar si la letra coincide
      if (matriz[fila][col] !== palabra[i]) {
        return false;
      }

      // Avanzar en la dirección indicada
      fila += deltaFila;
      col += deltaCol;
    }

    return true;
  }

  // Recorrer toda la matriz para buscar la primera letra de la palabra
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      // Si la celda coincide con la primera letra
      if (matriz[i][j] === palabra[0]) {
        // Probar cada una de las 4 direcciones
        for (const [deltaFila, deltaCol] of direcciones) {
          if (verificarDireccion(i, j, deltaFila, deltaCol)) {
            // Calcular la posición final
            const filaFin = i + deltaFila * (palabra.length - 1);
            const colFin = j + deltaCol * (palabra.length - 1);

            // Retornar las posiciones de inicio y fin
            return [
              [i, j],
              [filaFin, colFin],
            ];
          }
        }
      }
    }
  }

  // Si no se encuentra la palabra, retornar null
  return null;
}
