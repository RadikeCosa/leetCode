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

---

## Conclusiones

Los conceptos de JavaScript en el desafío "30 Days of JavaScript" construyen una base sólida en:

1. **Programación Funcional:** Higher-order functions, closures, pure functions
2. **Modern JavaScript:** Arrow functions, rest parameters, destructuring
3. **TypeScript:** Type safety, interfaces, generics
4. **Patrones de Diseño:** Factory, module, functional patterns
5. **Mejores Prácticas:** Inmutabilidad, testing, error handling

Estos conceptos son fundamentales para desarrollo moderno de JavaScript/TypeScript y aplicaciones web.
