---
title: "stellar-classification"
difficulty: "easy"
topics:
  - Math
  - Mapping
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-04"
---

# Clasificación Estelar

Dado la temperatura superficial de una estrella en Kelvin (K), determinar su clasificación estelar basada en rangos específicos de temperatura.

## Ejemplos

- Input: 5778 → Output: "G" (como el Sol)
- Input: 2400 → Output: "M" (enanas rojas)
- Input: 9999 → Output: "A" (estrellas blancas)
- Input: 210000 → Output: "O" (estrellas azules masivas)

## Análisis

Este problema requiere mapear temperaturas a categorías discretas basadas en rangos. Los rangos no son uniformes y tienen límites específicos, lo que requiere una estrategia cuidadosa para evitar errores en los límites.

### Patrones identificados:

1. **Rangos no uniformes**: Los límites varían significativamente (3,700 K vs 30,000 K)
2. **Límite superior abierto**: La clasificación "O" no tiene límite superior
3. **Casos edge importantes**: Los límites exactos (como 3699 vs 3700) deben manejarse correctamente

### ¿Por qué Map es la solución correcta?

- Permite lookup eficiente O(1) conceptual
- Mantiene orden de inserción (crítico para la lógica)
- Es declarativo y fácil de mantener
- Maneja naturalmente el caso de límite superior abierto

## Enfoque detallado

### Estrategia: Map con temperaturas mínimas ordenadas

1. **Crear Map ordenado**: Insertar rangos de mayor a menor temperatura mínima

   ```
   [30000, "O"], [10000, "B"], [7500, "A"], ..., [0, "M"]
   ```

2. **Iteración secuencial**: Recorrer el Map en orden de inserción

   ```javascript
   for (let [minTemp, classification] of stellarMap) {
     if (temp >= minTemp) return classification;
   }
   ```

3. **Lógica de evaluación**:
   - Primera coincidencia gana (debido al orden descendente)
   - Temperaturas altas matchean primero ("O")
   - Temperaturas bajas caen en "M" (caso por defecto)

### Ejemplo paso a paso:

Para temp = 11432:

- 11432 >= 30000? No → siguiente
- 11432 >= 10000? Sí → retorna "B"

Para temp = 3699:

- 3699 >= 30000? No → siguiente
- ... continúa hasta 3699 >= 3700? No → siguiente
- 3699 >= 0? Sí → retorna "M"

## Casos extremos

- **Temperatura 0**: Retorna "M" (rango incluye 0)
- **Temperatura 3699**: Retorna "M" (límite exacto del rango K)
- **Temperatura 3700**: Retorna "K" (inicio del rango K)
- **Temperatura 30000**: Retorna "O" (límite exacto)
- **Temperatura 210000**: Retorna "O" (sin límite superior)
- **Temperaturas negativas**: Teóricamente retornarían "M", pero el problema asume inputs válidos

## Complejidad

- **Time complexity**: O(1) - Máximo 7 iteraciones constantes
- **Space complexity**: O(1) - Map con 7 elementos fijos

## Conclusión

Esta solución demuestra el poder de las estructuras de datos nativas de JavaScript. El Map no solo proporciona lookup eficiente, sino que su garantía de orden de inserción permite implementar lógica condicional compleja de manera elegante.

### Lecciones aprendidas:

1. **Orden importa**: El orden de inserción en Map es crucial para la lógica
2. **Simplicidad sobre complejidad**: Una solución simple con la estructura correcta es mejor que algoritmos complejos
3. **Casos edge primero**: Pensar en límites desde el inicio evita bugs
4. **Documentación**: Los comentarios hacen que el código sea autodocumentado

Esta aproximación es mantenible, eficiente y correcta - cualidades esenciales para código de producción.