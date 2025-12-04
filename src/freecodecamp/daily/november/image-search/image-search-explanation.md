---
title: "image-search"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-04"
blogLink: https://blog-astro-rouge.vercel.app/posts/image-search-freecodecamp/
---

# Image Search

## Análisis del Problema

Este problema simula la funcionalidad de búsqueda de imágenes de Google lanzada el 4 de noviembre de 2001. Se nos pide implementar una función que, dado un array de nombres de archivos de imágenes y un término de búsqueda, retorne un array con los nombres que contengan ese término.

### Requisitos principales

- **Input**: Un array de strings (nombres de imágenes) y un string (término de búsqueda)
- **Output**: Array de strings que contienen el término de búsqueda
- **Case insensitive**: Ignorar mayúsculas y minúsculas en la búsqueda
- **Orden preservado**: Mantener el orden original de las imágenes en el array de entrada

### Enfoque técnico

La solución requiere usar expresiones regulares (regex) para realizar matching case-insensitive. En JavaScript, podemos usar `new RegExp(term, 'i')` para crear un patrón que ignore el case, y luego filtrar el array usando el método `filter()`.

### Consideraciones

- Los nombres de archivos pueden contener extensiones como .png, .jpg, .jpeg, .gif
- El término de búsqueda puede aparecer en cualquier parte del nombre (principio, medio, fin)
- Debe coincidir exactamente con el substring, no con palabras completas

## Solución Implementada

La implementación final utiliza una aproximación optimizada sin expresiones regulares para mayor robustez. Primero se valida que los inputs sean del tipo correcto, luego se normaliza el término de búsqueda a minúsculas, y finalmente se filtra el array usando `includes()` para matching case-insensitive.

```javascript
function imageSearch(images, term) {
  if (!Array.isArray(images) || typeof term !== "string") {
    return [];
  }

  const lowerTerm = term.toLowerCase();
  return images.filter(
    (image) =>
      typeof image === "string" && image.toLowerCase().includes(lowerTerm)
  );
}
```

Esta versión es más robusta que la implementación con regex porque:

- Evita problemas con caracteres especiales en el término de búsqueda
- Tiene validación más fuerte de tipos de datos
- Mantiene la misma complejidad pero es más segura
- Es más legible para casos simples de substring matching

## Complejidad

- **Tiempo**: O(n × m), donde n es el número de imágenes en el array y m es la longitud promedio de los nombres de las imágenes. Los métodos `toLowerCase()` e `includes()` operan en O(m) tiempo para cada imagen.
- **Espacio**: O(k), donde k es el número de imágenes que coinciden con el término (espacio para el array resultante). No se utiliza espacio adicional significativo más allá del input.

Esta complejidad es eficiente para arrays de tamaño razonable, como los que se esperan en problemas de FreeCodeCamp.

## Aprendizajes

- **Expresiones regulares en JavaScript**: Uso de `RegExp` con flag `'i'` para matching case-insensitive.
- **Método filter()**: Aplicación práctica para filtrar arrays basado en una condición.
- **Validación de input**: Importancia de manejar casos edge como `null` o `undefined`.
- **Complejidad algorítmica**: Análisis de tiempo y espacio en operaciones con strings y arrays.
- **TDD colaborativo**: Desarrollo guiado por tests permite implementar funcionalidad paso a paso y asegurar cobertura de casos edge.

### Optimizaciones implementadas

La versión final ya incluye las siguientes optimizaciones:

1. **Uso de `includes()` en lugar de regex**: Evita problemas con caracteres especiales y es más robusta
2. **Validación más robusta**: Verifica que `images` sea un array y `term` sea un string
3. **Validación de elementos**: Asegura que cada imagen sea un string antes de procesar
4. **Normalización eficiente**: Una sola conversión a minúsculas para el término

### Optimizaciones posibles adicionales

1. **Escaping de regex**: Si se volviera a regex, escapar caracteres especiales: `const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');`

2. **Manejo de término vacío**: Decidir si `""` debe retornar todas las imágenes o ninguna.

3. **Memoización**: Para búsquedas repetidas del mismo término en arrays grandes.

Versión con regex (para comparación):

```javascript
function imageSearchRegex(images, term) {
  if (!Array.isArray(images) || typeof term !== "string") {
    return [];
  }

  const regex = new RegExp(term, "i");
  return images.filter(
    (image) => typeof image === "string" && regex.test(image)
  );
}
```

La implementación actual con `includes()` es preferible para este caso de uso específico.

## Edge Cases Considerados

- **Array vacío**: Si el input es `[]`, debe retornar `[]`
- **Término vacío**: Si el término es `""`, podría retornar todas las imágenes o ninguna (dependiendo de interpretación)
- **Sin matches**: Si ninguna imagen contiene el término, retornar array vacío
- **Múltiples matches**: Una imagen puede contener el término múltiples veces, pero se incluye solo una vez
- **Case variations**: El término puede estar en mayúsculas, minúsculas o mixto
- **Extensión en término**: El término puede ser parte de la extensión (ej: "PNG" en "image.png")
- **Término más largo que el nombre**: Si el término es más largo que algún nombre, no match
- **Caracteres especiales**: Nombres con guiones, underscores, números, etc.
