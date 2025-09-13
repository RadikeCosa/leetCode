# Enfoque y Metodología - Top Interview Problems

## Filosofía de Resolución

Esta colección de problemas de **Top Interview** sigue un enfoque sistemático basado en **aprendizaje guiado** y **desarrollo dirigido por tests (TDD)** para construir intuición algorítmica sólida y habilidades de resolución de problemas.

## Metodología TDD (Test-Driven Development)

### 🔴 **RED Phase - Escribir Tests que Fallan**

1. **Análisis del problema**: Entender completamente el enunciado y restricciones
2. **Casos de prueba**: Implementar tests basados en ejemplos de LeetCode
3. **Casos edge**: Agregar tests para situaciones límite
4. **Verificación**: Confirmar que los tests fallan (función vacía/skeleton)

### 🟢 **GREEN Phase - Implementar Solución Mínima**

1. **Solución funcional**: Escribir código que haga pasar todos los tests
2. **Enfoque pragmático**: Priorizar funcionalidad sobre optimización prematura
3. **Nombres descriptivos**: Variables y funciones auto-explicativas desde el inicio
4. **Iteración rápida**: `npm run test:watch` para feedback inmediato

### 🔵 **REFACTOR Phase - Optimizar y Documentar**

1. **Análisis de complejidad**: Evaluar tiempo y espacio
2. **Documentación completa**: Explanation y post-solution
3. **Patrones identificados**: Documentar técnicas y estrategias utilizadas
4. **Knowledge base**: Actualizar conceptos generales aprendidos

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

## Patrones Algorítmicos Comunes

### Two Pointers

- **Cuándo usar**: Arrays ordenados, búsqueda de pares, merge operations
- **Variantes**: Convergentes, divergentes, diferentes velocidades, múltiples arrays
- **Optimización típica**: O(n²) → O(n)

### Hash Maps / Hash Tables

- **Cuándo usar**: Búsquedas O(1), conteo de frecuencias, mapeo clave-valor
- **Trade-off**: Espacio O(n) por tiempo O(1)
- **Patrón común**: Convertir búsquedas lineales en acceso directo

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

## Principios de Código Limpio

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

_Este archivo se actualiza con cada nuevo problema resuelto, capturando aprendizajes y refinando la metodología._
