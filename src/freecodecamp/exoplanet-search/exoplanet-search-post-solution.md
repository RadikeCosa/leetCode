# Intuition

This problem involves detecting exoplanets through luminosity readings represented as characters. The key insight is that we need to convert character readings to numerical values, calculate the average luminosity, and check if any reading falls below 80% of that average. Since we're looking for any reading that meets this condition, we can optimize by tracking the minimum value during a single pass.

# Approach

The solution uses a single linear pass through the input string with these steps:

1. **Character to Value Conversion**: Use ASCII math to convert characters to numerical values:

   - Digits 0-9: `char.charCodeAt(0) - '0'.charCodeAt(0)`
   - Letters A-Z: `char.charCodeAt(0) - 'A'.charCodeAt(0) + 10`

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
   * Converts a luminosity character to its numerical value
   * @param {string} char - Character (0-9 or A-Z)
   * @returns {number} Numerical value (0-9 for digits, 10-35 for letters)
   */
  const charToValue = (char) => {
    if (char >= "0" && char <= "9") {
      return char.charCodeAt(0) - "0".charCodeAt(0);
    } else {
      return char.charCodeAt(0) - "A".charCodeAt(0) + 10;
    }
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
- **ASCII Optimization**: Uses character codes for O(1) character-to-number conversion
- **Space Efficiency**: Avoids storing all values in an array by tracking only sum and minimum
- **Alternative Approaches**: Considered using `map()` and `reduce()`, but single loop is more efficient
- **Variable Naming**: `minValue` clearly indicates we're tracking the minimum, `threshold` represents the 80% boundary
- **Type Safety**: Function handles all valid input characters as specified in the problem
