---
title: "string-count"
difficulty: "easy"
topics:
  - String
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Análisis del Problema

## Descripción

Dado dos strings, determinar cuántas veces aparece el segundo string dentro del primero. El patrón puede solaparse en el texto, lo que significa que el mismo caracter puede formar parte de múltiples ocurrencias.

## Ejemplos

- `"aaa"` contiene `"aa"` dos veces (posiciones 0-1 y 1-2)
- `"mississippi"` contiene `"iss"` dos veces (posiciones 1-3 y 4-6)
- `"101010101010101010101"` contiene `"101"` 10 veces con solapamientos

## Restricciones

- No se especifican restricciones de longitud en el problema
- Se asume que ambos parámetros son strings válidos
- El patrón puede estar vacío (aunque no se especifica el comportamiento esperado)

## Enfoque

### Idea Inicial

El problema requiere contar todas las ocurrencias de un patrón dentro de un texto, permitiendo solapamientos. Una primera intuición es usar el método `indexOf` de JavaScript, que encuentra la posición de la primera ocurrencia de una subcadena.

Sin embargo, `indexOf` solo encuentra la primera ocurrencia. Para contar todas, necesitamos buscar repetidamente, comenzando desde posiciones posteriores a cada coincidencia encontrada.

El desafío clave es manejar los solapamientos: si avanzamos más de una posición después de cada coincidencia, podríamos perder ocurrencias que se solapan.

### Algoritmo

1. Inicializar un contador en 0
2. Buscar la primera ocurrencia del patrón usando `indexOf`
3. Mientras se encuentre una ocurrencia:
   - Incrementar el contador
   - Buscar la siguiente ocurrencia comenzando desde la posición siguiente (posición actual + 1)
4. Retornar el contador final

Este algoritmo funciona correctamente para solapamientos porque:

- Avanza solo 1 posición después de cada coincidencia

- Permite que el mismo caracter forme parte de múltiples coincidencias

- Es eficiente y fácil de implementar con métodos nativos de JavaScript

## Complejidad

### Tiempo

**O(n × m)** en el peor caso, donde:

- `n` es la longitud del texto

- `m` es la longitud del patrón

El bucle `while` puede ejecutarse hasta `n` veces (una por cada posición posible). En cada iteración, `indexOf` realiza una comparación de strings que puede tomar hasta `O(m)` tiempo en el peor caso.

### Espacio

**O(1)** - espacio adicional constante. Solo usamos variables primitivas (contador y posición), sin estructuras de datos adicionales.

## Algoritmos de Búsqueda de Patrones Avanzados

Aunque para este problema usamos `indexOf` por simplicidad, existen algoritmos más eficientes para búsqueda de patrones en texto:

### KMP (Knuth-Morris-Pratt)

**Complejidad:** O(n + m) tiempo, O(m) espacio
**Idea principal:** Preprocesa el patrón para crear una tabla de "prefijos sufijos" que permite saltar caracteres sin backtracking.
**Ventaja:** Evita comparar caracteres que ya sabemos que coinciden.
**Cuándo usar:** Cuando necesitas buscar el mismo patrón múltiples veces, o en textos muy largos.

### Boyer-Moore

**Complejidad:** O(n × m) peor caso, pero O(n/m) caso promedio
**Idea principal:** Comienza la comparación desde el final del patrón y usa reglas heurísticas para saltar grandes secciones de texto.
**Ventajas:** Muy eficiente en la práctica para patrones largos, especialmente cuando hay muchos caracteres no coincidentes.
**Cuándo usar:** Búsqueda en texto natural, patrones largos, o cuando el rendimiento es crítico.

**¿Por qué no los usamos aquí?**

- La solución con `indexOf` es suficiente para este problema

- KMP y Boyer-Moore requieren más código y complejidad

- `indexOf` está optimizado en JavaScript engines modernos

- Para problemas de algoritmos, a menudo priorizamos claridad sobre micro-optimizaciones

## Implementación

### Método indexOf en JavaScript

El método `indexOf` es fundamental para esta solución. Funciona así:

**Sintaxis general:**

```javascript
string.indexOf(searchValue, fromIndex);
```

**Parámetros:**

- `searchValue`: La subcadena a buscar (requerido)
- `fromIndex`: Posición desde donde comenzar la búsqueda (opcional, por defecto 0)

**Retorno:**

- El índice de la primera ocurrencia encontrada (empezando desde 0)
- `-1` si no se encuentra la subcadena

**En este problema:**

- Primera llamada: `text.indexOf(pattern)` busca desde el inicio
- Llamadas subsiguientes: `text.indexOf(pattern, pos + 1)` busca desde la posición siguiente
- El parámetro `fromIndex` permite manejar solapamientos avanzando solo 1 posición

### Código

```javascript
function count(text, pattern) {
  let count = 0;
  let pos = text.indexOf(pattern);
  while (pos !== -1) {
    count++;
    pos = text.indexOf(pattern, pos + 1);
  }
  return count;
}
```

### Explicación Paso a Paso

1. **Inicialización**: `count = 0` para llevar el conteo de ocurrencias
2. **Primera búsqueda**: `pos = text.indexOf(pattern)` encuentra la primera ocurrencia desde posición 0
3. **Bucle principal**: Mientras se encuentren ocurrencias (`pos !== -1`):
   - Incrementar contador: `count++`
   - Buscar siguiente ocurrencia desde la posición siguiente: `pos = text.indexOf(pattern, pos + 1)`
4. **Retorno**: Devolver el contador final

## Casos de Prueba

### Casos Básicos

- `count('abcdefg', 'def')` → `1`: Patrón encontrado una vez sin solapamiento
- `count('hello', 'world')` → `0`: Patrón no encontrado

### Casos Edge

- Patrón más largo que el texto: debería retornar 0
- Patrón vacío: comportamiento no especificado (podría causar bucle infinito)
- Texto vacío: debería retornar 0

### Casos de Overlap

- `count('mississippi', 'iss')` → `2`: "iss" aparece en posiciones 1-3 y 4-6
- `count('aaa', 'aa')` → `2`: "aa" aparece en posiciones 0-1 y 1-2
- `count('101010101010101010101', '101')` → `10`: Múltiples solapamientos

## Aprendizajes

### Patrones Identificados

- **Búsqueda con solapamiento**: Para contar ocurrencias que pueden solaparse, usar bucles que avancen de a un caracter
- **Uso de métodos nativos**: `indexOf` con parámetro de posición inicial es eficiente para este tipo de problemas
- **Manejo de casos edge**: Considerar patrones más largos que el texto y strings vacíos

### Conceptos de JavaScript Usados

- **Método `indexOf`**: Búsqueda de substrings con posición inicial opcional
- **Bucles `while`**: Iteración controlada por condición
- **Variables de estado**: Contadores y posiciones para tracking
- **Retorno temprano**: El bucle termina cuando no hay más ocurrencias