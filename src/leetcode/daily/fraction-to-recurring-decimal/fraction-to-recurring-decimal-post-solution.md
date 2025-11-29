# Intuition

When I first saw this problem, I realized it's essentially **simulating long division** - the same process we learned in elementary school. The key insight is that **when a remainder repeats, the decimal digits will start repeating too**. This means we need to track which remainders we've seen and at what position they occurred.

# Approach

The algorithm follows these main steps:

1. **Handle exact divisions**: If there's no remainder, return the result directly
2. **Handle signs**: Use XOR logic to determine if result should be negative  
3. **Separate integer and decimal parts**: Get integer part and initial remainder
4. **Simulate long division**: 
   - Use a HashMap to track `remainder → position` in decimal array
   - For each remainder: multiply by 10, divide by denominator, get next digit
   - If we see a remainder we've seen before, insert parentheses around the repeating part
5. **Build final result**: Combine sign + integer + decimal parts

The key data structures:
- **Array for digits**: More intuitive than string manipulation for inserting parentheses
- **HashMap for cycle detection**: Maps each remainder to its first occurrence position

# Complexity

- **Time complexity**: O(d) where d is the number of unique digits before repetition starts. In worst case, d can be up to the value of denominator.
- **Space complexity**: O(d) for the HashMap storing remainder positions and the digits array.

# Code

```typescript
export function fractionToDecimal(numerator: number, denominator: number): string {
  // Handle exact division
  if (numerator % denominator === 0) {
    return (numerator / denominator).toString();
  }
  
  // Determine sign using XOR logic
  const isNegative = numerator < 0 !== denominator < 0;
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  
  const integerPart = Math.floor(numerator / denominator);
  let remainder = numerator % denominator;

  // Array to build decimal digits
  const digits: string[] = [];
  const remainderMap = new Map<number, number>();

  while (remainder !== 0) {
    if (remainderMap.has(remainder)) {
      // Repetition detected! Insert parentheses
      const repeatIndex = remainderMap.get(remainder)!;
      digits.splice(repeatIndex, 0, "(");
      digits.push(")");
      break;
    }

    // Save current position before adding digit
    remainderMap.set(remainder, digits.length);

    // Simulate long division
    remainder *= 10;
    const nextDigit = Math.floor(remainder / denominator);
    digits.push(nextDigit.toString());
    remainder %= denominator;
  }

  // Build final result
  const decimalPart = digits.join("");
  return (isNegative ? "-" : "") + integerPart + (decimalPart ? "." + decimalPart : "");
}
```

# Notes

- **XOR for sign handling**: `(numerator < 0) !== (denominator < 0)` elegantly handles all sign combinations
- **Array vs string**: Using an array for digits makes parentheses insertion much clearer than string slicing
- **Edge cases handled**: Zero numerator, negative combinations, exact divisions, immediate vs delayed repetitions
- **HashMap key insight**: The moment a remainder repeats, we know exactly where the repetition started
- **Long division simulation**: `remainder *= 10` mimics "bringing down a zero" in manual long division
