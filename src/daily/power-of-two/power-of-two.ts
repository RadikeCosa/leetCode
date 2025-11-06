export function isPowerOfTwo(n: number): boolean {
  if (n > 0 && (n & (n - 1)) === 0) return true;

  return false;
}
