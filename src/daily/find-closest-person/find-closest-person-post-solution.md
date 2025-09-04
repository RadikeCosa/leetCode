# Intuition

The problem asks us to determine which of two people reaches a third person first when they move at the same speed. Since they move at the same speed, the person with the shorter distance to the target will arrive first.

# Approach

The solution is straightforward:

1. **Calculate distances**: Compute the absolute distance from Person 1 to Person 3, and from Person 2 to Person 3
2. **Compare distances**: The person with the smaller distance reaches Person 3 first
3. **Handle ties**: If both distances are equal, they arrive simultaneously

The key insight is that since both people move at the same speed, the problem reduces to a simple distance comparison on a number line.

# Complexity

- **Time complexity**: O(1) - We perform only constant-time operations (two absolute value calculations and one comparison)
- **Space complexity**: O(1) - We use only a constant amount of extra space for storing the two distances

# Code

```typescript
export function findClosestPerson(x: number, y: number, z: number): number {
  const distance1_3 = Math.abs(z - x);
  const distance2_3 = Math.abs(z - y);
  return distance1_3 < distance2_3 ? 1 : distance1_3 > distance2_3 ? 2 : 0;
}
```

# Notes

- **Variable naming**: Using `distance1_3` and `distance2_3` makes the code self-documenting by clearly indicating we're measuring distances to Person 3
- **Edge cases**: The solution naturally handles all cases including when both people are equidistant from Person 3
- **Math.abs() usage**: Essential for handling cases where people are on different sides of Person 3
- **Ternary operator**: The nested ternary cleanly handles all three possible outcomes in a single return statement
- **No optimization needed**: This is already the optimal solution for this problem type
