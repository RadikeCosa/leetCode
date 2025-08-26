# Intuition

Al leer el problema, inmediatamente reconocí que se trata de una **función de orden superior** (higher-order function). La clave está en entender que `createHelloWorld` debe actuar como una "factory" que produce funciones con comportamiento específico y fijo.

La intuición es simple: necesito una función que retorne otra función, y esta función interna siempre debe devolver "Hello World" sin importar los argumentos que reciba.

# Approach

Mi enfoque se basa en los siguientes conceptos de JavaScript:

1. **Function Factory Pattern**: `createHelloWorld` es una función que manufactura otras funciones
2. **Closure**: La función interna mantiene acceso al valor "Hello World"
3. **Rest Parameters**: Uso `...args: any[]` para aceptar cualquier cantidad de argumentos
4. **Ignorar parámetros**: La función interna no usa los argumentos recibidos

**Pasos de implementación:**

1. Definir `createHelloWorld()` que no toma parámetros
2. Retornar una función anónima que acepta `...args: any[]`
3. La función interna siempre retorna la cadena literal `"Hello World"`
4. Los argumentos se capturan pero se ignoran completamente

**Alternativas consideradas:**

- Arrow functions para sintaxis más concisa
- Función inmediatamente invocada (IIFE)
- Todas funcionan, pero elegí la forma más explícita para claridad

# Complexity

- **Time complexity**: O(1) - Operación de tiempo constante tanto para crear la función como para ejecutarla
- **Space complexity**: O(1) - No se almacena información adicional ni se crean estructuras de datos

# Code

```ts
export function createHelloWorld(): (...args: any[]) => string {
  return function (...args: any[]): string {
    return "Hello World";
  };
}
```

**Versión alternativa con arrow functions:**

```ts
export const createHelloWorld =
  () =>
  (...args: any[]) =>
    "Hello World";
```

# Notes

- **Edge cases**: La función maneja correctamente todos los casos extremos automáticamente
- **Closure behavior**: Aunque simple, demuestra el concepto de closure donde la función interna "recuerda" el valor que debe retornar
- **Function purity**: La función es completamente pura - misma entrada produce misma salida, sin efectos secundarios
- **Scalability**: Este patrón es muy útil para crear funciones configurables en aplicaciones reales
- **Alternative approaches**: Se podrían usar arrow functions para mayor concisión, pero la forma elegida es más didáctica

**Conceptos JavaScript aprendidos:**

- Higher-order functions
- Closures básicos
- Rest parameters
- Function expressions
- Factory pattern
