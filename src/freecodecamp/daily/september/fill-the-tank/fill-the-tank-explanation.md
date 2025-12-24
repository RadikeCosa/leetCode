---
title: Fill The Tank
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-24
difficulty: easy
topics:
  - math
blogLink: https://blog-astro-rouge.vercel.app/posts/fill-the-tank/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-18/
---

## Fill The Tank - Análisis y Explicación

## Enunciado del Problema

Dado un tamaño de tanque de combustible, el nivel actual de combustible y el precio por galón, devuelve el costo de llenar el tanque.

- tankSize: Capacidad total del tanque en galones.
- fuelLevel: Cantidad actual de combustible en el tanque (galones).
- pricePerGallon: Costo por galón de combustible.
- El valor devuelto debe estar redondeado a dos decimales en el formato "$d.dd".

## Análisis Inicial

### Comprensión del Problema

El problema requiere calcular el costo necesario para llenar un tanque de combustible, dado su tamaño total, el nivel actual de combustible y el precio por galón. La solución implica determinar cuántos galones se necesitan para llenar el tanque y luego multiplicar esa cantidad por el precio por galón.

### Casos de Prueba Identificados

1. **Caso básico**:
   - Input: tankSize = 15, fuelLevel = 5, pricePerGallon = 3.50
   - Output esperado: "$35.00"
   - Explicación: Se necesitan 10 galones para llenar el tanque (15 - 5), y a $3.50 por galón, el costo total es $35.00.
2. **Tanque ya lleno**:
   - Input: tankSize = 10, fuelLevel = 10, pricePerGallon = 4.00
   - Output esperado: "$0.00"
   - Explicación: No se necesita combustible adicional, por lo que el costo es $0.00.
3. **Tanque vacío**:
   - Input: tankSize = 20, fuelLevel = 0, pricePerGallon = 2.75
   - Output esperado: "$55.00"
   - Explicación: Se necesitan 20 galones para llenar el tanque, y a $2.75 por galón, el costo total es $55.00.
4. **Precio por galón es cero**:
   - Input: tankSize = 15, fuelLevel = 5, pricePerGallon = 0.00
   - Output esperado: "$0.00"
   - Explicación: Aunque se necesitan galones para llenar el tanque, el costo es $0.00 debido a que el precio por galón es cero.
5. **Nivel de combustible mayor que el tamaño del tanque**:
   - Input: tankSize = 10, fuelLevel = 12, pricePerGallon = 3.00
   - Output esperado: "$0.00"
   - Explicación: El tanque ya está lleno, por lo que no se necesita combustible adicional y el costo es $0.00.
6. **Valores decimales en el nivel de combustible**:
   - Input: tankSize = 12.5, fuelLevel = 7.3, pricePerGallon = 4.20
   - Output esperado: "$21.84"
   - Explicación: Se necesitan 5.2 galones para llenar el tanque (12.5 - 7.3), y a $4.20 por galón, el costo total es $21.84.
7. **Valores decimales en el tamaño del tanque**:
   - Input: tankSize = 15.75, fuelLevel = 10.5, pricePerGallon = 3.80
   - Output esperado: "$19.95"
   - Explicación: Se necesitan 5.25 galones para llenar el tanque (15.75 - 10.5), y a $3.80 por galón, el costo total es $19.95.
8. **Valores decimales en el precio por galón**:
   - Input: tankSize = 20, fuelLevel = 5, pricePerGallon = 2.95
   - Output esperado: "$44.25"
   - Explicación: Se necesitan 15 galones para llenar el tanque (20 - 5), y a $2.95 por galón, el costo total es $44.25.
9. **Todos los valores son decimales**:
   - Input: tankSize = 18.5, fuelLevel = 9.75, pricePerGallon = 3.65
   - Output esperado: "$31.19"
   - Explicación: Se necesitan 8.75 galones para llenar el tanque (18.5 - 9.75), y a $3.65 por galón, el costo total es $31.19.

## Desarrollo de la Solución

### Enfoque Elegido

La estrategia consiste en calcular cuántos galones faltan para llenar el tanque, multiplicar esa cantidad por el precio por galón y devolver el resultado en formato monetario con dos decimales. Si el nivel de combustible es igual o mayor que la capacidad del tanque, o si el precio por galón es cero, el costo debe ser "$0.00". El formato de salida debe ser siempre una cadena con el símbolo de dólar y dos decimales.

### Implementación Paso a Paso

1. Calcular la cantidad de galones necesarios para llenar el tanque: `faltantes = tankSize - fuelLevel`.
2. Si `faltantes` es menor o igual a cero, devolver "$0.00" (el tanque ya está lleno o sobrellenado).
3. Si el precio por galón es cero, devolver "$0.00" (no hay costo).
4. Calcular el costo total: `costo = faltantes * pricePerGallon`.
5. Redondear el resultado a dos decimales.
6. Formatear el resultado como cadena en el formato "$d.dd".

## Análisis de Complejidad

### Complejidad Temporal

La solución realiza solo operaciones aritméticas y condicionales simples, por lo que su complejidad temporal es $O(1)$ (constante). No depende del tamaño de los datos de entrada, ya que siempre ejecuta la misma cantidad de pasos.

### Complejidad Espacial

El uso de memoria también es constante, $O(1)$, ya que solo se utilizan variables escalares para los cálculos y el resultado.

## Casos Edge y Consideraciones

- Si el nivel de combustible (`fuelLevel`) es igual o mayor que la capacidad del tanque (`tankSize`), el costo debe ser "$0.00".
- Si el precio por galón es cero, el costo también debe ser "$0.00".
- Si alguno de los valores es decimal, el cálculo y el formato deben seguir siendo correctos.
- No se espera que los valores sean negativos; si lo fueran, el comportamiento debería definirse según la política del sistema (en este caso, se asume que los inputs son válidos).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Operaciones aritméticas básicas y control de flujo condicional.
- Formateo de números a cadenas monetarias con dos decimales.
- Validación de casos límite para robustez.

### Posibles Optimizaciones

La solución es óptima para el problema planteado. No existen optimizaciones relevantes, ya que el cálculo es directo y de complejidad constante.

## Recursos y Referencias

- [Método toFixed() en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- [Formateo de moneda en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
