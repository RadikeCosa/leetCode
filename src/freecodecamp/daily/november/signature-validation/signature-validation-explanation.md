---
title: "signature-validation"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-11-02"
---

# Validación de Firmas (Signature Validation)

## 💡 Intuición

El problema requiere validar una "firma" basada en la suma de valores numéricos asignados a caracteres en dos cadenas. La clave está en:

1. Asignar valores correctos a cada carácter
2. Manejar mayúsculas y minúsculas de manera consistente
3. Ignorar caracteres no alfabéticos

## 🧩 Enfoque Paso a Paso

### 1. Asignación de Valores a Caracteres

```javascript
function getCharValue(char) {
  const lowerChar = char.toLowerCase();
  const lowerCode = lowerChar.charCodeAt(0);

  if (lowerCode >= 97 && lowerCode <= 122) {
    return lowerCode - 96;
  }

  return 0;
}
```

- Convertimos todo a minúsculas primero para asegurar consistencia
- Usamos `charCodeAt(0)` para obtener el código ASCII:
  - 'a' = 97 → valor 1
  - 'z' = 122 → valor 26
- Caracteres no alfabéticos retornan 0

### 2. Cálculo de la Firma

```javascript
function calculateSignature(msg, secret) {
  let sum = 0;

  for (const char of msg) {
    sum += getCharValue(char);
  }

  for (const char of secret) {
    sum += getCharValue(char);
  }

  return sum;
}
```

- Iteramos sobre cada carácter de ambas cadenas
- Acumulamos la suma de sus valores
- No necesitamos arrays o estructuras adicionales

### 3. Validación Final

```javascript
return calculatedSignature === signature;
```

- Comparación simple de igualdad con la firma proporcionada

## 📊 Complejidad

- **Tiempo**: O(n + m)
  - n = longitud del mensaje
  - m = longitud de la clave
  - Cada carácter se procesa una vez
- **Espacio**: O(1)
  - Solo usamos variables primitivas
  - No usamos estructuras de datos adicionales

## 🔄 Casos Especiales

1. **Mayúsculas y Minúsculas**

   - "Foo" y "foo" dan el mismo valor
   - Se maneja convirtiendo todo a minúsculas

2. **Caracteres No Alfabéticos**

   - Números, símbolos, espacios = 0
   - Simplifica el manejo de casos especiales

3. **Cadenas Vacías**
   - Retornan suma 0
   - Manejo natural por el bucle

## 🚀 Posibles Optimizaciones

1. **Cache de Valores**

   ```javascript
   const charValues = new Map();

   function getCharValue(char) {
     const lowerChar = char.toLowerCase();
     if (!charValues.has(lowerChar)) {
       const code = lowerChar.charCodeAt(0);
       charValues.set(lowerChar, code >= 97 && code <= 122 ? code - 96 : 0);
     }
     return charValues.get(lowerChar);
   }
   ```

   - Pros: Evita recálculos para caracteres repetidos
   - Cons: Usa memoria adicional

2. **Procesamiento en Paralelo**

   ```javascript
   async function calculateSignature(msg, secret) {
     const [msgSum, secretSum] = await Promise.all([
       calculateStringValue(msg),
       calculateStringValue(secret),
     ]);
     return msgSum + secretSum;
   }
   ```

   - Pros: Mejor rendimiento para cadenas muy largas
   - Cons: Overhead para cadenas cortas

3. **Lookup Table**

   ```javascript
   const VALUES = {
     a: 1, b: 2, ..., z: 26,
     A: 1, B: 2, ..., Z: 26
   };

   function getCharValue(char) {
     return VALUES[char] || 0;
   }
   ```

   - Pros: Acceso directo sin cálculos
   - Cons: Uso de memoria fijo

## 🎯 Aprendizajes

1. **Consistencia vs Flexibilidad**

   - El manejo de mayúsculas muestra la importancia de seguir el ejemplo del problema por encima de interpretaciones literales de las reglas

2. **Simplicidad es Clave**

   - La solución final es más simple que versiones anteriores que intentaban manejar mayúsculas/minúsculas por separado

3. **Testing como Guía**
   - Los tests ayudaron a identificar inconsistencias en la interpretación del problema
   - Documentar los tests con comentarios clarifica las expectativas

## 📝 Notas

- La solución actual prioriza legibilidad y mantenibilidad sobre optimización extrema
- Para casos de uso típicos (strings cortas), las optimizaciones probablemente no sean necesarias
- El manejo de caracteres internacionales podría ser una extensión interesante

## Enunciado

Dado un mensaje, una clave secreta y un número de firma, determina si la firma es válida utilizando el siguiente método de codificación:

- Las letras en el mensaje y la clave secreta tienen los siguientes valores:
  - Las letras de `a` a `z` tienen valores de 1 a 26 respectivamente.
  - Las letras de `A` a `Z` tienen valores de 27 a 52 respectivamente.
  - Todos los demás caracteres no tienen valor.
- Calcula la firma tomando la suma del mensaje más la suma de la clave secreta.

### Ejemplo

Dado el mensaje `"foo"` y la clave secreta `"bar"`, la firma sería 57:

```plaintext
f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57
```

Verifica si la firma calculada coincide con la firma proporcionada.

## Constraints

1. El mensaje y la clave secreta pueden contener cualquier carácter.
2. La firma proporcionada es un número entero positivo.

## Intuición

El problema se centra en asignar valores numéricos a las letras del alfabeto y calcular una suma total basada en estas asignaciones. Esto implica ignorar cualquier carácter que no sea una letra y manejar tanto mayúsculas como minúsculas de manera consistente.

## Enfoque

1. **Asignación de valores**: Crear un sistema para asignar valores a las letras según las reglas dadas.
2. **Filtrado de caracteres**: Ignorar cualquier carácter que no sea una letra.
3. **Cálculo de la suma**: Sumar los valores de las letras tanto del mensaje como de la clave secreta.
4. **Comparación**: Comparar la suma calculada con la firma proporcionada.

## Complejidad

- **Tiempo**: Depende de la longitud del mensaje y la clave secreta. Si `n` es la longitud del mensaje y `m` la de la clave secreta, la complejidad es `O(n + m)`.
- **Espacio**: Uso constante de memoria adicional, es decir, `O(1)`.

## Notas

- Es importante manejar correctamente las mayúsculas y minúsculas para evitar errores en la asignación de valores.
- Los casos edge incluyen cadenas vacías, caracteres no alfabéticos y entradas grandes.