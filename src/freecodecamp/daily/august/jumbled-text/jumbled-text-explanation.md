# Jumbled Text

# Jumbled Text

---

difficulty: easy
topics: []
source: freecodecamp
category: daily
createdAt: 2025-10-27

---

## Enunciado del Problema

Dado un string, retornar una versión "mezclada" del mismo donde cada palabra se transforma siguiendo estas restricciones:

- La primera y última letra de cada palabra permanecen en su lugar
- Todas las letras entre la primera y la última se ordenan alfabéticamente
- Los strings de entrada no contienen puntuación y están completamente en minúsculas

**Ejemplos:**

- jbelmu("hello world") → "hello wlord"
- jbelmu("i love jumbled text") → "i love jbelmud text"
- jbelmu("freecodecamp is my favorite place to learn to code") → "faccdeeemorp is my faiortve pacle to laern to cdoe"
- jbelmu("the quick brown fox jumps over the lazy dog") → "the qciuk borwn fox jmpus oevr the lazy dog"

**Restricciones:**

- Sin puntuación en la entrada
- Todo en minúsculas
- Palabras separadas por espacios simples

## Análisis Inicial

Este problema requiere procesar texto a nivel de palabras, manteniendo la estructura externa de cada palabra mientras se reordena internamente. Es un ejercicio interesante de manipulación de strings que combina:

1. **Separación de palabras**: Dividir el texto en unidades procesables
2. **Transformación selectiva**: Modificar solo las letras intermedias
3. **Preservación de estructura**: Mantener primera y última letra intactas
4. **Reensamblado**: Unir las palabras transformadas

**Desafíos identificados:**

- Identificar correctamente las letras "intermedias" de cada palabra
- Manejar palabras de diferentes longitudes (1, 2, 3+ letras)
- Preservar el formato original (espacios entre palabras)
- Ordenamiento alfabético correcto

**Casos borde importantes:**

- Palabras de 1 letra: "a" → "a" (sin cambio)
- Palabras de 2 letras: "is" → "is" (primera=última, sin intermedias)
- Palabras de 3 letras: "the" → "the" (solo una letra intermedia, ya ordenada)
- Palabras largas: requieren ordenamiento completo de letras intermedias

**Patrones observados en ejemplos:**

- "hello" (5 letras): 'h' + 'e','l','l' ordenadas + 'o' = "hello" (sin cambio)
- "world" (5 letras): 'w' + 'o','r','l' ordenadas + 'd' = "wlord"
- "jumbled" (7 letras): 'j' + 'u','m','b','l','e','d' ordenadas + 'd' = "jbelmud"

## Solución Implementada

Se implementó un enfoque funcional que procesa cada palabra individualmente:

```javascript
function jbelmu(text) {
  const words = text.split(" ");
  const jumbledWords = words.map((word) => {
    if (word.length <= 3) return word;
    const firstChar = word.charAt(0);
    const lastChar = word.charAt(word.length - 1);
    const middleChars = word.slice(1, -1).split("").sort().join("");
    return firstChar + middleChars + lastChar;
  });
  return jumbledWords.join(" ");
}
```

**Lógica paso a paso:**

1. Dividir el texto en palabras usando `split(" ")`
2. Procesar cada palabra con `map()`
3. Para palabras ≤ 3 letras: retornar sin cambios
4. Para palabras > 3 letras:
   - Extraer primera letra con `charAt(0)`
   - Extraer última letra con `charAt(word.length - 1)`
   - Obtener letras intermedias con `slice(1, -1)`
   - Convertir a array, ordenar, y volver a string
5. Unir palabras procesadas con `join(" ")`

**Ventajas de este enfoque:**

- Funcional y expresivo
- Manejo claro de casos borde
- Uso eficiente de métodos nativos de JavaScript
- Código legible y mantenible

## Alternativas Consideradas

### 1. **Enfoque Imperativo con Bucles**

```javascript
function jbelmu(text) {
  const words = text.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length <= 3) {
      result.push(word);
      continue;
    }

    const first = word[0];
    const last = word[word.length - 1];
    const middle = word
      .substring(1, word.length - 1)
      .split("")
      .sort()
      .join("");
    result.push(first + middle + last);
  }

  return result.join(" ");
}
```

**Cuándo usar:**

- Cuando se prefiere estilo imperativo
- En lenguajes sin métodos funcionales avanzados
- Para mayor control del proceso iterativo

**Ventajas vs Desventajas:**

- ✅ Más control sobre el proceso
- ✅ Familiar para programadores tradicionales
- ❌ Más código que escribir
- ❌ Menos expresivo

### 2. **Enfoque con Array Destructuring**

```javascript
function jbelmu(text) {
  return text
    .split(" ")
    .map((word) => {
      if (word.length <= 3) return word;
      const [first, ...middle] = word.split("");
      const last = middle.pop();
      return first + middle.sort().join("") + last;
    })
    .join(" ");
}
```

**Cuándo usar:**

- Cuando se quiere aprovechar destructuring de ES6+
- Para código más conciso
- En contextos modernos de JavaScript

**Ventajas vs Desventajas:**

- ✅ Muy conciso y moderno
- ✅ Aprovecha sintaxis avanzada
- ❌ Menos legible para principiantes
- ❌ `pop()` modifica el array original

### 3. **Enfoque con Expresiones Regulares**

```javascript
function jbelmu(text) {
  return text.replace(/\b(\w)(\w*)(\w)\b/g, (match, first, middle, last) => {
    return first + middle.split("").sort().join("") + last;
  });
}
```

**Cuándo usar:**

- Para procesamiento de texto a gran escala
- Cuando se necesitan transformaciones complejas de texto
- En contextos donde el rendimiento es crítico

**Ventajas vs Desventajas:**

- ✅ Muy eficiente para texto largo
- ✅ Una sola operación de reemplazo
- ❌ Complejo de entender y mantener
- ❌ Difícil de debuggear

### 4. **Enfoque Recursivo**

```javascript
function jumbleWord(word) {
  if (word.length <= 3) return word;
  const [first, ...rest] = word.split("");
  const last = rest.pop();
  return first + rest.sort().join("") + last;
}

function jbelmu(text) {
  return text.split(" ").map(jumbleWord).join(" ");
}
```

**Cuándo usar:**

- Para practicar recursión
- En lenguajes funcionales puros
- Cuando se quiere separar responsabilidades

**Ventajas vs Desventajas:**

- ✅ Separación clara de responsabilidades
- ✅ Fácil de testear funciones individuales
- ❌ Overhead de llamadas a función
- ❌ Menos eficiente

## Elección del Enfoque Implementado

Se eligió el enfoque funcional con `map()` por las siguientes razones:

1. **Concisión**: Expresa la transformación de manera clara y directa
2. **Legibilidad**: Cada línea tiene un propósito claro
3. **JavaScript moderno**: Aprovecha las características del lenguaje
4. **Mantenibilidad**: Fácil de modificar y entender
5. **Eficiencia**: Optimizado para el caso típico (palabras moderadamente largas)

La condición `word.length <= 3` es particularmente acertada porque:

- Palabras de 1-2 letras: no tienen letras intermedias que ordenar
- Palabras de 3 letras: la letra intermedia ya está "ordenada" por definición

## Complejidad

### Análisis Temporal: O(n log m)

- **n**: número total de palabras en el texto
- **m**: longitud máxima de una palabra
- El `split(" ")` es O(n)
- El `map()` procesa cada palabra una vez: O(n)
- Para cada palabra, `slice()`, `split()`, `sort()`, `join()` son O(m log m) en el peor caso
- **Total**: O(n + n × m log m) = O(n m log m)

### Análisis Espacial: O(n)

- El array `words` usa O(n) espacio
- El array `jumbledWords` usa O(n) espacio
- Strings temporales durante el procesamiento: O(m)
- **Total**: O(n + m)

### Consideraciones de Rendimiento

- Para texto típico (n pequeño, m moderado): rendimiento excelente
- El cuello de botella es el `sort()` para palabras muy largas
- En JavaScript moderno, `Array.sort()` es eficiente
- No hay optimizaciones críticas necesarias para este problema

## Aprendizajes y Reflexiones

### Patrones Identificados

1. **Procesamiento por unidades**: Dividir y conquistar (palabras individuales)
2. **Transformación selectiva**: Modificar solo partes específicas manteniendo estructura
3. **Métodos encadenados**: Fluidez en manipulación de arrays/strings
4. **Casos borde primero**: Manejar excepciones antes de la lógica general

### Mejores Prácticas Aplicadas

- **Nombres descriptivos**: `firstChar`, `lastChar`, `middleChars`
- **Funciones puras**: Sin efectos secundarios, resultado depende solo de entrada
- **Validación defensiva**: Condición clara para palabras cortas
- **Métodos apropiados**: `slice(1, -1)` para extraer intermedios

### Reflexiones sobre TDD

- Los tests guiaron naturalmente hacia la solución correcta
- Cada ejemplo incremental validó una parte del comportamiento
- La implementación siguió directamente del análisis de casos

### Posibles Extensiones

- ¿Cómo manejar puntuación al final de palabras?
- ¿Qué pasa con mayúsculas/minúsculas mixtas?
- ¿Cómo extender a otros idiomas con caracteres especiales?
- ¿Cómo optimizar para texto muy largo?

### Conceptos Relacionados

- **Anagramas**: Generación de todas las permutaciones posibles
- **Ordenamiento personalizado**: Por frecuencia, longitud, etc.
- **Compresión de texto**: Técnicas que preservan estructura
- **Procesamiento de lenguaje natural**: Tokenización y transformación

Este problema ilustra conceptos fundamentales de manipulación de strings y transformación de datos en JavaScript, combinando métodos nativos de manera efectiva y elegante.
