---
title: "vowels-and-consonants"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-11-11"
---

# ✨ Vowels And Consonants - Análisis y Explicación

## 📋 Enunciado del Problema

Dado un string, devuelve un array con el número de vocales y consonantes que contiene.

- Las **vocales** son: a, e, i, o, u (mayúsculas y minúsculas)
- Las **consonantes** son todas las letras del alfabeto que no son vocales (mayúsculas y minúsculas)
- Los espacios y caracteres que no son letras no cuentan ni como vocales ni como consonantes

**Ejemplo:**

```text
Input: "Hello World!"
Output: [3, 7] // 3 vocales (e, o, o) y 7 consonantes (H, l, l, W, r, l, d)
```

------------------------------------------- | --------------- |
| "Hello World!"                                 | [3, 7]          |
| "JavaScript"                                   | [3, 7]          |
| "Python"                                       | [1, 5]          |
| "freeCodeCamp"                                 | [5, 7]          |
| "Hello, World!"                                | [3, 7]          |
| "The quick brown fox jumps over the lazy dog." | [11, 24]        |

---

## 🛠️ Desarrollo de la Solución

### Enfoque Elegido

El enfoque más eficiente es usar **expresiones regulares** para identificar vocales y consonantes en el string. Esto permite buscar patrones de manera rápida y clara, evitando la necesidad de iterar manualmente por cada caracter.

### Implementación Paso a Paso

1. Definir dos expresiones regulares: una para vocales y otra para consonantes
2. Usar el método `match()` del string para encontrar todas las vocales y consonantes
3. Contar la cantidad de coincidencias para cada tipo
4. Devolver un array con los conteos de vocales y consonantes

El método `match()` es un método de los strings en JavaScript que busca coincidencias con una expresión regular y devuelve un array con todas las coincidencias encontradas o null si no hay ninguna.

```javascript
function count(str) {
  function count(str) {
    const vowels = str.match(/[aeiou]/gi);
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return [vowels ? vowels.length : 0, consonants ? consonants.length : 0];
  }
}
```

---

## 📊 Análisis de Complejidad

### ⏱️ Complejidad Temporal

- **O(n)**, donde n es la longitud del string. Las expresiones regulares recorren el string una vez para buscar coincidencias.

### 💾 Complejidad Espacial

- **O(k)**, donde k es el número de coincidencias encontradas (vocales y consonantes). Los arrays generados por `match()` ocupan espacio proporcional a la cantidad de letras encontradas, pero no es significativo para strings normales.

---

## ⚠️ Casos Edge y Consideraciones

- String vacío: retorna `[0, 0]`
- Solo símbolos o números: retorna `[0, 0]`
- Mayúsculas y minúsculas se cuentan igual
- Caracteres especiales y espacios se ignoran

---

## 🤔 Reflexiones y Aprendizajes

### Conceptos Aplicados

- Expresiones regulares para búsqueda eficiente
- Uso de `match()` y manejo de null
- Validación de casos edge

### Posibles Optimizaciones

- Se podría iterar manualmente para evitar crear arrays intermedios, pero la solución actual es clara y suficientemente eficiente para la mayoría de casos.

## 📚 Recursos y Referencias

- [MDN: String.match()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [MDN: Expresiones Regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)

---

_💡 La claridad y simplicidad en la solución suelen ser la mejor optimización para problemas de conteo._