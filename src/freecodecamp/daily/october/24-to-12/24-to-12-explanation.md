---
title: "24 To 12"
difficulty: "easy"
topics:
  - String
  - Math
  - Validation
  - Conversion
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-13"
---

# 24 to 12 - Explicación Detallada

## Descripción del Problema

El problema requiere convertir una hora en formato de 24 horas (formato militar) a formato de 12 horas (formato estándar AM/PM).

**Ejemplo visual:**

- `"1124"` → `"11:24 AM"`
- `"1455"` → `"2:55 PM"`
- `"0030"` → `"12:30 AM"` (caso especial de medianoche)

El formato de entrada es un string de exactamente 4 dígitos `"HHMM"` donde:

- `HH`: horas (00-23)
- `MM`: minutos (00-59)

El formato de salida debe ser `"H:MM AM"` o `"H:MM PM"` donde:

- `H`: horas en formato 12h (1-12, sin cero inicial excepto para 12)
- `MM`: minutos con cero inicial si es necesario
- `AM/PM`: indicador de período

### Casos especiales importantes:

- **Medianoche (00:XX)** → `"12:XX AM"`
- **Mediodía (12:XX)** → `"12:XX PM"`
- **Horas 01-11** → Mismas horas + `"AM"`
- **Horas 13-23** → Restar 12 + `"PM"`

## Análisis del Problema

### Entrada

- **`time`** (string): Cadena de exactamente 4 caracteres numéricos
- **Formato:** `"HHMM"` donde HH ∈ [00,23] y MM ∈ [00,59]
- **Garantías:** Siempre será un string válido de 4 dígitos

### Salida

- **string**: Hora en formato 12h con el formato `"H:MM AM"` o `"H:MM PM"`
- **Reglas de formato:**
  - Horas: 1-12 (sin cero inicial, excepto 12)
  - Minutos: 00-59 (con cero inicial si necesario)
  - Separador: dos puntos `:`
  - Indicador: espacio + `"AM"` o `"PM"`

### Restricciones

- Input siempre será string de exactamente 4 dígitos
- Horas válidas: 00-23
- Minutos válidos: 00-59
- No hay validación de entrada necesaria
- Output debe seguir formato exacto

## Enfoque y Estrategia

### Idea Principal

La solución se basa en **parsear el string de entrada**, **determinar el período AM/PM**, y **convertir las horas al formato 12h** siguiendo reglas específicas.

**Pasos conceptuales:**

1. **Extraer componentes:** Separar horas y minutos del string `"HHMM"`
2. **Determinar período:** AM si horas < 12, PM si horas ≥ 12
3. **Convertir horas:**
   - Si horas = 0 → 12 (medianoche)
   - Si horas = 12 → 12 (mediodía)
   - Si horas > 12 → horas - 12
   - Si horas < 12 → horas sin cambio
4. **Formatear salida:** Combinar horas:minutos + espacio + AM/PM

**Reglas de conversión de horas:**

```
00:XX → 12:XX AM (medianoche)
01:XX → 1:XX AM
...
11:XX → 11:XX AM
12:XX → 12:XX PM (mediodía)
13:XX → 1:XX PM
...
23:XX → 11:XX PM
```

### Pasos del Algoritmo

La implementación sigue estos pasos secuenciales:

1. **Extraer horas del string:**

   - Usar `time.slice(0, 2)` para obtener los primeros 2 caracteres
   - Convertir a número entero con `parseInt(..., 10)` para operaciones matemáticas

2. **Extraer minutos del string:**

   - Usar `time.slice(2)` para obtener los últimos 2 caracteres
   - Mantener como string para preservar formato con cero inicial

3. **Determinar el período AM/PM:**

   - Si `hours < 12` → `"AM"`
   - Si `hours >= 12` → `"PM"`

4. **Convertir horas a formato 12h:**

   - Calcular `hours % 12` (convierte 13-23 → 1-11, pero 12 → 0)
   - Usar `|| 12` para manejar casos especiales:
     - Si resultado es 0 → usar 12
     - Si resultado es 1-11 → mantener sin cambios

5. **Formatear resultado final:**
   - Combinar `adjustedHours`, `:`, `minutes`, espacio, y `period`
   - Retornar string en formato `"H:MM AM"` o `"H:MM PM"`

## Implementación

### Código

```javascript
function to12(time) {
  // Extraer las horas del string de entrada (primeros 2 caracteres)
  // Convertir a número entero para facilitar las operaciones matemáticas
  const hours = parseInt(time.slice(0, 2), 10);

  // Extraer los minutos del string de entrada (últimos 2 caracteres)
  // Mantener como string para preservar el formato con cero inicial si es necesario
  const minutes = time.slice(2);

  // Determinar si es AM o PM: si horas < 12 entonces AM, sino PM
  const period = hours < 12 ? "AM" : "PM";

  // Convertir horas del formato 24h al formato 12h
  // hours % 12 convierte 13-23 a 1-11, pero 12 % 12 = 0
  // El operador || 12 maneja el caso especial: si el resultado es 0, usar 12
  // Esto funciona para: 0→12, 1-11→1-11, 12→12, 13-23→1-11
  const adjustedHours = hours % 12 || 12;

  // Formatear y retornar el resultado en formato "H:MM AM/PM"
  // adjustedHours ya no tiene cero inicial (excepto 12)
  // minutes mantiene el cero inicial si era "00", "01", etc.
  return `${adjustedHours}:${minutes} ${period}`;
}
```

### Explicación Línea por Línea

- **Línea 3:** `const hours = parseInt(time.slice(0, 2), 10);`

  - Extrae `"HH"` del input y lo convierte a número (0-23)
  - El `10` especifica base decimal para evitar problemas con ceros iniciales

- **Línea 7:** `const minutes = time.slice(2);`

  - Extrae `"MM"` del input como string
  - Mantiene el cero inicial si minutos < 10

- **Línea 10:** `const period = hours < 12 ? "AM" : "PM";`

  - Determina el período basado en horas 24h
  - Simple comparación: < 12 = AM, >= 12 = PM

- **Línea 15:** `const adjustedHours = hours % 12 || 12;`

  - `hours % 12`: Convierte 13-23 → 1-11, pero 12 → 0
  - `|| 12`: Si resultado es 0, usar 12 (maneja medianoche y mediodía)

- **Línea 20:** `return \`${adjustedHours}:${minutes} ${period}\`;`
  - Template literal combina todos los componentes
  - Formato exacto: "H:MM AM/PM"

## Análisis de Complejidad

### Complejidad Temporal

**O(1) - Tiempo constante**

**Explicación detallada:**

- `time.slice(0, 2)` y `time.slice(2)`: O(1) - operaciones de substring en string de longitud fija
- `parseInt(..., 10)`: O(1) - conversión de máximo 2 dígitos
- Operaciones aritméticas (`%`, `||`, comparación): O(1)
- Template literal: O(1) - concatenación de strings cortos

**El input siempre tiene exactamente 4 caracteres**, por lo que todas las operaciones son de tiempo constante independientemente del valor.

### Complejidad Espacial

**O(1) - Espacio constante**

**Explicación detallada:**

- Variables creadas: `hours` (number), `minutes` (string de 2 chars), `period` (string de 2 chars), `adjustedHours` (number)
- Todas las variables usan espacio constante
- No se crean estructuras de datos adicionales
- El string de retorno es de longitud fija (máximo 8 caracteres)

**No depende del input** - siempre usa la misma cantidad de memoria.

## Casos de Prueba

### Caso 1: "1124" → "11:24 AM"

**Proceso:**

- hours = 11, minutes = "24"
- period = "AM" (11 < 12)
- adjustedHours = 11 % 12 = 11 → 11
- Resultado: "11:24 AM"

### Caso 2: "1455" → "2:55 PM"

**Proceso:**

- hours = 14, minutes = "55"
- period = "PM" (14 >= 12)
- adjustedHours = 14 % 12 = 2 → 2
- Resultado: "2:55 PM"

### Caso 3: "0030" → "12:30 AM"

**Proceso:**

- hours = 0, minutes = "30"
- period = "AM" (0 < 12)
- adjustedHours = 0 % 12 = 0 → 0 || 12 = 12
- Resultado: "12:30 AM"

### Caso Edge: "0000" → "12:00 AM"

**Medianoche:**

- hours = 0, minutes = "00"
- period = "AM"
- adjustedHours = 12
- Resultado: "12:00 AM"

### Caso Edge: "1200" → "12:00 PM"

**Mediodía:**

- hours = 12, minutes = "00"
- period = "PM"
- adjustedHours = 12 % 12 = 0 → 0 || 12 = 12
- Resultado: "12:00 PM"

### Caso Edge: "2359" → "11:59 PM"

**Última hora del día:**

- hours = 23, minutes = "59"
- period = "PM"
- adjustedHours = 23 % 12 = 11 → 11
- Resultado: "11:59 PM"

## Aprendizajes Clave

### 1. Parsing de Strings Estructurados

- **Técnica:** Usar `slice()` para extraer partes específicas de strings
- **Beneficio:** Fácil manipulación de formatos estructurados como "HHMM"
- **Alternativa:** Podría usarse `substr()` o expresiones regulares

### 2. Operador Módulo para Conversiones Cíclicas

- **Patrón:** `value % 12 || 12` para conversión 24h → 12h
- **Lógica:** Maneja el ciclo 13-23 → 1-11 y casos especiales 0,12 → 12
- **Elegancia:** Una expresión compacta reemplaza múltiples condicionales

### 3. Preservación de Formato en Strings

- **Lección:** Mantener minutos como string preserva cero inicial
- **Técnica:** Convertir solo lo necesario a números para cálculos
- **Beneficio:** Evita problemas de formato en output

### 4. Template Literals para Formateo

- **Ventaja:** Concatenación legible y eficiente
- **Sintaxis:** `\`string ${variable} string\``
- **Resultado:** Código más mantenible que concatenación con `+`

### 5. Base Decimal en parseInt

- **Buena práctica:** Siempre especificar `parseInt(string, 10)`
- **Prevención:** Evita interpretación accidental como octal
- **Importante:** Especialmente con valores que pueden tener cero inicial

## Patrones y Técnicas Utilizadas

### Patrones de Parsing

- **String Slicing:** `slice(start, end)` para extraer substrings
- **Type Conversion:** `parseInt(string, radix)` con base explícita
- **Conditional Logic:** Operador ternario para decisiones binarias

### Técnicas de Formateo

- **Template Literals:** Interpolación de variables en strings
- **Format Preservation:** Mantener tipos apropiados para formato
- **String Building:** Construcción eficiente de strings de salida

### Patrones Matemáticos

- **Módulo Arithmetic:** `value % divisor` para conversiones cíclicas
- **Logical OR Fallback:** `value || default` para valores falsy
- **Range Conversion:** Transformación de rangos numéricos

### Técnicas de Programación Defensiva

- **Explicit Radix:** Evitar ambigüedades en conversión numérica
- **Type Preservation:** Elegir tipos apropiados para cada operación
- **Edge Case Handling:** Considerar valores límite en diseño

## Problemas Relacionados

### En FreeCodeCamp Daily

- **Date Formatting:** Problemas similares de conversión de formatos
- **String Parsing:** Extracción de datos estructurados de strings
- **Time Calculations:** Operaciones aritméticas con horas y minutos

### En LeetCode

- **String to Integer (atoi):** Parsing robusto de strings numéricos
- **Valid Number:** Validación de formatos numéricos
- **Add Binary:** Manipulación de representaciones numéricas

### Conceptos Relacionados

- **String Manipulation:** Técnicas de parsing y formateo
- **Date/Time Handling:** Trabajo con formatos temporales
- **Base Conversion:** Transformaciones entre sistemas numéricos
- **Input Validation:** Verificación de formatos de entrada