---
title: "tip-calculator"
difficulty: "easy"
topics:
  - Math
  - String
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-20"
---

# Tip Calculator - Explicación

## Descripción del Problema

Este problema requiere calcular múltiples propinas basadas en el precio de una comida y devolver los resultados en un formato monetario específico.

**Objetivo:** Dada una cadena con el precio de la comida y un porcentaje de propina personalizado, calcular y devolver tres valores de propina: 15%, 20%, y el porcentaje personalizado.

**Parámetros de entrada:**

- `mealPrice`: String en formato `"$N.NN"` (ej: `"$10.00"`, `"$89.67"`)
- `customTip`: String en formato `"N%"` (ej: `"25%"`, `"9%"`)

**Formato de salida:**

- Array de 3 strings en formato `"$N.NN"`
- Orden específico: `[propina_15%, propina_20%, propina_personalizada]`
- Todos los valores redondeados a exactamente 2 decimales

**Reglas específicas:**

1. **Parsing de entrada**: Extraer valores numéricos de strings con símbolos
2. **Cálculos de propina**: Aplicar porcentajes al precio base
3. **Formato monetario**: Convertir números a formato `"$N.NN"`
4. **Precisión**: Redondeo correcto a 2 decimales
5. **Orden fijo**: Siempre [15%, 20%, custom%] independientemente del valor custom

**Ejemplo de transformación completa:**

```
Input: mealPrice="$10.00", customTip="25%"
Parse: price=10.00, customPercent=25
Calc: tip 15=1.50, tip 20=2.00, tipCustom=2.50
Format: ["$1.50", "$2.00", "$2.50"]
```

## Análisis de Casos de Prueba

Desglosemos cada caso para entender los cálculos y patrones de formateo:

### Caso 1: `calculateTips("$10.00", "25%")` → `["$1.50", "$2.00", "$2.50"]`

**Análisis paso a paso:**

- **Parsing entrada**:

 - `mealPrice="$10.00"` → `price = 10.00`
 - `customTip="25%"` → `customPercent = 25`

- **Cálculos de propina**:

 - `tip 15% = 10.00 × 0.15 = 1.50`
 - `tip 20% = 10.00 × 0.20 = 2.00`
 - `tip 25% = 10.00 × 0.25 = 2.50`

- **Formateo final**:
 - `1.50 → "$1.50"`, `2.00 → "$2.00"`, `2.50 → "$2.50"`

**Observación**: Caso base ideal con números redondos, sin problemas de precisión decimal.

### Caso 2: `calculateTips("$89.67", "26%")` → `["$13.45", "$17.93", "$23.31"]`

**Análisis paso a paso:**

- **Parsing entrada**:

 - `mealPrice="$89.67"` → `price = 89.67`
 - `customTip="26%"` → `customPercent = 26`

- **Cálculos de propina**:

 - `tip 15% = 89.67 × 0.15 = 13.4505 → 13.45` (redondeado)
 - `tip 20% = 89.67 × 0.20 = 17.934 → 17.93` (redondeado)
 - `tip 26% = 89.67 × 0.26 = 23.3142 → 23.31` (redondeado)

- **Formateo final**:
 - `13.45 → "$13.45"`, `17.93 → "$17.93"`, `23.31 → "$23.31"`

**Observación**: Caso con decimales que requiere redondeo correcto. Demuestra manejo de precisión floating-point.

### Caso 3: `calculateTips("$19.85", "9%")` → `["$2.98", "$3.97", "$1.79"]`

**Análisis paso a paso:**

- **Parsing entrada**:

 - `mealPrice="$19.85"` → `price = 19.85`
 - `customTip="9%"` → `customPercent = 9`

- **Cálculos de propina**:

 - `tip 15% = 19.85 × 0.15 = 2.9775 → 2.98` (redondeado)
 - `tip 20% = 19.85 × 0.20 = 3.97` (exacto)
 - `tip 9% = 19.85 × 0.09 = 1.7865 → 1.79` (redondeado)

- **Formateo final**:
 - `2.98 → "$2.98"`, `3.97 → "$3.97"`, `1.79 → "$1.79"`

**Observación**: Caso especial donde la propina personalizada (9%) es menor que las estándar (15%, 20%). Demuestra flexibilidad del algoritmo.

### Patrones Identificados

1. **Parsing consistente**: Todos los precios siguen el formato `"$N.NN"`
2. **Porcentajes variables**: Custom tip puede ser mayor, menor o igual a los estándar
3. **Redondeo matemático**: Usar redondeo estándar a 2 decimales
4. **Orden fijo**: Siempre [15%, 20%, custom%] sin importar el valor custom
5. **Formato monetario**: Todos los resultados mantienen el formato `"$N.NN"`
6. **Precisión decimal**: Manejo correcto de operaciones floating-point

### Desafíos de Implementación

1. **String parsing**: Extraer números de strings con símbolos (`$`, `%`)
2. **Precisión decimal**: Evitar errores de floating-point en cálculos
3. **Formato consistente**: Asegurar siempre 2 decimales en la salida
4. **Orden específico**: Mantener secuencia [15%, 20%, custom%]
5. **Validación implícita**: Asumir entrada siempre válida según especificación

## Enfoque de Solución

### Estrategia: Parsing Inteligente + Cálculos Directos + Formateo Funcional

La solución utiliza un enfoque limpio que combina parsing preciso de strings, cálculos matemáticos directos y transformación funcional para el formateo final.

**Implementación completa:**

```javascript
function calculateTips(mealPrice, customTip) {
 const price = parseFloat(mealPrice.slice(1)); // Convertir "$N.NN" a número
 const customPercent = parseFloat(customTip.slice(0, -1)) / 100; // Convertir "N%" a decimal

 const tips = [
 (price * 0.15).toFixed(2),
 (price * 0.2).toFixed(2),
 (price * customPercent).toFixed(2),
 ];

 return tips.map((tip) => `$${tip}`);
}
```

### Desglose Paso a Paso

**1. Parsing del precio: `parseFloat(mealPrice.slice(1))`**

```javascript
// Ejemplo: mealPrice = "$89.67"
mealPrice.slice(1); // → "89.67" (elimina el primer carácter '$')
parseFloat("89.67"); // → 89.67 (convierte string a número)
```

**Análisis de `slice(1)` con un parámetro:**

- **Sintaxis**: `string.slice(startIndex)`
- **Comportamiento**: Extrae desde `startIndex` hasta el **final** del string
- **Índice 1**: Salta el primer carácter (posición 0 = `'$'`)
- **Resultado**: Obtiene todo después del símbolo de dólar

**2. Parsing del porcentaje: `parseFloat(customTip.slice(0, -1)) / 100`**

```javascript
// Ejemplo: customTip = "26%"
customTip.slice(0, -1); // → "26" (desde inicio hasta antes del último carácter)
parseFloat("26"); // → 26 (convierte string a número)
26 / 100; // → 0.26 (convierte porcentaje a decimal)
```

**Análisis de `slice(0, -1)` con dos parámetros:**

- **Sintaxis**: `string.slice(startIndex, endIndex)`
- **Start = 0**: Comienza desde el primer carácter
- **End = -1**: Termina en el penúltimo carácter (índice negativo cuenta desde el final)
- **Resultado**: Obtiene todo excepto el último carácter (`'%'`)

### Comparación Profunda de `slice()` - Aprendizajes Clave

**`slice()` es extremadamente versátil según los parámetros:**

#### **Caso 1: `slice(1)` - Un solo parámetro**

```javascript
"$89.67".slice(1); // → "89.67"
"$10.00".slice(1); // → "10.00"
"$19.85".slice(1); // → "19.85"

// Visualización:
// "$89.67"
// 0123456 ← índices
// ^^^^^ ← slice(1) toma desde posición 1 hasta el final
```

**¿Por qué funciona perfecto aquí?**

- ✅ **Propósito**: Eliminar exactamente 1 carácter del inicio (`$`)
- ✅ **Simplicidad**: No necesitamos especificar el final
- ✅ **Flexibilidad**: Funciona con precios de cualquier longitud

#### **Caso 2: `slice(0, -1)` - Dos parámetros**

```javascript
"26%".slice(0, -1); // → "26"
"9%".slice(0, -1); // → "9"
"125%".slice(0, -1); // → "125"

// Visualización:
// "26%"
// 012 ← índices positivos
// -3-2-1 ← índices negativos
// ^^ ← slice(0, -1) toma desde inicio hasta antes del último
```

**¿Por qué necesitamos dos parámetros aquí?**

- ✅ **Propósito**: Eliminar exactamente 1 carácter del final (`%`)
- ✅ **Precisión**: Queremos desde el inicio, pero NO hasta el final
- ✅ **Índice negativo**: `-1` es más elegante que calcular `length - 1`

### Alternativas y Por Qué Tu Elección es Superior

#### **Alternativas para eliminar `$`:**

```javascript
// ❌ Menos elegante
mealPrice.substring(1); // Funciona, pero substring es menos flexible
mealPrice.replace("$", ""); // Podría eliminar múltiples '$' si existieran

// ✅ Tu elección (óptima)
mealPrice.slice(1); // Preciso, eficiente, expresivo
```

#### **Alternativas para eliminar `%`:**

```javascript
// ❌ Más verboso
customTip.substring(0, customTip.length - 1);

// ❌ Regex innecesario
customTip.replace("%", "");

// ❌ Manual y propenso a errores
customTip.split("%")[0];

// ✅ Tu elección (óptima)
customTip.slice(0, -1); // Conciso, claro, eficiente
```

**3. Cálculos de propinas con array directo:**

```javascript
const tips = [
 (price * 0.15).toFixed(2), // 15% tip
 (price * 0.2).toFixed(2), // 20% tip
 (price * customPercent).toFixed(2), // Custom tip
];
```

**Aprendizajes de este enfoque:**

- ✅ **Array literal**: Estructura clara con orden específico
- ✅ **toFixed(2)**: Garantiza exactamente 2 decimales
- ✅ **Cálculo directo**: Multiplicación simple sin loops
- ✅ **Conversión automática**: `toFixed()` devuelve string, perfecto para el siguiente paso

**4. Formateo final con map funcional:**

```javascript
return tips.map((tip) => `$${tip}`);
```

**Por qué `map()` es perfecto aquí:**

- ✅ **Transformación 1:1**: Cada tip se convierte en formato monetario
- ✅ **Inmutable**: No modifica el array original
- ✅ **Template literal**: `$${tip}` es más legible que concatenación
- ✅ **Funcional**: Enfoque elegante y moderno

### Flujo Completo de Datos

**Para `calculateTips("$89.67", "26%")`:**

```javascript
// Paso 1: Parsing
"$89.67".slice(1) // → "89.67"
parseFloat("89.67") // → 89.67

"26%".slice(0, -1) // → "26"
parseFloat("26") // → 26
26 / 100 // → 0.26

// Paso 2: Cálculos
89.67 * 0.15 = 13.4505 → "13.45" (toFixed(2))
89.67 * 0.2 = 17.934 → "17.93" (toFixed(2))
89.67 * 0.26 = 23.3142 → "23.31" (toFixed(2))

// Paso 3: Formateo
["13.45", "17.93", "23.31"].map(tip => `$${tip}`)
// → ["$13.45", "$17.93", "$23.31"]
```

### Ventajas de Tu Implementación

**✅ Parsing inteligente:**

- `slice()` es más preciso que `replace()` para posiciones específicas
- Maneja índices negativos elegantemente
- No depende de regex para casos simples

**✅ Cálculos eficientes:**

- Array literal directo sin loops innecesarios
- `toFixed(2)` maneja redondeo automáticamente
- Orden correcto [15%, 20%, custom%] desde la construcción

**✅ Formateo funcional:**

- `map()` transforma todo el array de una vez
- Template literals son más legibles que concatenación
- Retorna array directamente sin variables intermedias

**✅ Código conciso pero claro:**

- Solo 4 líneas de lógica real
- Cada línea tiene un propósito específico
- Fácil de leer y mantener

## Complejidad

### Complejidad Temporal

**O(1) - Tiempo constante**

- **Parsing operations**: `slice()` y `parseFloat()` son O(1) para strings de longitud fija
- **Arithmetic calculations**: Multiplicaciones y divisiones son O(1)
- **Array creation**: Array literal de 3 elementos es O(1)
- **Formatting**: `toFixed(2)` es O(1) para precisión fija
- **Final mapping**: `map()` sobre exactamente 3 elementos es O(1)

**Total**: O(1) + O(1) + O(1) + O(1) + O(1) = O(1)

**Justificación**: El tamaño de entrada es siempre fijo (strings de formato específico) y el array resultado siempre tiene exactamente 3 elementos, independientemente de los valores de entrada.

### Complejidad Espacial

**O(1) - Espacio constante**

- **Variables primitivas**: `price`, `customPercent` ocupan espacio constante
- **Array intermedio**: `tips` siempre tiene exactamente 3 elementos = O(1)
- **Array resultado**: Retorna array de 3 strings = O(1)
- **Variables temporales**: En `map()` y cálculos son O(1)

**Total**: O(1) espacio auxiliar sin dependencia del tamaño de entrada.

## Conceptos Clave

### 1. **String Parsing Eficiente con `slice()`**

**Técnicas de extracción precisas:**

```javascript
// Eliminar prefijo: slice(startIndex)
"$89.67".slice(1); // → "89.67" (desde posición 1 hasta el final)

// Eliminar sufijo: slice(startIndex, endIndex)
"26%".slice(0, -1); // → "26" (desde inicio hasta antes del último)
```

**Ventajas sobre alternativas:**

- **vs `replace()`**: Más rápido y preciso para posiciones fijas
- **vs `substring()`**: `slice()` maneja índices negativos elegantemente
- **vs `split()`**: No crea arrays innecesarios para casos simples

### 2. **Conversión de Tipos Inteligente**

**Pipeline de transformación:**

```javascript
"$89.67" → slice(1) → "89.67" → parseFloat() → 89.67
"26%" → slice(0,-1) → "26" → parseFloat() → 26 → /100 → 0.26
```

**`parseFloat()` vs alternativas:**

- **vs `Number()`**: Más tolerante con formatos de entrada
- **vs `parseInt()`**: Preserva decimales automáticamente
- **vs `+operator`**: Más explícito en la intención

### 3. **Precisión Decimal con `toFixed()`**

**Manejo de floating-point precision:**

```javascript
// Sin toFixed(): Errores de precisión
89.67 *
 0.15(
 // → 13.450500000000002

 // Con toFixed(): Precisión controlada
 89.67 * 0.15
 ).toFixed(2); // → "13.45"
```

**Por qué toFixed(2) es perfecto aquí:**

- ✅ **Redondeo matemático**: Usa rounding estándar
- ✅ **Formato consistente**: Siempre 2 decimales exactos
- ✅ **String output**: Prepara para formateo final
- ✅ **Precisión monetaria**: Estándar para cálculos financieros

### 4. **Array Functional Programming**

**Patrón construcción + transformación:**

```javascript
// Paso 1: Construir array de cálculos
const tips = [calculation 1, calculation 2, calculation 3];

// Paso 2: Transformar uniformemente
return tips.map((tip) => `$${tip}`);
```

**Beneficios del enfoque funcional:**

- **Inmutabilidad**: No modifica datos existentes
- **Composabilidad**: Fácil de extender o modificar
- **Legibilidad**: Separación clara de responsabilidades
- **Testabilidad**: Cada paso se puede verificar independientemente

### 5. **Template Literals para Formateo**

**`$${tip}` vs alternativas:**

```javascript
// ✅ Template literal (elegante)
`$${tip}`;

// ❌ Concatenación (verboso)
"$" +
 tip[
 // ❌ Join (innecesario)
 ("$", tip)
 ].join("");
```

## Notas de Implementación

### ✅ **Decisiones de Diseño Excelentes**

**1. `slice()` para parsing posicional:**

```javascript
// ✅ Preciso y eficiente
mealPrice.slice(1); // Elimina exactamente el primer carácter
customTip.slice(0, -1); // Elimina exactamente el último carácter

// ❌ Alternativas menos óptimas
mealPrice.replace("$", ""); // Podría eliminar múltiples '$'
customTip.split("%")[0]; // Crea array innecesario
```

**2. Array literal con orden específico:**

```javascript
// ✅ Claro y mantenible
const tips = [
 (price * 0.15).toFixed(2), // Posición 0: 15%
 (price * 0.2).toFixed(2), // Posición 1: 20%
 (price * customPercent).toFixed(2), // Posición 2: Custom
];
```

**3. Functional transformation final:**

```javascript
// ✅ Idiomático JavaScript
return tips.map((tip) => `$${tip}`);

// ❌ Imperativo innecesario
const result = [];
for (let i = 0; i < tips.length; i++) {
 result.push("$" + tips[i]);
}
return result;
```

### 🔄 **Alternativas Consideradas y Descartadas**

**1. One-liner extremo:**

```javascript
// Posible pero menos legible
const calculateTips = (mealPrice, customTip) =>
 [0.15, 0.2, parseFloat(customTip.slice(0, -1)) / 100].map(
 (rate) => `$${(parseFloat(mealPrice.slice(1)) * rate).toFixed(2)}`
 );
```

**Problemas:** Repite parsing, menos debugging-friendly, overflow cognitivo.

**2. Constantes para porcentajes:**

```javascript
// Over-engineering para este caso
const STANDARD_TIPS = [0.15, 0.2];

function calculateTips(mealPrice, customTip) {
 const price = parseFloat(mealPrice.slice(1));
 const customPercent = parseFloat(customTip.slice(0, -1)) / 100;

 return [...STANDARD_TIPS, customPercent].map(
 (rate) => `$${(price * rate).toFixed(2)}`
 );
}
```

**Problemas:** Complejidad innecesaria para solo 2 valores constantes.

**3. Validación explícita:**

```javascript
// Innecesario según especificación del problema
function calculateTips(mealPrice, customTip) {
 if (!mealPrice.startsWith("$") || !customTip.endsWith("%")) {
 throw new Error("Invalid format");
 }
 // ... resto del código
}
```

**Problemas:** El problema garantiza formato válido, validación añade complejidad sin beneficio.

### ⚡ **Optimizaciones de Rendimiento Evaluadas**

**Tu implementación ya es óptima:**

1. **Micro-optimización descartada**: Eliminar array intermedio

 - **Ganancia**: Imperceptible (solo 3 elementos)
 - **Costo**: Menos legibilidad

2. **Caching descartado**: Guardar constantes 0.15, 0.20

 - **Ganancia**: Ninguna (son literales)
 - **Costo**: Más código

3. **Regex descartado**: Para parsing más "flexible"
 - **Ganancia**: Ninguna (formato es fijo)
 - **Costo**: Mayor complejidad y menor rendimiento

### 🎯 **Por qué tu implementación es ejemplar:**

1. **Correctitud**: Maneja todos los casos requeridos perfectamente
2. **Simplicidad**: 4 líneas de lógica, cada una con propósito claro
3. **Eficiencia**: O(1) sin optimizaciones prematuras
4. **Legibilidad**: Variables descriptivas, flujo lógico
5. **Mantenibilidad**: Fácil de modificar o extender
6. **Idiomaticidad**: Usa patrones JavaScript estándar apropiadamente
7. **Robustez**: Funciona con todos los formatos especificados

### 💡 **Lecciones de Diseño**

- **KISS Principle**: Keep It Simple, Stupid - tu código no tiene complejidad innecesaria
- **Single Responsibility**: Cada línea hace exactamente una cosa
- **Functional Style**: Aprovecha inmutabilidad y transformaciones
- **Practical Optimization**: Eficiente sin sacrificar claridad