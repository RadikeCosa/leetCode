export function romanToInt(s: string): number {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    // Si el valor actual es menor que el siguiente, hay que restarlo (casos como IV, IX, etc.)
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}
