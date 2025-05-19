/**
 * Leetcode 27 - Remove Element
 *
 * Dado un array `nums` y un valor `val`, eliminá todas las ocurrencias de `val` *in-place*
 * y devolvé la nueva longitud `k`, tal que los primeros `k` elementos sean distintos a `val`.
 *
 * No importa qué quede en el resto del array (más allá de la posición `k`).
 *
 * Debés resolverlo en O(n) tiempo y O(1) espacio adicional.
 *
 * Ejemplo:
 * Input: nums = [3,2,2,3], val = 3
 * Output: k = 2, nums = [2,2,_,_] (los elementos luego de k no importan)
 */
export function removeElement(nums, val) {
    const debug = false;
    let write = 0;
    if (debug) {
        console.log("Estado inicial:", [...nums], "val =", val);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[write] = nums[i];
            write++;
            if (debug) {
                console.log(`Copiando nums[${i}] a nums[${write - 1}]`);
            }
        }
        else {
            if (debug) {
                console.log(`Omitiendo nums[${i}] = ${val}`);
            }
        }
    }
    if (debug) {
        console.log("Resultado final:", nums.slice(0, write));
    }
    return write;
}
