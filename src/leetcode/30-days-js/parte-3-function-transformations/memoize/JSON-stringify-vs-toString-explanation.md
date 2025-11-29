---
name: JSON-stringify-vs-toString
category: 30-days-js
topics: [Serialization, Array, Memoization]
source: leetcode
series: parte-3-function-transformations
createdAt: 2025-09-08
---

# JSON.stringify vs toString: Explicación Detallada

## 🎯 Diferencias Fundamentales

### **toString()**

Convierte un array en una string separada por comas:

```javascript
const array1 = [2, 2];
const array2 = [1, 2];
const array3 = [22];

console.log(array1.toString()); // "2,2"
console.log(array2.toString()); // "1,2"
console.log(array3.toString()); // "22"
```

### **JSON.stringify()**

Convierte un array en su representación JSON completa:

```javascript
const array1 = [2, 2];
const array2 = [1, 2];
const array3 = [22];

console.log(JSON.stringify(array1)); // "[2,2]"
console.log(JSON.stringify(array2)); // "[1,2]"
console.log(JSON.stringify(array3)); // "[22]"
```

## ⚠️ **¿Por qué toString() puede ser problemático?**

### **Problema 1: Ambigüedad**

```javascript
const caso1 = [2, 2];
const caso2 = [22];

// toString():
caso1.toString(); // "2,2"
caso2.toString(); // "22"
// ¿Y si tenemos [222]? También sería "222"

// JSON.stringify():
JSON.stringify(caso1); // "[2,2]"
JSON.stringify(caso2); // "[22]"
// Completamente diferentes ✅
```

### **Problema 2: Arrays vacíos y elementos especiales**

```javascript
const vacio = [];
const conNull = [null, undefined];
const conString = ["hello", "world"];

// toString():
vacio.toString(); // "" (string vacía)
conNull.toString(); // "," (solo coma)
conString.toString(); // "hello,world"

// JSON.stringify():
JSON.stringify(vacio); // "[]"
JSON.stringify(conNull); // "[null,null]"
JSON.stringify(conString); // '["hello","world"]'
```

### **Problema 3: Arrays anidados**

```javascript
const anidado1 = [[1, 2], 3];
const anidado2 = [1, 2, 3];

// toString():
anidado1.toString(); // "1,2,3"
anidado2.toString(); // "1,2,3"
// ¡Son iguales! 🚫

// JSON.stringify():
JSON.stringify(anidado1); // "[[1,2],3]"
JSON.stringify(anidado2); // "[1,2,3]"
// Diferentes ✅
```

## 🎯 **Casos específicos para tu memoización:**

### **Función sum(a, b)**

```javascript
// Argumentos que podrían causar problemas con toString():
sum(2, 2); // toString: "2,2"
sum(22); // toString: "22"
// Si 22 fuera un argumento válido, habría colisión

// Con JSON.stringify no hay problema:
JSON.stringify([2, 2]); // "[2,2]"
JSON.stringify([22]); // "[22]"
```

### **Función factorial(n)**

```javascript
// Casos edge que toString maneja mal:
factorial(0); // toString: "0"
factorial(""); // toString: "" (string vacía)

// JSON.stringify es más seguro:
JSON.stringify([0]); // "[0]"
JSON.stringify([""]); // '[""]'
```

## 📊 **Comparación práctica:**

| Caso         | Array        | toString() | JSON.stringify() | ¿Único?     |
| ------------ | ------------ | ---------- | ---------------- | ----------- |
| `[2, 2]`     | `[2, 2]`     | `"2,2"`    | `"[2,2]"`        | ✅          |
| `[22]`       | `[22]`       | `"22"`     | `"[22]"`         | ✅          |
| `[1, 2, 3]`  | `[1, 2, 3]`  | `"1,2,3"`  | `"[1,2,3]"`      | ✅          |
| `[[1,2], 3]` | `[[1,2], 3]` | `"1,2,3"`  | `"[[1,2],3]"`    | ❌ toString |
| `[]`         | `[]`         | `""`       | `"[]"`           | ✅          |

## ✅ **Por qué elegimos JSON.stringify:**

1. **Determinístico**: Siempre produce la misma salida para la misma entrada
2. **Único**: No hay colisiones entre diferentes arrays
3. **Completo**: Preserva la estructura completa del array
4. **Estándar**: Es el método recomendado para serialización
5. **Robusto**: Maneja casos edge correctamente

## 🔧 **En tu implementación:**

```typescript
// ✅ CORRECTO:
const key = JSON.stringify(args);

// ❌ PROBLEMÁTICO:
const key = args.toString();
```

**Tu elección de `JSON.stringify` fue perfecta** porque garantiza que cada combinación única de parámetros genere una clave única, evitando colisiones en el cache y asegurando que la memoización funcione correctamente en todos los casos.
