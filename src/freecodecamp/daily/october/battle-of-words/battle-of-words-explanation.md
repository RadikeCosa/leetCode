---
title: "Battle Of Words"
difficulty: "easy"
topics:
  - Array
  - String
  - Math
  - Hash Table
  - Validation
  - Conversion
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Battle of Words

## Análisis del Problema

Este problema nos pide determinar cuál de dos equipos "gana" en una batalla de palabras, donde cada palabra de un equipo compite contra la palabra correspondiente del equipo oponente. La batalla se basa en el valor numérico de cada palabra, calculado sumando los valores de sus letras.

### Reglas principales

- Las letras minúsculas a-z tienen valores del 1 al 26 (a=1, b=2, ..., z=26)
- Las letras mayúsculas duplican su valor (A=2, B=4, ..., Z=52)
- Cada palabra gana si su valor es mayor que el de la palabra oponente correspondiente
- Gana el equipo con más palabras victoriosas
- Si ambos equipos tienen el mismo número de victorias, es un empate ("Draw")

### Restricciones

- Ambas oraciones tienen exactamente el mismo número de palabras
- Las palabras están separadas por un solo espacio
- Solo contienen letras (sin números, puntuación, etc.)

El resultado debe ser:

- "We win" si nuestro equipo tiene más victorias
- "We lose" si el oponente tiene más victorias
- "Draw" si hay empate

## Enfoque

Para resolver este problema, seguiremos estos pasos:

1. **Dividir las oraciones en palabras**: Usar `split(' ')` para convertir cada oración en un array de palabras.

2. **Calcular valores de palabras**: Para cada palabra, calcular su valor sumando los valores de cada letra, considerando si son mayúsculas o minúsculas.

3. **Comparar palabras**: Para cada par de palabras (mismo índice), comparar sus valores y contar las victorias de cada equipo.

4. **Determinar el resultado**: Comparar el número de victorias de ambos equipos y retornar la cadena correspondiente.

### Cálculo del valor de una palabra

- Para cada carácter en la palabra:
  - Obtener el valor base: `char.toLowerCase().charCodeAt(0) - 96`
  - Si el carácter original es mayúscula, multiplicar el valor por 2
  - Sumar al total de la palabra

Este enfoque es eficiente y directo, procesando cada palabra una vez para calcular su valor y luego comparando los valores por pares.

## Complejidad

- **Tiempo**: O(L) donde L es la longitud total de caracteres en ambas oraciones. Procesamos cada carácter exactamente una vez para calcular los valores de las palabras.
- **Espacio**: O(n) donde n es el número de palabras, debido a la creación de los arrays `ourWords` y `opponentWords` mediante `split()`.

## Código

```javascript
function wordValue(word) {
  return [...word].reduce((value, char) => {
    const baseValue = char.toLowerCase().charCodeAt(0) - 96;
    return value + (char === char.toUpperCase() ? baseValue * 2 : baseValue);
  }, 0);
}

function getBattleResult(ourWins, opponentWins) {
  if (ourWins > opponentWins) return "We win";
  if (opponentWins > ourWins) return "We lose";
  return "Draw";
}

function battle(ourTeam, opponent) {
  const ourWords = ourTeam.split(" ");
  const opponentWords = opponent.split(" ");

  const differences = ourWords.map(
    (word, i) => wordValue(word) - wordValue(opponentWords[i])
  );

  const ourWins = differences.filter((diff) => diff > 0).length;
  const opponentWins = differences.filter((diff) => diff < 0).length;

  return getBattleResult(ourWins, opponentWins);
}
```

## Notas

- **Edge cases considerados**: Funciona correctamente con mayúsculas/minúsculas, palabras de diferentes longitudes, y empates en palabras individuales.
- **Optimizaciones aplicadas**:
  - **Funciones puras**: `wordValue` y `getBattleResult` extraídas como funciones externas reutilizables
  - **Programación funcional**: Uso de `reduce`, `map` y `filter` para mayor claridad y expresividad
  - **Inmutabilidad**: `const` en lugar de `let` donde es posible
  - **Operador ternario**: Más conciso que if-else en expresiones
  - **Separación de responsabilidades**: Función auxiliar para determinar resultado
- **Patrones aprendidos**: Separación de responsabilidades, composición funcional, transformación de arrays
- **Lecciones aprendidas**: Importancia de retornar valores en funciones auxiliares, verificar scopes de variables, y cómo la programación funcional puede hacer el código más legible y mantenible.