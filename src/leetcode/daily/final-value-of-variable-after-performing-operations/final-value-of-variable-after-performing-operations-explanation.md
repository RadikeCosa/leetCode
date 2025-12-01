---
name: final-value-of-variable-after-performing-operations
difficulty: easy
category: daily
topics: [Simulation, Increment, Decrement, State Machine]
source: leetcode
series: daily
createdAt: 2025-1-20
---

# Final Value of Variable After Performing Operations - Explicación

## Descripción del Problema

Este es un problema de **simulación** que modela un lenguaje de programación simplificado con solo cuatro operaciones sobre una variable X. Es un excelente ejemplo para entender la diferencia entre **pre/post incremento en contexto de valores finales** vs **valores intermedios**.

**Enunciado:**

- **Variable inicial**: X = 0
- **Operaciones disponibles**:
  - `++X` y `X++`: incrementan X en 1
  - `--X` y `X--`: decrementan X en 1
- **Input**: Array de strings con operaciones a ejecutar secuencialmente
- **Output**: Valor final de X después de todas las operaciones

**Insight clave**: Para el **valor final**, no importa si es pre-incremento (`++X`) o post-incremento (`X++`). Ambos aumentan X en 1. La diferencia solo importa cuando usas el **valor de retorno** de la operación.

### Ejemplo Visual de Simulación

```text
Input: ["--X", "X++", "X++"]

Estado inicial: X = 0
Operación 1: "--X" → X = 0 - 1 = -1
Operación 2: "X++" → X = -1 + 1 = 0
Operación 3: "X++" → X = 0 + 1 = 1

Resultado final: X = 1
```

**Patrón matemático**: El resultado es simplemente `número_de_incrementos - número_de_decrementos`.

## Análisis de Casos de Prueba

### Caso 1: Ejemplo LeetCode 1 - `["--X","X++","X++"]` → `1`

**Simulación paso a paso:**

1. **Estado inicial**: X = 0
2. **"--X"**: Decremento → X = 0 - 1 = -1
3. **"X++"**: Incremento → X = -1 + 1 = 0
4. **"X++"**: Incremento → X = 0 + 1 = 1

**Análisis matemático:**

- Operaciones de incremento: 2 (`X++`, `X++`)
- Operaciones de decremento: 1 (`--X`)
- Resultado: 2 - 1 = 1 ✓

### Caso 2: Ejemplo LeetCode 2 - `["++X","++X","X++"]` → `3`

**Simulación paso a paso:**

1. **Estado inicial**: X = 0
2. **"++X"**: Incremento → X = 0 + 1 = 1
3. **"++X"**: Incremento → X = 1 + 1 = 2
4. **"X++"**: Incremento → X = 2 + 1 = 3

**Análisis matemático:**

- Operaciones de incremento: 3 (`++X`, `++X`, `X++`)
- Operaciones de decremento: 0
- Resultado: 3 - 0 = 3 ✓

**Observación importante**: Tanto `++X` como `X++` contribuyen exactamente igual al resultado final.

### Caso 3: Ejemplo LeetCode 3 - `["X++","++X","--X","X--"]` → `0`

**Simulación paso a paso:**

1. **Estado inicial**: X = 0
2. **"X++"**: Incremento → X = 0 + 1 = 1
3. **"++X"**: Incremento → X = 1 + 1 = 2
4. **"--X"**: Decremento → X = 2 - 1 = 1
5. **"X--"**: Decremento → X = 1 - 1 = 0

**Análisis matemático:**

- Operaciones de incremento: 2 (`X++`, `++X`)
- Operaciones de decremento: 2 (`--X`, `X--`)
- Resultado: 2 - 2 = 0 ✓

**Patrón balanceado**: Cuando incrementos == decrementos → resultado = 0

### Casos Edge Implementados

#### Edge Case 1: Una sola operación - `["++X"]` → `1`

- Operaciones de incremento: 1
- Operaciones de decremento: 0
- Resultado: 1 - 0 = 1 ✓

#### Edge Case 2: Solo decrementos - `["--X","X--"]` → `-2`

- Operaciones de incremento: 0
- Operaciones de decremento: 2
- Resultado: 0 - 2 = -2 ✓

**Validación**: Los valores negativos son posibles y válidos.

## Implementación y Metodología

### Enfoque TDD Aplicado

**Fase Red-Green-Refactor:**

1. **🔴 RED**: Tests implementados primero con casos de LeetCode + edge cases
2. **🟢 GREEN**: Implementación directa y eficiente que pasa todos los tests
3. **🔵 REFACTOR**: Optimización y limpieza del código final

### Solución Implementada

```typescript
function finalValueAfterOperations(operations: string[]): number {
  let x = 0;
  for (const op of operations) {
    if (op === "++X" || op === "X++") {
      x++;
    } else {
      x--;
    }
  }
  return x;
}
```

### Decisiones de Diseño Analizadas

#### **1. Comparación Exacta vs String.includes()**

**Nuestra elección**: `op === "++X" || op === "X++"`

**Alternativa**: `op.includes("++")`

**Ventajas de comparación exacta:**

- ✅ **Más eficiente**: O(1) vs O(k) donde k = longitud del string
- ✅ **Más precisa**: No hay falsos positivos
- ✅ **Aprovecha constraints**: Solo 4 operaciones válidas posibles
- ✅ **Más legible**: Intención explícita

#### **2. Estructura if/else vs Switch**

**Nuestra elección**: `if/else` simple

**Justificación:**

- Solo 2 categorías: incremento o decremento
- `else` es suficiente dado que constraints garantizan operaciones válidas
- Más conciso que 4 casos de switch individual

#### **3. Simulación Directa vs Conteo Matemático**

**Nuestra elección**: Simulación directa con variable `x`

**Ventajas:**

- ✅ **Claridad conceptual**: Sigue el enunciado del problema
- ✅ **Fácil debugging**: Puedes rastrear el valor en cada paso
- ✅ **Extensibilidad**: Fácil agregar logging o validaciones

### Metodología de Testing

**Estructura organizada en grupos:**

```typescript
describe("Final Value of Variable After Performing Operations", () => {
  describe("LeetCode Examples", () => {
    /* 3 casos oficiales */
  });
  describe("Edge Cases", () => {
    /* casos límite */
  });
  describe("Specific Operation Types", () => {
    /* verificación equivalencias */
  });
});
```

**Casos de prueba estratégicos:**

1. **Cobertura de ejemplos**: Los 3 casos oficiales de LeetCode
2. **Edge cases**: Operación única, solo incrementos/decrementos
3. **Equivalencias**: Verificar que `++X` === `X++` para resultado final
4. **Valores negativos**: Confirmar que son válidos y manejados correctamente

### Patrones de Programación Identificados

#### **1. Simulación vs Insight Matemático**

- **Simulación**: Seguir el proceso paso a paso (nuestra implementación)
- **Insight matemático**: `incrementCount - decrementCount`
- **Elección**: Simulación por claridad, aunque ambos son O(n)

#### **2. Constraint Leveraging**

Aprovechar las restricciones del problema:

- Solo 4 operaciones válidas → else simple
- Strings de longitud fija → comparación directa eficiente
- Operaciones válidas garantizadas → sin validación de entrada

#### **3. Functional vs Imperative**

**Implementación imperativa** (elegida):

```typescript
let x = 0;
for (const op of operations) {
  /* ... */
}
return x;
```

**Alternativa funcional**:

```typescript
return operations.reduce((x, op) => (op.includes("++") ? x + 1 : x - 1), 0);
```

**Razón de elección**: Claridad y facilidad de debugging sobre concisión.

## Análisis de Complejidad

### Complejidad Temporal: O(n)

**Análisis detallado:**

- **Iteración única**: Recorremos el array `operations` exactamente una vez
- **Operación por elemento**: Cada operación requiere tiempo constante O(1)
  - Comparación de strings: `op === "++X"` es O(1) para strings de longitud fija
  - Operación aritmética: `x++` o `x--` es O(1)
- **Total**: O(n) donde n = `operations.length`

**Es óptimo** porque necesitamos examinar cada operación al menos una vez para determinar el resultado.

### Complejidad Espacial: O(1)

**Análisis detallado:**

- **Variable auxiliar**: Solo `x` para rastrear el valor actual
- **Sin estructuras adicionales**: No usamos arrays, objetos o recursión
- **Espacio constante**: No depende del tamaño de entrada

**Comparación con enfoques alternativos:**

| Enfoque                | Tiempo | Espacio | Notas                               |
| ---------------------- | ------ | ------- | ----------------------------------- |
| **Simulación directa** | O(n)   | O(1)    | ✅ Nuestra implementación           |
| **Conteo matemático**  | O(n)   | O(1)    | Equivalente, menos directo          |
| **Reduce funcional**   | O(n)   | O(1)    | Más conciso, menos legible          |
| **Array intermedio**   | O(n)   | O(n)    | ❌ Innecesario, desperdicia memoria |

### Comparación con Constraints

**Constraints del problema:**

- `1 <= operations.length <= 100`
- Solo 4 operaciones válidas: `"++X"`, `"X++"`, `"--X"`, `"X--"`

**Implicaciones para nuestra solución:**

- **n máximo = 100**: Muy pequeño, cualquier enfoque O(n) es instantáneo
- **Operaciones fijas**: Permite optimizaciones como comparación directa
- **Sin validación necesaria**: Constraints garantizan entrada válida

### Optimizaciones Consideradas

#### **1. Comparación de Strings**

**Nuestra elección**: `op === "++X" || op === "X++"`

**Alternativas evaluadas:**

- `op.includes("++")`: O(k) donde k = longitud string
- `op[0] === '+'`: O(1) pero requiere lógica adicional
- Switch statement: O(1) pero más verboso

**Justificación**: Para strings cortos y fijos, comparación directa es más clara y eficiente.

#### **2. Estructura de Control**

**Nuestra elección**: if/else simple

**Alternativas evaluadas:**

- 4 casos if separados: Más verboso
- Switch con 4 casos: Overkill para 2 categorías
- Lookup table/map: Innecesario para casos tan simples

#### **3. Enfoque de Conteo**

**No implementado pero considerado:**

```typescript
// Conteo separado (misma complejidad)
let increments = operations.filter((op) => op.includes("++")).length;
let decrements = operations.length - increments;
return increments - decrements;
```

**Razón del rechazo**:

- Requiere dos pasadas por el array (filter + length)
- Menos eficiente en práctica
- Menos directo conceptualmente

### Escalabilidad y Consideraciones Futuras

**Para arrays más grandes (n > 10,000):**

- Nuestra solución sigue siendo óptima O(n)
- Memoria constante permite procesar arrays enormes
- No hay optimizaciones adicionales posibles sin cambiar el problema

**Para más tipos de operaciones:**

- Estructura if/else se volvería inmanejable
- Switch statement o lookup table serían preferibles
- Mantendría la misma complejidad O(n) temporal

**Conclusión**: La implementación es óptima tanto en tiempo como en espacio para este problema específico.

## Notas de Implementación

### Decisiones Técnicas Destacadas

#### **1. Nomenclatura de Variables**

**Elección**: `let x = 0;` (minúscula)

**Consideraciones:**

- ✅ **Convención TypeScript**: Variables en camelCase/lowercase
- ✅ **Consistencia**: Mantiene el contexto del problema (variable X)
- ✅ **Legibilidad**: Diferencia clara entre variable local y concepto del problema

#### **2. Estructura de Loop**

**Elección**: `for (const op of operations)`

**Alternativas evaluadas:**

- `for (let i = 0; i < operations.length; i++)`: Más verboso, índice innecesario
- `operations.forEach(op => ...)`: Functional, pero menos directo
- `while` loop: Innecesariamente complejo

**Ventajas del for...of:**

- Sintaxis moderna y limpia
- Acceso directo al elemento
- No manejo de índices
- Inmutable reference (`const op`)

#### **3. Manejo de Edge Cases**

**Edge cases cubiertos automáticamente:**

1. **Array vacío**: Loop no ejecuta, retorna 0 ✓
2. **Una operación**: Loop ejecuta una vez ✓
3. **Todas iguales**: Conteo correcto automático ✓
4. **Valores negativos**: Aritmética nativa de JavaScript ✓

**Sin validación explícita** porque:

- Constraints garantizan entrada válida
- JavaScript maneja operaciones aritméticas robustamente
- Principio YAGNI (You Aren't Gonna Need It)

### Patrones de Diseño Aplicados

#### **1. Template Method Pattern (Implícito)**

```typescript
// Estructura general para problemas de simulación:
function simulate(operations) {
  let state = initialState();
  for (const operation of operations) {
    state = applyOperation(state, operation);
  }
  return state;
}
```

**En nuestro caso:**

- `initialState()` → `let x = 0`
- `applyOperation()` → if/else para increment/decrement
- Retorno → `return x`

#### **2. Strategy Pattern (Considerado pero no necesario)**

**No implementado** porque solo tenemos 2 estrategias simples:

```typescript
// Sería overkill para este problema:
const strategies = {
  "++X": (x) => x + 1,
  "X++": (x) => x + 1,
  "--X": (x) => x - 1,
  "X--": (x) => x - 1,
};
return operations.reduce((x, op) => strategies[op](x), 0);
```

### Consideraciones de Mantenibilidad

#### **Extensibilidad para Nuevas Operaciones**

**Estructura actual:**

```typescript
if (op === "++X" || op === "X++") {
  x++;
} else {
  x--;
}
```

**Para agregar operaciones (ej: multiplicación):**

```typescript
if (op === "++X" || op === "X++") {
  x++;
} else if (op === "--X" || op === "X--") {
  x--;
} else if (op === "*2X" || op === "X*2") {
  x *= 2;
} else {
  // Manejo de error o operación por defecto
}
```

#### **Testing y Debugging**

**Ventajas de la implementación actual para debugging:**

1. **Estado rastreable**: Puedes agregar console.log fácilmente
2. **Pasos visibles**: Cada iteración es un paso claro
3. **Breakpoints efectivos**: Debugger puede parar en cada operación

```typescript
// Versión con debugging (fácil de agregar/quitar):
function finalValueAfterOperations(operations: string[]): number {
  let x = 0;
  for (const op of operations) {
    const oldX = x;
    if (op === "++X" || op === "X++") {
      x++;
    } else {
      x--;
    }
    // console.log(`${op}: ${oldX} → ${x}`);
  }
  return x;
}
```

### Lecciones Aprendidas

#### **1. Simplicidad vs Optimización**

- **Enfoque elegido**: Simplicidad y claridad
- **Razón**: Para problemas pequeños (n ≤ 100), legibilidad > micro-optimizaciones
- **Principio**: "Premature optimization is the root of all evil"

#### **2. Constraint-Driven Design**

- **Aprovechamos**: Solo 4 operaciones válidas garantizadas
- **Resultado**: Código más simple y eficiente
- **Lección**: Siempre leer y aprovechar las constraints

#### **3. TDD Benefits Realizados**

- **Tests primero**: Definieron comportamiento esperado claramente
- **Implementación guiada**: Tests fallidos guiaron la lógica
- **Refactoring seguro**: Tests verdes permiten cambios confiables

### Aplicabilidad del Patrón

**Este patrón se aplica a:**

1. **Procesamiento de comandos**: Interpretes, shells, game engines
2. **Simulación de estados**: State machines, game logic
3. **Transformación de datos**: ETL processes, data pipelines
4. **Conteo y agregación**: Analytics, metrics collection

**Ejemplo real similar:**

```typescript
// Sistema de puntuación de juego
function calculateScore(actions: string[]): number {
  let score = 0;
  for (const action of actions) {
    if (action === "kill" || action === "bonus") {
      score += 10;
    } else if (action === "death" || action === "penalty") {
      score -= 5;
    }
  }
  return score;
}
```

La elegancia está en reconocer cuándo un problema complejo se reduce a un patrón simple.
