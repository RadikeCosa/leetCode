export function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let reverse = 0;
  let num = x;

  while (num !== 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reverse === x;
}
