/**
 * FreeCodeCamp Problem: Symmetric Difference
 * Category: Daily
 * Difficulty: Medium
 * Topics: Array, Set, Math
 *
 * Given two or more arrays, return an array of the symmetric difference of the provided arrays.
 * The symmetric difference of two sets is the set of elements that are in either of the sets, but not in both.
 *
 * Time Complexity: O(n) - n is the total number of elements in all arrays
 * Space Complexity: O(n) - result array and intermediate sets
 */
/**
 * Calcula la diferencia simétrica entre dos conjuntos (sets).
 * La diferencia simétrica es el conjunto de elementos que están en uno u otro, pero no en ambos.
 * Ejemplo:
 * setA = {1, 2, 3}, setB = {2, 3, 4} => resultado = {1, 4}
 */

export function symmetricDifference(arr1, arr2) {
  /**
   * Calcula la diferencia simétrica entre dos conjuntos (sets).
   * La diferencia simétrica es el conjunto de elementos que están en uno u otro, pero no en ambos.
   * Ejemplo:
   * setA = {1, 2, 3}, setB = {2, 3, 4} => resultado = {1, 4}
   */
  function symDiff(setA, setB) {
    // Elementos que están solo en setA
    const soloA = [...setA].filter((x) => !setB.has(x));
    // Elementos que están solo en setB
    const soloB = [...setB].filter((x) => !setA.has(x));
    // Unimos ambos arrays y convertimos a Set para unicidad
    const resultado = new Set([...soloA, ...soloB]);
    // Retornamos el set con la diferencia simétrica
    return resultado;
  }

  // Paso 1: Convertir cada array en un Set para eliminar duplicados
  // Esto asegura que cada conjunto tenga solo valores únicos
  const sets = args.map((arr) => new Set(arr));

  // Paso 2: Aplicar la diferencia simétrica de forma iterativa
  // Comenzamos con el primer set y vamos combinando con los siguientes
  let resultado = sets[0];
  for (let i = 1; i < sets.length; i++) {
    // En cada iteración, calculamos la diferencia simétrica entre el acumulado y el siguiente set
    resultado = symDiff(resultado, sets[i]);
  }

  // Paso 3: Convertimos el set final a array y lo ordenamos
  return Array.from(resultado).sort((a, b) => a - b);
}
