# Intuition

Mi primera impresión fue que necesito encontrar los caracteres que TODOS los strings comparten desde el inicio. Inicialmente pensé en comparar cada string con todos los demás, pero luego me di cuenta de una optimización clave: si ordeno los strings alfabéticamente, solo necesito comparar el primer y último string. Si estos dos comparten un prefijo, entonces todos los strings intermedios también lo comparten por la naturaleza del ordenamiento alfabético.

# Approach

1. **Ordenar alfabéticamente:** Uso `.sort()` para ordenar el array de strings
2. **Manejar casos extremos:** Verifico si el array está vacío o si el primer string (después del ordenamiento) está vacío
3. **Identificar extremos:** Tomo el primer string `sortedArray[0]` y el último `sortedArray[sortedArray.length - 1]`
4. **Comparación optimizada:** Comparo estos dos strings carácter por carácter hasta encontrar una diferencia
5. **Construir resultado:** Agrego cada carácter coincidente al resultado final

La clave está en que si el string lexicográficamente menor y el mayor comparten un prefijo, entonces todos los strings intermedios también lo comparten.

# Complexity

- Time complexity: $$O(S \cdot \log n + m)$$ donde S es la suma total de caracteres en todos los strings, n es el número de strings, y m es la longitud del prefijo común
- Space complexity: $$O(1)$$ excluyendo el espacio usado por el ordenamiento (solo variables auxiliares)

# Code

```typescript
export function longestCommonPrefix(strs: string[]): string {
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
