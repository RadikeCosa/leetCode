# Sum of Squares

## Enunciado del Problema

Dado un entero positivo hasta 1,000, retornar la suma de todos los enteros al cuadrado desde 1 hasta el número.

**Ejemplos:**

- sumOfSquares(5) → 55 (1² + 2² + 3² + 4² + 5² = 1 + 4 + 9 + 16 + 25 = 55)
- sumOfSquares(10) → 385
- sumOfSquares(25) → 5525
- sumOfSquares(500) → 41791750
- sumOfSquares(1000) → 333833500

**Restricciones:**

- Entrada: entero positivo entre 1 y 1,000 inclusive
- Salida: suma de cuadrados 1² + 2² + ... + n²

## Análisis Inicial

Este problema requiere calcular la suma de los cuadrados de los primeros n números naturales. Es un cálculo matemático fundamental con aplicaciones en estadística, física y análisis numérico.

**Desafíos identificados:**

- Calcular sumas de cuadrados para números grandes (hasta n=1000)
- Asegurar precisión para números grandes
- Implementar solución eficiente
- Manejar el rango completo de entrada (1-1000)

**Estrategias posibles:**

### 1. **Enfoque Iterativo (Implementado)**

- ✅ **Simple y directo**: Bucle que suma cada cuadrado
- ✅ **Fácil de entender**: Lógica matemática evidente
- ✅ **Preciso**: No hay aproximaciones
- ✅ **Escalable**: Funciona para cualquier n

### 2. **Enfoque con Fórmula Matemática**

- ✅ **O(1) tiempo**: Una sola operación matemática
- ✅ **Muy eficiente**: Mejor complejidad teórica
- ❌ **Más complejo**: Requiere recordar la fórmula

### 3. **Enfoque Funcional**

- ✅ **Elegante**: Usando reduce o map
- ✅ **Moderno**: Aprovecha métodos funcionales
- ❌ **Menos eficiente**: Crea arrays intermedios

**Elección del enfoque:** Iterativo es claro y directo para este problema.

**Fórmula matemática conocida:**
La suma de los primeros n cuadrados es: Σ(k²) = n(n+1)(2n+1)/6

**Casos borde a considerar:**

- n = 1: suma = 1² = 1
- n = 1000: número muy grande pero manejable en JavaScript

## Solución Implementada

Se implementó un enfoque iterativo que calcula la suma acumulando cada cuadrado:

```javascript
function sumOfSquares(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }

  return sum;
}
```

**Lógica paso a paso:**

1. Inicializar sum en 0
2. Para cada número i desde 1 hasta n:
   - Calcular i² (i \* i)
   - Sumar al acumulador total
3. Retornar la suma final

**Ventajas de este enfoque:**

- **Claridad máxima**: Código que refleja exactamente el problema
- **Sin complejidades**: No hay fórmulas que recordar
- **Facilidad de debugging**: Cada iteración es verificable
- **Precisión garantizada**: No hay aproximaciones matemáticas
- **Mantenibilidad**: Fácil de modificar o extender

## Alternativas Consideradas

### 1. **Enfoque con Fórmula Matemática - O(1)**

**Cómo funciona:**

```javascript
function sumOfSquaresFormula(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}
```

**Cuándo usar:**

- ✅ **Máximo rendimiento**: Una sola operación
- ✅ **Matemáticamente elegante**: Usa fórmula cerrada
- ✅ **Preciso**: Resultado exacto
- ❌ **Difícil de recordar**: Fórmula específica
- ❌ **Menos intuitivo**: No refleja el proceso paso a paso

**Ventajas vs Desventajas:**

- ✅ **O(1) vs O(n)**: Mucho más eficiente para n grande
- ✅ **Sin bucles**: Código más conciso
- ❌ **Requiere memoria**: Hay que recordar la fórmula
- ❌ **Menos pedagógico**: No muestra el proceso de suma

### 2. **Enfoque Funcional con Reduce**

**Cómo funciona:**

```javascript
function sumOfSquaresFunctional(n) {
  return Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce(
    (sum, square) => sum + square,
    0
  );
}
```

**Cuándo usar:**

- ✅ **Funcional puro**: Usa paradigmas funcionales
- ✅ **Expresivo**: Código declarativo
- ✅ **Componible**: Fácil de combinar con otras operaciones
- ❌ **Ineficiente**: Crea array de tamaño n
- ❌ **Complejo**: Más código que el iterativo

**Ventajas vs Desventajas:**

- ✅ **Moderno**: Aprovecha características de ES6+
- ✅ **Legible**: Expresa intención claramente
- ❌ **Memoria extra**: Array intermedio O(n)
- ❌ **Rendimiento**: Peor que enfoque iterativo

### 3. **Enfoque Recursivo**

**Cómo funciona:**

```javascript
function sumOfSquaresRecursive(n) {
  if (n === 0) return 0;
  return n * n + sumOfSquaresRecursive(n - 1);
}
```

**Cuándo usar:**

- ✅ **Matemáticamente natural**: Refleja definición recursiva
- ✅ **Conciso**: Pocos líneas de código
- ❌ **Stack overflow**: Para n=1000 puede fallar
- ❌ **Ineficiente**: Múltiples llamadas a función

## Elección del Enfoque Implementado

Se eligió el enfoque iterativo por las siguientes razones:

1. **Claridad pedagógica**: Muestra exactamente cómo se calcula la suma
2. **Eficiencia práctica**: O(n) es perfectamente aceptable para n≤1000
3. **Simplicidad**: Código fácil de entender y mantener
4. **Robustez**: No hay riesgo de stack overflow
5. **Precisión**: Resultados exactos sin aproximaciones

**Comparación con otras soluciones:**

| Enfoque   | Tiempo | Espacio | Claridad  | Riesgos         |
| --------- | ------ | ------- | --------- | --------------- |
| Iterativo | O(n)   | O(1)    | Excelente | Ninguno         |
| Fórmula   | O(1)   | O(1)    | Buena     | Olvidar fórmula |
| Funcional | O(n)   | O(n)    | Buena     | Memoria extra   |
| Recursivo | O(n)   | O(n)    | Buena     | Stack overflow  |

## Complejidad

### Análisis Detallado

**Tiempo: O(n)**

- Un bucle que itera n veces (desde 1 hasta n)
- Cada iteración: multiplicación constante O(1)
- **Total**: O(n) lineal en n

**Espacio: O(1)**

- Solo variables primitivas (sum, i, n)
- No estructuras de datos adicionales
- **Total**: O(1) espacio constante

### Consideraciones Prácticas

- **Para n=1000**: ~1000 operaciones, instantáneo
- **Precisión**: JavaScript maneja números hasta ~9×10^15 exactamente
- **1000² = 1,000,000**: Suma total ~3.33×10^8, bien dentro del rango
- **Límite superior**: n=1000 es razonable, no requiere optimizaciones

### Comparación con fórmula matemática

- **Iterativo**: O(n) tiempo, siempre correcto
- **Fórmula**: O(1) tiempo, requiere recordar fórmula
- **Para n≤1000**: Iterativo es perfectamente aceptable
- **Para n>1000**: Fórmula sería preferible

## Aprendizajes y Reflexiones

### Patrones Identificados

1. **Acumulador iterativo**: Patrón común para sumas y productos
2. **Bucle ascendente**: Natural para sumas desde 1 hasta n
3. **Cálculo directo**: Cuando n es pequeño, iterativo es más claro que fórmulas
4. **Precisión numérica**: JavaScript maneja bien estos rangos

### Mejores Prácticas Aplicadas

- **Nombres descriptivos**: `sum`, `i` son autoexplicativos
- **Comentarios minimalistas**: Código habla por sí solo
- **Inicialización clara**: `let sum = 0` establece estado inicial
- **Bucle controlado**: `i <= n` es condición natural

### Reflexiones sobre TDD

- Los tests validaron tanto casos pequeños como grandes
- La implementación fue directa después de definir tests
- Los casos de prueba fueron suficientes para validar funcionalidad
- TDD ayudó a asegurar precisión para números grandes

### Comparación con otros lenguajes

**Python:**

```python
def sum_of_squares(n):
    return sum(i**2 for i in range(1, n+1))
```

**Java:**

```java
public long sumOfSquares(int n) {
    long sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += (long) i * i;
    }
    return sum;
}
```

**Similitudes:**

- Lógica idéntica en todos los lenguajes
- Bucle iterativo ascendente
- Acumulador de suma

**Diferencias:**

- Python: comprehensions más elegantes
- Java: `long` para evitar overflow
- JavaScript: números de punto flotante (precisión suficiente)

### Posibles Extensiones

- **Suma de cubos**: 1³ + 2³ + ... + n³ = (n(n+1)/2)²
- **Suma de potencias**: Generalizar a cualquier exponente
- **Suma condicional**: Solo números que cumplan cierta condición
- **Suma de series**: Otras series matemáticas (fibonacci, etc.)
- **Optimización**: Usar fórmula para n muy grande

### Conceptos Relacionados

- **Series aritméticas**: Sumatorias de términos en progresión
- **Series cuadráticas**: Propiedades especiales de sumas de cuadrados
- **Análisis numérico**: Cálculos que requieren precisión
- **Estadística**: Varianza usa sumas de cuadrados
- **Física**: Energía cinética, momentos de inercia

### Preguntas Frecuentes

**¿Cuál es la fórmula para la suma de cuadrados?**

- Σ(k²) para k=1 hasta n = n(n+1)(2n+1)/6
- Para n=5: 5×6×11/6 = 330/6 = 55 ✓

**¿Por qué no usar la fórmula directamente?**

- Para enseñanza: el enfoque iterativo es más claro
- Para mantenimiento: no hay que recordar fórmulas
- Para n pequeño: la diferencia de rendimiento es negligible

**¿Cuál es el mayor n que se puede calcular?**

- En JavaScript: n≈10^8 (antes de overflow de Number)
- Con BigInt: esencialmente ilimitado
- En práctica: n=1000 es muy razonable

**¿Es mejor iterativo o fórmula?**

- Iterativo: más claro, más fácil de entender
- Fórmula: más eficiente, más matemáticamente elegante
- Depende del contexto: claridad vs rendimiento

Este problema ilustra la importancia de elegir la implementación más apropiada según el contexto, considerando tanto claridad pedagógica como eficiencia práctica.
