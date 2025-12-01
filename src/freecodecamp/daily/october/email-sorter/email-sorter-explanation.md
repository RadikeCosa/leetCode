---
title: "Email Sorter"
difficulty: "easy"
topics:
  - Array
  - String
  - Sorting
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-29"
---

# Email Sorter

## Análisis del Problema

Este problema requiere ordenar una lista de direcciones de email siguiendo reglas específicas.

### Requisitos del Problema

- **Entrada**: Un array de strings representando direcciones de email
- **Salida**: El mismo array ordenado según las reglas especificadas
- **Ordenamiento primario**: Por dominio (parte después del @), de forma alfabética
- **Ordenamiento secundario**: Por nombre de usuario (parte antes del @), si los dominios son iguales
- **Case-insensitive**: El ordenamiento debe ignorar mayúsculas/minúsculas
- **Preservar case original**: Las direcciones retornadas deben mantener su case original

### Ejemplos de Entrada/Salida

1. `["jill@mail.com", "john@example.com", "jane@example.com"]` → `["jane@example.com", "john@example.com", "jill@mail.com"]`

   - Dominios: example.com, mail.com
   - example.com viene antes que mail.com alfabéticamente

2. `["bob@mail.com", "alice@zoo.com", "carol@mail.com"]` → `["bob@mail.com", "carol@mail.com", "alice@zoo.com"]`

   - bob y carol tienen el mismo dominio mail.com, se ordenan por username
   - alice tiene zoo.com que viene después

3. `["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]` → `["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"]`
   - Todos tienen variaciones del dominio mail.com
   - Se ordenan por username ignorando case: amy, bob, sam

### Desafíos Identificados

- Separar correctamente username y dominio de cada email
- Implementar ordenamiento case-insensitive pero preservar case original
- Manejar múltiples emails con el mismo dominio
- Considerar edge cases como emails sin @ (aunque no especificado, podría suceder)

### Enfoque Inicial

Para resolver este problema, necesito:

1. Separar cada email en username y dominio
2. Crear una función de comparación que ordene primero por dominio (case-insensitive), luego por username (case-insensitive)
3. Usar el método sort() de arrays con esta función comparadora
4. Asegurarme de que el array original se modifique o se retorne uno nuevo según se requiera

¿Te parece correcto este análisis inicial? ¿Quieres que profundice en algún aspecto específico antes de pensar en la implementación?

## Solución Implementada

La solución utiliza el método `Array.sort()` de JavaScript con una función comparadora personalizada que implementa la lógica de ordenamiento requerida.

### Código Principal

```javascript
function sort(emails) {
  return emails.sort((a, b) => {
    // Separar username y domain
    const [userA, domainA] = a.split("@");
    const [userB, domainB] = b.split("@");

    // Comparar dominios primero (case-insensitive)
    const domainCompare = domainA
      .toLowerCase()
      .localeCompare(domainB.toLowerCase());
    if (domainCompare !== 0) {
      return domainCompare;
    }

    // Si dominios iguales, comparar usernames
    return userA.toLowerCase().localeCompare(userB.toLowerCase());
  });
}
```

### Lógica de la Solución

1. **Separación de Componentes**: Cada email se divide en username y dominio usando `split('@')`
2. **Comparación por Dominio**: Se comparan los dominios convirtiéndolos a minúsculas para case-insensitiveness
3. **Comparación por Username**: Si los dominios son iguales, se comparan los usernames de la misma manera
4. **Ordenamiento Estable**: El algoritmo de sort de JavaScript mantiene el orden relativo de elementos iguales

## Complejidad Temporal y Espacial

### Complejidad Temporal: O(n log n)

- **Dominada por el algoritmo de ordenamiento**: `Array.sort()` en JavaScript usa Timsort (variante de mergesort), que es O(n log n)
- **Comparaciones**: La función comparadora se ejecuta O(n log n) veces en el peor caso
- **Operaciones por comparación**: `split()`, `toLowerCase()`, y `localeCompare()` son O(m) donde m es la longitud del string, pero como m es constante para emails típicos, podemos considerarlo O(1)

### Complejidad Espacial: O(1)

- **Espacio extra**: No usamos arrays adicionales o estructuras de datos
- **In-place**: El método `sort()` modifica el array original
- **Strings temporales**: `toLowerCase()` crea strings temporales, pero son reciclados por el garbage collector

### Análisis de Rendimiento

**Ventajas:**

- Algoritmo óptimo: No existe ordenamiento más eficiente que O(n log n) para comparación-based sorting
- Eficiencia en memoria: No requiere espacio adicional significativo
- JavaScript nativo: Aprovecha implementaciones optimizadas del engine

**Limitaciones:**

- No paralelizable: El ordenamiento secuencial es inherente al algoritmo
- Dependiente del engine: El rendimiento exacto varía entre diferentes engines de JavaScript

## Casos de Prueba

La suite de tests cubre los siguientes escenarios:

1. **Ordenamiento básico**: Emails con dominios diferentes
2. **Mismo dominio**: Emails con el mismo dominio, ordenados por username
3. **Case-insensitiveness**: Manejo correcto de mayúsculas/minúsculas
4. **Dominios múltiples**: Combinación de diferentes dominios
5. **Casos complejos**: Múltiples emails con variaciones de case y dominios

### Cobertura de Edge Cases

- Emails con dominios completamente diferentes
- Emails con el mismo dominio pero usernames variados
- Variaciones de case en dominios y usernames
- Combinaciones mixtas de los casos anteriores

## Aprendizajes y Notas

### Conceptos Técnicos Aprendidos

1. **Función Comparadora en sort()**: Cómo crear funciones personalizadas para `Array.sort()`
2. **Case-insensitive comparison**: Uso de `toLowerCase()` y `localeCompare()`
3. **Desestructuración**: Sintaxis `[user, domain] = email.split('@')`
4. **Complejidad Algorítmica**: Análisis de O(n log n) vs O(n)

### Patrones de JavaScript

- **Métodos de Array**: `sort()`, `split()`
- **Métodos de String**: `toLowerCase()`, `localeCompare()`
- **Funciones de Flecha**: Sintaxis concisa para callbacks

### Decisiones de Diseño

- **localeCompare() vs comparación manual**: Elegimos `localeCompare()` por su robustez y manejo correcto de caracteres especiales
- **In-place sorting**: Modificamos el array original según especificación del problema
- **Case preservation**: Mantenemos el case original mientras comparamos en minúsculas

### Posibles Optimizaciones Futuras

Aunque la solución actual es óptima, en escenarios con muchos emails podríamos considerar:

1. **Memoización**: Cachear resultados de `toLowerCase()` si se compara múltiples veces
2. **Sorting personalizado**: Implementar un algoritmo de ordenamiento optimizado para este caso específico
3. **Validación de entrada**: Agregar checks para emails malformados (aunque no requerido)

### Lecciones del Proceso TDD

- **Importancia de tests correctos**: Los expected deben reflejar la lógica correcta del problema
- **Iteración gradual**: Empezar con casos simples y agregar complejidad
- **Debugging colaborativo**: Revisar línea por línea ayuda a entender el flujo

Esta implementación demuestra un enfoque limpio, eficiente y bien documentado para el problema de ordenamiento de emails.