# Shift Array — Proceso de Resolución y Aprendizaje

## 📝 Enunciado

Given an array and an integer representing how many positions to shift the array, return the shifted array.

A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1]

---

## 🧠 Proceso de Resolución

### 1. Exploración y Casos de Prueba

- **Detectar casos especiales:** ¿Qué pasa si el array está vacío? ¿Si el desplazamiento es negativo o mayor que el tamaño del array? Pensar en estos casos evita errores comunes.

### 2. Normalización del Desplazamiento

- **¿Por qué normalizar?** Si desplazamos más veces que el tamaño del array, en realidad solo importa el resto. Por ejemplo, desplazar 12 posiciones en un array de 5 es igual a desplazar 2 posiciones (12 % 5 = 2).
- **Desplazamientos negativos:** Un número negativo significa que queremos mover los elementos en la dirección opuesta. Convertimos ese número en positivo para simplificar el código, usando `n += length`.
- **Ejemplo visual:** Si tienes `[A, B, C]` y desplazas -1, es como mover todo una posición a la izquierda: `[B, C, A]`. Pero con la normalización, -1 se convierte en 2 (para un array de 3), y desplazamos 2 a la derecha, que es lo mismo.

### 3. Ajuste de Implementación

- **Pensar en el sentido del desplazamiento:** Los tests pueden pedir que los desplazamientos positivos sean a la izquierda y los negativos a la derecha (o viceversa). Es importante leer bien los tests y ajustar el código para que coincida con lo que se espera.
- **Uso de slice y concat:** Para "rotar" el array, lo dividimos en dos partes y las unimos en orden. Por ejemplo, para desplazar 2 posiciones: `[1,2,3,4,5]` → `[3,4,5,1,2]`.
- **Validar con ejemplos:** Probar manualmente con arrays pequeños ayuda a ver si la lógica es correcta antes de confiar solo en los tests.

### 4. Aprendizaje y Reflexión

- **El valor del módulo:** Usar el operador `%` es una técnica poderosa para problemas cíclicos, como rotaciones o movimientos en círculos.
- **Leer y probar:** Leer el enunciado y los tests con atención, y probar con ejemplos propios, es clave para evitar errores de interpretación.
- **No asumir:** Si algo no queda claro, escribir más tests o dibujar el array puede ayudar a visualizar el problema.

---

## 📋 Ejemplos

| Input                       | n   | Output                      |
| --------------------------- | --- | --------------------------- |
| [1,2,3,4,5]                 | 2   | [4,5,1,2,3]                 |
| [1,2,3,4,5]                 | 5   | [1,2,3,4,5]                 |
| [1,2,3,4,5]                 | 0   | [1,2,3,4,5]                 |
| [1,2,3,4,5]                 | 7   | [4,5,1,2,3]                 |
| [1,2,3]                     | 1   | [2,3,1]                     |
| [1,2,3]                     | -1  | [3,1,2]                     |
| ["alpha","bravo","charlie"] | 5   | ["charlie","alpha","bravo"] |
| ["alpha","bravo","charlie"] | -11 | ["bravo","charlie","alpha"] |
| [0,1,2,3,4,5,6,7,8,9]       | 15  | [5,6,7,8,9,0,1,2,3,4]       |

---

## ✅ Tests de ejemplo

```js
describe("shiftArray", () => {
  it("desplaza 2 posiciones", () => {
    expect(shiftArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });
  it("desplaza 5 posiciones (igual al largo)", () => {
    expect(shiftArray([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });
  it("desplaza 0 posiciones", () => {
    expect(shiftArray([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
  });
  it("desplaza 7 posiciones (mayor al largo)", () => {
    expect(shiftArray([1, 2, 3, 4, 5], 7)).toEqual([4, 5, 1, 2, 3]);
  });
});
```

---

## 💻 Implementación

```js
function shiftArray(arr, n) {
  const length = arr.length;
  if (length === 0) return arr;

  // Normalización: convierte n en desplazamiento válido
  n = n % length;
  if (n < 0) {
    n += length;
  }

  // Desplazamiento a la izquierda (como piden los tests)
  const part1 = arr.slice(n);
  const part2 = arr.slice(0, n);
  return part1.concat(part2);
}
```

---

## 📊 Complejidad

- **Tiempo:** $O(n)$, donde $n$ es la longitud del array. Las operaciones `slice` y `concat` recorren el array una vez.
- **Espacio:** $O(n)$, porque se crean dos subarrays y el resultado es un nuevo array del mismo tamaño.

---

## ⚠️ Casos Edge y Consideraciones

- Array vacío: retorna el mismo array.
- Desplazamiento igual a 0 o múltiplo de la longitud: retorna el array original.
- Desplazamiento negativo: se interpreta como desplazamiento hacia la izquierda.
- Desplazamiento mayor que la longitud: se normaliza usando módulo.

---

## 🧩 Conceptos Aplicados y Posibles Optimizaciones

- Uso de `slice()` para dividir arrays sin mutar el original.
- Normalización de índices con módulo para ciclos y desplazamientos.
- Manejo de desplazamientos negativos y positivos, y su equivalencia.
- Validación de la lógica con tests y ejemplos manuales.
- Importancia de leer cuidadosamente los tests y el enunciado para entender el sentido del desplazamiento.
- Para arrays muy grandes y desplazamientos frecuentes, se podría usar una vista circular o manipulación in-place si el problema lo permite.
- Si el array puede ser modificado, se puede usar rotación in-place con reversals para reducir espacio extra a $O(1)$.

---

## 🔎 Ejemplos de Normalización de n

Veamos cómo se normaliza el desplazamiento `n` para distintos valores:

**Ejemplo 1:** n = 7, length = 5

1. n % length = 7 % 5 = 2
2. n >= 0, no se ajusta
3. Resultado: desplazamos 2 posiciones a la derecha

**Ejemplo 2:** n = -3, length = 5

1. n % length = -3 % 5 = -3
2. n < 0, sumamos length: -3 + 5 = 2
3. Resultado: desplazamos 2 posiciones a la derecha (equivalente a 3 a la izquierda)

**Ejemplo 3:** n = 0, length = 5

1. n % length = 0 % 5 = 0
2. n >= 0, no se ajusta
3. Resultado: array original

**Ejemplo 4:** n = 5, length = 5

1. n % length = 5 % 5 = 0
2. n >= 0, no se ajusta
3. Resultado: array original

**Ejemplo 5:** n = -11, length = 3

1. n % length = -11 % 3 = -2
2. n < 0, sumamos length: -2 + 3 = 1
3. Resultado: desplazamos 1 posición a la derecha (equivalente a 2 a la izquierda)

**Ejemplo 6:** n = 12, length = 5

1. n % length = 12 % 5 = 2
2. n >= 0, no se ajusta
3. Resultado: desplazamos 2 posiciones a la derecha (12 es equivalente a 2)

---

## 📚 Recursos y Referencias

- [MDN Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [MDN Array.prototype.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [LeetCode 189. Rotate Array](https://leetcode.com/problems/rotate-array/)
