---
name: water-bottles-ii
difficulty: medium
category: daily
topics: [Math, Simulation, Greedy]
source: leetcode
series: daily
createdAt: 2025-10-01
---

# LeetCode 3100: Water Bottles II

## Descripción del Problema

**Dificultad:** Medium  
**Temas:** Math, Simulation

[Enlace al problema](https://leetcode.com/problems/water-bottles-ii/)

### Enunciado

Se te dan dos enteros `numBottles` y `numExchange`.

`numBottles` representa el número de botellas de agua llenas que tienes inicialmente. En una operación, puedes realizar una de las siguientes operaciones:

• Beber cualquier número de botellas de agua llenas convirtiéndolas en botellas vacías.
• Intercambiar `numExchange` botellas vacías por una botella llena. Luego, incrementar `numExchange` en uno.

Nota que no puedes intercambiar múltiples lotes de botellas vacías por el mismo valor de `numExchange`. Por ejemplo, si `numBottles == 3` y `numExchange == 1`, no puedes intercambiar 3 botellas de agua vacías por 3 botellas llenas.

Retorna el número máximo de botellas de agua que puedes beber.

### Ejemplos

**Ejemplo 1:**

- Input: `numBottles = 13, numExchange = 6`
- Output: `15`
- Explicación: La tabla muestra el número de botellas llenas, botellas vacías, el valor de numExchange y el número de botellas bebidas.

**Ejemplo 2:**

- Input: `numBottles = 10, numExchange = 3`
- Output: `13`
- Explicación: La tabla muestra el número de botellas llenas, botellas vacías, el valor de numExchange y el número de botellas bebidas.

### Restricciones

- `1 <= numBottles <= 100`
- `1 <= numExchange <= 100`

## Análisis del Problema

### Diferencia Clave con Water Bottles I

Este problema es una evolución del clásico "Water Bottles" donde la **clave diferenciadora** es que `numExchange` se incrementa después de cada intercambio, haciendo que cada intercambio subsecuente sea progresivamente más costoso.

### Casos Edge

1. **`numBottles = 1, numExchange = 1`:**

   - Inicial: 1 llena → 1 vacía
   - Intercambio: 1 vacía = 1 requerida → 1 llena → Total: 2

2. **`numBottles = 5, numExchange = 10`:**
   - Inicial: 5 llenas → 5 vacías
   - No hay intercambios posibles (5 < 10) → Total: 5

### Patrones Identificados

- **Simulación step-by-step:** El incremento progresivo requiere simulación directa
- **Greedy approach:** Siempre intercambia cuando sea posible
- **Estado tracking:** Mantener contadores de botellas vacías y total bebidas

## Aproximación y Algoritmo

### Estrategia: Simulación Directa

1. **Inicialización:** Beber todas las botellas iniciales
2. **Loop de intercambios:** Mientras tengas suficientes botellas vacías
3. **Estado update:** Actualizar contadores y costo de intercambio

### Pasos del Algoritmo

```typescript
1. totalDrunk = numBottles    // Beber todas las iniciales
2. emptyBottles = numBottles  // Se convierten en vacías
3. while (emptyBottles >= numExchange):
   a. emptyBottles -= numExchange  // Usar botellas para intercambio
   b. totalDrunk++                 // Beber la nueva botella
   c. emptyBottles++               // Nueva botella se vuelve vacía
   d. numExchange++                // Incrementar costo de intercambio
4. return totalDrunk
```

### Por qué funciona

- **Greedy óptimo:** No hay beneficio en esperar para intercambiar
- **Progresión natural:** El incremento de `numExchange` eventualmente detiene el loop
- **Estado consistente:** Cada iteración mantiene invariantes correctas

## Análisis de Complejidad

- **Complejidad Temporal:** O(log numBottles)
  - En cada iteración, `numExchange` incrementa, limitando el número total de iteraciones
  - La progresión aritmética de costos hace que las iteraciones se agoten logarítmicamente
- **Complejidad Espacial:** O(1)
  - Solo se usan variables auxiliares constantes
  - No depende del tamaño de entrada

## Consideraciones Adicionales

### Optimizaciones Consideradas

1. **Fórmula matemática directa:** Técnicamente posible pero compleja
2. **Micro-optimizaciones:** No justificadas para constraints del problema
3. **Early termination:** Ya implícita en la condición del while

### Por qué la simulación es óptima

- **Claridad:** Cada paso es evidente y trazeable
- **Eficiencia:** O(log n) es suficientemente rápido
- **Mantenibilidad:** Fácil de debuggear y modificar

## Problemas Relacionados

- [Water Bottles](https://leetcode.com/problems/water-bottles/) - Easy

## Conceptos Clave

- **Simulación directa vs fórmulas matemáticas**
- **Algoritmos greedy con restricciones dinámicas**
- **Tracking de estado en problemas iterativos**
- **Análisis de complejidad en loops con progresión aritmética**
