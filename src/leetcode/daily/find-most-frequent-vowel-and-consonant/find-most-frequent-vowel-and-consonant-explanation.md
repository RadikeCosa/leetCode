---
title: "Find Most Frequent Vowel and Consonant"
difficulty: "easy"
topics:
  - Hash Table
  - String
  - Counting
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

## Find Most Frequent Vowel and Consonant

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

### Proceso de desarrollo:

**Enfoque inicial considerado**: HashMap para conteo

- Map<string, number> para todas las frecuencias
- Clasificar después del conteo
- Complejidad: O(n) tiempo, O(k) espacio

**Optimización implementada**: Arrays de conteo directo

- Aprovechar constraint: solo lowercase a-z
- Mapeo ASCII directo a índices
- Separación de categorías durante conteo
- Complejidad: O(n) tiempo, O(1) espacio

## Enfoque detallado

### Solución final: Arrays de conteo directo con mapeo ASCII

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

### ¿Por qué arrays de 26 posiciones y no 5 para vocales?

**Pregunta clave**: Si solo hay 5 vocales, ¿por qué usar un array de 26 posiciones?

**Decisión de diseño analizada:**

#### **Opción 1: Arrays optimizados por categoría**

```typescript
// Solo 5 posiciones para vocales
const vowelMap = { a: 0, e: 1, i: 2, o: 3, u: 4 };
const vowelCounts = new Array(5).fill(0); // 5 posiciones
const consonantCounts = new Map<string, number>(); // Variable según input
```

**Pros**: Memoria más eficiente (5 vs 26 posiciones para vocales)  
**Contras**:

- Mapeo adicional `vowelMap[char]` para cada vocal
- Código más complejo para manejar consonantes
- Mix de estructuras (Array + Map)

#### **Opción 2: Arrays uniformes de 26 posiciones (implementado)**

```typescript
const vowelCounts = new Array(26).fill(0); // 26 posiciones
const consonantCounts = new Array(26).fill(0); // 26 posiciones
// Mapeo directo: char.charCodeAt(0) - 97
```

**Pros**:

- **Simplicidad**: Mismo mapeo ASCII para ambas categorías
- **Uniformidad**: Misma estructura para vocales y consonantes
- **Performance**: Acceso directo O(1) sin lookups adicionales
- **Mantenibilidad**: Código más claro y menos propenso a errores

**Contras**:

- **Memoria "desperdiciada"**: 21 posiciones extra para vocales no usadas
- **Ineficiencia conceptual**: Arrays más grandes de lo necesario

#### **Análisis de trade-offs:**

| Aspecto                   | Optimizado (5+Map) | Uniforme (26+26) |
|

------------------- | ------------------ | ---------------- |
| **Memoria**               | ~5 + k enteros     | 52 enteros       |
| **Complejidad de código** | Media-Alta         | Baja             |
| **Performance**           | Lookup + acceso    | Acceso directo   |
| **Mantenibilidad**        | Más complejo       | Más simple       |
| **Escalabilidad**         | Limitado           | Extensible       |

#### **¿Por qué elegimos la opción "menos eficiente"?**

**En el contexto de este problema:**

1. **Constraints favorables**:

   - String máximo 100 caracteres
   - Solo lowercase a-z
   - Memoria desperdiciada: 21 × 4 bytes = 84 bytes extra (negligible)

2. **Principio de simplicidad**:

   - Código más claro y mantenible
   - Menos propenso a bugs de indexación
   - Patrón uniforme para ambas categorías

3. **Performance práctica**:

   - Acceso directo vs lookup en Map para cada consonante
   - Mejor cache locality con arrays contiguos

4. **Generalización del patrón**:
   - Este enfoque escala a otros problemas de conteo con alfabetos fijos
   - Reutilizable para problemas similares

**Conclusión**: Para problemas de tamaño pequeño con alfabetos fijos, **la simplicidad y claridad del código supera la optimización prematura de memoria**. En sistemas con constraints estrictos de memoria, la optimización sería válida.

### Lección de diseño:

**"Optimizar lo que importa"** - En este caso, la legibilidad y mantenibilidad del código son más valiosas que 84 bytes de memoria.

## Casos extremos

**Casos cubiertos en la suite de tests:**

- **Solo vocales**: `"aeiaeia"` → maxVowel = 3, maxConsonant = 0 → resultado = 3
- **Solo consonantes**: `"bcdfg"` → maxVowel = 0, maxConsonant = 1 → resultado = 1
- **Un carácter vocal**: `"a"` → maxVowel = 1, maxConsonant = 0 → resultado = 1
- **Un carácter consonante**: `"b"` → maxVowel = 0, maxConsonant = 1 → resultado = 1
- **Caracteres repetidos**: `"aaaa"` → maxVowel = 4, maxConsonant = 0 → resultado = 4
- **Frecuencias iguales**: `"abcde"` → maxVowel = 1, maxConsonant = 1 → resultado = 2
- **Caso realista**: `"programming"` → maxVowel = 1, maxConsonant = 2 → resultado = 3
  - Vocales: o(1), a(1), i(1) → máximo = 1
  - Consonantes: p(1), r(2), g(2), m(2), n(1) → máximo = 2

**Observaciones importantes:**

- Cuando no hay vocales/consonantes, su frecuencia máxima es 0
- El resultado siempre es ≥ 0 (casos válidos según constraints)
- Arrays de tamaño fijo manejan automáticamente letras no presentes (quedan en 0)

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