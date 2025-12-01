---
name: first-bad-version
difficulty: easy
category: binary-search
topics: [Binary Search, Version Control]
source: leetcode
series: standard-search
createdAt: 2025-09-10
---

# First Bad Version - Análisis del Problema

## Descripción del Problema

**LeetCode 278: First Bad Version**

- **Dificultad**: Easy
- **Temas**: Binary Search, Interactive

## Enunciado

Eres un product manager liderando actualmente un equipo para desarrollar un nuevo producto. Desafortunadamente, la última versión de tu producto falla en el control de calidad. Dado que cada versión se desarrolla basándose en la versión anterior, todas las versiones después de una versión mala también son malas.

Supón que tienes `n` versiones `[1, 2, ..., n]` y quieres encontrar la primera mala, que causa que todas las siguientes también sean malas.

Se te proporciona una API `bool isBadVersion(version)` que retorna si la versión es mala. Implementa una función para encontrar la primera versión mala. Debes minimizar el número de llamadas a la API.

## Ejemplos

### Ejemplo 1:

- **Input**: `n = 5, bad = 4`
- **Output**: `4`
- **Explicación**:
  - `call isBadVersion(3) -> false`
  - `call isBadVersion(5) -> true`
  - `call isBadVersion(4) -> true`
  - Entonces 4 es la primera versión mala.

### Ejemplo 2:

- **Input**: `n = 1, bad = 1`
- **Output**: `1`

## Restricciones

- `1 <= bad <= n <= 2^31 - 1`

## Análisis del Problema

### Características Clave

1. **Secuencia Ordenada**: Las versiones están ordenadas [1, 2, 3, ..., n]
2. **Patrón Binario**: Todas las versiones tienen solo dos estados:
   - **Buenas** (false): Versiones 1 hasta X-1
   - **Malas** (true): Versiones X hasta n
3. **Punto de Transición**: Buscamos el punto X donde cambia de "buena" a "mala"
4. **Minimizar API Calls**: El objetivo secundario es eficiencia

### Visualización

Para `n=5, bad=4`:

```
Versión:  1     2     3     4     5
Estado:  good  good  good  bad   bad
         ←──── buenas ────→ ←─ malas ─→
                            ↑
                      PRIMERA MALA
```

### ¿Por qué Binary Search?

**Búsqueda Lineal** sería O(n):

```typescript
for (let i = 1; i <= n; i++) {
  if (isBadVersion(i)) return i; // Hasta n llamadas API
}
```

**Binary Search** es O(log n):

- Dividimos el espacio de búsqueda por la mitad en cada iteración
- Máximo log₂(n) llamadas API

## Solución: Binary Search de "Primera Ocurrencia"

### Diferencias con Binary Search Clásico

| Aspecto             | Binary Search Clásico      | First Occurrence Search      |
| ------------------- | -------------------------- | ---------------------------- |
| **Objetivo**        | Encontrar valor específico | Encontrar primera transición |
| **Condición true**  | `right = mid - 1`          | `right = mid`                |
| **Condición false** | `left = mid + 1`           | `left = mid + 1`             |
| **Loop**            | `left <= right`            | `left < right`               |

### Algoritmo Paso a Paso

```typescript
export var solution = function (isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    let left = 1; // Primer versión posible
    let right = n; // Última versión posible

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        // mid es mala → la primera mala está en [left, mid]
        right = mid; // ¡Mantenemos mid como candidato!
      } else {
        // mid es buena → la primera mala está en [mid+1, right]
        left = mid + 1; // Descartamos mid y todo a la izquierda
      }
    }

    return left; // left == right == primera versión mala
  };
};
```

### Trace del Algoritmo

**Para n=5, bad=4:**

```
Inicial:      left=1, right=5, rango=[1,2,3,4,5]
Iteración 1:  mid=3, isBadVersion(3)=false → left=4, right=5, rango=[4,5]
Iteración 2:  mid=4, isBadVersion(4)=true  → left=4, right=4, rango=[4]
Convergencia: left == right == 4 → ¡Primera versión mala encontrada!
```

**Para n=1, bad=1:**

```
Inicial:      left=1, right=1
Condición:    left < right → false (no entra al loop)
Resultado:    return left = 1 ← ¡Correcto!
```

## Complejidad

### Temporal: O(log n)

- **Justificación**: En cada iteración dividimos el espacio de búsqueda por 2
- **Llamadas API**: Máximo log₂(n) llamadas
- **Ejemplo**: Para n=1,000,000 → máximo 20 llamadas vs 1,000,000 en búsqueda lineal

### Espacial: O(1)

- **Variables**: Solo `left`, `right`, `mid` (espacio constante)
- **Sin recursión**: No uso de stack space adicional

## Conceptos Avanzados

### 1. Higher-Order Functions

```typescript
// LeetCode usa este patrón:
var solution = function (isBadVersion) {
  return function (n) {
    // Tu algoritmo aquí
  };
};

// Equivale a:
function solution(isBadVersion) {
  return function (n) {
    // Tu algoritmo aquí
  };
}
```

**¿Por qué este patrón?**

- LeetCode tiene la función `isBadVersion` real
- Tu algoritmo necesita usar esa función
- El patrón permite "inyectar" la función real en tu algoritmo

### 2. Boundary Conditions

**¿Por qué `left < right` y no `left <= right`?**

- `left <= right` funciona para "encontrar valor exacto"
- `left < right` funciona para "primera ocurrencia"
- Previene loops infinitos en problemas de transición

### 3. ¿Por qué `right = mid` cuando encontramos mala?

```typescript
if (isBadVersion(mid)) {
  right = mid; // ✅ mid podría ser la primera mala
  // vs
  right = mid - 1; // ❌ Podríamos perder la respuesta correcta
}
```

## Casos Edge y Consideraciones

### Edge Cases Manejados

1. **n=1, bad=1**: Una sola versión que es mala
2. **n=1000, bad=1**: Primera versión es mala
3. **n=1000, bad=1000**: Última versión es la primera mala
4. **n=1000, bad=500**: Caso promedio

### Optimizaciones Adicionales

1. **Overflow Protection**: `Math.floor((left + right) / 2)` es seguro
2. **Early Termination**: No aplicable (siempre necesitamos encontrar la primera)
3. **Input Validation**: LeetCode garantiza inputs válidos

## Patrones Relacionados

### Problemas Similares

- **Find First and Last Position of Element in Sorted Array**
- **Search Insert Position**
- **Find Peak Element**

### Template: "Find First Occurrence"

```typescript
function findFirst(arr, condition) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (condition(arr[mid])) {
      right = mid; // Mantener candidato
    } else {
      left = mid + 1; // Descartar izquierda
    }
  }

  return left;
}
```

## Conclusiones

### Lo que Aprendimos

1. **Binary Search Variants**: No solo para encontrar valores, sino transiciones
2. **API Minimization**: La eficiencia no es solo velocidad, sino también recursos
3. **Boundary Handling**: Diferentes condiciones para diferentes objetivos
4. **Higher-Order Patterns**: Funciones que reciben y devuelven funciones
5. **Edge Case Testing**: Importancia de probar n=1 y casos extremos

### Aplicaciones en el Mundo Real

- **Deployment Rollbacks**: Encontrar el primer deploy problemático
- **Version Control**: Identificar el primer commit que introdujo un bug
- **Performance Monitoring**: Detectar cuándo empezó la degradación
- **Database Corruption**: Encontrar el primer registro corrupto en secuencias

Esta implementación demuestra que binary search es mucho más versátil que la búsqueda simple de valores: es una herramienta poderosa para encontrar puntos de transición en cualquier secuencia ordenada.

- **Input**: `n = 1, bad = 1`
- **Output**: `1`

## Restricciones

- `1 <= bad <= n <= 2^31 - 1`

## Análisis Inicial

[El análisis se completará después de resolver el problema]

## Enfoque de Solución

[Se documentará después de la implementación]

## Complejidad

[Se analizará después de la implementación]

## Patrones y Técnicas Utilizadas

[Se documentarán los patrones identificados]
