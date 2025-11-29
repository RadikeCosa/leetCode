# Intuition

The problem is about maximizing the number of water bottles you can drink by exchanging empty bottles for new full ones. The key is to simulate the process of drinking and exchanging until you can no longer make exchanges.

# Approach

Start with the initial number of bottles. Each time you drink a bottle, you gain an empty one. Whenever you have enough empty bottles to exchange for a new full bottle, do the exchange and continue. Repeat until you cannot exchange anymore. This is a simple simulation loop.

# Complexity

- **Time complexity**: O(log n) — Each exchange reduces the number of empty bottles, so the number of iterations is logarithmic in the worst case.
- **Space complexity**: O(1) — Only a few integer variables are needed.

# Code

```typescript
export function numWaterBottles(
  numBottles: number,
  numExchange: number
): number {
  let totalDrank = numBottles;
  let empty = numBottles;
  while (empty >= numExchange) {
    const newBottles = Math.floor(empty / numExchange);
    totalDrank += newBottles;
    empty = (empty % numExchange) + newBottles;
  }
  return totalDrank;
}
```

# Notes

- Handles all edge cases (minimum and maximum values).
- Alternative approaches (mathematical formula) are less intuitive for this simulation.
- Pattern: Greedy simulation, exchange process.
- Variable names chosen for clarity.
