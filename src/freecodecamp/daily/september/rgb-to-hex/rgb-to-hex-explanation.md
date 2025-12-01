---
title: "rgb-to-hex"
difficulty: "easy"
topics:
  - String
  - Math
  - Formatting
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# RGB to Hex

## Enunciado del Problema

Dado un string de color CSS en formato `rgb(r, g, b)`, se debe retornar su equivalente hexadecimal.

Aquí hay algunos ejemplos de salidas para una entrada dada:

| Input                | Output    |
|

-------------- | --------- |
| "rgb(255, 255, 255)" | "#ffffff" |
| "rgb(1, 2, 3)"       | "#010203" |

Se deben hacer minúsculas todas las letras. Retornar un # seguido de seis caracteres. No usar valores abreviados.

**Casos de prueba:**

- `rgbToHex("rgb(255, 255, 255)")` → `"#ffffff"`
- `rgbToHex("rgb(1, 11, 111)")` → `"#010b6f"`
- `rgbToHex("rgb(173, 216, 230)")` → `"#add8e6"`
- `rgbToHex("rgb(79, 123, 201)")` → `"#4f7bc9"`

## Análisis Inicial

Este problema requiere convertir valores RGB decimales a su representación hexadecimal. Es un problema de conversión de formatos de color.

**Puntos clave a considerar:**

- El input siempre viene en formato `"rgb(r, g, b)"` donde r, g, b son números enteros
- Cada componente RGB (r, g, b) debe convertirse individualmente a hexadecimal
- Los valores hexadecimales deben tener exactamente 2 dígitos por componente (padding con cero si es necesario)
- El resultado final debe ser `"#rrggbb"` donde rr, gg, bb son los componentes en hex
- Los valores pueden ir desde 0 hasta 255

**Razonamientos para la solución:**

- **Parsing del input:** ¿Cómo extraer los valores numéricos r, g, b del string `"rgb(r, g, b)"`?
- **Conversión decimal a hex:** ¿Qué método usar para convertir un número decimal a su representación hexadecimal de 2 dígitos?
- **Concatenación:** ¿Cómo combinar los tres componentes con el prefijo `#`?

**Pistas para pensar:**

- Los strings en JavaScript tienen métodos útiles para extraer partes específicas
- JavaScript tiene métodos nativos para conversiones numéricas
- La conversión a hex de un solo dígito necesita padding (ej: 1 → "01", no "1")
- El orden importa: siempre debe ser `#` + rojo + verde + azul

## Solución Implementada

La implementación utiliza parsing manual con `slice()` e `indexOf()` para extraer los componentes RGB, seguido de conversión individual a hexadecimal:

```javascript
function rgbToHex(rgb) {
  // Extraer componentes RGB usando slice e indexOf
  const r = parseInt(rgb.slice(4, rgb.indexOf(",", 4)).trim(), 10);
  const g = parseInt(
    rgb.slice(rgb.indexOf(",", 4) + 1, rgb.lastIndexOf(",")).trim(),
    10
  );
  const b = parseInt(
    rgb.slice(rgb.lastIndexOf(",") + 1, rgb.length - 1).trim(),
    10
  );

  // Función helper para conversión a hex con padding
  const toHex = (num) => {
    const hex = num.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  // Concatenar resultado con prefijo #
  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return hexColor.toLowerCase();
}
```

**Explicación del algoritmo:**

- **Parsing preciso:** Se utiliza `slice()` con posiciones calculadas por `indexOf()` para extraer cada componente RGB del formato `"rgb(r, g, b)"`
- **Conversión individual:** Cada componente se convierte por separado usando `toString(16)` con padding manual para asegurar 2 dígitos
- **Concatenación final:** Se unen los componentes con template literals y se agrega el prefijo `#`
- **Lowercase redundante:** Aunque se aplica `toLowerCase()`, `toString(16)` ya produce caracteres en minúscula

## Alternativas Consideradas

**Enfoque con Expresiones Regulares:**

```javascript
function rgbToHexRegex(rgb) {
  // Usar regex para extraer los valores RGB directamente
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  if (!match) {
    throw new Error("Formato RGB inválido");
  }

  const [, r, g, b] = match.map(Number);

  const toHex = (num) => num.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
```

**Explicación del regex `/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/`:**

- `^rgb\(` - Inicio del string, seguido literalmente de "rgb("
- `(\d+)` - Primer grupo de captura: uno o más dígitos (valor R)
- `,\s*` - Coma seguida de cero o más espacios en blanco
- `(\d+)` - Segundo grupo de captura: uno o más dígitos (valor G)
- `,\s*` - Coma seguida de cero o más espacios en blanco
- `(\d+)` - Tercer grupo de captura: uno o más dígitos (valor B)
- `\)$` - Paréntesis de cierre al final del string

**Ventajas del enfoque regex:**

- **Validación automática:** El regex valida que el formato sea correcto
- **Manejo de espacios:** `\s*` permite espacios variables alrededor de las comas
- **Extraño directo:** Los grupos de captura devuelven los valores numéricos
- **Robustez:** Detecta formatos inválidos

**Desventajas:**

- **Complejidad:** Más difícil de entender para principiantes
- **Performance:** Ligeramente más lento que `split()` para casos simples
- **Mantenimiento:** Cambios en el formato requieren modificar el regex

**Enfoque con split() (implementado):**

```javascript
// Versión implementada - más simple para este caso
const values = rgb
  .slice(4, -1)
  .split(",")
  .map((v) => parseInt(v.trim(), 10));
```

**¿Por qué se eligió split() sobre regex?**

- El formato RGB es predecible y simple
- No requiere validación adicional (problema garantiza formato correcto)
- Más legible y fácil de entender
- Suficientemente eficiente para el caso de uso

**Cuándo usar regex:**

- Cuando el formato de input es variable o complejo
- Cuando se necesita validación robusta del formato
- Cuando se deben extraer múltiples valores con patrones específicos
- Cuando el parsing manual se vuelve demasiado complicado

**Enfoque con split() y map():**

```javascript
function rgbToHexSplit(rgb) {
  const values = rgb
    .slice(4, -1)
    .split(",")
    .map((v) => parseInt(v.trim(), 10));
  const [r, g, b] = values;

  const toHex = (num) => num.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
```

**Ventajas:** Más conciso, menos propenso a errores de índices
**Desventajas:** Crea array intermedio, potencialmente menos eficiente para strings muy largos

**Enfoque con expresiones regulares:**

```javascript
function rgbToHexRegex(rgb) {
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) return null;

  const [, r, g, b] = match.map(Number);
  const toHex = (num) => num.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
```

**Ventajas:** Manejo robusto de espacios, validación implícita del formato
**Desventajas:** Overhead de regex, más complejo para casos simples

**Enfoque con padStart() moderno:**

```javascript
const toHex = (num) => num.toString(16).padStart(2, "0");
```

**Ventajas:** Una línea, muy legible, método nativo moderno
**Desventajas:** Menos compatible con navegadores antiguos

**La solución implementada es preferible porque:**

- Es clara y fácil de seguir sin herramientas avanzadas
- No depende de expresiones regulares complejas
- Funciona en cualquier entorno JavaScript
- Demuestra comprensión fundamental de manipulación de strings

## Complejidad

**Complejidad Temporal: O(1)**

- Las operaciones `slice()`, `indexOf()`, y `parseInt()` son O(1) para strings de longitud fija
- La conversión `toString(16)` es O(1) para números en el rango 0-255
- No hay bucles ni recursión dependiente del input

**Complejidad Espacial: O(1)**

- Se crean solo unas pocas variables string temporales
- No se utilizan estructuras de datos adicionales
- La longitud del output es siempre fija (7 caracteres)

**Complejidad por casos:**

- **Input válido:** O(1) - procesamiento directo
- **Input malformado:** O(1) - `parseInt()` maneja errores gracefully
- **Rango de valores:** Siempre O(1) ya que RGB está limitado a 0-255

**Comparación con alternativas:**

- **Split approach:** O(n) espacial por crear array, pero aún O(1) temporal
- **Regex approach:** O(n) temporal por matching, pero más robusto

## Aprendizajes y Reflexiones

**Patrones identificados:**

- **Parsing manual de strings estructurados:** Cuando el formato es predecible, `slice()` + `indexOf()` ofrece control preciso
- **Conversión numérica con padding:** Patrón común para formatos que requieren ancho fijo (hex, binario, etc.)
- **Función helper pura:** Separar lógica de conversión mejora legibilidad y testabilidad

**Conceptos reforzados:**

- **Sistema hexadecimal:** Base 16, dígitos 0-9 y a-f, conversión desde decimal
- **Manipulación de strings:** `slice()`, `indexOf()`, `lastIndexOf()` para parsing preciso
- **Template literals:** Concatenación clara y legible para strings complejos
- **Pure functions:** La función no modifica input y siempre produce mismo output para mismo input

**Decisiones de diseño:**

- **Parsing manual vs split():** Opté por claridad y control sobre concisión
- **Función helper vs inline:** Mejora legibilidad separando responsabilidades
- **toLowerCase() redundante:** Incluido por seguridad aunque innecesario
- **Sin validación:** Confié en las restricciones del problema (formato siempre válido)

**Posibles mejoras futuras:**

- **Validación de input:** Agregar checks para formato RGB válido y rangos 0-255
- **Soporte para shorthand:** Manejar casos como `#RGB` además de `#RRGGBB`
- **Conversión bidireccional:** Crear función complementaria `hexToRgb()`
- **Optimización:** Usar `padStart()` para reducir código (menos compatible con IE11)

**Reflexión sobre el proceso:**

- El enfoque paso a paso (parsing → conversión → concatenación) resultó natural y mantenible
- La función helper `toHex()` demostró ser reusable y testable por separado
- El problema reforzó la importancia de entender formatos de color web comunes