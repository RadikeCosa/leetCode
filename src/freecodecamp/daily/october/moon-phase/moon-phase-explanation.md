---
name: moon-phase
source: freecodecamp
series: daily
category: daily
createdAt: 2025-10-09
difficulty: easy
topics:
  - Date
  - Math
hasImplementation: true
hasTests: true
hasExplanation: true
hasPostSolution: false
---

# Explicación

## Análisis del problema

El problema requiere determinar la fase lunar para una fecha dada, usando un ciclo lunar simplificado de 28 días dividido en cuatro fases iguales. La fecha de referencia es "2000-01-06" (día 1 del ciclo, luna nueva). No se darán fechas anteriores a esta referencia.

El ciclo se divide así:

- "New": días 1-7
- "Waxing": días 8-14
- "Full": días 15-21
- "Waning": días 22-28

Después del día 28, el ciclo se repite (día 29 = día 1, etc.).

Para resolverlo, necesitamos:

1. Calcular los días transcurridos desde la fecha de referencia hasta la fecha dada.
2. Determinar el día del ciclo actual (usando módulo 28).
3. Mapear ese día a la fase correspondiente.

El cálculo de días requiere manejar fechas correctamente, considerando años bisiestos y diferencias en meses/días.

## Explicación paso a paso detallada

Vamos a explicar cada paso de la función `moonPhase` de manera didáctica, especialmente el cálculo del día del ciclo lunar que es el más complejo.

### Paso 1: Crear objetos Date

```javascript
const referenceDate = new Date("2000-01-06");
const givenDate = new Date(date);
```

**¿Qué es un objeto Date en JavaScript?**

- Un objeto `Date` representa un momento específico en el tiempo
- Internamente almacena el número de milisegundos transcurridos desde el "Unix Epoch" (1 de enero de 1970 a las 00:00:00 UTC)
- Cuando creamos `new Date("2000-01-06")`, JavaScript convierte esa string en un objeto Date
- El objeto Date maneja automáticamente años bisiestos, meses de diferente duración, etc.

**¿Qué nos da el objeto Date?**

- Métodos para obtener año, mes, día, hora, etc.
- Capacidad de restar fechas (lo que da milisegundos de diferencia)
- Manejo automático de zonas horarias (aunque podemos tener problemas si no especificamos UTC)

### Paso 2: Calcular diferencia en milisegundos

```javascript
const diffInTime = givenDate - referenceDate;
```

**¿Qué hace esta resta?**

- Cuando restas dos objetos Date, JavaScript devuelve la diferencia en **milisegundos**
- Por ejemplo, si `givenDate` es 2 días después que `referenceDate`, el resultado será `172800000` (2 × 24 × 60 × 60 × 1000)
- Este número representa exactamente cuánto tiempo ha pasado entre las dos fechas

### Paso 3: Convertir a días

```javascript
const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
```

**¿Por qué esta división?**

- `1000 * 60 * 60 * 24` = 86400000, que son los milisegundos en un día
- Dividimos la diferencia en ms entre este número para obtener días
- `Math.floor()` redondea hacia abajo porque queremos días completos
- Ejemplo: 172800000 ms ÷ 86400000 = 2 días

### Paso 4: Calcular el día del ciclo lunar (simplificado)

```javascript
const lunarCycleDay = (diffInDays % 28) + 1;
```

**¿Por qué podemos simplificar aquí?**

En este problema específico de FreeCodeCamp, sabemos que:

- La fecha dada siempre será posterior o igual a la fecha de referencia (2000-01-06)
- `diffInDays` nunca será negativo
- Los casos de prueba están controlados

Por eso podemos usar la versión simplificada: `(diffInDays % 28) + 1`

**¿Cuándo NO simplificar?**

- En código de producción donde las entradas no están garantizadas
- Cuando trabajamos con fechas que podrían ser anteriores
- En bibliotecas reutilizables donde queremos máxima robustez

**¿Qué hace esta simplificación?**

- `diffInDays % 28` nos da un número entre 0 y 27
- Sumando 1 obtenemos el rango 1-28 que necesitamos
- Es más legible y directo para este contexto educativo

**Ejemplos prácticos:**

- diffInDays = 0: (0 % 28) + 1 = 1 ✓ (día 1 del ciclo)
- diffInDays = 6: (6 % 28) + 1 = 7 ✓ (día 7 del ciclo)
- diffInDays = 28: (28 % 28) + 1 = 1 ✓ (ciclo se repite)
- diffInDays = 35: (35 % 28) + 1 = 8 ✓ (día 8 del ciclo)

### Paso 5: Determinar la fase

```javascript
if (lunarCycleDay <= 7) return "New";
if (lunarCycleDay <= 14) return "Waxing";
if (lunarCycleDay <= 21) return "Full";
return "Waning";
```

**¿Cómo funcionan estos rangos?**

- Si el día es 1, 2, 3, 4, 5, 6 o 7 → "New" (luna nueva)
- Si es 8-14 → "Waxing" (creciente)
- Si es 15-21 → "Full" (llena)
- Si es 22-28 → "Waning" (menguante)

**¿Por qué if-else encadenados?**

- Es más legible que un switch o array lookup para solo 4 opciones
- Los rangos son consecutivos, así que funciona perfectamente
- El último `return` cubre automáticamente el caso 22-28

## Complejidad

**Tiempo:** O(1)

- Creación de objetos Date: O(1)
- Cálculo de diferencia en milisegundos: O(1)
- Conversión a días y módulo: O(1)
- Determinación de fase: O(1)

El algoritmo es constante en tiempo independientemente del valor de la fecha.

**Espacio:** O(1)

- Solo se usan variables escalares (referenceDate, givenDate, diffInTime, etc.)
- No se crean estructuras de datos adicionales
- Los objetos Date tienen tamaño fijo

## Optimización

El código actual es óptimo para este problema, pero se pueden considerar algunas mejoras:

- **Caché de fecha de referencia**: Si se llama múltiples veces, se podría cachear la fecha de referencia fuera de la función para evitar recrearla cada vez.
- **Uso de UTC**: Para evitar problemas de zona horaria, se podría forzar el uso de UTC en las fechas.
- **Validación de entrada**: Agregar validación para asegurar que la fecha tenga el formato correcto.
- **Precomputación de fases**: Crear un array con las fases para lookup directo en lugar de if-else.

Sin embargo, estas optimizaciones son innecesarias para este problema ya que:

- Las llamadas múltiples no son comunes en este contexto
- El código actual es claro y legible
- La validación adicional complicaría innecesariamente el código
- Un array lookup sería overkill para solo 4 fases

## Casos límite y ejemplos

**Casos límite:**

- Fecha igual a la referencia (2000-01-06): debería retornar "New" (día 1)
- Fecha un día después (2000-01-07): "New" (día 2)
- Fecha en el límite de fases (2000-01-14): "Waxing" (día 9)
- Fecha exactamente 28 días después (2000-02-03): "New" (día 1 del siguiente ciclo)
- Fecha muy lejana (2025-01-01): debe calcular correctamente el módulo 28

**Ejemplos paso a paso:**

1. **moonPhase("2000-01-12")**

   - Diferencia: 6 días
   - Día del ciclo: 6
   - Fase: "New" (6 <= 7)

2. **moonPhase("2000-01-13")**

   - Diferencia: 7 días
   - Día del ciclo: 7
   - Fase: "New" (7 <= 7)

3. **moonPhase("2000-01-14")**

   - Diferencia: 8 días
   - Día del ciclo: 8
   - Fase: "Waxing" (8 <= 14)

4. **moonPhase("2000-02-03")**

   - Diferencia: 28 días
   - Día del ciclo: 28
   - Fase: "Waning" (28 > 21)

5. **moonPhase("2000-02-04")**
   - Diferencia: 29 días
   - Día del ciclo: 1 (29 % 28 = 1)
   - Fase: "New"

## Aprendizajes y patrones

Aquí hay un resumen de aprendizajes prácticos y patrones extraídos mientras resolví este problema:

- **Manejo de fechas en JavaScript**: La API de Date es poderosa pero requiere cuidado con zonas horarias. Para cálculos de días, es mejor trabajar con milisegundos y convertir explícitamente.
- **Ajuste de índices**: Cuando trabajamos con ciclos (como el módulo 28), es común que el resultado vaya de 0 a 27, pero el problema requiera 1 a 28. El patrón `((x % n) + n) % n + 1` es útil para este ajuste.
- **Condiciones encadenadas vs lookup**: Para rangos pequeños como las 4 fases lunares, if-else encadenados son más legibles que arrays o mapas. Para más opciones, considerar lookup tables.
- **Validación implícita**: El problema garantiza que no se darán fechas anteriores a la referencia, lo que simplifica el código al no necesitar validaciones adicionales.
- **Ciclos periódicos**: Problemas con ciclos fijos (como 28 días) se resuelven eficientemente con operaciones módulo, pero requieren cuidado con el ajuste de índices.
- **Comentarios explicativos**: Para algoritmos con múltiples pasos, los comentarios que explican cada "paso" hacen el código mucho más mantenible, especialmente para lógica matemática.

Si quieres, puedo añadir más ejemplos numéricos o crear tests adicionales para casos límite específicos.
