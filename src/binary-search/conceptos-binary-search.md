# Conceptos y Patrones - Binary Search Study Plan

## Introducción

Este documento recopila los conceptos, patrones algorítmicos y técnicas de programación aprendidas durante la resolución del **Binary Search Study Plan** de LeetCode. El enfoque está en entender profundamente la búsqueda binaria y sus variaciones.

## Conceptos Fundamentales

### Búsqueda Binaria Básica

#### Template Principal

```typescript
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

#### Puntos Clave

- **Invariante del bucle**: El target siempre está en el rango `[left, right]`
- **Cálculo de mid**: `Math.floor(left + (right - left) / 2)` evita overflow
- **Condición del bucle**: `left <= right` para incluir el caso de un solo elemento

### Variaciones de Búsqueda Binaria

#### 1. Encontrar el Primer/Último Elemento

**Primer elemento mayor o igual:**

```typescript
function findFirst(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
```

#### 2. Búsqueda en Array Rotado

**Características:**

- Identificar qué mitad está ordenada
- Determinar si el target está en la mitad ordenada
- Ajustar los punteros según corresponda

### Patrones Algorítmicos

#### 1. **Binary Search on Answer**

- Buscar en un rango de posibles respuestas
- Función de verificación que determina si una respuesta es válida
- Minimizar o maximizar la respuesta válida

#### 2. **Peak Finding**

- Encontrar elementos que son mayores que sus vecinos
- Útil en arrays con forma de montaña

#### 3. **Matrix Binary Search**

- Búsqueda en matrices 2D
- Tratar la matriz como array 1D: `index = row * cols + col`

### Técnicas de Implementación

#### Manejo de Límites

```typescript
// Template para evitar errores comunes
let left = 0;
let right = arr.length - 1; // Para búsqueda en elementos existentes
// let right = arr.length;   // Para búsqueda de posición de inserción
```

#### Prevención de Overflow

```typescript
// Correcto: evita overflow en números grandes
const mid = Math.floor(left + (right - left) / 2);

// Incorrecto: puede causar overflow
// const mid = Math.floor((left + right) / 2);
```

## Problemas por Categoría

### Básicos

- [ ] Binary Search (LeetCode 704)
- [ ] Search Insert Position (LeetCode 35)

### Aplicaciones Avanzadas

- [ ] Find First and Last Position (LeetCode 34)
- [ ] Search in Rotated Sorted Array (LeetCode 33)

### Binary Search on Answer

- [ ] Find Peak Element (LeetCode 162)
- [ ] Koko Eating Bananas (LeetCode 875)

## Complejidad Temporal

### Búsqueda Binaria Estándar

- **Tiempo**: O(log n) - dividimos el espacio de búsqueda por la mitad en cada iteración
- **Espacio**: O(1) - solo usamos variables adicionales constantes

### Análisis de Casos

- **Mejor caso**: O(1) - elemento encontrado en el primer intento
- **Caso promedio**: O(log n)
- **Peor caso**: O(log n) - elemento no existe o está al final

## Errores Comunes y Cómo Evitarlos

### 1. Condición del Bucle

```typescript
// ❌ Incorrecto: puede causar bucle infinito
while (left < right) {
  // ...
  left = mid; // Sin +1
}

// ✅ Correcto: siempre progresa
while (left < right) {
  // ...
  left = mid + 1;
}
```

### 2. Cálculo de Límites

```typescript
// Para diferentes tipos de búsqueda
const searchElement = (arr: number[], target: number) => {
  let right = arr.length - 1; // Buscar elemento existente
};

const insertPosition = (arr: number[], target: number) => {
  let right = arr.length; // Buscar posición de inserción
};
```

### 3. Actualización de Punteros

```typescript
// Asegurar que siempre hay progreso
if (condition) {
  right = mid; // No -1 cuando queremos incluir mid
} else {
  left = mid + 1; // Siempre +1 para excluir mid
}
```

## Decisiones de Implementación

### Cuándo Usar Cada Template

#### Template 1: `left <= right`

- **Uso**: Búsqueda de elemento específico
- **Retorno**: Índice del elemento o -1
- **Ventaja**: Más intuitivo para búsquedas básicas

#### Template 2: `left < right`

- **Uso**: Encontrar posición de inserción, primer/último elemento
- **Retorno**: Posición donde insertar o índice del elemento buscado
- **Ventaja**: Evita casos edge de índices

### Nomenclatura de Variables

```typescript
// Nombres descriptivos para claridad
let leftBound = 0;
let rightBound = arr.length - 1;
let middleIndex = Math.floor(leftBound + (rightBound - leftBound) / 2);
```

---

## Referencias y Recursos

- [Binary Search Study Plan - LeetCode](https://leetcode.com/studyplan/binary-search/)
- Problemas relacionados en `src/daily/` que usan binary search
- Comparación con algoritmos de fuerza bruta en problemas específicos

---

_Última actualización: [Fecha]_
_Problemas completados: 0/[Total]_
