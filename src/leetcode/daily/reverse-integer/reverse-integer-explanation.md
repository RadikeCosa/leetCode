---
title: Reverse Integer
source: leetcode
series: daily
category: december
createdAt: 2025-12-20
difficulty: medium
topics:
  - Math
blogLink: https://blog-astro-rouge.vercel.app/posts/reverse-integer/
problemLink: https://leetcode.com/problems/reverse-integer/description/
---

## Reverse Integer - Análisis y Explicación

## Enunciado del Problema

Dado un entero de 32 bits con signo llamado 'x', devuelve 'x' con sus dígitos invertidos. Si la reversión causa que el valor se salga del rango de enteros de 32 bits con signo $[-2^{31},\ 2^{31}-1]$, entonces devuelve 0.

## Análisis Inicial

### Comprensión del Problema

El problema requiere invertir los dígitos de un número entero dado, conservando el signo y asegurándose de que el resultado permanezca dentro de los límites de un entero de 32 bits con signo.
Invertir los dígitos implica cambiar el orden de los dígitos, por ejemplo, 123 se convierte en 321 y -456 se convierte en -654. Los ceros a la izquierda se eliminan (por ejemplo, 120 → 21).
Si el resultado de la inversión excede el rango permitido, se debe devolver 0.

### Casos de Prueba Identificados

**Ejemplos básicos:**

- Input: x = 123 → Output: 321
- Input: x = -123 → Output: -321
- Input: x = 120 → Output: 21

**Edge cases sugeridos:**

- Input: x = 0 → Output: 0
- Input: x = 1534236469 (overflow) → Output: 0
- Input: x = -2147483648 (mínimo valor) → Output: 0
- Input: x = 1000000003 → Output: 3000000001 (pero si excede el rango, Output: 0)

**Restricciones:**

- $-2^{31} \leq x \leq 2^{31} - 1$

## Desarrollo de la Solución

### Enfoque Elegido

Para invertir los dígitos de un entero, se utiliza un enfoque matemático iterativo:

1. Extraer el último dígito de x usando el operador módulo.
2. Construir el número invertido multiplicando el resultado parcial por 10 y sumando el dígito extraído.
3. Repetir el proceso hasta que x sea 0.
4. Antes de agregar cada dígito, verificar si el resultado parcial excederá los límites de un entero de 32 bits. Si es así, devolver 0 inmediatamente.

Este enfoque evita conversiones a string, es eficiente en tiempo y espacio, y permite controlar el overflow en cada paso.

**Ventajas:**

- Control directo sobre el rango permitido.
- Evita problemas con ceros a la izquierda.
- Es fácil de implementar y entender.

### Implementación Paso a Paso

1. Inicializar una variable `resultado` en 0, que almacenará el número invertido.
2. Guardar el signo original de `x` y trabajar con su valor absoluto para simplificar el proceso. El signo se restaura al final.
3. Mientras `x` sea diferente de 0:
   - Extraer el último dígito con `digito = x % 10`.
   - Eliminar el último dígito de `x` usando división entera (`x = Math.trunc(x / 10)` en JS).
   - Antes de actualizar `resultado`, verificar si `resultado > (2^{31} - 1) / 10` (o el valor negativo para el límite inferior). Si al multiplicar por 10 y sumar el nuevo dígito se excede el rango de 32 bits, devolver 0 inmediatamente.
   - Actualizar `resultado = resultado * 10 + digito`.
4. Restaurar el signo original al resultado.
5. Devolver el resultado final.

Este proceso asegura que cada paso es seguro respecto a overflow y que los ceros a la izquierda se eliminan automáticamente.

**Pseudocódigo:**

```text
resultado = 0
signo = x < 0 ? -1 : 1
x = abs(x)
mientras x != 0:
  digito = x % 10
  x = x // 10
  si resultado > (2^31 - 1) // 10:
    devolver 0
  resultado = resultado * 10 + digito
devolver resultado * signo
```

### Implementación Final

```typescript
export default function reverse(x: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  let resultado = 0;
  const signo = x < 0 ? -1 : 1;
  x = Math.abs(x);
  while (x !== 0) {
    const digito = x % 10;
    x = Math.trunc(x / 10);

    // Verificar overflow antes de actualizar resultado
    if (
      resultado > Math.trunc(INT_MAX / 10) ||
      (resultado === Math.trunc(INT_MAX / 10) && digito > INT_MAX % 10)
    ) {
      return 0;
    }

    resultado = resultado * 10 + digito;
  }
  resultado *= signo;
  if (resultado < INT_MIN || resultado > INT_MAX) {
    return 0;
  }
  return resultado;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es $O(k)$, donde $k$ es la cantidad de dígitos de x. En cada iteración se procesa un dígito, por lo que el tiempo de ejecución es proporcional a la longitud del número. Para enteros de 32 bits, $k$ está acotado por 10, así que en la práctica es tiempo constante.

### Complejidad Espacial

La complejidad espacial es $O(1)$, ya que solo se utilizan variables auxiliares para almacenar el resultado, el signo y el dígito actual. No se requiere espacio adicional proporcional al tamaño de la entrada.

## Casos Edge y Consideraciones

Algunos casos especiales que la solución maneja correctamente:

- Números negativos: el signo se conserva y se restaura al final.
- Números que terminan en ceros: los ceros a la izquierda se eliminan automáticamente (ejemplo: 120 → 21).
- Números que, al invertirse, exceden el rango de 32 bits: se devuelve 0.
- El valor 0: se retorna 0.
- El valor mínimo y máximo de 32 bits: se verifica el overflow antes de cada operación.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

Se aplicaron técnicas de manipulación matemática de dígitos, control de overflow y manejo de signos. El enfoque evita conversiones a string, lo que mejora la eficiencia y el control sobre el proceso. Se utiliza un ciclo while para procesar cada dígito y operadores aritméticos para construir el resultado.

### Posibles Optimizaciones

La solución es óptima para el dominio del problema. Si se permitieran números más grandes, se podría considerar el uso de tipos de datos de mayor capacidad o técnicas de manejo de enteros arbitrarios. Para otros lenguajes, se debe adaptar la verificación de overflow según los límites de sus tipos numéricos.

## Recursos y Referencias

- [LeetCode - Reverse Integer](https://leetcode.com/problems/reverse-integer/)
- [Overflow y límites de enteros en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
