---
title: "longest-word"
difficulty: "easy"
topics:
  - String
  - Array
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-21"
---

# Longest Word - Explicación

## Enunciado del Problema

Dada una oración, retorna la palabra más larga de la oración.

**Reglas:**

- Ignorar puntos (.) al determinar la longitud de las palabras
- Si múltiples palabras tienen empate en longitud, retornar la primera que aparece

**Casos de prueba:**

- `getLongestWord("coding is fun")` → `"coding"` (6 letras)
- `getLongestWord("Coding challenges are fun and educational.")` → `"educational"` (11 letras sin el punto)
- `getLongestWord("This sentence has multiple long words.")` → `"sentence"` (8 letras, primer empate)

## Análisis Inicial

El problema requiere tres pasos fundamentales:

1. **Separación de palabras**: Dividir la oración en palabras individuales
2. **Limpieza de puntuación**: Remover puntos de las palabras para medir correctamente
3. **Búsqueda del máximo**: Encontrar la palabra con mayor longitud, priorizando la primera en caso de empate

**Puntos clave a considerar:**

- Las palabras están separadas por espacios
- Solo necesitamos remover puntos (.), no otra puntuación
- La comparación debe ser por longitud después de limpiar puntos
- En caso de empate, el orden de aparición es determinante

**Análisis de casos específicos:**

- **Caso 1:** "coding" (6) vs "is" (2) vs "fun" (3) → "coding" gana
- **Caso 2:** "educational." se convierte en "educational" (11 letras) → la más larga
- **Caso 3:** "sentence" (8) vs "multiple" (8) vs "words" (5) → "sentence" gana por aparecer primero

## Estrategia de Solución

### Paso 1: Dividir en palabras

```javascript
const words = sentence.split(" ");
```

### Paso 2: Procesar cada palabra y encontrar la más larga

```javascript
let longestWord = "";
let maxLength = 0;

for (const word of words) {
  // Remover puntos para medir longitud correcta
  const cleanWord = word.replace(/\./g, "");

  if (cleanWord.length > maxLength) {
    maxLength = cleanWord.length;
    longestWord = word; // Retornamos la palabra original (con punto si lo tenía)
  }
}
```

### Paso 3: Consideraciones importantes

- **Retornar palabra original**: Mantenemos la puntuación en el resultado
- **Solo medir palabra limpia**: Usamos la versión sin puntos para comparar longitudes
- **Primer empate gana**: El `>` (no `>=`) asegura que solo se actualice si es estrictamente mayor

### Alternativa funcional con reduce

```javascript
return sentence.split(" ").reduce((longest, current) => {
  const currentClean = current.replace(/\./g, "");
  const longestClean = longest.replace(/\./g, "");
  return currentClean.length > longestClean.length ? current : longest;
}, "");
```

## Implementación Paso a Paso

### Versión Final Implementada

```javascript
function getLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    const cleanedWord = word.replace(/\./g, "");
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  }
  return longestWord;
}
```

### Detalles de la Implementación

**1. División en palabras:**

```javascript
const words = sentence.split(" ");
```

- Separa la oración por espacios en blanco
- Crea un array de palabras para procesar individualmente

**2. Búsqueda iterativa:**

```javascript
for (let word of words) {
  const cleanedWord = word.replace(/\./g, "");
  if (cleanedWord.length > longestWord.length) {
    longestWord = cleanedWord;
  }
}
```

- Limpia cada palabra removiendo puntos con regex `/\./g`
- Compara longitud solo si es estrictamente mayor (maneja empates)
- Almacena la palabra limpia como resultado

### Análisis de Optimizaciones Posibles

**❌ Optimización NO recomendada - Funcional con reduce:**

```javascript
// Menos legible y sin beneficio de rendimiento
return sentence.split(" ").reduce((longest, word) => {
  const clean = word.replace(/\./g, "");
  return clean.length > longest.length ? clean : longest;
}, "");
```

**✅ Optimización SÍ recomendada - Evitar regex repetitiva:**

```javascript
function getLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  let maxLength = 0;

  for (let word of words) {
    // Optimización: contar caracteres sin crear string nuevo
    let currentLength = 0;
    for (let char of word) {
      if (char !== ".") currentLength++;
    }

    if (currentLength > maxLength) {
      maxLength = currentLength;
      longestWord = word.replace(/\./g, ""); // Solo una vez al final
    }
  }
  return longestWord;
}
```

**🏆 Optimización RECOMENDADA - Balance perfecto:**

```javascript
function getLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  let maxLength = 0;

  for (const word of words) {
    // Solo calcular longitud sin puntos, no crear string nuevo
    const lengthWithoutDots = word.length - (word.match(/\./g) || []).length;

    if (lengthWithoutDots > maxLength) {
      maxLength = lengthWithoutDots;
      longestWord = word.replace(/\./g, "");
    }
  }
  return longestWord;
}
```

## Complejidad

### Complejidad Temporal

**Versión actual:** O(n\*m) donde n = número de palabras, m = longitud promedio de palabra

- `split(" ")`: O(n) donde n es longitud de la oración
- Loop por palabras: O(w) donde w es número de palabras
- `replace(/\./g, "")` por palabra: O(m) por palabra
- **Total:** O(n + w*m) ≈ O(n*m)

**Versión optimizada:** O(n) donde n es longitud total de la oración

- Una sola pasada calculando longitud sin crear strings nuevos

### Complejidad Espacial

O(n) - Se crea el array `words` que contiene todas las palabras de la oración

## Casos Especiales y Edge Cases

### Casos Básicos Cubiertos

- **Palabras sin puntuación:** Funciona normalmente
- **Palabras con punto final:** Ignora el punto para medición
- **Empates en longitud:** Retorna la primera palabra encontrada

### Casos Límite Adicionales a Considerar

**Oración de una palabra:**

- `getLongestWord("hello")` → `"hello"`

**Múltiples puntos:**

- `getLongestWord("end...")` → `"end"` (ignora todos los puntos)

**Palabras vacías o espacios múltiples:**

- `getLongestWord("hello  world")` → Crearía elemento vacío en array

**Solo puntos:**

- `getLongestWord("...")` → `""` (palabra vacía después de limpiar)

## Patrones y Técnicas Aplicadas

1. **Array splitting**: División de strings en elementos procesables
2. **Regex para limpieza**: `/\./g` para remover caracteres específicos
3. **Tracking de máximo**: Mantener variable del mejor resultado encontrado
4. **Comparación estricta**: Usar `>` en lugar de `>=` para manejar empates
5. **for...of loop**: Iteración limpia sobre elementos de array

## Aprendizajes Clave

- **Regex global**: El flag `g` en `/\./g` remueve TODAS las ocurrencias de punto
- **Manejo de empates**: La lógica `>` asegura que el primer empate gane
- **String cleaning**: Separar la lógica de medición de la de limpieza
- **Trade-offs de optimización**: A veces la simplicidad vale más que micro-optimizaciones
- **Casos edge**: Considerar entradas inusuales como espacios múltiples o palabras vacías