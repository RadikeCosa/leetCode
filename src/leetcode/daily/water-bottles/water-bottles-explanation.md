---
name: water-bottles
difficulty: easy
category: daily
topics: [Simulation, Math, Greedy]
source: leetcode
series: daily
createdAt: 2025-11-29
---

# Explicación detallada: Water Bottles

## Análisis del problema

El problema consiste en maximizar el número de botellas de agua que podemos beber. Inicialmente tenemos `n` botellas llenas. Cada vez que bebemos una botella, obtenemos una botella vacía. Podemos intercambiar `k` botellas vacías por 1 botella llena nueva.

**Restricciones:**

- 1 ≤ numBottles ≤ 100
- 2 ≤ numExchange ≤ 100

**Observaciones clave:**

- Al beber una botella llena, obtenemos una botella vacía
- El intercambio convierte `k` botellas vacías en 1 botella llena
- Debemos continuar hasta que no tengamos suficientes botellas vacías para otro intercambio

## Ejemplos y casos límite

**Ejemplo 1:** numBottles = 9, numExchange = 3

- Inicial: bebemos 9 → 9 vacías
- Intercambio 1: 9 vacías → 3 llenas → bebemos 3 → 6 vacías restantes + 3 nuevas vacías = 6 vacías
- Intercambio 2: 6 vacías → 2 llenas → bebemos 2 → 0 vacías restantes + 2 nuevas vacías = 2 vacías
- No podemos intercambiar más (2 < 3)
- Total: 9 + 3 + 2 = 14... ¡Espera! Hay un error en mi cálculo manual.

Siguiendo la simulación correcta:

- Inicial: 9 botellas → bebemos 9 → 9 vacías
- Ronda 1: 9 vacías → 3 llenas (resto: 0 vacías) → bebemos 3 → 3 vacías
- Ronda 2: 3 vacías → 1 llena (resto: 0 vacías) → bebemos 1 → 1 vacía
- Total: 9 + 3 + 1 = 13 ✓

**Casos límite:**

- numBottles = 1, numExchange = 2: Solo bebemos la inicial = 1
- numBottles = 2, numExchange = 2: Bebemos 2 → 2 vacías → 1 llena → bebemos 1 = 3 total

## Enfoque y razonamiento

### Enfoque 1: Simulación (Implementado)

**Algoritmo paso a paso:**

1. Inicializamos `totalDrunk = numBottles` (bebemos todas las iniciales)
2. Inicializamos `emptyBottles = numBottles` (obtenemos vacías por las que bebimos)
3. Mientras `emptyBottles >= numExchange`:
   - Calculamos `newFullBottles = floor(emptyBottles / numExchange)`
   - Sumamos `newFullBottles` al total
   - Actualizamos `emptyBottles = (emptyBottles % numExchange) + newFullBottles`
4. Retornamos el total

**¿Por qué funciona la actualización de emptyBottles?**

- `emptyBottles % numExchange`: botellas vacías que sobran del intercambio
- `+ newFullBottles`: las nuevas botellas que acabamos de beber se vuelven vacías

### Enfoque 2: Fórmula matemática directa

Existe una fórmula matemática que resuelve el problema en O(1):

```typescript
function numWaterBottlesOptimized(
  numBottles: number,
  numExchange: number
): number {
  return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
}
```

**Derivación de la fórmula:**

- Cada intercambio efectivamente "consume" `numExchange - 1` botellas vacías
- ¿Por qué? Porque intercambiamos `k` vacías por 1 llena, pero esa llena se vuelve vacía al beberla
- Ganancia neta: `-k + 1 = -(k-1)` botellas vacías por intercambio
- Total de intercambios posibles: `floor((numBottles - 1) / (numExchange - 1))`
- Resultado: `numBottles + total_intercambios`

**¿Por qué (numBottles - 1)?**

- Necesitamos al menos 1 botella vacía que no se puede intercambiar al final
- Las otras `numBottles - 1` pueden participar en intercambios

## Complejidad

### Enfoque 1 (Simulación):

- **Tiempo:** O(log n) - cada iteración reduce significativamente las botellas vacías. En el peor caso, máximo log_k(n) iteraciones donde k = numExchange
- **Espacio:** O(1) - solo variables auxiliares constantes

### Enfoque 2 (Fórmula):

- **Tiempo:** O(1) - cálculo directo
- **Espacio:** O(1) - solo variables auxiliares

## Alternativas y patrones

### Comparación de enfoques:

| Aspecto              | Simulación | Fórmula Matemática |
| -------------------- | ---------- | ------------------ |
| Complejidad temporal | O(log n)   | O(1)               |
| Legibilidad          | ⭐⭐⭐⭐⭐ | ⭐⭐               |
| Intuitividad         | ⭐⭐⭐⭐⭐ | ⭐⭐               |
| Facilidad de derivar | ⭐⭐⭐⭐   | ⭐⭐               |
| Debugging            | ⭐⭐⭐⭐⭐ | ⭐⭐               |

### Recomendación:

Para este problema, **la simulación es preferible** porque:

1. La diferencia de performance es insignificante (constraints pequeños)
2. El código es autodocumentado y fácil de verificar
3. En entrevistas, muestra mejor el proceso de pensamiento
4. Menos propenso a errores de implementación

### Patrones relacionados:

- **Simulación paso a paso**: Útil cuando la lógica es clara pero la fórmula es compleja
- **Greedy approach**: Siempre hacemos el máximo número de intercambios posibles
- **Estado de transición**: Trackear múltiples variables que cambian en cada iteración
