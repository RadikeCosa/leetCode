---
title: "hidden-treasure"
difficulty: "easy"
topics:
  - Array
  - Matrix
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-15"
---

# Análisis del Problema: Hidden Treasure

## Enunciado

Dado un array 2D que representa un mapa del fondo oceánico que incluye un tesoro oculto, y un array con las coordenadas ([fila, columna]) para la próxima inmersión de tu búsqueda del tesoro, retornar "Empty", "Found", o "Recovered" siguiendo las siguientes reglas:

El array 2D dado contendrá exactamente un tesoro sin recuperar, el cual ocupará múltiples celdas.

Cada celda en el array 2D contendrá uno de los siguientes valores:

"-": Sin tesoro.
"O": Una parte del tesoro que no ha sido encontrada.
"X": Una parte del tesoro que ya ha sido encontrada.

Si la ubicación de inmersión no tiene tesoro, retornar "Empty".

Si la ubicación de inmersión encuentra tesoro, pero al menos una parte más del tesoro permanece sin encontrar, retornar "Found".

Si la ubicación de inmersión encuentra la última parte sin encontrar del tesoro, retornar "Recovered".

Por ejemplo, dado:

[
[ "-", "X"],
[ "-", "X"],
[ "-", "O"]
]

Y [2, 1] para las coordenadas de la ubicación de inmersión, retornar "Recovered" porque la inmersión encontró la última parte sin encontrar del tesoro.

## Análisis

Este problema requiere procesar un mapa 2D y determinar el estado de una inmersión en coordenadas específicas. Los pasos principales son:

1. **Acceder a la celda objetivo**: Usar las coordenadas [row, col] para acceder a map[row][col]
2. **Verificar contenido de la celda**:
   - Si es "-", retornar "Empty"
   - Si es "X", ya fue encontrada, pero necesitamos verificar si hay otras "O"
   - Si es "O", es una parte nueva encontrada
3. **Contar partes restantes**: Necesitamos saber cuántas "O" quedan en todo el mapa
4. **Determinar el resultado**:
   - Si encontramos "O" y era la última (solo quedaba esta), retornar "Recovered"
   - Si encontramos "O" pero quedan más, retornar "Found"
   - Si encontramos "X", significa que ya estaba encontrada, pero si había otras "O", ahora quedan menos

Casos especiales a considerar:

- Las coordenadas siempre serán válidas (dentro de los límites del array)
- Siempre hay exactamente un tesoro sin recuperar
- El tesoro puede estar en cualquier forma y posición
- "X" representa partes ya encontradas, "O" son las pendientes

## Solución

La solución implementada sigue una lógica clara y paso a paso:

### Paso 1: Extraer las coordenadas

```javascript
const [row, col] = coordinates;
```

Desestructuramos el array de coordenadas para obtener `row` y `col` por separado. Esto hace el código más legible.

### Paso 2: Acceder a la celda objetivo

```javascript
const cell = map[row][col];
```

Accedemos directamente a la posición `map[row][col]` usando las coordenadas extraídas.

### Paso 3: Verificar el contenido de la celda

**Caso 1: Celda vacía ("-")**

```javascript
if (cell === "-") {
  return "Empty";
}
```

Si la celda no contiene tesoro, retornamos inmediatamente "Empty".

**Caso 2: Tesoro ya encontrado ("X")**

```javascript
if (cell === "X") {
  const hasUnfoundTreasure = map.flat().includes("O");
  return hasUnfoundTreasure ? "Found" : "Recovered";
}
```

Si la celda ya fue encontrada:

- **Aplanamos el mapa 2D a 1D con `flat()`**: Imagina que tienes un mapa como una cuadrícula (2D):

  ```javascript
  [
    ["-", "X"],
    ["-", "X"],
    ["-", "O"],
  ];
  ```

  `flat()` lo convierte en una lista plana (1D): `["-", "X", "-", "X", "-", "O"]`
  Esto facilita buscar o contar elementos en todo el mapa sin bucles anidados.

- Usamos `includes("O")` para verificar si quedan partes sin encontrar
- Si quedan "O", retornamos "Found" (encontramos una parte, pero no era la última)
- Si no quedan "O", retornamos "Recovered" (esta era la última parte encontrada)

**Caso 3: Tesoro recién encontrado ("O")**

```javascript
if (cell === "O") {
  const hasOtherTreasure = map.flat().filter((c) => c === "O").length > 1;
  return hasOtherTreasure ? "Found" : "Recovered";
}
```

Si encontramos una parte nueva del tesoro:

Si encontramos una parte nueva del tesoro:

- **Aplanamos el mapa y filtramos todas las "O"**: Usamos `flat()` para convertir el mapa 2D en 1D, luego `filter()` para quedarnos solo con las celdas que contienen "O"
- Contamos cuántas hay con `length`
- Si hay más de 1 "O" (incluyendo la que acabamos de encontrar), retornamos "Found"
- Si solo había esta "O", retornamos "Recovered"

## Complejidad

- **Tiempo**: O(n) donde n es el número total de celdas en el mapa (debido a `flat()` e `includes()` o `filter()`)
- **Espacio**: O(n) en el peor caso (cuando aplanamos el array 2D)

## Aprendizajes

- **Desestructuración de arrays**: `[row, col] = coordinates` para extraer valores de manera elegante
- **Acceso a arrays 2D**: `map[row][col]` para acceder a posiciones específicas
- **Métodos funcionales**: Uso de `flat()`, `includes()`, y `filter()` para procesar arrays 2D
- **Lógica condicional clara**: Separar casos por tipo de celda facilita el razonamiento
- **Verificación de existencia vs conteo**: `includes()` para verificar presencia, `filter().length` para contar
- **Edge cases**: Considerar que "X" puede ser parte de un tesoro parcialmente encontrado