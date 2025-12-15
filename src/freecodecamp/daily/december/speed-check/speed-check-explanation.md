---
title: Speed Check
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-15
difficulty: easy
topics:
  - math
  - conditionals
blogLink: https://blog-astro-rouge.vercel.app/posts/speed-check/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-15/
---

## Speed Check - Análisis y Explicación

## Enunciado del Problema

Dada la velocidad a la que viajas en millas por hora (MPH) y un limite de velocidad en kilometros por hora (KPH), tenes que determinar si estas en exceso de velocidad y recibiras una advertencia o una multa.
1 milla equivale a 1.60934 kilometros.
Si viajas a una velocidad menor o igual al limite de velocidad, devuelve "Not Speeding".
Si viajas a una velocidad de 5 KPH o menos por encima del limite de velocidad, devuelve "Warning".
Si viajas a una velocidad de mas de 5 KPH por encima del limite de velocidad, devuelve "Ticket".

## Análisis Inicial

### Comprensión del Problema

El problema pide comparar la velocidad a la que viajas en millas por hora (MPH) con un límite de velocidad dado en kilómetros por hora (KPH), y determinar si estás dentro del límite, si recibes una advertencia o una multa, teniendo en cuenta la conversión entre millas y kilómetros.

### Casos de Prueba Identificados

Los casos de prueba relevantes que identificamos son:

- Caso 1: Velocidad dentro del límite
  - Entrada: speedMph = 30, speedLimitKph = 70
  - Salida Esperada: "Not Speeding"
- Caso 2: Velocidad con advertencia
  - Entrada: speedMph = 40, speedLimitKph = 60
  - Salida Esperada: "Warning"
- Caso 3: Velocidad justo en el límite de advertencia
  - Entrada: speedMph = 40, speedLimitKph = 65
  - Salida Esperada: "Not Speeding"
- Caso 4: Velocidad con multa
  - Entrada: speedMph = 60, speedLimitKph = 90
  - Salida Esperada: "Ticket"
- Caso 5: Velocidad con advertencia cerca del límite
  - Entrada: speedMph = 65, speedLimitKph = 100
  - Salida Esperada: "Warning"
- Caso 6: Velocidad muy por encima del límite
  - Entrada: speedMph = 88, speedLimitKph = 40
  - Salida Esperada: "Ticket"

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver este problema, primero convertiremos la velocidad dada en millas por hora (MPH) a kilometros por hora (KPH). Para ello usamos la siguiente conversion. `const speedKPH = speedMph * 1.60934`. Luego, compararemos la velocidad convertida con el límite de velocidad para determinar si estamos dentro del límite, si recibimos una advertencia o una multa, utilizando condicionales para manejar las diferentes situaciones.

### Implementación Paso a Paso

1. Convertir la velocidad de millas por hora (MPH) a kilometros por hora (KPH) usando la formula: `speedKPH = speedMph * 1.60934`.
2. Comparar la velocidad convertida (speedKPH) con el límite de velocidad (speedLimitKph):
   - Si speedKPH es menor o igual a speedLimitKph, devolver "Not Speeding".
   - Si speedKPH es mayor que speedLimitKph pero menor o igual a speedLimitKph + 5, devolver "Warning".
   - Si speedKPH es mayor que speedLimitKph + 5, devolver "Ticket".
3. Devolver el resultado correspondiente basado en las comparaciones anteriores.

### Codigo Final

```js
function speedCheck(speedMph, speedLimitKph) {
  const speedKPH = speedMph * 1.60934;
  if (speedKPH <= speedLimitKph) {
    return "Not Speeding";
  } else if (speedKPH <= speedLimitKph + 5) {
    return "Warning";
  } else {
    return "Ticket";
  }
}
```

## Análisis de Complejidad

### Complejidad Temporal

La solución realiza una conversión y una serie de comparaciones, todas en tiempo constante. Por lo tanto, la complejidad temporal es:

$$
O(1)
$$

### Complejidad Espacial

No se utilizan estructuras de datos adicionales ni se almacena información extra, por lo que la complejidad espacial también es:

$$
O(1)
$$

## Casos Edge y Consideraciones

Algunos casos especiales a considerar:

- Si la velocidad es exactamente igual al límite, se considera "Not Speeding".
- Si la velocidad es exactamente 5 KPH por encima del límite, se considera "Warning".
- Si la velocidad es negativa o cero, el resultado será "Not Speeding" (aunque en la vida real no tendría sentido una velocidad negativa).
- El resultado depende de la precisión de la conversión de millas a kilómetros (se utiliza 1.60934 como factor de conversión).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Conversión de unidades (MPH a KPH).
- Uso de condicionales para clasificación de rangos.
- Pruebas de casos límite y validación de entradas.

### Posibles Optimizaciones

La solución es óptima para el problema planteado. Si se requiriera mayor precisión, se podría ajustar el factor de conversión o redondear los resultados según el contexto. También se podría validar explícitamente que las entradas sean números positivos.

## Recursos y Referencias

- [Conversión de millas a kilómetros - Wikipedia](https://es.wikipedia.org/wiki/Milla_por_hora)
- [freeCodeCamp Daily Coding Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-15/)
