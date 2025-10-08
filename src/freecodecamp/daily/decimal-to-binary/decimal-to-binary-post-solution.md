# Intuition

The problem requires converting a decimal number to its binary representation. Binary numbers use only 0s and 1s, and the conversion involves repeatedly dividing by 2 and tracking remainders.

# Approach

I'll use an iterative approach that builds the binary string by:

1. Handling the special case of 0
2. Using a loop to repeatedly divide by 2 and prepend remainders
3. Building the string from left to right (MSB to LSB)

# Complexity

- **Time complexity**: O(log n) - number of divisions needed
- **Space complexity**: O(log n) - space for the result string

# Code

```javascript
function toBinary(decimal) {
  if (decimal === 0) return "0";

  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}
```

# Notes

- Handles edge case of 0 correctly
- Uses string concatenation for simplicity and readability
- Could be optimized with array approach if performance is critical
- Input validation could be added but not necessary given constraints
