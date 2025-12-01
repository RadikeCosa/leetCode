---
title: "Email Validator"
difficulty: "easy"
topics:
  - String
  - Math
  - Set
  - Validation
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-16"
---

# Email Validator

## Análisis del Problema

Este problema requiere implementar un validador de direcciones de email según reglas específicas de FreeCodeCamp. La función `validate()` debe recibir un string y retornar un booleano indicando si cumple con todas las restricciones.

### Restricciones Principales

1. **Un solo símbolo @**: La dirección debe contener exactamente un símbolo de arroba (@) que separa la parte local del dominio.

2. **Parte local (antes del @)**:

   - Solo puede contener letras (a-z, A-Z), dígitos (0-9), puntos (.), guiones bajos (\_) e guiones (-)
   - No puede comenzar ni terminar con un punto
   - No puede tener dos puntos consecutivos

3. **Parte del dominio (después del @)**:
   - Debe contener al menos un punto
   - Debe terminar con un punto seguido de al menos dos letras
   - No puede tener dos puntos consecutivos

### Casos de Validación

**Casos válidos** (deben retornar `true`):

- `"a@b.cd"`: Email simple válido
- `"hell.-w.rld@example.com"`: Parte local con caracteres especiales válidos
- `"develop.ment_user@c0D!NG.R.CKS"`: Dominio complejo con mayúsculas y caracteres especiales

**Casos inválidos** (deben retornar `false`):

- `".b@sh.rc"`: Parte local comienza con punto
- `"example@test.c0"`: Dominio termina con número en lugar de letras
- `"freecodecamp.org"`: Sin símbolo @
- `"hello.@wo.rld"`: Parte local termina con punto
- `"hello@world..com"`: Dos puntos consecutivos en dominio
- `"git@commit@push.io"`: Dos símbolos @

### Consideraciones Técnicas

- La validación debe ser case-sensitive para las letras del dominio final
- Los caracteres permitidos incluyen letras acentuadas y caracteres especiales específicos
- La función debe manejar strings vacíos o null apropiadamente
- Es un problema de validación de patrones, ideal para expresiones regulares o validación manual

## Enfoques Considerados

### 1. Validación Manual con String Methods

Separar el email en local y dominio usando `split('@')`, luego validar cada parte con bucles y condicionales. Ventajas: más legible, fácil de debuggear. Desventajas: código más largo, mayor posibilidad de errores.

### 2. Expresión Regular (Implementado)

Usar una regex compleja que valide todas las reglas en una sola expresión. Ventajas: código conciso, eficiente. Desventajas: regex compleja de leer y mantener.

### 3. Combinación Híbrida

Usar regex para validaciones simples (como contar @) y métodos de string para reglas más específicas. Compromiso entre legibilidad y eficiencia.

## Solución Implementada

Se implementó la solución usando expresiones regulares por su concisión y eficiencia para este tipo de validación de patrones. La regex final valida todas las restricciones requeridas:

```javascript
/^[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_!-]+(?:\.[a-zA-Z0-9_!-]+)*\.[a-zA-Z]{2,}$/;
```

### Explicación Detallada del Regex Paso a Paso

La expresión regular se divide en varias partes que validan cada restricción del problema:

#### 1. **`^` - Inicio de la cadena**

- Asegura que la validación comience desde el principio del string
- Evita que haya caracteres inválidos antes del email

#### 2. **`[a-zA-Z0-9_-]+` - Parte local inicial**

- **`[a-zA-Z0-9_-]`**: Conjunto de caracteres permitidos en la parte local:
  - `a-z`: letras minúsculas
  - `A-Z`: letras mayúsculas
  - `0-9`: dígitos
  - `_`: guion bajo
  - `-`: guion medio
- **`+`**: Al menos un caracter del conjunto anterior
- **Por qué funciona**: Garantiza que la parte local comience con un caracter válido (no punto)

#### 3. **`(?:\.[a-zA-Z0-9_-]+)*` - Parte local continua**

- **`\.`**: Un punto literal (escapado con `\`)
- **`[a-zA-Z0-9_-]+`**: Los mismos caracteres válidos que antes
- **`+`**: Al menos un caracter después del punto
- **`(?:...)*`**: Grupo no capturador que puede repetirse 0 o más veces
- **Por qué funciona**: Permite puntos en la parte local, pero cada punto debe ir seguido de al menos un caracter válido, evitando así puntos consecutivos (`..`) y puntos al final

#### 4. **`@` - Símbolo de arroba**

- Un símbolo `@` literal
- **Por qué funciona**: Garantiza exactamente un `@` (ya que la regex no permite múltiples `@`)

#### 5. **`[a-zA-Z0-9_!-]+` - Inicio del dominio**

- **`[a-zA-Z0-9_!-]`**: Conjunto de caracteres permitidos en el dominio:
  - `a-z`, `A-Z`, `0-9`: letras y números
  - `_`: guion bajo
  - `!`: signo de exclamación (permitido en el dominio según los tests)
  - `-`: guion medio
- **`+`**: Al menos un caracter
- **Por qué funciona**: El dominio debe comenzar con un caracter válido

#### 6. **`(?:\.[a-zA-Z0-9_!-]+)*` - Parte intermedia del dominio**

- **`\.`**: Un punto literal
- **`[a-zA-Z0-9_!-]+`**: Los mismos caracteres válidos
- **`+`**: Al menos un caracter después del punto
- **`(?:...)*`**: Puede repetirse 0 o más veces
- **Por qué funciona**: Permite subdominios (como `sub.example.com`), pero evita puntos consecutivos

#### 7. **`\.` - Punto antes de la terminación**

- Un punto literal obligatorio
- **Por qué funciona**: Garantiza que el dominio tenga al menos un punto

#### 8. **`[a-zA-Z]{2,}` - Terminación del dominio**

- **`[a-zA-Z]`**: Solo letras (sin números)
- **`{2,}`**: Al menos 2 letras
- **Por qué funciona**: El dominio debe terminar con un punto seguido de al menos 2 letras

#### 9. **`$` - Fin de la cadena**

- Asegura que la validación llegue hasta el final del string
- Evita que haya caracteres inválidos después del email

### Validación de Restricciones

**✅ Un solo símbolo @:**

- La regex contiene exactamente un `@` literal
- No hay patrones que permitan múltiples `@`

**✅ Parte local sin puntos al inicio/final:**

- `[a-zA-Z0-9_-]+` al inicio garantiza que no comience con punto
- `(?:\.[a-zA-Z0-9_-]+)*` garantiza que cada punto vaya seguido de caracteres válidos (no puede terminar con punto)

**✅ Parte local sin caracteres inválidos:**

- Solo permite `[a-zA-Z0-9_.-]` en la parte local

**✅ Dominio con al menos un punto:**

- `\.[a-zA-Z]{2,}$` garantiza al menos un punto antes de la terminación

**✅ Dominio termina con . + 2+ letras:**

- `\.[a-zA-Z]{2,}$` valida exactamente esto

**✅ No puntos consecutivos:**

- Tanto en local como dominio: cada `\.` debe ir seguido de `[caracteres]+`
- Los corchetes `[a-zA-Z0-9_-]` y `[a-zA-Z0-9_!-]` NO incluyen puntos
- Por lo tanto, `..` no es posible

### Ejemplos de Validación

**`"a@b.cd"` (válido):**

- `a` → `[a-zA-Z0-9_-]+` ✅
- `@` → `@` ✅
- `b` → `[a-zA-Z0-9_!-]+` ✅
- `.cd` → `\.` + `[a-zA-Z]{2,}` ✅

**`"hello@world..com"` (inválido):**

- Falla en `world..` porque `..` viola la regla de no puntos consecutivos

**`"develop.ment_user@c0D!NG.R.CKS"` (válido):**

- Parte local: `develop.ment_user` ✅ (puntos no consecutivos)
- `@` ✅
- Dominio: `c0D!NG.R.CKS` ✅ (permite `!`, puntos no consecutivos, termina con `.CKS`)

### Optimización y Rendimiento

La regex es eficiente porque:

- **O(n) tiempo**: Una sola pasada por el string
- **Precompilada**: Se compila una vez al definir la constante
- **Validación completa**: Una sola expresión valida todas las reglas
- **Sin backtracking excesivo**: Los patrones están diseñados para ser determinísticos

## Complejidad

- **Tiempo**: O(n) - La validación con regex es lineal en la longitud del string
- **Espacio**: O(1) - No se usa espacio adicional proporcional al input (la regex es constante)

## Casos de Prueba

Se implementaron 9 casos de prueba siguiendo el enfoque TDD:

**Casos válidos (true):**

1. `"a@b.cd"` - Email simple básico
2. `"hell.-w.rld@example.com"` - Parte local con caracteres especiales
3. `"develop.ment_user@c0D!NG.R.CKS"` - Dominio con caracteres extendidos

**Casos inválidos (false):**

1. `".b@sh.rc"` - Parte local comienza con punto
2. `"example@test.c0"` - Dominio termina con número
3. `"freecodecamp.org"` - Sin símbolo @
4. `"hello.@wo.rld"` - Parte local termina con punto
5. `"hello@world..com"` - Puntos consecutivos en dominio
6. `"git@commit@push.io"` - Múltiples símbolos @

## Aprendizajes y Notas

### Expresiones Regulares para Validación

- Las regex son poderosas para validación de patrones complejos
- Es crucial probar exhaustivamente con casos edge
- La legibilidad sufre con regex complejas - documentar bien

### Validación de Email

- Las reglas específicas de FreeCodeCamp son más estrictas que RFC 5322
- Importante distinguir entre caracteres permitidos en local vs dominio
- Los puntos consecutivos son un error común que invalidar

### TDD Benefits

- Los tests exhaustivos garantizan cobertura completa
- Facilitan refactorización segura
- Documentan los requisitos de manera ejecutable

### Mejoras Posibles

- Agregar validación de longitud máxima
- Considerar normalización (minúsculas)
- Manejo de strings vacíos o null