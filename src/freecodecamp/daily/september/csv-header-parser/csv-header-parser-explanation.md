---
title: "csv-header-parser"
difficulty: "easy"
topics:
  - String
  - Array
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-21"
---

# CSV Header Parser - Análisis Detallado

## Enunciado del Problema

Dado la primera línea de un archivo de valores separados por comas (CSV), devolver un array conteniendo los encabezados.

La primera línea de un archivo CSV contiene encabezados separados por comas. Se debe remover cualquier espacio en blanco al inicio o final de cada encabezado.

## Análisis Inicial

### Comprensión del Problema

El problema requiere procesar una cadena de texto que representa la primera línea de un archivo CSV. Esta línea contiene encabezados separados por comas, y algunos de estos encabezados pueden tener espacios en blanco al inicio o final que deben ser removidos.

**Entrada:** Una cadena de texto con encabezados separados por comas
**Salida:** Un array de strings, donde cada elemento es un encabezado sin espacios en blanco al inicio o final

### Casos de Ejemplo

1. `"name,age,city"` → `["name", "age", "city"]`

   - Encabezados simples sin espacios

2. `"first name,last name,phone"` → `["first name", "last name", "phone"]`

   - Encabezados con espacios internos (espacios dentro del nombre deben mantenerse)

3. `"username , email , signup date "` → `["username", "email", "signup date"]`
   - Encabezados con espacios al inicio y final que deben ser removidos

### Restricciones

- La entrada siempre será una cadena de texto válida
- Los encabezados estarán separados únicamente por comas
- No hay comas dentro de los encabezados (no hay comillas)
- Solo se deben remover espacios en blanco al inicio y final de cada encabezado
- Los espacios internos dentro de un encabezado deben mantenerse

## Solución Implementada

### Enfoque Algorítmico

La solución utiliza un enfoque directo con métodos nativos de JavaScript:

1. **Separar por comas:** Usar `split(',')` para dividir la cadena en un array de encabezados
2. **Limpiar espacios:** Aplicar `trim()` a cada encabezado para remover espacios al inicio y final
3. **Retornar resultado:** Devolver el array procesado

Este enfoque es eficiente y aprovecha las funciones incorporadas de JavaScript para manipulación de strings.

### Implementación

```javascript
function getHeadings(csv) {
  return csv.split(",").map((heading) => heading.trim());
}
```

### Complejidad

- **Tiempo:** O(n) donde n es la longitud de la cadena de entrada
  - `split(',')` recorre la cadena una vez
  - `map()` con `trim()` procesa cada encabezado (tiempo proporcional a la longitud total)
- **Espacio:** O(m) donde m es el número de encabezados
  - Se crea un nuevo array con los encabezados procesados

## Casos de Prueba

### Casos Básicos

- Encabezados simples sin espacios: `"name,age,city"` → `["name", "age", "city"]`
- Verifica que la separación por comas funcione correctamente

### Casos con Espacios

- Encabezados con espacios internos: `"first name,last name,phone"` → `["first name", "last name", "phone"]`
- Los espacios dentro de los nombres deben mantenerse intactos

### Casos Extremos

- Espacios al inicio y final: `"username , email , signup date "` → `["username", "email", "signup date"]`
- Todos los espacios en blanco al inicio y final deben ser removidos

## Aprendizajes y Reflexiones

### Patrones Identificados

- **Manipulación de strings con separación:** El patrón `split()` + `map()` es común para procesar datos separados por delimitadores
- **Limpieza de datos:** `trim()` es esencial cuando se procesan datos que pueden contener espacios en blanco no deseados
- **Funciones de array:** El uso de `map()` para transformar cada elemento es más idiomático que bucles tradicionales

### Posibles Optimizaciones

La solución actual es óptima para este problema específico:

- **Simplicidad:** No hay necesidad de algoritmos más complejos
- **Legibilidad:** El código es claro y fácil de entender
- **Eficiencia:** Complejidad lineal es la mejor posible para este tipo de procesamiento

### Lecciones Aprendidas

- **Importancia del análisis inicial:** Entender claramente qué espacios deben mantenerse (internos) vs cuáles remover (inicio/final)
- **Uso efectivo de métodos nativos:** JavaScript proporciona herramientas poderosas como `split()` y `trim()` que simplifican tareas comunes
- **Testing exhaustivo:** Los tests cubren casos básicos, con espacios internos y extremos, asegurando robustez
- **Enfoque funcional:** El uso de `map()` promueve un estilo de programación funcional más expresivo