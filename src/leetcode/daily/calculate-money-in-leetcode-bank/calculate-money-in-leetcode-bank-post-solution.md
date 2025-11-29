# Calculate Money in LeetCode Bank - Solution

## Intuition

Hercy saves money following a weekly pattern where each week the base amount increases by 1. We can calculate the total by finding complete weeks and remaining days, using mathematical formulas for efficiency.

## Approach

1. Calculate complete weeks: `completeWeeks = n / 7`
2. Calculate remaining days: `remainingDays = n % 7`
3. For complete weeks, use the formula for arithmetic series: each week sum = 7 \* (week + 1) / 2 + 21
4. For remaining days, loop through each day adding the appropriate amount
5. Return total sum

## Complexity

- Time complexity: O(1) - constant time operations
- Space complexity: O(1) - fixed number of variables

## Code

```typescript
export function totalMoney(n: number): number {
  // Calculate complete weeks and remaining days
  const completeWeeks = Math.floor(n / 7);
  const remainingDays = n % 7;

  // Sum for complete weeks using arithmetic series formula
  const completeWeeksSum = completeWeeks * ((7 * (completeWeeks + 1)) / 2 + 21);

  // Sum for remaining days
  let remainingDaysSum = 0;
  const baseWeek = completeWeeks + 1;
  for (let day = 1; day <= remainingDays; day++) {
    remainingDaysSum += baseWeek + day - 1;
  }

  return completeWeeksSum + remainingDaysSum;
}
```

## Notes

- The formula for complete weeks was derived by analyzing the pattern: week 1 = 28, week 2 = 35, week 3 = 42, etc.
- This approach avoids iterating through all days, making it efficient for large n
- Edge cases like n < 7 work correctly with remainingDays handling
