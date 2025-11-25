# Binary Prefix Divisible By Five - Análisis y Explicación

## Enunciado del Problema

Dado un array `nums` que contiene solo 0s y 1s, representa un número binario (de izquierda a derecha).  
Para cada prefijo del array (es decir, `nums[0..i]` para cada `i`), interpretar ese prefijo como un número binario y determinar si es divisible por 5.

Un **prefijo** de un array es cualquier segmento que comienza en el primer elemento y termina en una posición intermedia o final. Por ejemplo, si el array es `[1, 0, 1, 1]`, sus prefijos son `[1]`, `[1, 0]`, `[1, 0, 1]` y `[1, 0, 1, 1]`. En este problema, cada prefijo se interpreta como un número binario, y el objetivo es determinar si ese número es divisible por 5. Analizar todos los prefijos permite evaluar progresivamente cómo cambia la divisibilidad a medida que se agregan más bits al número.

Devolver una lista de booleanos donde `answer[i]` es `true` si el prefijo hasta el índice `i` forma un número divisible por 5.

**Restricciones:**

- `1 <= nums.length <= 10⁵`
- `nums[i]` es `0` o `1`

## Análisis Inicial

### Comprensión del Problema

Una idea natural al leer el problema es:  
“Voy a ir formando el número bit a bit, lo convierto a decimal y hago `%  5` para ver si es divisible por 5”.

Eso funciona perfectamente… mientras el array sea corto.  
Pero con hasta 100 000 bits, el número sería demasiado grande para ser manejado eficientemente.

**La gran observación que resuelve todo:**

No necesitamos saber cuál es el número completo.  
¡Solo necesitamos saber si ese número es divisible por 5!  
Y para saber si un número es divisible por 5, basta con conocer el **resto al dividirlo entre 5**.

Lo mejor de todo: cuando agregamos un nuevo bit a la izquierda, podemos calcular el **nuevo resto** usando solamente el resto anterior.  
Es como si hiciéramos esta operación mágica:

nuevo_resto = (resto_viejo × 2 + bit_nuevo) % 5

¿Por qué funciona esto?

Porque en binario, añadir un bit a la izquierda es exactamente multiplicar el número anterior por 2 y sumar el nuevo bit.  
Y las matemáticas nos dicen que:

> (a × b + c) % m = ((a % m) × (b % m) + (c % m)) % m

Como 2 es muy pequeño, (resto_viejo × 2) nunca se hace grande, y el `% 5` mantiene el resultado siempre entre 0 y 4.  
Así, aunque el número real sea enorme, nuestro “resto” siempre cabe en una sola variable pequeña.

En resumen:  
En vez de guardar un número de 100 000 bits, guardamos solo un numerito del 0 al 4.  
¡Y con eso es suficiente para saber si cada prefijo es divisible por 5!

## Desarrollo de la Solución

### Enfoque Elegido

La estrategia consiste en calcular el módulo 5 de forma incremental mientras recorremos el array. Cada vez que se añade un nuevo bit, el valor anterior se multiplica por 2 y se suma el bit actual. Es decir:

nuevo_valor = valor_anterior \* 2 + bit_actual

Como solo interesa el resto módulo 5, actualizamos así:

nuevo_resto = (resto_anterior \* 2 + bit_actual) % 5

De esta manera, el resto nunca supera 4 y se evita cualquier problema de overflow, independientemente del tamaño del array.

### Implementación Paso a Paso

1. Inicializar una variable que lleve el resto actual (empezando en 0).
2. Recorrer cada bit del array de izquierda a derecha.
3. En cada paso:
   - Actualizar el resto: `(resto * 2 + bit) % 5`
   - Si el nuevo resto es 0 → el prefijo actual es divisible por 5 → agregar `true`
   - Si no → agregar `false`
4. Devolver la lista de resultados.

function prefixesDivBy5(nums: number[]): boolean[] {
const result: boolean[] = [];
let remainder = 0; // Este será siempre nuestro número actual % 5

    for (const bit of nums) {
        // Actualizamos el resto: (remainder * 2 + bit) % 5
        // Es como si hiciéramos: numero = numero * 2 + bit, pero solo guardamos el módulo 5
        remainder = (remainder * 2 + bit) % 5;

        // Si el resto es 0, el número formado hasta ahora es divisible por 5
        result.push(remainder === 0);
    }

    return result;

}

**Puntos clave de diseño:**

- Usar solo una variable para el resto → espacio constante.
- Operación `% 5` en cada paso → evita números gigantes.
- Lógica extremadamente simple y legible.
- No se construye ningún string ni número grande.

## Análisis de Complejidad

### Complejidad Temporal

**O(n)** → recorremos el array una sola vez, y cada operación (multiplicación por 2, suma, módulo) es O(1).

### Complejidad Espacial

**O(1)** auxiliar (solo una variable para el resto) + **O(n)** para almacenar el resultado → **O(n)** total, que es óptimo e inevitable (hay que devolver una lista de tamaño n).

## Casos Edge y Consideraciones

- **Longitud 1:** `[0]` → `true`, `[1]` → `false`
- **Solo ceros:** cualquier cantidad → todos `true` (el número es 0, que es divisible por 5)
- **Números muy largos (10⁵ bits):** sin el truco del módulo, cualquier lenguaje colapsaría por overflow o tiempo.
- **Prefijos que forman 5, 10, 15, 20... en binario:** el algoritmo los detecta correctamente sin necesidad de conversión completa.
- **Leading zeros:** no afectan el valor numérico, pero sí forman parte del prefijo → se manejan naturalmente.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- **Aritmética modular:** aprovechar que `(a + b) % m = (a%m + b%m) % m` y `(a * b) % m = (a%m * b%m) % m`
- **Actualización incremental de estado:** patrón clásico en problemas de prefijos/sufijos binarios
- **Optimización por propiedades matemáticas:** en vez de resolver el problema "tal cual", lo reducimos a uno más simple usando álgebra
- **Evitar overflow de forma elegante:** no con BigInteger, sino cambiando el problema a uno que nunca necesita números grandes

### Posibles Optimizaciones

La solución actual ya es **óptima** en tiempo y espacio auxiliar.  
Algunas personas usan operaciones bit a bit como `resto = (resto << 1) + bit` y luego `% 5`, pero:

- En lenguajes de alto nivel, `<<` puede ser más lento que `*2`
- La claridad del código baja
- El ahorro es insignificante

→ **La versión con `*2` es más clara, igual de rápida y más portable.**

## Recursos y Referencias

- Problema original: https://leetcode.com/problems/binary-prefix-divisible-by-5/
- Temas relacionados: Modular Arithmetic, Prefix Processing, Binary Number Manipulation
- Patrones similares:
  - "Check if number is divisible by 3" usando suma de dígitos
  - Problemas de "divisible by 11", "by 7", etc. con reglas de módulo
