# Conceptos y Algoritmos - Apuntes de LeetCode

Este archivo contiene los conceptos fundamentales de programación y algoritmos que vamos encontrando al resolver problemas de LeetCode.

---

## Conceptos de Programación

### Bucles Anidados

**Definición:** Estructura de control que coloca un bucle dentro de otro bucle.

**Cuándo usar:**

- Comparar elementos de dos arrays
- Procesar matrices 2D
- Búsqueda exhaustiva en espacios bidimensionales

**Ejemplo del problema Fruits Into Baskets II:**

```typescript
for (let i = 0; i < fruits.length; i++) {
  // Bucle externo: cada fruta
  for (let j = 0; j < baskets.length; j++) {
    // Bucle interno: cada canasta
    // Comparar fruta[i] con basket[j]
  }
}
```

**Complejidad:** O(n×m) donde n y m son los tamaños de los arrays.

### Estructuras de Datos Auxiliares

**Definición:** Estructuras adicionales que ayudan a resolver un problema manteniendo información de estado.

**Ejemplo - Array de booleanos:**

```typescript
const basketUsed: boolean[] = new Array(baskets.length).fill(false);
```

**Propósito:** Rastrear qué elementos ya han sido procesados o utilizados.

**Ventajas:**

- Acceso en O(1) para verificar estado
- Fácil de implementar y entender
- Memoria eficiente para casos simples

### Variables de Control

**Definición:** Variables que controlan el flujo del algoritmo y mantienen el estado.

**Tipos comunes:**

- **Contadores:** `unplacedCount` para contar elementos no procesados
- **Banderas:** `fruitPlaced` para indicar si se completó una operación
- **Índices:** Variables para recorrer estructuras

---

## Algoritmos y Estrategias

### Algoritmo Greedy (Avaro)

**Definición:** Estrategia que toma la decisión óptima local en cada paso, sin considerar las consecuencias futuras.

**Características:**

- Toma decisiones irrevocables
- Busca la solución "más inmediata"
- No siempre garantiza la solución óptima global

**Ejemplo en Fruits Into Baskets II:**

- Siempre elegimos la primera canasta disponible que tenga capacidad suficiente
- No consideramos si esa canasta podría ser mejor para una fruta futura

**Cuándo es efectivo:**

- Cuando la decisión local óptima lleva a la global óptima
- Problemas de asignación con restricciones simples
- Cuando el costo de analizar todas las opciones es prohibitivo

### Simulación Paso a Paso

**Definición:** Implementar directamente las reglas del problema, reproduciéndolas en código.

**Ventajas:**

- Fácil de entender y debuggear
- Refleja exactamente el enunciado del problema
- Menos propenso a errores de lógica

**Proceso:**

1. Identificar cada regla del problema
2. Traducir cada regla a código
3. Mantener el estado necesario entre pasos
4. Ejecutar secuencialmente

---

## Análisis de Complejidad

### Complejidad Temporal O(n²)

**Cuándo aparece:**

- Bucles anidados sobre el mismo conjunto de datos
- Comparar cada elemento con todos los demás
- Algoritmos de búsqueda exhaustiva

**Ejemplo:**

```typescript
for (let i = 0; i < n; i++) {
  // O(n)
  for (let j = 0; j < n; j++) {
    // O(n)
    // Operación O(1)
  }
}
// Total: O(n²)
```

**Cuándo es aceptable:**

- Problemas con n ≤ 1000 aproximadamente
- Cuando la simplicidad es más importante que la eficiencia
- Como primera aproximación antes de optimizar

### Complejidad Espacial Adicional

**Definición:** Memoria extra utilizada además de la entrada.

**En nuestro ejemplo:**

- Array auxiliar: O(n) donde n es el número de canastas
- Variables adicionales: O(1)
- **Total:** O(n)

---

## Patrones de Resolución

### Patrón: Asignación con Restricciones

**Estructura común:**

1. Iterar sobre elementos a asignar
2. Para cada elemento, buscar destino válido
3. Marcar destino como usado
4. Contar asignaciones fallidas

**Aplicaciones:**

- Asignación de recursos limitados
- Problemas de matching
- Distribución con restricciones

### Patrón: Estado Persistente Entre Iteraciones

**Concepto:** Mantener información que afecta iteraciones futuras.

**Implementación:**

- Estructuras auxiliares que no se reinician
- Variables de estado que acumulan información
- Decisiones que afectan opciones futuras

---

## Reflexiones para Entrevistas

### Proceso de Análisis

1. **Entender completamente el problema**
2. **Identificar las restricciones**
3. **Elegir estructuras de datos apropiadas**
4. **Implementar simulación directa**
5. **Analizar complejidad**
6. **Considerar optimizaciones si es necesario**

### Preguntas de Seguimiento Típicas

- "¿Cómo optimizarías para arrays más grandes?"
- "¿Qué pasa si las restricciones cambian?"
- "¿Hay alguna estructura de datos que mejore la eficiencia?"

---

## Bit Manipulation y Potencias de Dos

### Propiedad Fundamental

Una potencia de dos en binario tiene exactamente un bit en 1. Ejemplos:

```
1  -> 0001
2  -> 0010
4  -> 0100
8  -> 1000
```

### Chequeo O(1) de Potencia de Dos

Usando la expresión: `n > 0 && (n & (n - 1)) === 0`

### ¿Por qué funciona?

Restar 1 a una potencia de dos invierte todos los bits desde el bit activo hacia la derecha. El AND resultante siempre es 0.

Ejemplo:

```
8 = 1000
7 = 0111
8 & 7 = 0000
```

### Alternativas

- División iterativa por 2 hasta llegar a 1 (O(log n))
- Logaritmos: `log2(n)` y comprobar entero (problemas de precisión)
- Contar bits en 1 (popcount == 1)

### Edge Cases

- n <= 0 → nunca potencia de dos
- n = 1 → true (2^0)
- Valores grandes cercanos a potencias: 2^k - 1 y 2^k + 1

### Aplicaciones Comunes

- Redimensionamiento de tablas hash
- Alineación de memoria
- Optimizaciones de máscaras de bits
- Fast modulo (x & (m - 1)) cuando m es potencia de dos

---

## Método del Número Mágico para Potencias de Primos

### Concepto Fundamental

**Para detectar potencias de un primo p**: Usar la mayor potencia de p que cabe en el rango de enteros.

**Principio matemático**: Si n es potencia de p, entonces p^max es divisible por n.

### Implementación del Patrón

```typescript
function isPowerOfPrime(n: number, prime: number, maxPower: number): boolean {
  if (n <= 0) return false;
  const magicNumber = Math.pow(prime, maxPower);
  return magicNumber % n === 0;
}
```

### Ejemplo: Power of Three

```typescript
function isPowerOfThree(n: number): boolean {
  if (n <= 0) return false;
  const maxPowerOfThree = Math.pow(3, 19); // 1162261467 para int32
  return maxPowerOfThree % n === 0;
}
```

**¿Por qué 3^19?** Porque 3^20 = 3,486,784,401 > 2^31-1 (límite int32)

### Factorización Prima - Clave del Éxito

**¿Por qué funciona?**

- 3^19 = 3×3×3×...×3 (19 factores de 3)
- Si n = 3^k (k ≤ 19), entonces 3^19 ÷ 3^k = 3^(19-k) = entero
- Si n tiene otros factores primos, la división no es exacta

**Ejemplos:**

```typescript
// Potencias válidas
1162261467 % 1 === 0   ✓ (3^0)
1162261467 % 3 === 0   ✓ (3^1)
1162261467 % 27 === 0  ✓ (3^3)

// Múltiplos NO potencias
1162261467 % 6 === 3   ✗ (6 = 2×3, tiene factor 2)
1162261467 % 15 === 12 ✗ (15 = 3×5, tiene factor 5)
```

### Ventajas del Método

| Aspecto              | Método Mágico | División Iterativa |
| -------------------- | ------------- | ------------------ |
| **Tiempo**           | O(1)          | O(log n)           |
| **Espacio**          | O(1)          | O(1)               |
| **Elegancia**        | ⭐⭐⭐⭐⭐    | ⭐⭐⭐             |
| **Comprensibilidad** | ⭐⭐⭐        | ⭐⭐⭐⭐⭐         |

### Aplicabilidad del Patrón

**Funciona para cualquier primo:**

- **Power of 2**: 2^30 para int32 (pero bit manipulation es mejor)
- **Power of 3**: 3^19 para int32 ✓
- **Power of 5**: 5^13 para int32
- **Power of 7**: 7^10 para int32

**NO funciona para compuestos:**

- Power of 4: Necesita verificación adicional (potencia de 2 + restricción)
- Power of 6: No es primo, no hay "número mágico" único

### Consideraciones de Implementación

**Cálculo de máxima potencia:**

```typescript
// Para encontrar la máxima potencia de p en rango
let maxPower = 0;
let value = 1;
while (value <= MAX_INT / prime) {
  value *= prime;
  maxPower++;
}
// maxPower es la mayor potencia que cabe
```

**Edge cases importantes:**

- n = 1: Siempre potencia (p^0 = 1) ✓
- n ≤ 0: Nunca potencia positiva ✗
- n = prime: Primera potencia no trivial ✓

---

## Optimización Matemática vs Claridad

### Cuándo Usar Cada Enfoque

**Método del número mágico:**

- ✅ Cuando la eficiencia O(1) es crítica
- ✅ Para mostrar conocimiento matemático profundo
- ✅ Responde a preguntas de seguimiento sobre optimización

**División iterativa:**

- ✅ Para explicación inicial e intuición
- ✅ Cuando la legibilidad es prioritaria
- ✅ Fácil de extender a otros casos

**Recursión:**

- ✅ Para demostrar comprensión de recursión
- ❌ Usa stack adicional O(log n)
- ❌ Menos eficiente en práctica

### Patrón de Entrevista Técnica

1. **Empezar simple**: División iterativa para mostrar comprensión
2. **Mencionar optimización**: "¿Podemos hacerlo sin bucles?"
3. **Explicar número mágico**: Demostrar conocimiento avanzado
4. **Comparar enfoques**: Mostrar análisis de trade-offs

---

_Este archivo se actualiza con cada problema resuelto para construir una base sólida de conocimientos._

---

## Sliding Window de Tamaño Fijo

### Concepto

Técnica para procesar subcadenas/subarrays contiguos de longitud constante k recorriendo la estructura una sola vez.

### Cuándo Usar

- Cuando solo importan ventanas de exactamente k elementos.
- Para detectar patrones consecutivos (ej: 3 dígitos iguales, suma fija, caracteres válidos).

### Patrón Básico (k = 3 en nuestro caso)

```typescript
for (let i = 0; i + 2 < s.length; i++) {
  // ventana: s[i], s[i+1], s[i+2]
}
```

### Razones de Eficiencia

- O(n) tiempo porque cada índice inicial se considera una vez.
- O(1) espacio adicional.

### Ejemplo (Largest 3-Same-Digit Number in String)

Condición de ventana válida: `s[i] === s[i+1] && s[i] === s[i+2]`.
Mantener la mejor (máxima lexicográfica) sin almacenar todas.

### Optimizaciones Posibles

- Early exit si se encuentra la ventana óptima máxima posible ("999").
- Evitar creación de substrings usando comparación directa de caracteres.

### Edge Cases

- Longitud < k → no hay ventana.
- Ventanas traslapadas con mismo patrón ("1111").
- Patrones múltiples con diferentes dígitos ("222333").

---
