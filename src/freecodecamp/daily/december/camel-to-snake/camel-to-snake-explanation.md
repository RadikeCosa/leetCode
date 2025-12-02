---
title: Camel to Snake
source: freecodecamp
series: daily
category: TODO
createdAt: 2025-12-02
difficulty: easy
topics:
  - string manipulation
---

## De Camel a Snake - Análisis y Explicación

## Enunciado del Problema

Dado un string en camel case, devolvé la version en snake case del string utilizando las siguientes reglas:
El string de entrada contendrá solo letras (A-Z y a-z) y siempre comenzará con una letra minúscula.
Cada letra mayúscula en el string camel case inicia una nueva palabra.
Convertí todas las letras a minúsculas.
Separá las palabras con un guion bajo (\_).

## Análisis Inicial

### Comprensión del Problema

- Camel Case: Formato donde las palabras se concatenan sin espacios y cada palabra (excepto la primera) comienza con una letra mayúscula. Ejemplo: `camelCaseExample`.
- Snake Case: Formato donde las palabras están en minúsculas y separadas por guiones bajos. Ejemplo: `snake_case_example`.

### Casos de Prueba Identificados

| Entrada           | Salida Esperada      | Descripción                                            |
| ----------------- | -------------------- | ------------------------------------------------------ |
| `camelCase`       | `camel_case`         | Caso básico con una sola mayúscula.                    |
| `thisIsATest`     | `this_is_a_test`     | Caso con múltiples palabras.                           |
| `exampleString`   | `example_string`     | Caso con dos palabras.                                 |
| `aSimpleTestCase` | `a_simple_test_case` | Caso con múltiples palabras y mayúsculas consecutivas. |

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver el problema tenemos que recorrer cada caracter del string de entrada para identificar las letras mayúsculas. Cada vez que encontremos una letra mayúscula, la convertiremos a minúscula y añadiremos un guion bajo antes de ella en el string de salida.
Una alternativa que se me ocurre mientras escribo es usar el metodo split pero no se que argumento usar para separar las palabras.
Otra alternativa es usar expresiones regulares para identificar las letras mayúsculas y reemplazarlas con el guion bajo seguido de la letra en minúscula.
Me parece que para la primer version voy a implementar la primera alternativa y despues usare expresiones regulares para comparar.

### Implementación Paso a Paso

Para implementar la solución, seguí estos pasos:

1. Inicialicé una variable vacía para almacenar el resultado.
2. Recorrí cada caracter del string de entrada.
3. Si el caracter es una letra mayúscula:
   - Convertí la letra a minúscula.
   - Añadí un guion bajo seguido de la letra minúscula al resultado.
4. Si el caracter es una letra minúscula, simplemente la añadí al resultado.
5. Finalmente, retorné el string resultante.

### Código Final

```javascript
function toSnakeLoop(camelCaseStr) {
  let snakeCaseStr = "";
  for (let char of camelCaseStr) {
    if (char >= "A" && char <= "Z") {
      snakeCaseStr += "_" + char.toLowerCase();
    } else {
      snakeCaseStr += char;
    }
  }
  return snakeCaseStr;
}
```

### Alternativa con Expresiones Regulares

### Implementacion Paso a Paso

Para implementar la solución usando expresiones regulares, seguí estos pasos:

1. Utilicé el método `replace` del string con una expresión regular que busca todas las letras mayúsculas.
2. En la función de reemplazo, convertí la letra mayúscula a minúscula y la precedí con un guion bajo.
3. Retorné el string modificado.

### Código Final con Expresiones Regulares

```javascript
function toSnakeRegex(camelCaseStr) {
  return camelCaseStr.replace(/([A-Z])/g, function (match) {
    return "_" + match.toLowerCase();
  });
}
```

## Análisis de Complejidad

### Complejidad Temporal

#### Version Loop

La complejidad temporal de esta solución es O(n), donde n es la longitud del string de entrada. Esto se debe a que recorremos cada caracter del string una sola vez.

#### Version Regex

La complejidad temporal de esta solución también es O(n) en promedio, donde n es la longitud del string de entrada. Aunque las operaciones con expresiones regulares pueden tener un costo adicional, en este caso específico, la expresión regular utilizada es eficiente y procesa el string en una sola pasada.

### Complejidad Espacial

#### Ambas Versiones

La complejidad espacial de ambas soluciones es O(n) en el peor de los casos, ya que en el string de salida podríamos tener hasta n caracteres adicionales (en el caso donde cada letra es mayúscula y se añade un guion bajo antes de cada una).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de strings.
- Uso de bucles para recorrer caracteres.
- Uso de expresiones regulares para identificar patrones en strings.
- Conversión de caracteres entre mayúsculas y minúsculas.

### Consideraciones

- La versión con expresiones regulares es más concisa y puede ser más eficiente en términos de tiempo de desarrollo.
- Ambas soluciones son válidas y tienen una complejidad similar, por lo que la elección entre ellas puede depender de las preferencias personales o del contexto del problema.

## Recursos y Referencias

<!-- TODO: Links útiles, algoritmos relacionados, etc. -->
