---
title: "hex-to-decimal"
difficulty: "easy"
topics:
  - Math
  - String
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-11"
---

# Hex to Decimal - FreeCodeCamp Daily

## 🎯 Enunciado del Problema

**Convertir un número hexadecimal (base 16) a decimal (base 10).**

### Descripción

Dado un string que representa un número hexadecimal, devolver su valor decimal como entero.

### Sistema Hexadecimal

- **Dígitos válidos**: 0-9 y A-F (mayúsculas)
- **Valores**: 0-9 = 0-9, A-F = 10-15
- **Base**: 16 (cada posición representa una potencia de 16)

### Ejemplos

```javascript
hexToDecimal("A"); // → 10 (A = 10)
hexToDecimal("15"); // → 21 (1×16¹ + 5×16⁰ = 16 + 5 = 21)
hexToDecimal("2 E"); // → 46 (2×16¹ + E×16⁰ = 32 + 14 = 46)
hexToDecimal("FF"); // → 255 (F×16¹ + F×16⁰ = 15×16 + 15×1 = 240 + 15 = 255)
hexToDecimal("A 3 F"); // → 2623
```

## 🔍 Análisis del Problema

### Conversión de Bases

Los sistemas numéricos usan diferentes bases. La conversión se basa en la fórmula polinomial:

```text
valor_decimal = Σ(dᵢ × baseⁱ) para i = 0 hasta n-1
```

Donde:

- `dᵢ` = dígito en posición i (empezando desde la derecha)
- `base` = 16 para hexadecimal
- `i` = exponente (posición del dígito)

### Restricciones

- ✅ Input: string con caracteres 0-9, A-F
- ✅ Output: número entero positivo
- ✅ No hay límite de longitud explícito
- ✅ Input siempre válido (no necesita validación extra)

## 🛠️ Enfoques de Solución

### 1. Método Nativo JavaScript ⭐ (Más simple)

#### Explicación del método iterativo manual

JavaScript tiene una función incorporada `parseInt()` que puede convertir strings a números en cualquier base.

```javascript
function hexToDecimal(hex) {
 return parseInt(hex, 16);
}
```

#### Explicación paso a paso con "2 E"

```javascript
parseInt("2 E", 16);
// 1. Interpreta "2 E" como número en base 16
// 2. '2' = 2, 'E' = 14
// 3. Calcula: 2×16¹ + 14×16⁰ = 32 + 14 = 46
// 4. Retorna: 46
```

#### Ventajas

- ✅ **Simplicidad extrema**: Una sola línea de código
- ✅ **Confiabilidad**: Probado y optimizado por el motor JavaScript
- ✅ **Rendimiento**: Muy rápido para strings de cualquier longitud
- ✅ **Lectura**: Código autoexplicativo

#### Desventajas del método iterativo manual

- ❌ **No educativo**: No enseña el algoritmo de conversión de bases
- ❌ **Control limitado**: No podemos ver ni modificar el proceso interno
- ❌ **Dependencia**: Solo funciona en entornos JavaScript
- ❌ **Transparencia cero**: "Caja negra" - no sabemos cómo funciona

#### ¿Cuándo usarlo

- **Producción**: Cuando necesitas rapidez y no te importa el "cómo"
- **Prototipos**: Para probar ideas rápidamente
- **Scripts simples**: Donde la claridad del código no es prioridad

- | -------- | ----------------------- | ------------- | ------------- |
| 1 | '2' | `charToValue('2')` = 2 | `0 × 16 + 2` | `result = 2` |
| 2 | 'E' | `charToValue('E')` = 14 | `2 × 16 + 14` | `result = 46` |

**¿Por qué funciona `result * 16 + digit`?**

- **Multiplicar por 16**: Desplaza los dígitos existentes una posición a la izquierda
- **Sumar dígito**: Agrega el valor del nuevo dígito
- **Equivalente a**: (2 × 16¹) + (14 × 16⁰) pero más eficiente

#### Ventajas

- ✅ **Educativo**: Muestra exactamente cómo funciona la conversión
- ✅ **Transparente**: Cada paso es visible y comprensible
- ✅ **Control total**: Podemos modificar la lógica si es necesario
- ✅ **Sin dependencias**: Funciona en cualquier lenguaje de programación
- ✅ **Eficiente**: O(n) tiempo, O(1) espacio

#### Desventajas

- ❌ **Verbosidad**: Más código que el método nativo
- ❌ **Complejidad**: Más propenso a errores de implementación
- ❌ **Mantenimiento**: Requiere más código para mantener

#### ¿Cuándo usarlo

- **Aprendizaje**: Para entender algoritmos de conversión de bases
- **Entrevistas**: Para demostrar conocimiento profundo
- **Sistemas críticos**: Donde necesitas control total del proceso
- **Lenguajes sin parseInt**: Como C, C++, Rust, etc.

---

### 3. Método Recursivo 🔄

#### ¿Cómo funciona

Utiliza recursión para procesar cada dígito, donde cada llamada maneja un dígito menos. Comenzamos desde el dígito menos significativo (derecha).

```javascript
function hexToDecimalRecursive(hex, index = 0) {
 // Caso base: hemos procesado todos los dígitos
 if (index >= hex.length) {
 return 0;
 }

 // Función auxiliar para convertir carácter a valor
 function charToValue(char) {
 if (char >= "0" && char <= "9") {
 return char.charCodeAt(0) - "0".charCodeAt(0);
 } else if (char >= "A" && char <= "F") {
 return 10 + (char.charCodeAt(0) - "A".charCodeAt(0));
 }
 return -1;
 }

 // Procesar dígito actual (empezando desde la derecha)
 const currentChar = hex[hex.length - 1 - index];
 const digitValue = charToValue(currentChar);

 // Fórmula recursiva: valor_actual × 16^posición + resto
 const power = Math.pow(16, index);
 const currentContribution = digitValue * power;

 return currentContribution + hexToDecimalRecursive(hex, index + 1);
}
```

#### Explicación paso a paso con "2 E"

```text
**Llamada inicial:** `hexToDecimalRecursive("2 E", 0)`

- `index = 0` (posición menos significativa)
- `currentChar = hex[2-1-0] = hex[1] = 'E'`
- `digitValue = 14`
- `power = 16^0 = 1`
- `currentContribution = 14 × 1 = 14`

**Llamada recursiva:** `hexToDecimalRecursive("2 E", 1)`

- `index = 1` (siguiente posición)
- `currentChar = hex[2-1-1] = hex[0] = '2'`
- `digitValue = 2`
- `power = 16^1 = 16`
- `currentContribution = 2 × 16 = 32`

**Llamada final:** `hexToDecimalRecursive("2 E", 2)`

- `index = 2 >= length(2)`, retorna 0

**Resultado final:** `32 + 14 = 46`
```

#### Ventajas

- ✅ **Elegante**: Código matemáticamente puro y expresivo
- ✅ **Funcional**: Sin variables mutables, solo recursión
- ✅ **Módular**: Fácil dividir en subproblemas más pequeños
- ✅ **Teórico**: Excelente para entender conceptos recursivos

#### Desventajas

- ❌ **Stack overflow**: Para strings largos puede exceder el límite de pila
- ❌ **Ineficiente**: Múltiples llamadas a función y cálculo de potencias
- ❌ **Complejo**: Más difícil de entender para principiantes
- ❌ **No optimizado**: JavaScript no optimiza recursión profunda (tail recursion)

#### ¿Cuándo usarlo

- **Teoría**: Para entender algoritmos recursivos
- **Lenguajes funcionales**: Como Haskell, Lisp, Scheme
- **Problemas académicos**: Donde la elegancia es más importante que la eficiencia
- **Strings pequeños**: Donde el riesgo de stack overflow es mínimo

---

### 4. Método Funcional ⚡

#### ¿Cómo funciona

Utiliza métodos funcionales de arrays (split, map, reduce) para un enfoque declarativo. Describe "qué" hacer, no "cómo".

```javascript
function hexToDecimal(hex) {
 // Función auxiliar para conversión carácter → valor
 function charToValue(char) {
 if (char >= "0" && char <= "9") {
 return char.charCodeAt(0) - "0".charCodeAt(0);
 } else if (char >= "A" && char <= "F") {
 return 10 + (char.charCodeAt(0) - "A".charCodeAt(0));
 }
 return -1;
 }

 return hex
 .split("") // String → Array de caracteres
 .map((char) => charToValue(char)) // Cada char → valor numérico
 .reduce((result, digit) => {
 // Acumulador funcional
 return result * 16 + digit;
 }, 0); // Valor inicial = 0
}
```

#### Explicación paso a paso con "2 E"

```javascript
"2 E"
 .split("") // ['2', 'E']
 .map(charToValue) // [2, 14]
 .reduce((result, digit) => result * 16 + digit, 0);

// Iteración 1: result = 0, digit = 2
// 0 * 16 + 2 = 2

// Iteración 2: result = 2, digit = 14
// 2 * 16 + 14 = 46
```

#### Ventajas

- ✅ **Declarativo**: Describe qué hacer, no cómo hacerlo
- ✅ **Funcional**: Sin bucles, sin variables mutables
- ✅ **Componible**: Fácil combinar con otras operaciones funcionales
- ✅ **Moderno**: Usa paradigmas funcionales de JavaScript ES 6+
- ✅ **Legible**: Una vez entendido el patrón, es muy claro

#### Desventajas

- ❌ **Rendimiento**: Múltiples iteraciones sobre arrays intermedios
- ❌ **Memoria**: Crea arrays temporales (split, map)
- ❌ **Complejidad**: Más difícil de optimizar y depurar
- ❌ **Curva de aprendizaje**: Requiere entender métodos funcionales

#### ¿Cuándo usarlo

- **Programación funcional**: Cuando sigues principios funcionales
- **Código moderno**: En aplicaciones React, Node.js con ES 6+
- **Pipelines de datos**: Cuando combinas múltiples transformaciones
- **Aprendizaje**: Para entender programación funcional

---

### 5. Método con Conversión Binaria 🔀

#### ¿Cómo funciona

Convierte primero hexadecimal a binario, luego binario a decimal. Muestra el proceso paso a paso a través de representaciones intermedias.

```javascript
function hexToDecimal(hex) {
 // Tabla de conversión hex → binario (4 bits cada dígito)
 const hexToBinaryMap = {
 0: "0000",
 1: "0001",
 2: "0010",
 3: "0011",
 4: "0100",
 5: "0101",
 6: "0110",
 7: "0111",
 8: "1000",
 9: "1001",
 A: "1010",
 B: "1011",
 C: "1100",
 D: "1101",
 E: "1110",
 F: "1111",
 };

 // Función auxiliar para conversión carácter → valor decimal
 function charToValue(char) {
 if (char >= "0" && char <= "9") {
 return char.charCodeAt(0) - "0".charCodeAt(0);
 } else if (char >= "A" && char <= "F") {
 return 10 + (char.charCodeAt(0) - "A".charCodeAt(0));
 }
 return -1;
 }

 // Paso 1: Hex → Binario
 const binaryString = hex
 .split("") // String → Array
 .map((char) => {
 const decimal = charToValue(char); // Hex char → decimal
 return decimal.toString(2).padStart(4, "0"); // Decimal → binario (4 bits)
 })
 .join(""); // Array → String binario

 // Paso 2: Binario → Decimal
 return parseInt(binaryString, 2);
}
```

#### Explicación paso a paso con "2 E"

##### Paso 1: Conversión Hex → Binario

```text
'2' → charToValue('2') = 2 → 2.toString(2) = '10' → padStart(4, '0') = '0010'
'E' → charToValue('E') = 14 → 14.toString(2) = '1110' → padStart(4, '0') = '1110'
Resultado: '00101110'
```

##### Paso 2: Conversión Binario → Decimal

```javascript
parseInt('00101110', 2) = 46
```

**Verificación:**

- `00101110` binario = 32 + 8 + 4 + 2 = 46 decimal
- Equivale a: 2×16¹ + 14×16⁰ = 46 decimal

#### Ventajas

- ✅ **Educativo**: Muestra conversión paso a paso (hex → bin → decimal)
- ✅ **Transparente**: Vemos todas las representaciones intermedias
- ✅ **Modular**: Separado en funciones pequeñas y claras
- ✅ **Debugging**: Fácil ver valores intermedios para depuración

#### Desventajas

- ❌ **Ineficiente**: Doble conversión innecesaria (hex→bin→dec vs hex→dec directo)
- ❌ **Complejo**: Más código que soluciones directas
- ❌ **Memoria**: Strings binarios pueden ser muy largos
- ❌ **Indirecto**: No es el camino más directo ni eficiente

#### ¿Cuándo usarlo

- **Debugging**: Para entender problemas de conversión paso a paso
- **Educación**: Para mostrar cómo funcionan las bases numéricas
- **Sistemas embebidos**: Donde necesitas manipular bits individualmente
- **Aprendizaje**: Para entender la relación entre sistemas numéricos

---

### Comparación de Enfoques

| Método | Complejidad | Legibilidad | Rendimiento | Caso de Uso Principal |
| --------- | ----------- | ----------- | ----------- | ---------------------- |
| Nativo | O(n) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Producción rápida |
| Iterativo | O(n) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Aprendizaje profundo |
| Recursivo | O(n) | ⭐⭐⭐ | ⭐⭐⭐ | Teoría algorítmica |
| Funcional | O(n) | ⭐⭐⭐⭐ | ⭐⭐⭐ | Programación funcional |
| Binario | O(n) | ⭐⭐ | ⭐⭐ | Debugging detallado |

**Elegido para implementación**: Método iterativo manual - mejor balance entre claridad educativa, eficiencia y control.

## 💻 Implementación Detallada

### Código Final

```javascript
function hexToDecimal(hex) {
 function charToValue(char) {
 if (char >= "0" && char <= "9") {
 return char.charCodeAt(0) - "0".charCodeAt(0);
 } else if (char >= "A" && char <= "F") {
 return char.charCodeAt(0) - "A".charCodeAt(0) + 10;
 }
 return -1; // Carácter inválido
 }

 let decimalValue = 0;
 const hexLength = hex.length;

 for (let i = 0; i < hexLength; i++) {
 const charValue = charToValue(hex[i]);
 if (charValue === -1) {
 throw new Error("Invalid hexadecimal character");
 }
 decimalValue = decimalValue * 16 + charValue;
 }

 return decimalValue;
}
```

### Explicación Paso a Paso

#### Función `charToValue`: Conversión Carácter → Valor

**Para dígitos 0-9:**

```javascript
if (char >= "0" && char <= "9") {
 return char.charCodeAt(0) - "0".charCodeAt(0);
}
```

- `'5'.charCodeAt(0)` = 53, `'0'.charCodeAt(0)` = 48
- 53 - 48 = 5 ✅

**Para letras A-F:**

```javascript
else if (char >= "A" && char <= "F") {
 return char.charCodeAt(0) - "A".charCodeAt(0) + 10;
}
```

- `'A'.charCodeAt(0)` = 65, `'A'.charCodeAt(0)` = 65
- (65 - 65) + 10 = 10 ✅

#### Función Principal: Algoritmo de Conversión

**Inicialización:**

```javascript
let decimalValue = 0;
const hexLength = hex.length;
```

**Bucle principal:**

```javascript
for (let i = 0; i < hexLength; i++) {
 const charValue = charToValue(hex[i]);
 if (charValue === -1) {
 throw new Error("Invalid hexadecimal character");
 }
 decimalValue = decimalValue * 16 + charValue;
}
```

**¿Por qué `decimalValue * 16 + charValue`?**

```text
Esta fórmula acumula el resultado multiplicando por la base en cada iteración:

- **Iteración 1** ('2'): 0 × 16 + 2 = 2
- **Iteración 2** ('E'): 2 × 16 + 14 = 46

Equivalente a: (2 × 16¹) + (14 × 16⁰) pero más eficiente.
```

### Ejemplo Completo: "2 E" → 46

| Paso | Carácter | Valor | Cálculo | Resultado |
| ---- | -------- | ----- | ----------- | --------- |
| 1 | '2' | 2 | 0 × 16 + 2 | 2 |
| 2 | 'E' | 14 | 2 × 16 + 14 | 46 |

## 📊 Complejidad

- **Tiempo**: O(n) - lineal en la longitud del string
- **Espacio**: O(1) - constantes variables adicionales
- **Eficiencia**: Óptima para este problema

## ⚠️ Casos Edge

- **String vacío**: Depende de requerimientos (podría retornar 0)
- **Longitud máxima**: JavaScript maneja números grandes, pero considera BigInt para valores enormes
- **Case sensitivity**: Solo mayúsculas (A-F), no minúsculas (a-f)

## 🎓 Aprendizajes

### Conceptos Técnicos

- **Conversión de bases**: Fórmula polinomial Σ(dᵢ × baseⁱ)
- **ASCII manipulation**: `charCodeAt()` para conversión carácter ↔ número
- **Acumulación eficiente**: `result * base + digit` vs cálculo de potencias

### Patrones de Programación

- **Iteración vs recursión**: Trade-offs de legibilidad vs eficiencia
- **Funcional vs imperativo**: Diferentes paradigmas para el mismo problema
- **Validación de input**: Manejo de errores en funciones de conversión

### Optimizaciones Consideradas

- **Cache de charCodeAt**: Podría optimizar pero innecesario para strings cortos
- **Lookup table**: Array/objeto para conversión más rápida
- **BigInt**: Para números muy grandes que excedan Number.MAX_SAFE_INTEGER

Esta implementación proporciona el mejor balance entre claridad educativa, eficiencia y robustez para el contexto de aprendizaje de algoritmos.