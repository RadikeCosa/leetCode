# Find Most Frequent Vowel and Consonant

Encontrar la vocal y consonante con mayor frecuencia en un string y retornar la suma de sus frecuencias.

## Ejemplos

**Ejemplo 1:**

- Input: s = "successes"
- Output: 6
- Explicación: Vocal más frecuente 'e' (2), consonante más frecuente 's' (4), suma = 6

**Ejemplo 2:**

- Input: s = "aeiaeia"
- Output: 3
- Explicación: Vocal más frecuente 'a' (3), no hay consonantes (0), suma = 3

## Análisis

### Comprensión del problema:

- **Clasificar** cada carácter como vocal ('a', 'e', 'i', 'o', 'u') o consonante
- **Contar** la frecuencia de cada carácter en su categoría
- **Encontrar** la máxima frecuencia en cada categoría
- **Sumar** las dos frecuencias máximas

### Desafíos clave:

1. Clasificación eficiente de vocales vs consonantes
2. Conteo de frecuencias optimizado
3. Búsqueda de máximos por categoría

## Enfoque detallado

### Solución implementada: Arrays de conteo directo

```typescript
export function findMostFrequentVowelAndConsonant(s: string): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  // Arrays para conteo directo (a-z = índices 0-25)
  const vowelCounts = new Array(26).fill(0);
  const consonantCounts = new Array(26).fill(0);

  // Contar directamente en arrays
  for (const char of s) {
    const index = char.charCodeAt(0) - 97; // 'a' = 97
    if (vowels.has(char)) {
      vowelCounts[index]++;
    } else {
      consonantCounts[index]++;
    }
  }

  // Encontrar máximos
  const maxVowelFreq = Math.max(...vowelCounts);
  const maxConsonantFreq = Math.max(...consonantCounts);

  return maxVowelFreq + maxConsonantFreq;
}
```

### Pasos del algoritmo:

1. **Clasificador**: Set con las 5 vocales para lookup O(1)
2. **Contadores**: Dos arrays de tamaño 26 (una posición por letra del alfabeto)
3. **Mapeo directo**: `char.charCodeAt(0) - 97` convierte 'a'->0, 'b'->1, etc.
4. **Conteo por categoría**: Incrementar en el array correspondiente
5. **Búsqueda de máximos**: `Math.max(...array)` encuentra el valor máximo
6. **Suma final**: Retornar suma de ambos máximos

### ¿Por qué funciona?

- **Mapeo ASCII**: Aprovechamos que 'a'=97, 'b'=98, etc. para indexación directa
- **Separación de categorías**: Arrays separados evitan clasificación posterior
- **Espacio constante**: 26 posiciones fijas independiente del tamaño del string

## Casos extremos

- **Solo vocales**: `"aeiaeia"` → maxConsonant = 0
- **Solo consonantes**: `"bcdfg"` → maxVowel = 0
- **Todos iguales**: `"aaaa"` → máxima frecuencia = 4
- **Un carácter**: `"a"` → vocal = 1, consonante = 0
- **String mínimo**: longitud 1 según constraints

## Complejidad

### Time Complexity: O(n)

- **Iteración principal**: O(n) para recorrer el string
- **Búsqueda de máximos**: O(26) = O(1) para cada array
- **Total**: O(n) + O(1) = O(n)

### Space Complexity: O(1)

- **Arrays fijos**: 2 × 26 = 52 enteros, independiente del input
- **Variables auxiliares**: Constante
- **Total**: O(1) - espacio constante

### Comparación con alternativas:

- **HashMap approach**: O(n) tiempo, O(k) espacio donde k = caracteres únicos
- **Una pasada + HashMap**: O(n) tiempo, O(k) espacio
- **Array directo (actual)**: O(n) tiempo, O(1) espacio ← **Óptimo**

## Conclusión

### Lecciones aprendidas:

1. **Mapeo ASCII**: Convertir caracteres a índices para acceso directo O(1)
2. **Arrays vs HashMap**: Para alfabetos fijos, arrays son más eficientes
3. **Separación de categorías**: Clasificar durante el conteo evita pasadas extra
4. **Optimización de espacio**: Aprovechar constraints (solo lowercase a-z)

### Patrón aplicable:

Esta técnica de "conteo directo con arrays" se aplica cuando:

- Tienes un conjunto fijo y pequeño de posibles valores
- Necesitas contar frecuencias
- Quieres optimizar el espacio a O(1)
- El rango de valores es conocido y mapeable a índices
