---
title: "multiples-of-3-or-5"
difficulty: "easy"
topics:
  - math
source: "freecodecamp"
series: "project-euler"
category: "freecodecamp"
createdAt: "2025-11-03"
---

# Análisis del Problema

## Enunciado

Si listamos todos los números naturales por debajo de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.

Encuentra la suma de todos los múltiplos de 3 o 5 por debajo del valor del parámetro number proporcionado.

## Análisis Inicial

Este es un problema matemático clásico que requiere encontrar la suma de números que son múltiplos de 3 o 5 dentro de un rango específico.

**Preguntas clave para analizar:**

- ¿Cómo identificamos si un número es múltiplo de 3 o 5?
- ¿Cómo evitamos contar números que son múltiplos de ambos (como 15) dos veces?
- ¿Cuál es la estrategia más eficiente para calcular esta suma?
- ¿Qué casos edge debemos considerar (números pequeños, números grandes)?

**Observaciones iniciales:**

- Los múltiplos de 3 son: 3, 6, 9, 12, 15, 18, ...
- Los múltiplos de 5 son: 5, 10, 15, 20, 25, ...
- Los múltiplos de ambos (múltiplos de 15) aparecen en ambas listas
- Debemos incluir cada múltiplo solo una vez en la suma
- El rango es "por debajo de number" (exclusivo del límite superior)

**Estrategia general:**

1. Iterar desde 1 hasta number-1
2. Para cada número, verificar si es múltiplo de 3 o de 5
3. Si lo es, agregarlo a la suma acumulada
4. Retornar la suma total

**Posibles optimizaciones:**

- Usar el operador módulo (%) para verificar múltiplos
- Considerar usar la fórmula matemática de suma de series aritméticas
- Evitar la doble cuenta automáticamente con la condición OR

## Solución

La solución implementada utiliza un enfoque funcional con estructuras de datos modernas de JavaScript para calcular eficientemente la suma de múltiplos.

**Código de la solución:**

```javascript
function multiplesOf3Or5(number) {
  let multiples = new Set();
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.add(i);
    }
  }
  return Array.from(multiples).reduce((acc, curr) => acc + curr, 0);
}
```

**Explicación paso a paso:**

1. **Inicialización del Set**: Creamos un `Set` vacío para almacenar los múltiplos encontrados. El `Set` automáticamente elimina duplicados.

2. **Iteración y filtrado**: Recorremos todos los números desde 1 hasta `number-1` usando un bucle for. Para cada número, verificamos si es múltiplo de 3 o 5 usando el operador módulo (`%`).

3. **Almacenamiento único**: Si el número es múltiplo, lo agregamos al Set. Los números que son múltiplos de ambos (como 15, 30, etc.) solo se almacenan una vez.

4. **Cálculo de la suma**: Convertimos el Set a un array usando `Array.from()` y aplicamos `reduce()` para calcular la suma total, comenzando desde un acumulador inicial de 0.

**Ventajas de esta aproximación:**

- **Eliminación automática de duplicados**: El Set garantiza que no haya números repetidos
- **Código funcional**: Uso de `reduce()` para la suma es idiomático en JavaScript moderno
- **Claridad**: La lógica es fácil de entender y seguir
- **Flexibilidad**: Fácil de extender para incluir más criterios de múltiplos

## Complejidad

- **Tiempo**: O(n) donde n es el valor del parámetro `number`, ya que realizamos una iteración lineal desde 1 hasta n-1
- **Espacio**: O(k) donde k es el número de múltiplos encontrados. En el peor caso, k ≈ n/2 cuando n es grande, pero típicamente k ≈ n/3 + n/5 - n/15 debido al principio de inclusión-exclusión

## Casos de Prueba

Los tests implementados cubren todos los ejemplos del enunciado y casos límite adicionales para asegurar robustez:

**Casos de ejemplo del problema:**

- `multiplesOf3Or5(10)` → 23 (múltiplos: 3, 5, 6, 9)
- `multiplesOf3Or5(49)` → 543
- `multiplesOf3Or5(1000)` → 233168
- `multiplesOf3Or5(8456)` → 16687353
- `multiplesOf3Or5(19564)` → 89301183

**Casos límite (edge cases):**

- `multiplesOf3Or5(0)` → 0 (sin números naturales por debajo de 0)
- `multiplesOf3Or5(1)` → 0 (sin múltiplos por debajo de 1)
- `multiplesOf3Or5(3)` → 0 (sin múltiplos por debajo de 3)
- `multiplesOf3Or5(4)` → 3 (múltiplos por debajo de 4: 3)
- `multiplesOf3Or5(6)` → 8 (3 + 5, primer caso con ambos tipos de múltiplos)
- `multiplesOf3Or5(15)` → 45 (múltiplos: 3,5,6,9,10,12, suma = 3+5+6+9+10+12 = 45)
- `multiplesOf3Or5(16)` → 60 (múltiplos: 3,5,6,9,10,12,15, suma = 3+5+6+9+10+12+15 = 60)

**Verificación de eliminación de duplicados:**

- Números como 15, 30, 45, etc. (múltiplos de ambos 3 y 5) se cuentan solo una vez
- La suma incluye únicamente múltiplos únicos de 3 o 5
- El Set garantiza que no hay elementos repetidos en el cálculo

**Rango correcto:**

- Incluye números naturales desde 1 hasta number-1 (rango exclusivo del límite superior)
- El problema especifica "below the provided parameter value number"
- Excluye el 0 ya que no es considerado un número natural en este contexto
- Los tests verifican que el límite superior es exclusivo

## Aprendizajes

**Conceptos JavaScript aplicados:**

- **Set**: Estructura de datos que automáticamente elimina duplicados
- **Array.from()**: Conversión de Set/iterable a array
- **Array.reduce()**: Método funcional para acumular valores
- **Operador módulo (%)**: Verificación eficiente de múltiplos
- **Bucle for tradicional**: Iteración controlada sobre rangos numéricos

**Patrones algorítmicos:**

- **Principio de inclusión-exclusión**: Evitar doble conteo de elementos comunes
- **Acumulación funcional**: Uso de reduce para operaciones de suma
- **Filtrado durante iteración**: Verificación de condiciones en cada paso

**Mejores prácticas:**

- **Uso apropiado de estructuras de datos**: Set para unicidad, array para operaciones funcionales
- **Código expresivo**: Nombres descriptivos y operaciones encadenadas
- **Eficiencia espacial**: Set previene crecimiento innecesario del array
- **Legibilidad**: Separación clara entre filtrado y cálculo

**Alternativas consideradas:**

Durante el proceso de resolución, consideramos varias aproximaciones diferentes. Cada una tiene sus ventajas y desventajas en términos de claridad, eficiencia y estilo de código.

### 1. Suma Directa en Bucle (Enfoque Imperativo)

**Código alternativo:**

```javascript
function multiplesOf3Or5(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
```

**Explicación didáctica:**
Esta es la aproximación más directa y "tradicional". En lugar de almacenar todos los múltiplos en una estructura de datos, vamos acumulando la suma directamente en cada iteración. Es como si tuviéramos una calculadora y fuéramos sumando cada múltiplo que encontramos.

**Ventajas:**

- **Simplicidad conceptual**: No necesitamos recordar números previos, solo vamos sumando
- **Eficiencia de memoria**: No almacenamos una lista de números, solo un contador
- **Código más corto**: Menos líneas y operaciones

**Desventajas:**

- **Difícil de depurar**: Si hay un error en la suma, es más difícil identificar cuál múltiplo causó el problema
- **Menos flexible**: Si después queremos hacer algo más con los múltiplos (como imprimirlos o filtrarlos), tendríamos que cambiar completamente el código
- **Estilo imperativo**: Más difícil de razonar sobre el flujo de datos

### 2. Filtros Funcionales (Enfoque Declarativo)

**Código alternativo:**

```javascript
function multiplesOf3Or5(number) {
  return Array.from({ length: number - 1 }, (_, i) => i + 1)
    .filter((num) => num % 3 === 0 || num % 5 === 0)
    .reduce((sum, num) => sum + num, 0);
}
```

**Explicación didáctica:**
Esta aproximación es completamente funcional y declarativa. Primero creamos un array con todos los números del 1 al number-1 usando `Array.from()`. Luego "filtramos" ese array para quedarnos solo con los múltiplos, y finalmente "reducimos" el array filtrado a una sola suma.

Es como si tuviéramos una lista de invitados a una fiesta, primero filtramos quiénes cumplen los criterios (son múltiplos), y luego contamos cuántos son en total.

**Ventajas:**

- **Claridad de intención**: El código describe QUÉ queremos hacer, no CÓMO
- **Componibilidad**: Fácil de modificar para agregar más filtros o transformaciones
- **Inmutabilidad**: No modificamos variables existentes, creamos nuevos valores
- **Expresivo**: Cada método tiene un propósito claro

**Desventajas:**

- **Eficiencia de memoria**: Creamos un array completo con todos los números, incluso los que no son múltiplos
- **Menos eficiente**: Para números grandes, creamos arrays muy grandes innecesariamente
- **Complejidad inicial**: Más conceptos que entender para principiantes

### 3. Fórmula Matemática (Enfoque Analítico)

**Código alternativo:**

```javascript
function multiplesOf3Or5(number) {
  const n = number - 1; // Ajuste porque el rango es exclusivo

  // Suma de múltiplos de 3: 3 + 6 + 9 + ... + 3*k donde 3*k < number
  const sum3 = (3 * Math.floor(n / 3) * (Math.floor(n / 3) + 1)) / 2;

  // Suma de múltiplos de 5: 5 + 10 + 15 + ... + 5*m donde 5*m < number
  const sum5 = (5 * Math.floor(n / 5) * (Math.floor(n / 5) + 1)) / 2;

  // Suma de múltiplos de 15: 15 + 30 + 45 + ... + 15*p donde 15*p < number
  const sum15 = (15 * Math.floor(n / 15) * (Math.floor(n / 15) + 1)) / 2;

  // Aplicamos principio de inclusión-exclusión
  return sum3 + sum5 - sum15;
}
```

**Explicación didáctica:**
Esta es la aproximación más "matemática" y eficiente. En lugar de iterar por todos los números, usamos fórmulas cerradas para calcular directamente la suma de series aritméticas.

La fórmula para la suma de los primeros k términos de una serie aritmétrica es: S = k \* (primer + último) / 2

Para múltiplos de 3 menores que n: encontramos cuántos hay (floor(n/3)), y aplicamos la fórmula con primer=3, último=3\*count.

Hacemos lo mismo para múltiplos de 5, y luego restamos los múltiplos de 15 porque los contamos dos veces (una en cada suma).

**Ventajas:**

- **Eficiencia O(1)**: Tiempo constante, no depende del tamaño de number
- **Escalabilidad**: Funciona igual de bien para number=10 que para number=1,000,000
- **Elegancia matemática**: Usa propiedades algebraicas para evitar iteración

**Desventajas:**

- **Complejidad conceptual**: Requiere entender series aritméticas y inclusión-exclusión
- **Mayor chance de error**: Fácil equivocarse en las fórmulas
- **Menos legible**: Para alguien sin conocimientos matemáticos, es difícil entender
- **Difícil de generalizar**: Si queremos agregar múltiplos de 7, las fórmulas se complican mucho

### ¿Por qué elegimos la solución con Set?

La solución implementada (usando Set y reduce) representa un equilibrio óptimo entre:

- **Claridad**: Fácil de entender qué hace cada parte
- **Eficiencia**: Mejor que los filtros funcionales, aunque O(n) en lugar de O(1)
- **Flexibilidad**: Fácil de modificar para diferentes criterios
- **Modernidad**: Usa características actuales de JavaScript (Set, reduce)
- **Depurabilidad**: Podemos inspeccionar los múltiplos encontrados si hay errores

Para números pequeños (como los de los tests), la diferencia de performance es negligible. La fórmula matemática sería preferible solo para números extremadamente grandes donde la iteración se vuelve un bottleneck.

**Lecciones aprendidas:**

- Los Sets son ideales para eliminar duplicados automáticamente
- La combinación de bucles tradicionales con métodos funcionales puede ser muy efectiva
- Considerar el trade-off entre claridad del código y optimización de performance