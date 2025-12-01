/**
 * LeetCode 1716: Calculate Money in LeetCode Bank
 * Difficulty: Easy
 * Topics: Math
 */
export function totalMoney(n) {
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
