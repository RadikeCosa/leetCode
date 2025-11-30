---
name: valid-perfect-square
difficulty: easy
category: binary-search
topics: [Binary Search, Math]
source: leetcode
series: math
createdAt: 2025-11-29
---

# Valid Perfect Square - Análisis del Problema

## Descripción del Problema

**LeetCode 367: Valid Perfect Square**

- **Dificultad**: Easy
- **Temas**: Math, Binary Search

## Enunciado

Dado un entero positivo `num`, retorna `true` si `num` es un cuadrado perfecto o `false` en caso contrario.

Un cuadrado perfecto es un entero que es el cuadrado de un entero. En otras palabras, es el producto de algún entero consigo mismo.

No debes usar ninguna función de librería incorporada, como `sqrt`.

## Ejemplos

### Ejemplo 1:

- **Input**: `num = 16`
- **Output**: `true`
- **Explicación**: Retornamos true porque 4 \* 4 = 16 y 4 es un entero.

### Ejemplo 2:

- **Input**: `num = 14`
- **Output**: `false`
- **Explicación**: Retornamos false porque 3.742 \* 3.742 = 14 y 3.742 no es un entero.

## Restricciones

- `1 <= num <= 2^31 - 1`

## Análisis Inicial

### Observaciones Clave:

1. **Prohibición de sqrt**: No podemos usar `Math.sqrt()`, debemos implementar la lógica nosotros mismos
2. **Binary Search aplicable**: Buscamos un entero `x` tal que `x² = num`
3. **Rango de búsqueda**: Para `num > 4`, la raíz siempre es `≤ num/2`
4. **Edge cases**: `num = 1` es especial (1² = 1), `num < 4` solo 1 es cuadrado perfecto

### Patrones Identificados:

- **Binary Search on Answer**: Buscar el valor exacto en un rango ordenado
- **Range Optimization**: Reducir el espacio de búsqueda usando matemáticas
- **Overflow Prevention**: Evitar `mid * mid` cuando puede causar overflow

## Enfoque de Solución

### Estrategia Elegida: Binary Search Optimizado

```typescript
// Early returns para casos triviales
if (num === 1) return true;
if (num < 4) return false;

// Binary search en rango optimizado [1, num/2 + 1]
while (left <= right) {
  // Protección contra overflow antes de calcular mid²
  if (mid > num / mid) right = mid - 1;
  else {
    const square = mid * mid;
    // Lógica de binary search estándar
  }
}
```

### ¿Por qué esta estrategia?

1. **Eficiencia**: O(log n) con rango reducido a la mitad
2. **Robustez**: Maneja overflow para números grandes (2³¹-1)
3. **Claridad**: Early returns hacen el código más legible
4. **Correctness**: Cubre todos los edge cases correctamente

### Alternativas Consideradas:

- **Linear search**: O(n) - demasiado lento para números grandes
- **Newton's method**: Más complejo, converge más rápido pero innecesario aquí
- **Bit manipulation**: Complejo y no más eficiente para este problema

## Complejidad

### Análisis Temporal: O(log n)

- **Early returns**: O(1) para `num = 1, 2, 3`
- **Binary search**: O(log(n/2)) = O(log n - 1) ≈ O(log n)
- **Comparaciones por iteración**: O(1) - operaciones aritméticas simples
- **Total**: **O(log n)** - óptimo para problema de búsqueda

### Análisis Espacial: O(1)

- **Variables**: `left`, `right`, `mid`, `square` - espacio constante
- **No recursión**: Implementación iterativa sin stack
- **Total**: **O(1)** - óptimo en espacio

## Patrones y Técnicas Utilizadas

### 1. **Binary Search on Answer Pattern**

- Patrón: Buscar valor específico en rango ordenado
- Aplicación: Encontrar `x` donde `x² = num`
- Ventaja: Reducción logarítmica del espacio de búsqueda

### 2. **Mathematical Range Optimization**

- Patrón: Usar propiedades matemáticas para reducir rango
- Aplicación: `√num ≤ num/2` para `num > 4`
- Ventaja: Aproximadamente 50% menos iteraciones

### 3. **Overflow Prevention Pattern**

- Patrón: `if (a > limit/b)` en lugar de `if (a*b > limit)`
- Aplicación: `if (mid > num/mid)` en lugar de `if (mid*mid > num)`
- Ventaja: Evita overflow en operaciones intermedias

### 4. **Early Return Optimization**

- Patrón: Manejar casos especiales antes del algoritmo principal
- Aplicación: `num = 1` (true), `num < 4` (false para 2,3)
- Ventaja: Evita computación innecesaria

## Insights y Aprendizajes

### 🎯 **Insight Principal**

Este problema demuestra cómo **combinar múltiples optimizaciones** en binary search:

1. **Range reduction** (matemática)
2. **Overflow prevention** (ingeniería)
3. **Early returns** (práctica)

Cada optimización aborda un aspecto diferente: eficiencia, robustez, y claridad.

### 🔧 **Técnica Aprendida: Overflow-Safe Comparisons**

```typescript
// ❌ Problema: mid * mid puede causar overflow
if (mid * mid > num) ...

// ✅ Solución: reorganizar la comparación
if (mid > num / mid) ...
```

Esta técnica es crucial en binary search con productos o potencias.

### 📈 **Binary Search Optimization Layers**

1. **Algoritmo base**: O(log n) binary search
2. **Range optimization**: Reduce n a n/2
3. **Early returns**: Evita log n para casos triviales
4. **Overflow safety**: Mantiene correctness para todo el rango

### 🎯 **Aplicabilidad**

Este patrón se aplica a:

- **Integer square root**: Calcular √n sin funciones built-in
- **Perfect power detection**: Encontrar si n = k^p
- **Binary search with products**: Cualquier búsqueda que involucre multiplicación

## Casos de Prueba Estratégicos

### Edge Cases Críticos:

- **num = 1**: Único caso donde raíz = número
- **num = 2, 3**: Primeros no-cuadrados
- **num = 2147395600**: Cuadrado perfecto grande (46340²)
- **num = 2147483647**: Máximo 32-bit, no-cuadrado

### Validación de Optimizaciones:

- Early returns evitan binary search para 1, 2, 3
- Range optimization reduce iteraciones para números grandes
- Overflow protection permite manejar números cerca de 2³¹-1
