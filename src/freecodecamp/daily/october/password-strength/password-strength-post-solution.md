# Intuition

Password strength validation is a common requirement in authentication systems. This problem requires implementing a multi-criteria evaluation system where we check several independent conditions and map the count of satisfied conditions to strength categories.

The key insight is that each validation rule is independent, so we can evaluate them separately and then use a simple counting mechanism to determine the final strength rating.

# Approach

The optimized solution uses a direct counting approach with pre-compiled regular expressions:

1. **Define regex constants** for character pattern matching (uppercase, lowercase, numbers, special characters)
2. **Initialize a counter** to track how many criteria are met
3. **Evaluate each criterion individually**:
   - Length check: `password.length >= 8`
   - Case check: Both uppercase AND lowercase present
   - Number check: At least one digit present
   - Special character check: At least one from the allowed set
4. **Map count to strength**: Use conditional logic to return appropriate strength string

This approach is efficient because it performs minimal operations and avoids unnecessary data structures.

# Complexity

- **Time complexity**: O(n) - Each regex performs a linear scan of the input string
- **Space complexity**: O(1) - Only primitive variables and pre-compiled regex constants

# Code

```javascript
function checkStrength(password) {
  // Constants for regex patterns (better maintainability and performance)
  const HAS_UPPERCASE = /[A-Z]/;
  const HAS_LOWERCASE = /[a-z]/;
  const HAS_NUMBER = /[0-9]/;
  const HAS_SPECIAL = /[!@#$%^&*]/;

  // Count met criteria directly (more efficient than array approach)
  let criteriaMet = 0;

  // Rule 1: At least 8 characters
  if (password.length >= 8) criteriaMet++;

  // Rule 2: Contains both uppercase and lowercase letters
  if (HAS_UPPERCASE.test(password) && HAS_LOWERCASE.test(password))
    criteriaMet++;

  // Rule 3: Contains at least one number
  if (HAS_NUMBER.test(password)) criteriaMet++;

  // Rule 4: Contains at least one special character
  if (HAS_SPECIAL.test(password)) criteriaMet++;

  // Determine strength based on criteria count
  if (criteriaMet < 2) return "weak";
  if (criteriaMet < 4) return "medium";
  return "strong";
}

export default checkStrength;
```

# Notes

- **Optimization details**: The solution evolved from using an array with `.filter(Boolean)` to direct counting, eliminating unnecessary array creation and filtering operations
- **Regex constants**: Pre-compiled patterns improve performance and maintainability compared to inline regex literals
- **Edge cases handled**: Empty strings return "weak" (0 criteria met), strings with only special characters return appropriate strength
- **Character set validation**: The special character regex `/[!@#$%^&*]/` exactly matches the problem requirements
- **Boolean logic**: The case requirement uses AND logic (both upper AND lower), while others use OR logic (at least one)
- **Performance consideration**: Each regex scan is O(n), but with only 4 regex checks, the total remains efficient
- **Code readability**: Separated if-statements with comments make the logic clear and maintainable
- **Alternative approaches considered**: Array-based counting was implemented first but replaced with direct counting for better performance
