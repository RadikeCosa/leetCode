# 🔍 Extension Extractor - Análisis y Explicación

## 📋 Enunciado del Problema

**Extension Extractor**  
Dado una cadena de texto que representa el nombre de un archivo, devuelve la extensión del archivo.

La extensión es la parte del nombre del archivo que viene después del último punto (`.`).  
Si el nombre del archivo no contiene un punto o termina con un punto, devuelve `"none"`.  
La extensión debe devolverse tal cual, preservando mayúsculas y minúsculas.

## 🧠 Análisis Inicial

### 📖 Comprensión del Problema

La función debe identificar y devolver la extensión del archivo, o `"none"` si no hay una extensión válida. Esto implica manejar casos como:

- **Archivos sin extensión**: `"README"` → `"none"`
- **Archivos con extensión**: `"document.txt"` → `"txt"`
- **Archivos que empiezan con punto**: `".gitignore"` → `"gitignore"`
- **Archivos con múltiples puntos**: `"archive.tar.gz"` → `"gz"`
- **Archivos que terminan con punto**: `"final.draft."` → `"none"`

### 🔍 Estrategia de Resolución

El primer paso es encontrar el ultimo punto de la cadena y en base a su posicion extraer la extension o devolver "none".
Para encontrar la ultima posicion del punto se puede usar el metodo `lastIndexOf('.')` de JavaScript.
Este metodo devuelve la posicion del ultimo punto o -1 si no existe.

Por ejemplo:

```javascript
"document.txt".lastIndexOf("."); // 8
"README".lastIndexOf("."); // -1
".gitignore".lastIndexOf("."); // 0
"archive.tar.gz".lastIndexOf("."); // 12
"final.draft.".lastIndexOf("."); // 12
```

en caso de que el punto este en un a ubicacion valida podemos usar el metodo `substring()` para extraer la extension.
Este metodo toma dos argumentos: el indice inicial y el indice final (opcional) y devuelve la subcadena entre esos indices.
Por ejemplo:

```javascript
"document.txt".substring(9); // "txt"
"README".substring(6); // ""
".gitignore".substring(1); // "gitignore"
"archive.tar.gz".substring(13); // "gz"
"final.draft.".substring(12); // ""
```

```javascript
// Pseudocódigo básico
function getExtension(filename) {
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex === -1 || lastDotIndex === filename.length - 1) {
    return "none";
  }
  return filename.substring(lastDotIndex + 1);
}
```

### ✅ Casos de Prueba Identificados

| Caso | Entrada            | Salida Esperada | Explicación                      |
| ---- | ------------------ | --------------- | -------------------------------- |
| 1    | `"document.txt"`   | `"txt"`         | Extensión estándar               |
| 2    | `"README"`         | `"none"`        | Sin extensión                    |
| 3    | `"image.PNG"`      | `"PNG"`         | Preserva mayúsculas              |
| 4    | `".gitignore"`     | `"gitignore"`   | Archivo que empieza con punto    |
| 5    | `"archive.tar.gz"` | `"gz"`          | Múltiples puntos, toma el último |
| 6    | `"final.draft."`   | `"none"`        | Termina con punto                |

## 🛠️ Desarrollo de la Solución

### 🎯 Enfoque Elegido

**Algoritmo Simple con String Methods**  
Utilizar métodos nativos de JavaScript para manipulación de strings:

- `lastIndexOf('.')` para encontrar la posición del último punto
- `substring()` para extraer la extensión
- Validación de casos edge

### 📝 Implementación Paso a Paso

1. **Buscar el último punto**: `filename.lastIndexOf('.')`
2. **Validar casos inválidos**:
   - Si no hay punto (`index === -1`)
   - Si el punto es el último carácter (`index === length - 1`)
3. **Extraer extensión**: `filename.substring(index + 1)`
4. **Retornar resultado**

## 📊 Análisis de Complejidad

### ⏱️ Complejidad Temporal

- **O(n)** donde n es la longitud del string
- `lastIndexOf()` recorre el string una vez
- Operación lineal pero eficiente para strings típicos

### 💾 Complejidad Espacial

- **O(1)** adicional (sin memoria extra significativa)
- Solo usa variables primitivas
- La substring crea una nueva referencia pero no duplica memoria

## ⚠️ Casos Edge y Consideraciones

- **Archivos sin extensión**: Devolver `"none"`
- **Punto al inicio**: Considerar válido (ej: `.gitignore` → `gitignore`)
- **Múltiples extensiones**: Solo la última cuenta (ej: `tar.gz` → `gz`)
- **Punto al final**: Invalidar (ej: `file.` → `none`)
- **Preservar case**: No convertir a minúsculas
- **Strings vacíos**: Devolver `"none"` (caso edge adicional)

## 🤔 Reflexiones y Aprendizajes

### 🧩 Conceptos Aplicados

- **Manipulación de Strings**: `lastIndexOf('.')` y `substring()`
- **Validación Básica**: Chequeo de casos edge (sin punto, punto al final)

### 🚀 Posibles Optimizaciones

- **Regex alternativo**: `filename.match(/\.([^.]+)$/)?.[1] || "none"`
- **Split approach**: `filename.split('.').pop()` (con validaciones)
- **Performance**: Para archivos grandes, considerar límites de longitud

## 📚 Recursos y Referencias

- [MDN: String.lastIndexOf()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
- [MDN: String.substring()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
- [FreeCodeCamp: Basic Algorithm Scripting](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/)

---

\_💡 La simplicidad es la máxima sofisticación.
