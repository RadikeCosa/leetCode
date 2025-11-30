---
name: matrix-builder
source: freecodecamp
series: daily
category: daily
difficulty: easy
topics:
  - matrix
  - Matrix
createdAt: 2025-11-05
---

# Matrix Builder

## Análisis del Problema

Este problema requiere construir una matriz bidimensional (array de arrays) de dimensiones específicas, inicializada con ceros. Es un problema clásico de construcción de estructuras de datos en JavaScript.

### Requisitos principales

- **Input**: Dos números enteros positivos (rows, cols)
- **Output**: Array de arrays con 'rows' filas y 'cols' columnas
- **Contenido**: Todos los elementos deben ser 0
- **Estructura**: Cada fila debe ser un array separado

### Enfoque técnico

La solución requiere crear un array externo con 'rows' elementos, donde cada elemento es un array interno con 'cols' elementos, todos inicializados en 0.

En JavaScript moderno, podemos usar `Array.from()` o bucles anidados para lograr esto eficientemente.

### Consideraciones

- Los números pueden ser grandes (ej: 9 filas × 1 columna)
- La matriz debe ser rectangular (todas las filas igual longitud)
- No hay restricciones especiales en los valores de rows/cols (asumir positivos)

## Solución Implementada

La solución utiliza `Array.from()` para crear la estructura de array bidimensional de manera funcional y elegante. Se aprovecha la capacidad de `Array.from()` para crear arrays con longitudes específicas y aplicar funciones de transformación.

```javascript
function buildMatrix(rows, cols) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );
}
```

Esta implementación:

- Crea un array externo con `rows` elementos usando `{length: rows}`
- Para cada fila, crea un array interno con `cols` elementos usando `{length: cols}`
- Inicializa cada elemento con el valor `0` usando la función `() => 0`

## Complejidad

- **Tiempo**: O(rows × cols) - Se crean exactamente `rows × cols` elementos
- **Espacio**: O(rows × cols) - Se almacena la matriz completa en memoria
- **Eficiencia**: Lineal en el tamaño total de la matriz

## Aprendizajes

- **`Array.from()` con objetos length**: Técnica poderosa para crear arrays de tamaño específico con inicialización
- **Funciones anidadas**: Uso de `Array.from()` dentro de otro `Array.from()` para estructuras multidimensionales
- **Arrow functions**: Sintaxis concisa para funciones simples de transformación
- **Matrices en JavaScript**: Representación como arrays de arrays
- **Inicialización declarativa**: Enfoque funcional vs. imperativo con bucles

### Comparación con otras aproximaciones

**Bucles anidados (imperativo):**

```javascript
function buildMatrixLoops(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}
```

**Array.from() (funcional):** Más conciso y expresivo, pero mismo rendimiento.

## Edge Cases Considerados

- **Rows = 0**: Retorna `[]` (array vacío)
- **Cols = 0**: Retorna array con `rows` arrays vacíos `[[], [], ...]`
- **Rows = 1, Cols = 1**: Matriz 1×1 `[[0]]`
- **Valores grandes**: Funciona eficientemente hasta límites razonables de memoria
- **Inputs no numéricos**: No validados (asumir inputs correctos según problema)
