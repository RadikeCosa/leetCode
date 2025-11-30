/**
 * FreeCodeCamp Problem: Ai Detector
 * Category: FreeCodeCamp
 *
 * Analiza un texto y determina si fue generado por IA según tres reglas:
 * - Dos o más guiones (-)
 * - Dos o más conjuntos de paréntesis (())
 * - Tres o más palabras con 7 o más letras
 *
 * @param {string} text - Texto a analizar
 * @returns {string} "AI" si cumple alguna regla, "Human" si no cumple ninguna
 */
function detectAI(text) {
  // Regla 1: Contar guiones
  const dashCount = (text.match(/-/g) || []).length;
  if (dashCount >= 2) return "AI";

  // Regla 2: Contar conjuntos de paréntesis
  const parenCount = (text.match(/\([^)]+\)/g) || []).length;
  if (parenCount >= 2) return "AI";

  // Regla 3: Contar palabras largas (7+ letras)
  // Eliminar signos de puntuación y dividir en palabras
  const words = text.match(/\b[a-zA-Z]{7,}\b/g) || [];
  if (words.length >= 3) return "AI";

  // Si no cumple ninguna regla, es "Human"
  return "Human";
}

export default detectAI;
