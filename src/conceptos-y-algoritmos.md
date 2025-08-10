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

_Este archivo se actualiza con cada problema resuelto para construir una base sólida de conocimientos._
