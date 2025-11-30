---
name: html-attribute-extractor
source: freecodecamp
series: daily
category: daily
createdAt: 2025-10-16
difficulty: easy
topics:
  - String
  - Regex
hasImplementation: true
hasTests: true
hasExplanation: true
hasPostSolution: false
---

# HTML Attribute Extractor - Explicación

## Descripción del Problema

Este problema requiere extraer atributos de elementos HTML válidos y formatearlos en un array de strings específico.

**Objetivo:** Dada una cadena que contiene un elemento HTML válido, extraer todos sus atributos y devolverlos en un formato específico.

**Parámetros de entrada:**

- `element`: String que contiene exactamente un elemento HTML válido

**Restricciones y criterios:**

1. **Un solo elemento**: Siempre recibirás exactamente un elemento HTML
2. **Formato de atributos**: Todos siguen el patrón `atributo="valor"`
3. **Formato de salida**: Array de strings `["atributo1, valor1", "atributo2, valor2"]`
4. **Orden preservado**: Los atributos deben aparecer en el mismo orden original
5. **Sin atributos**: Devolver array vacío `[]`

**Ejemplos de elementos válidos:**

- Tags normales: `<span class="red">contenido</span>`
- Tags auto-cerrados: `<meta charset="UTF-8" />`
- Sin contenido: `<input type="text" />`
- Sin atributos: `<p>Solo texto</p>`

## Análisis de Casos de Prueba

Desglosemos cada caso para entender los patrones de extracción:

### Caso 1: `<span class="red"></span>` → Resultado: `["class, red"]`

**Análisis:**

- **Elemento**: `span` con un atributo
- **Atributo encontrado**: `class="red"`
- **Extracción**: `atributo="class"`, `valor="red"`
- **Formato final**: `"class, red"`

### Caso 2: `<meta charset="UTF-8" />` → Resultado: `["charset, UTF-8"]`

**Análisis:**

- **Elemento**: Tag auto-cerrado `meta`
- **Atributo encontrado**: `charset="UTF-8"`
- **Valor especial**: Contiene guión y números
- **Formato final**: `"charset, UTF-8"`

### Caso 3: `<p>Lorem ipsum dolor sit amet</p>` → Resultado: `[]`

**Análisis:**

- **Elemento**: `p` sin atributos
- **Contenido**: Solo texto interno
- **Atributos encontrados**: Ninguno
- **Resultado**: Array vacío

### Caso 4: `<input name="email" type="email" required="true" />` → Resultado: `["name, email", "type, email", "required, true"]`

**Análisis:**

- **Elemento**: `input` con múltiples atributos
- **Orden preservado**: `name` → `type` → `required`
- **Patrón repetitivo**: Cada atributo sigue `nombre="valor"`
- **Formato múltiple**: Array con 3 elementos

### Caso 5: `<button id="submit" class="btn btn-primary">Submit</button>` → Resultado: `["id, submit", "class, btn btn-primary"]`

**Análisis:**

- **Caso complejo**: Valor con espacios múltiples
- **Valor especial**: `"btn btn-primary"` contiene espacios internos
- **Manejo correcto**: Los espacios dentro del valor se preservan
- **Contenido ignorado**: El texto `Submit` no se incluye

### Patrones Identificados

1. **Detección de atributos**: Solo dentro del tag de apertura `<...>`
2. **Formato estricto**: Siempre `nombre="valor"` (comillas dobles)
3. **Valores variables**: Pueden contener letras, números, espacios, guiones
4. **Sin escape**: No hay caracteres especiales que manejar
5. **Orden importante**: La secuencia debe mantenerse intacta

## Enfoque de Solución

### Estrategia: Expresión Regular con Grupos Capturadores

La solución utiliza una expresión regular diseñada específicamente para extraer atributos HTML en el formato esperado.

**Regex utilizada:** `/(\w+)="([^"]*)"/g`

**Desglose del patrón:**

```javascript
/(\w+)="([^"]*)"/g
 ^^^^              → Grupo 1: Nombre del atributo (\w+ = uno o más word characters)
     ^^^           → Literal: =" (igual y comilla de apertura)
        ^^^^^^     → Grupo 2: Valor del atributo ([^"]* = cero o más caracteres que no sean comillas)
              ^    → Literal: " (comilla de cierre)
               ^   → Flag global: buscar todas las coincidencias
```

**Algoritmo paso a paso:**

```javascript
function extractAttributes(element) {
  const attributes = []; // 1. Inicializar array resultado
  const regex = /(\w+)="([^"]*)"/g; // 2. Definir patrón de búsqueda
  let match; // 3. Variable para cada coincidencia

  while ((match = regex.exec(element)) !== null) {
    // 4. Iterar todas las coincidencias
    attributes.push(`${match[1]}, ${match[2]}`); // 5. Formatear y agregar resultado
  }

  return attributes; // 6. Devolver array completo
}
```

### Proceso de Extracción

**Para `<input name="email" type="email" required="true" />`:**

```javascript
// Iteración 1:
match = regex.exec(element)  → ["name=\"email\"", "name", "email"]
attributes.push("name, email")

// Iteración 2:
match = regex.exec(element)  → ["type=\"email\"", "type", "email"]
attributes.push("type, email")

// Iteración 3:
match = regex.exec(element)  → ["required=\"true\"", "required", "true"]
attributes.push("required, true")

// Iteración 4:
match = regex.exec(element)  → null (termina el loop)

// Resultado final: ["name, email", "type, email", "required, true"]
```

### Ventajas del Enfoque

**✅ Precisión:** El regex coincide exactamente con el formato HTML válido  
**✅ Eficiencia:** Una sola pasada por el string con `regex.exec()`  
**✅ Robustez:** Maneja casos edge (valores vacíos, múltiples espacios)  
**✅ Orden preservado:** El flag `g` encuentra coincidencias secuencialmente  
**✅ Simplicidad:** Lógica clara sin parsing manual complejo

### Manejo de Casos Especiales

- **Sin atributos**: El loop `while` nunca se ejecuta → array vacío
- **Valores con espacios**: `[^"]*` captura todo hasta la comilla de cierre
- **Múltiples atributos**: Flag `g` + `regex.exec()` los encuentra todos en orden
- **Valores vacíos**: `*` permite cero caracteres en el valor

## Complejidad

### Complejidad Temporal

**O(n) - Lineal**

- **n**: Longitud del string de entrada `element`
- **Regex scanning**: La expresión regular debe examinar cada carácter una vez
- **Coincidencias**: Cada atributo encontrado requiere una operación de push O(1)
- **Total**: O(n) para el scanning + O(k) para k atributos = O(n)

**Desglose por operación:**

- `regex.exec()`: O(n) por cada llamada, pero el motor de regex optimiza la búsqueda
- `attributes.push()`: O(1) por cada atributo encontrado
- Template string `${match[1]}, ${match[2]}`: O(1) por atributo

### Complejidad Espacial

**O(k) - Donde k es el número de atributos**

- **Array resultado**: Almacena k strings, uno por cada atributo
- **Variables auxiliares**: `match`, `regex` son O(1)
- **Strings temporales**: Cada formato `"attr, value"` es O(1)
- **Peor caso**: Si todos los caracteres son atributos → O(n)
- **Caso típico**: Pocos atributos por elemento → O(1)

## Conceptos Clave

### 1. **Expresiones Regulares Avanzadas**

**Grupos Capturadores:**

- `()`: Crear grupos que se pueden referenciar con `match[1]`, `match[2]`
- Permite extraer partes específicas de una coincidencia
- Esencial para separar nombre y valor del atributo

**Character Classes:**

- `\w`: Word characters `[a-zA-Z0-9_]` - perfecto para nombres de atributos
- `[^"]`: Negated class - cualquier carácter excepto comillas dobles
- Manejo preciso de contenido entre delimitadores

**Cuantificadores:**

- `+`: Uno o más - garantiza que el nombre del atributo no esté vacío
- `*`: Cero o más - permite valores de atributo vacíos

### 2. **Parsing de HTML con Regex**

**Limitaciones conocidas:**

- Solo funciona para HTML bien formado y simple
- No maneja casos complejos (atributos sin comillas, comillas simples)
- Adecuado para el contexto específico del problema

**Ventajas del enfoque:**

- Más rápido que un parser HTML completo
- Suficiente para el formato garantizado del problema
- Control preciso sobre el formato de salida

### 3. **Iteración con regex.exec()**

**Patrón clásico:**

```javascript
while ((match = regex.exec(string)) !== null) {
  // Procesar match
}
```

**Comportamiento del flag `g`:**

- Mantiene estado interno entre llamadas a `exec()`
- Continúa desde donde terminó la coincidencia anterior
- Devuelve `null` cuando no hay más coincidencias

### 4. **Formateo de Datos**

**Template literals vs concatenación:**

- `${match[1]}, ${match[2]}` es más legible
- Ligeramente menos eficiente que `match[1] + ', ' + match[2]`
- Decisión correcta priorizando legibilidad

## Notas de Implementación

### ✅ **Decisiones de Diseño Correctas**

**1. Uso de `regex.exec()` en lugar de `matchAll()`:**

- ✅ **Compatibilidad**: Funciona en más navegadores
- ✅ **Control**: Permite procesamiento personalizado por coincidencia
- ✅ **Claridad**: El loop while es explícito y fácil de debuggear

**2. Inicialización del array:**

- ✅ `let attributes = []` permite que retorne vacío automáticamente
- ✅ No necesita validación adicional para casos sin atributos

**3. Variable auxiliar `match`:**

- ✅ Reutilización eficiente de memoria
- ✅ Claridad en la condición del while

### 🔄 **Alternativas Consideradas**

**String methods manual:**

```javascript
// Menos eficiente y más complejo
element.split(" ").filter((part) => part.includes("="));
```

**DOM Parser approach:**

```javascript
// Excesivo para este problema específico
const parser = new DOMParser();
const doc = parser.parseFromString(element, "text/html");
```

**Modern regex approach:**

```javascript
// Más moderno pero menos compatible
Array.from(element.matchAll(regex), (match) => `${match[1]}, ${match[2]}`);
```

### ⚠️ **Limitaciones y Consideraciones**

**1. Formato HTML estricto:**

- Solo maneja atributos con comillas dobles
- No procesa atributos booleanos (ej: `disabled`)
- Asume HTML bien formado

**2. Casos no cubiertos (por diseño del problema):**

- Atributos con comillas simples: `class='red'`
- Atributos sin valor: `<input disabled>`
- Caracteres de escape dentro de valores

**3. Rendimiento:**

- Excelente para elementos típicos (5-10 atributos)
- Podría ser lento para strings HTML muy largos
- Regex engine optimizado para este patrón específico

### 🎯 **Por qué esta implementación es óptima:**

1. **Correctitud**: Maneja todos los casos especificados perfectamente
2. **Simplicidad**: Código fácil de entender y mantener
3. **Eficiencia**: O(n) con constante baja
4. **Robustez**: Funciona con casos edge del problema
5. **Legibilidad**: Comentarios claros y estructura lógica
