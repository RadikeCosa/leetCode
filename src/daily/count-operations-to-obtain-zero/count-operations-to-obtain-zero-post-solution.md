# Count Operations to Obtain Zero

## Intuition

Repeated subtraction until one number becomes zero can be accelerated by grouping repeated subtractions: when a >= b, subtract b from a as many times as fits (a // b) and use the remainder (a % b). This mirrors the Euclidean algorithm for gcd.

## Approach

- Use a loop while both numbers are > 0.
- Add the integer quotient to the operation count and replace the larger number with its remainder.
- Repeat until one number is zero; return the accumulated count.

## Complexity

- Time: O(log(min(num1, num2))) amortized with the division-based approach.
- Space: O(1).
