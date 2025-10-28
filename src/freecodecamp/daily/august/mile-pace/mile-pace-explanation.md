# Mile Pace

## Enunciado del Problema

Dado un número de millas corridas, y un tiempo en formato "MM:SS" (minutos:segundos) que tomó correr esas millas, retornar un string con el tiempo promedio que tomó correr cada milla en el formato "MM:SS".

Agregar ceros a la izquierda cuando sea necesario.

**Ejemplos:**

- milePace(3, "24:00") → "08:00"
- milePace(1, "06:45") → "06:45"
- milePace(2, "07:00") → "03:30"
- milePace(26.2, "120:35") → "04:36"

**Restricciones:**

- El primer parámetro es un número (puede ser decimal)
- El segundo parámetro es un string en formato "MM:SS"
- El resultado debe estar en formato "MM:SS" con ceros a la izquierda
- No hay restricciones específicas en el rango de valores

## Análisis Inicial

Este problema requiere calcular el ritmo promedio (pace) por milla dado un tiempo total y distancia recorrida. Es un problema de conversión de unidades de tiempo y cálculo de promedios.

**Desafíos identificados:**

- Parsing de tiempo en formato "MM:SS" (solo minutos y segundos)
- Conversión entre diferentes unidades de tiempo (minutos ↔ segundos)
- Cálculo de promedio con números decimales (millas pueden ser decimales)
- Formateo de salida con ceros a la izquierda
- Redondeo apropiado de segundos

**Estrategias posibles:**

### 1. **Enfoque Directo con Parsing Manual**

- ✅ **Simple y directo**: Parsear string, convertir a segundos, dividir, formatear
- ✅ **Preciso**: Maneja decimales correctamente
- ✅ **Legible**: Lógica matemática clara
- ✅ **Sin dependencias**: Solo métodos nativos de JavaScript

### 2. **Enfoque con Expresiones Regulares**

- ❌ **Overkill**: Para formato simple y consistente
- ❌ **Más complejo**: Regex innecesaria para parsing básico
- ❌ **Menos legible**: Regex agrega complejidad sin beneficio

### 3. **Enfoque con Date Objects**

- ❌ **Incorrecto**: Date objects no son para duraciones, sino para timestamps
- ❌ **Complejo**: Tendría que crear fechas dummy y calcular diferencias
- ❌ **Impreciso**: No maneja duraciones de manera natural

**Elección del enfoque:** Parsing directo con métodos de string y matemáticos básicos.

**Casos borde a considerar:**

- **Millas decimales**: `26.2` millas (maratón completo)
- **Tiempos grandes**: `120:35` (2 horas + para maratón)
- **Tiempos pequeños**: `06:45` (menos de 10 minutos)
- **Segundos que requieren redondeo**: `03:30` (3.5 minutos redondeado)

**Propiedades matemáticas relevantes:**

- **Conversión tiempo**: minutos × 60 + segundos = segundos totales
- **Pace calculation**: segundos totales ÷ millas = segundos por milla
- **Redondeo apropiado**: `Math.round()` para segundos (no truncar)
- **Formato consistente**: Siempre MM:SS con 2 dígitos

## Solución Implementada

Se implementó un enfoque directo que parsea el tiempo, calcula el pace y formatea el resultado:

```javascript
function milePace(miles, duration) {
  // Parsear minutos y segundos del formato "MM:SS"
  const [minutes, seconds] = duration.split(":").map(Number);

  // Convertir tiempo total a segundos
  const totalSeconds = minutes * 60 + seconds;

  // Calcular segundos por milla
  const paceInSeconds = totalSeconds / miles;

  // Convertir segundos por milla a minutos y segundos
  const paceMinutes = Math.floor(paceInSeconds / 60);
  const paceRemainingSeconds = Math.round(paceInSeconds % 60);

  // Formatear con ceros a la izquierda
  return `${String(paceMinutes).padStart(2, "0")}:${String(
    paceRemainingSeconds
  ).padStart(2, "0")}`;
}
```

**Lógica paso a paso:**

1. **Parsear input**: `duration.split(":")` → `["MM", "SS"]` → `[minutes, seconds]`
2. **Convertir a segundos**: `minutes * 60 + seconds`
3. **Calcular pace**: `totalSeconds / miles` → segundos por milla
4. **Extraer minutos**: `Math.floor(paceInSeconds / 60)`
5. **Extraer segundos**: `Math.round(paceInSeconds % 60)`
6. **Formatear output**: `padStart(2, "0")` para ceros a la izquierda

**Ventajas de este enfoque:**

- **Claridad máxima**: Cada paso del algoritmo es evidente
- **Eficiencia óptima**: O(1) tiempo y espacio
- **Robustez**: Maneja correctamente números decimales y redondeo
- **Idiomático**: Usa métodos modernos de JavaScript
- **Mantenible**: Código fácil de entender y modificar

## Alternativas Consideradas

### 1. **Enfoque con Funciones Helper Separadas**

```javascript
function parseTime(duration) {
  const [minutes, seconds] = duration.split(":").map(Number);
  return minutes * 60 + seconds;
}

function formatPace(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

function milePace(miles, duration) {
  const totalSeconds = parseTime(duration);
  const paceInSeconds = totalSeconds / miles;
  return formatPace(paceInSeconds);
}
```

**Cuándo usar:**

- ✅ **Mejor organización**: Funciones separadas para responsabilidades distintas
- ✅ **Reutilizable**: `parseTime` y `formatPace` útiles en otros contextos
- ✅ **Testeable**: Cada función se puede testear independientemente
- ❌ **Más código**: Tres funciones en lugar de una
- ❌ **Ligeramente menos eficiente**: Llamadas a función adicionales

### 2. **Enfoque con Template Literals y Math.round**

```javascript
function milePace(miles, duration) {
  const [min, sec] = duration.split(":").map(Number);
  const totalSec = min * 60 + sec;
  const paceSec = totalSec / miles;
  const paceMin = Math.floor(paceSec / 60);
  const paceSecRemain = Math.round(paceSec % 60);

  return `${paceMin.toString().padStart(2, "0")}:${paceSecRemain
    .toString()
    .padStart(2, "0")}`;
}
```

**Cuándo usar:**

- ✅ **Más conciso**: Menos variables intermedias
- ✅ **Template literals**: Sintaxis moderna y legible
- ✅ **Funcional**: Enfoque más expresivo
- ❌ **Menos descriptivo**: Nombres de variables más cortos
- ❌ **Igual eficiencia**: No hay mejora de rendimiento

### 3. **Enfoque con Validación de Input**

```javascript
function milePace(miles, duration) {
  if (typeof miles !== "number" || miles <= 0) {
    throw new Error("Miles must be a positive number");
  }

  if (!/^\\d{1,3}:\\d{2}$/.test(duration)) {
    throw new Error("Duration must be in MM:SS format");
  }

  const [minutes, seconds] = duration.split(":").map(Number);

  if (seconds >= 60) {
    throw new Error("Seconds must be less than 60");
  }

  // ... resto de la lógica
}
```

**Cuándo usar:**

- ✅ **Robusto**: Validación completa de inputs
- ✅ **Debugging fácil**: Mensajes de error específicos
- ✅ **Producción-ready**: Manejo apropiado de casos edge
- ❌ **Más código**: Lógica de validación adicional
- ❌ **Menos eficiente**: Regex y validaciones extras

## Elección del Enfoque Implementado

Se eligió el enfoque directo por las siguientes razones:

1. **Simplicidad**: Una función que hace todo el trabajo
2. **Claridad**: Lógica lineal fácil de seguir
3. **Eficiencia**: Sin overhead de funciones adicionales
4. **Adecuado para el scope**: Problema simple no requiere validaciones complejas
5. **Mantenibilidad**: Código que se explica por sí mismo

**Comparación con otras soluciones:**

| Enfoque               | Tiempo | Espacio | Legibilidad | Robustez  |
| --------------------- | ------ | ------- | ----------- | --------- |
| **Directo**           | O(1)   | O(1)    | Excelente   | Buena     |
| **Funciones helper**  | O(1)   | O(1)    | Muy buena   | Buena     |
| **Template literals** | O(1)   | O(1)    | Buena       | Buena     |
| **Con validación**    | O(1)   | O(1)    | Regular     | Excelente |

## Complejidad

### Análisis Detallado

**Tiempo: O(1)**

- `split(":")`: O(k) donde k es longitud del string (constante ~5)
- `map(Number)`: O(2) operaciones constantes
- Operaciones aritméticas: O(1)
- `String().padStart()`: O(1) para strings pequeños
- **Total**: O(1) - tiempo constante independiente del input

**Espacio: O(1)**

- Variables primitivas: `minutes`, `seconds`, `totalSeconds`, etc.
- Array temporal de `split()`: O(1) (máximo 2 elementos)
- Strings temporales: O(1) (longitud constante)
- **Total**: O(1) espacio constante

### Consideraciones Prácticas

- **Para cualquier input razonable**: Instantáneo (< 1ms)
- **Strings pequeños**: `split()` es muy eficiente en JavaScript
- **Números decimales**: JavaScript maneja `miles` decimales sin problemas
- **Redondeo**: `Math.round()` es apropiado para tiempos (no truncar)
- **Formateo**: `padStart()` es óptimo para strings de ancho fijo

### Optimizaciones Posibles

**Optimización 1: Evitar array intermedio**

```javascript
// Original: split().map(Number)
const minutes = Number(duration.slice(0, 2));
const seconds = Number(duration.slice(3, 5));
```

- ❌ **Peor**: Más código, asume formato exacto, menos robusto

**Optimización 2: Cálculo en una línea**

```javascript
const paceInSeconds =
  (Number(duration.slice(0, 2)) * 60 + Number(duration.slice(3, 5))) / miles;
```

- ❌ **Menos legible**: Todo en una expresión compleja

**Optimización 3: Cache de parseo**

```javascript
// Para múltiples llamadas con mismo duration
const parsedDuration = duration.split(":").map(Number);
```

- ❌ **No aplica**: Cada llamada tiene duration diferente

**Conclusión**: La implementación actual es óptima. No hay optimizaciones significativas posibles para este problema simple.

## Aprendizajes y Reflexiones

### Patrones Identificados

1. **Parsing de tiempo**: `split(':').map(Number)` para formato MM:SS
2. **Conversión de unidades**: Segundos como unidad común para cálculos
3. **Cálculo de promedios**: División simple con números decimales
4. **Formateo con padding**: `padStart(2, '0')` para formato consistente
5. **Redondeo apropiado**: `Math.round()` vs `Math.floor()` para tiempos

### Mejores Prácticas Aplicadas

- **Nombres descriptivos**: `paceInSeconds`, `paceMinutes`, `totalSeconds`
- **Comentarios estratégicos**: Explican cada paso lógico
- **Desestructuración**: `[minutes, seconds]` para claridad
- **Template literals**: Formateo legible del resultado
- **Funciones puras**: Sin efectos secundarios, output consistente

### Reflexiones sobre TDD

- Los tests validaron tanto casos simples como complejos (maratón)
- La implementación fue directa después de entender el problema
- Los casos de prueba fueron suficientes para asegurar corrección
- TDD ayudó a identificar el error inicial (formato HH:MM:SS vs MM:SS)

### Comparación con otros lenguajes

**Python:**

```python
def mile_pace(miles, duration):
    minutes, seconds = map(int, duration.split(':'))
    total_seconds = minutes * 60 + seconds
    pace_seconds = total_seconds / miles
    pace_minutes = int(pace_seconds // 60)
    pace_remaining_seconds = round(pace_seconds % 60)
    return f"{pace_minutes:02d}:{pace_remaining_seconds:02d}"
```

**Java:**

```java
public String milePace(double miles, String duration) {
    String[] parts = duration.split(":");
    int minutes = Integer.parseInt(parts[0]);
    int seconds = Integer.parseInt(parts[1]);
    int totalSeconds = minutes * 60 + seconds;
    double paceInSeconds = totalSeconds / miles;
    int paceMinutes = (int) Math.floor(paceInSeconds / 60);
    int paceRemainingSeconds = (int) Math.round(paceInSeconds % 60);
    return String.format("%02d:%02d", paceMinutes, paceRemainingSeconds);
}
```

**Similitudes:**

- Lógica idéntica: parse → convertir → calcular → formatear
- Manejo similar de números decimales y redondeo
- Formato de salida consistente

**Diferencias:**

- **JavaScript**: `split(':').map(Number)` más funcional
- **Python**: `map(int, split(':'))` similar pero con `int`
- **Java**: `Integer.parseInt()` más verbose pero type-safe

### Posibles Extensiones

- **Múltiples formatos**: Soporte para "H:MM:SS", "MM:SS", "SS"
- **Unidades diferentes**: Kilómetros, metros, yardas
- **Tiempos acumulados**: Suma de múltiples segmentos
- **Estadísticas avanzadas**: Desviación estándar, mejores/peores paces
- **Formateo flexible**: Diferentes formatos de salida

### Conceptos Relacionados

- **Conversión de unidades**: Tiempo, distancia, velocidad
- **Cálculos de promedio**: Estadísticas básicas
- **Parsing de strings**: Formatos estructurados
- **Formateo numérico**: Padding, precisión, redondeo
- **Funciones matemáticas**: floor, round, módulo

### Preguntas Frecuentes

**¿Por qué usar Math.round() en lugar de Math.floor()?**

- Los tiempos se redondean al segundo más cercano (regla estándar)
- `Math.floor()` truncaría, dando tiempos artificialmente bajos
- Para paces de 3:30, el cálculo da 210.0 segundos exactamente

**¿Qué pasa con números decimales en millas?**

- JavaScript maneja `26.2 / 120:35` correctamente
- La división produce `paceInSeconds` decimal
- `Math.floor()` y `Math.round()` funcionan bien con decimales

**¿Es necesario validar el formato de entrada?**

- Para este problema: No, asume formato correcto
- En producción: Sí, validar con regex `/^\d{1,3}:\d{2}$/`
- Los tests del problema asumen inputs válidos

**¿Por qué padStart(2, '0') en lugar de otras opciones?**

- Consistente con el requerimiento de "leading zeros"
- Maneja automáticamente números de 1 o 2 dígitos
- Más legible que alternativas como `('0' + num).slice(-2)`

Este problema ilustra la importancia de entender unidades y conversiones en problemas matemáticos, y cómo JavaScript proporciona herramientas adecuadas para parsing y formateo de datos estructurados.
