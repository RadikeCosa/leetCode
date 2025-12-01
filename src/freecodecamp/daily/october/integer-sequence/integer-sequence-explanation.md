---
title: "integer-sequence"
difficulty: "easy"
topics:
  - String
  - Math
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-27"
---

# Integer Sequence

## Enunciado del Problema

Dado un número entero positivo n, retornar una cadena de texto que contenga todos los números enteros desde 1 hasta n (inclusive), en orden numérico, concatenados sin espacios ni separadores.

**Ejemplos:**

- sequence(5) → "12345"
- sequence(10) → "12345678910"
- sequence(1) → "1"
- sequence(27) → "123456789101112131415161718192021222324252627"

**Restricciones:**

- n es un entero positivo (n ≥ 1)
- La función debe retornar un string

## Análisis Inicial

Este problema requiere generar una secuencia de números del 1 al n y concatenarlos en una sola cadena. Los ejemplos muestran que:

1. **Concatenación directa**: Los números se unen sin espacios ni separadores
2. **Manejo de dígitos variables**: Para n ≥ 10, aparecen números con 2 dígitos (10, 11, etc.)
3. **Caso base simple**: Para n=1, simplemente retorna "1"
4. **Escalabilidad**: Para n=27, genera una cadena de longitud considerable

**Desafíos identificados:**

- Generar números del 1 al n de forma eficiente
- Convertir cada número a string y concatenarlos
- Manejar el crecimiento de la cadena resultante
- Considerar casos borde (aunque n ≥ 1 según restricciones)

**Casos borde a considerar:**

- n=1: caso más simple
- n pequeño (2-9): solo números de 1 dígito
- n=10: introduce números de 2 dígitos
- n grande: eficiencia de concatenación

## Solución Implementada

Se implementó un enfoque iterativo simple y directo:

```javascript
function sequence(n) {
  if (n < 1) return "";
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i.toString();
  }
  return result;
}
```

**Lógica:**

1. Validación defensiva: si n < 1, retorna cadena vacía
2. Inicialización de resultado vacío
3. Bucle desde 1 hasta n
4. Conversión de cada número a string y concatenación
5. Retorno del resultado final

**Ventajas de este enfoque:**

- Simplicidad conceptual
- Bajo uso de memoria adicional (solo la cadena resultante)
- Fácil de entender y mantener
- No requiere conocimientos avanzados de JavaScript

## Alternativas Consideradas

### 1. **Enfoque con Array Intermedio**

```javascript
function sequence(n) {
  if (n < 1) return "";
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i.toString());
  }
  return numbers.join("");
}
```

**Cuándo usar:**

- Cuando se necesita modificar los números antes de concatenar
- En lenguajes donde la concatenación de strings es costosa
- Si se quiere paralelizar la conversión (aunque no aplica aquí)

**Ventajas vs Desventajas:**

- ✅ Evita reasignación de strings en cada iteración
- ✅ Más eficiente para n muy grande en algunos lenguajes
- ❌ Usa más memoria (array adicional)
- ❌ Más código que escribir

### 2. **Enfoque Funcional con Array.from()**

```javascript
function sequence(n) {
  if (n < 1) return "";
  return Array.from({ length: n }, (_, i) => (i + 1).toString()).join("");
}
```

**Cuándo usar:**

- Cuando se prefiere estilo funcional
- En códigobases que usan paradigmas funcionales
- Para aprovechar optimizaciones del motor JS en Array.from()

**Ventajas vs Desventajas:**

- ✅ Más conciso y expresivo
- ✅ Aprovecha métodos nativos optimizados
- ❌ Menos legible para principiantes
- ❌ Crea array intermedio igual que el enfoque anterior

### 3. **Enfoque con String Builder (simulado)**

```javascript
function sequence(n) {
  if (n < 1) return "";
  let result = "";
  result = result.concat(
    ...Array.from({ length: n }, (_, i) => (i + 1).toString())
  );
  return result;
}
```

**Cuándo usar:**

- En lenguajes con StringBuilder nativo (Java, C#, etc.)
- Cuando se necesitan concatenaciones muy frecuentes
- Para optimizaciones de rendimiento críticas

**Ventajas vs Desventajas:**

- ✅ Más eficiente en lenguajes con StringBuilder
- ✅ Reduce overhead de concatenación
- ❌ En JS no aporta beneficios significativos
- ❌ Más complejo sin necesidad

### 4. **Enfoque Recursivo**

```javascript
function sequence(n, current = 1, result = "") {
  if (current > n) return result;
  return sequence(n, current + 1, result + current.toString());
}
```

**Cuándo usar:**

- Para practicar recursión
- En lenguajes funcionales puros
- Cuando el límite de pila no es problema

**Ventajas vs Desventajas:**

- ✅ Elegante y matemático
- ✅ Sin variables mutables
- ❌ Riesgo de stack overflow para n grande
- ❌ Menos eficiente que enfoque iterativo

## Elección del Enfoque Implementado

Se eligió el enfoque iterativo simple por las siguientes razones:

1. **Claridad**: Es inmediatamente entendible qué hace el código
2. **Eficiencia**: O(n) tiempo y espacio, óptimo para el problema
3. **Simplicidad**: Mínimo código, fácil de mantener
4. **JavaScript idiomatic**: Usa bucles for que son naturales en JS
5. **Sin overhead**: No crea estructuras de datos adicionales innecesarias

Para este problema específico, donde n es razonablemente pequeño y no hay transformaciones complejas, el enfoque simple es el más apropiado.

## Complejidad

### Análisis Temporal: O(n)

- El bucle itera exactamente n veces
- Cada iteración realiza operaciones constantes (conversión a string + concatenación)
- La complejidad es lineal en el tamaño de la entrada

### Análisis Espacial: O(n)

- La cadena resultante tiene longitud proporcional a n
- Para n=27, la cadena tiene ~77 caracteres
- No se usa memoria adicional significativa más allá del resultado

### Consideraciones de Rendimiento

- Para n típico (1-1000), el rendimiento es excelente
- La concatenación de strings en JS es eficiente para estos casos
- No hay cuellos de botella identificados

## Aprendizajes y Reflexiones

### Patrones Identificados

1. **Concatenación vs Arrays**: Para strings resultantes, la concatenación directa es simple y suficiente
2. **Validación defensiva**: Siempre considerar casos borde, aunque el problema los excluya
3. **Conversión explícita**: Usar `.toString()` deja claro el tipo de conversión

### Mejores Prácticas Aplicadas

- **Nombres descriptivos**: Variables como `result` son claras
- **Comentarios mínimos**: El código es autoexplicativo
- **Validación de entrada**: Protección contra valores inválidos
- **Retorno temprano**: Patrón clean code para casos borde

### Reflexiones sobre TDD

- Los tests guiaron naturalmente hacia la solución correcta
- Cada test incremental validó una parte del comportamiento
- La implementación siguió directamente de los ejemplos

### Posibles Extensiones

- ¿Qué pasaría si n=0? ¿Debería retornar "0" o ""?
- ¿Cómo manejar números negativos?
- ¿Qué si necesitamos formato con separadores (ej: "1-2-3-4-5")?
- ¿Cómo optimizar para n extremadamente grande?

Este problema, aunque simple, ilustra conceptos fundamentales de manipulación de strings, bucles y conversión de tipos en JavaScript.