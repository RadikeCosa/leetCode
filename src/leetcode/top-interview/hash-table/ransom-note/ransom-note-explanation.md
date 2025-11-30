---
name: ransom-note
difficulty: easy
category: top-interview-hash-table
topics: [Hash Table, String, Frequency Counter]
source: leetcode
series: top-interview
createdAt: 2025-11-29
---

# Ransom Note - Explicación Detallada

## Problema

**LeetCode 383: Ransom Note**

- **Dificultad:** Easy
- **Categorías:** Hash Table, String, Counting
- **Plan de Estudio:** Top Interview 150

## Enunciado

Dados dos strings `ransomNote` y `magazine`, retorna `true` si `ransomNote` puede ser construido usando las letras de `magazine` y `false` en caso contrario.

Cada letra en `magazine` solo puede ser usada una vez en `ransomNote`.

## Ejemplos

### Ejemplo 1:

```
Input: ransomNote = "a", magazine = "b"
Output: false
```

### Ejemplo 2:

```
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

### Ejemplo 3:

```
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

## Restricciones

- `1 <= ransomNote.length, magazine.length <= 10^5`
- `ransomNote` y `magazine` consisten solo de letras minúsculas del inglés

## Análisis del Problema

### Intuición Inicial

Este es un problema clásico de **frequency counting** (conteo de frecuencias). Necesitamos verificar si tenemos suficientes caracteres en el `magazine` para formar el `ransomNote`. Es como verificar si tenemos suficientes letras recortadas de una revista para formar una nota de rescate.

### Enfoque Elegido: HashMap (Frequency Counter)

#### ¿Por qué HashMap?

1. **Conteo eficiente**: Podemos contar cada carácter en O(1)
2. **Verificación rápida**: Podemos verificar disponibilidad en O(1)
3. **Actualización dinámica**: Podemos decrementar contadores mientras "usamos" caracteres

#### Algoritmo paso a paso:

1. **Fase 1 - Conteo**: Crear un HashMap con la frecuencia de cada carácter en `magazine`
2. **Fase 2 - Verificación**: Por cada carácter en `ransomNote`:
   - Verificar si existe y tiene cantidad > 0
   - Decrementar el contador (simular "uso" del carácter)
   - Si no hay suficientes, retornar `false`
3. **Resultado**: Si completamos toda la verificación, retornar `true`

#### Ejemplo detallado:

```
magazine = "aab" → HashMap: {a: 2, b: 1}
ransomNote = "aa"

Iteración 1: char = 'a'
- ¿Existe 'a'? Sí (count = 2)
- ¿Count > 0? Sí
- Usar carácter: {a: 1, b: 1}

Iteración 2: char = 'a'
- ¿Existe 'a'? Sí (count = 1)
- ¿Count > 0? Sí
- Usar carácter: {a: 0, b: 1}

Resultado: true (pudimos usar todos los caracteres)
```

### Complejidad

- **Tiempo:** O(n + m) donde n = longitud de `ransomNote`, m = longitud de `magazine`
  - O(m) para contar caracteres del magazine
  - O(n) para verificar caracteres del ransomNote
- **Espacio:** O(k) donde k = número de caracteres únicos en `magazine`
  - En el peor caso O(26) para letras minúsculas del inglés = O(1)

### Optimizaciones Implementadas

1. **Early return por longitud**: Si `ransomNote.length > magazine.length`, es imposible construirlo
2. **Early return en verificación**: Retornamos `false` tan pronto como encontramos un carácter faltante

## Patrones Identificados

### 1. **Frequency Counter Pattern**

- Usar HashMap para contar occurrencias de elementos
- Aplicable en problemas de anagramas, caracteres duplicados, etc.

### 2. **Two-Phase Algorithm**

- Fase 1: Preparación/Conteo
- Fase 2: Verificación/Procesamiento

### 3. **Character Mapping**

- Map<string, number> para asociar caracteres con su frecuencia
- Útil en problemas de strings y caracteres

## Casos Edge Considerados

1. **`ransomNote` vacío**: Siempre `true` (no necesitamos caracteres)
2. **`magazine` vacío**: `true` solo si `ransomNote` también está vacío
3. **Caracteres inexistentes**: Retorna `false` inmediatamente
4. **Frecuencias insuficientes**: Retorna `false` cuando se agota un carácter
5. **Longitudes**: Optimización temprana para casos obvios

## Alternativas Consideradas

### Enfoque Ingenuo O(n²):

```typescript
// ❌ Ineficiente: por cada char en ransomNote, buscar en magazine
for (let char of ransomNote) {
  let index = magazine.indexOf(char);
  if (index === -1) return false;
  magazine = magazine.slice(0, index) + magazine.slice(index + 1);
}
```

### Enfoque con Array (solo letras minúsculas):

```typescript
// ✅ Alternativa válida para letras a-z únicamente
const count = new Array(26).fill(0);
// Usar char.charCodeAt(0) - 'a'.charCodeAt(0) como índice
```

## Conclusión

El enfoque HashMap es óptimo para este problema, proporcionando:

- **Claridad**: Fácil de entender y mantener
- **Eficiencia**: Complejidad lineal óptima
- **Flexibilidad**: Funciona con cualquier conjunto de caracteres
- **Escalabilidad**: Maneja bien los constraints del problema (10^5)
