# Chunk Array - Análisis del Problema

## Descripción del Problema

**LeetCode 2677: Chunk Array**

- **Dificultad**: Easy
- **Temas**: Array

## Enunciado

Dado un array `arr` y un tamaño de chunk `size`, retorna un array dividido en chunks.

Un array dividido en chunks contiene los elementos originales de `arr`, pero consiste en subarrays cada uno de longitud `size`. La longitud del último subarray puede ser menor que `size` si `arr.length` no es divisible uniformemente por `size`.

Por favor resuélvelo sin usar la función `_.chunk` de lodash.

## Ejemplos

### Ejemplo 1:

- **Input**: `arr = [1,2,3,4,5], size = 1`
- **Output**: `[[1],[2],[3],[4],[5]]`
- **Explicación**: El array ha sido dividido en subarrays cada uno con 1 elemento.

### Ejemplo 2:

- **Input**: `arr = [1,9,6,3,2], size = 3`
- **Output**: `[[1,9,6],[3,2]]`
- **Explicación**: El array ha sido dividido en subarrays con 3 elementos. Sin embargo, solo quedan dos elementos para el segundo subarray.

### Ejemplo 3:

- **Input**: `arr = [8,5,3,2,6], size = 6`
- **Output**: `[[8,5,3,2,6]]`
- **Explicación**: El size es mayor que arr.length, por lo tanto todos los elementos están en el primer subarray.

### Ejemplo 4:

- **Input**: `arr = [], size = 1`
- **Output**: `[]`
- **Explicación**: No hay elementos para dividir, por lo tanto se retorna un array vacío.

## Restricciones

- `arr` es un array JSON válido
- `2 <= arr.length <= 10^5`
- `1 <= size <= arr.length + 1`

## Análisis Inicial

### Observaciones Clave:

1. **División sistemática**: Necesitamos avanzar por el array en pasos de `size`
2. **Último chunk variable**: El último subarray puede tener menos elementos que `size`
3. **Edge cases simples**: Array vacío retorna array vacío
4. **Size > length**: Todos los elementos van en un solo chunk

### Patrones Identificados:

- **Iteración con paso**: En lugar de `i++`, usamos `i += size`
- **Extracción de segmentos**: `slice()` es ideal para extraer porciones del array
- **Manejo automático de bordes**: `slice()` maneja automáticamente los límites

## Enfoque de Solución

### Estrategia Elegida: Loop con Slice

```typescript
for (let i = 0; i < arr.length; i += size) {
  result.push(arr.slice(i, i + size));
}
```

### ¿Por qué esta estrategia?

1. **Simplicidad**: El código es directo y fácil de entender
2. **Elegancia**: `slice()` maneja automáticamente el caso del último chunk
3. **Eficiencia**: Cada elemento se procesa exactamente una vez

### Alternativas Consideradas:

- **While loop**: Más verboso, no añade valor
- **Construcción manual**: Requiere lógica adicional para el último chunk
- **Array.from()**: Más complejo sin beneficios claros

## Complejidad

### Análisis Temporal: O(n)

- **Loop principal**: `ceil(n/size)` iteraciones
- **slice() por iteración**: O(size) para copiar elementos
- **Total**: `ceil(n/size) * size ≈ n` → **O(n)**

### Análisis Espacial: O(n)

- **Resultado**: Almacena todos los `n` elementos en estructura de chunks
- **Slice copies**: Cada `slice()` crea copias de los elementos
- **Total**: **O(n)** - óptimo para este tipo de problema

## Patrones y Técnicas Utilizadas

### 1. **Iteración con Paso Variable**

- Patrón: `for (let i = 0; i < length; i += step)`
- Aplicación: Dividir arrays en segmentos de tamaño fijo
- Ventaja: Evita lógica compleja de indexación

### 2. **Array.slice() para Segmentación**

- Patrón: `arr.slice(start, end)` para extraer porciones
- Aplicación: Crear subarrays sin modificar el original
- Ventaja: Manejo automático de límites

### 3. **Edge Case Handling Implícito**

- Patrón: Usar métodos nativos que manejan casos extremos
- Aplicación: `slice()` automáticamente se detiene en el final del array
- Ventaja: Código más limpio sin verificaciones manuales

## Insights y Aprendizajes

### 🎯 **Insight Principal**

La elegancia de esta solución radica en aprovechar el comportamiento natural de `slice()`. En lugar de escribir lógica condicional para manejar el último chunk, dejamos que `slice()` maneje automáticamente el caso donde `i + size > arr.length`.

### 🔧 **Técnica Aprendida**

Cuando necesites dividir arrays en segmentos:

1. Considera iteración con paso en lugar de índice por índice
2. Evalúa si métodos nativos como `slice()` pueden simplificar la lógica
3. Aprovecha el manejo automático de bordes cuando sea posible

### 📈 **Escalabilidad**

Esta solución escala bien:

- **Tiempo**: Linear con el tamaño del input
- **Espacio**: Mínimo overhead adicional
- **Legibilidad**: Fácil de mantener y extender
