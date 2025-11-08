/**
 * FreeCodeCamp Problem: Character Limit
 * Category: Daily (November)
 */
function canPost(message) {
  // Calculamos la longitud una sola vez para mejor legibilidad
  const length = message.length;

  // Operador ternario anidado: evaluación de izquierda a derecha
  return length <= 40
    ? "short post"
    : length <= 80
    ? "long post"
    : "invalid post";
}

export default canPost;
