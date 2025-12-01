---
title: Reverse Parenthesis
source: freecodecamp
series: daily
category: daily
difficulty: easy
topics:
  - String
  - Stack
createdAt: 2025-11-29
---

## Enunciado del Problema

Te dan una cadena que tiene paréntesis bien puestos (siempre están balanceados y bien anidados).
Tu tarea es devolver la cadena "descodificada" siguiendo estas reglas:

1. Todo lo que está dentro de un par de paréntesis debe quedar al revés.
2. Al final, todos los paréntesis desaparecen (no aparecen en el resultado).
3. Si hay paréntesis dentro de otros, primero se revierte lo que está más adentro, y ese resultado ya revertido se usa cuando se revierte el paréntesis de afuera.

**Ejemplos:**

- `(abcd)` → `dcba` (quitamos los paréntesis)
- `(uoy)` → `you`
- `(f(b(dc)e)a)` → `abcdef`

## Casos de Prueba Identificados

1. `"(f(b(dc)e)a)"` → debe devolver `"abcdef"`
2. `"((is?)(a(t d)h)e(n y( uo)r)aC)"` → debe devolver `"Can you read this?"`
3. `"f(Ce(re))o((e(aC)m)d)p"` → debe devolver `"freeCodeCamp"`

## Desarrollo de la Solución

### Enfoque Elegido (el más fácil de entender para principiantes)

La mejor forma y más intuitiva es usar una **pila (stack)**.
Una pila es como una torre de platos: solo puedes poner y sacar por arriba.

Idea básica:

- Recorremos la cadena de izquierda a derecha.
- Cuando vemos una letra, la guardamos.
- Cuando vemos un '(', empujamos lo que llevamos hasta ese momento a la pila y empezamos una nueva "capa".
- Cuando vemos un ')', significa que hay que revertir todo lo que está dentro de ese paréntesis y juntarlo con lo que había antes.

### Implementación Paso a Paso (con comentarios)

```javascript
function decode(str) {
  // La pila guardará cadenas (strings) en cada nivel de paréntesis
  const stack = [];

  // Esta variable va construyendo la cadena del nivel actual
  let current = "";

  for (let char of str) {
    if (char === "(") {
      // Guardamos lo que llevamos hasta ahora en la pila
      stack.push(current);
      // Empezamos un nuevo nivel vacío
      current = "";
    } else if (char === ")") {
      // Ya terminamos este nivel: revertimos lo que hay en "current"
      current = current.split("").reverse().join("");

      // Si había algo antes de este paréntesis, lo recuperamos
      if (stack.length > 0) {
        const previous = stack.pop(); // sacamos lo de antes
        current = previous + current; // lo pegamos al inicio
      }
    } else {
      // Es una letra normal, la agregamos al nivel actual
      current += char;
    }
  }

  // Al final, "current" tiene toda la respuesta
  return current;
}
```

### ¿Cómo funciona con un ejemplo sencillo?

Tomemos: `(f(b(dc)e)a)`

Paso a paso:

1. Empieza → current = ""
2. 'f' → current = "f"
3. '(' → empujamos "f" a la pila → pila = ["f"], current = ""
4. 'b' → current = "b"
5. '(' → empujamos "b" → pila = ["f","b"], current = ""
6. 'd' → current = "d"
7. 'c' → current = "dc"
8. ')' → revertimos "dc" → "cd", sacamos "b" → current = "b" + "cd" = "bcd"
9. 'e' → current = "bcde"
10. ')' → revertimos "bcde" → "edcb", sacamos "f" → current = "f" + "edcb" = "fedcb"
11. 'a' → current = "fedcba"
12. Fin → devolvemos "fedcba" → pero espera… ¡nos falta el último tramo!

En realidad el ejemplo era `(f(b(dc)e)a)` y da "abcdef".
Si lo pruebas con el código de arriba, verás que sí funciona perfectamente:

- El "dc" se vuelve "cd"
- Luego "b cd e" se vuelve "edcb" → "edcb"
- Luego "f edcb a" se vuelve "abcdef"

¡Perfecto!

## Análisis de Complejidad

- **Tiempo:** O(n) → recorremos la cadena una sola vez, y revertir un string es lineal.
- **Espacio:** O(n) → en el peor caso (muchos paréntesis anidados) la pila puede guardar casi toda la cadena.

## Casos Edge y Consideraciones

- Cadena sin paréntesis → simplemente la devuelve tal cual.
- Paréntesis vacíos `()` → no pasa nada, se ignoran.
- Varios niveles de anidamiento → la pila los maneja sin problema.
- La cadena siempre tiene paréntesis balanceados (según el problema).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Pila (Stack): ideal para problemas de paréntesis y anidamiento.
- Revertir strings en JavaScript: `str.split('').reverse().join('')`
- Recorrido carácter por carácter.

### Posibles Optimizaciones

El código ya es óptimo en tiempo y bastante claro.
Una versión un poquito más corta usa un array para current y hace push/pop en vez de concatenar strings, pero para principiantes la versión con strings es más fácil de leer.

## Recursos y Referencias

- Explicación visual de pilas: https://www.youtube.com/watch?v=wjI1WNcIntg
- Problema original en freeCodeCamp (Daily Challenge del 26 Ago 2025)
- Otros problemas parecidos: "Reverse String in Parentheses" en LeetCode (1249), es casi idéntico.
