# Intuition

This problem involves detecting exoplanets through luminosity readings represented as characters. The key insight is that we need to convert character readings to numerical values, calculate the average luminosity, and check if any reading falls below 80% of that average. Since we're looking for any reading that meets this condition, we can optimize by tracking the minimum value during a single pass.

# Approach

The solution uses a single linear pass through the input string with these steps:

1. **Character to Value Conversion**: Use a unified ASCII formula to convert characters to numerical values:

   - Unified formula: `char.charCodeAt(0) - (char >= 'A' ? 55 : 48)`
   - This handles both digits (0-9) and letters (A-Z) without conditional branches

2. **Single Pass Calculation**: In one loop, simultaneously:

   - Calculate the sum of all readings
   - Track the minimum reading value

3. **Threshold Calculation**: Compute average and 80% threshold

4. **Final Check**: Return whether minimum value ≤ threshold

This approach works because if the minimum value doesn't meet the condition, no other value will.

# Complexity

- **Time complexity**: O(n) - Single linear pass through all characters
- **Space complexity**: O(1) - Only scalar variables, no additional data structures

# Code

```javascript
function hasExoplanet(readings) {
  if (readings.length === 0) return false;

  /**
   * Converts a luminosity character to its numerical value using unified ASCII formula
   * @param {string} char - Character (0-9 or A-Z)
   * @returns {number} Numerical value (0-9 for digits, 10-35 for letters)
   */
  const charToValue = (char) => {
    // Unified ASCII formula: handles digits and letters without conditionals
    // Digits (0-9): charCode - 48, Letters (A-Z): charCode - 55
    return char.charCodeAt(0) - (char >= "A" ? 55 : 48);
  };

  // Single pass: calculate sum and find minimum
  let total = 0;
  let minValue = Infinity;

  for (let i = 0; i < readings.length; i++) {
    const value = charToValue(readings[i]);
    total += value;
    if (value < minValue) minValue = value;
  }

  // Calculate threshold and check condition
  const average = total / readings.length;
  const threshold = average * 0.8;

  return minValue <= threshold;
}

export default hasExoplanet;
```

# Notes

- **Edge Cases**: Handles empty strings, single characters, and boundary values (0-35)
- **Unified ASCII Formula**: Single expression handles both digits and letters without conditionals, improving readability and performance
- **Space Efficiency**: Avoids storing all values in an array by tracking only sum and minimum
- **Alternative Approaches**: Considered using `parseInt(char, 36)`, but ASCII formula is more explicit and educational
- **Variable Naming**: `minValue` clearly indicates we're tracking the minimum, `threshold` represents the 80% boundary
- **Type Safety**: Function handles all valid input characters as specified in the problem
