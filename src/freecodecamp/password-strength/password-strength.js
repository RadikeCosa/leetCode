/**
 * FreeCodeCamp Problem: P@ssw0rd Str3ngth!
 * Difficulty: Easy
 * Topics: String, Validation
 *
 * Given a password string, return "weak", "medium", or "strong" based on the strength of the password.
 *
 * A password is evaluated according to the following rules:
 *
 * It is at least 8 characters long.
 * It contains both uppercase and lowercase letters.
 * It contains at least one number.
 * It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
 * Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.
 *
 * Time Complexity: O(n) - Single pass through the string for regex matching
 * Space Complexity: O(1) - Constant space, only using primitive variables
 */
function checkStrength(password) {
  // Constantes para expresiones regulares (mejor mantenibilidad)
  const HAS_UPPERCASE = /[A-Z]/;
  const HAS_LOWERCASE = /[a-z]/;
  const HAS_NUMBER = /[0-9]/;
  const HAS_SPECIAL = /[!@#$%^&*]/;

  // Contar criterios cumplidos directamente (más eficiente)
  let criteriaMet = 0;

  // Regla 1: Al menos 8 caracteres
  if (password.length >= 8) criteriaMet++;

  // Regla 2: Contiene mayúsculas Y minúsculas
  if (HAS_UPPERCASE.test(password) && HAS_LOWERCASE.test(password))
    criteriaMet++;

  // Regla 3: Contiene al menos un número
  if (HAS_NUMBER.test(password)) criteriaMet++;

  // Regla 4: Contiene al menos un carácter especial
  if (HAS_SPECIAL.test(password)) criteriaMet++;

  // Determinar fortaleza basada en criterios cumplidos
  if (criteriaMet < 2) return "weak";
  if (criteriaMet < 4) return "medium";
  return "strong";
}

export default checkStrength;
