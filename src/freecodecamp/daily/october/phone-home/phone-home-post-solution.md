# Intuition

This problem involves calculating the total time for a message to travel through a satellite communication route. The key insight is that we need to consider both the physical travel time based on distance and speed, plus the transmission delays introduced by each satellite in the route.

The array represents sequential distances in the communication path, and we need to account for the fact that each intermediate satellite adds a fixed delay to the total transmission time.

# Approach

The solution follows a straightforward mathematical approach:

1. **Calculate total distance**: Sum all elements in the route array, as the message travels through every segment
2. **Determine satellite count**: Number of satellites equals array length minus 1
3. **Compute travel time**: Divide total distance by the speed of light in the medium (300,000 km/s)
4. **Calculate transmission delay**: Multiply satellite count by 0.5 seconds per satellite
5. **Combine times**: Add travel time and transmission delay
6. **Format result**: Round to 4 decimal places and remove trailing zeros

This approach is efficient because it processes the input array only once to calculate the sum, then performs constant-time arithmetic operations.

# Complexity

- **Time complexity**: O(n) - Linear time to sum all distances in the route array using reduce()
- **Space complexity**: O(1) - Constant space, only using primitive variables for calculations

# Code

```javascript
function sendMessage(route) {
  // Constants for clarity and maintainability
  const SPEED_KM_PER_SECOND = 300000;
  const SATELLITE_DELAY_SECONDS = 0.5;

  // Calculate total distance traveled by the message
  const totalDistance = route.reduce((sum, distance) => sum + distance, 0);

  // Number of satellites = array elements - 1
  const satelliteCount = route.length - 1;

  // Travel time = total distance / speed
  const travelTime = totalDistance / SPEED_KM_PER_SECOND;

  // Total delay = satellites × delay per satellite
  const totalDelay = satelliteCount * SATELLITE_DELAY_SECONDS;

  // Total time rounded to 4 decimal places
  const totalTime = travelTime + totalDelay;

  return parseFloat(totalTime.toFixed(4));
}

export default sendMessage;
```

# Notes

- **Edge cases handled**: The solution works for any array length ≥ 2, as there must be at least one satellite in the route
- **Precision requirements**: Using `toFixed(4)` ensures exactly 4 decimal places, and `parseFloat()` removes trailing zeros while maintaining number type
- **Alternative approaches considered**: A loop-based summation was considered but `reduce()` provides cleaner functional code
- **Variable naming**: Descriptive names like `satelliteCount` and `travelTime` make the code self-documenting
- **Constants**: Extracted magic numbers (300000, 0.5) into named constants for better maintainability
- **Type safety**: The function assumes valid numeric input as per problem constraints
