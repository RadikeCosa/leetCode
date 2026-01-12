---
title: Plant The Crop
source: freecodecamp
series: daily
category: january
createdAt: 2026-01-12
difficulty: easy
topics:
  - math
  - simulation
  - mapping
blogLink: https://blog-astro-rouge.vercel.app/posts/plant-the-crop/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-12/
---

## Plant The Crop - Análisis y Explicación

## Enunciado del Problema

Dado un entero que representa el tamaño de tu campo agrícola, una unidad de medida ('acres' o 'hectáreas'), y un tipo de cultivo, determina cuántas plantas de ese tipo caben en el campo.

- 1 acre = 4046,86 metros cuadrados
- 1 hectárea = 10.000 metros cuadrados

Espacio requerido por cada planta según el cultivo:

- "corn": 1 metro cuadrado
- "wheat": 0,1 metros cuadrados
- "soybeans": 0,5 metros cuadrados
- "tomatoes": 0,25 metros cuadrados
- "lettuce": 0,2 metros cuadrados

Devuelve el número de plantas que caben en el campo, redondeado hacia abajo al entero más cercano.

## Análisis Inicial

### Comprensión del Problema

El problema requiere calcular cuántas plantas de un cultivo específico pueden plantarse en un campo agrícola dado su tamaño y la unidad de medida. Para resolverlo, es necesario convertir el tamaño del campo a metros cuadrados y luego dividirlo por el espacio requerido por cada planta del cultivo especificado.

### Casos de Prueba Identificados

Los casos de prueba identificados son (el resultado siempre se redondea hacia abajo al entero más cercano):

- getNumberOfPlants(1, "acres", "corn") → 4046
- getNumberOfPlants(2, "hectares", "lettuce") → 100000
- getNumberOfPlants(20, "acres", "soybeans") → 161874
- getNumberOfPlants(3.75, "hectares", "tomatoes") → 150000
- getNumberOfPlants(16.75, "acres", "tomatoes") → 271139

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque que elegimos para este problema es convertir primero el tamaño del campo a metros cuadrados según la unidad dada (acres o hectáreas). Luego, utilizamos un diccionario para mapear cada tipo de cultivo a su espacio requerido por planta. Finalmente, dividimos el área total del campo entre el espacio requerido por planta y redondeamos hacia abajo para obtener el número máximo de plantas que se pueden plantar.

### Implementación Paso a Paso

1. Convertir el tamaño del campo a metros cuadrados:

- Si la unidad es "acres", multiplicar el tamaño por 4046.86.
- Si la unidad es "hectáreas", multiplicar el tamaño por 10,000.

2. Obtener el espacio requerido por planta del cultivo usando un diccionario/mapa.
3. Dividir el área total del campo (en metros cuadrados) por el espacio requerido por planta.
4. Redondear el resultado hacia abajo usando `Math.floor` para obtener el número máximo de plantas enteras que caben en el campo.
5. Retornar ese valor.

Este enfoque asegura que siempre se retorna un número entero de plantas, sin exceder la capacidad real del campo.

## Análisis de Complejidad

### Complejidad Temporal

La función realiza solo operaciones de acceso a diccionario y aritmética básica, todas en tiempo constante. Por lo tanto, la complejidad temporal es $O(1)$.

### Complejidad Espacial

El uso de espacio es $O(1)$, ya que solo se almacenan variables escalares y dos pequeños diccionarios de tamaño fijo.

## Casos Edge y Consideraciones

- Si la unidad o el cultivo no existen en los diccionarios, la función retornará `NaN` o `undefined`. Se asume que la entrada es válida según la consigna y los tests.
- Si el tamaño del campo es 0, el resultado será 0 plantas.
- Si el tamaño del campo es negativo, el resultado será negativo o `NaN` (no contemplado en la consigna).
- Si el espacio por planta es mayor que el área total, el resultado será 0.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de diccionarios para mapear unidades y cultivos a valores numéricos.
- Conversión de unidades y aritmética básica.
- Redondeo hacia abajo para asegurar que no se exceda la capacidad real del campo.

### Posibles Optimizaciones

Se podría agregar validación de entrada para manejar unidades o cultivos no reconocidos, o valores negativos. También se podría internacionalizar el sistema de unidades si se requiriera para otros países.

## Recursos y Referencias

- https://en.wikipedia.org/wiki/Plant_density
- https://en.wikipedia.org/wiki/Acre
- https://en.wikipedia.org/wiki/Hectare
