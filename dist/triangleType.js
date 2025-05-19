/**
 * Determina el tipo de triángulo dado un array nums de 3 lados.
 * Devuelve:
 * - "equilateral" si todos los lados iguales.
 * - "isosceles" si exactamente dos lados iguales.
 * - "scalene" si todos diferentes.
 * - "none" si no puede formar triángulo.
 *
 * Para formar triángulo válido, se cumple la desigualdad triangular:
 * la suma de dos lados debe ser mayor que el tercero, para los 3 pares.
 */
export function triangleType(nums) {
    const [a, b, c] = nums;
    // Validar desigualdad triangular
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }
    // Todos iguales
    if (a === b && b === c) {
        return "equilateral";
    }
    // Exactamente dos iguales
    if (a === b || b === c || a === c) {
        return "isosceles";
    }
    // Todos diferentes
    return "scalene";
}
