---
title: "infected"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "daily november"
createdAt: "2025-12-01"
---

# Infected - Análisis y Solución

## Descripción del Problema

Simular la propagación de un virus informático con las siguientes reglas:

1. Día 0: Se infecta la primera computadora
2. Cada día: El número de computadoras infectadas se duplica
3. Cada tercer día: Se aplica un parche después de la propagación que reduce 20% las infecciones (redondeo hacia arriba)

## Planteamiento y Solución

### Análisis del Problema

El problema se puede descomponer en tres aspectos clave:

1. **Propagación Exponencial**:

   - Inicio con 1 computadora en día 0
   - Duplicación diaria crea un crecimiento exponencial (2^n)
   - La propagación ocurre primero, antes que el parche

2. **Ciclo de Parches**:

   - Se aplica cada 3 días
   - Momento crítico: después de la propagación del día
   - Reducción del 20% del total infectado
   - Redondeo hacia arriba del número de computadoras parchadas

3. **Patrones Numéricos**:
   - Día 0: 1
   - Día 1: 2 (1 × 2)
   - Día 2: 4 (2 × 2)
   - Día 3: 6 (8 - ⌈8 × 0.2⌉) = (8 - 2)
   - Los números crecen rápidamente pero tienen reducciones periódicas

### Enfoque Utilizado

La solución requerirá:

1. **Función Principal**: Iterar día por día para mantener precisión
2. **Propagación**: Duplicar número de infectados cada día
3. **Parches**:
   - Verificar si es día de parche (día % 3 === 0)
   - Calcular y aplicar reducción del 20%
   - Usar Math.ceil() para redondeo hacia arriba
4. **Acumulación**: Mantener cuenta precisa considerando ambos efectos

La solución implementada utiliza un enfoque iterativo directo, pero existen varios abordajes posibles:

### 1. Enfoque Iterativo (Solución Implementada)

```javascript
function infected(days) {
  if (days < 0) return 0;
  let infectedCount = 1;
  for (let day = 1; day <= days; day++) {
    let newInfections = infectedCount * 2;
    if (day % 3 === 0) {
      const patched = Math.ceil(newInfections * 0.2);
      newInfections -= patched;
    }
    infectedCount = newInfections;
  }
  return infectedCount;
}
```

**Ventajas:**

- ✅ Fácil de entender y mantener
- ✅ Precisión garantizada
- ✅ Manejo directo de cada día

**Desventajas:**

- ❌ Complejidad temporal O(n)
- ❌ No aprovecha patrones matemáticos

### 2. Enfoque Matemático (Alternativa)

```javascript
function infectedMath(days) {
  if (days <= 0) return days === 0 ? 1 : 0;

  const fullCycles = Math.floor(days / 3);
  const remainingDays = days % 3;

  // Base exponencial por ciclo completo (3 días)
  // Día 1: x2
  // Día 2: x2
  // Día 3: x2 - 20%
  let total = 1;
  for (let i = 0; i < fullCycles; i++) {
    total = total * 8 * 0.8; // (2^3) * 0.8
  }

  // Días restantes
  for (let i = 0; i < remainingDays; i++) {
    total *= 2;
  }

  return Math.floor(total);
}
```

**Ventajas:**

- ✅ Más eficiente para días grandes
- ✅ Reconoce patrones cíclicos

**Desventajas:**

- ❌ Posibles errores de precisión
- ❌ Más complejo de entender
- ❌ Requiere validación exhaustiva

### 3. Enfoque de Memorización (Cache)

```javascript
const cache = new Map();

function infectedMemo(days) {
  if (days <= 0) return days === 0 ? 1 : 0;
  if (cache.has(days)) return cache.get(days);

  let result = infectedMemo(days - 1) * 2;
  if (days % 3 === 0) {
    result -= Math.ceil(result * 0.2);
  }

  cache.set(days, result);
  return result;
}
```

**Ventajas:**

- ✅ Cachea resultados para reutilización
- ✅ Útil para múltiples consultas
- ✅ Mantiene precisión

**Desventajas:**

- ❌ Uso adicional de memoria
- ❌ Overhead inicial
- ❌ Complejidad innecesaria para uso único

### Complejidad de la Solución Implementada

**Temporal: O(n)**

- Bucle principal: n iteraciones
- Operaciones por iteración: O(1)
  - Multiplicación: O(1)
  - Módulo: O(1)
  - Math.ceil(): O(1)

**Espacial: O(1)**

- Variables escalares: infectedCount, newInfections
- No hay estructuras de datos crecientes
- Memoria constante independiente de input

### Justificación de la Elección

Se eligió el enfoque iterativo por:

1. **Claridad**: El código refleja directamente el problema
2. **Mantenibilidad**: Fácil de modificar y debuggear
3. **Precisión**: Sin riesgos de errores de redondeo
4. **Simplicidad**: La complejidad O(n) es aceptable para el rango de inputs esperado

Los otros enfoques, aunque interesantes teóricamente, introducen complejidad innecesaria para los beneficios que aportan en este caso específico.

1. **Edge Cases**:

   - Día 0: retorna 1 (computadora inicial)
   - Día 1: retorna 2 (primera duplicación)
   - Días múltiplos de 3: considerar orden de operaciones (propagar → parchar)
   - Números grandes: posible desbordamiento en días avanzados

2. **Puntos de Atención**:
   - Orden de operaciones es crucial (primero propagar, luego parchar)
   - Redondeo siempre hacia arriba en el cálculo de parches
   - Crecimiento exponencial puede llevar a números muy grandes

[A completar con más detalles después de implementar la solución]