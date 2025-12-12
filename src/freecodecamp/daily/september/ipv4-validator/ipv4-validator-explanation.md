---
title: Ipv4 Validator
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-12
difficulty: easy
topics:
  - strings
  - validation
  - parsing
blogLink: https://blog-astro-rouge.vercel.app/posts/ipv4-validator/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-05/
---

## Ipv4 Validator - Análisis y Explicación

## Enunciado del Problema

Dado un string, debés determinar si es una dirección IPv4 válida. Una dirección IPv4 consiste en cuatro números enteros separados por puntos. Cada número debe cumplir las siguientes condiciones:

- Está entre 0 y 255, inclusive.
- No puede tener ceros a la izquierda (por ejemplo, 0 es válido, 01 no).
- Solo puede contener dígitos numéricos (0-9).

## Análisis Inicial

### Comprensión del Problema

La función debe recibir un string y determinar si es una dirección IPv4 válida según las reglas especificadas: debe contener cuatro números enteros separados por puntos, cada número debe estar entre 0 y 255, no puede tener ceros a la izquierda y solo puede contener dígitos numéricos.

### Casos de Prueba Identificados

Algunos casos de prueba relevantes para este problema son:

- "192.168.1.1" → Válido (cuatro números entre 0 y 255, sin ceros a la izquierda)
- "255.255.255.255" → Válido (límite superior)
- "0.0.0.0" → Válido (límite inferior)
- "192.168.01.1" → Inválido (tiene un cero a la izquierda en el tercer bloque)
- "256.100.100.100" → Inválido (primer bloque fuera de rango)
- "192.168.1" → Inválido (menos de cuatro bloques)
- "192.168.1.1.1" → Inválido (más de cuatro bloques)
- "192.168.a.1" → Inválido (caracteres no numéricos)
- "192.168.1.-1" → Inválido (número negativo)
- "192.168.1. 1" → Inválido (espacio en uno de los bloques)
- "192.168.1.01" → Inválido (cero a la izquierda en el último bloque)
- "00.0.0.0" → Inválido (cero a la izquierda en el primer bloque)

## Desarrollo de la Solución

### Enfoque Elegido

La estrategia consiste en dividir el string usando el carácter punto (`.`) para obtener los cuatro bloques que componen la dirección IPv4. Luego, se verifica que:

- Existan exactamente cuatro bloques.
- Cada bloque contenga solo dígitos numéricos.
- Ningún bloque tenga ceros a la izquierda (excepto el valor "0").
- El valor numérico de cada bloque esté en el rango de 0 a 255.

Para validar que un bloque contiene solo dígitos, se utiliza una expresión regular (`/^\d+$/`). La verificación de ceros a la izquierda se realiza comprobando si el bloque tiene más de un carácter y comienza con "0". Finalmente, se convierte el bloque a número para chequear el rango permitido.

### Implementación Paso a Paso

1. Dividir el string de entrada usando `split('.')`.
2. Verificar que el array resultante tenga exactamente 4 elementos.
3. Iterar sobre cada bloque y para cada uno:
   - Comprobar que solo contenga dígitos (`/^\d+$/`).
   - Verificar que no tenga ceros a la izquierda (si la longitud es mayor a 1 y empieza con "0").
   - Convertir el bloque a número y chequear que esté entre 0 y 255.
4. Si todos los bloques cumplen las condiciones, la dirección es válida; de lo contrario, es inválida.

### Código Final

```javascript
function isValidIPv4(ipv4) {
  const blocks = ipv4.split(".");
  if (blocks.length !== 4) return false;
  for (const block of blocks) {
    if (!/^\d+$/.test(block)) return false; // Solo dígitos
    if (block.length > 1 && block.charAt(0) === "0") return false; // Cero a la izquierda
    const num = Number(block);
    if (num < 0 || num > 255) return false;
  }
  return true;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de la función es $O(n)$, donde $n$ es la cantidad total de caracteres en el string de entrada. Esto se debe a que:

- El método `split('.')` recorre todo el string una vez.
- El bucle itera exactamente 4 veces (una por bloque), y en cada iteración se realizan operaciones de comparación y conversión que son $O(1)$ respecto al tamaño del bloque (ya que los bloques son cortos).

### Complejidad Espacial

La complejidad espacial es $O(1)$, ya que la función utiliza una cantidad constante de espacio adicional:

- El array de bloques siempre tiene 4 elementos como máximo.
- No se utilizan estructuras de datos adicionales proporcionales al tamaño de la entrada.

## Casos Edge y Consideraciones

- Strings vacíos o con espacios: `"   "`, `""` → Inválido.
- Bloques vacíos: `"192..1.1"`, `"192.168..1"` → Inválido.
- Caracteres especiales o letras: `"192.168.a.1"`, `"192.168.1.@"` → Inválido.
- Números negativos: `"192.168.1.-1"` → Inválido.
- Ceros a la izquierda: `"01.2.3.4"`, `"192.168.01.1"` → Inválido.
- Más o menos de 4 bloques: `"192.168.1"`, `"192.168.1.1.1"` → Inválido.
- Bloques fuera de rango: `"256.100.100.100"`, `"192.168.1.300"` → Inválido.
- Espacios en los bloques: `"192.168.1. 1"`, `" 192.168.1.1"` → Inválido.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de strings con `split`.
- Validación de patrones con expresiones regulares.
- Conversión de strings a números y chequeo de rangos.
- Validación de condiciones múltiples en estructuras iterativas.

### Posibles Optimizaciones

- Se podría usar una única expresión regular compleja para validar toda la dirección, pero la solución actual es más legible y fácil de mantener.
- Si se espera procesar grandes volúmenes de datos, se puede optimizar evitando la conversión a número si el bloque ya es inválido por longitud o formato.

## Recursos y Referencias

- [Documentación de IPv4 - Wikipedia](https://es.wikipedia.org/wiki/IPv4)
- [Expresiones regulares en JavaScript - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
