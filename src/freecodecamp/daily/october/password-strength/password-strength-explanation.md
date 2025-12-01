---
title: "password-strength"
difficulty: "easy"
topics:
  - String
  - Regex
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Análisis del Problema: P@ssw0rd Str3ngth!

## Enunciado del Problema

Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or \*.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.

## Análisis Inicial

### ¿Qué observas en el problema?

- **Validación de contraseña**: Sistema de puntuación basado en múltiples criterios de seguridad
- **Criterios independientes**: Cada regla se evalúa por separado
- **Sistema de puntuación**: La fortaleza depende del número de criterios cumplidos
- **Reglas específicas**: Longitud, case mixing, números, caracteres especiales

### Elementos clave identificados:

1. **4 criterios de evaluación independientes**
2. **Sistema de conteo**: Contar criterios cumplidos
3. **Mapeo de puntuación a fortaleza**: <2="weak", 2-3="medium", 4="strong"
4. **Validaciones con expresiones regulares** para patrones de caracteres

## Casos de Prueba

Analicemos los ejemplos proporcionados con detalle:

### Casos "weak" (cumplen menos de 2 reglas):

1. **`"123456"`** → `"weak"`

   - Longitud: 6 < 8 ❌
   - Mayúsculas/Minúsculas: Solo números ❌
   - Números: Sí ✅
   - Especiales: No ❌
   - **Total: 1 regla** → "weak"

2. **`"pass!!!"`** → `"weak"`

   - Longitud: 7 < 8 ❌
   - Mayúsculas/Minúsculas: Solo minúsculas ❌
   - Números: No ❌
   - Especiales: Sí ✅
   - **Total: 1 regla** → "weak"

3. **`"Qwerty"`** → `"weak"`

   - Longitud: 6 < 8 ❌
   - Mayúsculas/Minúsculas: Tiene Q mayúscula y werty minúsculas ✅
   - Números: No ❌
   - Especiales: No ❌
   - **Total: 1 regla** → "weak"

4. **`"PASSWORD"`** → `"weak"`
   - Longitud: 8 ≥ 8 ✅
   - Mayúsculas/Minúsculas: Solo mayúsculas ❌
   - Números: No ❌
   - Especiales: No ❌
   - **Total: 1 regla** → "weak"

### Casos "medium" (cumplen 2 o 3 reglas):

5. **`"PASSWORD!"`** → `"medium"`

   - Longitud: 9 ≥ 8 ✅
   - Mayúsculas/Minúsculas: Solo mayúsculas ❌
   - Números: No ❌
   - Especiales: Sí ✅
   - **Total: 2 reglas** → "medium"

6. **`"PassWord%^!"`** → `"medium"`

   - Longitud: 11 ≥ 8 ✅
   - Mayúsculas/Minúsculas: Tiene P mayúscula y assword minúsculas ✅
   - Números: No ❌
   - Especiales: Sí ✅
   - **Total: 3 reglas** → "medium"

7. **`"qwerty12345"`** → `"medium"`
   - Longitud: 11 ≥ 8 ✅
   - Mayúsculas/Minúsculas: Solo minúsculas ❌
   - Números: Sí ✅
   - Especiales: No ❌
   - **Total: 2 reglas** → "medium"

### Casos "strong" (cumplen las 4 reglas):

10. **`"S3cur3P@ssw0rd"`** → `"strong"`

    - Longitud: 13 ≥ 8 ✅
    - Mayúsculas/Minúsculas: Tiene S mayúscula y ecur assword minúsculas ✅
    - Números: Sí (3,0) ✅
    - Especiales: Sí (@) ✅
    - **Total: 4 reglas** → "strong"

11. **`"C0d3&Fun!"`** → `"strong"`
    - Longitud: 9 ≥ 8 ✅
    - Mayúsculas/Minúsculas: Tiene C mayúscula y od un minúsculas ✅
    - Números: Sí (0,3) ✅
    - Especiales: Sí (&,!) ✅
    - **Total: 4 reglas** → "strong"

## Enfoque

### Algoritmo Implementado

La solución optimizada utiliza un enfoque directo y eficiente:

1. **Definir constantes para expresiones regulares**: Para mejor mantenibilidad y reutilización
2. **Contar criterios cumplidos**: Usar contador directo en lugar de array intermedio
3. **Validar cada regla individualmente**:
   - Longitud ≥ 8
   - Presencia de mayúsculas Y minúsculas
   - Presencia de al menos un número
   - Presencia de al menos un carácter especial
4. **Determinar fortaleza**: Basado en el conteo de criterios cumplidos

### Código de la Solución Optimizada

```javascript
function checkStrength(password) {
  // Constantes para expresiones regulares (mejor mantenibilidad)
  const HAS_UPPERCASE = /[A-Z]/;
  const HAS_LOWERCASE = /[a-z]/;
  const HAS_NUMBER = /[0-9]/;
  const HAS_SPECIAL = /[!@#$%^&*]/;

  // Contar criterios cumplidos directamente (más eficiente)
  let criteriaMet = 0;

  // Regla 1: Al menos 8 caracteres
  if (password.length >= 8) criteriaMet++;

  // Regla 2: Contiene mayúsculas Y minúsculas
  if (HAS_UPPERCASE.test(password) && HAS_LOWERCASE.test(password))
    criteriaMet++;

  // Regla 3: Contiene al menos un número
  if (HAS_NUMBER.test(password)) criteriaMet++;

  // Regla 4: Contiene al menos un carácter especial
  if (HAS_SPECIAL.test(password)) criteriaMet++;

  // Determinar fortaleza basada en criterios cumplidos
  if (criteriaMet < 2) return "weak";
  if (criteriaMet < 4) return "medium";
  return "strong";
}
```

### Optimizaciones Implementadas

**Versión Original vs Optimizada:**

1. **Estructura de datos**:

   - **Antes**: Array temporal `[true, false, true, false]` + `.filter(Boolean).length`
   - **Después**: Contador directo `criteriaMet++` → **más eficiente**

2. **Expresiones regulares**:

   - **Antes**: Regex inline creadas cada vez
   - **Después**: Constantes precompiladas → **ligeramente más rápido**

3. **Legibilidad**:

   - **Antes**: Lógica condensada en array
   - **Después**: `if` separados con comentarios → **más claro**

4. **Mantenibilidad**:
   - **Antes**: Regex difíciles de modificar
   - **Después**: Constantes nombradas → **más fácil de cambiar**

## Complejidad

- **Tiempo**: O(n) - Una sola pasada por cada expresión regular sobre la cadena de entrada
- **Espacio**: O(1) - Solo variables primitivas, sin estructuras de datos adicionales

## Aprendizajes

### Patrones Identificados

1. **Validación de contraseñas**: Patrón común de evaluación multicriterio
2. **Expresiones regulares para validación**: Uso eficiente de regex para patrones de caracteres
3. **Conteo de criterios booleanos**: Patrón de acumulación de condiciones cumplidas
4. **Mapeo de puntuación a categorías**: Conversión de conteo numérico a etiquetas categóricas

### Conceptos de JavaScript Aplicados

- **Expresiones regulares**: Creación, uso de constantes, y método `.test()`
- **Contadores acumulativos**: Uso de variables para contar condiciones cumplidas
- **Estructuras de decisión**: Lógica condicional para mapeo de rangos
- **Constantes nombradas**: Mejora de mantenibilidad y legibilidad
- **Optimización de rendimiento**: Eliminación de operaciones innecesarias

### Mejores Prácticas Implementadas

- **Constantes para valores fijos**: Expresiones regulares y umbrales
- **Nombres descriptivos**: Variables como `criteriaMet`, `HAS_UPPERCASE`
- **Comentarios explicativos**: Cada regla claramente documentada
- **Código autodocumentado**: Lógica clara sin necesidad de comentarios adicionales
- **Eliminación de código muerto**: Sin returns innecesarios

### Comparación de Enfoques

**Enfoque con Array (menos óptimo):**

```javascript
let criteriaMet = [
  lengthCriteria,
  upperAndLowerCriteria,
  numberCriteria,
  specialCriteria,
].filter(Boolean).length;
```

**Enfoque con Contador (más óptimo):**

```javascript
let criteriaMet = 0;
if (condition1) criteriaMet++;
if (condition2) criteriaMet++;
// ...
```

**Ventajas del contador:**

- Menos operaciones (sin crear array ni filtrar)
- Más legible y directo
- Mejor rendimiento para múltiples condiciones