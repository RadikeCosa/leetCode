---
title: "100-doors"
difficulty: "easy"
topics:
  - math
  - simulation
source: "freecodecamp"
series: "rosetta-code"
category: "freecodecamp"
createdAt: "2025-10-20"
---

# 100 Doors - Explicación

## Descripción del Problema

Este es un problema clásico de matemáticas discretas que demuestra la diferencia entre **simulación algorítmica** y **optimización matemática**. Es uno de los problemas más elegantes para entender cómo un insight matemático puede transformar un algoritmo de O(n²) a O(√n).

**Enunciado:**

- **n puertas** en fila, todas inicialmente **cerradas**
- **n pasadas** por las puertas con reglas específicas:
  - **Pasada 1**: Visitar cada puerta (1, 2, 3, ..., n) y **toggle**
  - **Pasada 2**: Visitar cada 2da puerta (2, 4, 6, ...) y **toggle**
  - **Pasada 3**: Visitar cada 3ra puerta (3, 6, 9, ...) y **toggle**
  - **Pasada k**: Visitar múltiplos de k (k, 2k, 3k, ...) y **toggle**
  - **Pasada n**: Solo visitar puerta n y **toggle**

**Objetivo:** Determinar qué puertas están **abiertas** al final y retornar sus números en un array.

**Operación toggle:** Si cerrada → abierta, Si abierta → cerrada

### Ejemplo de Simulación con 10 Puertas

```text
Estado inicial: [C, C, C, C, C, C, C, C, C, C] (todas cerradas)

Pasada 1 (cada puerta):     [A, A, A, A, A, A, A, A, A, A]
Pasada 2 (cada 2da):        [A, C, A, C, A, C, A, C, A, C]
Pasada 3 (cada 3ra):        [A, C, C, C, A, A, A, C, C, C]
Pasada 4 (cada 4ta):        [A, C, C, A, A, A, A, A, C, C]
Pasada 5 (cada 5ta):        [A, C, C, A, C, A, A, A, C, A]
...
Pasada 10 (cada 10ma):      [A, C, C, A, C, A, A, A, C, C]

Resultado: Puertas abiertas = [1, 4, 9]
```

Pasada 2 (cada 2da): [A, C, A, C, A]
Pasada 3 (cada 3ra): [A, C, C, C, A]
Pasada 4 (cada 4ta): [A, C, C, A, A]
Pasada 5 (cada 5ta): [A, C, C, A, C]

Resultado: Puertas abiertas = [1, 4]

````

## Análisis de Casos de Prueba

Analicemos cada caso para descubrir el patrón matemático subyacente:

### Caso 1: `getFinalOpenedDoors(0)` → `[]`

**Sin puertas:**

- Sin puertas, sin resultado
- **Resultado**: Array vacío []

### Caso 2: `getFinalOpenedDoors(1)` → `[1]`

**Simulación:**

- **Pasada 1**: Puerta 1 toggle → Abierta
- **Resultado**: [1]

**Análisis matemático:**

- Puerta 1 tiene divisores: [1]
- 1 divisor (impar) → 1 toggle → **Abierta**

### Caso 3: `getFinalOpenedDoors(10)` → `[1, 4, 9]`

**Patrón observado:**

- Puerta 1: Divisores [1] → 1 toggle → **Abierta**
- Puerta 2: Divisores [1, 2] → 2 toggles → Cerrada
- Puerta 3: Divisores [1, 3] → 2 toggles → Cerrada
- Puerta 4: Divisores [1, 2, 4] → 3 toggles → **Abierta**
- Puerta 5: Divisores [1, 5] → 2 toggles → Cerrada
- Puerta 6: Divisores [1, 2, 3, 6] → 4 toggles → Cerrada
- Puerta 7: Divisores [1, 7] → 2 toggles → Cerrada
- Puerta 8: Divisores [1, 2, 4, 8] → 4 toggles → Cerrada
- Puerta 9: Divisores [1, 3, 9] → 3 toggles → **Abierta**
- Puerta 10: Divisores [1, 2, 5, 10] → 4 toggles → Cerrada

**¡Insight clave!** Solo las puertas 1, 4, 9 quedan abiertas = **cuadrados perfectos**

### Caso 4: `getFinalOpenedDoors(25)` → `[1, 4, 9, 16, 25]`

**Confirmación del patrón:**

- 1² = 1 ✓
- 2² = 4 ✓
- 3² = 9 ✓
- 4² = 16 ✓
- 5² = 25 ✓

### Caso 5: `getFinalOpenedDoors(100)` → `[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`

**Patrón completo:**

- Exactamente **10 cuadrados perfectos** desde 1² hasta 10²
- √100 = 10, confirmando que hay √n cuadrados perfectos hasta n

### Descubrimiento Matemático Fundamental

**¿Por qué solo los cuadrados perfectos quedan abiertos?**

1. **Una puerta se toggle tantas veces como divisores tenga su número**
2. **Divisores normalmente vienen en pares**: Si d divide a n, entonces n/d también divide a n
3. **Excepción**: Cuando d = n/d, es decir, d² = n (cuadrados perfectos)
4. **Cuadrados perfectos tienen divisores impares** → toggles impares → **Abiertos**
5. **Números normales tienen divisores pares** → toggles pares → **Cerrados**

**Ejemplo visual para n=16:**

- Divisores: 1, 2, 4, 8, 16
- Pares: (1,16), (2,8), más 4 (porque 4×4=16)
- Total: 5 divisores (impar) → 5 toggles → **Abierto**

## Implementaciones y Metodología

### Enfoque Educativo: Dos Versiones Complementarias

Para fines **pedagógicos**, se implementaron **dos versiones** del algoritmo que demuestran la evolución del pensamiento algorítmico:

#### 🔴 **Versión 1: Simulación Directa - O(n²)**

```javascript
function getFinalOpenedDoorsSimulation(numDoors) {
  // Edge case: sin puertas
  if (numDoors === 0) return [];

  // Crear array de puertas: índice 0 no se usa, índices 1-n representan las puertas
  const doors = new Array(numDoors + 1).fill(false);

  // Realizar las n pasadas
  for (let pass = 1; pass <= numDoors; pass++) {
    // En la pasada k, visitar múltiplos de k
    for (let door = pass; door <= numDoors; door += pass) {
      doors[door] = !doors[door]; // toggle
    }
  }

  // Recopilar solo las puertas abiertas
  const openDoors = [];
  for (let i = 1; i <= numDoors; i++) {
    if (doors[i]) openDoors.push(i);
  }

  return openDoors;
}
````

**Características de la Simulación:**

1. **Claridad conceptual**: Sigue exactamente el enunciado del problema
2. **Estructura de datos**: Array booleano donde `doors[i]` representa estado de puerta i
3. **Doble bucle anidado**:
   - Bucle externo: las n pasadas
   - Bucle interno: múltiplos de cada pasada
4. **Operación toggle**: `doors[door] = !doors[door]` cambia estado
5. **Recolección final**: Recorre array para encontrar puertas abiertas

**Complejidad temporal**: O(n²) - porque cada pasada k visita aproximadamente n/k puertas

#### 🟢 **Versión 2: Insight Matemático - O(√n)**

```javascript
function getFinalOpenedDoorsOptimized(numDoors) {
  if (numDoors === 0) return [];

  const openDoors = [];
  let i = 1;
  let perfectSquare = i * i;

  // Generar cuadrados perfectos hasta numDoors
  while (perfectSquare <= numDoors) {
    openDoors.push(perfectSquare);
    i++;
    perfectSquare = i * i;
  }

  return openDoors;
}
```

**Características de la Optimización:**

1. **Insight matemático**: Solo cuadrados perfectos quedan abiertos
2. **Generación directa**: No simula, calcula directamente 1², 2², 3²...
3. **Bucle simple**: Solo hasta √numDoors iteraciones
4. **Eficiencia espacial**: No requiere array auxiliar de puertas

**Complejidad temporal**: O(√n) - solo √n cuadrados perfectos que calcular

### Comparación de Enfoques

| Aspecto           | Simulación O(n²)   | Optimización O(√n)         |
|

----------- | ------------------ | -------------------------- |
| **Claridad**      | ⭐⭐⭐⭐⭐         | ⭐⭐⭐                     |
| **Eficiencia**    | ⭐⭐               | ⭐⭐⭐⭐⭐                 |
| **Memoria**       | O(n)               | O(1)                       |
| **Educativo**     | Muestra el proceso | Muestra el insight         |
| **Mantenimiento** | Fácil de entender  | Requiere conocer el patrón |

## Estrategia de Testing

### Arquitectura de Tests Multinivel

Los tests están diseñados con una **metodología de validación cruzada** para garantizar que ambas implementaciones sean correctas:

#### 🧪 **Estructura de Tests con Vitest**

```javascript
describe("100 Doors", () => {
  // Casos de prueba compartidos - DRY principle
  const testCases = [
    { input: 0, expected: [] },
    { input: 1, expected: [1] },
    { input: 10, expected: [1, 4, 9] },
    { input: 25, expected: [1, 4, 9, 16, 25] },
    { input: 100, expected: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] },
  ];

  describe("Función Principal (Optimizada)", () => {
    /* tests */
  });
  describe("Versión Simulación O(n²)", () => {
    /* tests */
  });
  describe("Versión Optimizada O(√n)", () => {
    /* tests */
  });
  describe("Comparación de Ambas Implementaciones", () => {
    /* tests */
  });
});
```

#### 📊 **Metodologías de Testing Aplicadas**

**1. Patrón de Casos de Prueba Compartidos:**

```javascript
const testCases = [
  { input: 0, expected: [] }, // Edge case
  { input: 1, expected: [1] }, // Caso mínimo
  { input: 10, expected: [1, 4, 9] }, // Caso pequeño
  { input: 25, expected: [1, 4, 9, 16, 25] }, // Caso mediano
  { input: 100, expected: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] }, // Caso clásico
];
```

**Beneficios del patrón:**

- **DRY (Don't Repeat Yourself)**: Un solo lugar para definir casos
- **Consistencia**: Mismos casos para todas las implementaciones
- **Mantenimiento**: Fácil agregar/modificar casos
- **Escalabilidad**: Agregar nuevas implementaciones sin duplicar tests

**2. Testing por Grupos Funcionales:**

**Grupo 1: Función Principal**

```javascript
describe("Función Principal (Optimizada)", () => {
  testCases.forEach(({ input, expected }) => {
    it(`should return ${JSON.stringify(
      expected
    )} for getFinalOpenedDoors(${input})`, () => {
      expect(getFinalOpenedDoors(input)).toEqual(expected);
    });
  });
});
```

**Grupo 2: Implementación Educativa**

```javascript
describe("Versión Simulación O(n²)", () => {
  // Tests específicos para verificar que la simulación funciona
});
```

**Grupo 3: Implementación Optimizada**

```javascript
describe("Versión Optimizada O(√n)", () => {
  // Tests específicos para verificar que la optimización funciona
});
```

**3. Validación Cruzada (Cross-Validation):**

```javascript
describe("Comparación de Ambas Implementaciones", () => {
  it("both implementations should produce identical results for all test cases", () => {
    testCases.forEach(({ input }) => {
      const simulationResult = getFinalOpenedDoorsSimulation(input);
      const optimizedResult = getFinalOpenedDoorsOptimized(input);
      expect(simulationResult).toEqual(optimizedResult);
    });
  });
});
```

**Importancia de la validación cruzada:**

- **Verificación de correctitud**: Si ambas dan mismo resultado, ambas están bien
- **Confianza en optimización**: Prueba que la optimización mantiene la lógica
- **Detección de regresiones**: Si difieren, hay un bug
- **Documentación viva**: Los tests demuestran equivalencia

#### 🎯 **Selección Estratégica de Casos de Test**

**Edge Cases:**

- `numDoors = 0`: Sin puertas → `[]` (caso límite)

**Casos Básicos:**

- `numDoors = 1`: Una puerta → `[1]` (caso mínimo válido)

**Casos Representativos:**

- `numDoors = 10`: Muestra patrón → `[1, 4, 9]` (cuadrados perfectos hasta √10)
- `numDoors = 25`: Confirma patrón → `[1, 4, 9, 16, 25]` (√25 = 5 cuadrados exactos)

**Caso Clásico:**

- `numDoors = 100`: Problema original → 10 cuadrados perfectos

#### ⚡ **Técnicas de Testing Dinámico**

**1. Generación Dinámica de Descripciones:**

```javascript
it(`should return ${JSON.stringify(
  expected
)} for getFinalOpenedDoors(${input})`, () => {
  // Test description se genera automáticamente
});
```

**2. Uso de `forEach` para Escalabilidad:**

```javascript
testCases.forEach(({ input, expected }) => {
  // Cada caso genera un test independiente
});
```

**3. Assertions Precisas:**

- `toEqual()`: Comparación profunda de arrays
- `JSON.stringify()`: Descripción legible en caso de fallo

### Beneficios del Enfoque de Testing

1. **Cobertura completa**: Ambas implementaciones probadas exhaustivamente
2. **Confianza en refactoring**: Validación cruzada garantiza equivalencia
3. **Documentación ejecutable**: Tests demuestran comportamiento esperado
4. **Mantenimiento simplificado**: Casos centralizados, fácil modificar
5. **Escalabilidad**: Fácil agregar nuevas implementaciones o casos

## Notas de Implementación

### Decisiones de Diseño

**1. Gestión de Índices en Simulación:**

```javascript
const doors = new Array(numDoors + 1).fill(false);
// Índice 0 no se usa, índices 1-n representan puertas 1-n
```

**Razón:** Mantener correspondencia directa entre número de puerta e índice del array, evitando confusión con conversiones índice-1.

**2. Patrón de Incremento en Optimización:**

```javascript
let i = 1;
let perfectSquare = i * i;
while (perfectSquare <= numDoors) {
  openDoors.push(perfectSquare);
  i++;
  perfectSquare = i * i; // Recalcular en cada iteración
}
```

**Razón:** Más legible que `Math.pow(i, 2)` y evita problemas de precisión floating-point para números grandes.

**3. Exports Múltiples:**

```javascript
export { getFinalOpenedDoorsSimulation, getFinalOpenedDoorsOptimized };
export default getFinalOpenedDoors;
```

**Razón:** Permite testing granular de cada implementación mientras mantiene una función principal clara.

### Consideraciones de Rendimiento

**Simulación O(n²):**

- **Tiempo**: ~n²/2 operaciones toggle
- **Espacio**: O(n) para array de puertas
- **Práctico para**: n ≤ 10,000

**Optimización O(√n):**

- **Tiempo**: ~√n operaciones aritméticas
- **Espacio**: O(1) auxiliar
- **Práctico para**: cualquier n razonable

### Patrones Algorítmicos Identificados

1. **Simulación vs Insight Matemático**: Problema clásico que muestra cómo el conocimiento del dominio puede transformar completamente la solución
2. **Divisores y Paridad**: Concepto fundamental en teoría de números
3. **Cuadrados Perfectos**: Números con propiedades especiales útiles en múltiples contextos
4. **Optimización Prematura vs Claridad**: Balance entre rendimiento y comprensibilidad

## Análisis de Complejidad

### Complejidad Temporal

| Implementación | Mejor Caso | Caso Promedio | Peor Caso |
| -------------- | ---------- | ------------- | --------- |
| **Simulación** | O(n²)      | O(n²)         | O(n²)     |
| **Optimizada** | O(√n)      | O(√n)         | O(√n)     |

### Complejidad Espacial

| Implementación | Espacio Auxiliar | Espacio Total |
| -------------- | ---------------- | ------------- |
| **Simulación** | O(n)             | O(n)          |
| **Optimizada** | O(1)             | O(√n)         |

### Comparación Práctica

Para **n = 10,000**:

- **Simulación**: ~50M operaciones, ~10KB memoria
- **Optimizada**: ~100 operaciones, ~400 bytes memoria

**Mejora**: **500,000x** más rápida, **25x** menos memoria

## Conclusiones y Aprendizajes

### Insights Matemáticos

1. **Divisores determinan comportamiento**: Cada puerta se toggle tantas veces como divisores tenga su número
2. **Cuadrados perfectos son especiales**: Únicos números con cantidad impar de divisores
3. **Patrón universal**: Este insight se aplica a muchos problemas similares

### Lecciones de Ingeniería

1. **TDD facilita optimización**: Tests permiten refactoring seguro
2. **Claridad antes que optimización**: Implementación obvia primero, optimizar después
3. **Documentación de decisiones**: Explicar el "por qué" no solo el "qué"
4. **Testing multinivel**: Validar tanto funcionamiento como equivalencia

### Aplicaciones del Patrón

Este patrón (simulación → insight matemático) aparece en:

- **Algoritmos de criba**: Criba de Eratóstenes para números primos
- **Problemas de conteo**: Contar divisores, factores, etc.
- **Simulaciones físicas**: Cuando hay una fórmula matemática subyacente
- **Optimización de juegos**: Calcular estados finales sin simular

**La lección fundamental**: Siempre buscar el patrón matemático detrás de la simulación.## Enfoque de Solución

## Complejidad

### Complejidad Temporal

### Complejidad Espacial

## Conceptos Clave

## Notas de Implementación

```

```