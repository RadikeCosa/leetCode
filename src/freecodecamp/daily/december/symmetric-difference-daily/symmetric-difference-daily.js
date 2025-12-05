/**
 * FreeCodeCamp Problem: Symmetric Difference Daily
 * Category: FreeCodeCamp
 *
 * @param {any} param - TODO: Define parameter and description
 * @returns {any} TODO: Define return type and description
 */
function sym(arrA, arrB) {
  // Paso 1: Convertir a Sets (elimina duplicados)
  const setA = new Set(arrA);
  const setB = new Set(arrB);

  // Paso 2: Elementos de A que NO están en B
  const onlyInA = [...setA].filter((x) => !setB.has(x));

  // Paso 3: Elementos de B que NO están en A
  const onlyInB = [...setB].filter((x) => !setA.has(x));

  // Paso 4: Combinar ambos resultados
  return [...onlyInA, ...onlyInB];
}

export default sym;
