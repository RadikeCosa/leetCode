/**
 * LeetCode Problem 3100: Water Bottles II
 * Difficulty: Medium
 * Topics: Math, Simulation
 *
 * You are given two integers numBottles and numExchange.
 *
 * numBottles represents the number of full water bottles that you initially have.
 * In one operation, you can perform one of the following operations:
 *
 * • Drink any number of full water bottles turning them into empty bottles.
 * • Exchange numExchange empty bottles with one full water bottle.
 *   Then, increase numExchange by one.
 *
 * Note that you cannot exchange multiple batches of empty bottles for the same
 * value of numExchange. For example, if numBottles == 3 and numExchange == 1,
 * you cannot exchange 3 empty water bottles for 3 full bottles.
 *
 * Return the maximum number of water bottles you can drink.
 *
 * Time Complexity: O(log numBottles) - número limitado de intercambios debido al incremento progresivo
 * Space Complexity: O(1) - solo variables auxiliares constantes
 */
export function maxWaterBottles(numBottles, numExchange) {
    let totalDrunk = numBottles;
    let emptyBottles = numBottles;
    while (emptyBottles >= numExchange) {
        emptyBottles -= numExchange;
        totalDrunk++;
        emptyBottles++;
        numExchange++;
    }
    return totalDrunk;
}
