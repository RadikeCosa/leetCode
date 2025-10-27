# Factorializer

## Enunciado del Problema

Dado un entero desde cero hasta 20, retornar el factorial de ese número. El factorial de un número es el producto de todos los números entre 1 y el número dado.

El factorial de cero es 1.

**Ejemplos:**

- factorial(0) → 1
- factorial(5) → 120 (5 × 4 × 3 × 2 × 1 = 120)
- factorial(20) → 2432902008176640000

**Restricciones:**

- Entrada: entero entre 0 y 20 inclusive
- Salida: número factorial correspondiente

## Análisis Inicial

Este problema requiere calcular el factorial de un número, que es una operación matemática fundamental. El factorial se define como:

- n! = n × (n-1) × (n-2) × ... × 2 × 1
- 0! = 1 (por definición matemática)

**Desafíos identificados:**

- Manejar el caso especial de n = 0
- Evitar overflow para números grandes (hasta 20!)
- Implementar cálculo eficiente
- Validar restricciones de entrada (0-20)

**Estrategias posibles:**

### 1. **Enfoque Iterativo (Implementado)**

- ✅ **Eficiente**: O(n) tiempo
- ✅ **Simple**: Lógica directa y clara
- ✅ **Sin recursión**: Evita problemas de stack para n=20
- ✅ **Preciso**: Maneja números grandes correctamente

### 2. **Enfoque Recursivo**

- ❌ **Problemas de stack**: Para n=20 podría causar stack overflow
- ❌ **Menos eficiente**: Más llamadas a función

### 3. **Enfoque con Memoización**

- ✅ **Eficiente**: O(1) después del primer cálculo
- ❌ **Overkill**: Para este problema simple, innecesario

**Elección del enfoque:** Iterativo es la solución óptima para este problema.

**Casos borde a considerar:**

- n = 0: retornar 1
- n = 1: retornar 1 (1! = 1)
- n = 20: número muy grande (20! ≈ 2.43 × 10^18)

## Solución Implementada

Se implementó un enfoque iterativo que calcula el factorial multiplicando los números desde n hacia 1:

```javascript
function factorial(n) {
  if (n === 0) return 1;

  for (let i = n - 1; i > 0; i--) {
    n *= i;
  }

  return n;
}
```

**Lógica paso a paso:**

1. Verificar caso base: si n es 0, retornar 1
2. Inicializar resultado con n
3. Multiplicar por cada número decreciente hasta 1
4. Retornar el resultado final

**Ventajas de este enfoque:**

- **Caso base explícito**: Manejo claro de n=0
- **Bucle descendente**: Intuitivo (n, n-1, ..., 1)
- **Modificación in-place**: Usa el parámetro como acumulador
- **Eficiencia**: Una sola pasada, O(n) tiempo
- **Simplicidad**: Código conciso y legible

## Alternativas Consideradas

### 1. **Enfoque Iterativo Ascendente - Más Intuitivo**

**Cómo funciona:**

```javascript
function factorial(n) {
  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
```

**Cuándo usar:**

- ✅ **Más legible**: Sigue orden natural 1→n
- ✅ **Variable dedicada**: No modifica parámetro original
- ✅ **Más segura**: Menos propenso a errores
- ❌ **Similar complejidad**: O(n) igual

**Ventajas vs Desventajas:**

- ✅ **Mejor práctica**: No modifica parámetros
- ✅ **Más claro**: Orden lógico ascendente
- ❌ **Variable extra**: Un poco más de código

### 2. **Enfoque Recursivo - Elegante pero Problemático**

**Cómo funciona:**

```javascript
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
```

**Cuándo usar:**

- ✅ **Muy conciso**: Una línea de lógica
- ✅ **Matemáticamente elegante**: Refleja definición recursiva
- ❌ **Stack overflow**: Para n=20 puede fallar
- ❌ **Menos eficiente**: Múltiples llamadas a función

**Ventajas vs Desventajas:**

- ✅ **Código minimalista**: Definición matemática pura
- ✅ **Fácil de entender**: Recursión natural para factorial
- ❌ **Problemas de rendimiento**: Stack limitado en JS
- ❌ **No recomendado**: Para límites superiores altos

### 3. **Enfoque con Reduce - Funcional**

**Cómo funciona:**

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, curr) => acc * curr,
    1
  );
}
```

**Cuándo usar:**

- ✅ **Funcional puro**: Usa métodos funcionales
- ✅ **Declarativo**: Expresa intención claramente
- ❌ **Ineficiente**: Crea array innecesario
- ❌ **Complejo**: Más código que enfoques simples

## Elección del Enfoque Implementado

Se eligió el enfoque iterativo descendente por las siguientes razones:

1. **Eficiencia óptima**: O(n) tiempo, O(1) espacio
2. **Simplicidad**: Código directo y fácil de seguir
3. **Sin dependencias**: Solo bucles básicos
4. **Rendimiento**: Funciona perfectamente para n≤20
5. **Claridad**: Lógica matemática evidente

**Comparación con otras soluciones:**

| Enfoque               | Tiempo | Espacio | Legibilidad | Riesgos        |
| --------------------- | ------ | ------- | ----------- | -------------- |
| Iterativo Descendente | O(n)   | O(1)    | Buena       | Ninguno        |
| Iterativo Ascendente  | O(n)   | O(1)    | Excelente   | Ninguno        |
| Recursivo             | O(n)   | O(n)    | Buena       | Stack overflow |
| Funcional             | O(n)   | O(n)    | Buena       | Ineficiente    |

## Complejidad

### Análisis Detallado

**Tiempo: O(n)**

- Un bucle que itera n-1 veces (desde n-1 hasta 1)
- Cada iteración: multiplicación constante O(1)
- **Total**: O(n) lineal en n

**Espacio: O(1)**

- Solo variables primitivas (n, i)
- No estructuras de datos adicionales
- **Total**: O(1) espacio constante

### Consideraciones Prácticas

- **Para n=20**: ~20 operaciones, instantáneo
- **Precisión**: JavaScript maneja números hasta 2^53 exactamente
- **20!**: Ajusta perfectamente en Number (hasta 9×10^15 exactamente)
- **Límite superior**: n=20 es razonable, evita overflow

### Comparación con límites teóricos

- **JavaScript Number**: Hasta ~9×10^15 (53 bits mantisa)
- **20! = 2.43×10^18**: Sobrepasa límite teórico
- **En práctica**: JavaScript usa double precision, maneja hasta ~10^308
- **Resultado**: Funciona correctamente para n≤20

## Aprendizajes y Reflexiones

### Patrones Identificados

1. **Caso base explícito**: Siempre manejar casos especiales primero
2. **Bucle descendente**: Natural para factorial (n hacia 1)
3. **Acumulador in-place**: Usar parámetro como resultado para eficiencia
4. **Validación de límites**: Importante para problemas con restricciones

### Mejores Prácticas Aplicadas

- **Nombres descriptivos**: `factorial` es autoexplicativo
- **Comentarios minimalistas**: Código habla por sí solo
- **Caso base primero**: Patrón de validación temprano
- **Bucle eficiente**: Decremento directo sin variables extra

### Reflexiones sobre TDD

- Los tests validaron tanto casos normales como borde
- La implementación fue directa después de definir tests
- Los casos de prueba fueron suficientes para validar funcionalidad
- TDD ayudó a identificar casos borde importantes (n=0)

### Comparación con otros lenguajes

**Python:**

```python
def factorial(n):
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
```

**Java:**

```java
public long factorial(int n) {
    if (n == 0) return 1;
    long result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

**Similitudes:**

- Lógica idéntica en todos los lenguajes
- Caso base de n=0
- Bucle iterativo ascendente/descendente

**Diferencias:**

- JavaScript: números de punto flotante (precisión hasta cierto límite)
- Java/Python: enteros arbitrarios (precisión ilimitada)
- Java: `long` para números grandes

### Posibles Extensiones

- **Factorial con memoización**: Para cálculos repetidos
- **Factorial de números negativos**: Error o extensión matemática
- **Double factorial**: n!! (producto de números con mismo paridad)
- **Superfactorial**: sf(n) = 1! × 2! × ... × n!
- **Validación de entrada**: Verificar que n esté en rango 0-20

### Conceptos Relacionados

- **Permutaciones**: n! representa número de permutaciones de n elementos
- **Combinaciones**: C(n,k) = n! / (k! × (n-k)!)
- **Serie de Taylor**: Aproximaciones usan factoriales
- **Análisis combinatorio**: Base matemática de conteo
- **Teoría de números**: Propiedades de factoriales

### Preguntas Frecuentes

**¿Por qué factorial(0) = 1?**

- Definición matemática: 0! = 1
- Razón combinatoria: una manera de ordenar 0 elementos
- Consistencia: evita divisiones por cero en fórmulas

**¿Cuál es el factorial más grande que cabe en JavaScript?**

- 20! es el último que cabe exactamente en Number
- 21! ya tiene pérdida de precisión
- Para precisión arbitraria: usar librerías como BigInt

**¿Es mejor recursión o iteración?**

- Iteración: más eficiente, sin límite de stack
- Recursión: más elegante, pero limitada por stack depth
- Para factorial: iteración es claramente superior

Este problema ilustra la importancia de entender conceptos matemáticos básicos y elegir la implementación más apropiada según las restricciones del lenguaje y el problema.
