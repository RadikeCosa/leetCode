---
name: perfect-square
source: freecodecamp
series: daily
category: daily
createdAt: 2025-09-06
difficulty: easy
topics:
  - Math
hasImplementation: true
hasTests: true
hasExplanation: true
hasPostSolution: false
---

# Análisis del Problema: Perfect Square

## Enunciado

Dado un entero, determinar si es un cuadrado perfecto.

Un número es un cuadrado perfecto si puedes multiplicar un entero por sí mismo para lograr el número. Por ejemplo, 9 es un cuadrado perfecto porque puedes multiplicar 3 por sí mismo para obtenerlo.

## Análisis

Este problema requiere verificar si un número entero es el resultado de elevar al cuadrado un número entero. Los pasos principales son:

1. **Manejar casos especiales**: Números negativos y cero
2. **Calcular la raíz cuadrada**: Encontrar el número que al elevarlo al cuadrado da el resultado
3. **Verificar si es entero**: La raíz cuadrada debe ser un número entero exacto
4. **Retornar resultado booleano**: true si es cuadrado perfecto, false si no

Casos especiales a considerar:

- Números negativos: Nunca pueden ser cuadrados perfectos
- Cero: 0 × 0 = 0, por lo que es un cuadrado perfecto
- Números muy grandes: Deben manejarse eficientemente
- Números decimales: No aplican (la entrada es siempre entera)

## Solución

La solución implementada utiliza `Math.sqrt()` para calcular la raíz cuadrada y `Number.isInteger()` para verificar si el resultado es un entero:

### Paso 1: Calcular la raíz cuadrada

```javascript
Math.sqrt(n);
```

- `Math.sqrt()` calcula la raíz cuadrada del número
- Para números negativos retorna `NaN`
- Para 0 retorna 0

### Paso 2: Verificar si es entero

```javascript
Number.isInteger(Math.sqrt(n));
```

- `Number.isInteger()` verifica si el número no tiene parte decimal
- Retorna `true` si es entero, `false` si tiene decimales
- Maneja automáticamente casos especiales (negativos, NaN)

### Resultado final

```javascript
return Number.isInteger(Math.sqrt(n));
```

- Una sola línea que combina ambos pasos
- Retorna `true` para cuadrados perfectos, `false` para otros números

## Enfoques alternativos

### Alternativa 1: Búsqueda binaria

```javascript
function isPerfectSquare(n) {
  if (n < 0) return false;
  if (n === 0) return true;

  let left = 1,
    right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === n) return true;
    if (square < n) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}
```

**Ventajas:**

- O(log n) tiempo, eficiente para números muy grandes
- No problemas de precisión de punto flotante
- Funciona con enteros arbitrariamente grandes

**Desventajas:**

- Más código y complejo
- Más lento que Math.sqrt() para números pequeños

### Alternativa 2: Bucle incremental

```javascript
function isPerfectSquare(n) {
  if (n < 0) return false;
  if (n === 0) return true;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) return true;
  }

  return false;
}
```

**Ventajas:**

- Simple y fácil de entender
- No usa funciones matemáticas complejas

**Desventajas:**

- O(√n) tiempo, más lento para números grandes
- Puede ser ineficiente para números muy grandes

### Alternativa 3: Redondeo y verificación

```javascript
function isPerfectSquare(n) {
  if (n < 0) return false;

  const root = Math.round(Math.sqrt(n));
  return root * root === n;
}
```

**Ventajas:**

- Maneja problemas de precisión de punto flotante
- Similar en velocidad a la solución implementada

**Desventajas:**

- Puede fallar en casos extremos de redondeo
- Menos robusto que Number.isInteger()

## Complejidad

- **Tiempo**: O(1) - `Math.sqrt()` es una operación constante
- **Espacio**: O(1) - usa solo variables primitivas

## Aprendizajes

- **Math.sqrt()**: Función nativa para calcular raíces cuadradas
- **Number.isInteger()**: Verificación robusta de números enteros
- **Casos edge**: Manejo automático de negativos y cero
- **Precisión**: Limitaciones de punto flotante en JavaScript
- **Trade-offs**: Elegir entre velocidad, precisión y simplicidad
- **Funciones nativas**: Aprovechar el poder de las APIs de JavaScript
