/**
 * Dada una cantidad entera entre 1 y 3999, convertirla a su equivalente en números romanos.
 *
 * Reglas:
 * - Los símbolos romanos válidos son: I (1), V (5), X (10), L (50), C (100), D (500), M (1000)
 * - Se usan formas sustractivas para los valores: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD), 900 (CM)
 * - Los símbolos se ordenan de mayor a menor, y solo I, X, C y M pueden repetirse hasta 3 veces.
 *
 * Ejemplos:
 * intToRoman(3) => "III"
 * intToRoman(58) => "LVIII"
 * intToRoman(1994) => "MCMXCIV"
 */

export function intToRoman(num: number): string {
  const valMap: { value: number; symbol: string }[] = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (const { value, symbol } of valMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
