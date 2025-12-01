---
title: "anagram-checker"
difficulty: "easy"
topics:
  - String
  - Hash Table
  - Sorting
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-27"
---

# Anagram Checker

## Enunciado del Problema

Dadas dos cadenas de texto, determinar si son anagramas entre sí (contienen los mismos caracteres en cualquier orden).

Se debe ignorar las diferencias de mayúsculas y minúsculas, así como los espacios en blanco.

**Ejemplos:**

- areAnagrams("listen", "silent") → true
- areAnagrams("School master", "The classroom") → true
- areAnagrams("A gentleman", "Elegant man") → true
- areAnagrams("Hello", "World") → false
- areAnagrams("apple", "banana") → false
- areAnagrams("cat", "dog") → false

**Restricciones:**

- Ignorar casing (mayúsculas/minúsculas)
- Ignorar espacios en blanco
- Retornar un valor booleano (true/false)

## Análisis Inicial

Este problema requiere comparar dos strings para determinar si son anagramas, lo que significa que contienen exactamente los mismos caracteres con las mismas frecuencias, independientemente del orden.

**Desafíos identificados:**

- **Normalización de texto**: Convertir a minúsculas y eliminar espacios
- **Comparación de frecuencias**: Contar ocurrencias de cada carácter
- **Eficiencia**: Procesar strings de diferentes longitudes
- **Casos borde**: Strings vacíos, espacios solos, caracteres especiales

**Patrones observados en ejemplos:**

- "listen" y "silent": mismos caracteres (l,i,s,t,e,n) cada uno una vez
- "School master" y "The classroom": mismo conjunto de letras ignorando espacios y casing
- Casos negativos: diferentes caracteres o frecuencias distintas

**Estrategias posibles:**

### 1. **Enfoque con Hash Map (Frecuencias)**

- ✅ **Sencillez**: Lógica clara y directa
- ✅ **Rendimiento**: O(n) tiempo, eficiente para strings largos
- ✅ **Clean code**: Código legible y mantenible
- ✅ **Flexibilidad**: Fácil de extender (ignorar puntuación, etc.)

**Cómo funcionaría:**

- Normalizar ambos strings (minúsculas, sin espacios)
- Crear mapas de frecuencia para cada string
- Comparar que ambos mapas sean idénticos

### 2. **Enfoque con Ordenamiento**

- Ordenar caracteres de ambos strings y comparar
- Simple pero O(n log n) por el sort
- Menos eficiente que hash map para strings largos

### 3. **Enfoque con Array de Conteo**

- Usar array de 26 posiciones (a-z) para contar frecuencias
- Muy eficiente pero limitado a letras del alfabeto inglés
- No maneja caracteres especiales o unicode

**Elección preliminar:** El enfoque con hash map parece la mejor opción por su balance de sencillez, rendimiento y clean code, además de ser flexible para futuras extensiones.

**Casos borde a considerar:**

- Strings vacíos: `""` y `""` → true (mismos caracteres: ninguno)
- Un string vacío y uno no vacío: `""` y `"a"` → false
- Solo espacios: `"   "` y `"   "` → true (después de normalizar quedan vacíos)
- Diferentes espacios: `"a b"` y `"ab"` → true
- Mismas letras diferente frecuencia: `"aa"` y `"a"` → false
- Caracteres especiales: `"a!"` y `"!a"` → true (si consideramos solo letras)

**Complejidad esperada:**

- **Tiempo**: O(n) donde n es la longitud total de ambos strings
- **Espacio**: O(k) donde k es el número de caracteres únicos (máximo 26 para alfabeto inglés)

## Solución Implementada

Se implementó un enfoque funcional usando ordenamiento de caracteres:

```javascript
function areAnagrams(str1, str2) {
  // normalizar las cadenas: eliminar espacios y convertir a minúsculas
  const normalize = (str) =>
    str.replace(/\s+/g, "").toLowerCase().split("").sort().join("");

  return normalize(str1) === normalize(str2);
}
```

**Lógica paso a paso:**

1. Crear función helper `normalize` que procesa un string
2. Eliminar todos los espacios usando regex `/\s+/g`
3. Convertir a minúsculas con `toLowerCase()`
4. Convertir a array de caracteres con `split("")`
5. Ordenar alfabéticamente con `sort()`
6. Reconstruir string con `join("")`
7. Comparar las versiones normalizadas de ambos strings

**Ventajas de este enfoque:**

- **Simplicidad extrema**: Solo 6 líneas de código
- **Funcional**: Composición fluida de métodos
- **Correcto**: Maneja perfectamente espacios, casing y frecuencias
- **Legible**: La función `normalize` es autoexplicativa
- **Sin estructuras auxiliares**: No requiere maps u objetos adicionales

## Alternativas Consideradas

### 1. **Enfoque con Hash Map (Frecuencias) - Recomendado para strings largos**

**Cómo funciona:**

```javascript
function areAnagrams(str1, str2) {
  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  const countFreq = (str) => {
    const freq = {};
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  };

  const freq1 = countFreq(normalize(str1));
  const freq2 = countFreq(normalize(str2));

  // Comparar frecuencias
  const keys1 = Object.keys(freq1);
  const keys2 = Object.keys(freq2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
}
```

**Cuándo es más conveniente:**

- ✅ **Strings muy largos** (>1000 caracteres): Evita O(n log n) del sort
- ✅ **Necesitas reutilizar conteos**: Para análisis adicional de frecuencias
- ✅ **Extensibilidad**: Fácil agregar filtros (solo letras, ignorar puntuación)
- ✅ **Precisión**: Maneja perfectamente caracteres unicode y especiales

**Ventajas vs Desventajas:**

- ✅ **Más eficiente** para strings largos: O(n) vs O(n log n)
- ✅ **Más flexible**: Fácil de modificar para diferentes criterios
- ❌ **Más código**: ~15-20 líneas vs 6 líneas
- ❌ **Más complejo**: Requiere lógica de comparación de objetos

### 2. **Enfoque con Array de Conteo - Optimizado para alfabeto inglés**

**Cómo funciona:**

```javascript
function areAnagrams(str1, str2) {
  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  const countFreq = (str) => {
    const freq = new Array(26).fill(0);
    for (let char of str) {
      const code = char.charCodeAt(0) - 97; // 'a' = 0, 'b' = 1, etc.
      if (code >= 0 && code < 26) {
        freq[code]++;
      }
    }
    return freq;
  };

  const freq1 = countFreq(normalize(str1));
  const freq2 = countFreq(normalize(str2));

  return freq1.every((count, index) => count === freq2[index]);
}
```

**Cuándo es más conveniente:**

- ✅ **Alfabeto limitado**: Solo letras a-z (inglés)
- ✅ **Máximo rendimiento**: Array nativo más rápido que objetos
- ✅ **Memoria predecible**: Siempre 26 posiciones
- ✅ **Sin overhead**: No hay creación de objetos/claves

**Ventajas vs Desventajas:**

- ✅ **Más rápido**: Array nativo vs hash map
- ✅ **Menos memoria**: Tamaño fijo vs dinámico
- ❌ **Limitado**: Solo alfabeto inglés, no unicode
- ❌ **Más frágil**: Requiere validación de rango de caracteres

### 3. **Enfoque con Map de JavaScript - Moderno y flexible**

**Cómo funciona:**

```javascript
function areAnagrams(str1, str2) {
  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  const countFreq = (str) => {
    const freq = new Map();
    for (let char of str) {
      freq.set(char, (freq.get(char) || 0) + 1);
    }
    return freq;
  };

  const freq1 = countFreq(normalize(str1));
  const freq2 = countFreq(normalize(str2));

  if (freq1.size !== freq2.size) return false;

  for (let [char, count] of freq1) {
    if (freq2.get(char) !== count) return false;
  }

  return true;
}
```

**Cuándo es más conveniente:**

- ✅ **JavaScript moderno**: Aprovecha Map nativo
- ✅ **Cualquier carácter**: Maneja unicode sin problemas
- ✅ **Iteración ordenada**: Map preserva orden de inserción
- ✅ **API limpia**: Métodos `get()`, `set()`, `has()`

**Ventajas vs Desventajas:**

- ✅ **Type-safe**: Mejor que objetos planos
- ✅ **Flexible**: Cualquier tipo de clave (no solo strings)
- ❌ **Más lento**: Que arrays para casos simples
- ❌ **Más moderno**: Puede no ser compatible con navegadores antiguos

## Elección del Enfoque Implementado

Se eligió el enfoque de ordenamiento por las siguientes razones:

1. **Simplicidad**: La solución más concisa y directa
2. **Suficiente para el problema**: Los strings de los ejemplos son cortos
3. **Funcional**: Aprovecha la composición de métodos de JavaScript
4. **Legible**: La lógica es inmediatamente entendible
5. **Mantenible**: Menos código = menos posibilidad de bugs

**Cuándo cambiar a hash map:**

- Si los strings superan los 1000 caracteres
- Si necesitas análisis adicional de frecuencias
- Si el rendimiento es crítico
- Si quieres manejar caracteres unicode complejos

## Complejidad

### Análisis Detallado

**Enfoque implementado (Ordenamiento):**

- **Tiempo**: O(n log n) donde n es longitud máxima de los strings
  - Normalización: O(n)
  - Split: O(n)
  - Sort: O(n log n) - cuello de botella
  - Join: O(n)
  - Comparación: O(n)
- **Espacio**: O(n) para strings temporales creadas durante el proceso

**Enfoque con Hash Map:**

- **Tiempo**: O(n) - lineal en la longitud de los strings
- **Espacio**: O(k) donde k ≤ 26 para alfabeto inglés, O(k) donde k es número de caracteres únicos

**Enfoque con Array de Conteo:**

- **Tiempo**: O(n) - lineal
- **Espacio**: O(1) - siempre 26 posiciones fijas

### Comparación de Rendimiento

| Enfoque      | Tiempo     | Espacio | Mejor para                            |
|

------ | ---------- | ------- | ------------------------------------- |
| Ordenamiento | O(n log n) | O(n)    | Strings cortos (<1000 chars)          |
| Hash Map     | O(n)       | O(k)    | Strings largos, flexibilidad          |
| Array Conteo | O(n)       | O(1)    | Alfabeto limitado, máximo rendimiento |

### Consideraciones Prácticas

- **Para este problema**: El ordenamiento es perfectamente aceptable
- **Escalabilidad**: Hash map sería mejor para strings muy largos
- **Legibilidad**: Ordenamiento gana por simplicidad
- **Mantenibilidad**: Ordenamiento es más fácil de entender y modificar

## Aprendizajes y Reflexiones

### Patrones Identificados

1. **Normalización primero**: Siempre procesar inputs antes de comparar
2. **Funciones helper**: Separar responsabilidades mejora legibilidad
3. **Comparación directa**: `===` funciona cuando ambas partes están normalizadas
4. **Regex para espacios**: `/\s+/g` es más robusto que `replace(" ", "")`

### Mejores Prácticas Aplicadas

- **Nombres descriptivos**: `normalize` explica exactamente qué hace
- **Comentarios útiles**: Explican el propósito de cada paso
- **Composición funcional**: Encadenar métodos de manera expresiva
- **Early return**: Comparación directa sin variables intermedias

### Reflexiones sobre TDD

- Los tests guiaron naturalmente hacia la solución correcta
- Cada ejemplo incremental validó diferentes aspectos (espacios, casing, frecuencias)
- La implementación siguió directamente de los casos de prueba
- Los tests negativos fueron cruciales para validar casos de no-anagramas

### Comparación de Enfoques

**Ordenamiento vs Hash Map:**

- **Simplicidad**: Ordenamiento gana claramente
- **Rendimiento**: Hash map es mejor para escala
- **Flexibilidad**: Hash map permite más extensiones
- **Legibilidad**: Ordenamiento es más intuitivo

**Cuándo elegir cada uno:**

- **Ordenamiento**: Prototipos rápidos, problemas con strings cortos, aprendizaje
- **Hash Map**: Producción, strings largos, análisis de frecuencias adicional
- **Array Conteo**: Optimizaciones específicas, alfabeto conocido

### Posibles Extensiones

- **Ignorar puntuación**: Agregar `replace(/[^\w]/g, "")`
- **Case sensitive**: Remover `toLowerCase()`
- **Solo letras**: Filtrar con regex antes del conteo
- **Múltiples strings**: Función que tome array de strings
- **Porcentaje de similitud**: Retornar score en lugar de booleano

### Conceptos Relacionados

- **Isomorfismo de strings**: Mapeo uno-a-uno entre caracteres
- **Compresión de texto**: Conteo de frecuencias para algoritmos de compresión
- **Criptografía**: Análisis de frecuencia en textos cifrados
- **Búsqueda de texto**: Algoritmos como Rabin-Karp usan ideas similares

Este problema ilustra conceptos fundamentales de comparación de strings y manipulación de frecuencias, con múltiples enfoques viables dependiendo de los requisitos específicos del caso de uso.