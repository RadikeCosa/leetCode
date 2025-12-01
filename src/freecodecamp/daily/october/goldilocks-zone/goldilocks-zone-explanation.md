---
title: "goldilocks-zone"
difficulty: "easy"
topics:
  - Math
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Explicación

## Análisis del problema

El problema consiste en calcular la "zona habitable" (Goldilocks Zone) alrededor de una estrella, usando su masa como único dato. La zona se define por dos distancias: el inicio y el final, donde las condiciones son adecuadas para la existencia de agua líquida.

## Enfoque y algoritmo

1. **Luminosidad**: Se calcula elevando la masa a la potencia 3.5. En JavaScript, esto se hace con el operador `**` (por ejemplo, `mass ** 3.5`).
2. **Distancias**: El inicio y el final de la zona se obtienen multiplicando la raíz cuadrada de la luminosidad por 0.95 y 1.37 respectivamente. Para calcular la raíz cuadrada se usa `Math.sqrt(luminosity)`.
3. **Redondeo**: Los resultados se redondean a dos decimales usando el método `.toFixed(2)`, que convierte el número en un string con dos decimales. Luego, se usa `parseFloat()` para convertir ese string nuevamente a número.

### Métodos utilizados

- `Math.sqrt(x)`: Devuelve la raíz cuadrada de `x`.
- `Math.pow(x, y)`: Devuelve `x` elevado a la potencia `y`. En este caso se usa el operador `**` que es equivalente.
- `toFixed(n)`: Convierte un número en un string con `n` decimales. Ejemplo: `(1.2345).toFixed(2)` devuelve `'1.23'`.
- `parseFloat(s)`: Convierte un string en un número decimal. Ejemplo: `parseFloat('1.23')` devuelve `1.23`.

#### ¿Por qué usamos `parseFloat` en este problema?

El método `.toFixed(2)` devuelve un string, no un número. Si devolviéramos directamente el resultado de `.toFixed(2)`, el array contendría strings en vez de números, lo que podría causar problemas si luego se quieren hacer cálculos matemáticos con esos valores. Por eso, usamos `parseFloat()` para convertir el string resultante en un número decimal y así mantener la consistencia del tipo de dato en el array de salida.

## Complejidad

- **Tiempo**: O(1), ya que solo se realizan operaciones matemáticas simples.
- **Espacio**: O(1), no se usan estructuras adicionales.

## Casos límite y ejemplos

- Para masa = 1, el resultado es `[0.95, 1.37]`.
- Para masa = 0.5, el resultado es `[0.28, 0.41]`.
- Para valores grandes, el algoritmo sigue funcionando correctamente.
- No se recomienda usar valores negativos o cero, ya que no tienen sentido físico en este contexto.

## Aprendizajes y patrones

- Uso de operaciones matemáticas en JavaScript para modelar fenómenos físicos.
- Importancia de redondear resultados para cumplir con el formato requerido.
- Separación de pasos en el cálculo para mayor claridad y mantenibilidad.

## Optimización de código

Para mejorar la eficiencia y la legibilidad, se puede evitar calcular dos veces la raíz cuadrada de la luminosidad. Guardar este valor en una variable intermedia permite reutilizarlo y hace el código más claro:

```javascript
function goldilocksZone(mass) {
  const luminosity = mass ** 3.5;
  const sqrtLuminosity = Math.sqrt(luminosity);
  const start = 0.95 * sqrtLuminosity;
  const end = 1.37 * sqrtLuminosity;
  return [parseFloat(start.toFixed(2)), parseFloat(end.toFixed(2))];
}
```

Esta optimización es útil en problemas donde una operación matemática se repite y su resultado puede almacenarse para mejorar el rendimiento y la claridad del código.