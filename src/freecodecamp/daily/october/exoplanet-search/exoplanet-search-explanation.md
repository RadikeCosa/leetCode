---
name: exoplanet-search
source: freecodecamp
series: daily
category: daily
createdAt: 2025-10-20
difficulty: easy
topics:
  - String
  - Math
hasImplementation: true
hasTests: true
hasExplanation: true
hasPostSolution: false
---

# Exoplanet Search

Dado un string donde cada caracter representa una lectura de luminosidad de una estrella, determinar si las lecturas detectan un exoplaneta usando el método de tránsito. Un exoplaneta se detecta cuando un planeta pasa frente a una estrella, reduciendo su luminosidad observada.

## Reglas de mapeo

- Caracteres 0-9 → valores 0-9
- Caracteres A-Z → valores 10-35 (A=10, B=11, ..., Z=35)
- Un exoplaneta existe si alguna lectura ≤ 80% del promedio de todas las lecturas

## Ejemplos

### Ejemplo 1: "FGFFCFFGG" → true

- Valores: F=15, G=16, F=15, F=15, C=12, F=15, F=15, G=16, G=16
- Suma = 135, promedio = 15, threshold = 12
- C=12 ≤ 12 → **true**

### Ejemplo 2: "665544554" → false

- Valores: 6,6,5,5,4,4,5,5,4
- Suma = 44, promedio ≈4.89, threshold ≈3.91
- Todos los valores > 3.91 → **false**

## Análisis del problema

Este problema requiere:

1. **Conversión de caracteres** a valores numéricos usando códigos ASCII
2. **Cálculo estadístico** del promedio y threshold (80%)
3. **Verificación condicional** de si algún valor cumple el criterio

La clave es entender que solo necesitamos encontrar si el **valor mínimo** es ≤ threshold, no verificar todos los valores.

## Enfoque detallado

### Algoritmo implementado

```javascript
function hasExoplanet(readings) {
  // Función auxiliar para conversión caracter → número usando fórmula unificada
  const charToValue = (char) => {
    // Fórmula unificada con códigos ASCII:
    // Dígitos (0-9): charCode - 48 (código de '0')
    // Letras (A-Z): charCode - 55 (ajustado para 'A' = 10)
    return char.charCodeAt(0) - (char >= "A" ? 55 : 48);
  };

  // Un solo loop: calcular suma y encontrar mínimo
  let total = 0;
  let minValue = Infinity;

  for (let i = 0; i < readings.length; i++) {
    const value = charToValue(readings[i]);
    total += value;
    if (value < minValue) minValue = value;
  }

  // Calcular threshold y verificar
  const average = total / readings.length;
  const threshold = average * 0.8;

  return minValue <= threshold;
}
```

### Optimización clave

En lugar de almacenar todos los valores en un array (O(n) espacio), usamos un solo loop que:

- Calcula la suma total
- Rastrea el valor mínimo encontrado

La conversión de caracteres usa una **fórmula unificada ASCII** que elimina condicionales, haciendo el código más compacto y eficiente.

Esto reduce la complejidad espacial de O(n) a O(1).

## Casos extremos considerados

### String vacío

- Input: `""`
- Output: `false` (no hay lecturas, no hay exoplaneta)

### Un solo caracter

- Input: `"5"` o `"A"`
- Output: `false` (promedio = valor, threshold = valor × 0.8, nunca valor ≤ valor × 0.8)

### Todos valores iguales

- Input: `"AAA"` (todos = 10)
- Output: `false` (ningún valor puede ser < 80% del promedio)

### Valores mínimos

- Input: `"000"` (todos = 0)
- Output: `true` (0 ≤ 0 × 0.8 = 0)

### Transición dígito-letra

- Input: `"9A"` (9, 10)
- Promedio = 9.5, threshold = 7.6
- Output: `false` (9 > 7.6, 10 > 7.6)

## Complejidad

- **Tiempo:** O(n) - Un solo loop lineal por todos los caracteres
- **Espacio:** O(1) - Solo variables escalares, sin arrays adicionales

## Conclusión

Esta solución demuestra:

- **Fórmula unificada ASCII** para conversión eficiente de caracteres sin condicionales
- **Optimización espacial** evitando arrays innecesarios
- **Razonamiento matemático** sobre promedios y thresholds
- **Manejo robusto** de casos extremos

El patrón de "encontrar mínimo mientras calculas suma" es útil para problemas similares que requieren estadísticas y verificaciones condicionales.
