# Summary Ranges - Análisis del Problema

## Descripción del Problema

**LeetCode 228: Summary Ranges**

- **Dificultad**: Easy
- **Temas**: Array

## Enunciado

Se te proporciona un array de enteros únicos y ordenados `nums`. Un rango `[a,b]` es el conjunto de todos los enteros desde `a` hasta `b` (inclusive). Retorna la lista ordenada más pequeña de rangos que cubra exactamente todos los números del array. Es decir, cada elemento de `nums` está cubierto por exactamente uno de los rangos, y no hay ningún entero `x` tal que `x` esté en uno de los rangos pero no en `nums`.

Cada rango `[a,b]` en la lista debe ser mostrado como:

- `"a->b"` si `a != b`
- `"a"` si `a == b`

## Ejemplos

### Ejemplo 1:

- **Input**: `nums = [0,1,2,4,5,7]`
- **Output**: `["0->2","4->5","7"]`
- **Explicación**: Los rangos son:
  - [0,2] --> "0->2"
  - [4,5] --> "4->5"
  - [7,7] --> "7"

### Ejemplo 2:

- **Input**: `nums = [0,2,3,4,6,8,9]`
- **Output**: `["0","2->4","6","8->9"]`
- **Explicación**: Los rangos son:
  - [0,0] --> "0"
  - [2,4] --> "2->4"
  - [6,6] --> "6"
  - [8,9] --> "8->9"

## Restricciones

- `0 <= nums.length <= 20`
- `-2^31 <= nums[i] <= 2^31 - 1`
- Todos los valores de `nums` son únicos
- `nums` está ordenado en orden ascendente

## Análisis Inicial

Este problema pertenece a la categoría de **"Intervals"** porque trata sobre la **consolidación de rangos consecutivos**. La clave está en identificar secuencias continuas de números y representarlas de forma compacta.

### Características del Problema:

1. **Array ordenado**: Los números ya están en orden ascendente
2. **Números únicos**: No hay duplicados
3. **Rangos consecutivos**: Debemos detectar secuencias como [1,2,3] → "1->3"
4. **Formato específico**: Single elements vs ranges

## Enfoque de Solución

### Estrategia: Two-Pointer con Single Pass (Refactorizado)

```typescript
while (i < nums.length) {
  // Marcar el inicio del rango actual
  let rangeStart = nums[i];
  let end = i; // end avanza para encontrar el final del rango

  // Extender end mientras los números sean consecutivos
  while (end < nums.length - 1 && nums[end] + 1 === nums[end + 1]) {
    end++;
  }

  let rangeEnd = nums[end];

  // Formatear según el tamaño del rango
  if (rangeStart === rangeEnd) {
    result.push(`${rangeStart}`); // Elemento único
  } else {
    result.push(`${rangeStart}->${rangeEnd}`); // Rango
  }

  // Saltar al siguiente segmento después del rango actual
  i = end + 1;
}
```

### Trace del Algoritmo

**Para nums = [0,1,2,4,5,7]:**

```
Iteración 1:
- i=0, rangeStart=0, end=0
- nums[0]+1=1 === nums[1]=1 ✓ → end=1
- nums[1]+1=2 === nums[2]=2 ✓ → end=2
- nums[2]+1=3 ≠ nums[3]=4 ✗ → rangeEnd=2
- resultado: "0->2", i=3

Iteración 2:
- i=3, rangeStart=4, end=3
- nums[3]+1=5 === nums[4]=5 ✓ → end=4
- nums[4]+1=6 ≠ nums[5]=7 ✗ → rangeEnd=5
- resultado: "4->5", i=5

Iteración 3:
- i=5, rangeStart=7, end=5
- end=5, length-1=5 → no hay nums[6]
- resultado: "7", i=6

Final: ["0->2", "4->5", "7"]
```

## Complejidad

### Temporal: O(n)

- **Justificación**: Cada elemento del array se visita exactamente una vez
- **Análisis detallado**:
  - El pointer `i` avanza secuencialmente por el array
  - El pointer `end` solo avanza, nunca retrocede
  - Total de operaciones: n comparaciones (una por elemento)
  - No hay loops anidados que incrementen la complejidad

### Espacial: O(1)

- **Auxiliar**: Solo variables `i`, `end`, `rangeStart`, `rangeEnd`
- **Output**: El array `result` no cuenta como espacio auxiliar (es la salida requerida)
- **Sin estructuras adicionales**: No usamos maps, sets, o arrays temporales

## Patrones y Técnicas Utilizadas

### 1. **Two-Pointer Technique**

- **Aplicación**: `i` para recorrer secuencialmente, `end` para encontrar final de rango
- **Ventaja**: Una sola pasada, sin backtracking

### 2. **Consecutive Detection Pattern**

```typescript
nums[end] + 1 === nums[end + 1]; // Detecta números consecutivos
```

### 3. **Range Consolidation**

- **Inicio**: Marcar `rangeStart` en posición `i`
- **Extensión**: Mientras sean consecutivos
- **Finalización**: Cuando se rompe la secuencia

### 4. **Conditional Formatting**

```typescript
rangeStart === rangeEnd ? "single" : "start->end";
```

## Casos Edge y Consideraciones

### Edge Cases Manejados:

1. **Array vacío**: `[]` → `[]`
2. **Un elemento**: `[1]` → `["1"]`
3. **Todo consecutivo**: `[1,2,3,4]` → `["1->4"]`
4. **Nada consecutivo**: `[1,3,5,7]` → `["1","3","5","7"]`
5. **Números negativos**: `[-3,-2,-1]` → `["-3->-1"]`

### Boundary Conditions:

- **`end < nums.length - 1`**: Previene acceso fuera de rango en comparación consecutiva
- **`i < nums.length`**: Permite procesar todos los elementos del array
- **Template literals**: Manejo correcto de números negativos

## Optimizaciones Implementadas

### 1. **Single Pass Algorithm**

- No necesita múltiples recorridos
- Cada elemento se procesa una sola vez

### 2. **In-Place Pointer Management**

- Sin arrays auxiliares para tracking
- Uso eficiente de memoria

### 3. **Early Detection**

- Detecta fin de rango inmediatamente
- No procesa elementos innecesarios

## Aplicaciones del Mundo Real

### Casos de Uso:

- **IP Address Ranges**: Consolidar rangos de IPs consecutivas
- **Database Optimization**: Rangos de IDs para particionado
- **Calendar Scheduling**: Bloques consecutivos de tiempo
- **Data Compression**: Representación compacta de secuencias

### Patrones Relacionados:

- **Merge Intervals**: Fusionar intervalos que se solapan
- **Insert Interval**: Insertar intervalo manteniendo orden
- **Range Module**: Tracking de rangos dinámicos

## Conclusiones

### Lo que Aprendimos:

1. **Interval Processing**: Técnicas fundamentales para manejo de rangos
2. **Two-Pointer Optimization**: Recorrido eficiente de arrays ordenados
3. **Format Conversion**: Transformación de datos numéricos a strings
4. **Edge Case Handling**: Cobertura completa de casos límite
5. **Algorithm Analysis**: Análisis riguroso de complejidad temporal y espacial

Esta implementación demuestra que los problemas de intervalos pueden resolverse eficientemente con técnicas simples pero bien aplicadas, logrando optimalidad tanto en tiempo como en espacio.
