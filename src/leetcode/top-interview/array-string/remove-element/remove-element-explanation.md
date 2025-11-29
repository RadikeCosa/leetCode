# Remove Element - Análisis del Problema

## Descripción del Problema

**LeetCode 27: Remove Element** (Easy)

Dado un array de enteros `nums` y un entero `val`, remover todas las ocurrencias de `val` en `nums` **in-place**. El orden de los elementos puede cambiar. Luego retornar el número de elementos en `nums` que no son iguales a `val`.

### Requerimientos Específicos

- Modificar el array `nums` tal que los primeros `k` elementos contengan los elementos que no son iguales a `val`
- Los elementos restantes de `nums` no importan, así como el tamaño de `nums`
- Retornar `k` (el número de elementos que no son iguales a `val`)

## Análisis de Ejemplos

### Ejemplo 1

```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
```

- Elementos a mantener: `[2, 2]`
- `k = 2`
- Los primeros 2 elementos deben ser `[2, 2]` en cualquier orden

### Ejemplo 2

```
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
```

- Elementos a mantener: `[0, 1, 3, 0, 4]`
- `k = 5`
- Los primeros 5 elementos deben contener estos valores en cualquier orden

## Restricciones

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

## Solución Implementada: Two Pointers Approach

### Conceptos Clave del Two Pointers

En este problema aplicamos la técnica **Two Pointers** con un patrón específico:

- **Pointer de Lectura (`i`)**: Recorre todo el array de izquierda a derecha
- **Pointer de Escritura (`write`)**: Marca la posición donde escribir el próximo elemento válido

### Funcionamiento del Algoritmo

1. **Inicialización**: `write = 0` (primera posición disponible para escribir)
2. **Iteración**: `i` recorre todo el array
3. **Condición**: Si `nums[i] !== val`, entonces:
   - Copiamos `nums[i]` a la posición `nums[write]`
   - Incrementamos `write` (siguiente posición disponible)
4. **Resultado**: `write` representa el número de elementos válidos

### Trace del Algoritmo

**Ejemplo**: `nums = [3,2,2,3]`, `val = 3`

```
Inicial: nums = [3,2,2,3], write = 0

i=0: nums[0]=3, es val → no copiamos, write=0
     nums = [3,2,2,3], write = 0

i=1: nums[1]=2, no es val → nums[0]=2, write=1
     nums = [2,2,2,3], write = 1

i=2: nums[2]=2, no es val → nums[1]=2, write=2
     nums = [2,2,2,3], write = 2

i=3: nums[3]=3, es val → no copiamos, write=2
     nums = [2,2,2,3], write = 2

Resultado: k = 2, primeros 2 elementos = [2,2]
```

### ⚠️ **Aclaración Importante: ¿Qué significa "remover"?**

**Malentendido común**: Pensar que eliminamos elementos del array.

**Realidad**: NO removemos elementos físicamente. El array mantiene su tamaño original.

**Lo que realmente hacemos**:

1. **Reorganizamos** el array para que los elementos válidos estén al inicio
2. **Sobrescribimos** posiciones con elementos válidos
3. **Ignoramos** lógicamente los elementos después de la posición `k`

**Verificación**:

```
Array original: [3, 2, 2, 3] (longitud = 4)
Array después:  [2, 2, 2, 3] (longitud = 4) ← Sigue siendo 4!
k = 2 → Solo los primeros 2 elementos [2, 2] son válidos
Elementos [2, 3] después de k → Irrelevantes pero siguen ahí
```

### ¿Por qué Two Pointers es ideal aquí?

1. **Eficiencia**: O(n) tiempo, O(1) espacio
2. **In-place**: No necesitamos espacio adicional
3. **Separación de responsabilidades**:
   - `i` se encarga de leer todos los elementos
   - `write` se encarga de mantener la posición de escritura
4. **Simplicidad**: Algoritmo directo y fácil de entender

## Casos Edge a Considerar

1. **Array vacío**: `nums = []`
2. **Todos los elementos iguales a val**: `nums = [1,1,1,1], val = 1`
3. **Ningún elemento igual a val**: `nums = [1,2,3,4], val = 5`
4. **Array de un solo elemento**
5. **Valor val en diferentes posiciones del array**

## Complejidad Objetivo

- **Tiempo**: O(n) - una sola pasada por el array
- **Espacio**: O(1) - modificación in-place sin espacio adicional

## Patrones Algorítmicos

- **Two Pointers**: Técnica fundamental para problemas de modificación in-place
- **Array Manipulation**: Reorganización eficiente de elementos
- **In-place Operations**: Optimización de espacio

## Conexión con las Pistas de LeetCode

**Hint 1**: _"We don't technically need to remove that element per-say, right?"_

- ✅ **Correcto**: No eliminamos, solo reorganizamos

**Hint 2**: _"We can move all the occurrences of this element to the end of the array. Use two pointers!"_

- ✅ **Aplicado**: Usamos `write` e `i` como two pointers
- 📝 **Nota**: En lugar de mover elementos `val` al final, movemos elementos válidos al inicio (más eficiente)

**Hint 3**: _"Consider the elements to be removed as non-existent. In a single pass, if we keep copying the visible elements in-place..."_

- ✅ **Aplicado**: Tratamos elementos `== val` como "non-existent" y solo copiamos los "visibles"
- ✅ **Single pass**: Una sola iteración O(n)
- ✅ **In-place**: Sin espacio adicional O(1)
