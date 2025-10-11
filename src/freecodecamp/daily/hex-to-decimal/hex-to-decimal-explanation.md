# Hex to Decimal - FreeCodeCamp Daily

## Enunciado del problema

Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.

Hexadecimal is a number system that uses 16 digits:

0-9 represent values 0 through 9.
A-F represent values 10 through 15.

The string will only contain characters 0–9 and A–F.

## Ejemplos

- hexToDecimal("A") should return 10
- hexToDecimal("15") should return 21
- hexToDecimal("2E") should return 46
- hexToDecimal("FF") should return 255
- hexToDecimal("A3F") should return 2623

## Análisis del problema

Este problema requiere convertir un número representado en **sistema hexadecimal (base 16)** a su equivalente en **sistema decimal (base 10)**.

### ¿Qué es conversión de bases?

Los sistemas numéricos utilizan diferentes bases:

- **Decimal (base 10)**: usa dígitos 0-9
- **Hexadecimal (base 16)**: usa dígitos 0-9 y letras A-F (10-15)
- **Binario (base 2)**: usa dígitos 0-1

La conversión de bases sigue la fórmula matemática:

```text
valor_decimal = d_n × base^(n) + d_(n-1) × base^(n-1) + ... + d_1 × base^(1) + d_0 × base^(0)
```

### Sistema hexadecimal

En hexadecimal:

- Los dígitos 0-9 representan valores 0-9
- Las letras A-F representan valores 10-15
- Cada posición representa una potencia de 16

#### Ejemplo: "2E" en hexadecimal

- '2' está en posición 1 (16^1 = 16), valor = 2 × 16 = 32
- 'E' está en posición 0 (16^0 = 1), valor = 14 × 1 = 14
- Total = 32 + 14 = 46

### Restricciones del problema

- Input: string que contiene solo caracteres 0-9 y A-F
- Output: número entero decimal
- No hay límite de longitud explícito
- No necesitamos manejar casos de error (input siempre válido)

### Enfoques posibles

1. **Método manual**: Procesar cada dígito, calcular potencias de 16
2. **Método JavaScript nativo**: Usar `parseInt(hex, 16)`
3. **Método iterativo**: Recorrer string de derecha a izquierda o izquierda a derecha

Elegiremos el **método manual** para aprender el algoritmo de conversión de bases.

## Enfoque y algoritmo

Existen múltiples enfoques para convertir hexadecimal a decimal. Cada uno tiene sus ventajas, desventajas y casos de uso específicos. Analizaremos 5 enfoques diferentes:

### 1. Método JavaScript Nativo (`parseInt`)

**¿Cómo funciona?**
Utiliza la función nativa de JavaScript que puede convertir strings a números en cualquier base.

```javascript
function hexToDecimal(hex) {
  return parseInt(hex, 16);
}
```

**Utilidades:**

- ✅ **Simplicidad**: Una línea de código
- ✅ **Confiabilidad**: Probado y optimizado por el motor JavaScript
- ✅ **Rendimiento**: Muy rápido para strings cortos
- ✅ **Lectura**: Código autoexplicativo

**Limitaciones:**

- ❌ **Aprendizaje**: No enseña el algoritmo de conversión de bases
- ❌ **Control limitado**: No podemos ver el proceso paso a paso
- ❌ **Dependencia**: Solo funciona en entornos JavaScript
- ❌ **Transparencia**: "Caja negra" - no sabemos cómo funciona internamente

**Complejidad:** O(n) donde n es la longitud del string

---

### 2. Método Iterativo Manual (Recomendado para aprendizaje)

**¿Cómo funciona?**
Procesa cada dígito del hexadecimal, calcula su contribución usando potencias de 16.

```javascript
function charToValue(char) {
  if (char >= "0" && char <= "9") {
    return char.charCodeAt(0) - "0".charCodeAt(0);
  } else {
    return 10 + (char.toUpperCase().charCodeAt(0) - "A".charCodeAt(0));
  }
}

function hexToDecimal(hex) {
  let resultado = 0;
  let potencia = 0;

  // Procesar desde la derecha hacia la izquierda
  for (let i = hex.length - 1; i >= 0; i--) {
    const char = hex[i];
    const valor = charToValue(char);
    resultado += valor * Math.pow(16, potencia);
    potencia++;
  }

  return resultado;
}
```

**Utilidades:**

- ✅ **Educativo**: Muestra exactamente cómo funciona la conversión
- ✅ **Transparente**: Cada paso es visible y comprensible
- ✅ **Control total**: Podemos modificar la lógica si es necesario
- ✅ **Sin dependencias**: Funciona en cualquier lenguaje

**Limitaciones:**

- ❌ **Verbosidad**: Más código que el método nativo
- ❌ **Rendimiento**: Más lento para strings muy largos
- ❌ **Complejidad**: Más propenso a errores de implementación

**Complejidad:** O(n) donde n es la longitud del string

---

### 3. Método Recursivo

**¿Cómo funciona?**
Utiliza recursión para procesar cada dígito, donde cada llamada maneja un dígito menos.

```javascript
function charToValue(char) {
  if (char >= "0" && char <= "9") {
    return char.charCodeAt(0) - "0".charCodeAt(0);
  } else {
    return 10 + (char.toUpperCase().charCodeAt(0) - "A".charCodeAt(0));
  }
}

function hexToDecimalRecursive(hex, index = 0) {
  // Caso base: hemos procesado todos los caracteres
  if (index >= hex.length) {
    return 0;
  }

  // Procesar el dígito actual y llamar recursivamente para el resto
  const char = hex[hex.length - 1 - index]; // Empezar desde la derecha
  const valor = charToValue(char);
  const potencia = Math.pow(16, index);

  return valor * potencia + hexToDecimalRecursive(hex, index + 1);
}
```

**Utilidades:**

- ✅ **Elegante**: Código matemáticamente puro
- ✅ **Funcional**: Sin variables mutables
- ✅ **Recursivo**: Útil para entender algoritmos recursivos
- ✅ **Módular**: Fácil de dividir en subproblemas

**Limitaciones:**

- ❌ **Stack overflow**: Para strings largos puede exceder el límite de pila
- ❌ **Ineficiente**: Múltiples llamadas a función
- ❌ **Complejo**: Más difícil de entender para principiantes
- ❌ **No optimizado**: JavaScript no optimiza recursión profunda

**Complejidad:** O(n) tiempo, O(n) espacio (por la pila de llamadas)

---

### 4. Método Funcional con Array Methods

**¿Cómo funciona?**
Utiliza métodos funcionales de arrays (map, reduce) para un enfoque más declarativo.

```javascript
function charToValue(char) {
  if (char >= "0" && char <= "9") {
    return char.charCodeAt(0) - "0".charCodeAt(0);
  } else {
    return 10 + (char.toUpperCase().charCodeAt(0) - "A".charCodeAt(0));
  }
}

function hexToDecimal(hex) {
  return hex
    .split("") // Convertir string a array
    .reverse() // Invertir para procesar de derecha a izquierda
    .map((char) => charToValue(char)) // Convertir cada char a valor numérico
    .reduce(
      (
        resultado,
        valor,
        index // Sumar cada valor * 16^posición
      ) => resultado + valor * Math.pow(16, index),
      0
    );
}
```

**Utilidades:**

- ✅ **Declarativo**: Describe qué hacer, no cómo
- ✅ **Funcional**: Sin bucles, sin variables mutables
- ✅ **Componible**: Fácil de combinar con otras operaciones
- ✅ **Moderno**: Usa paradigmas funcionales de JavaScript

**Limitaciones:**

- ❌ **Rendimiento**: Múltiples iteraciones sobre el array
- ❌ **Memoria**: Crea arrays intermedios
- ❌ **Complejidad**: Más difícil de optimizar
- ❌ **Debugging**: Más complicado de depurar

**Complejidad:** O(n) tiempo, O(n) espacio (por los arrays intermedios)

---

### 5. Método con Conversión a Binario

**¿Cómo funciona?**
Primero convierte el hexadecimal a binario, luego el binario a decimal.

```javascript
function hexToBinary(hex) {
  const hexToBin = {
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

  return hex
    .split("")
    .map((char) => hexToBin[char.toUpperCase()])
    .join("");
}

function binaryToDecimal(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, binary.length - 1 - i);
    }
  }
  return decimal;
}

function hexToDecimal(hex) {
  const binary = hexToBinary(hex);
  return binaryToDecimal(binary);
}
```

**Utilidades:**

- ✅ **Educativo**: Muestra conversión paso a paso
- ✅ **Transparente**: Vemos el binario intermedio
- ✅ **Modular**: Separado en funciones pequeñas
- ✅ **Debugging**: Fácil ver valores intermedios

**Limitaciones:**

- ❌ **Ineficiente**: Doble conversión innecesaria
- ❌ **Complejo**: Más código que soluciones directas
- ❌ **Memoria**: Strings binarios pueden ser muy largos
- ❌ **Indirecto**: No es el camino más directo

**Complejidad:** O(n) tiempo, O(n) espacio

---

### Comparación de Enfoques

| Enfoque   | Complejidad | Legibilidad | Rendimiento | Educativo  | Recomendado para       |
| --------- | ----------- | ----------- | ----------- | ---------- | ---------------------- |
| Nativo    | O(n)        | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐  | ⭐         | Producción             |
| Iterativo | O(n)        | ⭐⭐⭐⭐    | ⭐⭐⭐⭐    | ⭐⭐⭐⭐⭐ | Aprendizaje            |
| Recursivo | O(n)        | ⭐⭐⭐      | ⭐⭐        | ⭐⭐⭐⭐   | Entender recursión     |
| Funcional | O(n)        | ⭐⭐⭐⭐    | ⭐⭐⭐      | ⭐⭐⭐     | Programación funcional |
| Binario   | O(n)        | ⭐⭐        | ⭐⭐        | ⭐⭐⭐⭐   | Depuración detallada   |

**Conclusión:** Para este problema educativo, usaremos el **método iterativo manual** porque ofrece el mejor balance entre aprendizaje, claridad y rendimiento.

## Complejidad

## Código

## Casos edge

## Ejemplos detallados

## Aprendizajes
