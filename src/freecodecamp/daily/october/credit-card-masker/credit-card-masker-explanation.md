# Credit Card Masker - Análisis y Solución

## Análisis del Problema

### Descripción

El problema requiere implementar una función `mask` que recibe una cadena de texto representando un número de tarjeta de crédito y retorna una versión enmascarada de la misma. La cadena de entrada siempre tendrá un formato específico: cuatro grupos de cuatro dígitos cada uno, separados por un espacio o un guion.

La función debe:

- Mantener visibles solo los últimos cuatro dígitos
- Reemplazar todos los demás dígitos con asteriscos (\*)
- Preservar los caracteres separadores (espacios o guiones) en sus posiciones originales

**Características importantes:**

- La entrada siempre tendrá exactamente 16 dígitos distribuidos en 4 grupos de 4
- Los separadores pueden ser espacios o guiones, pero nunca mezclados en la misma cadena
- Solo se enmascaran los dígitos, los separadores permanecen iguales
- Los últimos cuatro dígitos (último grupo) siempre quedan visibles

### Ejemplos

1. `mask("4012-8888-8888-1881")` → `"****-****-****-1881"`

   - Entrada: 16 dígitos separados por guiones
   - Salida: Los primeros 12 dígitos enmascarados, últimos 4 visibles
   - Separadores (guiones) se mantienen

2. `mask("5105 1051 0510 5100")` → `"**** **** **** 5100"`

   - Entrada: 16 dígitos separados por espacios
   - Salida: Los primeros 12 dígitos enmascarados, últimos 4 visibles
   - Separadores (espacios) se mantienen

3. `mask("6011 1111 1111 1117")` → `"**** **** **** 1117"`

   - Similar al anterior pero con diferentes números
   - Muestra que el patrón funciona con cualquier combinación de dígitos

4. `mask("2223-0000-4845-0010")` → `"****-****-****-0010"`
   - Otro ejemplo con guiones
   - Los ceros también se enmascaran correctamente

### Restricciones

- **Formato fijo**: Siempre 4 grupos de 4 dígitos (16 dígitos total)
- **Separadores consistentes**: Todos los separadores son del mismo tipo (espacio o guion)
- **Solo dígitos y separadores**: No hay otros caracteres en la entrada
- **Longitud fija**: La cadena siempre tiene 19 caracteres (16 dígitos + 3 separadores)
- **Separador único**: Nunca hay mezcla de espacios y guiones en la misma cadena

### Algoritmo

**Pasos detallados:**

1. **Detectar el separador:**

   - Identificar si la cadena usa espacios o guiones como separador
   - Esto es crucial porque la salida debe mantener el mismo tipo de separador

2. **Dividir la cadena:**

   - Usar `split()` con el separador detectado para obtener los 4 grupos de 4 dígitos
   - Resultado: `["4012", "8888", "8888", "1881"]`

3. **Enmascarar selectivamente:**

   - Para los primeros 3 grupos: reemplazar cada dígito con `*`
   - Para el último grupo: mantener los dígitos originales
   - Resultado: `["****", "****", "****", "1881"]`

4. **Reconstruir la cadena:**
   - Unir los grupos usando el mismo separador detectado
   - Resultado: `"****-****-****-1881"`

**Problema con el enfoque split + join fijo:**

- Si el input usa espacios: `"5105 1051 0510 5100"`
- Split por espacios → `["5105", "1051", "0510", "5100"]`
- Join con guiones → `"****-****-****-5100"` ❌ (incorrecto)
- Debería ser → `"**** **** **** 5100"` ✅

#### Solución: Detectar y preservar el separador

**Enfoque Mejorado - Detectar Separador Dinámicamente:**

```javascript
function mask(card) {
  // Detectar el separador usado (espacio o guion)
  const separator = card.includes(" ") ? " " : "-";

  // Dividir por el separador detectado
  const groups = card.split(separator);

  // Enmascarar los primeros 3 grupos, mantener el último
  const maskedGroups = groups.map((group, index) =>
    index < 3 ? "****" : group
  );

  // Unir con el mismo separador
  return maskedGroups.join(separator);
}
```

**Otros Enfoques Sugeridos:**

#### 2. Expresiones Regulares (Más Elegante)

```javascript
function mask(card) {
  // Reemplaza dígitos que NO estén en el último grupo
  return card.replace(/\d(?=\d{4}(?:[ -]|$))/g, "*");
}
```

#### 3. Trabajo Directo con Índices (Más Eficiente)

```javascript
function mask(card) {
  // Los últimos 4 caracteres siempre son visibles
  const visiblePart = card.slice(-4);
  const maskedPart = card.slice(0, -4).replace(/\d/g, "*");
  return maskedPart + visiblePart;
}
```

#### 4. Procesamiento por Grupos (Tu Enfoque Mejorado)

```javascript
function mask(card) {
  // Detectar separador
  const separator = card.includes(" ") ? " " : "-";

  // Dividir y procesar
  const groups = card.split(separator);
  const masked = groups.map((group, i) => (i < 3 ? "****" : group));

  return masked.join(separator);
}
```

### Recomendación

**Para este problema, recomiendo el Enfoque #1 (Detectar Separador)** porque:

- ✅ **Simple y legible**
- ✅ **Maneja ambos tipos de separadores**
- ✅ **Fácil de entender y mantener**
- ✅ **Buen equilibrio entre claridad y eficiencia**

El enfoque con expresiones regulares (#2) es más elegante pero puede ser menos intuitivo para principiantes.

## Complejidad

### Tiempo

**O(n)** - Donde n es la longitud de la cadena de entrada (siempre 19 caracteres)

- `card.includes(" ")` - O(n) para buscar el separador
- `card.split(separator)` - O(n) para dividir la cadena
- `groups.map()` - O(n) para procesar los 4 grupos
- `masked.join(separator)` - O(n) para reconstruir la cadena

Aunque la complejidad es lineal, con entrada de tamaño fijo (19 caracteres), el rendimiento es efectivamente constante O(1).

### Espacio

**O(n)** - Se crea un nuevo array de 4 elementos durante el procesamiento

- El array `groups` almacena 4 referencias a strings
- El array `masked` almacena 4 strings de longitud 4 ("\*\*\*\*" o el grupo original)
- La cadena resultante es del mismo tamaño que la entrada

Con entrada de tamaño fijo, el espacio usado es efectivamente constante O(1).

## Implementación

### Código

```javascript
function mask(card) {
  // Detectar el separador usado en la entrada (espacio o guion)
  const separator = card.includes(" ") ? " " : "-";

  // Dividir la cadena en grupos de 4 dígitos usando el separador detectado
  const groups = card.split(separator);

  // Enmascarar los primeros 3 grupos con asteriscos, mantener el último grupo visible
  const masked = groups.map((group, i) => (i < 3 ? "****" : group));

  // Reconstruir la cadena usando el mismo separador
  return masked.join(separator);
}
```

### Explicación Paso a Paso

**Ejemplo con entrada `"4012-8888-8888-1881"`:**

1. **Detección del separador:**

   ```javascript
   const separator = card.includes(" ") ? " " : "-"; // separator = "-"
   ```

2. **División en grupos:**

   ```javascript
   const groups = card.split(separator); // ["4012", "8888", "8888", "1881"]
   ```

3. **Enmascarado selectivo:**

   ```javascript
   const masked = groups.map((group, i) => (i < 3 ? "****" : group));
   // Iteración 0: i=0, group="4012" → "****"
   // Iteración 1: i=1, group="8888" → "****"
   // Iteración 2: i=2, group="8888" → "****"
   // Iteración 3: i=3, group="1881" → "1881"
   // Resultado: ["****", "****", "****", "1881"]
   ```

4. **Reconstrucción:**

   ```javascript
   return masked.join(separator); // "****-****-****-1881"
   ```

## Casos de Prueba

### Casos Básicos

1. **Separador con guiones:**

   - Input: `"4012-8888-8888-1881"`
   - Expected: `"****-****-****-1881"`
   - Verifica enmascarado correcto y preservación de guiones

2. **Separador con espacios:**
   - Input: `"5105 1051 0510 5100"`
   - Expected: `"**** **** **** 5100"`
   - Verifica enmascarado correcto y preservación de espacios

### Casos Edge

1. **Números con ceros:**

   - Input: `"2223-0000-4845-0010"`
   - Expected: `"****-****-****-0010"`
   - Verifica que los ceros también se enmascaren correctamente

2. **Números repetitivos:**
   - Input: `"6011 1111 1111 1117"`
   - Expected: `"**** **** **** 1117"`
   - Verifica comportamiento con dígitos repetidos

### Casos Extremos

1. **Mínimo valor posible:**

   - Input: `"0000-0000-0000-0000"`
   - Expected: `"****-****-****-0000"`
   - Verifica que los últimos cuatro ceros queden visibles

2. **Máximo valor posible:**
   - Input: `"9999-9999-9999-9999"`
   - Expected: `"****-****-****-9999"`
   - Verifica comportamiento con el valor máximo

## Aprendizajes

### Patrones Identificados

1. **Detección de separadores:** Cuando la entrada puede tener diferentes tipos de separadores, siempre detectar dinámicamente cuál se está usando para mantener consistencia en la salida.

2. **Procesamiento por grupos:** Para problemas que involucran manipulación de subcadenas con estructura fija, dividir en grupos lógicos puede simplificar la lógica.

3. **Preservación de formato:** Cuando el formato de salida debe coincidir con el de entrada (excepto por el contenido), identificar y reutilizar los elementos estructurales.

4. **Uso de `map()` para transformaciones:** Cuando necesitamos transformar elementos de un array de manera diferente según su posición, `map()` con índice es ideal.

### Conceptos Relacionados

- **Manipulación de strings:** `split()`, `join()`, `includes()`, `slice()`
- **Arrays funcionales:** `map()`, `filter()`, `reduce()`
- **Expresiones regulares:** Para patrones más complejos de búsqueda/reemplazo
- **Operador ternario:** Para lógica condicional concisa
- **Detección de patrones:** Identificar características de la entrada para adaptar el procesamiento

### Mejores Prácticas Aplicadas

1. **Código legible:** Variables con nombres descriptivos (`separator`, `groups`, `masked`)
2. **Comentarios explicativos:** Cada paso importante está documentado
3. **Consistencia:** La salida mantiene el mismo formato que la entrada
4. **Eficiencia:** Algoritmo O(n) apropiado para el tamaño de entrada fijo
5. **Mantenibilidad:** Lógica clara y fácil de modificar si cambian los requerimientos
