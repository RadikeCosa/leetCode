---
title: "digits-vs-letters"
difficulty: "easy"
topics:
  - String
  - Counting
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-25"
---

# Digits vs Letters

## Enunciado del problema

Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

Digits consist of 0-9.
Letters consist of a-z in upper or lower case.
Ignore any other characters.

**Tests:**

1. `digitsOrLetters("abc123")` should return `"tie"`.
2. `digitsOrLetters("a1b2c3d")` should return `"letters"`.
3. `digitsOrLetters("1a2b3c4")` should return `"digits"`.
4. `digitsOrLetters("abc123!@#DEF")` should return `"letters"`.
5. `digitsOrLetters("H3110 W0R1D")` should return `"digits"`.
6. `digitsOrLetters("P455W0RD")` should return `"tie"`.

## Solución

La solución implementada utiliza expresiones regulares para contar dígitos y letras, luego compara las cantidades:

### Paso 1: Contar dígitos

```javascript
const digitsCount = (str.match(/\d/g) || []).length;
```

- `\d` es una expresión regular que coincide con cualquier dígito (0-9)
- `match(/\d/g)` retorna un array con todos los dígitos encontrados
- `|| []` maneja el caso donde no hay dígitos (evita `null`)
- `.length` nos da la cantidad de dígitos

### Paso 2: Contar letras

```javascript
const lettersCount = (str.match(/[a-zA-Z]/g) || []).length;
```

- `[a-zA-Z]` coincide con cualquier letra mayúscula o minúscula
- Funciona igual que el conteo de dígitos
- Ignora automáticamente caracteres que no son letras

### Paso 3: Comparar y retornar resultado

```javascript
if (digitsCount > lettersCount) return "digits";
if (lettersCount > digitsCount) return "letters";
return "tie";
```

- Compara las cantidades usando condicionales simples
- Retorna el string apropiado según la comparación
- El caso "tie" se maneja con el return final

### Resultado final

```javascript
function digitsOrLetters(str) {
  const digitsCount = (str.match(/\d/g) || []).length;
  const lettersCount = (str.match(/[a-zA-Z]/g) || []).length;

  if (digitsCount > lettersCount) return "digits";
  if (lettersCount > digitsCount) return "letters";
  return "tie";
}
```

- Una función pura que no modifica el string original
- Maneja automáticamente caracteres especiales (los ignora)
- Retorna siempre uno de los tres valores posibles

## Enfoques alternativos

### Alternativa 1: Bucle for con verificación carácter por carácter

```javascript
function digitsOrLetters(str) {
  let digitsCount = 0;
  let lettersCount = 0;

  for (let char of str) {
    if (char >= "0" && char <= "9") {
      digitsCount++;
    } else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      lettersCount++;
    }
    // Ignora otros caracteres automáticamente
  }

  if (digitsCount > lettersCount) return "digits";
  if (lettersCount > digitsCount) return "letters";
  return "tie";
}
```

**Ventajas:**

- No requiere conocimientos de regex
- Fácil de entender para principiantes
- No crea arrays intermedios

**Desventajas:**

- Más código y verboso
- Más propenso a errores en las condiciones
- Menos idiomático en JavaScript moderno

### Alternativa 2: Usando reduce para acumular conteos

```javascript
function digitsOrLetters(str) {
  const counts = str.split("").reduce(
    (acc, char) => {
      if (char >= "0" && char <= "9") {
        acc.digits++;
      } else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        acc.letters++;
      }
      return acc;
    },
    { digits: 0, letters: 0 }
  );

  if (counts.digits > counts.letters) return "digits";
  if (counts.letters > counts.digits) return "letters";
  return "tie";
}
```

**Ventajas:**

- Funcional y declarativo
- Agrupa la lógica de conteo en un solo lugar
- Fácil de extender si necesitamos contar más tipos de caracteres

**Desventajas:**

- Crea un array intermedio con split('')
- Un poco más complejo de leer
- Overhead innecesario para un problema simple

### Alternativa 3: Usando filter para separar y contar

```javascript
function digitsOrLetters(str) {
  const chars = str.split("");

  const digits = chars.filter((char) => char >= "0" && char <= "9");
  const letters = chars.filter(
    (char) => (char >= "a" && char <= "z") || (char >= "A" && char <= "Z")
  );

  if (digits.length > letters.length) return "digits";
  if (letters.length > digits.length) return "letters";
  return "tie";
}
```

**Ventajas:**

- Muy legible y fácil de entender
- Separa claramente la lógica de filtrado
- Funcional y moderno

**Desventajas:**

- Crea múltiples arrays intermedios
- Menos eficiente que la solución con regex
- Más verbose que la solución implementada

### Alternativa 4: Usando expresiones regulares con replace

```javascript
function digitsOrLetters(str) {
  const digitsCount = (str.match(/\d/g) || []).length;
  const lettersCount = str.replace(/[^a-zA-Z]/g, "").length;

  if (digitsCount > lettersCount) return "digits";
  if (lettersCount > digitsCount) return "letters";
  return "tie";
}
```

**Ventajas:**

- Solo una regex para letras (usando replace)
- Menos código que el bucle for
- Buena combinación de regex y métodos de string

**Desventajas:**

- Menos consistente (mezcla match y replace)
- replace() crea un nuevo string, que puede ser ineficiente para strings muy largos

## Complejidad

- **Tiempo**: O(n) donde n es la longitud del string

  - `str.match(/\d/g)` recorre todo el string buscando dígitos
  - `str.match(/[a-zA-Z]/g)` recorre todo el string buscando letras
  - Las comparaciones son O(1)
  - Regex con flag `g` es eficiente para este caso

- **Espacio**: O(n) en el peor caso
  - Los arrays retornados por `match()` pueden contener hasta n elementos
  - Se puede optimizar a O(1) usando un contador en lugar de arrays
  - Para strings típicos, el espacio es mínimo

## Aprendizajes

- **Expresiones regulares**: `\d` para dígitos, `[a-zA-Z]` para letras
- **Método match()**: Retorna array de matches o null
- **Operador ||**: Manejo de valores null/undefined con arrays vacíos
- **Propiedad length**: Contar elementos en arrays
- **Condicionales encadenados**: if-else para lógica de comparación
- **Funciones puras**: No modifican el input, solo retornan resultado
- **Manejo de casos edge**: Strings vacíos, sin dígitos, sin letras
- **Regex flags**: `g` para matches globales (todos los ocurrencias)
- **Comparación de strings**: Case-sensitive por defecto en JavaScript
- **Trade-offs**: Regex vs bucles, legibilidad vs performance