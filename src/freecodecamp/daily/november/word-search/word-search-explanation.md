# Word Search – Análisis y Explicación

## 1. Enunciado del Problema

Se te proporciona una matriz bidimensional de letras minúsculas (a-z) y una palabra objetivo. Debes encontrar los índices de inicio y fin de esa palabra en la matriz, sabiendo que:

- La matriz contiene únicamente letras minúsculas.
- La palabra aparece exactamente una vez.
- La palabra se encuentra en línea recta: horizontal, vertical o en direcciones invertidas.

**Ejemplo:**

```text
[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]
```

Para la palabra `"cat"`, la función retorna `[[0, 1], [2, 1]]`, donde `[0, 1]` es la posición de inicio ("c") y `[2, 1]` la de fin ("t").

## 2. Casos de Prueba

- `findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat")` → `[[0, 1], [2, 1]]`
- `findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog")` → `[[0, 0], [0, 2]]`
- `findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish")` → `[[3, 3], [0, 3]]`
- `findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox")` → `[[1, 3], [1, 1]]`

## 3. Diagrama Explicativo

El siguiente diagrama muestra el recorrido para buscar la palabra "cat" en la matriz, avanzando verticalmente:

```mermaid
graph TD
  A[Inicio: [0,1] 'c'] --> B[[1,1] 'a']
  B --> C[[2,1] 't']
  C --> D[Fin: [2,1]]
```

Puedes adaptar el diagrama para ilustrar otras direcciones o palabras.

## 4. Enfoque y Algoritmo

El enfoque consiste en:

- Recorrer cada celda de la matriz.
- Si la celda coincide con la primera letra de la palabra, explorar las 4 direcciones posibles (derecha, izquierda, abajo, arriba).
- Verificar letra por letra si la palabra se forma completamente en esa dirección.
- Si se encuentra, retornar las posiciones de inicio y fin.

**Pseudocódigo:**

```javascript
para cada celda (i, j) en matriz:
  si matriz[i][j] === palabra[0]:
    para cada dirección en direcciones:
      si verificar_palabra_en_direccion(i, j, dirección):
        retornar [inicio, fin]
retornar null
```

## 5. Implementación

```javascript
export default function findWord(matriz, palabra) {
  // Definir las 4 direcciones posibles
  const direcciones = [
    [0, 1],  // derecha
    [0, -1], // izquierda
    [1, 0],  // abajo
    [-1, 0], // arriba
  ];

  // Función auxiliar para verificar si la palabra existe en una dirección
  function verificarDireccion(filaInicio, colInicio, deltaFila, deltaCol) {
    let fila = filaInicio;
    let col = colInicio;

    // Verificar cada letra de la palabra
    for (let i = 0; i < palabra.length; i++) {
      // Verificar límites de la matriz
      if (
        fila < 0 ||
        fila >= matriz.length ||
        col < 0 ||
        col >= matriz[0].length
      ) {
        return false;
      }

      // Verificar si la letra coincide
      if (matriz[fila][col] !== palabra[i]) {
        return false;
      }

      // Avanzar en la dirección
      fila += deltaFila;
      col += deltaCol;
    }

    return true;
  }

  // Recorrer toda la matriz
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      // Si encontramos la primera letra de la palabra
      if (matriz[i][j] === palabra[0]) {
        // Probar cada una de las 4 direcciones
        for (const [deltaFila, deltaCol] of direcciones) {
          if (verificarDireccion(i, j, deltaFila, deltaCol)) {
            // Calcular la posición final
            const filaFin = i + deltaFila * (palabra.length - 1);
            const colFin = j + deltaCol * (palabra.length - 1);

            // Retornar inicio y fin
            return [
              [i, j],
              [filaFin, colFin],
            ];
          }
        }
      }
    }
  }

  // Si no se encuentra la palabra
  return null;
}
```

## 6. Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es O(N × M × L), donde:

- N es el número de filas de la matriz.
- M es el número de columnas de la matriz.
- L es la longitud de la palabra buscada.

Esto ocurre porque, en el peor caso, se recorre toda la matriz (N × M) y, para cada celda, se verifican hasta L letras en cada una de las 4 direcciones posibles.

### Complejidad Espacial

La complejidad espacial es O(1), ya que no se utilizan estructuras de datos adicionales que escalen con el tamaño de la entrada. Solo se emplean variables auxiliares para el seguimiento de índices y posiciones.

## 7. Casos Límite

- Palabra ubicada en los bordes de la matriz.
- Matriz rectangular (no necesariamente cuadrada).
- Palabra contenida en una sola fila o columna.
- Palabra de longitud 1 (solo una letra).

## 8. Optimización

La solución actual es eficiente para el problema dado, pero se pueden considerar las siguientes mejoras:

- **Romper bucles temprano:** El algoritmo retorna inmediatamente al encontrar la palabra, evitando búsquedas innecesarias.
- **Descartar direcciones imposibles:** Antes de explorar una dirección, verificar si hay espacio suficiente para la palabra completa (por ejemplo, para derecha: `j + palabra.length - 1 < matriz[0].length`).
- **Preprocesamiento:** Útil solo para búsquedas múltiples; para una sola palabra, no aporta beneficios significativos.
- **Reducir direcciones:** Si el problema limita las direcciones (ej. solo horizontal o vertical), se puede reducir el número de exploraciones.

## 9. Reflexiones y Aprendizajes

He aprendido a implementar un algoritmo de búsqueda en matrices bidimensionales, manejando direcciones y límites de manera eficiente.

### Conceptos Aplicados

- **Búsqueda en matriz:** Recorrido sistemático de celdas con verificación condicional.
- **Manejo de índices y límites:** Verificación en cada paso para evitar accesos fuera de rango, aplicado en `verificarDireccion`.
- **Exploración direccional:** Uso de deltas para definir direcciones y avanzar paso a paso.
- **Verificación incremental:** Avance letra por letra con detención temprana en fallos.

### Posibles Optimizaciones Futuras

Como se mencionó en la sección 8, las optimizaciones menores pueden mejorar el rendimiento en casos específicos, pero para este problema, la implementación actual es clara y adecuada.

## 10. Recursos y Referencias

- Problema similar en LeetCode: [Word Search](https://leetcode.com/problems/word-search/)
- Documentación de JavaScript: [Arrays y bucles](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
- Conceptos de algoritmos: Matrices y recorridos direccionales.
```
