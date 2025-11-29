# Valid Parentheses

Determinar si una cadena de paréntesis, llaves y corchetes está correctamente balanceada.

## Ejemplos

- Input: "()"
- Output: true

- Input: "()[]{}"
- Output: true

- Input: "(]"
- Output: false

- Input: "([])"
- Output: true

- Input: "([)]"
- Output: false

## Análisis

Este problema requiere verificar que los paréntesis estén **balanceados** y en el **orden correcto**. La clave está en entender que necesitamos:

1. **Recordar qué paréntesis están abiertos** - no solo cuántos
2. **Verificar que se cierren en orden LIFO** (Last In, First Out)
3. **Validar que cada cierre coincida con su apertura correspondiente**

El patrón LIFO nos indica que necesitamos una estructura **Stack (pila)**.

## Enfoque detallado

### Algoritmo paso a paso:

1. **Inicializar stack vacío**: `let stack: string[] = [];`

2. **Iterar sobre cada carácter**:

   - **Si es apertura** `(`, `{`, `[` → **push al stack**
   - **Si es cierre** `)`, `}`, `]`:
     - **Verificar stack no vacío** (sino hay apertura sin cerrar)
     - **Pop del stack** y verificar que coincida con el cierre actual
     - **Si no coincide** → return false inmediatamente

3. **Al final**: Stack debe estar vacío (todos los pares cerrados)

### Ejemplo de ejecución con "([])":

```
char: '(' → stack = ['(']
char: '[' → stack = ['(', '[']
char: ']' → pop '[', coincide con ']' ✓ → stack = ['(']
char: ')' → pop '(', coincide con ')' ✓ → stack = []
stack.length === 0 → return true ✓
```

### ¿Por qué no un simple contador?

**Consideramos usar contadores**, pero fallan con casos como `"([)]"`:

- Contador: `(` → +1, `[` → +2, `)` → +1, `]` → 0 ✓ (incorrecto)
- Stack: `(` → `['(']`, `[` → `['(','[']`, `)` → pop `'['` ≠ `)` → false ✓

**El stack es necesario** porque debemos recordar **qué tipo** y **en qué orden** están los paréntesis abiertos.

## Refactorización con Record

### Versión inicial vs Versión optimizada

**Problema de la versión inicial**: Repetición de código y múltiples comparaciones:

```typescript
if (
  (char === ")" && last !== "(") ||
  (char === "}" && last !== "{") ||
  (char === "]" && last !== "[")
) {
  return false;
}
```

**Solución mejorada**: Uso de `Record<string, string>` para mapear pares:

```typescript
const pairs: Record<string, string> = {
  ")": "(",
  "}": "{",
  "]": "[",
};

// Una sola comparación elegante
if (last !== pairs[char]) return false;
```

### Ventajas de la estrategia Record:

1. **Eliminación de repetición**: Una sola línea en lugar de 3 comparaciones
2. **Mantenibilidad**: Agregar nuevos tipos de paréntesis requiere solo una línea en el objeto
3. **Legibilidad**: La relación entre apertura/cierre es explícita y visual
4. **Menos propenso a errores**: No puedes olvidar agregar un tipo de paréntesis
5. **Escalabilidad**: Fácil extensión para otros símbolos de agrupación

### ¿Por qué funciona mejor?

- **Separación de responsabilidades**: Los datos (pares) están separados de la lógica
- **Principio DRY**: Don't Repeat Yourself - eliminamos código duplicado
- **Lookup O(1)**: Acceso a las propiedades del objeto es constante
- **Código autodocumentado**: El objeto `pairs` explica qué caracteres se emparejan

### ¿Por qué cierre como key y apertura como value?

**Razón fundamental**: Solo necesitamos el lookup cuando encontramos un **carácter de cierre**.

```typescript
const pairs: Record<string, string> = {
  ")": "(", // key = cierre, value = apertura esperada
  "}": "{",
  "]": "[",
};

for (const char of s) {
  if (char === "(" || char === "{" || char === "[") {
    // APERTURA: Solo push - NO necesitamos lookup
    stack.push(char);
  } else {
    // CIERRE: Aquí SÍ necesitamos el lookup
    const last = stack.pop();
    if (last !== pairs[char]) return false; // char es SIEMPRE de cierre
  }
}
```

### Paso a paso con ejemplos:

#### **Ejemplo 1: Input `"()"`**

```
'(' → apertura → stack = ['(']
')' → cierre → pairs[')'] = '(' → last = '(' → '(' === '(' ✓ → stack = []
Resultado: true ✓
```

#### **Ejemplo 2: Input `"([])"`**

```
'(' → apertura → stack = ['(']
'[' → apertura → stack = ['(', '[']
']' → cierre → pairs[']'] = '[' → last = '[' → '[' === '[' ✓ → stack = ['(']
')' → cierre → pairs[')'] = '(' → last = '(' → '(' === '(' ✓ → stack = []
Resultado: true ✓
```

#### **Ejemplo 3: Input `"(]"` (fallido)**

```
'(' → apertura → stack = ['(']
']' → cierre → pairs[']'] = '[' → last = '(' → '(' !== '[' ✗ → return false
Resultado: false ✓
```

**¿Qué pasaría si fuera al revés?**

```typescript
// MAL - No funcionaría
const pairs = { "(": ")", "{": "}", "[": "]" };

// Cuando char = ')':
// Necesitaríamos pairs[')'] pero tenemos pairs['(']
// ¡No sabríamos qué buscar!
```

### Alternativas consideradas:

1. **Switch statement**: Más verboso, mismo problema de repetición
2. **Array de arrays**: `[[')', '('], ['}', '{']]` - menos legible
3. **Map()**: Funcionalmente equivalente, pero Record es más directo para strings

La versión con Record es **superior** porque combina **claridad**, **mantenibilidad** y **eficiencia**.

## Casos extremos

- **Cadena vacía**: `""` → return true (técnicamente balanceada)
- **Solo aperturas**: `"((("` → stack no vacío al final → false
- **Solo cierres**: `")))"` → stack vacío en primer cierre → false
- **Tipos mezclados incorrectos**: `"([)]"` → orden incorrecto → false
- **Un solo carácter**: `"("` → stack no vacío → false

## Complejidad

- **Time complexity**: O(n) - visitamos cada carácter exactamente una vez. Las operaciones `push()` y `pop()` son O(1).

- **Space complexity**: O(n) - en el peor caso (todos caracteres de apertura como `"(((((("`), el stack contiene todos los caracteres de la cadena.

## Conclusión

**Lecciones aprendidas**:

1. **Los stacks son ideales** para problemas de **balanceo** y **orden LIFO**
2. **Un contador simple no basta** cuando necesitas recordar **tipos específicos** y **orden**
3. **La detección temprana** (return false apenas detectas error) mejora eficiencia
4. **Los arrays en JavaScript** funcionan perfectamente como stacks con `push()` y `pop()`

Este problema es un **ejemplo clásico** del patrón Stack y aparece frecuentemente en entrevistas técnicas.
