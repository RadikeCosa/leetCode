# String Mirror

## Enunciado del problema

Given two strings, determine if the second string is a mirror of the first.

A string is considered a mirror if it contains the same letters in reverse order.
Treat uppercase and lowercase letters as distinct.
Ignore all non-alphabetical characters.

**Tests:**

1. `isMirror("helloworld", "helloworld")` should return `false`.
2. `isMirror("Hello World", "dlroW olleH")` should return `true`.
3. `isMirror("RaceCar", "raCecaR")` should return `true`.
4. `isMirror("RaceCar", "RaceCar")` should return `false`.
5. `isMirror("Mirror", "rorrim")` should return `false`.
6. `isMirror("Hello World", "dlroW-olleH")` should return `true`.
7. `isMirror("Hello World", "!dlroW !olleH")` should return `true`.

## Solución

La solución implementada utiliza expresiones regulares para limpiar caracteres no alfabéticos y comparación directa con reverso:

### Paso 1: Limpiar caracteres no alfabéticos

```javascript
const cleanStr1 = str1.replace(/[^a-zA-Z]/g, "");
const cleanStr2 = str2.replace(/[^a-zA-Z]/g, "");
```

- `[^a-zA-Z]` es una expresión regular que coincide con cualquier carácter que NO sea letra
- `replace(/[^a-zA-Z]/g, "")` elimina todos los caracteres no alfabéticos
- Se mantiene la capitalización original (no se convierte a lowercase)

### Paso 2: Comparar con el reverso

```javascript
return cleanStr1 === cleanStr2.split("").reverse().join("");
```

- `split("")` convierte el string en array de caracteres
- `reverse()` invierte el orden del array
- `join("")` convierte el array de vuelta a string
- Se compara directamente con `cleanStr1`

### Resultado final

```javascript
function isMirror(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, "");
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, "");
  return cleanStr1 === cleanStr2.split("").reverse().join("");
}
```

- Una función pura que no modifica los strings originales
- Retorna `true` si son mirrors, `false` en caso contrario

## Enfoques alternativos

### Alternativa 1: Bucle for con comparación carácter por carácter

```javascript
function isMirror(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, "");
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, "");

  if (cleanStr1.length !== cleanStr2.length) return false;

  for (let i = 0; i < cleanStr1.length; i++) {
    if (cleanStr1[i] !== cleanStr2[cleanStr2.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
```

**Ventajas:**

- Más eficiente en memoria (no crea arrays intermedios)
- Se puede detener temprano si encuentra diferencia
- Más control sobre el proceso de comparación

**Desventajas:**

- Más código y complejo de leer
- Menos idiomático en JavaScript moderno

### Alternativa 2: Usando Array.from() y every()

```javascript
function isMirror(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, "");
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, "");

  if (cleanStr1.length !== cleanStr2.length) return false;

  return Array.from(cleanStr1).every(
    (char, index) => char === cleanStr2[cleanStr2.length - 1 - index]
  );
}
```

**Ventajas:**

- Funcional y declarativo
- Fácil de entender la lógica
- Se detiene en la primera diferencia encontrada

**Desventajas:**

- Crea un array intermedio con Array.from()
- Un poco menos eficiente que el bucle for

### Alternativa 3: Usando reduce para construir el reverso

```javascript
function isMirror(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, "");
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, "");

  const reversedStr2 = cleanStr2
    .split("")
    .reduce((acc, char) => char + acc, "");
  return cleanStr1 === reversedStr2;
}
```

**¿Cómo funciona reduce() para principiantes?**

El método `reduce()` es como una máquina que procesa cada elemento de un array uno por uno y "acumula" un resultado. Imagina que tienes una caja donde vas guardando cosas mientras procesas una lista.

Para entender `reduce((acc, char) => char + acc, "")`, vamos paso a paso con el ejemplo `"Hola"`:

1. **Paso inicial**: `acc = ""` (string vacío, nuestro acumulador inicial)

2. **Primera iteración**: `char = "H"`
   - `char + acc` = `"H" + ""` = `"H"`
   - Ahora `acc = "H"`

3. **Segunda iteración**: `char = "o"`
   - `char + acc` = `"o" + "H"` = `"oH"`
   - Ahora `acc = "oH"`

4. **Tercera iteración**: `char = "l"`
   - `char + acc` = `"l" + "oH"` = `"loH"`
   - Ahora `acc = "loH"`

5. **Cuarta iteración**: `char = "a"`
   - `char + acc` = `"a" + "loH"` = `"aloH"`
   - Ahora `acc = "aloH"`

**Resultado final**: `"aloH"` (¡el reverso de "Hola"!)

**¿Por qué funciona para invertir?**

- En cada paso, ponemos el carácter actual AL PRINCIPIO del acumulador
- Esto hace que el último carácter procesado termine al inicio del resultado
- Es como apilar cartas: la primera carta que pones queda al fondo, la última queda arriba

**Sintaxis general de reduce:**
```javascript
array.reduce((acumulador, elementoActual) => {
  // lógica para combinar acumulador con elementoActual
  return nuevoAcumulador;
}, valorInicial);
```

**Ventajas:**

- Muy funcional usando reduce
- Útil para entender cómo funciona reduce
- Crea el string reverso de forma explícita

**Desventajas:**

- Menos eficiente que split().reverse().join()
- Crea strings intermedios en cada iteración de reduce

### Alternativa 4: Solución recursiva

```javascript
function isMirror(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, "");
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, "");

  function checkMirror(s1, s2) {
    if (s1.length === 0) return s2.length === 0;
    if (s1[0] !== s2[s2.length - 1]) return false;
    return checkMirror(s1.slice(1), s2.slice(0, -1));
  }

  return checkMirror(cleanStr1, cleanStr2);
}
```

**Ventajas:**

- Elegante solución recursiva
- Útil para entender recursión
- No usa bucles explícitos

**Desventajas:**

- Puede causar stack overflow con strings muy largos
- Menos eficiente que las soluciones iterativas
- Más difícil de debuggear

### Alternativa 4: Solución recursiva

```javascript
function isMirror(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, "");
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, "");

  function checkMirror(s1, s2) {
    if (s1.length === 0) return s2.length === 0;
    if (s1[0] !== s2[s2.length - 1]) return false;
    return checkMirror(s1.slice(1), s2.slice(0, -1));
  }

  return checkMirror(cleanStr1, cleanStr2);
}
```

**Ventajas:**

- Elegante solución recursiva
- Útil para entender recursión
- No usa bucles explícitos

**Desventajas:**

- Puede causar stack overflow con strings muy largos
- Menos eficiente que las soluciones iterativas
- Más difícil de debuggear

## Complejidad

- **Tiempo**: O(n) donde n es la longitud de las strings más largas
  - Limpieza de caracteres no alfabéticos: O(n)
  - Creación del reverso con split().reverse().join(): O(n)
  - Comparación de strings: O(n)

- **Espacio**: O(n) en el peor caso
  - Los strings limpios requieren espacio O(n)
  - El array temporal de split() requiere espacio O(n)
  - Se puede optimizar a O(1) extra space usando comparación carácter por carácter

## Aprendizajes

- **Expresiones regulares**: `[^a-zA-Z]` para filtrar caracteres no alfabéticos
- **Manipulación de strings**: `split()`, `reverse()`, `join()` para invertir strings
- **Importancia de leer el enunciado**: "Treat uppercase and lowercase letters as distinct"
- **Diferentes enfoques**: Funcional vs imperativo, trade-offs entre claridad y eficiencia
- **Métodos de array**: `every()`, `reduce()`, `Array.from()` para procesamiento funcional
- **Recursión**: Casos base y recursión para problemas de comparación
- **Complejidad algorítmica**: Análisis de tiempo y espacio en operaciones de strings
- **Debugging**: Importancia de verificar casos edge y leer errores de tests cuidadosamente
```
