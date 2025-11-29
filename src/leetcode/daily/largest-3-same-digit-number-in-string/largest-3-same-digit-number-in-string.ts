export function largestGoodInteger(num: string): string {
  let best = "";
  for (let i = 0; i < num.length - 2; i++) {
    const a = num[i];
    if (a === num[i + 1] && a === num[i + 2]) {
      let candidate = a + a + a;
      if (candidate === "999") {
        best = "999";
        return best;
      }
      if (candidate > best) {
        best = candidate;
      }
    }
  }
  return best;
}
