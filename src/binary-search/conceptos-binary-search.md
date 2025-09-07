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

## 🎓 **Lecciones Clave Hasta Ahora**

1. **Template `left <= right`** es extremadamente versátil
2. **Mismo algoritmo, diferente return**: Una pequeña modificación cambia completamente la función
3. **Lower Bound pattern**: `return left` para posición de inserción
4. **Robustez del template**: Maneja edge cases automáticamente
5. **Reutilización de código**: Patrones similares para problemas diferentes

---

_Última actualización: 6 de septiembre de 2025_  
_Problemas completados: 2/42 - Construyendo conocimiento incrementalmente_ 🎯
