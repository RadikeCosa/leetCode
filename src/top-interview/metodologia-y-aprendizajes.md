# Enfoque y Metodología - Top Interview Problems

## Filosofía de Resolución

Esta colección de problemas de **Top Interview** sigue un enfoque sistemático basado en **aprendizaje guiado** y **desarrollo dirigido por tests (TDD)** para construir intuición algorítmica sólida y habilidades de resolución de problemas.

## Metodología TDD (Test-Driven Development)

### 🔴 **RED Phase - Escribir Tests que Fallan**

1. **Análisis del problema**: Entender completamente el enunciado y restricciones
2. **Casos de prueba**: Implementar tests basados en ejemplos de LeetCode
3. **Casos edge**: Agregar tests para situaciones límite
4. **Verificación**: Confirmar que los tests fallan (función vacía/skeleton)

### 🟢 **GREEN Phase - Implementar Solución Mínima**

1. **Solución funcional**: Escribir código que haga pasar todos los tests
2. **Enfoque pragmático**: Priorizar funcionalidad sobre optimización prematura
3. **Nombres descriptivos**: Variables y funciones auto-explicativas desde el inicio
4. **Iteración rápida**: `npm run test:watch` para feedback inmediato

### 🔵 **REFACTOR Phase - Optimizar y Documentar**

1. **Análisis de complejidad**: Evaluar tiempo y espacio
2. **Documentación completa**: Explanation y post-solution
3. **Patrones identificados**: Documentar técnicas y estrategias utilizadas
4. **Knowledge base**: Actualizar conceptos generales aprendidos

## Estructura Estándar por Problema

Cada problema sigue la estructura organizada por categorías temáticas:

```
top-interview/
├── metodologia-y-aprendizajes.md      # Este archivo
├── array-string/                      # Problemas de Arrays y Strings
│   ├── merge-sorted-array/
│   │   ├── merge-sorted-array.ts
│   │   ├── merge-sorted-array.test.ts
│   │   ├── merge-sorted-array-explanation.md
│   │   └── merge-sorted-array-post-solution.md
│   └── remove-element/
│       ├── remove-element.ts
│       ├── remove-element.test.ts
│       ├── remove-element-explanation.md
│       └── remove-element-post-solution.md
└── [otras-categorias]/                # Futuras categorías (linked-lists, trees, etc.)
```

### Categorías de Problemas

- **array-string/**: Manipulación de arrays y strings, two pointers, sliding window
- **[linked-lists/]**: Problemas de listas enlazadas (futuro)
- **[trees/]**: Árboles binarios y traversal (futuro)
- **[dynamic-programming/]**: Programación dinámica (futuro)

## Patrones Algorítmicos Comunes

### Two Pointers

- **Cuándo usar**: Arrays ordenados, búsqueda de pares, merge operations
- **Variantes**: Convergentes, divergentes, diferentes velocidades, múltiples arrays
- **Optimización típica**: O(n²) → O(n)

### Hash Maps / Hash Tables

- **Cuándo usar**: Búsquedas O(1), conteo de frecuencias, mapeo clave-valor
- **Trade-off**: Espacio O(n) por tiempo O(1)
- **Patrón común**: Convertir búsquedas lineales en acceso directo

### Sliding Window

- **Cuándo usar**: Subarrays contiguos, optimización de rangos
- **Tipos**: Tamaño fijo, tamaño variable, múltiples ventanas
- **Optimización típica**: O(n²) → O(n)

### Greedy Algorithms

- **Cuándo usar**: Decisiones locales óptimas llevan a solución global
- **Clave**: Demostrar que elección local es segura
- **Ejemplos**: Intervalos, scheduling, optimización

## Aprendizajes por Problema

### Merge Sorted Array (LeetCode 88)

**Patrón**: Two Pointers  
**Técnica clave**: Merge desde el final para evitar sobrescritura  
**Insight**: Aprovechar restricciones del problema (espacio extra en nums1)  
**Complejidad**: O(m+n) tiempo, O(1) espacio  
**Lección**: La dirección del procesamiento puede ser crucial para optimización

---

## Principios de Código Limpio

### Naming Conventions

- **Variables descriptivas**: `lastUsefulIndexOfNums1` > `i` o `p1`
- **Funciones claras**: `merge()` describe exactamente la operación
- **Comentarios en español**: Lógica explicada en idioma natural

### Testing Strategy

- **Casos básicos**: Todos los ejemplos de LeetCode
- **Edge cases**: Arrays vacíos, elementos únicos, casos límite
- **Error scenarios**: Inputs inválidos cuando corresponda
- **Performance tests**: Para problemas con restricciones de tiempo

### Documentation Standards

- **Problem context**: Siempre incluir número de LeetCode y descripción
- **Complexity analysis**: Tiempo y espacio con explicación
- **Algorithm explanation**: Por qué funciona, no solo cómo
- **Trade-offs discussed**: Alternativas consideradas y rechazadas

## Reflexiones sobre el Proceso

### Ventajas del TDD en Algoritmos

1. **Claridad de requisitos**: Tests definen comportamiento exacto
2. **Confianza en solución**: Cobertura completa de casos
3. **Refactoring seguro**: Cambios respaldados por tests
4. **Documentación viva**: Tests como especificación ejecutable

### Lessons Learned

- **Start simple**: Implementación básica primero, optimización después
- **Name things well**: Código auto-documentado reduce bugs
- **Think edge cases**: Los casos límite revelan la robustez del algoritmo
- **Pattern recognition**: Cada problema enseña técnicas reutilizables

---

_Este archivo se actualiza con cada nuevo problema resuelto, capturando aprendizajes y refinando la metodología._
