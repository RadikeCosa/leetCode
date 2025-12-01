---
title: "smallest-number-with-all-set-bits"
difficulty: "easy"
topics:
  - Bit Manipulation
  - Math
  - Powers of Two
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Smallest Number With All Set Bits

## Análisis del Problema

Este problema requiere encontrar el número más pequeño mayor o igual a `n` que tenga todos sus bits set en su representación binaria (es decir, que consista únicamente de 1s en binario).

### Requisitos del Problema

- **Entrada**: Un número entero positivo `n` (1 ≤ n ≤ 1000)
- **Salida**: El número más pequeño `x` ≥ `n` donde todos los bits de `x` están set (representación binaria de solo 1s)
- **Restricciones**: Los números con todos los bits set son de la forma 2^k - 1

### Ejemplos de Entrada/Salida

1. `n = 5` → `7`

   - 7 en binario: `111` (todos bits set)
   - Es el número más pequeño ≥ 5 con esta propiedad

2. `n = 10` → `15`

   - 15 en binario: `1111` (todos bits set)
   - 7 sería menor que 10, así que necesitamos el siguiente

3. `n = 3` → `3`
   - 3 en binario: `11` (todos bits set)
   - 3 ya cumple la condición

### Desafíos Identificados

- Entender que los números con todos los bits set son potencias de 2 menos 1: 2^1-1=1, 2^2-1=3, 2^3-1=7, 2^4-1=15, etc.
- Encontrar eficientemente la potencia de 2 más pequeña mayor que n
- Manejar el caso donde n ya es un número con todos los bits set

### Enfoque Inicial

Para resolver este problema, necesito:

1. **Identificar el patrón**: Los números objetivo son 2^k - 1
2. **Encontrar la potencia correcta**: Necesito la k más pequeña tal que 2^k - 1 ≥ n
3. **Calcular eficientemente**: Usar operaciones matemáticas o bit manipulation
4. **Manejar casos especiales**: Cuando n ya es 2^k - 1

### Posibles Soluciones

1. **Enfoque matemático**: Usar logaritmos para encontrar la potencia de 2
2. **Enfoque iterativo**: Probar potencias de 2 hasta encontrar la correcta
3. **Enfoque bit manipulation**: Usar operaciones de bits para construir el número

**¿Te parece correcto este análisis inicial? ¿Qué enfoque te gustaría explorar primero para la implementación?**

## Solución Implementada

La solución utiliza matemáticas y manipulación de bits para encontrar eficientemente el número objetivo.

### Código Principal

```typescript
export function smallestNumber(n: number): number {
  // Encontrar el exponente k tal que 2^k - 1 >= n
  // Esto es equivalente a encontrar el techo de log2(n+1)
  const k = Math.ceil(Math.log2(n + 1));

  // Calcular 2^k - 1, que es el número con todos los bits set
  return (1 << k) - 1;
}
```

### Lógica de la Solución

1. **Comprensión del problema**: Los números con todos los bits set son 2^k - 1
2. **Encontrar el exponente correcto**: Necesitamos el k más pequeño donde 2^k - 1 ≥ n
3. **Cálculo matemático**: 2^k ≥ n + 1, por lo tanto k = ceil(log2(n + 1))
4. **Construcción del resultado**: Usar desplazamiento de bits (1 << k) - 1

### Ejemplo de Ejecución

Para n = 5:

- n + 1 = 6
- log2(6) ≈ 2.58
- ceil(2.58) = 3
- 2^3 - 1 = 8 - 1 = 7 ✓

Para n = 3:

- n + 1 = 4
- log2(4) = 2
- ceil(2) = 2
- 2^2 - 1 = 4 - 1 = 3 ✓

## Complejidad Temporal y Espacial

### Complejidad Temporal: O(1)

- **Operaciones constantes**: `Math.log2()`, `Math.ceil()`, y desplazamiento de bits son O(1)
- **Independiente del tamaño de n**: Para n hasta 1000, todas las operaciones son eficientes
- **Ventaja**: Solución óptima que no requiere bucles o iteraciones

### Complejidad Espacial: O(1)

- **Variables constantes**: Solo se usan unas pocas variables locales
- **Sin estructuras adicionales**: No se crean arrays, objetos o buffers
- **Eficiencia máxima**: Uso mínimo de memoria

### Análisis de Rendimiento

**Ventajas:**

- **Constante**: O(1) complejidad hace que sea extremadamente rápido
- **Preciso**: Usa funciones matemáticas estándar de JavaScript
- **Simple**: Implementación concisa y fácil de entender

**Limitaciones:**

- **Dependiente de Math**: Confía en la precisión de `Math.log2()` (generalmente buena para enteros)
- **Rango limitado**: Funciona bien para las constraints dadas (n ≤ 1000)

## Casos de Prueba

La suite de tests cubre los escenarios principales:

1. **Número que necesita el siguiente power**: n = 5 → 7
2. **Número que necesita un power mayor**: n = 10 → 15
3. **Número que ya cumple la condición**: n = 3 → 3

### Casos Adicionales Considerados

- **Límite inferior**: n = 1 debería retornar 1 (2^1 - 1 = 1)
- **Límite superior**: n = 1000 debería funcionar correctamente
- **Potencias de 2**: n = 4 debería retornar 7 (siguiente después de 3)

## Aprendizajes y Notas

### Conceptos Técnicos Aprendidos

1. **Números con todos los bits set**: Reconocer el patrón 2^k - 1
2. **Logaritmos para potencias**: Usar log2 para encontrar exponentes
3. **Desplazamiento de bits**: `1 << k` como alternativa a `Math.pow(2, k)`
4. **Math.ceil()**: Redondeo hacia arriba para encontrar el siguiente entero

### Patrones de JavaScript

- **Funciones Math**: `Math.log2()`, `Math.ceil()`
- **Operadores de bits**: Desplazamiento a la izquierda `<<`
- **Cálculos matemáticos**: Combinación de operaciones para resultados eficientes

### Decisiones de Diseño

- **Enfoque matemático**: Elegimos cálculo directo sobre iteración
- **Precisión**: `Math.log2()` es suficientemente preciso para enteros hasta 1000
- **Legibilidad**: Código conciso pero bien comentado

### Optimizaciones Posibles

Aunque la solución actual es O(1), podríamos considerar:

1. **Tabla de lookup**: Para n pequeño, usar array precomputado
2. **Bit manipulation pura**: Usar operaciones de bits sin Math.log2()
3. **Validación de entrada**: Checks para asegurar n > 0

Esta solución demuestra un enfoque elegante y eficiente para un problema aparentemente simple pero con profundidad matemática.

## Explicación Didáctica: Operador << y Matemática de la Función

### ¿Qué es el operador `<<` (desplazamiento de bits a la izquierda)?

El operador `<<` es un **operador de desplazamiento de bits**. Toma un número en binario y "desplaza" todos sus bits hacia la izquierda por la cantidad especificada de posiciones.

#### Ejemplo básico:

```
5 en binario:  101
5 << 1:       1010  (desplazar 1 posición) = 10 en decimal
5 << 2:      10100  (desplazar 2 posiciones) = 20 en decimal
```

**Regla matemática**: `x << k` es equivalente a `x * 2^k`

#### ¿Por qué funciona esto?

Cada desplazamiento a la izquierda multiplica por 2:

- `x << 1` = `x * 2^1` = `x * 2`
- `x << 2` = `x * 2^2` = `x * 4`
- `x << 3` = `x * 2^3` = `x * 8`

#### En nuestra función:

```typescript
return (1 << k) - 1;
```

Si `k = 3`:

- `1 << 3` = `1 * 2^3` = `8`
- `8 - 1` = `7` (que es `111` en binario)

### Matemática Completa de la Solución

#### El problema:

Encontrar el número más pequeño `x ≥ n` donde `x` tiene todos los bits set (es decir, `x = 2^k - 1`).

#### Desarrollo matemático paso a paso:

1. **Los números objetivo son**: `2^1 - 1 = 1`, `2^2 - 1 = 3`, `2^3 - 1 = 7`, `2^4 - 1 = 15`, etc.

2. **Necesitamos**: `2^k - 1 ≥ n`

3. **Despejando k**: `2^k ≥ n + 1`

4. **Aplicando logaritmo**: `k ≥ log2(n + 1)`

5. **Como k debe ser entero**: `k = ceil(log2(n + 1))`

#### ¿Por qué `n + 1` y no `n`?

**Ejemplo problemático**: n = 4

- Si usáramos `log2(n)`: `log2(4) = 2`, `2^2 - 1 = 3`
- Pero `3 < 4` ❌ INCORRECTO

- Usando `log2(n + 1)`: `log2(5) ≈ 2.32`, `ceil(2.32) = 3`, `2^3 - 1 = 7`
- `7 ≥ 4` ✅ CORRECTO

**La desigualdad requiere el `+1`**: `2^k - 1 ≥ n` ⇒ `2^k ≥ n + 1`

### Ejemplos Detallados

#### Ejemplo 1: n = 5

```
Paso 1: n + 1 = 6
Paso 2: log2(6) ≈ 2.584
Paso 3: ceil(2.584) = 3
Paso 4: 2^3 = 8
Paso 5: 8 - 1 = 7
Resultado: 7 (binario: 111)
```

#### Ejemplo 2: n = 3

```
Paso 1: n + 1 = 4
Paso 2: log2(4) = 2
Paso 3: ceil(2) = 2
Paso 4: 2^2 = 4
Paso 5: 4 - 1 = 3
Resultado: 3 (binario: 11) - Ya cumplía la condición
```

#### Ejemplo 3: n = 10

```
Paso 1: n + 1 = 11
Paso 2: log2(11) ≈ 3.459
Paso 3: ceil(3.459) = 4
Paso 4: 2^4 = 16
Paso 5: 16 - 1 = 15
Resultado: 15 (binario: 1111)
```

### Representación Binaria Visual

```
n=3:  011 (3)  → Ya es 011 (todos bits set)
n=5:  101 (5)  → Necesita 111 (7)
n=10: 1010 (10) → Necesita 1111 (15)
```

### Alternativas al operador `<<`

Si no usáramos desplazamiento de bits, podríamos usar:

```typescript
return Math.pow(2, k) - 1; // Menos eficiente
// o
return (1 << k) - 1; // Más eficiente y directo
```

### Ventajas del operador `<<`

1. **Eficiencia**: Operación directa a nivel de bits, muy rápida
2. **Precisión**: No hay errores de punto flotante como con `Math.pow()`
3. **Idiomático**: Común en problemas de bit manipulation
4. **Constante O(1)**: No depende del tamaño del exponente

Esta explicación completa muestra cómo un problema aparentemente simple requiere un entendimiento profundo de matemáticas discretas, logaritmos y manipulación de bits.