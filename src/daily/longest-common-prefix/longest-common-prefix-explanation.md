# Longest Common Prefix - LeetCode 14

## Descripción del Problema

Escribe una función para encontrar el prefijo común más largo entre un arreglo de strings.

Si no hay prefijo común, devuelve una cadena vacía `""`.

## Ejemplos

### Ejemplo 1

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

### Ejemplo 2

```
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

[La implementación se desarrollará paso a paso]

## Reflexiones Post-Implementación

[Se completará después de implementar la solución]
