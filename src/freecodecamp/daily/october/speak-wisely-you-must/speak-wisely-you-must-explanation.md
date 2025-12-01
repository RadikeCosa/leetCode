---
title: "speak-wisely-you-must"
difficulty: "easy"
topics:
  - String
  - Array
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-23"
---

# Speak Wisely, You Must - Análisis Detallado

## Enunciado del Problema

Dado una oración, devolver una versión de ella que suene como consejo de un maestro sabio usando las siguientes reglas:

Las palabras están separadas por un solo espacio.
Encontrar la primera ocurrencia de una de las siguientes palabras en la oración: "have", "must", "are", "will", "can".
Mover todas las palabras antes e incluyendo esa palabra al final de la oración y:
Preservar el orden de las palabras cuando las muevas.
Hacerlas todas minúsculas.
Y agregar una coma y espacio antes de ellas.
Capitalizar la primera letra de la nueva primera palabra de la oración.
Todas las oraciones dadas terminarán con una marca de puntuación simple. Mantener la puntuación original de la oración y moverla al final de la nueva oración.
Devolver la nueva oración, asegurarse de que haya un solo espacio entre cada palabra y no espacios al principio o final de la oración.

## Análisis Inicial

### Comprensión del Problema

El problema requiere transformar oraciones para que suenen como proverbios o consejos de un maestro sabio. La transformación implica encontrar una palabra clave específica y reordenar la oración moviendo parte de ella al final con modificaciones de capitalización y puntuación.

**Entrada:** Una cadena de texto que representa una oración completa
**Salida:** La misma oración reordenada según las reglas específicas

### Casos de Ejemplo

Analizando los ejemplos proporcionados:

1. `"You must speak wisely."` → `"Speak wisely, you must."`

   - Palabra clave: "must" (posición 2)
   - Parte movida: "you must" → "you must,"
   - Parte restante: "speak wisely" → "Speak wisely"
   - Resultado: "Speak wisely, you must."

2. `"You can do it!"` → `"Do it, you can!"`

   - Palabra clave: "can" (posición 2)
   - Parte movida: "you can" → "you can,"
   - Parte restante: "do it" → "Do it"
   - Resultado: "Do it, you can!"

3. `"Do you think you will complete this?"` → `"Complete this, do you think you will?"`

   - Palabra clave: "will" (posición 4)
   - Parte movida: "do you think you will" → "do you think you will,"
   - Parte restante: "complete this" → "Complete this"
   - Resultado: "Complete this, do you think you will?"

4. `"All your base are belong to us."` → `"Belong to us, all your base are."`

   - Palabra clave: "are" (posición 4)
   - Parte movida: "all your base are" → "all your base are,"
   - Parte restante: "belong to us" → "Belong to us"
   - Resultado: "Belong to us, all your base are."

5. `"You have much to learn."` → `"Much to learn, you have."`
   - Palabra clave: "have" (posición 2)
   - Parte movida: "you have" → "you have,"
   - Parte restante: "much to learn" → "Much to learn"
   - Resultado: "Much to learn, you have."

### Restricciones

- Las oraciones siempre terminan con un signo de puntuación simple (., !, ?)
- Las palabras están separadas por exactamente un espacio
- Siempre existe al menos una de las palabras clave en la oración
- Se debe usar la primera ocurrencia de cualquier palabra clave
- La puntuación original se mantiene y se mueve al final
- No debe haber espacios al inicio o final del resultado
- Debe haber exactamente un espacio entre cada palabra

## Solución Implementada

### Enfoque Algorítmico

La solución utiliza un enfoque directo que procesa la oración en los siguientes pasos:

1. **Separar componentes:** Extraer las palabras y la puntuación final
2. **Localizar keyword:** Encontrar la primera ocurrencia de las palabras clave usando `findIndex`
3. **Reordenar partes:** Dividir la oración en dos partes y reorganizar según las reglas
4. **Aplicar transformaciones:** Convertir a minúsculas la parte final, capitalizar la primera letra del inicio
5. **Construir resultado:** Unir las partes con coma y espacio, agregar puntuación final

### Implementación

```javascript
function wiseSpeak(sentence) {
  const words = sentence.slice(0, -1).split(" ");
  const punctuation = sentence.slice(-1);
  const keywords = ["have", "must", "are", "will", "can"];
  const foundIndex = words.findIndex((word) => keywords.includes(word));

  const before = words
    .slice(0, foundIndex + 1)
    .join(" ")
    .toLowerCase();
  const after = words.slice(foundIndex + 1).join(" ");
  const newFirstWord = after.charAt(0).toUpperCase() + after.slice(1);

  return `${newFirstWord}, ${before}${punctuation}`;
}
```

### Complejidad

- **Tiempo:** O(n) donde n es la longitud de la oración
  - `split()` recorre la cadena: O(n)
  - `findIndex()` recorre el array de palabras: O(m) donde m es número de palabras
  - Operaciones de `slice()`, `join()`, `toLowerCase()`: O(m)
  - Total: O(n + m) = O(n)
- **Espacio:** O(m) donde m es el número de palabras
  - Se crea un array de palabras
  - Se crean strings temporales para las partes reordenadas

## Casos de Prueba

### Casos Básicos

**Transformación simple:**

- `"You must speak wisely."` → `"Speak wisely, you must."`
- Palabra clave "must" encontrada, reordenamiento básico

**Transformación con puntuación diferente:**

- `"You can do it!"` → `"Do it, you can!"`
- Mantiene el signo de exclamación al final

### Casos con Múltiples Palabras

**Oración más larga:**

- `"Do you think you will complete this?"` → `"Complete this, do you think you will?"`
- Palabra clave "will" en posición intermedia

**Oración compleja:**

- `"All your base are belong to us."` → `"Belong to us, all your base are."`
- Palabra clave "are" cerca del final

### Casos con Diferentes Keywords

**Keyword "have":**

- `"You have much to learn."` → `"Much to learn, you have."`
- Primera palabra clave encontrada

**Keyword "can":**

- `"You can do it!"` → `"Do it, you can!"`
- Keyword en segunda posición

### Casos Extremos

**Keyword al inicio:**

- Oraciones que empiecen con keyword tendrían reordenamiento mínimo

**Keyword al final:**

- Toda la oración antes de la keyword iría al final

**Oraciones cortas:**

- Mínimo 2 palabras + keyword + puntuación

## Aprendizajes y Reflexiones

### Patrones Identificados

- **Manipulación de strings con separación:** `slice()` para extraer partes específicas, `split()` para dividir por espacios
- **Búsqueda en arrays:** `findIndex()` con `includes()` para encontrar elementos en listas
- **Transformaciones de capitalización:** `charAt(0).toUpperCase() + slice(1)` para capitalizar primera letra
- **Reordenamiento de arrays:** `slice()` para dividir y reorganizar partes de arrays
- **Template literals:** Para construcción clara de strings con variables

### Posibles Optimizaciones

La solución actual es óptima para este problema específico:

- **Complejidad correcta:** O(n) tiempo y espacio, lo mejor posible para manipulación de strings
- **Claridad:** El código es legible y fácil de seguir
- **Eficiencia:** Una sola pasada por la oración para encontrar la keyword
- **Concisidad:** 10 líneas de código funcional

**Optimización menor aplicada:** Se removió el `if (foundIndex === -1)` innecesario ya que el problema garantiza que siempre existe una keyword.

### Lecciones Aprendidas

- **Importancia del análisis inicial:** Entender claramente las reglas de reordenamiento antes de implementar
- **Uso efectivo de métodos de array:** `findIndex`, `slice`, `join` facilitan manipulaciones complejas
- **Manejo de casos extremos:** Considerar diferentes posiciones de keywords y tipos de puntuación
- **Construcción de strings:** Template literals hacen el código más legible que concatenación manual
- **Testing exhaustivo:** Los 5 tests cubren diferentes keywords y posiciones, asegurando robustez
- **Principio de responsabilidad única:** Cada línea de código tiene un propósito claro
- **Legibilidad vs micro-optimizaciones:** Priorizar código claro sobre ganancias mínimas de performance