/**
 * LeetCode Problem 383: Ransom Note
 * Difficulty: Easy
 * Topics: Hash Table, String, Counting
 *
 * Given two strings ransomNote and magazine, return true if ransomNote
 * can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Time Complexity: O(n + m) - where n is length of ransomNote, m is length of magazine
 * Space Complexity: O(k) - where k is the number of unique characters in magazine
 */
export function canConstruct(ransomNote, magazine) {
    // Optimización temprana: si ransomNote es más largo, es imposible construirlo
    if (ransomNote.length > magazine.length) {
        return false;
    }
    // Crear un HashMap para contar la frecuencia de cada carácter en magazine
    const magazineCount = new Map();
    // Fase 1: Contar todos los caracteres disponibles en magazine
    for (const char of magazine) {
        // Si el carácter ya existe, incrementamos su contador; si no, lo inicializamos en 1
        magazineCount.set(char, (magazineCount.get(char) || 0) + 1);
    }
    // Fase 2: Verificar si podemos construir ransomNote con los caracteres disponibles
    for (const char of ransomNote) {
        // Verificamos si el carácter existe y si tenemos cantidad suficiente (> 0)
        if (!magazineCount.has(char) || magazineCount.get(char) <= 0) {
            // No tenemos el carácter o ya se agotó
            return false;
        }
        // "Usamos" el carácter decrementando su contador
        magazineCount.set(char, magazineCount.get(char) - 1);
    }
    // Si llegamos aquí, pudimos construir ransomNote exitosamente
    return true;
}
