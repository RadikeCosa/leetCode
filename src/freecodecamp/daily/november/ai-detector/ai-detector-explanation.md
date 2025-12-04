---
title: "Ai Detector"
difficulty: "easy"
topics:
  - string manipulation
  - algorithms
  - regular expressions
source: "freecodecamp"
series: "daily"
category: "string analysis, AI detection"
createdAt: "2025-11-30"
blogLink: https://blog-astro-rouge.vercel.app/posts/ai-detector/
---

## Enunciado del Problema

El desafio del dia de hoy esta inspirado en el lanzamiento de ChatGPT el 30 de noviembre de 2022.
Dado un string de una o mas oraciones, determina si fue probablemente generado por IA usando las siguientes reglas:

- Contiene dos o mas guiones (-).
- Contiene dos o mas conjuntos de parentesis (()). El texto puede estar dentro de los parentesis.
- Contiene tres o mas palabras con 7 o mas letras.

## Análisis Inicial

### Comprensión del Problema

La función debe analizar un string y decidir si fue generado por IA o por un humano, basándose en tres reglas específicas:

1. Si el texto contiene dos o más guiones (-), se considera generado por IA.
2. Si el texto contiene dos o más conjuntos de paréntesis (es decir, dos o más pares de "(") y ")"), se considera generado por IA.
3. Si el texto contiene tres o más palabras que tengan al menos siete letras, se considera generado por IA.

Las palabras solo incluyen letras y están separadas por espacios. No se deben contar signos de puntuación ni otros caracteres especiales como parte de las palabras. Basta con que se cumpla una sola de las reglas para que el resultado sea "AI"; si ninguna se cumple, el resultado debe ser "Human".

### Casos de Prueba Identificados

A continuación se listan los casos de prueba principales para validar la función:

1. `"The quick brown fox jumped over the lazy dog."`  
   **Resultado esperado:** Human  
   **Razón:** No cumple ninguna de las reglas.

2. `"The hypersonic brown fox - jumped (over) the lazy dog."`  
   **Resultado esperado:** Human  
   **Razón:** Solo tiene un guion y un conjunto de paréntesis, y menos de tres palabras largas.

3. `"Yes - you're right! I made a mistake there - let me try again."`  
   **Resultado esperado:** AI  
   **Razón:** Tiene dos guiones.

4. `"The extraordinary students were studying vivaciously."`  
   **Resultado esperado:** AI  
   **Razón:** Tiene tres palabras con siete o más letras: extraordinary, students, vivaciously.

5. `"The (excited) student was (coding) in the library."`  
   **Resultado esperado:** AI  
   **Razón:** Tiene dos conjuntos de paréntesis.

## Desarrollo de la Solución

### Enfoque Elegido

Para este problema, identifico principalmente dos enfoques viables:

**1. Expresiones Regulares (Regex):**  
Ventajas:

- Permiten buscar patrones de manera concisa y eficiente.
- Son ideales para contar caracteres específicos (guiones, paréntesis) y para identificar palabras largas.
- El código suele ser más compacto.

Desventajas:

- Pueden ser menos legibles para quienes no están familiarizados con regex.
- El manejo de palabras puede requerir cuidado para evitar contar signos de puntuación.

**2. Recorrido Manual del String:**  
Ventajas:

- Mayor control sobre el procesamiento de cada carácter.
- Más fácil de depurar y adaptar a reglas adicionales.
- Permite manejar casos edge con precisión.

Desventajas:

- El código puede ser más extenso.
- Puede ser menos eficiente si no se optimiza el recorrido.

**Comparación y Elección:**  
Para este problema, ambos enfoques son válidos y eficientes, ya que el tamaño de los textos es pequeño y las reglas son simples.  
Sin embargo, **elijo usar expresiones regulares** porque permite implementar las tres reglas de manera directa y legible, manteniendo el código corto y claro.

### Implementación Paso a Paso

1. **Contar guiones:**  
   Utilizamos una expresión regular `/-/g` para buscar todos los guiones en el texto. Si hay dos o más, devolvemos "AI".

2. **Contar conjuntos de paréntesis:**  
   Usamos la expresión regular `/\([^)]+\)/g` para encontrar todos los grupos de paréntesis con contenido dentro. Si hay dos o más, devolvemos "AI".

3. **Contar palabras largas:**  
   Aplicamos la expresión regular `/\b[a-zA-Z]{7,}\b/g` para encontrar palabras de siete o más letras. Si hay tres o más, devolvemos "AI".

4. **Resultado final:**  
   Si ninguna regla se cumple, devolvemos "Human".

El código implementa estas reglas en orden y retorna "AI" si alguna se cumple.

### Explicación de las Expresiones Regulares

1. **Guiones:**

   ```js
   /-/g;
   ```

   - El símbolo `-` busca el carácter guion.
   - La bandera `g` indica búsqueda global, es decir, encuentra todos los guiones en el texto.

2. **Conjuntos de paréntesis:**

   ```js
   /\([^)]+\)/g;
   ```

   - `\(` y `\)`: Buscan los caracteres de paréntesis literal.
   - `[ ^ ) ]+`:
     - Los corchetes `[]` definen un conjunto de caracteres permitidos.
     - El símbolo `^` dentro de los corchetes significa "no", es decir, cualquier carácter excepto los que siguen.
     - `^)` indica "cualquier carácter excepto el paréntesis de cierre".
     - El signo `+` indica "uno o más" de esos caracteres.
   - En conjunto, `[ ^ ) ]+` busca uno o más caracteres que no sean paréntesis de cierre, es decir, el contenido dentro de los paréntesis.
   - Así, la expresión completa encuentra cualquier grupo de paréntesis con contenido dentro.

3. **Palabras largas (7+ letras):**

   ```js
   /\b[a-zA-Z]{7,}\b/g;
   ```

   - `\b`: Marca el inicio o fin de una palabra (borde de palabra).
   - `[a-zA-Z]{7,}`:
     - Los corchetes `[]` indican cualquier letra mayúscula o minúscula.
     - `{7,}` indica "siete o más" letras consecutivas.
   - El segundo `\b` marca el final de la palabra.
   - La bandera `g` busca todas las coincidencias en el texto.

## Casos Edge y Consideraciones

- **Texto vacío:**  
  Un string vacío (`""`) no contiene guiones, paréntesis ni palabras largas. El resultado debe ser "Human".

- **Guiones consecutivos:**  
  Ejemplo: `"Hello--world"` contiene dos guiones juntos, lo que cuenta como dos guiones y debe devolver "AI".

- **Paréntesis vacíos:**  
  Ejemplo: `"The () student ()"`  
  La expresión `/\([^)]+\)/g` no detecta paréntesis vacíos, solo aquellos con contenido. Si se requiere contar también los vacíos, habría que ajustar la expresión a `/\([^)]*\)/g`.

- **Palabras con signos de puntuación:**  
  Ejemplo: `"extraordinary,"`  
  La expresión usada ignora la coma y cuenta correctamente la palabra larga.

- **Mayúsculas y minúsculas:**  
  La expresión `[a-zA-Z]{7,}` considera ambas, por lo que no hay problema con palabras en mayúsculas.

- **Paréntesis anidados:**  
  Ejemplo: `"The (student (coding))"`  
  La expresión regular no detecta paréntesis anidados como un solo conjunto, solo los externos.

- **Guiones en palabras:**  
  Ejemplo: `"well-known"`  
  Cada guion cuenta, aunque esté dentro de una palabra.

- **Espacios múltiples o caracteres especiales:**  
  El uso de `\b` en la expresión de palabras largas asegura que solo se cuenten palabras formadas por letras.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de expresiones regulares para análisis de texto.
- Identificación de patrones específicos en cadenas.
- Evaluación de reglas lógicas para clasificación binaria.
- Análisis de casos edge para robustez de la solución.

## Recursos y Referencias

- [MDN Web Docs: Expresiones Regulares en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
- [MDN Web Docs: String.prototype.match()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [Documentación oficial de FreeCodeCamp](https://www.freecodecamp.org/news/tag/algorithms/)
