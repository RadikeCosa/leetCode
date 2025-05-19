/**
 * Valida si el string s contiene paréntesis correctamente balanceados.
 * Solo considera los caracteres: '()', '{}', '[]'.
 *
 * Estrategia:
 * Usar un stack (pila) para ir guardando los paréntesis abiertos.
 * Al encontrar un paréntesis cerrado, verificar si corresponde al último abierto.
 */
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (last !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
}
