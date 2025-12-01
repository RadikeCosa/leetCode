---
title: "Binary To Decimal"
difficulty: "easy"
topics:
  - Array
  - String
  - Math
  - Conversion
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-08"
---

# Explicación

## Análisis del problema

El problema consiste en convertir un número binario, representado como string, a su equivalente decimal. Un número binario solo contiene los dígitos 0 y 1, y cada dígito representa una potencia de 2 según su posición. El objetivo es sumar el valor de cada dígito multiplicado por la potencia de 2 correspondiente, empezando desde la derecha (menor potencia) hacia la izquierda (mayor potencia).

## Enfoque y algoritmo

Para convertir un número binario a decimal, debemos analizar cada dígito y calcular cuánto aporta al valor final según su posición:

1. **Recorrido de derecha a izquierda:** Empezamos por el dígito más a la derecha (menos significativo), que se multiplica por $2^0$. El siguiente a la izquierda se multiplica por $2^1$, y así sucesivamente.
2. **Multiplicación y suma:** Por cada dígito, multiplicamos su valor (0 o 1) por la potencia de 2 correspondiente y sumamos ese resultado a un acumulador.
3. **Ejemplo didáctico:**
   - Para el string "101":
     - El dígito más a la derecha es 1: $1 \times 2^0 = 1$
     - El siguiente es 0: $0 \times 2^1 = 0$
     - El siguiente es 1: $1 \times 2^2 = 4$
     - Sumamos: $4 + 0 + 1 = 5$

Este proceso garantiza que cada dígito se procesa correctamente y se obtiene el valor decimal esperado. Es importante llevar la cuenta de la potencia de 2 que corresponde a cada posición, y sumar todos los resultados parciales para obtener el número final.

## Complejidad

Complejidad
La solución recorre el string una sola vez y realiza una operación constante por cada dígito.

Tiempo: O(n), donde n es la longitud del string binario.
Espacio: O(1), solo se usa una variable acumuladora.

## Casos límite y ejemplos

"0" → 0
"1" → 1
"10" → 2
"101" → 5
"1010" → 10
"10010" → 18
"1010101" → 85
String largo: "111111111111" → 4095
String con ceros a la izquierda: "000101" → 5

## Aprendizajes y patrones

Cómo recorrer un string y calcular el valor de cada dígito según su posición.
Uso de potencias de 2 y acumuladores para conversiones numéricas.
Importancia de validar que el string solo contenga '0' y '1'.
El patrón de conversión binario-decimal es útil en algoritmos y sistemas digitales.

## Soluciones Alternativas

### 1. Usando `parseInt(binary, 2)`

La forma más directa y eficiente en JavaScript es usar el método nativo `parseInt`, que permite convertir un string binario a decimal especificando la base:

```javascript
function toDecimal(binary) {
  return parseInt(binary, 2);
}
```

**Ventajas:**

- Muy conciso y fácil de leer.
- Aprovecha la optimización interna del lenguaje.

**Desventajas:**

- Depende de funciones nativas, no muestra el proceso paso a paso.

### 2. Usando `Array.reduce`

Otra alternativa funcional es convertir el string en un array y usar `reduce` para acumular el valor decimal:

```javascript
function toDecimal(binary) {
  return binary.split("").reduce((acc, digit) => acc * 2 + Number(digit), 0);
}
```

**¿Cómo funciona?**

- Se recorre el string de izquierda a derecha.
- En cada paso, se multiplica el acumulador por 2 (equivalente a desplazar los dígitos a la izquierda en binario) y se suma el valor del dígito actual.

**Ventajas:**

- Expresa el proceso de conversión de manera funcional y elegante.
- No requiere calcular potencias explícitas.

**Desventajas:**

- Puede ser menos intuitivo para quienes no están familiarizados con `reduce`.