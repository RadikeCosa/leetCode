# Find N Unique Integers Sum up to Zero

Dado un entero `n`, devolver cualquier array que contenga `n` enteros únicos cuya suma sea `0`.

## Ejemplos

### Ejemplo 1:

- Input: n = 5
- Output: [-7,-1,1,3,4]
- Explicación: Estos arrays también son aceptados [-5,-1,1,2,3] , [-3,-1,2,-2,4].

### Ejemplo 2:

- Input: n = 3
- Output: [-1,0,1]

### Ejemplo 3:

- Input: n = 1
- Output: [0]

## Análisis

Este problema presenta un desafío interesante para el testing porque **permite múltiples respuestas válidas**. Para n=3, tanto `[-1,0,1]` como `[-3,1,2]` son soluciones correctas.

### 🎯 **Enfoque de Testing Profesional: Property-Based Testing**

En lugar de testear respuestas específicas (approach frágil), implementamos **"Contract Testing"** verificando las propiedades que debe cumplir cualquier solución válida:

#### **Propiedades/Invariantes a verificar:**

1. **Longitud correcta**: `result.length === n`
2. **Elementos únicos**: No hay duplicados en el array
3. **Suma cero**: La suma total es exactamente 0

#### **Helper Functions implementadas:**

```typescript
const hasCorrectLength = (arr: number[], expectedLength: number): boolean => {
  return arr.length === expectedLength;
};

const hasUniqueElements = (arr: number[]): boolean => {
  const uniqueSet = new Set(arr);
  return uniqueSet.size === arr.length; // Set elimina duplicados automáticamente
};

const sumsToZero = (arr: number[]): boolean => {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum === 0;
};

const isValidSolution = (arr: number[], n: number): boolean => {
  return hasCorrectLength(arr, n) && hasUniqueElements(arr) && sumsToZero(arr);
};
```

#### **Ventajas de este enfoque:**

- ✅ **Flexibilidad**: Acepta cualquier solución válida
- ✅ **Debugging claro**: Sabes exactamente qué propiedad falla
- ✅ **Reutilizable**: Las helpers se pueden usar en otros problemas
- ✅ **Mantenible**: Si cambia el algoritmo, los tests siguen funcionando

#### **Patrón de Test implementado:**

```typescript
it("should return valid solution for n = 3", () => {
  const result = sumZero(3);
  expect(isValidSolution(result, 3)).toBe(true);
});
```

Este patrón es el **estándar profesional** para problemas con múltiples respuestas válidas.

## Enfoque detallado

### 🎯 **Algoritmo: Pares Simétricos con Orden**

La solución se basa en el concepto de **pares simétricos** (-x, +x) que se cancelan entre sí, con el 0 como elemento neutral para números impares.

#### **Análisis matemático:**

- **Números pares**: `n/2` pares simétricos → `[-2, -1, 1, 2]` para n=4
- **Números impares**: `(n-1)/2` pares simétricos + 0 en el centro → `[-2, -1, 0, 1, 2]` para n=5

#### **Implementación paso a paso:**

```typescript
export function sumZero(n: number): number[] {
  if (n === 1) return [0]; // Caso base

  const result: number[] = [];
  const numPairs = Math.floor(n / 2); // Cantidad de pares simétricos

  // 1. Generar negativos en orden creciente: [-3, -2, -1]
  for (let i = numPairs; i >= 1; i--) {
    result.push(-i);
  }

  // 2. Agregar 0 si n es impar (queda en el centro)
  if (n % 2 === 1) {
    result.push(0);
  }

  // 3. Generar positivos en orden creciente: [1, 2, 3]
  for (let i = 1; i <= numPairs; i++) {
    result.push(i);
  }

  return result; // Resultado: [-3, -2, -1, 0, 1, 2, 3]
}
```

#### **Ejemplos de ejecución:**

**n = 4 (par):**

- `numPairs = 2`
- Negativos: `[-2, -1]`
- Sin cero (n es par)
- Positivos: `[1, 2]`
- **Resultado**: `[-2, -1, 1, 2]` ✅

**n = 5 (impar):**

- `numPairs = 2`
- Negativos: `[-2, -1]`
- Cero: `[0]` (n es impar)
- Positivos: `[1, 2]`
- **Resultado**: `[-2, -1, 0, 1, 2]` ✅

#### **Ventajas del enfoque:**

- ✅ **Orden natural**: Array siempre ordenado de menor a mayor
- ✅ **Cero centrado**: Para números impares, el 0 queda exactamente en el medio
- ✅ **Simetría visual**: Patrón matemático claro y elegante
- ✅ **Fácil verificación**: La suma es obviamente 0 por construcción

### 🔄 **Enfoques Alternativos Considerados**

#### **📍 Enfoque 1: Pares intercalados (descartado)**

```typescript
// Genera: [1, -1, 2, -2, 0] para n=5
for (let i = 1; i <= numPairs; i++) {
  result.push(i, -i);
}
if (n % 2 === 1) result.push(0);
```

**❌ Descartado porque:**

- Resultado desordenado: `[1, -1, 2, -2, 0]`
- Estéticamente menos agradable
- 0 no queda centrado

#### **📍 Enfoque 2: Generar y ordenar (ineficiente)**

```typescript
// Generar números y luego ordenar
for (let i = 1; i <= numPairs; i++) {
  result.push(i, -i);
}
if (n % 2 === 1) result.push(0);
return result.sort((a, b) => a - b); // O(n log n)!
```

**❌ Descartado porque:**

- **Complejidad O(n log n)** en lugar de O(n)
- Innecesario cuando podemos generar ordenado

#### **📍 Enfoque 3: Construcción por rangos (complejo)**

```typescript
// Calcular rangos y construir
const negatives = Array.from(
  { length: numPairs },
  (_, i) => -(i + 1)
).reverse();
const positives = Array.from({ length: numPairs }, (_, i) => i + 1);
const middle = n % 2 === 1 ? [0] : [];
return [...negatives, ...middle, ...positives];
```

**❌ Descartado porque:**

- **Múltiples allocaciones** de arrays temporales
- **Spread operator** menos eficiente que direct indexing
- Código más complejo sin beneficios

#### **📍 Enfoque 4: Array pre-allocated (elegido)**

```typescript
// Versión final optimizada
const result = new Array<number>(n); // Pre-allocación
let index = 0;
// Llenar con direct indexing: result[index++] = value
```

**✅ Elegido porque:**

- **Performance superior**: Pre-allocación + direct indexing
- **Memoria eficiente**: Una sola allocación
- **Código limpio**: Patrón idiomático

### 🎨 **Métodos de Ordenamiento Alternativos**

#### **🔢 Orden por construcción (elegido)**

```typescript
// Genera directamente: [-2, -1, 0, 1, 2]
// O(n) - Una sola pasada
for (let i = numPairs; i >= 1; i--) result[index++] = -i; // Negativos
if (n % 2 === 1) result[index++] = 0; // Cero
for (let i = 1; i <= numPairs; i++) result[index++] = i; // Positivos
```

#### **🔄 Generar y reordenar (ineficiente)**

```typescript
// Generar desordenado y luego:
result.sort((a, b) => a - b); // O(n log n)
```

#### **🎯 Inserción en posiciones calculadas (complejo)**

```typescript
// Calcular posiciones exactas:
result[Math.floor(n / 2)] = 0; // Centro para impares
// Llenar desde el centro hacia afuera...
```

### 🏆 **¿Por qué elegimos el enfoque final?**

#### **✅ Criterios de decisión:**

1. **Performance**: O(n) tiempo, pre-allocación eficiente
2. **Legibilidad**: Código claro y fácil de entender
3. **Estética**: Resultado naturalmente ordenado con 0 centrado
4. **Mantenibilidad**: Lógica directa sin complejidades innecesarias

#### **🎯 Ventajas específicas de la implementación final:**

- **Pre-allocación**: `new Array(n)` evita redimensionamientos
- **Direct indexing**: `result[index++]` más rápido que `push()`
- **Construcción ordenada**: No necesita post-procesamiento
- **Simetría natural**: Patrón matemático claro (-x, 0, +x)
- **Memory locality**: Acceso secuencial al array es cache-friendly

## Casos extremos

### **Casos base:**

- **n = 1**: Solo existe una solución válida `[0]`
- **n = 0**: Array vacío `[]` (aunque fuera de constraints 1 ≤ n ≤ 1000)

### **Casos límite:**

- **n = 1000**: Funciona perfectamente con el algoritmo O(n)
- **n = 2**: Caso par más pequeño `[-1, 1]`

### **Invariantes garantizadas:**

- ✅ **Longitud exacta**: Siempre `result.length === n`
- ✅ **Elementos únicos**: Por construcción, no hay duplicados
- ✅ **Suma cero**: Los pares se cancelan, 0 es neutral
- ✅ **Orden creciente**: Array siempre ordenado [-x...0...+x]

## Complejidad

### **Análisis de complejidad (versión optimizada):**

- **Time Complexity: O(n)**

  - Un solo loop para generar negativos: O(n/2)
  - Una asignación para el cero (si n es impar): O(1)
  - Un solo loop para generar positivos: O(n/2)
  - **Total**: O(n/2) + O(1) + O(n/2) = O(n)
  - **Operaciones optimizadas**: `result[index++]` en lugar de `push()` elimina overhead

- **Space Complexity: O(n)**
  - Array `result` pre-allocado con tamaño exacto `n`: O(n)
  - Variables auxiliares (`numPairs`, `index`, `i`): O(1)
  - **Sin arrays temporales**: A diferencia de enfoques alternativos que crean múltiples arrays
  - **Total**: O(n) para el output, sin overhead adicional

### **Comparación de Performance:**

#### **✅ Versión optimizada (actual):**

```typescript
const result = new Array<number>(n); // Una sola allocación
result[index++] = -i; // Direct indexing O(1)
```

#### **❌ Versión con push() (anterior):**

```typescript
const result: number[] = []; // Array dinámico
result.push(-i); // Puede requerir reallocation
```

#### **❌ Versión con sort() (alternativa ineficiente):**

```typescript
return result.sort((a, b) => a - b); // O(n log n) adicional
```

### **Optimizaciones implementadas:**

1. **✅ Pre-allocación**: `new Array<number>(n)` evita redimensionamientos dinámicos
2. **✅ Direct indexing**: `result[index++]` más eficiente que `push()`
3. **✅ Construcción ordenada**: Elimina necesidad de `sort()` O(n log n)
4. **✅ Eliminación de edge case innecesario**: Removido `n === 0` (fuera de constraints)
5. **✅ Memory locality**: Acceso secuencial optimiza cache usage

### **Benchmarks teóricos:**

- **Para n = 1000**: Ahorro de ~30% en allocations comparado con `push()`
- **Para n = 10000**: Evitamos O(n log n) = 130k operaciones vs O(n) = 10k operaciones
- **Memory footprint**: Una sola allocación vs múltiples reallocations

## Conclusión

### **Lecciones aprendidas:**

1. **Property-Based Testing**: Fundamental para problemas con múltiples soluciones válidas

   - Testear invariantes en lugar de respuestas específicas
   - Helper functions reutilizables y código más mantenible

2. **Patrón de Pares Simétricos**: Técnica elegante para problemas de suma cero

   - Construcción matemática garantiza la suma correcta
   - Fácil de implementar y verificar

3. **Iterative Refinement**: El proceso de mejora iterativa llevó a una solución óptima

   - V1: Funcional pero desordenada
   - V2: 0 en el medio pero no ordenada
   - V3: Ordenada y estéticamente perfecta

4. **Análisis de Casos Par/Impar**: Patrón común en problemas algorítmicos
   - `Math.floor(n/2)` para calcular pares necesarios
   - Manejo especial del elemento "neutro" (0) para casos impares

### **Aplicabilidad:**

Este enfoque es útil para cualquier problema que requiera:

- Generar conjuntos balanceados que sumen a un valor específico
- Mantener simetría en estructuras de datos
- Problemas donde el orden y la estética del resultado importan

### 🧠 **Conceptos Algorítmicos Fundamentales**

Esta solución ilustra varios **conceptos algorítmicos importantes** que son transferibles a otros problemas:

#### **🎯 1. Construcción por Invariantes**

```typescript
// En lugar de generar y validar, construimos garantizando propiedades
const numPairs = Math.floor(n / 2); // Invariante: cada par suma 0
// Por construcción: suma total = 0, elementos únicos, longitud = n
```

**Aplicable en**: Problemas donde puedes garantizar propiedades durante construcción vs validación posterior.

#### **🔄 2. Simetría y Balanceamiento**

```typescript
// Patrón: para cada +x, agregar -x
result[index++] = -i; // Negativo
result[index++] = i; // Positivo correspondiente
```

**Aplicable en**:

- Balanceamiento de cargas
- Estructuras de datos simétricas
- Problemas de equilibrio (parentesis, brackets, etc.)

#### **⚖️ 3. Elemento Neutro**

```typescript
// 0 es el elemento neutro para la suma
if (n % 2 === 1) result[index++] = 0;
```

**Conceptos relacionados**:

- **Suma**: elemento neutro = 0
- **Multiplicación**: elemento neutro = 1
- **XOR**: elemento neutro = 0
- **OR**: elemento neutro = false

#### **🔢 4. Análisis de Paridad (Par/Impar)**

```typescript
Math.floor(n / 2); // Cantidad de pares
n % 2 === 1; // ¿Necesitamos elemento neutro?
```

**Aplicable en**:

- Algoritmos de división y conquista
- Problemas de distribución equitativa
- Optimizaciones específicas para casos par/impar

#### **⚡ 5. Optimización de Memory Layout**

```typescript
const result = new Array<number>(n); // Pre-allocación
result[index++] = value; // Acceso secuencial
```

**Conceptos de performance**:

- **Memory locality**: Acceso secuencial es cache-friendly
- **Pre-allocation**: Evita fragmentación de memoria
- **Direct indexing**: Elimina overhead de métodos dinámicos

#### **📐 6. Construcción Ordenada**

```typescript
// Genera directamente en orden, no necesita sort()
// Negativos → Cero → Positivos
```

**Principio**: Cuando puedes controlar el orden de construcción, hazlo en lugar de ordenar después.

#### **🎨 7. Estética Algorítmica**

```typescript
// Para n=5: [-2, -1, 0, 1, 2]
// Simetría visual y matemática
```

**Concepto**: Soluciones elegantes no solo funcionan, sino que son **intuitivamente comprensibles**.

#### **🔧 8. Micro-optimizaciones**

```typescript
result[index++] = -i; // Post-increment idiom
let index = 0; // Manual index control
```

**Técnicas transferibles**:

- Post-increment para llenar arrays secuencialmente
- Manual index control cuando necesitas control total
- Prefer direct operations over abstracted methods in hot paths

#### **🧪 9. Property-Based Testing Pattern**

```typescript
const isValidSolution = (arr, n) =>
  hasCorrectLength(arr, n) && hasUniqueElements(arr) && sumsToZero(arr);
```

**Aplicable en**: Cualquier problema con múltiples respuestas válidas.

#### **📊 10. Space-Time Trade-offs**

- **Opción A**: `push()` + dynamic array (tiempo variable, menos memoria inicial)
- **Opción B**: pre-allocation (tiempo constante, más memoria inicial)
- **Elegimos B**: Porque sabemos exactamente el tamaño final

### 🎓 **Patrones Algorítmicos Relacionados**

Este problema conecta con varios **patrones clásicos**:

1. **Two Sum family**: Usar pares que se complementan
2. **Sliding Window**: Construcción secuencial con control de estado
3. **Divide and Conquer**: Separar casos par/impar
4. **Greedy Construction**: Tomar decisiones localmente óptimas (orden natural)
5. **Invariant Maintenance**: Mantener propiedades durante todo el algoritmo
