---
title: Word Frequency
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-30
difficulty: easy
topics:
  - string
  - counting
  - hash-table
  - frequency
  - dictionary
  - word-processing
  - data-structures
blogLink: https://blog-astro-rouge.vercel.app/posts/word-frequency/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-14/
---

## Word Frequency - Análisis y Explicación

## Enunciado del Problema

Dado un párrafo, retorna un array con las tres palabras que se repiten con mayor frecuencia.

- Las palabras del párrafo estarán separadas por espacios.
- Ignora mayúsculas y minúsculas.
- Ignora signos de puntuación específicos: comas (`,`), puntos (`.`) y signos de exclamación (`!`).
- El array retornado deberá contener las palabras en minúsculas.
- El array retornado deberá estar ordenado en orden descendente por frecuencia.

## Análisis Inicial

### Comprensión del Problema

El objetivo es procesar un texto para extraer estadísticas de frecuencia de palabras. Debemos limpiar el texto de ruidos (puntuación y mayúsculas), tokenizarlo (dividirlo en palabras), contar las ocurrencias de cada una y finalmente seleccionar el "top 3".

### Casos de Prueba Identificados

1.  **Párrafo estándar:** "Coding in Python is fun because coding Python allows for coding in Python easily while coding" -> `["coding", "python", "in"]`.
2.  **Con puntuación:** "I like coding. I like testing. I love debugging!" -> `["i", "like", "coding"]`.
3.  **Empates en frecuencia:** "Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!" -> `["debug", "test", "deploy"]`.

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver este problema de manera eficiente y legible, utilizaremos un flujo de transformación de datos:

1.  **Normalización:** Convertir todo el texto a minúsculas para asegurar que la comparación sea _case-insensitive_.
2.  **Limpieza:** Eliminar los caracteres de puntuación especificados mediante una expresión regular.
3.  **Tokenización:** Dividir el string resultante por espacios en blanco.
4.  **Conteo:** Utilizar un objeto (o _hash map_) para almacenar la frecuencia de cada palabra.
5.  **Ordenamiento:** Convertir las llaves del objeto en un array y ordenarlas basándonos en sus valores de frecuencia en el mapa.
6.  **Selección:** Tomar los primeros 3 elementos del array ordenado.

### Implementación

```javascript
function getWords(paragraph) {
  if (!paragraph || typeof paragraph !== "string") return [];

  // Normalizar a minúsculas y eliminar puntuación específica (.,!)
  const words = paragraph
    .toLowerCase()
    .replace(/[.,!]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const frequencyMap = {};
  for (const word of words) {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  }

  // Ordenar por frecuencia descendente
  // En caso de empate, usamos orden alfabético para mantener consistencia
  return Object.keys(frequencyMap)
    .sort((a, b) => {
      const freqDiff = frequencyMap[b] - frequencyMap[a];
      if (freqDiff !== 0) return freqDiff;
      return a.localeCompare(b);
    })
    .slice(0, 3);
}
```

## Análisis de Complejidad

### Complejidad Temporal

- **Procesamiento del String:** $O(N)$, donde $N$ es la longitud del párrafo. Las operaciones `toLowerCase`, `replace` y `split` recorren el string.
- **Conteo de Frecuencias:** $O(W)$, donde $W$ es el número total de palabras.
- **Ordenamiento:** $O(M \log M)$, donde $M$ es el número de palabras únicas.
- **Total:** $O(N + M \log M)$. En la práctica, $M$ suele ser mucho menor que $N$.

### Complejidad Espacial

- **Mapa de Frecuencias:** $O(M)$, donde $M$ es el número de palabras únicas almacenadas.
- **Array de Palabras:** $O(W)$, para almacenar los tokens extraídos antes del conteo.
- **Total:** $O(W)$, que en el peor de los casos (todas las palabras únicas) es proporcional al tamaño de la entrada.

## Casos Edge y Consideraciones

- **Párrafos vacíos:** Se manejan retornando un array vacío.
- **Menos de 3 palabras únicas:** El método `slice(0, 3)` manejará esto correctamente devolviendo todos los elementos disponibles.
- **Espacios múltiples:** La expresión regular `\s+` en el `split` evita generar palabras vacías por espacios consecutivos.
- **Empates:** Se ha implementado un criterio secundario alfabético (`localeCompare`) para asegurar que el resultado sea determinista.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- **Manipulación de Strings:** Uso de expresiones regulares para limpieza selectiva.
- **Hash Maps:** Estructura ideal para conteo de frecuencias por su acceso $O(1)$.
- **Sort Stability:** Importancia de definir criterios de desempate en algoritmos de ordenamiento.

### Posibles Optimizaciones

- Si el párrafo fuera extremadamente grande y solo necesitáramos el top $K$, podríamos usar un **Min-Heap** de tamaño $K$ para reducir la complejidad del ordenamiento de $O(M \log M)$ a $O(M \log K)$.

## Recursos y Referencias
