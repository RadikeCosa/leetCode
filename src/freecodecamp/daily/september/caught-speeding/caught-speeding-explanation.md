# Análisis del Problema: Caught Speeding

## Enunciado

Dado un array de números que representan las velocidades a las que fueron observados los vehículos circulando, y un número que representa el límite de velocidad, retornar un array con dos elementos: el número de vehículos que estaban excediendo el límite, seguido del promedio de la cantidad que excedieron del límite de velocidad de esos vehículos.

Si no hay vehículos excediendo el límite, retornar [0, 0].

## Análisis

Este problema requiere procesar un array de velocidades y determinar:

1. Cuáles vehículos exceden el límite de velocidad (speed > limit)
2. Contar cuántos son
3. Calcular el promedio del exceso de velocidad para esos vehículos
4. Retornar el resultado en formato [conteo, promedio]

Casos especiales a considerar:

- Si ningún vehículo excede el límite, retornar [0, 0]
- El promedio debe calcularse solo sobre los vehículos que exceden el límite
- Las velocidades pueden ser números decimales, por lo que el promedio también puede ser decimal

## Solución

La solución implementada utiliza métodos funcionales de JavaScript:

1. **Filtrar vehículos excediendo límite**: `speeds.filter(speed => speed > limit)`
2. **Contar vehículos**: `speeders.length`
3. **Caso sin excedentes**: Si count === 0, retornar [0, 0]
4. **Calcular total del exceso**: `speeders.reduce((acc, speed) => acc + (speed - limit), 0)`
5. **Calcular promedio**: `totalOver / count`
6. **Retornar resultado**: `[count, totalOver / count]`

## Complejidad

- **Tiempo**: O(n) - Un solo recorrido del array con filter y reduce
- **Espacio**: O(n) - Se crea un nuevo array con los vehículos excediendo límite

## Aprendizajes

- Uso combinado de `filter()` y `reduce()` para procesar arrays de manera funcional
- Manejo de casos edge (ningún elemento cumple la condición)
- Cálculo de promedios requiere verificar división por cero
- Los métodos funcionales de array facilitan la legibilidad del código
