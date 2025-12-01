---
title: "counter-ii"
difficulty: "easy"
topics:
  - Closure
  - Factory Pattern
  - State Management
source: "leetcode"
series: "parte-1-introduccion"
category: "30-days-js"
createdAt: "2025-12-01"
---

# Counter II

Escribe una función `createCounter` que acepta un entero inicial `init`. Debe retornar un objeto con tres funciones:

- `increment()` aumenta el valor actual en 1 y lo retorna.
- `decrement()` reduce el valor actual en 1 y lo retorna.
- `reset()` establece el valor actual a `init` y lo retorna.

## Ejemplos

### Ejemplo 1:

- Input: `init = 5`, calls = `["increment","reset","decrement"]`
- Output: `[6,5,4]`
- Explicación:
  ```javascript
  const counter = createCounter(5);
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4
  ```

### Ejemplo 2:

- Input: `init = 0`, calls = `["increment","increment","decrement","reset","reset"]`
- Output: `[1,2,1,0,0]`
- Explicación:
  ```javascript
  const counter = createCounter(0);
  counter.increment(); // 1
  counter.increment(); // 2
  counter.decrement(); // 1
  counter.reset(); // 0
  counter.reset(); // 0
  ```

## Análisis

Este problema requiere crear una **factory function** que retorna un objeto con métodos que mantienen estado privado. Los conceptos clave son:

1. **Closures**: Para mantener la variable `count` privada y accesible solo por las funciones internas
2. **Factory Pattern**: Cada llamada a `createCounter()` crea una instancia independiente
3. **State Management**: Cada contador mantiene su estado separado del resto

La elegancia de la solución radica en que el closure "captura" tanto el valor inicial (`init`) como el estado actual (`count`), permitiendo que las funciones accedan a ambos incluso después de que `createCounter` haya terminado su ejecución.

## Enfoque detallado

### Paso 1: Definir el tipo Counter

```typescript
type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};
```

Define la interface que debe retornar la función factory.

### Paso 2: Inicializar estado privado

```typescript
let count = init;
```

Variable local que será capturada por el closure. Es privada e inaccesible desde fuera.

### Paso 3: Retornar objeto con métodos

```typescript
return {
  increment: () => ++count,
  decrement: () => --count,
  reset: () => (count = init),
};
```

**Detalles de implementación:**

- `++count`: Pre-incremento que primero suma 1 y luego retorna el nuevo valor
- `--count`: Pre-decremento que primero resta 1 y luego retorna el nuevo valor
- `(count = init)`: Assignment expression que asigna `init` a `count` y retorna el valor asignado

### ¿Por qué funciona el closure?

Cuando `createCounter(5)` se ejecuta:

1. Se crea un nuevo scope con `count = 5` e `init = 5`
2. Las tres funciones "recuerdan" este scope específico
3. Aunque `createCounter` termine, el scope permanece vivo porque las funciones lo referencian
4. Cada llamada posterior accede al mismo `count` y `init` específicos

## Casos extremos

- **Valores negativos**: Funciona perfectamente, `count` puede ser cualquier entero
- **Múltiples instancias**: Cada `createCounter()` crea un scope independiente
- **Múltiples resets**: Siempre retorna al valor `init` original
- **Límites numéricos**: JavaScript maneja enteros hasta `Number.MAX_SAFE_INTEGER`
- **Orden de operaciones**: Pre-incremento/decremento garantiza que se modifica antes de retornar

## Complejidad

- **Time complexity**: O(1) - todas las operaciones son aritméticas simples
- **Space complexity**: O(1) por instancia - solo almacena dos números (`count` e `init`)

## Conclusión

Solución elegante que demuestra el poder de los **closures en JavaScript**:

- **Encapsulación**: Estado privado inaccesible desde el exterior
- **Persistencia**: Estado se mantiene entre llamadas a métodos
- **Independencia**: Múltiples instancias no se interfieren
- **Simplicidad**: Código conciso y expresivo usando características modernas

La combinación de **pre-incremento/decremento** y **assignment expressions** hace el código extremadamente limpio, mientras que el **closure** proporciona el comportamiento de "objeto con estado privado" sin necesidad de clases.