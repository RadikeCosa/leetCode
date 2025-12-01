---
title: "memoize"
difficulty: "medium"
topics:
  - Memoization
  - Closure
  - Cache
source: "leetcode"
series: "parte-3-function-transformations"
category: "30-days-js"
createdAt: "2025-09-01"
---

# Memoize

Dado una función `fn`, retorna una versión memoizada de esa función.

## Ejemplos

**Ejemplo 1:**

- Input: fnName = "sum", actions = ["call","call","getCallCount","call","getCallCount"], values = [[2,2],[2,2],[],[1,2],[]]
- Output: [4,4,1,3,2]

**Ejemplo 2:**

- Input: fnName = "factorial", actions = ["call","call","call","getCallCount","call","getCallCount"], values = [[2],[3],[2],[],[3],[]]
- Output: [2,6,2,2,6,2]

**Ejemplo 3:**

- Input: fnName = "fib", actions = ["call","getCallCount"], values = [[5],[]]
- Output: [8,1]

## Análisis

La memoización es una técnica de optimización que almacena los resultados de llamadas a funciones costosas y devuelve el resultado en caché cuando se vuelven a usar las mismas entradas.

**Conceptos clave:**

- **Cache**: Almacenamiento de resultados previos
- **Key generation**: Crear claves únicas para cada combinación de parámetros
- **Closure**: Mantener el estado del cache entre llamadas

**Patrones identificados:**

- Las funciones pueden tener 1 o más parámetros
- El orden de los parámetros importa: (2,3) ≠ (3,2)
- Necesitamos rastrear si la función original fue llamada

## Enfoque detallado

1. **Crear un Map para el cache**: Almacenar pares clave-valor donde la clave identifica los parámetros únicamente
2. **Generar clave única**: Convertir los parámetros en una clave string que preserve el orden
3. **Verificar cache**: Antes de llamar la función, verificar si ya existe el resultado
4. **Almacenar resultado**: Si no está en cache, llamar la función y guardar el resultado
5. **Retornar función memoizada**: La función retornada mantiene acceso al cache via closure

**Consideraciones para la clave:**

- `JSON.stringify(args)` funciona bien para arrays de números
- Preserva el orden: `[2,3]` vs `[3,2]` generan claves diferentes
- Es determinístico y único para cada combinación

## Casos extremos

- Funciones con un solo parámetro
- Parámetros con valor 0
- Números grandes (hasta 10^5)
- Múltiples llamadas con los mismos parámetros
- Orden diferente de parámetros debe generar claves diferentes

## Complejidad

- **Time complexity**: O(1) para resultados en cache, O(f(n)) para nuevos cálculos
- **Space complexity**: O(k) donde k es el número de combinaciones únicas de parámetros

## Conclusión

La memoización es una técnica poderosa para optimizar funciones que:

- Son puras (mismo input → mismo output)
- Tienen cálculos costosos
- Se llaman frecuentemente con los mismos parámetros

Lecciones clave:

- Los closures permiten mantener estado privado
- La generación de claves debe ser determinística y única
- Es un ejemplo clásico de intercambio espacio-tiempo (space-time tradeoff)