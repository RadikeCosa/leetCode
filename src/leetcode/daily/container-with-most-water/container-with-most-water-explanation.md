---
title: "Container With Most Water"
difficulty: "medium"
topics:
  - Array
  - Two Pointers
  - Greedy
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-10-04"
---

## Container With Most Water

Dado un arreglo de números enteros que representan alturas de líneas verticales, encontrar dos líneas que formen un contenedor que pueda contener la mayor cantidad de agua.

## Ejemplos

- Input: height = [1,8,6,2,5,4,8,3,7]
- Output: 49

- Input: height = [1,1]
- Output: 1

## Análisis

La cantidad de agua que puede contener un contenedor formado por dos líneas verticales se calcula como:

**Área = Altura mínima × Ancho**

Donde:

- **Altura mínima**: Es la altura de la línea más baja entre las dos seleccionadas (determina cuánto agua puede contener sin derramarse)
- **Ancho**: Es la distancia entre las dos líneas (índice derecho - índice izquierdo)

Por ejemplo, con líneas en posiciones i=1 (altura=8) y j=8 (altura=7):

- Altura mínima = min(8, 7) = 7
- Ancho = 8 - 1 = 7
- Área = 7 × 7 = 49

El problema requiere encontrar la combinación de dos líneas que maximice esta área.

## Enfoque detallado

La solución utiliza el algoritmo de **two pointers** con un enfoque greedy:

1. **Inicialización**:

   - `left = 0` (inicio del array)
   - `right = height.length - 1` (fin del array)
   - `maxArea = 0` (máxima área encontrada)

2. **Bucle principal** (mientras left < right):

   - Calcular ancho: `width = right - left`
   - Calcular altura mínima: `minHeight = Math.min(height[left], height[right])`
   - Calcular área actual: `currentArea = width * minHeight`
   - Actualizar máximo: `maxArea = Math.max(maxArea, currentArea)`

   - **Movimiento greedy**: Mover el puntero que apunta a la línea más baja
     - Si `height[left] < height[right]`: mover `left++` (buscar línea más alta a la derecha)
     - Sino: mover `right--` (buscar línea más alta a la izquierda)

3. **Retornar** el área máxima encontrada

**¿Por qué funciona?** Al mover el puntero de la línea más baja, descartamos combinaciones que no pueden dar áreas mayores, ya que el ancho solo puede disminuir y la altura mínima sería igual o menor.

## Casos extremos

- **Array de 2 elementos**: `[1,1]` → Área = min(1,1) × (1-0) = 1
- **Alturas decrecientes**: `[5,4,3,2,1]` → La mejor combinación es la primera y última: min(5,1) × 4 = 4
- **Alturas crecientes**: `[1,2,3,4,5]` → La mejor combinación es la primera y última: min(1,5) × 4 = 4
- **Con alturas cero**: `[0,2,0,3,0]` → Se ignoran las posiciones con altura 0, mejor área entre índices 1 y 3: min(2,3) × (3-1) = 4
- **Mismo elemento repetido**: `[3,3,3,3]` → Cualquier par da la misma área: min(3,3) × (último-0) = 3 × 3 = 9

## Complejidad

- **Time complexity**: O(n) - Un solo paso por el array con two pointers
- **Space complexity**: O(1) - Solo variables constantes, no estructuras de datos adicionales

## Conclusión

Esta solución demuestra el poder del algoritmo **two pointers** para problemas de optimización. La estrategia greedy de mover el puntero de la línea más baja es contraintuitiva pero matemáticamente correcta.

**Lecciones aprendidas:**

- No siempre la solución más intuitiva (comparar todas las combinaciones) es la más eficiente
- El movimiento greedy preserva la optimalidad al descartar combinaciones inviables
- La complejidad O(n) es posible cuando se puede reducir el espacio de búsqueda inteligentemente

**Patrones identificados:**

- Two pointers para problemas de arrays con restricciones de optimalidad
- Movimiento basado en comparación de valores actuales
- Tracking del máximo durante el proceso