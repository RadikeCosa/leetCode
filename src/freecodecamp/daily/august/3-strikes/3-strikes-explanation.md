---
title: 3 Strikes
source: freecodecamp
series: daily
category: daily
createdAt: 2025-10-13
difficulty: easy
topics:
  - Math
  - String
---

## Enunciado del Problema

Dado un entero entre 1 y 10,000, retornar un conteo de cuántos números desde 1 hasta ese entero cuyo cuadrado contiene al menos un dígito 3.

**Ejemplos:**

- **Entrada:** 10
  **Salida:** 4
  **Explicación:** Los números son 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Sus cuadrados son 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Solo 6² = 36 contiene un '3'.

- **Entrada:** 100
  **Salida:** 19
  **Explicación:** Hay 19 números cuyo cuadrado contiene al menos un '3' entre 1 y 100.

- **Entrada:** 10000
  **Salida:** ?
  **Explicación:** Este es el límite superior, prueba cuántos números cumplen aquí.

## Restricciones

Este problema requiere analizar propiedades numéricas de los cuadrados de números, específicamente detectar la presencia del dígito '3' en su representación decimal.

**Desafíos identificados:**

- Verificar presencia de dígito específico en números grandes
- Contar ocurrencias de una condición específica
- Manejar conversión entre números y strings para análisis de dígitos

## Estrategias posibles

### 1. Enfoque Iterativo con Conversión a String

- Simple y directo: Bucle que calcula cuadrados y verifica dígitos
- Fácil de entender: Lógica matemática clara
- Preciso: No hay aproximaciones
- Escalable: Funciona para cualquier rango

### 2. Enfoque con Análisis Matemático

- Complejo: Requiere fórmulas matemáticas avanzadas
- Difícil de implementar: Análisis de dígitos por propiedades matemáticas
- No práctico: Más complicado que el enfoque directo

### 3. Enfoque con Expresiones Regulares

- Elegante: Usar regex para buscar dígito '3'
- Conciso: Una línea para verificar presencia
- Eficiente: Regex optimizado para búsqueda

**Elección del enfoque:** Iterativo con conversión a string es la solución más clara y directa.

**Casos borde a considerar:**

- n = 1: ningún cuadrado contiene '3' (1² = 1)
- n = 10: solo un número cumple (¿cuál?)
- n = 100: 19 números cumplen
- n = 10000: límite superior del problema

**Propiedades matemáticas relevantes:**

- Cuadrados crecen cuadráticamente: n² para n=10000 es 100,000,000
- Dígitos '3' aparecen en ~10% de los números aleatorios
- Patrón no uniforme: algunos rangos tienen más '3' que otros

## Solución Implementada

```javascript
function squaresWithThree(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let square = i * i;
    if (square.toString().includes("3")) {
      count++;
    }
  }
  return count;
}
```

**Lógica paso a paso:**

1. Inicializar contador en 0
2. Para cada número i desde 1 hasta n:
   - Calcular cuadrado: `i * i`
   - Convertir a string: `square.toString()`
   - Verificar si contiene '3': `includes("3")`
   - Incrementar contador si cumple condición
3. Retornar el contador final

**Ventajas de este enfoque:**

- Claridad máxima: Cada paso del algoritmo es evidente
- Eficiencia aceptable: O(n) tiempo para n≤10,000
- Simplicidad: Solo usa operaciones básicas
- Facilidad de debugging: Fácil verificar cada iteración
- Reutilizable: Patrón aplicable a otros problemas de conteo

## Alternativas Consideradas

### 1. Enfoque Funcional con Array Methods

```javascript
function squaresWithThree(n) {
  return Array.from({ length: n }, (_, i) => (i + 1) ** 2).filter((square) =>
    square.toString().includes("3")
  ).length;
}
```

**Cuándo usar:**

- Código más conciso: Una sola expresión
- Estilo funcional: Aprovecha métodos de array
- Fácil de leer: Flujo de datos claro
- Menos eficiente: Crea array O(n) innecesario
- Más memoria: Array temporal grande

### 2. Enfoque con Expresiones Regulares

```javascript
function squaresWithThree(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let square = i * i;
    if (/3/.test(square.toString())) {
      count++;
    }
  }
  return count;
}
```

**Cuándo usar:**

- Más flexible: Fácil cambiar a patrones complejos
- Potente: Regex puede buscar múltiples dígitos
- Expresivo: Patrón claro para búsqueda
- Overkill: Para búsqueda simple de un carácter
- Menos legible: Regex agrega complejidad innecesaria

### 3. Enfoque con indexOf()

```javascript
function squaresWithThree(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let square = i * i;
    if (square.toString().indexOf("3") !== -1) {
      count++;
    }
  }
  return count;
}
```

**Cuándo usar:**

- Más explícito: Claramente busca posición del carácter
- Compatible: Funciona en todos los navegadores
- Preciso: Retorna índice exacto si se necesita
- Más verbose: `!== -1` es menos elegante que `includes()`

### 4. Enfoque Optimizado sin Conversión por Iteración

```javascript
function squaresWithThree(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let square = i * i;
    let temp = square;
    while (temp > 0) {
      if (temp % 10 === 3) {
        count++;
        break; // Solo necesitamos saber si existe al menos uno
      }
      temp = Math.floor(temp / 10);
    }
  }
  return count;
}
```

**Cuándo usar:**

- Sin conversión: Evita crear strings
- Más eficiente: Operaciones aritméticas puras
- Bajo nivel: Control total del proceso
- Más complejo: Lógica de extracción de dígitos
- Más propenso a errores: Manejo de casos borde

## Elección del Enfoque Implementado

Se eligió el enfoque iterativo con `includes()` por las siguientes razones:

1. Claridad pedagógica: Muestra exactamente cómo funciona el algoritmo
2. Simplicidad: Código fácil de entender y mantener
3. Eficiencia práctica: O(n) es perfectamente aceptable para n≤10,000
4. Idiomático: Usa métodos modernos de JavaScript
5. Robustez: Maneja correctamente números de cualquier tamaño

**Comparación con otras soluciones:**

| Enfoque                | Tiempo | Espacio | Legibilidad | Ventajas      |
| ---------------------- | ------ | ------- | ----------- | ------------- |
| Iterativo + includes() | O(n)   | O(1)    | Excelente   | Implementado  |
| Funcional + filter()   | O(n)   | O(n)    | Buena       | Más expresivo |
| Regex                  | O(n)   | O(1)    | Buena       | Más flexible  |
| Aritmético             | O(n×d) | O(1)    | Regular     | Sin strings   |
| indexOf()              | O(n)   | O(1)    | Buena       | Más explícito |

## Complejidad

### Análisis Detallado

**Tiempo: O(n)**

- Un bucle que itera n veces (desde 1 hasta n)
- Cada iteración: multiplicación O(1) + conversión a string O(d) + búsqueda O(d)
- Total: O(n×d) donde d es dígitos del cuadrado
- En práctica: O(n) ya que d es pequeño (máximo ~8 dígitos para n=10,000)

**Espacio: O(1)**

- Variables primitivas: count, i, square
- String temporal por iteración: O(d) pero reutilizado
- Total: O(1) espacio constante

### Consideraciones Prácticas

- Para n=10,000: ~10,000 iteraciones, instantáneo
- Cuadrados grandes: Hasta 100,000,000 (8 dígitos)
- Conversión eficiente: `toString()` es optimizada en JavaScript
- Búsqueda rápida: `includes()` usa algoritmos eficientes

### Comparación con límites teóricos

- n=10,000: 10^4 iteraciones, perfectamente manejable
- Tiempo real: Menos de 1ms en hardware moderno
- Sin bottlenecks: Ninguna operación es O(n²) o peor
- Escalabilidad: Funciona bien hasta n=10^6 si fuera necesario

## Aprendizajes y Reflexiones

### Patrones Identificados

1. Verificación de dígitos: Conversión número→string para análisis
2. Conteo condicional: Patrón común de acumulación con condiciones
3. Bucle ascendente: Natural para procesar rangos desde 1 hasta n
4. Métodos de string eficientes: `includes()` vs `indexOf()` vs regex

### Mejores Prácticas Aplicadas

- Nombres descriptivos: `count`, `square`, `i` son autoexplicativos
- Comentarios minimalistas: Código habla por sí solo
- Inicialización clara: `let count = 0` establece estado inicial
- Bucle controlado: `i <= n` es condición natural y clara

### Reflexiones sobre TDD

- Los tests validaron tanto casos pequeños como grandes
- La implementación fue directa después de definir tests
- Los casos de prueba fueron suficientes para validar funcionalidad
- TDD ayudó a asegurar corrección para números grandes

### Comparación con otros lenguajes

**Python:**

```python
def squares_with_three(n):
    count = 0
    for i in range(1, n + 1):
        square = i * i
        if '3' in str(square):
            count += 1
    return count
```

**Java:**

```java
public int squaresWithThree(int n) {
    int count = 0;
    for (int i = 1; i <= n; i++) {
        long square = (long) i * i;
        if (String.valueOf(square).contains("3")) {
            count++;
        }
    }
    return count;
}
```

**Similitudes:**

- Lógica idéntica en todos los lenguajes
- Bucle iterativo con verificación de dígitos
- Acumulador de conteo

**Diferencias:**

- JavaScript: `includes()` moderno
- Python: `'3' in str(square)` más idiomático
- Java: `contains()` y casting a `long`

### Posibles Extensiones

- Múltiples dígitos: Contar números con al menos dos dígitos '3'
- Dígitos específicos: Buscar cualquier dígito de una lista
- Posición específica: Contar números donde '3' está en cierta posición
- Otras operaciones: Cubos, raíces, otras potencias
- Rangos personalizados: Desde a hasta b en lugar de 1 hasta n

### Conceptos Relacionados

- Análisis de dígitos: Propiedades de números en base 10
- Conteo combinatorio: Problemas de enumeración condicional
- Búsqueda en strings: Algoritmos de búsqueda de patrones
- Números cuadrados: Propiedades matemáticas de cuadrados perfectos
- Representación decimal: Cómo los números se expresan como strings

### Preguntas Frecuentes

**¿Por qué convertir a string para verificar dígitos?**

- Los números son tratados como entidades matemáticas
- Las strings permiten análisis carácter por carácter
- Es la forma más simple y legible de verificar dígitos específicos

**¿Es includes() más eficiente que indexOf()?**

- Para verificación de existencia: `includes()` es igual de eficiente
- Para obtener posición: `indexOf()` es necesario
- Para este problema: ambos son perfectamente aceptables

**¿Cuál es la distribución de dígitos en cuadrados?**

- Los dígitos '3' aparecen en ~10% de los números aleatorios
- En cuadrados hay patrones específicos pero irregulares
- La frecuencia varía por rangos: algunos tienen más '3' que otros

**¿Podría optimizarse más allá de O(n)?**

- Teóricamente no: necesitamos verificar cada número
- En práctica: la solución actual es óptima
- Para n muy grande: paralelización o procesamiento por bloques

Este problema ilustra la importancia de elegir métodos de JavaScript apropiados para el análisis de datos, y cómo la conversión entre tipos (número↔string) facilita problemas que de otra forma serían complejos.
