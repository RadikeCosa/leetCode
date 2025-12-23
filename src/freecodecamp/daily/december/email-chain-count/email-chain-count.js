/**
 * FreeCodeCamp Problem: Email Chain Count
 * Category: FreeCodeCamp
 *
 * @param {any} param - TODO: Define parameter and description
 * @returns {any} TODO: Define return type and description
 */
function emailChainCount(subject) {
  // Expresión regular para encontrar los prefijos
  const regex = /(FWD:|FW:|RE:)/gi;
  // Buscar todas las coincidencias y almacenarlas en la variable matches
  const matches = subject.match(regex);
  // devolver el conteo de coincidencias, o 0 si no hay ninguna
  return matches ? matches.length : 0;
}

export default emailChainCount;
