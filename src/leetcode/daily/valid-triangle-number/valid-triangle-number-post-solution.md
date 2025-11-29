# Intuition

The key insight for this problem is understanding the triangle inequality: for three sides to form a valid triangle, the sum of any two sides must be greater than the third side. If we sort the array first, we only need to check one condition: `a + b > c` where `a ≤ b ≤ c`.

# Approach

I used a **sort + two pointers** approach:

1. **Sort the array** in ascending order to simplify triangle validation
2. **Fix the largest side** `c` by iterating from the end of the array backward
3. **Use two pointers** (`left` and `right`) to find all valid pairs `(a, b)` where `a + b > c`

The clever optimization is in the counting: when `nums[left] + nums[right] > nums[i]`, all elements between `left` and `right-1` will also form valid triangles with `nums[right]` and `nums[i]`. This allows us to count `right - left` triangles in a single step instead of counting them one by one.

**Algorithm walkthrough:**

- For each potential largest side `nums[i]`
- Set `left = 0` and `right = i - 1`
- If `nums[left] + nums[right] > nums[i]`: count multiple valid triangles and move `right--`
- If `nums[left] + nums[right] ≤ nums[i]`: we need a larger sum, so move `left++`

# Complexity

- **Time complexity**: O(n²)

  - Sorting takes O(n log n)
  - The outer loop runs n times
  - The inner two-pointer traversal takes O(n) total for each outer iteration
  - Overall: O(n log n) + O(n²) = O(n²)

- **Space complexity**: O(1)
  - We sort the array in-place and only use constant extra space for variables
  - (Excluding the space used by the sorting algorithm itself)

# Code

```typescript
export function triangleNumber(nums: number[]): number {
  // Ordenar el array in-place en orden ascendente
  nums.sort((a, b) => a - b);
  let count = 0;

  // Iterar desde el final (lado más largo) hacia atrás
  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0;
    let right = i - 1;

    // Two pointers: buscar pares que sumen más que nums[i]
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        // Si el par actual funciona, todos los elementos entre left y right-1 también funcionan
        count += right - left;
        right--;
      } else {
        // Si la suma es muy pequeña, aumentamos el lado menor
        left++;
      }
    }
  }
  return count;
}
```

# Notes

- **Triangle inequality optimization**: Sorting allows us to check only one condition instead of three
- **Counting optimization**: Instead of counting triangles one by one, we count `right - left` valid combinations when we find a valid pair
- **Two pointers efficiency**: The inner loop has O(n) total complexity across all iterations because each element is visited at most once per outer loop iteration
- **Edge cases handled**: Arrays with less than 3 elements return 0 automatically due to the loop condition `i >= 2`
- **Space optimization**: The solution modifies the input array in-place to achieve O(1) extra space complexity

The approach is more efficient than brute force O(n³) and comparable to the binary search approach O(n² log n), but with simpler implementation.
