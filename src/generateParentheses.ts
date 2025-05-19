/**
 * Leetcode 22 - Generate Parentheses
 *
 * Dado un entero `n`, generá todas las combinaciones válidas posibles de `n` pares de paréntesis.
 *
 * Cada combinación debe ser válida (los paréntesis deben cerrarse correctamente).
 *
 * Ejemplo:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 */

export function generateParenthesis(
  n: number,
  debug: boolean = false
): string[] {
  const result: string[] = [];

  function backtrack(current: string, open: number, close: number): void {
    if (debug) {
      console.log(`🔁 backtrack("${current}", open=${open}, close=${close})`);
    }

    if (current.length === 2 * n) {
      if (debug) console.log(`✅ combinación completa: "${current}"\n`);
      result.push(current);
      return;
    }

    if (open < n) {
      if (debug) console.log(`➡️  agrego '(': "${current}("`);
      backtrack(current + "(", open + 1, close);
    }

    if (close < open) {
      if (debug) console.log(`➡️  agrego ')': "${current})"`);
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}
