export function isPowerOfTwo(n) {
    if (n > 0 && (n & (n - 1)) === 0)
        return true;
    // TODO: Implement efficient power-of-two check.
    // Think about edge cases: negative numbers, zero, large numbers.
    return false;
}
