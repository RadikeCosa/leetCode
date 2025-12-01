---
title: "Longest Common Prefix"
difficulty: "easy"
topics:
  - Array
  - trie
  - String
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

## Longest Common Prefix - LeetCode 14

## Descripción del Problema

Escribe una función para encontrar el prefijo común más largo entre un arreglo de strings.

Si no hay prefijo común, devuelve una cadena vacía `""`.

## Ejemplos

### Ejemplo 1

```text
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

### Ejemplo 2

```text
Input: strs = ["dog","racecar","car"]
Output: ""
Explicación: No hay prefijo común entre los strings de entrada.
```

## Restricciones

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consiste únicamente de letras minúsculas en inglés si no está vacío.

## Análisis Inicial

**Preguntas para reflexionar:**

1. ¿Qué sucede si uno de los strings está vacío?
2. ¿Cómo podríamos optimizar si sabemos cuál es el string más corto?
3. ¿Qué diferentes enfoques podrías usar para resolver este problema?

## Enfoques Posibles

### 1. Comparación Vertical (Caracter por Caracter)

- Comparar el carácter en cada posición de todos los strings
- Parar cuando encontremos una diferencia

### 2. Comparación Horizontal (String por String)

- Usar el primer string como referencia
- Ir comparando con cada string subsecuente

### 3. Divide y Vencerás

- Dividir el problema en sub-problemas más pequeños
- Encontrar el LCP de pares de strings

## Casos Extremos a Considerar

- Array con un solo string
- Strings vacíos en el array
- Todos los strings son idénticos
- No hay prefijo común
- Strings de diferentes longitudes

## Complejidad Esperada

Piensa en:

- ¿Cuántos caracteres tendrás que examinar en el peor caso?
- ¿Necesitas espacio adicional?

## Implementación

### Enfoque Elegido: Ordenamiento Alfabético + Comparación de Extremos

**Insight clave:** Si ordenamos los strings alfabéticamente, solo necesitamos comparar el primer y último string. Si estos dos comparten un prefijo, todos los strings intermedios también lo comparten.

### Algoritmo paso a paso:

1. **Ordenar el array alfabéticamente** usando `.sort()`
2. **Verificar casos extremos:**
   - Array vacío → retornar `""`
   - Primer string vacío → retornar `""` (los strings vacíos quedan al inicio después del ordenamiento)
3. **Obtener referencias:**
   - Primer string: `sortedArray[0]`
   - Último string: `sortedArray[sortedArray.length - 1]`
4. **Calcular límite de comparación:** `Math.min(firstString.length, lastString.length)`
5. **Comparar carácter por carácter:**
   - Si coinciden → agregar al resultado
   - Si difieren → usar `break` para salir inmediatamente
6. **Retornar el prefijo común construido**

### Ejemplo de ejecución:

```typescript
Input: ["flower", "flow", "flight"]

1. Ordenamiento: ["flight", "flow", "flower"]
2. Comparar "flight" vs "flower":
   - Posición 0: 'f' === 'f' ✅ → commonPrefix = "f"
   - Posición 1: 'l' === 'l' ✅ → commonPrefix = "fl"
   - Posición 2: 'i' !== 'o' ❌ → break
3. Resultado: "fl"
```

## Análisis de Complejidad

### Complejidad Temporal: O(S \* log n + m)

- **O(S \* log n):** Ordenamiento, donde S es la suma total de caracteres
- **O(m):** Comparación de caracteres, donde m es la longitud del prefijo común
- **Dominante:** En la mayoría de casos prácticos, el ordenamiento domina

### Complejidad Espacial: O(1)

- Solo variables auxiliares (`commonPrefix`, `firstString`, `lastString`, etc.)
- No consideramos el espacio del ordenamiento (si es in-place)

## Casos Extremos Manejados

✅ **Array vacío:** `[]` → `""`  
✅ **String vacío en array:** `["abc", "", "ab"]` → `""`  
✅ **Un solo string:** `["single"]` → `"single"`  
✅ **Strings idénticos:** `["test", "test", "test"]` → `"test"`  
✅ **Sin prefijo común:** `["abc", "def", "ghi"]` → `""`  
✅ **Prefijo de un carácter:** `["a", "aa", "aaa"]` → `"a"`  
✅ **Strings de diferentes longitudes:** `["interspecies", "interstellar"]` → `"inters"`

## Ventajas del Enfoque

1. **Optimización inteligente:** Reduce comparaciones de O(n) strings a solo 2
2. **Elegante y eficiente:** Aprovecha las propiedades del ordenamiento alfabético
3. **Fácil de entender:** La lógica es clara y directa
4. **Manejo robusto de casos extremos:** Cubre todos los edge cases naturalmente

## Reflexiones Post-Implementación

### Proceso de Descubrimiento

1. **Análisis inicial:** Comenzamos pensando en comparación carácter por carácter
2. **Insight clave:** Descubrimos que el ordenamiento alfabético nos permite una optimización elegante
3. **Refinamiento:** Identificamos todos los casos extremos y cómo manejarlos
4. **Resultado:** Una solución limpia y eficiente

### Lecciones Aprendidas

- **El ordenamiento puede ser una herramienta poderosa** para simplificar problemas de strings
- **Los casos extremos importan:** Manejar strings vacíos es crucial
- **La optimización no siempre es obvia:** A veces un paso adicional (ordenamiento) puede simplificar el resto del algoritmo

### Alternativas Consideradas

1. **Comparación vertical:** Comparar posición i de todos los strings
2. **Comparación horizontal:** Usar el primer string como referencia
3. **Enfoque recursivo:** Dividir y conquistar

## Código Final

```typescript
function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = "";
  let sortedArray = strs.sort();
  if (sortedArray.length === 0) return commonPrefix;
  if (sortedArray[0] === "") return commonPrefix;
  let firstString = sortedArray[0];
  let lastString = sortedArray[sortedArray.length - 1];
  let limit = Math.min(firstString.length, lastString.length);
  for (let i = 0; i < limit; i++) {
    if (firstString[i] !== lastString[i]) break;
    commonPrefix += firstString[i];
  }

  return commonPrefix;
}
```