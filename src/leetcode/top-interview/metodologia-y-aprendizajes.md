# 🎯 Metodología y Aprendizajes - Top Interview Problems

## 📚 Tabla de Contenidos

### 🎓 **Fundamentos**

- [Filosofía de Aprendizaje](#filosofía-de-aprendizaje)
- [Metodología TDD](#metodología-tdd-test-driven-development)
- [Estructura de Proyecto](#estructura-estándar-por-problema)

### 🔧 **Patrones Algorítmicos**

- [Quick Reference Guide](#quick-reference---cuándo-usar-cada-patrón)
- [Two Pointers](#two-pointers-pattern)
- [Hash Maps](#hash-maps--hash-tables)
- [Sliding Window](#sliding-window-pattern)

### 📖 **Casos de Estudio**

- [Problemas Resueltos](#aprendizajes-por-problema)
- [Lessons Learned](#lessons-learned)
- [Code Quality](#principios-de-código-limpio)

### 🚀 **Proceso de Mejora**

- [TDD en Algoritmos](#ventajas-del-tdd-en-algoritmos)
- [Reflexiones](#reflexiones-sobre-el-proceso)

---

## 🎓 Filosofía de Aprendizaje

> **"No buscamos memorizar soluciones, sino construir intuición algorítmica"**

### Principios Fundamentales:

🧠 **Aprendizaje Guiado**: Mentorización paso a paso sin revelar soluciones completas  
🎯 **TDD First**: Tests definen comportamiento antes que implementación  
📈 **Progresión Iterativa**: De solución básica → optimizada → documentada  
🔍 **Pattern Recognition**: Identificar y catalogar técnicas reutilizables  
📚 **Knowledge Building**: Cada problema enriquece la base de conocimiento

### Beneficios de este Enfoque:

- ✅ **Comprensión profunda** vs memorización superficial
- ✅ **Confianza en testing** antes de optimizar
- ✅ **Vocabulario técnico** estructurado y creciente
- ✅ **Transferencia de aprendizaje** entre problemas similares

## 🔄 Metodología TDD (Test-Driven Development)

### 🏁 **Ciclo Completo TDD**

```
🔴 RED → 🟢 GREEN → 🔵 REFACTOR → 🔁 REPEAT
```

### 🔴 **RED Phase - Escribir Tests que Fallan**

**🎯 Objetivo**: Definir comportamiento esperado antes de implementar

1. **📝 Análisis del problema**:

   - Entender completamente enunciado y restricciones
   - Identificar inputs, outputs y edge cases
   - Aclarar ambigüedades

2. **🧪 Casos de prueba colaborativos**:

   - ⚠️ **NUNCA auto-generar tests**
   - Implementar tests basados en ejemplos de LeetCode
   - Guiar al usuario: "¿Qué casos de prueba ves?"

3. **🚨 Casos edge**:

   - Arrays vacíos, elementos únicos
   - Valores mínimos/máximos de constraints
   - Casos donde algoritmo podría fallar

4. **✅ Verificación**:
   - Confirmar que tests fallan con función skeleton
   - ¡Tests en rojo significan que están bien escritos!

**Ejemplo práctico**:

```typescript
// 🔴 RED: Tests fallan porque función está vacía
describe("Longest Substring Without Repeating Characters", () => {
  it('should return 3 for "abcabcbb"', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });
});
```

### 🟢 **GREEN Phase - Implementar Solución Mínima**

**🎯 Objetivo**: Hacer que todos los tests pasen con el mínimo código posible

1. **🛠️ Solución funcional primera**:

   - Priorizar que **funcione** sobre que sea **eficiente**
   - ¡Fuerza bruta O(n²) está bien inicialmente!
   - "Make it work, then make it better"

2. **🎯 Enfoque pragmático**:

   - Sin optimización prematura
   - Si tests pasan, el algoritmo es correcto
   - Resistir tentación de "perfectionism paralysis"

3. **🏷️ Nombres descriptivos desde el inicio**:

   - `leftPointer` > `i` o `p1`
   - `charPositions` > `map` o `seen`
   - Código auto-explicativo

4. **⚡ Iteración rápida**:
   - `npm run test:watch` para feedback inmediato
   - Pequeños cambios, verificación constante
   - Debugging en tiempo real

**Ejemplo práctico**:

```typescript
// 🟢 GREEN: Solución simple que funciona
function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;

  // Fuerza bruta O(n²) - ¡pero funciona!
  for (let i = 0; i < s.length; i++) {
    const seen = new Set<string>();
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }

  return maxLength;
}
```

### 🔵 **REFACTOR Phase - Optimizar y Documentar**

**🎯 Objetivo**: Mejorar calidad sin romper funcionalidad (tests siguen pasando)

1. **📈 Análisis de complejidad**:

   - Evaluar tiempo y espacio actual
   - Identificar cuellos de botella
   - ¿Puede optimizarse O(n²) → O(n)?

2. **🛠️ Refactoring seguro**:

   - Un cambio a la vez
   - Tests deben seguir pasando
   - Si tests fallan, revertir inmediatamente

3. **📝 Documentación completa**:

   - `explanation.md`: Análisis detallado en español
   - `post-solution.md`: Formato LeetCode en inglés
   - Comentarios en código explicando lógica

4. **📦 Knowledge base update**:
   - Agregar patrones identificados
   - Actualizar conceptos generales
   - Cross-reference con problemas similares

**Ejemplo de evolución**:

```typescript
// 🔵 REFACTOR: Optimización O(n²) → O(n)
function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let start = 0;
  const charPositions = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    if (charPositions.has(s[end])) {
      start = Math.max(start, charPositions.get(s[end])! + 1);
    }
    charPositions.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```

## Estructura Estándar por Problema

Cada problema sigue la estructura organizada por categorías temáticas:

```
top-interview/
├── metodologia-y-aprendizajes.md      # Este archivo
├── array-string/                      # Problemas de Arrays y Strings
│   ├── merge-sorted-array/
│   │   ├── merge-sorted-array.ts
│   │   ├── merge-sorted-array.test.ts
│   │   ├── merge-sorted-array-explanation.md
│   │   └── merge-sorted-array-post-solution.md
│   └── remove-element/
│       ├── remove-element.ts
│       ├── remove-element.test.ts
│       ├── remove-element-explanation.md
│       └── remove-element-post-solution.md
└── [otras-categorias]/                # Futuras categorías (linked-lists, trees, etc.)
```

### Categorías de Problemas

- **array-string/**: Manipulación de arrays y strings, two pointers, sliding window
- **linked-list/**: Problemas de listas enlazadas, detección de ciclos, traversal
- **[trees/]**: Árboles binarios y traversal (futuro)
- **[dynamic-programming/]**: Programación dinámica (futuro)

---

## 📊 Quick Reference - ¿Cuándo usar cada Patrón?

### 🔍 **Decision Tree Rápido**

```
🤔 ¿Qué tipo de problema es?
├── 📊 Arrays/Strings con BÚSQUEDA rápida? → 🗺️ Hash Maps
├── 📋 Array ORDENADO con pares/validación? → 👥 Two Pointers
├── 🎨 Substring/subarray CONTIGUO? → 💬 Sliding Window
├── 🔗 Lista enlazada con CICLOS? → 🗺️ Hash Set/Two Pointers
└── 🎯 Optimización con orden? → 💪 Greedy + Sort
```

### 🏆 **Top Patterns por Eficiencia**

| 🏅 Rank   | Pattern            | Optimization             | Casos Típicos               |
| --------- | ------------------ | ------------------------ | --------------------------- |
| 🥇 **#1** | **Hash Maps**      | O(n²) → O(n)             | Two Sum, frequency counting |
| 🥈 **#2** | **Two Pointers**   | O(n²) → O(n)             | Sorted arrays, palindromes  |
| 🥉 **#3** | **Sliding Window** | O(n²) → O(n)             | Substring problems          |
| 🏅 **#4** | **Greedy + Sort**  | Exponential → O(n log n) | Interval problems           |

### ⚡ **Signals de Reconocimiento de Patrones**

**🗺️ Hash Maps cuando ves:**

- "find pair that sums to target"
- "count frequency of..."
- "check if exists"
- "map/lookup"

**👥 Two Pointers cuando ves:**

- "sorted array"
- "palindrome"
- "merge two arrays"
- "remove duplicates in-place"

**💬 Sliding Window cuando ves:**

- "substring"/"subarray"
- "longest/shortest/maximum/minimum"
- "contiguous elements"
- "window of size k"

---

## 👥 Two Pointers Pattern

### 🎯 **Concepto Central**

Usar dos índices que se mueven de manera coordinada para resolver problemas en una sola pasada.

### 🎨 **Visualización de Tipos**

#### **1️⃣ Convergentes (Opposite Direction)**

```
Array: [1, 2, 3, 4, 5, 6, 7, 8]
        ↑                 ↑
      left             right
       ⬇️                 ⬆️
     [1, 2, 3, 4, 5, 6, 7, 8]
           ↑           ↑
         left       right
```

**🎯 Uso típico**: Palindromes, two sum en array ordenado

#### **2️⃣ Paralelos (Fast/Slow)**

```
Array: [1, 1, 2, 2, 2, 3, 3]
        ↑     ↑
      slow   fast
       ⬇️       ⬇️
     [1, 1, 2, 2, 2, 3, 3]
           ↑        ↑
         slow     fast
```

**🎯 Uso típico**: Remove duplicates, cycle detection

### 🛠️ **Templates Reutilizables**

#### **Template Convergente**

```typescript
function twoPointersConvergent(arr: number[], target: number): number[] {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return [left, right];
    if (sum < target) left++; // Necesitamos suma mayor
    else right--; // Necesitamos suma menor
  }

  return [];
}
```

#### **Template Paralelo**

```typescript
function twoPointersParallel(arr: number[]): number {
  let writeIndex = 0; // slow pointer

  for (let readIndex = 0; readIndex < arr.length; readIndex++) { // fast pointer
    if (/* condición para mantener elemento */) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }

  return writeIndex; // nueva longitud
}
```

### ✅ **Ventajas Clave**

- 🚀 **Performance**: O(n) vs O(n²) fuerza bruta
- 💾 **Memory**: O(1) espacio adicional
- 🎯 **Simplicidad**: Lógica directa y clara
- ⚡ **In-place**: Modificación directa sin arrays extra

## 🗺️ Hash Maps / Hash Tables

### 🎯 **Concepto Central**

Estructura de datos que mapea claves a valores con acceso O(1), fundamental para convertir búsquedas O(n) en lookups instantáneos.

### 📊 **Transformación de Complejidad**

```
❌ Fuerza Bruta:           ✅ Hash Map Optimizado:
for (let i = 0; i < n; i++) {    const seen = new Map();
  for (let j = i+1; j < n; j++) {  for (let i = 0; i < n; i++) {
    if (condition(i,j)) {            if (seen.has(complement)) {
      return [i, j];                   return [seen.get(complement), i];
    }                                }
  }                                seen.set(nums[i], i);
}                                }

O(n²) tiempo                   O(n) tiempo, O(n) espacio
```

### 🛠️ **Template Universal**

```typescript
function hashMapPattern<T, R>(items: T[], target: R): number[] {
  const seen = new Map<T, number>(); // valor -> índice

  for (let i = 0; i < items.length; i++) {
    const complement = computeComplement(target, items[i]);

    // ⚡ O(1) lookup - clave del patrón
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }

    // 💾 Store para futuras búsquedas
    seen.set(items[i], i);
  }

  return [];
}
```

### 🎯 **Casos de Uso Principales**

| Problema                | Hash Map Almacena | Lookup             | Beneficio             |
| ----------------------- | ----------------- | ------------------ | --------------------- |
| **Two Sum**             | `value → index`   | `target - current` | O(n²) → O(n)          |
| **Frequency Count**     | `item → count`    | `item`             | Conteo eficiente      |
| **Duplicate Detection** | `item → boolean`  | `item`             | Detección instantánea |
| **Cycle Detection**     | `node → visited`  | `current`          | O(n) vs O(1) space    |

### ⚡ **Trade-offs y Consideraciones**

**✅ Ventajas:**

- Lookup O(1) promedio
- API intuitiva y expresiva
- Manejo automático de colisiones

**⚠️ Consideraciones:**

- O(n) espacio adicional
- Overhead de hashing
- Peor caso O(n) en lookups (raro)

### Sliding Window

- **Cuándo usar**: Subarrays contiguos, optimización de rangos
- **Tipos**: Tamaño fijo, tamaño variable, múltiples ventanas
- **Optimización típica**: O(n²) → O(n)

### Greedy Algorithms

- **Cuándo usar**: Decisiones locales óptimas llevan a solución global
- **Clave**: Demostrar que elección local es segura
- **Ejemplos**: Intervalos, scheduling, optimización

## Aprendizajes por Problema

### Merge Sorted Array (LeetCode 88)

**Patrón**: Two Pointers  
**Técnica clave**: Merge desde el final para evitar sobrescritura  
**Insight**: Aprovechar restricciones del problema (espacio extra en nums1)  
**Complejidad**: O(m+n) tiempo, O(1) espacio  
**Lección**: La dirección del procesamiento puede ser crucial para optimización

### Linked List Cycle (LeetCode 141)

**Patrón**: Cycle Detection / Hash Set Tracking  
**Técnica clave**: Rastrear nodos visitados por referencia, no por valor  
**Insight**: Comparar objetos/referencias vs valores para detectar revisitas  
**Complejidad**: O(n) tiempo, O(n) espacio (alternativa O(1) con Two Pointers)  
**Lección**: Entender diferencia entre representación visual de LeetCode y estructura real de datos

---

## 🎓 Lessons Learned

### 🏆 **Top Insights de Algoritmos**

#### **1️⃣ Pattern Recognition es Clave**

- 🔍 **Signal words** revelan técnicas: "sorted", "substring", "pair", "cycle"
- 📚 **Template matching**: Reconocer structure común entre problemas
- ⚡ **Quick decisions**: Decision tree mental acelera resolución

#### **2️⃣ Optimización Progresiva**

- 🔴 **Start simple**: Fuerza bruta que funciona > elegancia que falla
- 🟢 **Identify bottlenecks**: Profiling mental de O(n²) loops
- 🔵 **Apply patterns**: Hash maps, two pointers, sliding window

#### **3️⃣ Testing como Safety Net**

- ✅ **Confianza**: Tests comprueban correctness antes de optimizar
- 🔄 **Refactoring seguro**: Cambios sin miedo a romper funcionalidad
- 📝 **Living documentation**: Tests explican comportamiento esperado

### 🛠️ **Technical Debt Prevention**

#### **🏷️ Naming Conventions**

- `leftPointer`, `rightPointer` > `i`, `j`
- `charPositions`, `frequencyMap` > `map`, `seen`
- `hasValidTriangle()` > `check()`

#### **📝 Documentation Standards**

- **Problem context**: Siempre número LeetCode + descripción
- **Complexity analysis**: Tiempo y espacio con explicación
- **Why it works**: Lógica del algoritmo, no solo implementación

#### **🧪 Testing Strategy**

- **LeetCode examples**: Casos básicos siempre
- **Edge cases**: Arrays vacíos, elementos únicos
- **Stress tests**: Constraints máximos cuando relevante

### 🚀 **Performance Mindset**

#### **📈 Big O Awareness**

```
O(1) > O(log n) > O(n) > O(n log n) > O(n²) > O(2^n)
✅      ✅        ✅      ✅         ⚠️        ❌
```

#### **🔄 Common Optimizations**

- **O(n²) → O(n)**: Hash maps para lookups
- **O(n²) → O(n log n)**: Sorting + two pointers
- **O(n) → O(log n)**: Binary search en datos ordenados
- **O(n) space → O(1)**: In-place modifications

### 🧑‍🏫 **Mentorship Insights**

#### **✅ Effective Guidance**

- ❓ **Socratic method**: Preguntas que guían al descubrimiento
- 💡 **Hint progression**: De conceptos generales a específicos
- 🎯 **Pattern focus**: Enseñar técnicas, no soluciones

#### **❌ Avoid These Pitfalls**

- Dar soluciones completas inmediatamente
- Optimizar antes de que funcione básicamente
- Asumir conocimiento previo de patrones

### Naming Conventions

- **Variables descriptivas**: `lastUsefulIndexOfNums1` > `i` o `p1`
- **Funciones claras**: `merge()` describe exactamente la operación
- **Comentarios en español**: Lógica explicada en idioma natural

### Testing Strategy

- **Casos básicos**: Todos los ejemplos de LeetCode
- **Edge cases**: Arrays vacíos, elementos únicos, casos límite
- **Error scenarios**: Inputs inválidos cuando corresponda
- **Performance tests**: Para problemas con restricciones de tiempo

### Documentation Standards

- **Problem context**: Siempre incluir número de LeetCode y descripción
- **Complexity analysis**: Tiempo y espacio con explicación
- **Algorithm explanation**: Por qué funciona, no solo cómo
- **Trade-offs discussed**: Alternativas consideradas y rechazadas

## Reflexiones sobre el Proceso

### Ventajas del TDD en Algoritmos

1. **Claridad de requisitos**: Tests definen comportamiento exacto
2. **Confianza en solución**: Cobertura completa de casos
3. **Refactoring seguro**: Cambios respaldados por tests
4. **Documentación viva**: Tests como especificación ejecutable

### Lessons Learned

- **Start simple**: Implementación básica primero, optimización después
- **Name things well**: Código auto-documentado reduce bugs
- **Think edge cases**: Los casos límite revelan la robustez del algoritmo
- **Pattern recognition**: Cada problema enseña técnicas reutilizables

## Patrones y Técnicas Identificados

### Two Pointers Pattern

**Problema ejemplo**: Valid Palindrome (LeetCode 125), Is Subsequence (LeetCode 392)

**Variantes identificadas**:

#### **1. Two Pointers Convergentes (Palindrome Pattern)**

- **Uso**: Verificación de propiedades simétricas
- **Movimiento**: Desde extremos hacia el centro
- **Velocidad**: Simétrica (ambos avanzan al mismo ritmo)

```typescript
let left = 0;
let right = array.length - 1;

while (left < right) {
  // Procesar/comparar elementos
  left++;
  right--;
}
```

#### **2. Two Pointers Paralelos (Sequential Matching Pattern)**

- **Uso**: Búsqueda de subsecuencias, matching secuencial
- **Movimiento**: Ambos hacia adelante, velocidades diferentes
- **Velocidad**: Variable (uno avanza condicionalmente)

```typescript
let target = 0; // Lo que buscamos
let source = 0; // Donde buscamos

while (target < targetStr.length && source < sourceStr.length) {
  if (targetStr[target] === sourceStr[source]) {
    target++; // Avanza solo cuando coincide
  }
  source++; // Siempre avanza
}

return target === targetStr.length;
```

**Ventajas generales**:

- ✅ Complejidad espacial O(1)
- ✅ Una sola pasada O(n) o O(n+m)
- ✅ Procesamiento in-place
- ✅ Early termination posible

**Consideraciones por tipo**:

- **Convergentes**: Verificar condiciones de frontera (`left < right`)
- **Paralelos**: Manejar velocidades diferentes y condiciones de término

#### **3. Two Pointers Write-Read Pattern (In-Place Modification)**

**Problema ejemplo**: Remove Duplicates from Sorted Array II (LeetCode 80)

**Concepto**: Usar un puntero para leer secuencialmente y otro para escribir elementos válidos in-place

**Estrategia**:

- **Read pointer (`i`)**: Recorre todo el array
- **Write pointer (`writeIndex`)**: Marca dónde escribir el próximo elemento válido
- **State tracker (`count`)**: Mantiene estado entre lecturas

```typescript
function removeDuplicates(nums: number[]): number {
  let count = 0;
  let writeIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      count = 1; // Nuevo elemento
      nums[writeIndex] = nums[i];
      writeIndex++;
    } else if (count < 2) {
      count++; // Duplicado permitido
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
    // Si count >= 2, solo avanzar read pointer
  }

  return writeIndex;
}
```

**Ventajas**:

- ✅ O(1) espacio (cumple restricción in-place)
- ✅ O(n) tiempo (una sola pasada)
- ✅ Aprovecha array ordenado (duplicados consecutivos)
- ✅ Flexible para diferentes límites de duplicados

**Patrón aplicable a**:

- Remove Duplicates from Sorted Array (límite = 1)
- Remove Element (condicional de eliminación)
- Move Zeroes (reorganización in-place)

### In-Place Processing

**Concepto**: Procesar datos sin crear estructuras auxiliares

**Aplicación**: En Valid Palindrome, saltar caracteres no alfanuméricos durante comparación vs. crear string limpio

**Beneficios**:

- Reduce complejidad espacial
- Mejora eficiencia en memoria
- Permite procesamiento de streams grandes

### Sequential Matching Pattern

**Concepto**: Encontrar elementos en orden específico sin requerir posiciones consecutivas

**Aplicación**: En Is Subsequence, verificar si string `s` aparece como subsecuencia en string `t`

**Estrategia clave**: Greedy matching - tomar la primera ocurrencia disponible

**Template**:

```typescript
function isSubsequence(target: string, source: string): boolean {
  let targetIndex = 0;
  let sourceIndex = 0;

  while (targetIndex < target.length && sourceIndex < source.length) {
    if (target[targetIndex] === source[sourceIndex]) {
      targetIndex++;
    }
    sourceIndex++;
  }

  return targetIndex === target.length;
}
```

**Beneficios**:

- Una sola pasada O(n+m)
- No requiere backtracking
- Estrategia greedy es óptima para subsecuencias

### Character Validation Patterns

**Regex vs Manual Checks**:

```typescript
// Regex approach (más legible)
const isAlphaNumeric = (char: string): boolean => {
  return /[a-z0-9]/i.test(char);
};

// Manual approach (más eficiente)
const isAlphaNumeric = (char: string): boolean => {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122)
  ); // a-z
};
```

**Trade-off**: Legibilidad vs. rendimiento micro

## Hash Table Patterns

### Frequency Counter Pattern

**Concepto**: Usar HashMap para contar occurrencias de elementos y verificar disponibilidad

**Aplicación**: Ransom Note - verificar si tenemos suficientes caracteres para construir una cadena

**Problema resuelto**: LeetCode 383: Ransom Note

**Template**:

```typescript
function canConstruct(target: string, source: string): boolean {
  // Crear HashMap para contar caracteres disponibles
  const sourceCount = new Map<string, number>();

  // Fase 1: Contar todos los caracteres del source
  for (const char of source) {
    sourceCount.set(char, (sourceCount.get(char) || 0) + 1);
  }

  // Fase 2: Verificar y "consumir" caracteres para el target
  for (const char of target) {
    if (!sourceCount.has(char) || sourceCount.get(char)! <= 0) {
      return false; // No disponible o agotado
    }
    sourceCount.set(char, sourceCount.get(char)! - 1);
  }

  return true;
}
```

**Estrategias clave**:

- **Two-phase algorithm**: Separar conteo de verificación
- **Early termination**: Retornar false tan pronto como sea imposible
- **Character consumption**: Decrementar contador simula "uso" del carácter

**Optimizaciones**:

- Early return por longitud: Si `target.length > source.length`
- Uso de `Map<string, number>` vs objeto para flexibilidad
- Verificación completa: existencia AND cantidad disponible

**Complejidad típica**:

- Tiempo: O(n + m) donde n = target length, m = source length
- Espacio: O(k) donde k = caracteres únicos en source

**Variaciones del patrón**:

- **Anagrams**: Verificar si dos strings tienen misma frecuencia de caracteres
- **Character replacement**: Verificar si puedes transformar un string con X reemplazos
- **Substring permutation**: Encontrar permutaciones de substring en texto

**Cuándo usar**:

- Problemas que requieren contar elementos
- Verificar disponibilidad de recursos limitados
- Comparar distribuciones de caracteres/elementos
- Problemas de "matching" con restricciones de frecuencia

### Sliding Window Pattern

**Problema ejemplo**: Minimum Size Subarray Sum (LeetCode 209)

**Concepto central**: Ventana deslizante de tamaño variable que se expande y contrae dinámicamente para optimizar una métrica mientras mantiene una condición.

#### **Variable-Size Sliding Window (Optimization Pattern)**

- **Uso**: Encontrar subarray óptimo (mínimo/máximo) que cumple condición
- **Estructura**: Dos punteros (`left`, `right`) que definen ventana actual
- **Movimiento**:
  - `right` avanza siempre (expansión)
  - `left` avanza condicionalmente (contracción)

```typescript
let left = 0;
let sum = 0;
let minLength = Infinity;

for (let right = 0; right < nums.length; right++) {
  // EXPANDIR: agregar elemento actual
  sum += nums[right];

  // CONTRAER: mientras la condición se cumple
  while (sum >= target) {
    minLength = Math.min(minLength, right - left + 1);
    sum -= nums[left];
    left++;
  }
}
```

**Invariante clave**: Cada elemento se visita máximo 2 veces (una vez por `right`, una vez por `left`)

**Patrón de decisión**:

- **Expandir**: Cuando NO cumplimos la condición objetivo
- **Contraer**: Cuando SÍ cumplimos la condición (intentar optimizar)

**Complejidad típica**:

- Tiempo: O(n) - cada elemento visitado máximo 2 veces
- Espacio: O(1) - solo variables auxiliares

**Casos de inicialización importantes**:

- `minLength = Infinity` para problemas de minimización
- `maxLength = 0` para problemas de maximización
- Usar `Math.min/Math.max` para actualizar valores óptimos

**Cuándo usar**:

- Problemas de subarray/substring con optimización (min/max longitud)
- Condición que puede evaluarse incrementalmente
- Necesidad de mantener estado de ventana (suma, producto, caracteres únicos)
- Alternativa eficiente a enfoques O(n²) de fuerza bruta

## Stack Patterns

### LIFO (Last In, First Out) Pattern

**Problema tipo**: Balanceo de símbolos, validación de secuencias anidadas

**Estructura mental**: "Último en entrar, primero en salir"

**Casos de uso identificados**:

#### **1. Parentheses Validation (Symbol Matching Pattern)**

**Problema**: Valid Parentheses

**Patrón fundamental**:

```typescript
const stack: string[] = [];
const pairs: Record<string, string> = {
  ")": "(",
  "}": "{",
  "]": "[", // cierre → apertura
};

for (const char of input) {
  if (isOpening(char)) {
    stack.push(char);
  } else {
    if (stack.length === 0) return false; // Early termination
    const last = stack.pop();
    if (last !== pairs[char]) return false; // Mismatch
  }
}
return stack.length === 0; // All symbols matched
```

**Insights clave**:

- **Record mapping**: Mapear caracteres de cierre → apertura (no al revés)
- **¿Por qué esta dirección?**: Solo necesitamos lookup cuando encontramos cierres
- **Early termination**: Return false inmediatamente al detectar error
- **Invariante final**: Stack vacío = todos los pares cerrados correctamente

**Ventajas del Record approach vs comparaciones múltiples**:

- **Eliminación de repetición**: Una línea vs múltiples `if` statements
- **Mantenibilidad**: Agregar nuevos símbolos = una línea en el objeto
- **Escalabilidad**: Fácil extensión para otros símbolos de agrupación
- **Legibilidad**: Relación apertura/cierre explícita y visual
- **Principio DRY**: Datos separados de lógica

**Refactorización típica**:

```typescript
// ❌ Repetitivo
if (
  (char === ")" && last !== "(") ||
  (char === "}" && last !== "{") ||
  (char === "]" && last !== "[")
)
  return false;

// ✅ Elegante
if (last !== pairs[char]) return false;
```

**Complejidad**:

- Tiempo: O(n) - cada carácter visitado una vez, push/pop son O(1)
- Espacio: O(n) - peor caso: todos caracteres de apertura (ej: "((((((")

**Cuándo NO usar contador simple**:

- Múltiples tipos de símbolos (ej: `()`, `{}`, `[]`)
- Necesidad de recordar **orden** y **tipo** específico
- Ejemplo fallido con contador: `"([)]"` → contador da resultado incorrecto

**Casos extremos importantes**:

- Cadena vacía: return true (técnicamente balanceada)
- Solo aperturas: stack no vacío al final → false
- Solo cierres: stack vacío en primer cierre → false
- Tipos mezclados incorrectos: orden LIFO violado → false

**Cuándo usar Stack Pattern**:

- Problemas de **balanceo** y **anidamiento**
- Validación de secuencias con orden LIFO
- Necesidad de recordar **estado histórico** en orden reverso
- Parsing de expresiones, validación de sintaxis
- Cualquier problema donde "el último elemento procesado es el primero en resolverse"

### Linked Lists Fundamentals

**Concepto clave**: Estructuras de datos donde elementos no están en memoria contigua, sino conectados por referencias.

#### **Anatomía de una Linked List**

```typescript
class ListNode {
  val: number; // Valor almacenado
  next: ListNode | null; // Referencia al siguiente nodo

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
```

#### **Diferencias clave vs Arrays**

| Aspecto            | Array           | Linked List         |
| ------------------ | --------------- | ------------------- |
| **Memoria**        | Contigua        | Dispersa            |
| **Acceso**         | O(1) por índice | O(n) secuencial     |
| **Inserción**      | O(n) (shift)    | O(1) con referencia |
| **Representación** | `[1,2,3,4]`     | `1->2->3->4->null`  |

#### **Interpretación de inputs LeetCode**

**Lo que ves**: `head = [3,2,0,-4], pos = 1`  
**Lo que realmente es**:

```typescript
// LeetCode construye internamente:
const head = {
  val: 3,
  next: {
    val: 2,    // ← pos = 1 apunta aquí
    next: {
      val: 0,
      next: {
        val: -4,
        next: [referencia a nodo pos=1] // ← ciclo creado aquí
      }
    }
  }
}
// Tu función solo recibe: head (primer nodo)
// NO recibes: pos (usado solo para construcción)
```

#### **Cycle Detection Patterns**

**Problema ejemplo**: Linked List Cycle (LeetCode 141)

**Patrón 1: HashSet Tracking (O(n) space)**

```typescript
function hasCycle(head: ListNode | null): boolean {
  const visited = new Set<ListNode>();
  let current = head;

  while (current !== null) {
    if (visited.has(current)) {
      return true; // Nodo revisitado = ciclo
    }
    visited.add(current);
    current = current.next;
  }

  return false; // Llegamos a null = no hay ciclo
}
```

**Patrón 2: Two Pointers - Floyd's Algorithm (O(1) space)**

```typescript
function hasCycle(head: ListNode | null): boolean {
  let slow = head; // Tortuga: 1 paso
  let fast = head; // Liebre: 2 pasos

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Se encontraron = hay ciclo
    }
  }

  return false; // fast llegó a null = no hay ciclo
}
```

#### **Consideraciones importantes**

**Referencias vs Valores**:

- Comparamos **objetos/referencias** (`visited.has(current)`)
- NO comparamos valores (`current.val`)
- Dos nodos pueden tener mismo valor pero ser objetos distintos

**Edge Cases típicos**:

- Lista vacía: `head = null`
- Un solo nodo sin ciclo: `[1] -> null`
- Un solo nodo con ciclo: `[1] -> [1]` (apunta a sí mismo)
- Ciclo al inicio, en el medio, al final

**Patterns de recorrido**:

```typescript
// Recorrido básico
let current = head;
while (current !== null) {
  // Procesar current.val
  current = current.next;
}

// ⚠️ PELIGRO con ciclos: loop infinito sin detección
```

**Trade-offs de enfoques**:

- **HashSet**: Intuitivo, fácil debug, O(n) memoria
- **Two Pointers**: Elegante, O(1) memoria, más complejo conceptualmente

#### **Lecciones del patrón**

1. **Comprensión estructural**: Linked lists ≠ arrays
2. **Representación LeetCode**: Visual vs implementación real
3. **Detección de ciclos**: Problema fundamental en estructuras enlazadas
4. **Algoritmos clásicos**: Floyd's cycle detection como referente
5. **Trade-offs**: Claridad vs eficiencia de memoria

**Cuándo sospechar linked list cycle**:

- Problema menciona "cycle", "loop", "circular"
- Seguimiento de referencias/punteros
- Detección de estados repetidos en secuencias

---

### Sliding Window Pattern

**Problema ejemplo**: Longest Substring Without Repeating Characters (LeetCode 3)

**Concepto central**: Mantener una "ventana" dinámica de elementos válidos que se expande y contrae según condiciones del problema.

#### **Tipos de Sliding Window**

##### **1. Fixed Size Sliding Window**

- **Uso**: Ventana de tamaño constante que se desliza
- **Implementación**: Un solo puntero + aritmética de índices
- **Ejemplo**: Maximum sum subarray of size k

```typescript
function maxSumSubarray(arr: number[], k: number): number {
  let windowSum = 0;

  // Inicializar ventana
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Deslizar ventana
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
```

##### **2. Variable Size Sliding Window - Expanding/Contracting**

- **Uso**: Ventana que cambia de tamaño según condiciones
- **Implementación**: Two pointers típicamente
- **Ejemplo**: Minimum window substring

```typescript
function variableSlidingWindow(arr: number[]): number {
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < arr.length; right++) {
    // Expandir ventana agregando arr[right]

    while (/* condición de contracción */) {
      // Contraer ventana removiendo arr[left]
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
```

##### **3. Optimized Sliding Window - Direct Jumps**

- **Uso**: Evitar movimientos paso a paso usando información almacenada
- **Implementación**: HashMap + saltos directos
- **Ejemplo**: Longest substring without repeating characters

```typescript
function optimizedSlidingWindow(s: string): number {
  let maxLength = 0;
  let start = 0;
  const charPositions = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    if (charPositions.has(s[end])) {
      // Salto directo, solo hacia adelante
      start = Math.max(start, charPositions.get(s[end])! + 1);
    }

    charPositions.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```

#### **Cuándo NO usar Two Pointers con Sliding Window**

**Mito común**: "Sliding Window siempre usa two pointers"

**Realidad**: Depende del tipo de ventana:

- **Fixed size**: Solo necesitas UN puntero
- **Simple expansion**: Loop implícito + puntero de inicio
- **HashMap optimization**: Saltos directos > movimiento paso a paso

#### **Patterns de Optimización**

##### **De O(n²) a O(n) - HashMap para saltos**

```typescript
// ❌ Subóptimo: O(2n) en peor caso
while (left < right && hasDuplicate) {
  removeFromWindow(arr[left]);
  left++; // Paso a paso
}

// ✅ Optimizado: O(n) exacto
if (seen.has(current)) {
  left = Math.max(left, seen.get(current) + 1); // Salto directo
}
```

##### **Math.max para prevenir retrocesos**

```typescript
// Prevenir que el puntero retroceda
start = Math.max(start, duplicatePosition + 1);
```

**Por qué es necesario**: En patrones como "abcba", cuando encontramos el segundo 'a', el primer 'a' podría estar antes de la ventana actual.

#### **Decision Tree para Sliding Window**

```
¿Es sliding window?
├── ¿Tamaño fijo?
│   ├── Sí → Un puntero + aritmética
│   └── No → ¿Condiciones complejas?
│       ├── Sí → Two pointers explícitos
│       └── No → HashMap + saltos directos
```

#### **Insights clave del patrón**

1. **Sliding Window ≠ Two Pointers**: Son conceptos relacionados pero distintos
2. **Optimización por saltos**: Usar información almacenada para evitar pasos innecesarios
3. **Trade-off Set vs Map**: Set (simplicidad) vs Map (optimización)
4. **Boundary safety**: `Math.max` previene retrocesos en optimizaciones
5. **Pattern recognition**: Identificar cuándo aplicar cada variante

### 🎯 **Próximos Pasos en el Aprendizaje**

#### **📈 Skill Progression**

1. **Beginner**: Recognize patterns, implement with guidance
2. **Intermediate**: Choose optimal pattern independently
3. **Advanced**: Combine multiple patterns, create novel solutions
4. **Expert**: Teach patterns, identify new optimizations

#### **🔜 Areas de Expansión**

- **Dynamic Programming**: Memoization y optimal substructure
- **Graph Algorithms**: DFS, BFS, shortest paths
- **Advanced Data Structures**: Tries, segment trees, union-find
- **System Design**: Scalability patterns

---

## 📚 Referencias y Recursos

### 🔗 **Links Importantes**

- [LeetCode Top Interview 150](https://leetcode.com/studyplan/top-interview-150/)
- [Proyecto GitHub](https://github.com/usuario/leetcode-typescript-tdd)
- [Vitest Documentation](https://vitest.dev/)

### 📖 **Estructura de Archivos**

```
top-interview/
├── metodologia-y-aprendizajes.md    # Este archivo
├── array-string/                    # Fundamentos
├── two-pointers/                    # Técnicas de punteros
├── sliding-window/                  # Ventanas deslizantes
├── hash-table/                      # Mapas y tablas hash
├── intervals/                       # Problemas de intervalos
├── stack/                          # Estructuras LIFO
├── linked-list/                    # Listas enlazadas
├── matrix/                         # Problemas 2D
└── utilidades/                     # Templates y helpers
```

### 🚀 **Comando Útiles**

```bash
# Testing
npm run test:watch                   # Desarrollo continuo
npm run test:file problem-name      # Test específico

# Desarrollo
npm run build                       # Verificar TypeScript
npm run lint                        # Code quality
```

---

_Este knowledge base evoluciona con cada problema resuelto, refinando metodología y capturando nuevos insights algorítmicos._

**🌟 Última actualización**: Problema Longest Substring Without Repeating Characters - Sliding Window optimizado con saltos directos
