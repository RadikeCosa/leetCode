/**
 * Leetcode 39 - Combination Sum
 *
 * Dado un array de enteros positivos `candidates` (sin duplicados) y un entero `target`,
 * devolvé todas las combinaciones de números en `candidates` que suman exactamente `target`.
 *
 * - Podés usar el mismo número las veces que quieras.
 * - El orden dentro de cada combinación no importa.
 * - Las combinaciones deben ser únicas (sin permutaciones repetidas).
 *
 * Ejemplo:
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3], [7]]
 */

export function combinationSum(
  candidates: number[],
  target: number,
  debug: boolean = false
): number[][] {
  const result: number[][] = [];

  candidates.sort((a, b) => a - b);

  function backtrack(
    start: number,
    current: number[],
    remaining: number
  ): void {
    if (debug) {
      console.log(
        `🔁 backtrack(start=${start}, current=[${current.join(
          ","
        )}], remaining=${remaining})`
      );
    }

    if (remaining === 0) {
      if (debug) console.log(`✅ combinación válida: [${current.join(",")}]\n`);
      result.push([...current]);
      return;
    }

    if (remaining < 0) {
      if (debug)
        console.log(
          `⛔ combinación inválida (se pasó): [${current.join(",")}]\n`
        );
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (debug) console.log(`➡️  pruebo agregar ${candidate}`);
      current.push(candidate);
      backtrack(i, current, remaining - candidate);
      if (debug) console.log(`⬅️  saco ${candidate} (backtrack)`);
      current.pop();
    }
  }

  backtrack(0, [], target);
  return result;
}
