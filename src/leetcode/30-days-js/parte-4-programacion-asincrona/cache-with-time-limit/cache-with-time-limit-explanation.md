---
name: cache-with-time-limit
difficulty: medium
category: 30-days-js
topics: [Cache, Timeout, Map, OOP]
source: leetcode
series: parte-4-programacion-asincrona
createdAt: 2025-09-11
---

# Problema: Cache With Time Limit (LeetCode 2622)

## Descripción del Problema

Escribir una clase que permita obtener y establecer pares clave-valor, sin embargo un tiempo hasta la expiración está asociado con cada clave.

La clase tiene tres métodos públicos:

1. **`set(key, value, duration)`**: Acepta una clave integer, un valor integer, y una duración en milisegundos. Una vez que la duración ha transcurrido, la clave debe ser inaccesible. El método debe retornar `true` si la misma clave no expirada ya existe y `false` en caso contrario. Tanto el valor como la duración deben ser sobrescritos si la clave ya existe.

2. **`get(key)`**: Si existe una clave no expirada, debe retornar el valor asociado. De lo contrario debe retornar `-1`.

3. **`count()`**: Retorna la cantidad de claves no expiradas.

## Análisis

### Comprensión del Problema

Este problema combina varios conceptos importantes:

1. **Programación Orientada a Objetos**: Clase con métodos públicos
2. **Hash Table/Map**: Almacenamiento eficiente de clave-valor
3. **Timer Management**: Gestión de expiración automática con `setTimeout`
4. **State Management**: Mantener estado consistente del cache

### Casos de Ejemplo

**Ejemplo 1 - Ciclo de vida básico:**

- t=0: `set(1, 42, 100)` → `false` (clave nueva)
- t=50: `get(1)` → `42` (aún válida)
- t=50: `count()` → `1` (una clave activa)
- t=150: `get(1)` → `-1` (expiró en t=100)

**Ejemplo 2 - Sobrescritura de clave:**

- t=0: `set(1, 42, 50)` → `false` (clave nueva)
- t=40: `set(1, 50, 100)` → `true` (clave existía, se sobrescribe)
- t=50: `get(1)` → `50` (nuevo valor, expira en t=140 no t=50)
- t=120: `get(1)` → `50` (aún válida)
- t=200: `get(1)` → `-1` (expiró en t=140)

### Restricciones Importantes

- `0 <= key, value <= 10^9` (números grandes)
- `0 <= duration <= 1000` (máximo 1 segundo)
- `1 <= actions.length <= 100` (operaciones limitadas)
- Timing preciso requerido para expiración

## Enfoque de Solución

### Estrategia

Necesitamos una estructura de datos que combine:

1. **Map/Object**: Para almacenar pares clave-valor eficientemente
2. **Timeout tracking**: Para cada clave, un `setTimeout` que la elimine automáticamente
3. **Cleanup management**: Cancelar timeouts existentes al sobrescribir claves

### Estructura de Datos

```typescript
// Para cada entrada del cache necesitamos almacenar:
interface CacheEntry {
  value: number;           // El valor almacenado
  timeoutId: NodeJS.Timeout; // ID del timeout para cancelar si es necesario
}

// El cache principal
private cache: Map<number, CacheEntry> = new Map();
```

### Algoritmo

**Constructor:**

1. Inicializar Map vacío para el cache

**set(key, value, duration):**

1. Verificar si la clave ya existe (para valor de retorno)
2. Si existe, cancelar el timeout anterior con `clearTimeout`
3. Crear nuevo timeout que elimine la clave después de `duration` ms
4. Almacenar valor y timeout ID en el Map
5. Retornar `true` si la clave existía, `false` si era nueva

**get(key):**

1. Verificar si la clave existe en el Map
2. Si existe, retornar el valor
3. Si no existe, retornar `-1`

**count():**

1. Retornar el tamaño actual del Map (`cache.size`)

### Implementación

```typescript
class TimeLimitedCache {
  private cache: Map<number, CacheEntry> = new Map();

  set(key: number, value: number, duration: number): boolean {
    const existed = this.cache.has(key);

    // Cancelar timeout existente si la clave ya existe
    if (existed) {
      clearTimeout(this.cache.get(key)!.timeoutId);
    }

    // Crear nuevo timeout para eliminar la clave
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    // Almacenar valor y timeout ID
    this.cache.set(key, { value, timeoutId });

    return existed;
  }

  get(key: number): number {
    const entry = this.cache.get(key);
    return entry ? entry.value : -1;
  }

  count(): number {
    return this.cache.size;
  }
}
```

## Análisis de Complejidad

### Complejidad Temporal

- **set()**: O(1) - operaciones de Map y setTimeout son constantes
- **get()**: O(1) - acceso a Map es constante
- **count()**: O(1) - `.size` de Map es constante

### Complejidad Espacial

- **O(n)** donde n es el número de claves almacenadas
- Cada entrada almacena: valor + timeout ID
- Map proporciona acceso O(1) vs Array que sería O(n) para búsquedas

## Casos Edge

### Duración 0 (expiración inmediata)

```typescript
cache.set(1, 42, 0); // Se programa para eliminar inmediatamente
// Inmediatamente después: cache.get(1) → -1
```

### Sobrescritura múltiple

```typescript
cache.set(1, 100, 100); // Expira en t=100
cache.set(1, 200, 200); // Cancela el anterior, expira en t=200
cache.set(1, 300, 50); // Cancela el anterior, expira en t=50
```

### Claves no existentes

```typescript
cache.get(999); // -1 (nunca se estableció)
cache.count(); // 0 si no hay claves
```

## Aprendizajes Clave

### Gestión de Timeouts

- Cada timeout debe ser cancelable con `clearTimeout`
- Almacenar timeout IDs es crucial para cleanup
- Los timeouts continúan ejecutándose hasta ser cancelados

### Map vs Object para Cache

- **Map**: Mejor para claves numéricas, `.size` built-in, mejor performance
- **Object**: Requiere `Object.keys().length` para count, menos eficiente

### State Consistency

- Siempre cancelar timeouts anteriores antes de crear nuevos
- El Map actúa como single source of truth para claves activas
- Cleanup automático via setTimeout mantiene consistencia

### OOP en JavaScript/TypeScript

- Métodos públicos e interfaces claras
- Estado privado encapsulado
- Lifecycle management (constructor, cleanup)
