---
title: Screaming Snake Case
source: freeCodeCamp
series: daily
category: december
createdAt: 2025-12-28
difficulty: easy
topics:
  - strings
  - formatting
  - case conversion
blogLink: https://blog-astro-rouge.vercel.app/posts/screaming-snake-case/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-28/
---

## Screaming Snake Case - Análisis y Explicación

## Enunciado del Problema

Dado un string que representa el nombre de una variable, retorna la variable convertida a SCREAMING_SNAKE_CASE.

El nombre de la variable dada estará escrito en uno de los siguientes formatos:

- camelCase (por ejemplo, "thisIsVariable")
- PascalCase (por ejemplo, "ThisIsVariable")
- snake_case (por ejemplo, "this_is_variable")
- kebab-case (por ejemplo, "this-is-variable")

En los formatos anteriores, las palabras están separadas por un guion bajo, un guion medio, o una nueva palabra comienza con una letra mayúscula.

Para convertir a SCREAMING_SNAKE_CASE:

- Todas las letras deben estar en mayúsculas.
- Las palabras deben estar separadas por un guion bajo.

## Análisis Inicial

### Comprensión del Problema

El problema nos pide identificar cada palabra, ya sea detectando guiones medios, guiones bajos o el inicio de una nueva palabra por mayúscula. Luego, debemos unirlas con guiones bajos y convertir todo a mayúsculas.

### Casos de Prueba Identificados

Para asegurar que la función cubre todos los formatos mencionados en el enunciado, se identificaron los siguientes casos de prueba representativos:

- `"userEmail"` → `"USER_EMAIL"` (camelCase: detecta el cambio de minúscula a mayúscula)
- `"UserPassword"` → `"USER_PASSWORD"` (PascalCase: la primera letra es mayúscula, el resto sigue el patrón camelCase)
- `"user_id"` → `"USER_ID"` (snake_case: las palabras ya están separadas por guion bajo)
- `"user-address"` → `"USER_ADDRESS"` (kebab-case: las palabras están separadas por guion medio)
- `"username"` → `"USERNAME"` (una sola palabra, sin separadores ni mayúsculas internas)

Estos casos cubren los formatos principales y permiten validar que la conversión a SCREAMING_SNAKE_CASE se realiza correctamente en cada situación.

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver este problema se optó por un enfoque basado en expresiones regulares y transformaciones secuenciales del string. La estrategia consiste en normalizar primero todos los formatos de entrada a un formato intermedio (snake_case), y luego convertir todo a mayúsculas.

**¿Por qué este enfoque?**

- **Simplicidad**: En lugar de detectar cada formato por separado, se normalizan todos los separadores (guiones medios y mayúsculas) a guiones bajos, aprovechando que snake_case es el formato más cercano al resultado final.
- **Robustez**: El uso de expresiones regulares permite identificar transiciones entre minúsculas y mayúsculas (camelCase/PascalCase) de manera precisa, sin importar cuántas palabras tenga la variable.
- **Eficiencia**: Con dos operaciones `replace` y un `split`, se procesan todos los formatos en una sola pasada por el string.

Este enfoque es preferible a analizar carácter por carácter porque reduce la complejidad del código y evita estructuras de control anidadas, haciendo la solución más legible y mantenible.

### Implementación Paso a Paso

1. **Normalizar camelCase y PascalCase a snake_case**:

   - Usar la expresión regular `/([a-z])([A-Z])/g` para detectar transiciones de minúscula a mayúscula.
   - Insertar un guion bajo entre ambas letras usando `replace` con el patrón de sustitución `'$1_$2'`.
   - Ejemplo: `"userEmail"` → `"user_Email"`

2. **Convertir kebab-case a snake_case**:

   - Reemplazar todos los guiones medios (`-`) por guiones bajos (`_`) usando `replace(/-/g, '_')`.
   - Ejemplo: `"user-address"` → `"user_address"`

3. **Dividir el string en palabras**:

   - Usar `split('_')` para obtener un array de palabras individuales.
   - En este punto, todos los formatos quedan normalizados como palabras separadas.

4. **Convertir a mayúsculas y unir con guiones bajos**:
   - Mapear cada palabra con `toUpperCase()` para convertirla a mayúsculas.
   - Usar `join('_')` para unir las palabras con guiones bajos, obteniendo el formato SCREAMING_SNAKE_CASE final.

```javascript
function toScreamingSnakeCase(variableName) {
  // Paso 1: Normalizar camelCase/PascalCase insertando guiones bajos antes de mayúsculas
  // Ejemplo: "userEmail" → "user_Email"
  const withUnderscores = variableName.replace(/([a-z])([A-Z])/g, "$1_$2");

  // Paso 2: Convertir kebab-case a snake_case reemplazando guiones medios
  // Ejemplo: "user-address" → "user_address"
  const normalized = withUnderscores.replace(/-/g, "_");

  // Paso 3: Dividir por guiones bajos para obtener palabras individuales
  const words = normalized.split("_");

  // Paso 4: Convertir cada palabra a mayúsculas y unir con guiones bajos
  // Ejemplo: ["user", "Email"] → "USER_EMAIL"
  return words.map((word) => word.toUpperCase()).join("_");
}
```

## Análisis de Complejidad

### Complejidad Temporal

**O(n)** donde `n` es la longitud del string de entrada.

La función realiza las siguientes operaciones lineales:

- **`replace(/([a-z])([A-Z])/g, '$1_$2')`**: Recorre el string una vez para identificar transiciones de minúscula a mayúscula. En el peor caso, cada carácter se examina una vez.
- **`replace(/-/g, '_')`**: Recorre el string una vez más para reemplazar guiones medios.
- **`split('_')`**: Recorre el string para dividirlo en palabras.
- **`map(word => word.toUpperCase())`**: Itera sobre cada palabra y convierte cada carácter a mayúscula.
- **`join('_')`**: Une las palabras en un nuevo string.

Aunque hay múltiples operaciones, todas son lineales respecto a la longitud del string, por lo que la complejidad temporal total es **O(n)**.

### Complejidad Espacial

**O(n)** donde `n` es la longitud del string de entrada.

Se crean las siguientes estructuras auxiliares:

- **`withUnderscores`**: Un nuevo string del mismo tamaño que la entrada (o ligeramente mayor si se insertan guiones bajos).
- **`normalized`**: Otro string intermedio.
- **`words`**: Un array que contiene las palabras extraídas del string.
- **Resultado final**: El string resultante en SCREAMING_SNAKE_CASE.

En el peor caso, si tenemos muchas palabras cortas, el array `words` puede contener muchos elementos, pero la suma total de caracteres siempre será proporcional a `n`. Por lo tanto, la complejidad espacial es **O(n)**.

## Casos Edge y Consideraciones

### Casos Manejados

1. **String vacío**: Si la entrada es `""`, la función retorna `""`.
2. **Una sola palabra sin separadores**: Como `"username"`, se convierte directamente a `"USERNAME"`.
3. **Múltiples formatos combinados**: La solución puede manejar strings que mezclan formatos, aunque esto no es un caso típico del problema.
4. **Palabras de una sola letra**: Como `"aB"` → `"A_B"`.

### Consideraciones Importantes

- **Números y caracteres especiales**: La solución actual no maneja explícitamente números o caracteres especiales. Si la entrada contiene números como `"user2Email"`, la expresión regular no insertará guiones bajos alrededor de ellos. Esto podría requerir ajustes si el problema lo especifica.
- **Múltiples mayúsculas consecutivas**: Si hay acrónimos como `"XMLParser"`, la expresión regular actual no los maneja óptimamente y podría producir `"X_M_L_PARSER"`. Dependiendo del contexto, esto podría ser aceptable o requerir lógica adicional.
- **Guiones bajos consecutivos**: Si la entrada tiene múltiples guiones bajos consecutivos (ej: `"user__id"`), la función puede producir elementos vacíos en el array `words`, resultando en guiones bajos múltiples en la salida. Se podría filtrar con `.filter(word => word.length > 0)` si fuera necesario.

Para los casos de prueba proporcionados, la solución funciona correctamente.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- **Expresiones Regulares**: El uso de regex para detectar patrones de texto es fundamental en problemas de manipulación de strings. La expresión `/([a-z])([A-Z])/g` captura grupos para insertar caracteres entre ellos.
- **Métodos de String**: `replace()`, `split()`, `toUpperCase()` y `join()` son herramientas esenciales para transformar strings de manera declarativa.
- **Normalización de Datos**: Convertir múltiples formatos a uno intermedio simplifica la lógica y reduce errores.
- **Programación Funcional**: El uso de `map()` y `join()` permite transformar datos de manera limpia sin bucles explícitos.

### Posibles Optimizaciones

1. **Encadenar operaciones sin variables intermedias**: Si bien la versión actual es legible, se podría reducir el código encadenando todas las operaciones:

   ```javascript
   return variableName
     .replace(/([a-z])([A-Z])/g, "$1_$2")
     .replace(/-/g, "_")
     .split("_")
     .map((word) => word.toUpperCase())
     .join("_");
   ```

   Esto no mejora el rendimiento, pero reduce líneas de código. La versión expandida es más didáctica para explicar cada paso.

2. **Usar una sola expresión regular más compleja**: Se podría intentar una regex que maneje todos los casos en un solo `replace`, pero sería menos legible y más propensa a errores.

3. **Filtrar palabras vacías**: Para mayor robustez ante entradas con múltiples guiones bajos consecutivos:

   ```javascript
   .split("_")
   .filter(word => word.length > 0)
   .map(word => word.toUpperCase())
   .join("_");
   ```

4. **Manejo de acrónimos**: Si el problema requiere manejar casos como `"XMLParser"` → `"XML_PARSER"`, se necesitaría una expresión regular más sofisticada que detecte secuencias de mayúsculas.

Para el alcance del problema actual, la solución implementada es óptima en términos de claridad, eficiencia y corrección.

## Recursos y Referencias

- [MDN - String.prototype.replace()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [MDN - Regular Expressions](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
- [MDN - String.prototype.split()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [MDN - Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Naming Conventions in Programming](<https://en.wikipedia.org/wiki/Naming_convention_(programming)>)
