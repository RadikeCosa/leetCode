/**
 * Combina dos arrays ordenados nums1 y nums2 en nums1 in-place.
 * nums1 tiene espacio suficiente (m + n) para contener todos los elementos.
 *
 * - nums1: primer array con tamaño m + n (los últimos n están vacíos)
 * - m: cantidad de elementos válidos en nums1
 * - nums2: segundo array de tamaño n
 * - n: cantidad de elementos válidos en nums2
 *
 * Complejidad: O(m + n) tiempo, O(1) espacio
 */
export function mergeSortedArray(nums1, m, nums2, n) {
    let indice1 = m - 1;
    let indice2 = n - 1;
    let indiceDestino = m + n - 1;
    while (indice2 >= 0) {
        if (indice1 >= 0 && nums1[indice1] > nums2[indice2]) {
            nums1[indiceDestino] = nums1[indice1];
            indice1--;
        }
        else {
            nums1[indiceDestino] = nums2[indice2];
            indice2--;
        }
        indiceDestino--;
    }
}
