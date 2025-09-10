# Conceptos y Patrones - Binary Search Study Plan

## Introducción

Este documento recopila los conceptos, patrones algorítmicos y técnicas aprendidas durante la resolución del **Binary Search Study Plan** de LeetCode. Se construye incrementalmente basándose en los problemas realmente resueltos.

---

## 🎯 **Template Fundamental - Búsqueda Exacta**

_Aprendido en: Binary Search (704)_

### Patrón Base

```typescript
function binarySearchExact(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

### Decisiones Clave Validadas

#### ✅ **Condición del bucle: `left <= right`**

- **Por qué**: Permite revisar casos de un solo elemento (`left = right`)
- **Ventaja**: Más intuitivo para búsquedas exactas
- **Cuándo usar**: Cuando buscas un elemento específico

#### ✅ **Inicialización: `right = arr.length - 1`**

- **Por qué**: Trabajamos con índices válidos
- **Ventaja**: Consistente con la condición `<=`
- **Evita**: Accesos fuera de rango

#### ✅ **Actualización: `left = mid + 1`, `right = mid - 1`**

- **Por qué**: Elimina el elemento ya revisado (`mid`)
- **Garantiza**: Progreso en cada iteración (rango se reduce)
- **Evita**: Bucles infinitos

#### ✅ **Cálculo seguro: `left + (right - left) / 2`**

- **Por qué**: Previene overflow en números grandes
- **Matemáticamente**: Equivalente a `(left + right) / 2`
- **Buena práctica**: Adoptarla siempre

---

## 🧮 **Análisis de Complejidad**

_Validado en: Binary Search (704)_

### Temporal: O(log n)

- **Razón**: Cada iteración elimina exactamente la mitad del espacio de búsqueda
- **Progresión**: n → n/2 → n/4 → n/8 → ... → 1
- **Ejemplo práctico**: Array de 1M elementos = ~20 comparaciones máximo

### Espacial: O(1)

- **Razón**: Solo usamos 3 variables adicionales (`left`, `right`, `mid`)
- **Constante**: No importa el tamaño del array

---

## 🎪 **Casos Edge Críticos**

_Identificados en: Binary Search (704)_

### 1. **Array de un solo elemento**

```typescript
nums = [1], target = 0 → -1
nums = [1], target = 1 → 0
```

**Enseñanza**: Verifica que `left <= right` funciona cuando `left = right`

### 2. **Target en extremos**

```typescript
// Primera posición
nums = [1,2,3,4,5], target = 1 → 0

// Última posición
nums = [1,2,3,4,5], target = 5 → 4
```

**Enseñanza**: El algoritmo no se "salta" los boundary conditions

### 3. **Target no existe**

```typescript
nums = [-1,0,3,5,9,12], target = 2 → -1
```

**Enseñanza**: Cuando `left > right`, el elemento no existe

---

## 🔧 **Invariantes del Algoritmo**

_Comprobadas en: Binary Search (704)_

### Invariante Principal

> **"Si el target existe en el array, debe estar en el rango [left, right]"**

**Mantenimiento:**

1. **Inicialización**: `[0, length-1]` contiene todo el array
2. **Iteración**: Eliminamos la mitad que no puede contener el target
3. **Terminación**: Cuando `left > right`, target no existe

### Progreso Garantizado

> **"En cada iteración, el rango [left, right] se reduce estrictamente"**

**Demostración:**

- `nums[mid] < target` → nuevo rango `[mid+1, right]` (más pequeño)
- `nums[mid] > target` → nuevo rango `[left, mid-1]` (más pequeño)

---

## 🚨 **Errores Comunes Evitados**

_Lecciones de: Binary Search (704)_

### 1. **Condición de bucle incorrecta**

```typescript
// ❌ MAL: No revisa último elemento
while (left < right) { ... }

// ✅ BIEN: Revisa todos los elementos
while (left <= right) { ... }
```

### 2. **Actualización sin progreso**

```typescript
// ❌ MAL: Posible bucle infinito
left = mid; // o  right = mid;

// ✅ BIEN: Siempre progresa
left = mid + 1;
right = mid - 1;
```

### 3. **Overflow en cálculo de mid**

```typescript
// ❌ PELIGROSO: Puede desbordarse
mid = (left + right) / 2;

// ✅ SEGURO: Previene overflow
mid = left + (right - left) / 2;
```

---

## 📊 **Progreso del Study Plan**

### ✅ **Problemas Completados**

1. **Binary Search (704)** - ⭐ FUNDACIONAL

   - Estableció el template base
   - Validó decisiones de implementación
   - Identificó casos edge críticos

2. **Search Insert Position (35)** - 🔄 VARIACIÓN DEL TEMPLATE
   - Confirmó robustez del template base
   - Introdujo patrón "Lower Bound"
   - Demostró versatilidad de `return left`

### 🎯 **Patrón Lower Bound (Insert Position)**

_Aprendido en: Search Insert Position (35)_

```typescript
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid; // Caso exacto - mismo que template base
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left; // 🔑 CLAVE: Posición de inserción
}
```

#### ✅ **Insight Fundamental**

**¿Por qué `return left` funciona para inserción?**

- Cuando el loop termina (`left > right`), `left` apunta a:
  - El primer elemento mayor que target, OR
  - El final del array (si target > todos los elementos)
- Esta es **exactamente** la posición donde target debería insertarse

#### ✅ **Comparación de Templates**

| Aspecto                    | Binary Search (704)                 | Search Insert Position (35)         |
| -------------------------- | ----------------------------------- | ----------------------------------- |
| **Inicialización**         | `left=0, right=len-1`               | `left=0, right=len-1`               |
| **Condición loop**         | `left <= right`                     | `left <= right`                     |
| **Mid calculation**        | `Math.floor(left + (right-left)/2)` | `Math.floor(left + (right-left)/2)` |
| **Pointer updates**        | `left=mid+1, right=mid-1`           | `left=mid+1, right=mid-1`           |
| **Elemento encontrado**    | `return mid`                        | `return mid`                        |
| **Elemento NO encontrado** | `return -1`                         | `return left`                       |

**Conclusión**: El template es **idéntico** excepto por el valor de retorno cuando no se encuentra el target.

### 🔄 **Próximos Conceptos a Explorar**

- Find First/Last Occurrence: ¿Cómo modificar para duplicados?
- Rotated Arrays: ¿Cómo adaptar el template?
- Upper Bound: ¿Variación del Lower Bound?

---

## � **Binary Search Interactivo - Guess Number Higher or Lower**

_Aprendido en: Guess Number Higher or Lower (374)_

### Patrón: API Externa con Feedback Direccional

```typescript
function guessNumber(n: number): number {
  let start = 1;
  let end = n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const result = guess(mid); // API externa

    if (result === 0) return mid; // Encontrado
    else if (result === -1) end = mid - 1; // Muy alto
    else start = mid + 1; // Muy bajo
  }

  return -1;
}
```

### Características Únicas de Problemas Interactivos

#### ✅ **API Externa**: `guess(num) → {-1, 0, 1}`

- **Feedback direccional**: Nos dice si estamos alto, bajo o correcto
- **Abstracción**: No tenemos acceso directo a los datos
- **Eficiencia crítica**: Cada llamada a la API "cuenta"

#### ✅ **Rango Diferente**: `[1, n]` en lugar de `[0, arr.length-1]`

- **Start**: Siempre 1 (no 0)
- **End**: Parámetro n (no derivado de array)
- **Más natural**: Para el contexto del problema

#### ✅ **Condición de Terminación**: `result === 0`

- **Explícita**: La API nos dice cuando encontramos el target
- **Sin comparación directa**: No podemos comparar `arr[mid] === target`

### Desafío de Testing: Simulación de APIs

#### Problema: ¿Cómo testear una función que depende de API externa?

**❌ Approaches que no funcionan bien:**

```typescript
// Problema: TypeScript no reconoce global.guess
global.guess = mockFunction;

// Problema: Cambia la signature original
function guessNumber(n: number, guessFn?: Function);
```

**✅ Solución elegante: `vi.stubGlobal()`**

```typescript
const createGuessLogic = (pick: number) => {
  return (num: number) => {
    if (num === pick) return 0;
    else if (num > pick) return -1;
    else return 1;
  };
};

// En cada test:
vi.stubGlobal("guess", vi.fn(createGuessLogic(6)));
```

#### Ventajas del Testing con vi.stubGlobal()

1. **Mantiene fidelidad**: Función original sin modificar
2. **Vitest nativo**: Herramienta oficial, sin hacks
3. **Limpieza automática**: Se resetea después de cada test
4. **Type safety**: Vitest maneja los tipos automáticamente
5. **Trackeable**: Podemos usar spies para verificar eficiencia

### Testing de Eficiencia Algorítmica

```typescript
it("should be efficient - limited number of calls", () => {
  const guessSpy = vi.fn(createGuessLogic(6));
  vi.stubGlobal("guess", guessSpy);

  guessNumber(10);

  // Verificar complejidad O(log n)
  expect(guessSpy.mock.calls.length).toBeLessThanOrEqual(4);
});
```

**¿Por qué testear eficiencia?**

- **Verificar complejidad**: Confirmar que es realmente O(log n)
- **Detectar regresión**: Si el algoritmo se vuelve menos eficiente
- **Constraint validation**: Para problemas con límites de llamadas API

### Template Adaptado para Problemas Interactivos

```typescript
function interactiveBinarySearch(n: number): number {
  let left = 1; // Rango específico del problema
  let right = n; // No derivado de array

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const feedback = externalAPI(mid); // API call

    if (feedback === TARGET_FOUND) return mid;
    else if (feedback === GO_LEFT) right = mid - 1;
    else left = mid + 1; // GO_RIGHT
  }

  return -1;
}
```

### Patrones de Feedback API Común

| API Response | Meaning        | Action            |
| ------------ | -------------- | ----------------- |
| `0`          | Found target   | Return mid        |
| `-1`         | Guess too high | `right = mid - 1` |
| `1`          | Guess too low  | `left = mid + 1`  |

### Cuándo Aplicar Este Patrón

✅ **Usar para problemas que tienen:**

- API externa que da feedback direccional
- Espacio de búsqueda ordenado conceptualmente
- Restricciones en número de operaciones
- Range definido por parámetros (no por array)

✅ **Ejemplos típicos:**

- First Bad Version
- Peak Index in Mountain Array (con limitaciones)
- Cualquier "guessing game" con hints

---

## �🎓 **Lecciones Clave Hasta Ahora**

1. **Template `left <= right`** es extremadamente versátil
2. **Mismo algoritmo, diferente return**: Una pequeña modificación cambia completamente la función
3. **Lower Bound pattern**: `return left` para posición de inserción
4. **Robustez del template**: Maneja edge cases automáticamente
5. **Reutilización de código**: Patrones similares para problemas diferentes
6. **Problemas interactivos**: Binary search funciona con APIs externas y feedback direccional
7. **Testing de problemas interactivos**: `vi.stubGlobal()` es la herramienta correcta en Vitest
8. **Verificación de eficiencia**: Testear complejidad algorítmica, no solo corrección

---

## 🔍 **Binary Search on Answer - Perfect Square Detection**

_Aprendido en: Valid Perfect Square (367)_

### Patrón: Búsqueda de Valor Específico en Rango Matemático

Este problema introduce el concepto de **Binary Search on Answer**, donde buscamos un valor específico en un rango ordenado implícito.

```typescript
function isPerfectSquare(num: number): boolean {
  // Early returns para casos triviales
  if (num === 1) return true;
  if (num < 4) return false;

  let left = 1;
  let right = Math.floor(num / 2) + 1; // Optimización matemática

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Protección contra overflow
    if (mid > num / mid) {
      right = mid - 1;
      continue;
    }

    const square = mid * mid;

    if (square === num) return true;
    else if (square < num) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}
```

### Conceptos Clave Aprendidos

#### ✅ **Range Optimization Matemática**

- **Insight**: Para `num > 4`, `√num ≤ num/2`
- **Aplicación**: `right = Math.floor(num/2) + 1` reduce espacio búsqueda ~50%
- **Justificación**: Si `x > num/2`, entonces `x² > num` para `num > 4`

#### ✅ **Overflow Prevention Pattern**

```typescript
// ❌ Problemático: mid * mid puede causar overflow
if (mid * mid > num) ...

// ✅ Seguro: reorganizar para evitar multiplicación grande
if (mid > num / mid) ...
```

- **Patrón general**: `a > limit/b` en lugar de `a*b > limit`
- **Aplicabilidad**: Crítico para números cerca de límites de tipo de datos

#### ✅ **Early Returns para Edge Cases**

- **num = 1**: Caso especial (1² = 1)
- **num < 4**: Solo 1 es cuadrado perfecto en este rango
- **Beneficio**: Evita binary search para casos triviales

#### ✅ **Binary Search on Answer vs Array Search**

| Aspecto    | Array Search         | Answer Search              |
| ---------- | -------------------- | -------------------------- |
| **Input**  | Array dado           | Rango implícito            |
| **Target** | Elemento específico  | Valor calculado            |
| **Range**  | `[0, arr.length-1]`  | `[min_answer, max_answer]` |
| **Check**  | `arr[mid] vs target` | `f(mid) vs target`         |

### Técnicas Avanzadas

#### 🎯 **Mathematical Range Bounds**

En lugar de usar rangos arbitrarios, usa matemáticas para optimizar:

- **Square root**: `[1, num/2 + 1]` para `num > 4`
- **Nth root**: `[1, num^(1/n)]` aproximado
- **Logarithmic**: Ajustar según el problema específico

#### 🛡️ **Overflow-Safe Arithmetic**

Pattern aplicable a otros problemas:

```typescript
// Para a * b vs c:
if (a > c / b) {
  /* a * b > c sin calcularlo */
}

// Para a^n vs c:
if (a > Math.pow(c, 1 / n)) {
  /* a^n > c aproximadamente */
}
```

### Casos de Uso del Patrón

#### **Problemas Similares**:

1. **Integer Square Root**: Calcular `floor(√n)` sin funciones built-in
2. **Perfect Power Detection**: Determinar si `n = k^p` para algún k, p
3. **Capacity Problems**: Encontrar capacidad mínima/máxima que satisface condiciones

#### **Cuándo Usar Binary Search on Answer**:

- ✅ Función objetivo es **monótona** (creciente/decreciente)
- ✅ Podemos **evaluar** si una respuesta candidata es válida en O(f(n))
- ✅ El **rango de respuestas** es acotado y conocido
- ✅ Búsqueda directa sería O(n) o peor

### Testing Strategy para Math Problems

```typescript
describe("Valid Perfect Square", () => {
  it("should handle edge cases", () => {
    expect(isPerfectSquare(1)).toBe(true); // Minimum perfect square
    expect(isPerfectSquare(2)).toBe(false); // First non-perfect
  });

  it("should handle large numbers", () => {
    expect(isPerfectSquare(2147395600)).toBe(true); // 46340² - near limit
    expect(isPerfectSquare(2147483647)).toBe(false); // 2³¹-1 - max int
  });
});
```

#### **Casos de Prueba Estratégicos**:

- **Límites de tipo**: Números cerca de 2³¹-1
- **Edge cases matemáticos**: 1, primeros no-cuadrados
- **Cuadrados perfectos conocidos**: 4, 9, 16, 100, 10000
- **Overflow candidates**: Números que podrían causar `mid * mid` overflow

### Insights Clave

#### 🎯 **Combinación de Optimizaciones**

Este problema demuestra cómo múltiples optimizaciones trabajan juntas:

1. **Matemática**: Range reduction
2. **Engineering**: Overflow prevention
3. **Performance**: Early returns
4. **Algorithmic**: Binary search base

#### 🔧 **Principio de Reorganización Algebraica**

Cuando una operación puede causar overflow, reorganizar la expresión:

- `a * b > c` → `a > c / b` (si `b > 0`)
- `a² > c` → `a > √c` → `a > c / a` (si `a > 0`)

Este principio es aplicable más allá de binary search.

---

## 🎯 **Template: Búsqueda de Primera Ocurrencia**

_Aprendido en: First Bad Version (278)_

### Patrón "Find First Occurrence"

```typescript
function findFirstOccurrence(
  isCondition: (x: number) => boolean,
  n: number
): number {
  let left = 1;
  let right = n;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (isCondition(mid)) {
      // Condición se cumple: la respuesta está en [left, mid]
      right = mid; // ¡Mantener mid como candidato!
    } else {
      // Condición no se cumple: la respuesta está en [mid+1, right]
      left = mid + 1; // Descartar mid y todo a la izquierda
    }
  }

  return left; // left == right == primera ocurrencia
}
```

### Diferencias Críticas con Binary Search Clásico

| Aspecto                      | Búsqueda Exacta            | Primera Ocurrencia                    |
| ---------------------------- | -------------------------- | ------------------------------------- |
| **Objetivo**                 | Encontrar valor específico | Encontrar transición false→true       |
| **Cuando condición = true**  | `right = mid - 1`          | `right = mid`                         |
| **Cuando condición = false** | `left = mid + 1`           | `left = mid + 1`                      |
| **Condición de bucle**       | `left <= right`            | `left < right`                        |
| **Invariante**               | "Target en [left, right]"  | "Primera ocurrencia en [left, right]" |

### ⚠️ **Decisiones Clave**

#### **`right = mid` vs `right = mid - 1`**

```typescript
if (isCondition(mid)) {
  right = mid; // ✅ mid podría ser la primera ocurrencia
  // vs
  right = mid - 1; // ❌ Podríamos perder la respuesta correcta
}
```

**Razón**: En problemas de transición, el elemento que cumple la condición podría ser exactamente la respuesta que buscamos.

#### **`left < right` vs `left <= right`**

- **`left < right`**: Para primera ocurrencia, convergemos cuando `left == right`
- **`left <= right`**: Para búsqueda exacta, necesitamos revisar el último elemento

### Casos de Uso del Patrón

#### **Cuándo Aplicar "First Occurrence"**:

1. **Secuencias con patrón binario**: `[false, false, ..., true, true, ...]`
2. **Puntos de transición**: Buscar donde cambia una condición
3. **Problemas de "earliest"**: Primera vez que algo ocurre
4. **API minimization**: Reducir llamadas costosas

#### **Ejemplos de Aplicación**:

- **Version Control**: Primer commit con bug
- **Deployment**: Primera versión problemática
- **Database**: Primer registro corrupto
- **Monitoring**: Momento exacto de degradación

---

## 🔗 **Higher-Order Functions en Algoritmos**

_Aprendido en: First Bad Version (278)_

### Patrón de Inyección de Dependencias

```typescript
// LeetCode usa este patrón para APIs externas:
var solution = function (externalAPI: (x: number) => boolean) {
  return function (input: number): number {
    // Tu algoritmo usa externalAPI sin conocer su implementación
    // Esto permite testing y reutilización
  };
};
```

### Ventajas del Patrón

1. **Testability**: Podemos inyectar mocks para testing
2. **Flexibility**: El mismo algoritmo funciona con diferentes APIs
3. **Separation of Concerns**: Lógica de búsqueda separada de lógica específica
4. **Reusability**: Template reutilizable para diferentes problemas

### Testing Strategy con Higher-Order Functions

```typescript
describe("First Bad Version", () => {
  it("should work with different API implementations", () => {
    // Mock 1: Primera mala es versión 4
    const api1 = (version: number) => version >= 4;
    const algorithm1 = solution(api1);
    expect(algorithm1(5)).toBe(4);

    // Mock 2: Primera mala es versión 1
    const api2 = (version: number) => version >= 1;
    const algorithm2 = solution(api2);
    expect(algorithm2(1)).toBe(1);
  });
});
```

---

## 🎪 **Casos Edge para Problemas Interactivos**

_Identificados en: First Bad Version (278)_

### Edge Cases Específicos de "First Occurrence"

#### **1. Single Element Arrays**

```typescript
// n=1, primera mala es la única versión
// Input: n=1, bad=1
// Expected: 1
// Challenge: Algoritmo no debe entrar al loop
```

#### **2. Primera posición es la respuesta**

```typescript
// Todas las versiones son malas
// Input: n=1000, bad=1
// Expected: 1
// Challenge: Binary search eficiente aún cuando answer está en extremo
```

#### **3. Última posición es la respuesta**

```typescript
// Solo la última versión es mala
// Input: n=1000, bad=1000
// Expected: 1000
// Challenge: Evitar búsqueda lineal accidental
```

### Trace de Debugging Efectivo

```typescript
function firstBadVersionWithDebug(isBadVersion, n) {
  let left = 1,
    right = n;
  console.log(`Initial: left=${left}, right=${right}`);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const result = isBadVersion(mid);
    console.log(`left=${left}, right=${right}, mid=${mid}, isBad=${result}`);

    if (result) {
      right = mid;
    } else {
      left = mid + 1;
    }
    console.log(`After: left=${left}, right=${right}`);
  }

  console.log(`Final: ${left}`);
  return left;
}
```

**Patrón observable**: En problemas correctos, `left` y `right` convergen suavemente sin "saltos" erráticos.

---

## 📊 **API Call Optimization Patterns**

_Validado en: First Bad Version (278)_

### Comparación de Eficiencia

| Algoritmo         | Time Complexity | API Calls       | Ejemplo (n=1,000,000)   |
| ----------------- | --------------- | --------------- | ----------------------- |
| **Linear Search** | O(n)            | O(n)            | ~500,000 calls promedio |
| **Binary Search** | O(log n)        | O(log n)        | ~20 calls máximo        |
| **Savings**       | **Exponencial** | **Exponencial** | **25,000x mejora**      |

### Métricas de Optimización

```typescript
// Instrumento para medir eficiencia:
function measureAPICalls(isBadVersion, n) {
  let callCount = 0;
  const wrappedAPI = (version) => {
    callCount++;
    return isBadVersion(version);
  };

  const result = solution(wrappedAPI)(n);
  console.log(`Found ${result} in ${callCount} API calls`);
  console.log(`Linear would need ${result} calls (average ${n / 2})`);

  return { result, calls: callCount };
}
```

### Aplicaciones Críticas

#### **Cuando las API calls son costosas**:

- **Network requests**: Cada call = latencia de red
- **Database queries**: Operaciones I/O intensivas
- **Compute-heavy validations**: ML model inference, compilación
- **Production testing**: Deploy y test real en infraestructura

**Conclusión**: Binary search no es solo sobre velocidad, sino sobre **minimizar recursos costosos**.

---

## 🧠 **Patrones de Invariantes para Transiciones**

_Desarrollado en: First Bad Version (278)_

### Invariante para "Primera Ocurrencia"

> **"Si existe una primera ocurrencia, debe estar en el rango [left, right]"**

### Mantenimiento de Invariante

#### **Inicialización**:

```typescript
let left = 1; // Primera posición posible
let right = n; // Última posición posible
// Invariante: [1, n] contiene todas las posiciones posibles
```

#### **Preservación en loop**:

```typescript
if (isBadVersion(mid)) {
  // mid cumple condición, respuesta en [left, mid]
  right = mid; // Mantiene invariante
} else {
  // mid no cumple, respuesta en [mid+1, right]
  left = mid + 1; // Mantiene invariante
}
```

#### **Terminación**:

```typescript
// Cuando left == right, ambos apuntan a la única posición restante
// Invariante garantiza que esa posición es la respuesta
return left;
```

### Template de Verificación de Invariantes

```typescript
function verifyInvariant(left, right, target, description) {
  console.assert(
    left <= target && target <= right,
    `Invariant violated: ${target} not in [${left}, ${right}] - ${description}`
  );
}
```

---

## 🔄 **Convergencia y Terminación**

_Analizado en: First Bad Version (278)_

### Análisis de Convergencia

#### **Progreso Garantizado**:

En cada iteración, el rango `[left, right]` se reduce:

- **Caso 1**: `isBadVersion(mid) = true` → nuevo rango `[left, mid]`
- **Caso 2**: `isBadVersion(mid) = false` → nuevo rango `[mid+1, right]`

**Demostración**: En ambos casos, `right - left` disminuye estrictamente.

#### **Terminación Garantizada**:

- **Base**: `right - left ≥ 0` siempre
- **Decremento**: En cada iteración, `right - left` disminuye
- **Mínimo**: Cuando `right - left = 0` → `left = right` → termina loop

### Condiciones de Terminación Seguras

```typescript
// ✅ CORRECTO para "primera ocurrencia"
while (left < right) {
  // Termina cuando left == right
}

// ❌ PELIGROSO para "primera ocurrencia"
while (left <= right) {
  // Podría no terminar si right = mid repetidamente
}
```

---

_Última actualización: 10 de septiembre de 2025_  
_Problemas completados: 5/42 - Construyendo conocimiento incrementalmente_ 🎯
