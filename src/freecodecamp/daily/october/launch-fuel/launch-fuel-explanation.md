---
name: launch-fuel
source: freecodecamp
series: daily
category: daily
createdAt: 2025-10-11
difficulty: easy
topics:
  - Math
  - Simulation
hasImplementation: true
hasTests: true
hasExplanation: true
hasPostSolution: false
---

# Explicación

## Análisis del problema

El problema consiste en calcular la cantidad total de combustible necesaria para enviar una carga (payload) al espacio, considerando que el propio combustible tiene masa y requiere más combustible para ser levantado. La relación es de 1 kg de combustible por cada 5 kg de masa total (carga + combustible). El proceso es iterativo: cada vez que se agrega combustible, la masa total aumenta y se debe recalcular el combustible adicional hasta que el incremento sea menor a 1 kg.

Se debe devolver la cantidad total de combustible necesaria, redondeada a un decimal, ignorando la masa del cohete y solo considerando la carga y el combustible.

## Enfoque y algoritmo

El algoritmo sigue estos pasos:

1. Inicializar la masa total como la masa de la carga.
2. Calcular el combustible necesario para levantar esa masa (masa / 5).
3. Sumar ese combustible a la masa total y calcular el combustible adicional requerido.
4. Repetir el proceso hasta que el combustible adicional sea menor a 1 kg.
5. Retornar la suma total de combustible, redondeada a un decimal.

Se puede implementar de forma iterativa (bucle while) o recursiva, pero la versión iterativa es más directa y eficiente para este caso.

### Intuición

El problema es una simulación donde cada vez que agregamos combustible la masa a elevar aumenta, y por tanto se requiere más combustible. Pensalo como una suma infinita decreciente: combustible inicial para la carga, luego combustible para ese combustible, y así sucesivamente hasta que el combustible adicional sea despreciable (< 1 kg según enunciado).

Una forma práctica de verlo es:

- fuel1 = payload / 5
- fuel2 = (payload + fuel1) / 5 - fuel1 => en la práctica, es más sencillo recalcular el combustible total y comparar la diferencia
- repetir hasta que la diferencia entre el combustible total actual y el anterior sea < 1

### Enfoque iterativo (recomendado)

1. Inicializar `totalMass = payload` y `totalFuel = 0`.
2. En cada iteración calcular `fuel = totalMass / 5` (combustible total necesario para la masa actual).
3. Calcular `increment = fuel - totalFuel` (el combustible adicional en esta iteración).
4. Actualizar `totalFuel = fuel`.
5. Si `increment < 1`, detener; el `totalFuel` actual (con decimales) es la respuesta.
6. Si no, actualizar `totalMass = payload + totalFuel` y repetir.

Este enfoque mantiene los decimales en cada paso y sigue el enunciado literalmente: se calcula el combustible para la masa total (payload + combustible acumulado) y se detiene cuando el incremento es menor a 1 kg.

### Enfoque recursivo

La versión recursiva sigue la misma idea: en cada llamada calculamos el combustible total para la masa actual y comparamos con el total previo. Si el incremento es menor a 1, devolvemos el total; si no, recursamos usando el nuevo total como acumulado.

Ejemplo simple (no optimizado para stack muy profundo):

```javascript
function launchFuelRecursive(payload, totalFuel = 0) {
  const fuel = (payload + totalFuel) / 5;
  const increment = fuel - totalFuel;
  if (increment < 1) return parseFloat(fuel.toFixed(1));
  return launchFuelRecursive(payload, fuel);
}
```

### Complejidad

- Tiempo: O(k) donde k es el número de iteraciones hasta que el incremento sea < 1 — en la práctica esto crece muy lentamente (logarítmico respecto a payload) porque cada iteración reduce la masa relevante por un factor aproximado.
- Espacio: O(1) para la versión iterativa, O(k) para la recursiva por el stack.

### Ejemplo paso a paso (payload = 50)

- Iteración 1: totalMass = 50, fuel = 50/5 = 10.0, increment = 10.0 - 0 = 10.0 → totalFuel = 10.0
- Iteración 2: totalMass = 50 + 10 = 60, fuel = 60/5 = 12.0, increment = 12.0 - 10.0 = 2.0 → totalFuel = 12.0
- Iteración 3: totalMass = 50 + 12 = 62, fuel = 62/5 = 12.4, increment = 12.4 - 12.0 = 0.4 (< 1) → STOP
- Resultado: 12.4 kg

### Casos límite

- `payload = 0` → `0.0`
- `payload < 5` → se hace una sola iteración y se devuelve `payload / 5` redondeado a un decimal.
- `payload = 5` → `1.0` (una iteración, fuel = 1.0, incremento = 1.0 - 0 = 1.0; según el enunciado esto se considera válido y se devuelve 1.0)

- La precisión y la condición de corte (< 1 kg) son claves y determinan el comportamiento para valores grandes o en los bordes.
- Existen interpretaciones alternativas (por ejemplo, sumar todos los combustibles hasta que cada siguiente aporte sea < 0.1) que producen resultados distintos; por eso es importante seguir el enunciado: "repetir hasta que el adicional sea menor a 1 kg".
- Si prefieres una versión que sume todos los aportes hasta que el aporte adicional sea < 0.1, puedo añadirla como variante y documentar la diferencia.

## Aprendizajes y patrones

Aquí hay un resumen de aprendizajes prácticos y patrones extraídos mientras resolví y documenté este problema:

- Pensar en problemas iterativos como sumas acumulativas: cuando un recurso tiene coste sobre sí mismo (aquí: el combustible añade masa), conviene modelarlo como una suma de aportes decrecientes.
- Condición de corte explícita: definir claramente la condición que detiene la iteración (enunciado: "adicional < 1 kg"). Cambios pequeños en esa condición producen resultados distintos, por lo que es crítico respetarla.
- Mantener precisión durante el cálculo: evita redondear en cada paso. Redondea sólo al final para no introducir errores acumulativos.
- Dos formas equivalentes de razonar:
  - Calcular el combustible total necesario para la masa actual (payload + combustible acumulado) y comparar con el combustible de la iteración anterior.
  - Pensar en la suma de aportes: combustible para la carga, combustible para ese combustible, etc.
- Patrón de simulación vs fórmula cerrada: muchas veces una sumatoria geométrica tiene sentido, pero el criterio de corte discreto (< 1 kg) complica usar una fórmula directa sin ajustar por el corte.
- Test-driven thinking: cuando implementes problemas con umbrales o redondeos, cubre ambos extremos (payload pequeño, payload grande) para detectar diferencias de interpretación.
- Documentar la decisión de diseño: especificar la condición de corte y el momento en que se redondea es tan importante como el código mismo.
