/**
 * Leetcode #75 - Sort Colors
 *
 * Given an array nums with n objects colored red, white, or blue,
 * sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Example 2:
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 *
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 300
 * - nums[i] is either 0, 1, or 2
 */
export function sortColors(nums) {
    const debug = false;
    let redIndex = 0;
    let blueIndex = nums.length - 1;
    let currentIndex = 0;
    if (debug)
        console.log("Estado inicial:", [...nums]);
    while (currentIndex <= blueIndex) {
        if (debug) {
            console.log(`\nEvaluando nums[${currentIndex}] = ${nums[currentIndex]}`);
            console.log(`redIndex: ${redIndex}, currentIndex: ${currentIndex}, blueIndex: ${blueIndex}`);
        }
        if (nums[currentIndex] === 0) {
            if (debug)
                console.log(`→ Es rojo (0), intercambiar con nums[${redIndex}]`);
            [nums[currentIndex], nums[redIndex]] = [
                nums[redIndex],
                nums[currentIndex],
            ];
            redIndex++;
            currentIndex++;
        }
        else if (nums[currentIndex] === 2) {
            if (debug)
                console.log(`→ Es azul (2), intercambiar con nums[${blueIndex}]`);
            [nums[currentIndex], nums[blueIndex]] = [
                nums[blueIndex],
                nums[currentIndex],
            ];
            blueIndex--;
        }
        else {
            if (debug)
                console.log(`→ Es blanco (1), solo avanzar`);
            currentIndex++;
        }
        if (debug)
            console.log("Estado actual:", [...nums]);
    }
    if (debug)
        console.log("\nResultado final:", nums);
}
