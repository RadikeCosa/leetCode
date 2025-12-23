---
title: Screen Time
source: freeCodeCamp
series: daily
category: september
createdAt: 2025-12-23
difficulty: easy
topics:
  - math
  - sliding-window
  - arrays
  - averages
blogLink: https://blog-astro-rouge.vercel.app/posts/screen-time/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-12/
---

## Screen Time - Análisis y Explicación

## Enunciado del Problema

Dado un array de siete números enteros, representando el tiempo semanal, donde cada número es la cantidad de horas pasadas con tu teléfono en el día, determina si es mucho tiempo de pantalla basado en los siguientes criterios:

- Si un día tiene 10 o más horas, es demasiado.
- Si el promedio de cualquier tres días consecutivos es mayor o igual a 8 horas, es demasiado.
- Si el promedio de los siete días es mayor o igual a 6 horas, es demasiado.

## Análisis Inicial

### Comprensión del Problema

El objetivo es determinar si el tiempo de pantalla semanal es excesivo según tres reglas:

1. Si algún día se usó el teléfono 10 horas o más, automáticamente se considera demasiado.
2. Si el promedio de cualquier trío de días consecutivos es mayor o igual a 8 horas, también es demasiado.
3. Si el promedio semanal (los siete días) es mayor o igual a 6 horas, es demasiado.

Esto implica recorrer el array para buscar días individuales con 10 o más horas, calcular promedios móviles de tres días y finalmente el promedio semanal. Basta con que se cumpla una sola condición para que la función retorne true.

### Casos de Prueba Identificados

1. `[1, 2, 3, 4, 5, 6, 7]` → **false**

- Ningún día supera las 10 horas, ningún trío de días consecutivos promedia 8 o más, y el promedio semanal es menor a 6.

2. `[7, 8, 8, 4, 2, 2, 3]` → **false**

- No hay días de 10+, ningún trío consecutivo promedia 8 o más, y el promedio semanal es menor a 6.

3. `[5, 6, 6, 6, 6, 6, 6]` → **false**

- No hay días de 10+, ningún trío consecutivo promedia 8 o más, y el promedio semanal es menor a 6.

4. `[1, 2, 3, 11, 1, 3, 4]` → **true**

- El cuarto día tiene 11 horas (condición 1).

5. `[1, 2, 3, 10, 2, 1, 0]` → **true**

- El cuarto día tiene 10 horas (condición 1).

6. `[3, 3, 5, 8, 8, 9, 4]` → **true**

- El trío [8, 8, 9] promedia 8.33 (condición 2).

7. `[3, 9, 4, 8, 5, 7, 6]` → **true**

- El trío [3, 9, 4] promedia 5.33, pero [9, 4, 8] promedia 7, [4, 8, 5] promedia 5.66, [8, 5, 7] promedia 6.66, [5, 7, 6] promedia 6, pero el promedio semanal es 6 (condición 3).

**Edge cases sugeridos:**

- `[0, 0, 0, 0, 0, 0, 0]` → **false**
  - Ningún día ni promedio supera los límites.
- `[6, 6, 6, 6, 6, 6, 6]` → **true**
  - El promedio semanal es exactamente 6 (condición 3).
- `[8, 8, 8, 1, 1, 1, 1]` → **true**
  - El trío inicial promedia 8 (condición 2).

## Desarrollo de la Solución

### Enfoque Elegido

Se recorre el array de horas y se aplican las tres reglas en orden:

1. Se verifica si algún día es mayor o igual a 10 (basta un solo día para retornar true).
2. Se calcula el promedio de cada trío de días consecutivos (ventana deslizante de tamaño 3) y se verifica si alguno es mayor o igual a 8.
3. Finalmente, se calcula el promedio semanal y se compara con 6.
   Si ninguna condición se cumple, se retorna false.

### Implementación Paso a Paso

1. Iterar sobre el array y retornar true si algún valor es >= 10.
2. Usar un bucle para calcular el promedio de cada subarray de 3 elementos consecutivos; si alguno es >= 8, retornar true.
3. Calcular el promedio de los 7 días; si es >= 6, retornar true.
4. Si ninguna condición se cumple, retornar false.

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre el array una vez para la condición 1 ($O(7)$), luego recorre 5 veces para los promedios de 3 días ($O(5)$), y finalmente suma los 7 días para el promedio semanal ($O(7)$). Todas las operaciones son constantes respecto al tamaño del input (siempre 7), por lo que la complejidad temporal es $O(1)$.

### Complejidad Espacial

No se utiliza espacio adicional significativo, solo variables escalares para sumas y promedios. Complejidad espacial: $O(1)$.

## Casos Edge y Consideraciones

- Todos los días en cero.
- Todos los días exactamente en el límite de alguna condición.
- Días altos no consecutivos.
- Promedios que apenas no alcanzan el umbral.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Ventana deslizante (sliding window) para promedios móviles.
- Evaluación de condiciones cortocircuitadas (early return).

### Posibles Optimizaciones

No se requieren optimizaciones adicionales, ya que el tamaño del input es fijo y pequeño.

## Recursos y Referencias

- [Ventana deslizante (sliding window) - Wikipedia](https://es.wikipedia.org/wiki/Ventana_deslizante)
- [freeCodeCamp - Daily Coding Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-12/)
  - El trío inicial promedia 8 (condición 2).

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver el problema de manera eficiente seguiremos estos pasos:

1. **Verificar Días Individuales:** Recorrer el array y verificar si algún día tiene 10 o más horas.
2. **Calcular Promedios de Tres Días Consecutivos:** Utilizar un bucle para calcular el promedio de cada trío de días consecutivos.
3. **Calcular Promedio Semanal:** Sumar todas las horas y dividir por 7 para obtener el promedio semanal.
   Para hacerlo de manera eficiente, podemos realizar todas estas verificaciones en un solo recorrido del array.

### Implementación Paso a Paso

1. Inicializar una variable para la suma total de horas.
2. Recorrer el array de horas:
3. Verificar si el día actual tiene 10 o más horas.
4. Acumular las horas para el promedio semanal.
5. Si estamos en el tercer día o más, calcular el promedio de los últimos tres días.
6. Después del bucle, calcular el promedio semanal.
7. Retornar true si alguna de las condiciones se cumple, de lo contrario retornar false.

### Implementación en Código

```javascript
function tooMuchScreenTime(hours) {
  let totalHours = 0;
  for (let i = 0; i < hours.length; i++) {
    // Verificar si algún día tiene 10 o más horas
    if (hours[i] >= 10) {
      return true;
    }

    totalHours += hours[i];

    // Verificar promedios de tres días consecutivos
    if (i >= 2) {
      const threeDayAvg = (hours[i] + hours[i - 1] + hours[i - 2]) / 3;
      if (threeDayAvg >= 8) {
        return true;
      }
    }
  }

  // Calcular promedio semanal
  const weeklyAvg = totalHours / hours.length;
  if (weeklyAvg >= 6) {
    return true;
  }

  return false;
}
```

## Análisis de Complejidad

### Complejidad Temporal

<!-- TODO: Analizar Big O tiempo -->

### Complejidad Espacial

<!-- TODO: Analizar Big O espacio -->

## Casos Edge y Consideraciones

<!-- TODO: Documentar casos especiales manejados -->

## Reflexiones y Aprendizajes

### Conceptos Aplicados

<!-- TODO: ¿Qué patrones/técnicas se usaron? -->

### Posibles Optimizaciones

<!-- TODO: ¿Se puede mejorar? -->

## Recursos y Referencias

<!-- TODO: Links útiles, algoritmos relacionados, etc. -->
