---
title: "Character Battle"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-25"
---

# Character Battle - Análisis y Explicación

## Enunciado del Problema

Dados dos strings que representan tu ejército y un ejército opuesto, cada carácter de tu ejército batalla contra el carácter en la misma posición del ejército opuesto usando las siguientes reglas:

Caracteres a-z tienen una fuerza de 1-26, respectivamente.
Caracteres A-Z tienen una fuerza de 27-52, respectivamente.
Dígitos 0-9 tienen una fuerza de su propio valor.
Todos los demás caracteres tienen un valor de cero.
Cada carácter solo puede luchar en una batalla.
Para cada batalla, el carácter más fuerte gana. El ejército con más victorias, gana la guerra. Devuelve los siguientes valores:

"Oppnent retreated" si tu ejército tiene más caracteres que el ejército opuesto.
"We retreated" si el ejército opuesto tiene más caracteres que el tuyo.
"We won" si tu ejército ganó más batallas.
"We lost" si el ejército opuesto ganó más batallas.
"It was a tie" si ambos ejércitos ganaron el mismo número de batallas.

## Análisis Inicial

### Comprensión del Problema

Tenemos dos strings que representan dos ejercitos y debemos comparar los caracteres en las mismas posiciones para determinar cuál ejército gana más batallas basándonos en la fuerza de cada carácter.
Para eso debemos asignar valores a los caracteres según las reglas dadas y luego comparar estos valores posición por posición.

```javascript
function characterBattle(army1, army2) {
  // Implementación aquí
}
```

### Casos de Prueba Identificados

1. `characterBattle("Hello", "World")` debería devolver `"We lost"`.
2. `characterBattle("pizza", "salad")` debería devolver `"We won"`.
3. `characterBattle("C@T5", "D0G$")` debería devolver `"We won"`.
4. `characterBattle("kn!ght", "orc")` debería devolver `"Opponent retreated"`.
5. `characterBattle("PC", "Mac")` debería devolver `"We retreated"`.
6. `characterBattle("Wizards", "Dragons")` debería devolver `"It was a tie"`.
7. `characterBattle("Mr. Smith", "Dr. Jones")` debería devolver `"It was a tie"`.

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque consiste en iterar sobre los caracteres de ambos strings, calcular la fuerza de cada carácter según las reglas dadas, y contar las victorias de cada ejército. Al final, se comparan las victorias para determinar el resultado final.

### Implementación Paso a Paso

1. Definir una función para calcular la fuerza de un carácter.
2. Iterar sobre los caracteres de ambos strings hasta la longitud del más corto.
3. Comparar las fuerzas de los caracteres en cada posición y contar las victorias.
4. Comparar el número de victorias y la longitud de los strings para determinar el resultado final.
5. Devolver el resultado según las reglas especificadas.

```javascriptfunction battle(myArmy, opposingArmy) {
  const myArmyLength = myArmy.length;
  const opposingArmyLength = opposingArmy.length;

  if (myArmyLength > opposingArmyLength) {
    return "Opponent retreated";
  } else if (myArmyLength < opposingArmyLength) {
    return "We retreated";
  }

  let myWins = 0;
  let opposingWins = 0;
  // Function to get the strength of a character
  const getStrength = (char) => {
    // Lowercase letters
    if (char >= "a" && char <= "z") {
      return char.charCodeAt(0) - "a".charCodeAt(0) + 1;
      // Uppercase letters
    } else if (char >= "A" && char <= "Z") {
      return char.charCodeAt(0) - "A".charCodeAt(0) + 27;
      // Digits
    } else if (char >= "0" && char <= "9") {
      return parseInt(char, 10);
    }
    // All other characters
    return 0;
  };
  // Compare characters position by position
  for (let i = 0; i < myArmyLength; i++) {
    // Get strengths
    const myStrength = getStrength(myArmy[i]);
    const opposingStrength = getStrength(opposingArmy[i]);
    // Determine winner
    if (myStrength > opposingStrength) {
      myWins++;
    } else if (opposingStrength > myStrength) {
      opposingWins++;
    }
  }

  if (myWins > opposingWins) {
    return "We won";
  } else if (opposingWins > myWins) {
    return "We lost";
  } else {
    return "It was a tie";
  }
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de la solución es O(n), donde n es la longitud del ejército más corto. Esto se debe a que iteramos una vez sobre los caracteres de ambos strings para comparar sus fuerzas.

### Complejidad Espacial

La complejidad espacial es O(1) ya que utilizamos un número constante de variables adicionales para contar las victorias y calcular la fuerza de los caracteres, independientemente del tamaño de los inputs.

## Casos Edge y Consideraciones

1. Si uno de los strings está vacío, el otro ejército automáticamente gana.
2. Si ambos strings tienen la misma longitud pero todos los caracteres son iguales, el resultado será un empate.
3. Si hay caracteres especiales o espacios, estos tendrán una fuerza de cero y no afectarán el resultado de las batallas.
4. Si los strings tienen diferentes longitudes, se debe manejar correctamente la condición de retirada antes de comparar las fuerzas.
5. Asegurarse de que la función maneje correctamente caracteres no alfanuméricos.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de strings y caracteres.
- Uso de estructuras de control para comparar valores.
- Implementación de reglas de negocio en código.
- Ascii y conversión de caracteres a valores numéricos.

### Posibles Optimizaciones

Dado que la solución ya es O(n) en tiempo y O(1) en espacio, no hay muchas optimizaciones posibles sin cambiar el enfoque fundamental. Sin embargo, se podría considerar:

- Precalcular las fuerzas de los caracteres en un mapa para evitar cálculos repetidos.
- Utilizar técnicas de paralelización si se trabaja con strings extremadamente largos en un entorno adecuado.
- Mejorar la legibilidad del código mediante la modularización de funciones.

## Recursos y Referencias

- [ASCII Table](https://www.ascii-code.com/) - Para entender la conversión de caracteres a valores numéricos.
- [JavaScript String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) - Documentación oficial de métodos de strings en JavaScript.
- [Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation) - Para entender la complejidad algorítmica.