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

## Complejidad

## Aprendizajes

## Edge Cases Considerados

- **Rows = 0**: Debería retornar array vacío `[]`
- **Cols = 0**: Cada fila sería un array vacío `[]`, resultando en `[[], [], ...]`
- **Rows = 1, Cols = 1**: Matriz 1×1 `[[0]]`
- **Valores grandes**: Hasta 9×1 como en el ejemplo
- **Inputs no numéricos**: Deberían manejarse con validación
