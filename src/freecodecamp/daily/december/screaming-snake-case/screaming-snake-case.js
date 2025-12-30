/**
 * FreeCodeCamp Problem: Screaming Snake Case
 * Category: FreeCodeCamp
 *
 * @param {string} variableName - The variable name to convert
 * @returns {string} The variable name converted to SCREAMING_SNAKE_CASE
 */
function toScreamingSnakeCase(variableName) {
  // Paso 1: Normalizar camelCase/PascalCase insertando guiones bajos antes de mayúsculas
  // Ejemplo: "userEmail" → "user_Email"
  const withUnderscores = variableName.replace(/([a-z])([A-Z])/g, "$1_$2");

  // Paso 2: Convertir kebab-case a snake_case reemplazando guiones medios
  // Ejemplo: "user-address" → "user_address"
  const normalized = withUnderscores.replace(/-/g, "_");

  // Paso 3: Dividir por guiones bajos para obtener palabras individuales
  const words = normalized.split("_");

  // Paso 4: Convertir cada palabra a mayúsculas y unir con guiones bajos
  // Ejemplo: ["user", "Email"] → "USER_EMAIL"
  const screamingSnakeCase = words.map((word) => word.toUpperCase()).join("_");

  return screamingSnakeCase;
}

export default toScreamingSnakeCase;
