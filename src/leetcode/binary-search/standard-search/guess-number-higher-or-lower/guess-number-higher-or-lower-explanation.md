---
name: guess-number-higher-or-lower
difficulty: easy
category: binary-search
topics: [Binary Search, Game]
source: leetcode
series: standard-search
createdAt: 2025-09-09
---

# Guess Number Higher or Lower

Implementar un algoritmo de binary search para encontrar un número secreto usando una API de adivinanza.

## Ejemplos

- Input: n = 10, pick = 6
- Output: 6

- Input: n = 1, pick = 1
- Output: 1

- Input: n = 2, pick = 1
- Output: 1

## Análisis

Este es un problema **interactivo** especial donde no tenemos acceso directo al número secreto `pick`. En su lugar, debemos usar una API externa `guess(num)` que nos guía hacia la respuesta.

### ¿Qué hace la API `guess()`?

```typescript
guess(num) → {
  return 0;   // Si num === pick (¡encontrado!)
  return -1;  // Si num > pick (tu guess es muy alto)
  return 1;   // Si num < pick (tu guess es muy bajo)
}
```

### Estrategia: Binary Search

Como el espacio de búsqueda está ordenado (números del 1 al n) y tenemos feedback direccional ("más alto" o "más bajo"), binary search es la estrategia óptima.

## Enfoque detallado

### Algoritmo paso a paso:

1. **Inicializar punteros**: `start = 1`, `end = n`
2. **Mientras start <= end**:
   - Calcular punto medio: `mid = Math.floor((start + end) / 2)`
   - Hacer guess: `result = guess(mid)`
   - **Si result === 0**: ¡Encontrado! Retornar `mid`
   - **Si result === -1**: `mid` es muy alto → buscar en mitad inferior → `end = mid - 1`
   - **Si result === 1**: `mid` es muy bajo → buscar en mitad superior → `start = mid + 1`

### Ejemplo walkthrough (n=10, pick=6):

```
Iteración 1: start=1, end=10
mid = (1+10)/2 = 5
guess(5) → 1 (5 < 6, "muy bajo")
Actualizar: start = 5+1 = 6

Iteración 2: start=6, end=10
mid = (6+10)/2 = 8
guess(8) → -1 (8 > 6, "muy alto")
Actualizar: end = 8-1 = 7

Iteración 3: start=6, end=7
mid = (6+7)/2 = 6
guess(6) → 0 (6 === 6, "¡correcto!")
Retornar: 6
```

## Desafío de Testing: Problemas Interactivos

### ¿Por qué es difícil testear este problema?

Este problema presenta un desafío único para testing porque:

1. **Dependencia externa**: Nuestra función depende de `guess()`, que no implementamos nosotros
2. **En LeetCode**: La plataforma proporciona `guess()` automáticamente
3. **En local**: Necesitamos simular `guess()` para poder testear

### Strategies de Testing intentadas:

#### ❌ **Approach 1: Global manual**

```typescript
declare global {
  var guess: (num: number) => number;
}

global.guess = mockFunction; // Error de TypeScript
```

**Problema**: TypeScript se queja de que global no tiene index signature.

#### ❌ **Approach 2: Dependency Injection**

```typescript
function guessNumber(n: number, guessFn?: (num: number) => number);
```

**Problema**: Cambia la signature original, no es fiel a LeetCode.

#### ✅ **Approach 3: vi.stubGlobal() (Solución final)**

```typescript
vi.stubGlobal("guess", mockFunction);
```

**Ventajas**:

- Mantiene la función original intacta
- Vitest maneja los tipos automáticamente
- Es la forma oficial de Vitest para simular globals
- Se limpia automáticamente después de cada test

### Implementación de Testing detallada:

#### 1. **Helper Function para crear lógica de guess**:

```typescript
const createGuessLogic = (pick: number) => {
  return (num: number) => {
    if (num === pick) return 0; // Correcto
    else if (num > pick) return -1; // Muy alto
    else return 1; // Muy bajo
  };
};
```

**¿Para qué sirve?**

- Encapsula la lógica de comparación
- Recibe el `pick` secreto como parámetro
- Retorna una función que simula el comportamiento de la API real

#### 2. **Setup del mock en cada test**:

```typescript
it("should find pick = 6 in range n = 10", () => {
  const guessLogic = createGuessLogic(6); // Crear lógica para pick=6
  vi.stubGlobal("guess", vi.fn(guessLogic)); // Instalar como global mock

  const result = guessNumber(10); // Ejecutar nuestra función
  expect(result).toBe(6); // Verificar resultado
});
```

**Paso a paso**:

1. **createGuessLogic(6)**: Crea función que simula pick=6
2. **vi.fn(guessLogic)**: Envuelve en spy para poder trackear llamadas
3. **vi.stubGlobal()**: Instala como variable global temporal
4. **guessNumber(10)**: Nuestra función ve `guess` como si fuera de LeetCode
5. **expect()**: Verificamos que encontró el número correcto

#### 3. **Test de eficiencia**:

```typescript
it("should be efficient - limited number of calls", () => {
  const guessLogic = createGuessLogic(6);
  const guessSpy = vi.fn(guessLogic); // Spy para trackear llamadas
  vi.stubGlobal("guess", guessSpy);

  guessNumber(10);

  // Binary search para n=10 debe hacer máximo 4 llamadas
  expect(guessSpy.mock.calls.length).toBeLessThanOrEqual(4);
  expect(guessSpy.mock.calls.length).toBeGreaterThan(0);
});
```

**¿Qué verifica?**

- **Límite superior**: No más de log₂(n) + 1 llamadas
- **Límite inferior**: Al menos 1 llamada (sanity check)
- **Eficiencia real**: Confirma que binary search es eficiente

## Casos extremos

### Test cases implementados:

1. **Caso típico**: `n=10, pick=6` - Número en el medio del rango
2. **Caso minimal**: `n=1, pick=1` - Solo una opción posible
3. **Caso edge**: `n=2, pick=1` - Pick en el límite inferior
4. **Test eficiencia**: Verificar que no excede límite teórico de llamadas

### ¿Por qué estos casos?

- **n=1**: Caso más simple, debe encontrar inmediatamente
- **n=2, pick=1**: Prueba que maneja correctamente cuando pick está en los extremos
- **n=10, pick=6**: Caso representativo que requiere múltiples iteraciones
- **Eficiencia**: Confirma que la implementación es O(log n) en la práctica

## Complejidad

- **Time complexity**: O(log n) - Cada iteración reduce espacio de búsqueda a la mitad
- **Space complexity**: O(1) - Solo variables auxiliares (start, end, mid)

## Conclusión

### Lecciones sobre Testing Interactivo:

1. **Simulación es clave**: Los problemas interactivos requieren simular las APIs externas
2. **vi.stubGlobal() es la herramienta correcta**: Para mocks globales temporales en Vitest
3. **Helper functions**: Facilitan la creación de diferentes escenarios de testing
4. **Testing de eficiencia**: Es importante verificar complejidad algorítmica, no solo corrección
5. **Mantener fidelidad**: Los tests deben simular lo más fielmente posible el entorno real

### Sobre Binary Search:

- **Estrategia óptima**: Para espacios ordenados con feedback direccional
- **Implementación iterativa**: Más eficiente en espacio que recursiva
- **Robustez**: Maneja todos los casos edge correctamente
- **Eficiencia comprobada**: Tests confirman O(log n) en la práctica
