---
name: roman-to-integer
difficulty: easy
category: daily
topics: [String, Hash Map, Roman Numerals]
source: leetcode
series: daily
createdAt: 2025-08-20
---

# Roman to Integer

Conversión de un número romano (cadena válida) a entero en el rango [1, 3999].

## Ejemplos

- `III` → 3
- `LVIII` → 58 (L=50, V=5, III=3)
- `MCMXCIV` → 1994 (M=1000, CM=900, XC=90, IV=4)

## Análisis

Idea clave: en números romanos se suman los valores de los símbolos **salvo** cuando un símbolo menor precede a uno mayor formando un patrón de sustracción (ej.: IV, IX, XL, XC, CD, CM). Por tanto, basta con recorrer la cadena y decidir para cada símbolo si se suma o se resta comparándolo con el siguiente.

## Enfoque detallado

1. Definir un mapa constante de símbolos a valores.
2. Inicializar `total = 0`.
3. Recorrer la cadena de izquierda a derecha con índice `i`.
4. Obtener `current = valor(s[i])` y `next = valor(s[i+1])` (undefined si estamos al final).
5. Si `next` existe y `current < next` → restar `current` (caso de sustracción). En caso contrario sumar.
6. Devolver `total` al final.

### Tabla de símbolos

| Símbolo | Valor |
| ------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- |
| I       | 1     | V   | 5   | X   | 10  | L   | 50  | C   | 100 | D   | 500 | M   | 1000 |

### Patrón de sustracción permitido

- I antes de V o X → 4, 9
- X antes de L o C → 40, 90
- C antes de D o M → 400, 900

### Ejemplo: `MCMXCIV`

Proceso (acción basada en comparar con el siguiente):
M(1000) vs C(100) → suma (total=1000)
C(100) vs M(1000) → resta (900)
M(1000) vs X(10) → suma (1900)
X(10) vs C(100) → resta (1890)
C(100) vs I(1) → suma (1990)
I(1) vs V(5) → resta (1989)
V(5) fin → suma (1994)

### Pseudo-código

```
map = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
total = 0
para i = 0 .. n-1:
	cur = map[s[i]]
	nxt = map[s[i+1]]
	si nxt existe y cur < nxt: total -= cur
	sino: total += cur
return total
```

## Casos extremos

- Longitud mínima: `"I"` → 1.
- Longitud máxima válida: `"MMMCMXCIX"` → 3999.
- Sin sustracciones: `"MMMDCCCLXXXVIII"` (solo sumas, 3888).
- Múltiples sustracciones separadas: `"MCMXCIV"`.

## Complejidad

- Time complexity: O(n) — un único recorrido lineal.
- Space complexity: O(1) — el mapa tiene tamaño fijo (7 entradas).

## Conclusión

El criterio local (comparar símbolo actual con el siguiente) encapsula toda la semántica necesaria gracias a que el formato romano restringe los patrones de sustracción a seis casos bien definidos. Esto permite una solución simple, limpia y óptima en tiempo lineal y espacio constante. Futuras variantes: escanear de derecha a izquierda o preprocesar pares especiales; no mejoran la complejidad pero ofrecen alternativas de estilo.
