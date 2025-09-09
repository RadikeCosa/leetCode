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

_Última actualización: 9 de septiembre de 2025_  
_Problemas completados: 3/42 - Construyendo conocimiento incrementalmente_ 🎯
