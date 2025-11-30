---
name: 24-game
source: freecodecamp
series: rosetta-code
category: freecodecamp
difficulty: medium
topics: [backtracking, math]
createdAt: 2025-11-01
---

# 24 Game - Explicación

## Descripción del Problema

El **24 Game** es un problema de **backtracking** que busca combinar 4 dígitos con operaciones básicas (+, -, \*, /) para obtener exactamente 24.

**Reglas:**

- **Input**: String de 4 dígitos (1-9, repeticiones permitidas)
- **Output**: Expresión que evalúa a 24, o "no solution exists"
- **Restricciones**: No formar números multi-dígito, orden reorganizable, paréntesis permitidos

### Ejemplos y Patrones

#### Casos de FreeCodeCamp

```text
solve24("4878") → (7-8/8)*4 = 6*4 = 24
solve24("1234") → 1*2*3*4 = 24
solve24("6789") → (6*8)/(9-7) = 48/2 = 24
solve24("1127") → (1+7)*(1+2) = 8*3 = 24
```

#### Patrones Matemáticos Clave

**Factores de 24**: 1×24, 2×12, 3×8, 4×6

**Estrategias comunes:**

- **División para normalizar**: 8/8 = 1
- **Agrupación con paréntesis**: (1+7) = 8, (1+2) = 3 → 8\*3 = 24
- **Crear divisores pequeños**: (9-7) = 2 para dividir números grandes

## Análisis de Casos de Prueba

### Estrategia de Testing

**Tests funcionales:**

```javascript
// Verificar que encuentra solución
expect(result).not.toBe("no solution exists");

// Verificar que evalúa a 24 (con tolerancia floating-point)
expect(Math.abs(eval(result) - 24)).toBeLessThan(0.0001);
```

**Tests de integridad:**

```javascript
// Conservación de dígitos
const digitsInResult = result.match(/\d/g) || [];
expect(digitsInResult.sort()).toEqual(inputDigits.sort());

// Solo operadores válidos
expect(result).toMatch(/^[\d+\-*/().\s]+$/);
```

**Decisiones de diseño:**

- **eval() para verificación**: Permite múltiples formatos válidos
- **Tolerancia floating-point**: Maneja errores de precisión en división
- **Testing de edge cases**: Casos imposibles y permutaciones

## Implementación y Complejidad

**Algoritmo**: Backtracking con permutaciones de números y operadores
**Complejidad temporal**: O(4! × 4³) = O(1536) - constante para 4 números
**Complejidad espacial**: O(1) - recursión de profundidad fija

**Estrategia de implementación:**

1. Generar todas las permutaciones de 4 números
2. Para cada permutación, probar todas las combinaciones de 3 operadores
3. Evaluar expresiones con diferentes configuraciones de paréntesis
4. Retornar la primera expresión que evalúe a 24 (±0.0001)
