---
title: Daylight Hours
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-21
difficulty: easy
topics:
  - lookup-table
  - search
  - edge-cases
  - math
blogLink: https://blog-astro-rouge.vercel.app/posts/daylight-hours/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-21/
---

## Daylight Hours - Análisis y Explicación

## Enunciado del Problema

El 21 de diciembre marca el solsticio de verano en el hemisferio sur y el solsticio de invierno en el hemisferio norte. Esto implica que, en esa fecha, el hemisferio sur experimenta el día más largo del año, mientras que el hemisferio norte tiene el día más corto.

Dada una latitud entre -90 y +90 grados, se debe retornar una estimación de las horas de luz diarias en el solsticio para esa latitud, utilizando la siguiente tabla de referencia:

| Latitud (grados) | Horas de luz diarias |
| ---------------- | -------------------- |
| -90              | 24                   |
| -75              | 23                   |
| -60              | 21                   |
| -45              | 15                   |
| -30              | 13                   |
| -15              | 12                   |
| 0                | 12                   |
| 15               | 11                   |
| 30               | 10                   |
| 45               | 9                    |
| 60               | 6                    |
| 75               | 2                    |
| 90               | 0                    |

Si la latitud proporcionada no coincide exactamente con un valor de la tabla, se debe utilizar el valor más cercano.

## Análisis Inicial

### Comprensión del Problema

El objetivo es estimar, para cualquier latitud dada dentro del rango permitido, cuántas horas de luz diurna habrá durante el solsticio de diciembre. La relación entre latitud y horas de luz no es lineal ni requiere cálculos astronómicos complejos, sino que está completamente determinada por la tabla dada. Si la latitud no coincide exactamente con un valor de la tabla, se debe buscar el valor más cercano (por distancia absoluta) y devolver la cantidad de horas de luz correspondiente.

### Casos de Prueba Identificados

Algunos casos de prueba relevantes y edge:

- Latitud exacta en la tabla: por ejemplo, daylightHours(-90) → 24, daylightHours(0) → 12, daylightHours(45) → 9.
- Latitud entre dos valores de la tabla: daylightHours(-10) → 12 (más cerca de -15 y 0, ambos 12), daylightHours(23) → 10 (más cerca de 30), daylightHours(70) → 2 (más cerca de 75).
- Latitud en los extremos: daylightHours(90) → 0, daylightHours(-90) → 24.
- Casos equidistantes: si la latitud está justo en el medio, se puede devolver cualquiera de los dos valores más cercanos, pero la implementación retorna el primero que encuentra.

## Desarrollo de la Solución

### Enfoque Elegido

La estrategia consiste en almacenar la tabla de latitudes y horas de luz como una lista de pares ordenados. Para una latitud dada, se busca el valor de la tabla cuya latitud sea la más cercana (en valor absoluto) a la latitud de entrada, y se retorna la cantidad de horas de luz asociada. No es necesario interpolar ni realizar cálculos adicionales, ya que la consigna especifica que se use el valor más cercano.

### Implementación Paso a Paso

1. Definir la tabla de latitudes y horas de luz como un array de objetos o tuplas.
2. Para la latitud de entrada, calcular la distancia absoluta a cada latitud de la tabla.
3. Identificar el índice con la menor distancia.
4. Retornar el valor de horas de luz correspondiente a ese índice.

### Código Implementado

```javascript
// Retorna la cantidad estimada de horas de luz para una latitud dada en el solsticio
function daylightHours(latitude) {
  // Tabla de referencia: cada objeto asocia latitud con horas de luz
  const daylightTable = [
    { lat: -90, hours: 24 }, // Polo Sur: día completo
    { lat: -75, hours: 23 },
    { lat: -60, hours: 21 },
    { lat: -45, hours: 15 },
    { lat: -30, hours: 13 },
    { lat: -15, hours: 12 },
    { lat: 0, hours: 12 }, // Ecuador: 12 horas
    { lat: 15, hours: 11 },
    { lat: 30, hours: 10 },
    { lat: 45, hours: 9 },
    { lat: 60, hours: 6 },
    { lat: 75, hours: 2 },
    { lat: 90, hours: 0 }, // Polo Norte: noche polar
  ];
  // Inicializa con el primer elemento como el más cercano
  let closest = daylightTable[0];
  // Calcula la diferencia mínima inicial
  let minDiff = Math.abs(latitude - closest.lat);
  // Recorre la tabla para encontrar la latitud más cercana
  for (let i = 1; i < daylightTable.length; i++) {
    const diff = Math.abs(latitude - daylightTable[i].lat);
    // Si encuentra una latitud más cercana, actualiza
    if (diff < minDiff) {
      minDiff = diff;
      closest = daylightTable[i];
    }
  }
  // Retorna las horas de luz correspondientes a la latitud más cercana
  return closest.hours;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La búsqueda del valor más cercano implica recorrer la tabla una vez, por lo que la complejidad temporal es $O(n)$, donde $n$ es la cantidad de filas en la tabla (en este caso, 13). Dado que $n$ es constante y pequeño, el algoritmo es muy eficiente en la práctica y no requiere optimización adicional.

### Complejidad Espacial

El espacio utilizado es $O(1)$, ya que la tabla es de tamaño fijo y no depende de la entrada. No se utilizan estructuras auxiliares proporcionales al tamaño de la entrada.

## Casos Edge y Consideraciones

- Si la latitud es exactamente igual a un valor de la tabla, se retorna el valor correspondiente.
- Si la latitud está equidistante entre dos valores de la tabla, la implementación retorna el primero que encuentra (de menor índice).
- Las latitudes fuera del rango [-90, 90] no están permitidas según la consigna, por lo que no es necesario validar ese caso.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Búsqueda de valor más cercano en una lista.
- Manejo de tablas de referencia para problemas de mapeo directo.

## Recursos y Referencias

- [Solsticio de diciembre - Wikipedia](https://es.wikipedia.org/wiki/Solsticio_de_diciembre)
- [freeCodeCamp - Daily Coding Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-21/)
