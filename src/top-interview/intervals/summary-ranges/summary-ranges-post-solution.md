# Intuition

When I first saw this problem, I realized I need to identify **consecutive sequences** in a sorted array and represent them compactly. Since the array is already sorted, I can use a **two-pointer approach** to track the start and end of each consecutive range.

The key insight is that I only need to move forward through the array once, extending each range as long as numbers are consecutive, then format the result appropriately.

# Approach

I use a **single-pass algorithm** with the following strategy:

1. **Initialize pointers**: Start with `start = 0` and track the array boundaries
2. **For each range**:
   - Mark the beginning of a potential range (`rangeStart`)
   - Extend the range while numbers are consecutive: `nums[i] + 1 === nums[i+1]`
   - When the sequence breaks, mark the end (`rangeEnd`)
3. **Format output**:
   - If `rangeStart === rangeEnd`: single element → `"num"`
   - Otherwise: range → `"start->end"`
4. **Move to next range**: Advance the start pointer and repeat

The algorithm ensures each element is visited exactly once, making it optimal.

# Complexity

- **Time complexity**: O(n) - Single pass through the array. Each element is visited exactly once as the `i` pointer advances sequentially and `end` pointer only moves forward.
- **Space complexity**: O(1) - Only constant extra space for variables (i, end, rangeStart, rangeEnd). Output array doesn't count toward auxiliary space.

# Code

````typescript
export function summaryRanges(nums: number[]): string[] {
  let i = 0;
  const result: string[] = [];

  while (i < nums.length) {
    // Marcar el inicio del rango actual
    let rangeStart = nums[i];
    let end = i; // end avanza para encontrar el final del rango

    // Extender end mientras los números sean consecutivos
    while (end < nums.length - 1 && nums[end] + 1 === nums[end + 1]) {
      end++;
    }

    let rangeEnd = nums[end];

    // Formatear según el tamaño del rango
    if (rangeStart === rangeEnd) {
      result.push(`${rangeStart}`);
    } else {
      result.push(`${rangeStart}->${rangeEnd}`);
    }

    // Saltar al siguiente segmento después del rango actual
    i = end + 1;
  }
  return result;
}
```

# Notes

- **Edge case handling**: Works correctly for empty arrays, single elements, and negative numbers
- **Consecutive detection**: Uses `nums[end] + 1 === nums[end + 1]` to identify adjacent numbers
- **Boundary safety**: `end < nums.length - 1` condition prevents array out-of-bounds access
- **Format consistency**: Template literals ensure clean string formatting
- **Single pass optimization**: Each element visited exactly once, no backtracking needed
- **Memory efficient**: Only uses constant auxiliary space regardless of input size
````
