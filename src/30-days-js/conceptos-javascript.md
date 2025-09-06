# Conceptos de JavaScript - 30 Days of JavaScript Challenge

Este archivo contiene los conceptos fundamentales de JavaScript que encontramos al resolver problemas del desafío "30 Days of JavaScript" de LeetCode.

---

## Programación Funcional

### Higher-Order Functions (Funciones de Orden Superior)

**Definición:** Funciones que toman otras funciones como argumentos o retornan funciones como resultado.

**Características principales:**

- Pueden recibir funciones como parámetros
- Pueden retornar funciones como resultado
- Permiten composición de funcionalidades
- Facilitan la reutilización de código

**Ejemplo básico:**

```typescript
function createMultiplier(factor: number): (x: number) => number {
  return function (x: number): number {
    return x * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**Ejemplo del problema Create Hello World Function:**

```typescript
export function createHelloWorld(): (...args: any[]) => string {
  return function (...args: any[]): string {
    return "Hello World";
  };
}
```

**Casos de uso comunes:**

- Factory functions (funciones fábrica)
- Callback functions
- Event handlers
- Array methods (map, filter, reduce)
- Middleware patterns

**Ventajas:**

- **Reutilización:** Crear múltiples funciones con comportamiento similar
- **Abstracción:** Encapsular lógica compleja
- **Composición:** Combinar funcionalidades simples en complejas
- **Inmutabilidad:** Evitar efectos secundarios

### Closures (Clausuras)

**Definición:** Característica que permite a una función acceder a variables de su scope externo incluso después de que el scope externo haya terminado su ejecución.

**Cómo funcionan:**

- La función "cierra" sobre variables del scope padre
- Mantiene una referencia a estas variables
- Persiste el estado entre invocaciones

**Ejemplo simple:**

```typescript
function outerFunction(x: number) {
  // Variable del scope externo
  return function innerFunction(y: number) {
    // Accede a 'x' del scope externo
    return x + y;
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8 - 'x' sigue siendo 5
```

**Ejemplo con estado persistente:**

```typescript
function createCounter() {
  let count = 0; // Variable privada

  return function () {
    count++; // Modifica la variable del scope externo
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 - Instancia independiente
```

**Aplicaciones prácticas:**

- **Encapsulación:** Crear variables "privadas"
- **Factory patterns:** Generar funciones configuradas
- **Event handlers:** Mantener estado en callbacks
- **Module patterns:** Crear módulos con estado interno

**Ventajas:**

- **Encapsulación:** Variables privadas sin clases
- **Estado persistente:** Mantener datos entre llamadas
- **Configuración:** Crear funciones pre-configuradas

### Closures con Estado Mutable

**Definición:** Closures que no solo acceden a variables del scope externo, sino que también las modifican, creando estado persistente.

**Patrón avanzado - Counter con Closure:**

```typescript
function createCounter(initialValue: number): () => number {
  let count = initialValue; // Variable mutable en el closure

  return function (): number {
    return count++; // Modifica el estado y retorna el valor anterior
  };
}

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
```

**Ejemplo del problema Counter (LeetCode 2620):**

```typescript
export function createCounter(n: number): () => number {
  return function (): number {
    return n++; // Post-incremento: retorna n, luego incrementa
  };
}
```

**Ventajas del Estado Mutable en Closures:**

- **Sin clases:** Estado persistente sin programación orientada a objetos
- **Múltiples instancias:** Cada closure mantiene su propio estado
- **Simplicidad:** Menos boilerplate que patrones alternativos

### Operadores de Incremento/Decremento

**Definición:** Operadores que modifican una variable incrementándola o decrementándola en 1, con diferentes comportamientos según su posición.

**Tipos principales:**

```typescript
let x = 5;

// Post-incremento: retorna el valor actual, luego incrementa
console.log(x++); // Retorna: 5, x ahora es: 6

// Pre-incremento: incrementa primero, luego retorna el nuevo valor
x = 5;
console.log(++x); // Retorna: 6, x es: 6
```

**Diferencias críticas:**

| Operador | Cuándo modifica     | Qué retorna      | Ejemplo                   |
| -------- | ------------------- | ---------------- | ------------------------- |
| `x++`    | Después de retornar | Valor original   | `x=5; y=x++; // y=5, x=6` |
| `++x`    | Antes de retornar   | Valor modificado | `x=5; y=++x; // y=6, x=6` |

**Caso de uso en Counters:**

```typescript
// ✅ Correcto para counter: primera llamada retorna n
function createCounter(n: number) {
  return () => n++; // Post-incremento perfecto
}

// ❌ Incorrecto: primera llamada retornaría n+1
function createBadCounter(n: number) {
  return () => ++n; // Pre-incremento problemático
}
```

### Rest Parameters (...args)

**Definición:** Sintaxis que permite a una función aceptar un número indefinido de argumentos como un array.

**Sintaxis:**

```typescript
function example(...args: any[]) {
  // 'args' es un array que contiene todos los argumentos
}
```

**Características:**

- Debe ser el último parámetro
- Convierte argumentos en un array real
- Diferente de `arguments` (más moderno y funcional)

**Ejemplos:**

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```

**Con tipos específicos:**

```typescript
function createMessage(
  template: string,
  ...values: (string | number)[]
): string {
  return template + " " + values.join(" ");
}

console.log(createMessage("Hello", "world", 123)); // "Hello world 123"
```

**Diferencias con `arguments`:**

- `...args` es un array real (tiene métodos como map, filter)
- `arguments` es array-like pero no un array real
- `...args` funciona con arrow functions
- `...args` tiene mejor soporte en TypeScript

**Casos de uso:**

- **Funciones variádicas:** Número variable de argumentos
- **Wrapper functions:** Envolver otras funciones
- **Utility functions:** Funciones de propósito general
- **API flexibility:** Permitir múltiples formas de llamada

### "Once" Pattern (Patrón de Ejecución Única)

**Definición:** Patrón que garantiza que una función solo pueda ejecutarse una vez, retornando `undefined` en llamadas subsecuentes.

**Implementación:**

```typescript
function once(fn: Function): Function {
  let called = false;

  return function (...args: any[]): any {
    if (!called) {
      called = true; // ⭐ CRUCIAL: marcar ANTES de ejecutar
      return fn(...args);
    }
    return undefined;
  };
}
```

**Casos de uso:**

- **Inicialización**: Configuraciones que deben ejecutarse solo una vez
- **Event handlers**: Eventos que deben dispararse una sola vez
- **API calls**: Prevenir múltiples llamadas accidentales
- **Resource loading**: Cargar recursos costosos una sola vez

**Ejemplo práctico:**

```typescript
const initializeApp = once(() => {
  console.log("App initialized!");
  return "App ready";
});

initializeApp(); // "App initialized!" → "App ready"
initializeApp(); // (sin log) → undefined
initializeApp(); // (sin log) → undefined
```

**⚠️ Error común:**

```typescript
// ❌ INCORRECTO - función se ejecuta siempre
function onceBroken(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      let result = fn(...args);
      return result; // called nunca se marca como true
    }
    return undefined;
  };
}

// ✅ CORRECTO - marca el estado antes de retornar
function onceCorrect(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true; // Marca ANTES del return
      return fn(...args);
    }
    return undefined;
  };
}
```

**Bibliotecas reales:**

- **Lodash**: `_.once(func)`
- **Underscore.js**: `_.once(function)`
- **Node.js**: Pattern común en event emitters

### Arrow Functions

**Definición:** Sintaxis concisa para escribir funciones en JavaScript/TypeScript.

**Sintaxis básica:**

```typescript
// Función tradicional
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function equivalente
const add = (a: number, b: number): number => a + b;
```

**Variaciones de sintaxis:**

```typescript
// Sin parámetros
const sayHello = () => "Hello!";

// Un parámetro (paréntesis opcionales)
const double = (x) => x * 2;
const doubleExplicit = (x: number) => x * 2;

// Múltiples parámetros
const multiply = (a: number, b: number) => a * b;

// Cuerpo con múltiples líneas
const complexFunction = (x: number) => {
  const result = x * 2;
  return result + 1;
};

// Retornar objeto (usar paréntesis)
const createObject = (name: string) => ({ name, timestamp: Date.now() });
```

**Diferencias clave con funciones tradicionales:**

1. **Lexical `this`:** No tienen su propio `this`
2. **No hoisting:** No son elevadas al inicio del scope
3. **No `arguments`:** Deben usar rest parameters
4. **No pueden ser constructores:** No se puede usar `new`

**Ejemplo de lexical this:**

```typescript
class Timer {
  seconds = 0;

  start() {
    // Arrow function mantiene 'this' de la clase
    setInterval(() => {
      this.seconds++; // 'this' se refiere a la instancia de Timer
    }, 1000);
  }
}
```

**Casos de uso ideales:**

- **Callbacks:** Especialmente cuando necesitas mantener `this`
- **Array methods:** map, filter, reduce
- **Event handlers:** En frameworks modernos
- **Short functions:** Funciones simples de una línea

### Array Transformation (Implementación manual de map)

**Definición:** Proceso de aplicar una función de transformación a cada elemento de un array para crear un nuevo array con los resultados transformados.

**Conceptos clave:**

- **Inmutabilidad:** No modifica el array original
- **Higher-order function:** Recibe una función como parámetro
- **Callback pattern:** La función transformadora se ejecuta para cada elemento

**Implementación manual de map:**

```typescript
type Fn = (n: number, i: number) => number;

function map(arr: number[], fn: Fn): number[] {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
}
```

**Ejemplos de uso:**

```typescript
// Transformación simple: incrementar cada elemento
const numbers = [1, 2, 3];
const incremented = map(numbers, (n) => n + 1);
// Resultado: [2, 3, 4]

// Uso del índice: sumar valor + índice
const withIndex = map(numbers, (n, i) => n + i);
// Resultado: [1, 3, 5] (1+0, 2+1, 3+2)

// Función constante: ignorar entrada
const constants = map([10, 20, 30], () => 42);
// Resultado: [42, 42, 42]
```

**Patrón general de Array Transformation:**

1. **Inicializar:** Crear array vacío para resultados
2. **Iterar:** Recorrer cada elemento del array original
3. **Transformar:** Aplicar función con elemento e índice
4. **Acumular:** Agregar resultado al nuevo array
5. **Retornar:** Devolver array completamente transformado

**Ventajas de la implementación manual:**

- **Comprensión profunda:** Entender cómo funcionan los métodos nativos
- **Control total:** Personalizar comportamiento si es necesario
- **Fundamentos sólidos:** Base para entender map, filter, reduce

**Diferencias con Array.map() nativo:**

| Aspecto             | Implementación manual      | Array.map() nativo          |
| ------------------- | -------------------------- | --------------------------- |
| **Rendimiento**     | Potentially slower         | Optimizado por el motor JS  |
| **Flexibilidad**    | Completamente customizable | Comportamiento fijo         |
| **Aprendizaje**     | Educational value alto     | Abstracción de alto nivel   |
| **Tipo de retorno** | Controlado por nosotros    | Siempre del mismo tipo base |

### Array Filtering (Implementación manual de filter)

**Definición:** Proceso de seleccionar elementos de un array que cumplan una condición específica, creando un nuevo array con solo los elementos que pasen el filtro.

**Conceptos clave:**

- **Predicado**: Función que evalúa condiciones y retorna valores truthy/falsy
- **Truthiness**: JavaScript evalúa automáticamente si un valor es "verdadero" en contexto booleano
- **Tamaño variable**: El array resultado puede tener cualquier tamaño (0 a n elementos)
- **Selección vs Transformación**: Filter selecciona, map transforma

**Implementación manual de filter:**

```typescript
type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  let filteredArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]); // Importante: agregamos arr[i], no fn(arr[i], i)
    }
  }
  return filteredArr;
}
```

**Ejemplos de uso:**

```typescript
// Filtro simple: números mayores que 10
const numbers = [0, 10, 20, 30];
const greater = filter(numbers, (n) => n > 10);
// Resultado: [20, 30]

// Filtro por índice: solo el primer elemento
const first = filter([1, 2, 3], (n, i) => i === 0);
// Resultado: [1]

// Filtro por truthiness: usar el resultado de una función
const truthy = filter([-2, -1, 0, 1, 2], (n) => n + 1);
// Resultado: [-2, 0, 1, 2] (cuando n=-1, n+1=0 que es falsy)
```

**Valores Truthy y Falsy en JavaScript:**

```typescript
// Falsy values (solo estos 8)
false, 0, -0, 0n, "", null, undefined, NaN

// Truthy values (todo lo demás)
true, 1, -1, "0", "false", [], {}, function(){}, ...
```

**Patrón general de Array Filtering:**

1. **Inicializar:** Crear array vacío para elementos filtrados
2. **Iterar:** Recorrer cada elemento del array original
3. **Evaluar:** Aplicar función predicado con elemento e índice
4. **Decidir:** Solo agregar si el resultado es truthy
5. **Retornar:** Devolver array con elementos seleccionados

**Diferencias clave con map:**

| Aspecto           | Filter                   | Map                       |
| ----------------- | ------------------------ | ------------------------- |
| **Propósito**     | Seleccionar elementos    | Transformar elementos     |
| **Tamaño output** | Variable (0 ≤ k ≤ n)     | Fijo (igual al input)     |
| **Qué se agrega** | Elemento original        | Resultado transformado    |
| **Condición**     | Solo si es truthy        | Siempre                   |
| **Uso típico**    | Buscar, filtrar, validar | Convertir, procesar, calc |

### Array Reduction (Implementación manual de reduce)

**Definición:** Proceso de combinar todos los elementos de un array en un valor único mediante la aplicación secuencial de una función reductora con un acumulador.

**Conceptos clave:**

- **Acumulador**: Variable que mantiene el estado/resultado parcial a través de las iteraciones
- **Función reductora**: Función que toma el acumulador actual y el siguiente elemento, devolviendo el nuevo acumulador
- **Valor inicial**: Punto de partida para la reducción
- **Aplicación secuencial**: Los elementos se procesan uno por uno, en orden

**Implementación manual de reduce:**

```typescript
type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let acc = init; // Inicializar acumulador
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]); // Actualizar acumulador secuencialmente
  }
  return acc; // Retornar valor final
}
```

**Ejemplos de uso:**

```typescript
// Suma: combinar todos los números
const numbers = [1, 2, 3, 4];
const sum = reduce(numbers, (acc, curr) => acc + curr, 0);
// Resultado: 10 (0 + 1 + 2 + 3 + 4)

// Producto: multiplicar todos los números
const product = reduce(numbers, (acc, curr) => acc * curr, 1);
// Resultado: 24 (1 * 1 * 2 * 3 * 4)

// Máximo: encontrar el valor más grande
const max = reduce([5, 2, 8, 1], (acc, curr) => Math.max(acc, curr), 0);
// Resultado: 8

// Operación compleja: suma de cuadrados
const sumSquares = reduce([1, 2, 3], (acc, curr) => acc + curr * curr, 0);
// Resultado: 14 (0 + 1² + 2² + 3² = 0 + 1 + 4 + 9)
```

**Patrón general de Array Reduction:**

1. **Inicializar:** Crear acumulador con valor inicial
2. **Iterar:** Recorrer cada elemento del array original
3. **Combinar:** Aplicar función reductora con acumulador y elemento actual
4. **Acumular:** Actualizar acumulador con el resultado
5. **Retornar:** Devolver valor final del acumulador

**La trilogía completa: Map, Filter, Reduce**

| Operación  | Input → Output | Propósito              | Tamaño resultado | Ejemplo             |
| ---------- | -------------- | ---------------------- | ---------------- | ------------------- |
| **Map**    | Array → Array  | Transformar elementos  | Igual (n → n)    | `[1,2,3] → [2,4,6]` |
| **Filter** | Array → Array  | Seleccionar elementos  | Variable (n → k) | `[1,2,3,4] → [2,4]` |
| **Reduce** | Array → Value  | Combinar a valor único | Uno solo (n → 1) | `[1,2,3,4] → 10`    |

**Relación entre las operaciones:**

```typescript
// Map puede implementarse con reduce
const mapWithReduce = (arr, fn) =>
  reduce(arr, (acc, curr, i) => [...acc, fn(curr, i)], []);

// Filter puede implementarse con reduce
const filterWithReduce = (arr, fn) =>
  reduce(arr, (acc, curr, i) => (fn(curr, i) ? [...acc, curr] : acc), []);

// Reduce es la operación más fundamental
```

**Casos de uso comunes para reduce:**

- **Agregaciones**: suma, producto, promedio, conteo
- **Búsqueda**: máximo, mínimo, elemento específico
- **Transformaciones**: string concatenation, object building
- **Validaciones**: verificar si todos/algunos elementos cumplen condición

### Function Expressions vs Function Declarations

**Function Declarations:**

```typescript
// Hoisted - puede ser llamada antes de ser declarada
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

**Function Expressions:**

```typescript
// No hoisted - debe ser declarada antes de usar
const greet = function (name: string): string {
  return `Hello, ${name}!`;
};

// Arrow function expression
const greet = (name: string): string => `Hello, ${name}!`;
```

**Cuándo usar cada una:**

- **Declarations:** Para funciones principales, APIs públicas
- **Expressions:** Para callbacks, funciones asignadas condicionalmente
- **Arrow functions:** Para callbacks cortos, métodos de array

---

## Conceptos de TypeScript

### Type Annotations

**Definición:** Especificación explícita de tipos para variables, parámetros y valores de retorno.

**Sintaxis básica:**

```typescript
// Variables
const name: string = "John";
const age: number = 30;
const isActive: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["Alice", "Bob"];

// Funciones
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Arrow functions
const multiply = (a: number, b: number): number => a * b;
```

**Function Types:**

```typescript
// Tipo de función explícito
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// Función que retorna función
function createAdder(x: number): (y: number) => number {
  return (y: number) => x + y;
}
```

**Union Types:**

```typescript
// Múltiples tipos posibles
function processValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toString();
}
```

**Generic Types:**

```typescript
// Tipos genéricos para flexibilidad
function identity<T>(arg: T): T {
  return arg;
}

const stringResult = identity<string>("hello"); // string
const numberResult = identity<number>(42); // number
```

---

## Patrones de Diseño en JavaScript

### Factory Pattern

**Definición:** Patrón que crea objetos sin especificar la clase exacta del objeto que se creará.

**Ejemplo básico:**

```typescript
// Factory para crear diferentes tipos de usuarios
function createUser(type: "admin" | "user", name: string) {
  const baseUser = {
    name,
    createdAt: new Date(),
  };

  if (type === "admin") {
    return {
      ...baseUser,
      role: "admin",
      permissions: ["read", "write", "delete"],
    };
  }

  return {
    ...baseUser,
    role: "user",
    permissions: ["read"],
  };
}
```

**Function Factory:**

```typescript
// Factory que crea funciones
function createValidator(type: "email" | "phone") {
  if (type === "email") {
    return (value: string) => /\S+@\S+\.\S+/.test(value);
  }

  return (value: string) => /^\+?[\d\s-()]+$/.test(value);
}

const validateEmail = createValidator("email");
const validatePhone = createValidator("phone");
```

**Ventajas:**

- **Flexibilidad:** Crear diferentes variantes fácilmente
- **Encapsulación:** Ocultar lógica de creación
- **Reutilización:** Evitar duplicación de código
- **Configuración:** Crear objetos pre-configurados

### Module Pattern

**Definición:** Patrón que encapsula funcionalidad en un módulo con API pública y elementos privados.

**IIFE Module:**

```typescript
const Calculator = (function () {
  // Variables privadas
  let history: string[] = [];

  // Funciones privadas
  function addToHistory(operation: string) {
    history.push(operation);
  }

  // API pública
  return {
    add(a: number, b: number): number {
      const result = a + b;
      addToHistory(`${a} + ${b} = ${result}`);
      return result;
    },

    getHistory(): string[] {
      return [...history]; // Retorna copia para evitar mutación
    },

    clearHistory(): void {
      history = [];
    },
  };
})();
```

**Modern Module (ES6+):**

```typescript
// calculator.ts
let history: string[] = [];

function addToHistory(operation: string) {
  history.push(operation);
}

export function add(a: number, b: number): number {
  const result = a + b;
  addToHistory(`${a} + ${b} = ${result}`);
  return result;
}

export function getHistory(): string[] {
  return [...history];
}

export function clearHistory(): void {
  history = [];
}
```

**Ventajas:**

- **Encapsulación:** Variables y funciones privadas
- **Namespacing:** Evitar conflictos de nombres
- **Organización:** Código modular y mantenible

---

## Mejores Prácticas

### Inmutabilidad

**Principio:** Evitar modificar datos existentes, crear nuevas versiones en su lugar.

**Técnicas:**

```typescript
// Arrays - usar métodos que no mutan
const numbers = [1, 2, 3];

// ❌ Mutable
numbers.push(4);
numbers.sort();

// ✅ Inmutable
const withNewNumber = [...numbers, 4];
const sorted = [...numbers].sort();

// Objetos - usar spread operator
const user = { name: "John", age: 30 };

// ❌ Mutable
user.age = 31;

// ✅ Inmutable
const updatedUser = { ...user, age: 31 };
```

### Pure Functions

**Definición:** Funciones que siempre retornan el mismo resultado para los mismos argumentos y no tienen efectos secundarios.

**Características:**

- **Determinísticas:** Mismo input = mismo output
- **Sin efectos secundarios:** No modifican estado externo
- **No dependen de estado externo:** Solo de sus parámetros

**Ejemplos:**

```typescript
// ✅ Pure function
function add(a: number, b: number): number {
  return a + b;
}

// ✅ Pure function
function formatName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim();
}

// ❌ Not pure - depende de estado externo
let counter = 0;
function increment(): number {
  return ++counter;
}

// ❌ Not pure - modifica estado externo
function addToArray(arr: number[], value: number): void {
  arr.push(value);
}

// ✅ Pure version
function addToArray(arr: number[], value: number): number[] {
  return [...arr, value];
}
```

**Ventajas:**

- **Testeable:** Fácil de probar y depurar
- **Predecible:** Comportamiento consistente
- **Cacheable:** Resultados pueden ser memoizados
- **Parallelizable:** Seguras para ejecución concurrente

### Error Handling

**Técnicas modernas para manejo de errores:**

```typescript
// Try-catch tradicional
function parseJson(jsonString: string): any {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}

// Result pattern
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

function safeParseJson(jsonString: string): Result<any> {
  try {
    const data = JSON.parse(jsonString);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error as Error };
  }
}

// Uso del Result pattern
const result = safeParseJson('{"name": "John"}');
if (result.success) {
  console.log(result.data.name); // TypeScript sabe que data existe
} else {
  console.error(result.error.message); // TypeScript sabe que error existe
}
```

### Factory Functions y State Management

**Definición:** Funciones que crean y retornan objetos con métodos que comparten estado privado usando closures.

**Patrón básico:**

```typescript
function createStatefulObject(initialState: any) {
  let privateState = initialState;

  return {
    method1: () => {
      // Acceder/modificar privateState
    },
    method2: () => {
      // Acceder/modificar privateState
    },
  };
}
```

**Ejemplo del problema Counter II:**

```typescript
type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let count = init; // Estado privado capturado por closure

  return {
    increment: () => ++count, // Pre-incremento
    decrement: () => --count, // Pre-decremento
    reset: () => (count = init), // Assignment expression
  };
}
```

**Características clave:**

- **Encapsulación:** Variables privadas inaccesibles desde el exterior
- **Persistencia:** Estado se mantiene entre llamadas a métodos
- **Independencia:** Cada instancia tiene su propio estado separado
- **Memory Safety:** El closure solo mantiene vivas las variables referenciadas

**Ventajas sobre clases:**

```typescript
// ❌ Con clases - estado público
class CounterClass {
  private count: number; // "private" pero aún accesible en runtime

  constructor(init: number) {
    this.count = init;
  }

  increment() {
    return ++this.count;
  }
}

// ✅ Con factory function - estado verdaderamente privado
function createCounter(init: number) {
  let count = init; // Verdaderamente inaccesible

  return {
    increment: () => ++count,
  };
}
```

**Casos de uso:**

- Contadores con estado
- Módulos con API pública y estado privado
- Event emitters personalizados
- State machines simples

### Pre-incremento vs Post-incremento

**Diferencias importantes en el contexto de return values:**

```typescript
let x = 5;

// Pre-incremento: incrementa PRIMERO, luego retorna
let a = ++x; // x = 6, a = 6

// Post-incremento: retorna PRIMERO, luego incrementa
let b = x++; // b = 6, x = 7
```

**En el problema Counter II:**

```typescript
// ✅ Correcto - necesitamos el valor DESPUÉS del incremento
increment: () => ++count; // Incrementa count, luego retorna el nuevo valor

// ❌ Incorrecto - retornaría el valor ANTES del incremento
increment: () => count++; // Retorna valor actual, luego incrementa
```

**Assignment Expression Pattern:**

```typescript
// Patrón útil para operaciones que asignan y retornan
reset: () => (count = init); // Asigna init a count Y retorna ese valor

// Equivalente a:
reset: () => {
  count = init;
  return count;
};
```

---

## Function Transformations (Transformaciones de Funciones)

### Function Composition (Composición de Funciones)

**Definición:** Combinar múltiples funciones para crear una nueva función que ejecuta las funciones componentes de derecha a izquierda.

**Concepto matemático:** f(g(h(x))) - la salida de h se convierte en entrada de g, y la salida de g en entrada de f.

**Implementación:**

```typescript
type F = (x: number) => number;

function compose(functions: F[]): F {
  if (functions.length === 0) {
    return (x: number) => x; // Función identidad
  }

  return function (x: number): number {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
}
```

**Casos de uso:**

- Pipelines de transformación de datos
- Middleware en frameworks web
- Functional programming patterns
- Validaciones en cadena

**Alternativas de implementación:**

```typescript
// Con reduceRight (más funcional)
return function (x: number): number {
  return functions.reduceRight((acc, fn) => fn(acc), x);
};

// Con recursión
function composeRecursive(fns: F[]): F {
  if (fns.length === 0) return (x) => x;
  if (fns.length === 1) return fns[0];

  return function (x: number): number {
    return fns[0](composeRecursive(fns.slice(1))(x));
  };
}
```

### Rest Parameters (Parámetros Rest)

**Definición:** Sintaxis que permite que una función acepte un número indefinido de argumentos como un array.

**Sintaxis:** `...parameterName`

**Implementación básica:**

```typescript
function argumentsLength(...args: any[]): number {
  return args.length;
}

// Ejemplos de uso:
argumentsLength(5); // 1
argumentsLength({}, null, "3"); // 3
argumentsLength(); // 0
```

**Características importantes:**

- **Flexibilidad:** Acepta cualquier cantidad de argumentos
- **Type Safety:** Con TypeScript puedes tipar los argumentos: `...args: number[]`
- **Modern JavaScript:** Reemplaza el objeto `arguments` legacy
- **Array Methods:** Los argumentos se almacenan como array real

**Comparación con `arguments` object:**

```typescript
// ❌ Legacy approach (no recomendado)
function oldWay() {
  return arguments.length; // arguments no es un array real
}

// ✅ Modern approach (recomendado)
function modernWay(...args: any[]): number {
  return args.length; // args es un array real con todos los métodos
}
```

**Casos de uso avanzados:**

```typescript
// Función con parámetros fijos + rest parameters
function greet(greeting: string, ...names: string[]): string {
  return `${greeting} ${names.join(", ")}!`;
}

greet("Hello", "Alice", "Bob", "Charlie"); // "Hello Alice, Bob, Charlie!"

// Separar primer argumento del resto
function processData(action: string, ...data: any[]): any {
  switch (action) {
    case "sum":
      return data.reduce((a, b) => a + b, 0);
    case "concat":
      return data.join("");
    default:
      return data;
  }
}
```

**Diferencias con Spread Operator:**

```typescript
// Rest parameters: función RECIBE múltiples argumentos
function collect(...items: number[]): number[] {
  return items;
}

// Spread operator: ENVIAR array como argumentos individuales
const numbers = [1, 2, 3, 4, 5];
const result = collect(...numbers); // Expande array a argumentos individuales
```

---

## Memoización

### Concepto

**Definición:** Técnica de optimización que almacena los resultados de llamadas a funciones costosas y retorna el resultado en caché cuando se usan las mismas entradas.

**Características:**

- Convierte funciones en versiones optimizadas
- Utiliza el patrón space-time tradeoff (espacio por tiempo)
- Es efectiva para funciones puras
- Implementada usando closures y estructuras de datos de cache

### Implementación base

```typescript
type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache = new Map<string, number>();

  return function (...args: number[]): number {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
```

### JSON.stringify vs toString para claves

**¿Por qué JSON.stringify?**

```typescript
// Problema con toString():
[2, 2].toString(); // "2,2"
[22].toString(); // "22" - Potencial colisión

// Solución con JSON.stringify():
JSON.stringify([2, 2]); // "[2,2]"
JSON.stringify([22]); // "[22]" - Siempre únicos
```

**Casos problemáticos de toString:**

- Arrays anidados: `[[1,2], 3]` vs `[1,2,3]` → ambos dan `"1,2,3"`
- Arrays vacíos: `[]` → `""` (string vacía)
- Elementos especiales: `[null, undefined]` → `","`

### Casos de uso

**Fibonacci optimizado:**

```typescript
const fibOriginal = (n: number): number =>
  n <= 1 ? 1 : fib(n - 1) + fib(n - 2);

const fibMemoized = memoize(fibOriginal);
// Primera llamada: calcula todo
// Llamadas siguientes: O(1) desde cache
```

**Funciones matemáticas costosas:**

```typescript
const expensiveCalculation = memoize((a: number, b: number): number => {
  // Simulación de cálculo costoso
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.pow(a, b) / (i + 1);
  }
  return result;
});
```

### Ventajas y limitaciones

**Ventajas:**

- Acelera funciones con cálculos repetitivos
- Ideal para programación funcional
- Transparente para el código cliente

**Limitaciones:**

- Usa más memoria (cache storage)
- Solo efectiva para funciones puras
- Overhead inicial de verificación de cache

---

## Conclusiones

Los conceptos de JavaScript en el desafío "30 Days of JavaScript" construyen una base sólida en:

---

## Programación Asíncrona

### Promises (Promesas)

**Definición:** Objetos que representan la eventual finalización (o falla) de una operación asíncrona y su valor resultante.

**Estados de una Promise:**

- **Pending**: Estado inicial, ni cumplida ni rechazada
- **Fulfilled**: La operación se completó exitosamente
- **Rejected**: La operación falló

**Características principales:**

- Permiten manejar operaciones asíncronas de manera más limpia que callbacks
- Evitan el "callback hell"
- Soportan encadenamiento (chaining)
- Son inmutables una vez resueltas

**Ejemplo básico:**

```typescript
const promiseExample = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});

promiseExample
  .then((value) => console.log(value)) // 42
  .catch((error) => console.error(error));
```

### Async/Await

**Definición:** Sintaxis moderna para trabajar con promesas de manera más legible y sincrónica.

**Características:**

- `async` convierte una función en función asíncrona (retorna Promise)
- `await` pausa la ejecución hasta que la Promise se resuelve
- Hace que el código asíncrono se lea como código síncrono
- Facilita el manejo de errores con try/catch

**Ejemplo del problema Add Two Promises:**

```typescript
export async function addTwoPromises(
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> {
  const valor1 = await promise1;
  const valor2 = await promise2;
  return valor1 + valor2;
}
```

**Casos de uso comunes:**

- Llamadas a APIs
- Operaciones de base de datos
- Lectura/escritura de archivos
- Timers y delays

### Promise.all()

**Definición:** Método estático que ejecuta múltiples promesas concurrentemente y espera a que todas se resuelvan.

**Ventajas:**

- Ejecución concurrente (paralela)
- Mejor rendimiento cuando las promesas son independientes
- Falla rápido (fail-fast): si una falla, todas fallan

**Comparación de enfoques:**

```typescript
// Secuencial (menos eficiente)
const value1 = await promise1; // Espera promise1
const value2 = await promise2; // Luego espera promise2
// Tiempo total: tiempo1 + tiempo2

// Concurrente (más eficiente)
const [value1, value2] = await Promise.all([promise1, promise2]);
// Tiempo total: Math.max(tiempo1, tiempo2)
```

**Cuándo usar cada uno:**

- **Secuencial**: Cuando una promesa depende del resultado de otra
- **Concurrente**: Cuando las promesas son independientes entre sí

### Error Handling en Promises

**Con .catch():**

```typescript
promise
  .then((result) => handleSuccess(result))
  .catch((error) => handleError(error));
```

**Con async/await:**

```typescript
async function handlePromise() {
  try {
    const result = await promise;
    handleSuccess(result);
  } catch (error) {
    handleError(error);
  }
}
```

### Promise Constructor Pattern

**Definición:** Patrón para crear Promises personalizadas envolviendo operaciones asíncronas que no son nativas de Promises.

**Estructura básica:**

```typescript
const customPromise = new Promise((resolve, reject) => {
  // Lógica asíncrona
  // Llamar resolve(value) en caso de éxito
  // Llamar reject(error) en caso de error
});
```

**Ejemplo del problema Sleep:**

```typescript
export async function sleep(millis: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, millis));
}
```

**Parámetros del constructor:**

- **`resolve`**: Función para completar la Promise exitosamente
- **`reject`**: Función para completar la Promise con error

**Casos de uso comunes:**

- Envolver APIs callback-based
- Crear delays/timeouts personalizados
- Integrar bibliotecas externas que no usan Promises
- Testing con delays controlados

### Timer-based Asynchronous Operations

**Concepto:** Uso de timers (setTimeout, setInterval) combinados con Promises para operaciones asíncronas basadas en tiempo.

**Patrón Sleep/Delay:**

```typescript
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Uso con async/await
async function delayedOperation() {
  console.log("Antes del delay");
  await delay(1000);
  console.log("Después del delay");
}
```

**Patrón Timeout with Value:**

```typescript
function delayWithValue<T>(ms: number, value: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

const result = await delayWithValue(500, "¡Completado!");
```

**Consideraciones importantes:**

- Los timers de JavaScript no son precisos al milisegundo
- Los timers pueden ser afectados por la carga del sistema
- Siempre permite cierta tolerancia en tests de timing

### Async/Await Error Handling

**Manejo básico con try/catch:**

```typescript
async function safeAsyncOperation(): Promise<string> {
  try {
    const result = await riskyAsyncOperation();
    return result;
  } catch (error) {
    console.error("Error en operación asíncrona:", error);
    throw error; // Re-lanzar si es necesario
  }
}
```

**Patrón de retry con delay:**

```typescript
async function retryWithDelay<T>(
  operation: () => Promise<T>,
  retries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    if (retries > 0) {
      await sleep(delayMs);
      return retryWithDelay(operation, retries - 1, delayMs);
    }
    throw error;
  }
}
```

### Non-blocking vs Blocking Operations

**Concepto:** Diferencia entre operaciones que bloquean el event loop vs operaciones asíncronas.

**Operación bloqueante (EVITAR):**

```javascript
// ❌ Esto bloquearía el navegador
function blockingSleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Bucle activo que bloquea
  }
}
```

**Operación no-bloqueante (CORRECTO):**

```typescript
// ✅ Esto no bloquea el event loop
async function nonBlockingSleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
```

**Beneficios de operaciones no-bloqueantes:**

- El navegador sigue respondiendo
- Otras operaciones pueden ejecutarse
- Mejor experiencia de usuario
- Permite concurrencia

### Tipado con TypeScript

**Promesas tipadas:**

```typescript
const numberPromise: Promise<number> = Promise.resolve(42);
const stringPromise: Promise<string> = Promise.resolve("hello");

async function typedFunction(): Promise<boolean> {
  return true; // TypeScript automáticamente envuelve en Promise<boolean>
}
```

**Beneficios del tipado:**

- Detección temprana de errores
- Mejor autocompletado en IDE
- Documentación implícita del código
- Refactoring más seguro

---

## Resumen de Conceptos

---

## Timer-Based Operations & Cancellation Patterns

### setTimeout y clearTimeout

**Concepto:** Programar la ejecución de código después de un retraso específico, con capacidad de cancelación.

**Patrón básico:**

```typescript
const timerId = setTimeout(() => {
  console.log("Ejecutado después de 1000ms");
}, 1000);

// Cancelar si es necesario
clearTimeout(timerId);
```

**Implementación con cancelación (Timeout Cancellation):**

```typescript
function cancellable(fn: Function, args: any[], t: number): Function {
  const timerId = setTimeout(() => {
    fn(...args);
  }, t);

  return () => {
    clearTimeout(timerId);
  };
}
```

**Casos de uso:**

- Delayed function execution
- Debouncing
- Timeout mechanisms
- User interaction delays

### setInterval y clearInterval

**Concepto:** Ejecutar código repetidamente en intervalos específicos.

**Patrón básico:**

```typescript
const intervalId = setInterval(() => {
  console.log("Ejecutado cada 1000ms");
}, 1000);

// Cancelar cuando sea necesario
clearInterval(intervalId);
```

**Implementación con ejecución inmediata (Interval Cancellation):**

```typescript
function cancellable(fn: Function, args: any[], t: number): Function {
  // Ejecutar inmediatamente
  fn(...args);

  // Luego repetir cada t ms
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  return () => {
    clearInterval(intervalId);
  };
}
```

**Casos de uso importantes:**

- **Polling**: Verificar estado repetidamente
- **Animaciones**: Actualizar elementos cada frame
- **Heartbeat**: Enviar señales periódicas
- **Background tasks**: Limpieza, sincronización

### Diferencias Clave: setTimeout vs setInterval

| Aspecto          | setTimeout                 | setInterval                      |
| ---------------- | -------------------------- | -------------------------------- |
| **Ejecuciones**  | Una sola vez               | Repetidas                        |
| **Timing**       | Delay inicial              | Ejecución inmediata + repetición |
| **Patrón**       | Delay → Execute            | Execute → Delay → Execute → ...  |
| **Cancelación**  | clearTimeout               | clearInterval                    |
| **Memory usage** | Libera después de ejecutar | Persiste hasta cancelación       |

**Ejemplo comparativo:**

```typescript
// setTimeout: Una ejecución después de delay
setTimeout(() => console.log("Una vez"), 1000);

// setInterval: Ejecución inmediata + repeticiones
const cancel = cancellable(() => console.log("Repetido"), [], 1000);
// Output: "Repetido" en t=0, t=1000, t=2000, ...
```

### Closures en Timing Operations

**Concepto clave:** Los timer IDs deben ser accesibles para cancelación posterior.

```typescript
function createCancellableTimer(fn: Function, delay: number) {
  let timerId: NodeJS.Timeout | null = null;

  return {
    start: () => {
      timerId = setTimeout(fn, delay);
    },
    cancel: () => {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
    },
  };
}
```

**Beneficios del patrón:**

- **Encapsulación:** Timer ID protegido en closure
- **Control preciso:** Cancelación cuando sea necesario
- **Prevención de memory leaks:** Limpieza adecuada de timers

### Immediate Execution + Periodic Patterns

**Concepto específico:** Combinar ejecución inmediata con repetición periódica.

```typescript
// Anti-patrón: Solo setInterval (pierde ejecución inmediata)
const bad = setInterval(fn, 1000); // Primera ejecución en t=1000

// Patrón correcto: Inmediato + Interval
fn(); // t=0
const good = setInterval(fn, 1000); // t=1000, t=2000, ...
```

**Aplicaciones reales:**

- **UI Updates**: Mostrar datos inmediatamente + actualizaciones
- **Status checking**: Verificar estado ahora + monitoreo continuo
- **Progress tracking**: Inicio inmediato + updates periódicos

### Race Conditions en JavaScript

**Concepto:** Competencia entre eventos asíncronos para determinar el resultado.

**Ejemplo - Timeout vs Cancellation:**

```typescript
// ¿Qué llega primero?
// Opción 1: Ejecutar función en 20ms
const timerId = setTimeout(fn, 20);

// Opción 2: Cancelar en 50ms
setTimeout(() => clearTimeout(timerId), 50);

// Resultado: La función se ejecuta (20ms < 50ms)
```

**Manejo automático en JavaScript:**

- Event loop maneja el timing
- No necesitas sincronización manual
- Los timers son cancelables hasta el momento de ejecución

### Best Practices para Timer Operations

**1. Siempre manejar cancelación:**

```typescript
// ✅ Bueno: Función de cancelación disponible
const cancel = cancellable(fn, args, t);
// ... usar cancel() cuando sea necesario

// ❌ Malo: Timer sin capacidad de cancelación
setInterval(fn, t); // Posible memory leak
```

**2. Limpiar en cleanup:**

```typescript
// En React, Angular, etc.
useEffect(() => {
  const cancel = cancellable(fn, args, t);
  return cancel; // Cleanup automático
}, []);
```

**3. Manejar edge cases:**

```typescript
function robustCancellable(fn: Function, args: any[], t: number) {
  // Validar inputs
  if (typeof fn !== "function") throw new Error("fn must be function");
  if (t < 0) throw new Error("t must be positive");

  fn(...args);
  const id = setInterval(() => fn(...args), t);

  let cancelled = false;
  return () => {
    if (!cancelled) {
      clearInterval(id);
      cancelled = true;
    }
  };
}
```

**Concepto clave:** Los timer IDs deben ser accesibles para cancelación posterior.

```typescript
function createCancellableTimer(fn: Function, delay: number) {
  let timerId: NodeJS.Timeout | null = null;

  return {
    start: () => {
      timerId = setTimeout(fn, delay);
    },
    cancel: () => {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
    },
  };
}
```

**Beneficios del patrón:**

- **Encapsulación:** Timer ID protegido en closure
- **Control preciso:** Cancelación cuando sea necesario
- **Prevención de memory leaks:** Limpieza adecuada de timers

### Race Conditions en JavaScript

**Concepto:** Competencia entre eventos asíncronos para determinar el resultado.

**Ejemplo - Timeout vs Cancellation:**

```typescript
// ¿Qué llega primero?
// Opción 1: Ejecutar función en 20ms
const timerId = setTimeout(fn, 20);

// Opción 2: Cancelar en 50ms
setTimeout(() => clearTimeout(timerId), 50);

// Resultado: La función se ejecuta (20ms < 50ms)
```

### Best Practices para Timer Operations

**1. Siempre manejar cancelación:**

```typescript
// ✅ Bueno: Función de cancelación disponible
const cancel = cancellable(fn, args, t);
// ... usar cancel() cuando sea necesario

// ❌ Malo: Timer sin capacidad de cancelación
setInterval(fn, t); // Posible memory leak
```

**2. Limpiar en cleanup:**

```typescript
// En React, Angular, etc.
useEffect(() => {
  const cancel = cancellable(fn, args, t);
  return cancel; // Cleanup automático
}, []);
```

**3. Manejar edge cases:**

```typescript
function robustCancellable(fn: Function, args: any[], t: number) {
  // Validar inputs
  if (typeof fn !== "function") throw new Error("fn must be function");
  if (t < 0) throw new Error("t must be positive");

  fn(...args);
  const id = setInterval(() => fn(...args), t);

  let cancelled = false;
  return () => {
    if (!cancelled) {
      clearInterval(id);
      cancelled = true;
    }
  };
}
```

### Promise.race() y Timeout Patterns

**Concepto:** Usar `Promise.race()` para crear timeouts controlados en operaciones asíncronas.

**Promise.race() fundamentals:**

```typescript
// Promise.race retorna la primera Promise que se resuelve/rechaza
const fast = new Promise((resolve) => setTimeout(() => resolve("rápida"), 100));
const slow = new Promise((resolve) => setTimeout(() => resolve("lenta"), 500));

const result = await Promise.race([fast, slow]);
console.log(result); // "rápida" (termina primero)
```

**Patrón Promise Time Limit:**

```typescript
function timeLimit(fn: Function, t: number): Function {
  return async function (...args) {
    // Promise que rechaza después de t ms
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    // Race entre función original y timeout
    return Promise.race([fn(...args), timeoutPromise]);
  };
}
```

**Casos de uso del patrón:**

- **API calls con timeout**: Evitar que requests se cuelguen
- **User interactions**: Timeout en prompts o confirmaciones
- **Background processing**: Limitar tiempo de operaciones costosas
- **Testing**: Timeouts en tests asíncronos

**Características importantes:**

```typescript
// ✅ El primer Promise que complete "gana"
// ✅ Errores originales se propagan correctamente
// ✅ Funciona con cualquier función async
// ✅ Preserva argumentos originales usando ...args
```

### Controlled Race Conditions

**Concepto:** Race conditions intencionales donde el primer evento determina el resultado.

**Diferencias con race conditions problemáticas:**

| Aspecto             | Race Condition Problemática | Controlled Race Condition  |
| ------------------- | --------------------------- | -------------------------- |
| **Intención**       | Bug no deseado              | Comportamiento planificado |
| **Predictibilidad** | Resultado impredecible      | Resultado determinístico   |
| **Manejo**          | Debe evitarse               | Debe implementarse bien    |
| **Ejemplo**         | Shared state mutation       | Promise.race() timeout     |

**Patrones comunes:**

```typescript
// 1. Timeout pattern
Promise.race([actualOperation(), timeoutPromise(5000)]);

// 2. Multiple source pattern
Promise.race([fetchFromPrimaryAPI(), fetchFromBackupAPI()]);

// 3. User choice vs auto-action
Promise.race([userClickPromise(), autoActionAfterDelay(10000)]);
```

### Promise Constructor con setTimeout

**Patrón:** Convertir callback-based APIs a Promises.

**Estructura básica:**

```typescript
function promisifyWithTimeout<T>(
  callbackFn: (callback: (result: T) => void) => void,
  timeoutMs: number
): Promise<T> {
  return new Promise((resolve, reject) => {
    let completed = false;

    // Setup timeout
    const timeoutId = setTimeout(() => {
      if (!completed) {
        completed = true;
        reject(new Error("Operation timed out"));
      }
    }, timeoutMs);

    // Execute callback function
    callbackFn((result: T) => {
      if (!completed) {
        completed = true;
        clearTimeout(timeoutId);
        resolve(result);
      }
    });
  });
}
```

**Error Propagation en Promise.race:**

```typescript
// La función original puede:
// 1. Resolver antes del timeout → resultado exitoso
// 2. Rechazar antes del timeout → error original se propaga
// 3. No completar antes del timeout → "Time Limit Exceeded"

async function example() {
  try {
    const result = await timeLimitedFunction();
    // Caso 1: función completó exitosamente
  } catch (error) {
    if (error === "Time Limit Exceeded") {
      // Caso 3: timeout
    } else {
      // Caso 2: error original de la función
    }
  }
}
```

### Memory Management en Async Operations

**Consideraciones importantes:**

```typescript
// ✅ Los timeouts continúan ejecutándose aunque no los necesitemos
function timeLimit(fn: Function, t: number): Function {
  return async function (...args) {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    // Este timeout seguirá ejecutándose aunque Promise.race ya termine
    return Promise.race([fn(...args), timeoutPromise]);
  };
}
```

**¿Es esto un problema?**

- **No para timeouts normales**: JavaScript maneja esto automáticamente
- **Sí para operaciones costosas**: Cancelar explícitamente si es posible
- **Best practice**: Cleanup explícito cuando sea crítico

**Cleanup avanzado (opcional):**

```typescript
function timeLimit(fn: Function, t: number): Function {
  return async function (...args) {
    let timeoutId: NodeJS.Timeout;

    const timeoutPromise = new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    try {
      const result = await Promise.race([fn(...args), timeoutPromise]);
      clearTimeout(timeoutId); // Cleanup explícito
      return result;
    } catch (error) {
      clearTimeout(timeoutId); // Cleanup en error también
      throw error;
    }
  };
}
```

---

## Resumen de Conceptos Aplicados

1. **Programación Funcional:** Higher-order functions, closures, pure functions, function composition
2. **Modern JavaScript:** Arrow functions, rest parameters, destructuring, spread operator
3. **TypeScript:** Type safety, interfaces, generics
4. **Patrones de Diseño:** Factory, module, functional patterns
5. **State Management:** Closures para encapsulación y persistencia
6. **Function Transformations:** Composición, argumentos variables, pipelines funcionales
7. **Programación Asíncrona:** Promises, async/await, Promise.all(), error handling, Promise constructor, timer-based operations
8. **Timer Operations:**
   - setTimeout/clearTimeout vs setInterval/clearInterval
   - Immediate execution + periodic patterns
   - Cancellation patterns y memory leak prevention
   - Race conditions y timing coordination
   - Best practices para timer management
9. **Promise Racing & Timeouts:**
   - Promise.race() para controlled race conditions
   - Timeout patterns con Promise constructor + setTimeout
   - Error propagation en racing scenarios
   - Memory management en async operations
   - Cleanup patterns para operaciones costosas
10. **Mejores Prácticas:** Inmutabilidad, testing, error handling, non-blocking operations, robust input validation

### Conceptos Específicos Agregados

- **Promise Time Limit**: Racing entre función y timeout para control de tiempo
- **Controlled Race Conditions**: Race conditions intencionales vs problemáticas
- **Promise.race() patterns**: Timeouts, multiple sources, user choice scenarios
- **Error propagation**: Cómo se manejan errores en Promise.race scenarios
- **Async memory management**: Consideraciones para cleanup en operaciones asíncronas

### Patrones de Timer y Promise Integration

- **Timeout Cancellation**: Delayed execution con capacidad de cancelación
- **Interval Cancellation**: Immediate + periodic execution con cancelación
- **Promise Time Limit**: Promise racing con timeout automático
- **Closure-based management**: Encapsulación de timer IDs y Promise states
- **Memory and cleanup**: Prevención de leaks en operaciones async complejas

---

## Manipulación de Tipos de Datos y JSON

### Type Detection y Object/Array Discrimination

**Problema común:** JavaScript trata arrays como objetos cuando usamos `typeof`

```typescript
typeof []; // → "object" 😕
typeof {}; // → "object" 😕
```

**Solución con `Array.isArray()`:**

```typescript
Array.isArray([]); // → true ✅
Array.isArray({}); // → false ✅
Array.isArray([1, 2, 3]); // → true
Array.isArray({ x: 5 }); // → false
```

### Optimización O(1) para Object Emptiness

**Problema:** `Object.keys(obj).length` es O(n) porque enumera todas las propiedades

**Solución O(1) con `for...in` early return:**

```typescript
function isEmpty(obj: Record<string, any> | any[]): boolean {
  if (Array.isArray(obj)) {
    return obj.length === 0; // Arrays: O(1) naturalmente
  }

  // Objetos: O(1) verdadero con early termination
  for (let key in obj) {
    return false; // Si hay al menos una propiedad, no está vacío
  }
  return true; // Si nunca entró al loop, está vacío
}
```

**Comparación de enfoques:**

| Método                  | Arrays | Objetos  | Complejidad Real |
| ----------------------- | ------ | -------- | ---------------- |
| `Object.keys().length`  | O(1)   | **O(n)** | No óptimo        |
| `for...in` early return | O(1)   | **O(1)** | Óptimo ✅        |

### Técnicas de Early Termination

**Concepto:** Terminar la evaluación tan pronto como se encuentre evidencia suficiente

**Aplicaciones:**

- **Existence checking**: ¿Existe al menos una propiedad?
- **Validation**: ¿Hay al menos un error?
- **Search**: ¿Se encuentra el elemento buscado?

**Pattern típico:**

```typescript
for (let item in collection) {
  if (condition(item)) {
    return true; // Found evidence, stop immediately
  }
}
return false; // No evidence found after checking all
```

### JSON Processing Patterns

**Validación de estructuras JSON:**

- Input siempre válido desde `JSON.parse`
- Distinguir arrays vs objetos para processing diferente
- Optimizar para casos de uso específicos (emptiness, validation, etc.)

**Casos de uso comunes:**

- **API payload validation**: Verificar si requests están vacíos
- **Form data processing**: Determinar si campos tienen contenido
- **Configuration checking**: Validar si configuraciones están presentes
- **Cache optimization**: Evitar operaciones en estructuras vacías

Estos conceptos son fundamentales para desarrollo moderno de JavaScript/TypeScript y aplicaciones web, especialmente en paradigmas de programación funcional y asíncrona, con énfasis especial en timing operations, async coordination, promise racing patterns, y optimización de performance en manipulación de datos.
