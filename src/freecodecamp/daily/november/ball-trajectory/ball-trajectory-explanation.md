---
name: ball-trajectory
source: freecodecamp
series: daily
category: freecodecamp
difficulty: easy
topics: []
createdAt: 2025-11-29
---

# Ball Trajectory - Análisis y Explicación

## Enunciado del Problema

El desafío de hoy está inspirado en el videojuego Pong, lanzado el 29 de noviembre de 1972. Se te proporciona una matriz (array de arrays) que indica la ubicación actual de la pelota (2) y su ubicación previa (1). Debes devolver los índices de la matriz correspondientes a la próxima posición de la pelota.

La pelota siempre se mueve en línea recta. La dirección del movimiento se determina según el desplazamiento de la pelota desde la posición 1 a la posición 2. Los bordes de la matriz actúan como paredes: si la pelota choca contra la pared superior o inferior, rebota invirtiendo su dirección vertical; si choca contra la pared derecha o izquierda, rebota invirtiendo su dirección horizontal; si choca contra una esquina, invierte ambas direcciones.

## Análisis Inicial

### Comprensión del Problema

El objetivo del desafio es calcular la proxima posicion de la pelota basandonos en su posicion actual y su posicion previa y teniendo en cuenta las colisiones contras las paredes o angulos de la matriz.

- identificar la direccion del movimiento de la pelota usando los valores 1 y 2 en la matriz.
- simular el movimiento de la pelota.
- detectar colisiones con los bordes y aplicar las reglas de rebote correspondientes.
- devolver los indices de la proxima posicion de la pelota.

### Casos de Prueba Identificados

1. Entrada: [[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]] → Salida esperada: [2, 3]
2. Entrada: [[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]] → Salida esperada: [3, 0]
3. Entrada: [[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]] → Salida esperada: [1, 2]
4. Entrada: [[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]] → Salida esperada: [1, 1]
5. Entrada: [[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]] → Salida esperada: [2, 2]

## Desarrollo de la Solución

### Enfoque Elegido

Para la solucion la prioridad es hacer un codigo legible para facilitar su comprension y debugueo. La estrategia general es:

1. **Identificación de posiciones:** Recorrer todas las celdas de la matriz para encontrar la posición actual (`2`) y la previa (`1`) de la pelota.
2. **Cálculo de dirección:** Se determina la dirección del movimiento calculando la diferencia entre las posiciones actual y previa, obteniendo así el vector de desplazamiento.
3. **Simulación del movimiento:** Se calcula la próxima posición sumando el vector de desplazamiento a la posición actual.
4. **Gestión de rebotes:** Antes de devolver la posición, se verifica si la próxima posición está fuera de los límites de la matriz. Si es así, se invierte la dirección correspondiente (vertical, horizontal o ambas) para simular el rebote en la pared o esquina.
5. **Retorno del resultado:** Finalmente, se devuelve la posición calculada como un array de dos elementos `[fila, columna]`.

Este enfoque permite resolver el problema en una sola pasada por la matriz y con lógica sencilla para los rebotes, garantizando claridad y eficiencia.

### Implementación Paso a Paso

1. **Inicialización de variables y obtención de dimensiones de la matriz:**  
   Se definen las variables para almacenar las posiciones actual y previa de la pelota, y se obtienen las dimensiones de la matriz.

2. **Búsqueda de posiciones actual y previa:**  
   Se recorre la matriz para localizar la celda con valor `2` (posición actual) y la celda con valor `1` (posición previa).

3. **Cálculo del vector de movimiento:**  
   Se calcula la diferencia entre las posiciones actual y previa para determinar la dirección del movimiento.

4. **Cálculo de la próxima posición:**  
   Se suma el vector de movimiento a la posición actual para obtener la siguiente posición.

5. **Gestión de rebotes en los bordes:**  
   Si la próxima posición está fuera de los límites de la matriz, se invierte la dirección correspondiente para simular el rebote.

6. **Retorno de la próxima posición:**  
   Se devuelve la posición calculada como un array `[fila, columna]`.

#### Código de la implementación

```javascript
function getNextLocation(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let current = null;
  let previous = null;

  // 1. Buscar posiciones actual y previa
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 2) current = [r, c];
      if (matrix[r][c] === 1) previous = [r, c];
    }
  }

  if (!current || !previous) return null;

  // 2. Calcular dirección del movimiento
  let moveRow = current[0] - previous[0];
  let moveCol = current[1] - previous[1];

  // 3. Calcular próxima posición
  let nextRow = current[0] + moveRow;
  let nextCol = current[1] + moveCol;

  // 4. Rebote en bordes
  if (nextRow < 0 || nextRow >= rows) {
    moveRow *= -1;
    nextRow = current[0] + moveRow;
  }
  if (nextCol < 0 || nextCol >= cols) {
    moveCol *= -1;
    nextCol = current[1] + moveCol;
  }

  // 5. Retornar la próxima posición
  return [nextRow, nextCol];
}
```

## Análisis de Complejidad

**Complejidad Temporal:**  
La función recorre toda la matriz una sola vez para encontrar las posiciones actual y previa de la pelota. Si la matriz tiene `n` filas y `m` columnas, la complejidad es **O(n \* m)**.

**Complejidad Espacial:**  
Se utilizan solo unas pocas variables para almacenar posiciones y dimensiones, por lo que la complejidad espacial es **O(1)**.

---

### Casos Edge y Consideraciones

- **Pelota en una esquina:** Si la pelota está en una esquina y el siguiente movimiento la llevaría fuera de la matriz en ambas direcciones, se invierten ambos componentes del vector de movimiento.
- **Pelota en un borde:** Si la pelota está en un borde (superior/inferior o izquierdo/derecho), solo se invierte la dirección correspondiente.
- **Matriz sin posiciones válidas:** Si no se encuentra la posición actual (`2`) o la previa (`1`), la función retorna `null`.
- **Matriz de tamaño mínimo:** El algoritmo funciona correctamente incluso en matrices pequeñas (por ejemplo, 2x2).
- **Movimientos diagonales:** El cálculo del vector de movimiento permite movimientos en cualquier dirección, incluyendo diagonales.

Estos casos aseguran que la función maneje correctamente los rebotes y situaciones límite.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- **Recorrido de matrices:** Se utilizó un doble bucle para recorrer la matriz y localizar posiciones específicas.
- **Vectores de movimiento:** El cálculo de la dirección se realizó mediante la diferencia entre posiciones, aplicando el concepto de vectores en 2D.
- **Simulación de física básica:** Se implementó la lógica de rebote en los bordes, similar a la física de colisiones en videojuegos.
- **Control de límites:** Se aplicaron validaciones para evitar accesos fuera de los límites de la matriz.

---

### Posibles Optimizaciones

- **Detener el recorrido temprano:** Si se encuentran ambas posiciones (actual y previa), se podría romper el bucle para evitar recorrer el resto de la matriz.
- **Validación de entrada:** Se puede agregar una verificación para asegurar que la matriz contiene exactamente una posición actual y una previa.
- **Generalización:** Adaptar la función para manejar múltiples pelotas o diferentes reglas de rebote si el problema lo requiere.

---

## Recursos y Referencias

- [Documentación de Arrays en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Simulación de rebotes en videojuegos](https://es.wikipedia.org/wiki/Pong)
- [Matrix Data Structure](https://www.geeksforgeeks.org/dsa/matrix/)
