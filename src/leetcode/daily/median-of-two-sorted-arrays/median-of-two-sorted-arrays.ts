/**
 * LeetCode Problem: Median Of Two Sorted Arrays
 * Difficulty:
 * Topics:
 *
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @returns {number} The median of the two sorted arrays
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // Ensure nums1 is the smaller array to keep binary search on the smaller side
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;

  let low = 0;
  let high = m;

  while (low <= high) {
    const i = Math.floor((low + high) / 2); // partition in nums1
    const j = Math.floor((m + n + 1) / 2) - i; // partition in nums2

    const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
    const nums1RightMin = i === m ? Infinity : nums1[i];

    const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1];
    const nums2RightMin = j === n ? Infinity : nums2[j];

    if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
      // Correct partition
      if ((m + n) % 2 === 1) {
        return Math.max(nums1LeftMax, nums2LeftMax);
      }
      return (
        (Math.max(nums1LeftMax, nums2LeftMax) +
          Math.min(nums1RightMin, nums2RightMin)) /
        2
      );
    } else if (nums1LeftMax > nums2RightMin) {
      // Move partition i to the left
      high = i - 1;
    } else {
      // nums2LeftMax > nums1RightMin -> move partition i to the right
      low = i + 1;
    }
  }

  // Should never reach here if inputs are valid sorted arrays
  throw new Error("Input arrays are not sorted or invalid");
}
/**
 * LeetCode Problem: Median Of Two Sorted Arrays
 * Difficulty: Hard
 * Topics: Array, Binary Search, Divide and Conquer
 *
 * Encuentra la mediana de dos arrays ordenados en O(log(min(m,n)))
 *
 * @param {number[]} nums1 - Primer array ordenado
 * @param {number[]} nums2 - Segundo array ordenado
 * @returns {number} La mediana de ambos arrays combinados
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // ========================================
  // PASO 1: Asegurar que nums1 sea el más pequeño
  // ========================================
  // Siempre hacemos búsqueda binaria en el array más pequeño
  // para que sea más eficiente O(log(min(m,n)))
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length; // tamaño del array pequeño
  const n = nums2.length; // tamaño del array grande

  // ========================================
  // PASO 2: Configurar búsqueda binaria
  // ========================================
  // Vamos a buscar la posición correcta del "corte" en nums1
  // low y high representan el rango de posibles cortes
  let low = 0; // mínimo: 0 elementos de nums1 a la izquierda
  let high = m; // máximo: todos los elementos de nums1 a la izquierda

  while (low <= high) {
    // ========================================
    // PASO 3: Calcular las posiciones del corte
    // ========================================
    // i = cuántos elementos de nums1 van a la izquierda
    const i = Math.floor((low + high) / 2);

    // j = cuántos elementos de nums2 van a la izquierda
    // Se calcula para que el total de elementos a la izquierda sea la mitad
    const j = Math.floor((m + n + 1) / 2) - i;

    // ========================================
    // PASO 4: Obtener los valores en los bordes del corte
    // ========================================
    // Para nums1:
    // - nums1LeftMax: el último elemento que va a la izquierda
    // - nums1RightMin: el primer elemento que va a la derecha
    const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
    const nums1RightMin = i === m ? Infinity : nums1[i];

    // Para nums2:
    // - nums2LeftMax: el último elemento que va a la izquierda
    // - nums2RightMin: el primer elemento que va a la derecha
    const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1];
    const nums2RightMin = j === n ? Infinity : nums2[j];

    // ========================================
    // PASO 5: Verificar si encontramos el corte correcto
    // ========================================
    // El corte es correcto si:
    // - Todo lo de la izquierda de nums1 ≤ todo lo de la derecha de nums2
    // - Todo lo de la izquierda de nums2 ≤ todo lo de la derecha de nums1
    if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
      // ¡ENCONTRAMOS EL CORTE CORRECTO! 🎉

      // Si la cantidad total es IMPAR:
      // La mediana es el mayor de la izquierda
      if ((m + n) % 2 === 1) {
        return Math.max(nums1LeftMax, nums2LeftMax);
      }

      // Si la cantidad total es PAR:
      // La mediana es el promedio entre:
      // - el mayor de la izquierda
      // - el menor de la derecha
      return (
        (Math.max(nums1LeftMax, nums2LeftMax) +
          Math.min(nums1RightMin, nums2RightMin)) /
        2
      );
    }

    // ========================================
    // PASO 6: Ajustar el corte si no es correcto
    // ========================================
    else if (nums1LeftMax > nums2RightMin) {
      // Problema: el último elemento de la izquierda de nums1 es mayor
      // que el primer elemento de la derecha de nums2
      // Solución: mover el corte de nums1 hacia la IZQUIERDA
      // (tomar menos elementos de nums1)
      high = i - 1;
    } else {
      // Problema: nums2LeftMax > nums1RightMin
      // El último elemento de la izquierda de nums2 es mayor
      // que el primer elemento de la derecha de nums1
      // Solución: mover el corte de nums1 hacia la DERECHA
      // (tomar más elementos de nums1)
      low = i + 1;
    }
  }

  // Este punto nunca debería alcanzarse si los arrays son válidos
  throw new Error("Input arrays are not sorted or invalid");
}
