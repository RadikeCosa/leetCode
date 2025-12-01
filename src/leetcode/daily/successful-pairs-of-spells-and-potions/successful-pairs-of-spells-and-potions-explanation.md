---
name: successful-pairs-of-spells-and-potions
difficulty: medium
category: daily
topics: [Binary Search, Sorting, Prefix Sum]
source: leetcode
series: daily
createdAt: 2025-10-08
---

# Explicación y análisis

## Intuición

Nos dan dos arrays de enteros positivos: `spells` y `potions`, y un entero `success`. Para cada hechizo, debemos contar cuántas pociones pueden formar un par exitoso (producto mayor o igual a `success`).

## Enfoque y algoritmo

El producto puede ser muy grande (hasta $10^{10}$), por lo que no conviene calcular todos los pares directamente. En vez de eso:

- Ordenamos el array de pociones.
- Para cada hechizo, usamos búsqueda binaria para encontrar el primer valor de poción que cumple la condición `spell * potion >= success`.
- El número de pociones exitosas es la cantidad de elementos desde ese índice hasta el final.

## Complejidad

- **Tiempo:** $O(m \log m + n \log m)$
  - $O(m \log m)$ para ordenar pociones.
  - $O(n \log m)$ para buscar por cada hechizo.
- **Espacio:** $O(n + m)$
  - $O(m)$ para la copia ordenada de pociones.
  - $O(n)$ para el array de respuesta.

## Casos borde

- Hechizos y pociones con valores mínimos y máximos.
- success mínimo y máximo.
- Arrays de tamaño 1 y grandes.
- Casos donde todas, ninguna o solo algunas combinaciones son exitosas.

## Variantes y por qué se descartan

## Alternativa: conteo acumulado

Existe una solución alternativa usando un array de conteo acumulado (prefix/suffix sum):

- Se cuenta cuántas pociones hay para cada valor posible.
- Se acumulan los conteos de mayor a menor para responder en $O(1)$ cuántas pociones cumplen la condición para cada hechizo.
- Esta técnica es muy eficiente si los valores de pociones son pequeños y densos.

Sin embargo, si los valores de pociones son grandes o dispersos, el array de conteo puede consumir mucha memoria y ser menos eficiente en espacio.

## ¿Por qué elegimos búsqueda binaria?

- La búsqueda binaria sobre el array ordenado es robusta y funciona para cualquier rango de valores, incluso si los valores son grandes o hay huecos.
- No depende de la densidad ni del valor máximo de las pociones.
- Es fácil de mantener y entender, y su complejidad es óptima para los límites del problema.
- La técnica de conteo acumulado es útil en problemas donde el rango es acotado, pero aquí preferimos la generalidad y robustez de la búsqueda binaria.
