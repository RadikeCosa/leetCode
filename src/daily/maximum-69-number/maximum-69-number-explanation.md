# Maximum 69 Number - Análisis y Documentación

## Descripción del Problema

**LeetCode 1323 - Easy**  
**Daily Challenge: 16 de Agosto, 2025**  
**Topics: Math, Greedy**

Dado un número entero positivo `num` que consiste únicamente de dígitos 6 y 9, retorna el número máximo que puedes obtener cambiando **como máximo un dígito** (6 se convierte en 9, y 9 se convierte en 6).

## Restricciones

- `1 <= num <= 10^4`
- `num` consiste únicamente de dígitos 6 y 9

## Ejemplos de LeetCode

### Ejemplo 1:

```
Input: num = 9669
Output: 9969
Explanation: Cambiar el primer 6 a 9 da el número máximo.
```

### Ejemplo 2:

```
Input: num = 9996
Output: 9999
Explanation: Cambiar el último 6 a 9 da el número máximo.
```

### Ejemplo 3:

```
Input: num = 9999
Output: 9999
Explanation: Es mejor no aplicar ningún cambio.
```

## Preguntas de Análisis para Reflexión

Antes de implementar, reflexiona sobre estas preguntas clave:

### 🎯 Análisis del Problema

1. **¿Cuál es la diferencia de valor entre 6 y 9?**
2. **¿Importa la posición del dígito que cambias?**
3. **¿Cuántos cambios deberías hacer para maximizar?**
4. **¿Cuándo sería mejor NO hacer ningún cambio?**

### 🧠 Estrategia Algorítmica

1. **¿Qué enfoque algorítmico usarías?**
   - Greedy (decisión óptima local)
   - String manipulation
   - Matemáticas puras
2. **¿Desde qué dirección procesarías el número?**

   - Izquierda a derecha (dígito más significativo primero)
   - Derecha a izquierda (dígito menos significativo primero)

3. **¿Qué condición de parada usarías?**

### 🔍 Casos de Prueba Mental

Resultados verificados ✅:

- `6666` → `9666` (cambiar primer 6)
- `9696` → `9996` (cambiar primer 6 en posición 1)
- `6969` → `9969` (cambiar primer 6 en posición 0)
- `6` → `9` (cambiar único dígito)
- `99966` → `99996` (cambiar primer 6 en posición 3)

## Análisis de Patrones

### Observación Clave #1: Impacto Posicional

- Cambiar el dígito más a la izquierda tiene mayor impacto
- `6999` → `9999` (+3000) vs `9996` → `9999` (+3)

### Observación Clave #2: Estrategia Greedy

- **Decisión óptima local**: Cambiar el primer 6 encontrado
- **Máximo beneficio**: 9 > 6, siempre es beneficioso el cambio
- **Un solo cambio**: "At most one digit" - greedy garantiza el óptimo

### Observación Clave #3: Casos Especiales

- **Solo 9's**: No hacer ningún cambio (9999 → 9999)
- **Solo 6's**: Cambiar el primero (6666 → 9666)
- **Mixtos**: Siempre el primer 6 de izquierda a derecha

## Enfoques Posibles

### Enfoque 1: Conversión a Array (✅ IMPLEMENTADO)

**Ventajas:**

- Fácil de entender y implementar
- Manipulación directa de dígitos
- Código legible y mantenible
- Búsqueda lineal simple

**Desventajas:**

- Usa espacio extra O(log n)
- Conversiones string ↔ number

### Enfoque 2: Matemáticas Puras

**Ventajas:**

- Espacio constante O(1)
- No conversiones de tipo

**Desventajas:**

- Más complejo de implementar
- Cálculos de potencias y divisiones
- Menos intuitivo

### Enfoque 3: String Replace

**Ventajas:**

- Una línea de código: `num.toString().replace('6', '9')`
- Muy directo

**Desventajas:**

- Solo funciona para el primer '6'
- Menos control del proceso

## Implementación

**Algoritmo Elegido: Array de Dígitos + Greedy**

```typescript
export function maximum69Number(num: number): number {
  // 1. Convertir a array de dígitos
  const digits = num.toString().split("").map(Number);

  // 2. Buscar el primer 6 desde la izquierda (greedy)
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 6) {
      digits[i] = 9; // 3. Cambiar a 9
      break; // 4. Parar (máximo un cambio)
    }
  }

  // 5. Convertir de vuelta a número
  return parseInt(digits.join(""), 10);
}
```

**Explicación paso a paso:**

1. **Conversión**: `9669` → `[9, 6, 6, 9]`
2. **Búsqueda**: Encontrar primer 6 en posición 1
3. **Cambio**: `[9, 9, 6, 9]` (solo el primer 6)
4. **Resultado**: `9969`

## Complejidad

### Análisis Temporal

- **O(log n)** donde n es el número de entrada
- Razón: Número de dígitos = log₁₀(n)
- Operaciones: conversión + búsqueda lineal + conversión

### Análisis Espacial

- **O(log n)** para el array de dígitos
- Proporcional al número de dígitos del input

## Casos Extremos Identificados

1. **Número con todos 9's**: No hacer cambios
   - `9999 → 9999` ✅
2. **Número con todos 6's**: Cambiar el primero
   - `6666 → 9666` ✅
3. **Un solo dígito**:
   - `6 → 9` ✅
   - `9 → 9` ✅
4. **Alternating patterns**:
   - `6969 → 9969` (primer 6) ✅
   - `9696 → 9996` (primer 6 en posición 1) ✅
5. **Edge case máximo**: `9999` (ya óptimo)
6. **Edge case mínimo**: `6` (máximo impacto)5. **Edge case máximo**: `9999` (ya óptimo)
7. **Edge case mínimo**: `6` (máximo impacto)

## Optimizaciones Posibles

La implementación actual es ya óptima para este problema:

- **Enfoque alternativo**: String replace en una línea: `parseInt(num.toString().replace('6', '9'))`
- **Enfoque matemático**: Más complejo, sin beneficio claro
- **Early termination**: Ya implementado con `break`

## Variaciones del Problema

¿Qué pasaría si...?

1. **Pudieras cambiar múltiples dígitos**: Cambiar todos los 6's a 9's
2. **Tuvieras dígitos del 0-9**: Buscar el dígito con mayor potencial de mejora
3. **Quisieras el número mínimo**: Cambiar el primer 9 a 6

## Reflexiones del Proceso

### Lo que Aprendí

- **Algoritmos Greedy**: La decisión óptima local garantiza el óptimo global
- **Análisis de impacto posicional**: Los dígitos más significativos importan más
- **Trade-offs de implementación**: Claridad vs. eficiencia espacial

### Conceptos Reforzados

- **Manipulación de dígitos**: Conversiones number ↔ string ↔ array
- **Búsqueda lineal**: Terminar al encontrar el primer candidato
- **Complejidad logarítmica**: Relacionada con el número de dígitos

### Conexiones con Otros Problemas

- **Problemas de dígitos**: Reverse Integer, Palindrome Number
- **Algoritmos greedy**: Coin Change, Activity Selection
- **Optimización posicional**: Maximum Swap, Next Greater Element
