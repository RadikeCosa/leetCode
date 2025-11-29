# Intuition

This problem is an evolution of the classic "Water Bottles" problem where the key difference is that `numExchange` increments after each exchange, making subsequent exchanges progressively more expensive. The intuition is to simulate the process step by step since the changing exchange rate prevents us from using a direct mathematical formula.

# Approach

I used a greedy simulation approach:

1. **Initial state**: Drink all initial bottles, converting them to empty bottles
2. **Exchange loop**: While we have enough empty bottles to make an exchange:
   - Use `numExchange` empty bottles to get 1 full bottle
   - Drink that bottle (increment total drunk)
   - The drunk bottle becomes 1 empty bottle
   - Increment `numExchange` for the next exchange
3. **Termination**: Stop when we don't have enough empty bottles for the next exchange

The key insight is that each exchange becomes more expensive, naturally limiting the number of iterations and ensuring the algorithm terminates.

# Complexity

- **Time complexity**: O(log numBottles) - The number of iterations is limited because `numExchange` grows arithmetically, causing the loop to terminate logarithmically relative to the initial bottles
- **Space complexity**: O(1) - Only using constant auxiliary variables

# Code

```typescript
export function maxWaterBottles(
  numBottles: number,
  numExchange: number
): number {
  let totalDrunk = numBottles; // Drink all initial bottles
  let emptyBottles = numBottles; // They become empty bottles

  while (emptyBottles >= numExchange) {
    emptyBottles -= numExchange; // Use bottles for exchange
    totalDrunk++; // Drink the new bottle
    emptyBottles++; // New bottle becomes empty
    numExchange++; // Next exchange costs more
  }

  return totalDrunk;
}
```

# Notes

- **Edge cases handled**:
  - `numBottles = 1, numExchange = 1`: Can make exactly one exchange (result: 2)
  - `numBottles < numExchange`: No exchanges possible (result: numBottles)
- **Alternative approaches considered**:
  - Mathematical formula: Possible but significantly more complex due to the arithmetic progression
  - Optimization unnecessary: O(log n) is already very efficient for the given constraints
- **Key insights**:
  - Greedy approach is optimal - no benefit in delaying exchanges
  - The incrementing exchange rate ensures natural termination
  - Simulation is clearer and more maintainable than mathematical optimization
- **Variable naming decisions**:
  - `totalDrunk`: Clear accumulator for the final result
  - `emptyBottles`: Tracks available bottles for exchange
  - Modifying `numExchange` directly: Simplifies the logic since we don't need the original value
