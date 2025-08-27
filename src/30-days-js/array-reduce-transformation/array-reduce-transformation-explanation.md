# Array Reduce Transformation

Implementar una función que reduzca un array a un valor único aplicando secuencialmente una función reductora, similar a Array.reduce() pero sin usar el método nativo.

## Ejemplos

**Ejemplo 1:**

- Input: nums = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr; }, init = 0
- Output: 10
- Explicación: (0) + 1 = 1, (1) + 2 = 3, (3) + 3 = 6, (6) + 4 = 10

**Ejemplo 2:**

- Input: nums = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr \* curr; }, init = 100
- Output: 130
- Explicación: (100) + 1² = 101, (101) + 2² = 105, (105) + 3² = 114, (114) + 4² = 130

**Ejemplo 3:**

- Input: nums = [], fn = function sum(accum, curr) { return 0; }, init = 25
- Output: 25
- Explicación: Para arrays vacíos, la respuesta es siempre init.

## Análisis

Este problema introduce el concepto más poderoso de la programación funcional:

1. **Reducción (fold)**: Combinar todos los elementos de una colección en un valor único
2. **Acumulador**: Variable que mantiene el estado/resultado parcial a través de las iteraciones
3. **Función reductora**: Función que toma el acumulador actual y el siguiente elemento, devolviendo el nuevo acumulador
4. **Valor inicial**: Punto de partida para la reducción

## Enfoque detallado

La solución implementa el patrón clásico de reducción/fold:

### Paso a paso:

1. **Inicialización**: Crear una variable acumuladora `acc` con el valor inicial
   ```typescript
   let acc = init;
   ```

2. **Iteración**: Recorrer cada elemento del array usando un bucle `for`
   ```typescript
   for (let i = 0; i < nums.length; i++) {
   ```

3. **Reducción**: Aplicar la función reductora al acumulador actual y el elemento actual
   ```typescript
   acc = fn(acc, nums[i]);
   ```

4. **Acumulación**: El resultado de `fn` se convierte en el nuevo valor del acumulador
5. **Retorno**: Devolver el valor final del acumulador

### Aspectos clave:
- **Acumulador único**: Una sola variable mantiene el estado a través de todas las iteraciones
- **Aplicación secuencial**: La función se aplica elemento por elemento, en orden
- **Array vacío**: Si no hay elementos, el bucle no se ejecuta y retorna `init`
- **Flexibilidad**: La función reductora puede implementar cualquier operación (suma, producto, máximo, etc.)

## Casos extremos

- Array vacío: debe retornar el valor inicial
- Array con un solo elemento: aplicar función una vez
- Funciones que siempre retornan el mismo valor
- Operaciones no conmutativas (donde el orden importa)
- Valores inicial que afectan el resultado (ej: 0 para multiplicación, infinito para mínimo)

## Complejidad

- Time complexity: O(n) - iteramos una vez por cada elemento
- Space complexity: O(1) - solo usamos una variable acumuladora

## Conclusión

Este problema enseña el concepto más fundamental de la programación funcional:

1. **Reducción (Fold)**: Combinar múltiples valores en uno solo usando una función
2. **Acumulador**: Patrón para mantener estado a través de iteraciones
3. **Función reductora**: Función que define cómo combinar valores
4. **Valor inicial**: Importancia del estado inicial en algoritmos iterativos

La implementación manual de `reduce` revela:
- Cómo los datos fluyen a través de transformaciones secuenciales
- La diferencia entre acumular (reduce) vs transformar (map) vs filtrar (filter)
- El poder de las funciones de orden superior para crear abstracciones reutilizables

### Lecciones aprendidas:
- **Reduce es la operación más general**: Map y filter pueden implementarse usando reduce
- **El patrón acumulador**: Esencial para algoritmos iterativos y recursivos
- **Composición funcional**: Cómo pequeñas funciones pueden crear transformaciones complejas
- **Estado inmutable**: El acumulador se actualiza, pero cada paso crea un nuevo valor

### Trilogía completa (Map, Filter, Reduce):
- **Map**: 1 → 1 (transformación elemento a elemento)
- **Filter**: n → k (selección de elementos)
- **Reduce**: n → 1 (combinación a un valor único)
