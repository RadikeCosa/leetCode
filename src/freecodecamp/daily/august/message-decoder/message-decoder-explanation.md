---
title: Message Decoder
source: freecodecamp
series: daily
category: daily august
difficulty: easy
topics: []
createdAt: 2025-11-03
---

# Message Decoder - Análisis y Solución

## Descripción del Problema

Decodificar un mensaje secreto que ha sido codificado desplazando letras en el alfabeto:

1. Un número positivo indica desplazamiento hacia adelante en el alfabeto
2. Un número negativo indica desplazamiento hacia atrás en el alfabeto
3. Se debe preservar mayúsculas/minúsculas
4. Los caracteres no alfabéticos no se decodifican

## Planteamiento y Solución

### Análisis del Problema

El problema se puede descomponer en los siguientes aspectos clave:

1. **Desplazamiento de Letras**:

   - Cada letra del alfabeto se desplaza un número fijo de posiciones.
   - El desplazamiento puede ser positivo (hacia adelante) o negativo (hacia atrás).
   - El alfabeto es cíclico, es decir, después de 'z' vuelve a 'a' y viceversa.

2. **Preservación de Caso**:

   - Las letras mayúsculas deben permanecer mayúsculas.
   - Las letras minúsculas deben permanecer minúsculas.

3. **Caracteres No Alfabéticos**:
   - Los caracteres como espacios, números y signos de puntuación no deben ser modificados.

### Enfoque Utilizado

La solución requerirá:

1. **Iteración por Caracteres**:

   - Recorrer cada carácter del mensaje.
   - Determinar si el carácter es alfabético.

2. **Cálculo del Desplazamiento**:

   - Aplicar el desplazamiento al carácter alfabético.
   - Usar el módulo para manejar el ciclo del alfabeto.

3. **Construcción del Resultado**:
   - Mantener los caracteres no alfabéticos sin cambios.
   - Concatenar los caracteres decodificados para formar el mensaje final.

### Implementación de la Solución

Implementamos una solución funcional que procesa cada carácter del mensaje:

1. **Detección de Tipo de Carácter**:

   - Usamos expresiones regulares `/[a-z]/` y `/[A-Z]/` para identificar letras minúsculas y mayúsculas de manera clara y eficiente.

2. **Cálculo del Desplazamiento**:

   - Para decodificar, aplicamos el shift negativo (ya que el mensaje fue codificado con shift positivo).
   - Calculamos el índice relativo al inicio del alfabeto ('a' o 'A').
   - Aplicamos la fórmula: `newIndex = (index - shift + 26) % 26`
   - Reconstruimos el carácter usando `String.fromCharCode`.

3. **Manejo de Caracteres No Alfabéticos**:
   - Los caracteres que no coinciden con las regex se mantienen sin cambios.

**Código de la Solución:**

```javascript
const decode = (message, shift) => {
  const alphabetSize = 26;

  return message
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) {
        // Para minúsculas: calcular índice con charCode, restar shift, ajustar con módulo
        const base = "a".charCodeAt(0);
        const index = char.charCodeAt(0) - base;
        const newIndex = (index - shift + alphabetSize) % alphabetSize;
        return String.fromCharCode(newIndex + base);
      } else if (/[A-Z]/.test(char)) {
        // Para mayúsculas: mismo proceso
        const base = "A".charCodeAt(0);
        const index = char.charCodeAt(0) - base;
        const newIndex = (index - shift + alphabetSize) % alphabetSize;
        return String.fromCharCode(newIndex + base);
      }
      // Caracteres no alfabéticos permanecen igual
      return char;
    })
    .join("");
};
```

### Complejidad

- **Tiempo**: O(n), donde n es la longitud del mensaje. Procesamos cada carácter una vez con operaciones constantes.
- **Espacio**: O(n) debido a la creación de un array intermedio con `split("")` y `map()`. Podríamos optimizar a O(1) espacio adicional usando un bucle y concatenación, pero sacrificaríamos legibilidad.

### Consideraciones Especiales

- **Manejo de Shifts Grandes**: El uso de `% 26` asegura que shifts mayores a 26 se manejen correctamente (ej: shift=27 equivale a shift=1).
- **Shifts Negativos**: La fórmula `(index - shift + 26) % 26` maneja shifts negativos correctamente, ya que `+26` asegura un resultado positivo antes del módulo.
- **Preservación de Caso**: Tratamos minúsculas y mayúsculas por separado para mantener el caso original.
- **Caracteres Especiales**: Espacios, puntuación y números pasan sin cambios, lo cual es crucial para frases completas.

## Otros Enfoques Útiles

### 1. Enfoque con Strings de Alfabeto (Más Intuitivo)

```javascript
const decode = (message, shift) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const size = 26;

  return message
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) {
        const index = lower.indexOf(char);
        const newIndex = (index - shift + size) % size;
        return lower[newIndex];
      } else if (/[A-Z]/.test(char)) {
        const index = upper.indexOf(char);
        const newIndex = (index - shift + size) % size;
        return upper[newIndex];
      }
      return char;
    })
    .join("");
};
```

**Ventajas**: Muy legible, fácil de entender el concepto de "alfabeto".
**Desventajas**: Crea strings constantes que ocupan memoria (aunque mínima).

### 2. Enfoque con Mapa/Diccionario

```javascript
const decode = (message, shift) => {
  const createMap = (startChar) => {
    const map = {};
    for (let i = 0; i < 26; i++) {
      const original = String.fromCharCode(startChar.charCodeAt(0) + i);
      const shifted = String.fromCharCode(
        startChar.charCodeAt(0) + ((i - shift + 26) % 26)
      );
      map[original] = shifted;
    }
    return map;
  };

  const lowerMap = createMap("a");
  const upperMap = createMap("A");

  return message
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) return lowerMap[char];
      if (/[A-Z]/.test(char)) return upperMap[char];
      return char;
    })
    .join("");
};
```

**Ventajas**: Precomputa el mapeo, útil si se decodifica múltiples mensajes con el mismo shift.
**Desventajas**: Más código, overhead de crear mapas.

### 3. Enfoque Imperativo (Sin Funciones de Alto Orden)

```javascript
const decode = (message, shift) => {
  let result = "";
  const size = 26;

  for (const char of message) {
    if (/[a-z]/.test(char)) {
      const base = "a".charCodeAt(0);
      const index = char.charCodeAt(0) - base;
      const newIndex = (index - shift + size) % size;
      result += String.fromCharCode(newIndex + base);
    } else if (/[A-Z]/.test(char)) {
      const base = "A".charCodeAt(0);
      const index = char.charCodeAt(0) - base;
      const newIndex = (index - shift + size) % size;
      result += String.fromCharCode(newIndex + base);
    } else {
      result += char;
    }
  }

  return result;
};
```

**Ventajas**: O(1) espacio adicional, más eficiente para mensajes muy largos.
**Desventajas**: Menos "funcional", más verboso.

## Lecciones Aprendidas

1. **Importancia de la Validación**: Los tests colaborativos nos ayudaron a identificar edge cases como shifts negativos y caracteres especiales.

2. **Equilibrio Legibilidad vs Eficiencia**: La versión funcional es clara, pero la imperativa es más eficiente en espacio.

3. **Uso de Regex**: Las expresiones regulares hacen el código más expresivo para validaciones simples.

4. **Módulo Aritmético**: La fórmula `(x + n) % n` es clave para manejar ciclos y valores negativos correctamente.

Esta solución demuestra un enfoque balanceado entre claridad, eficiencia y robustez para problemas de cifrado por desplazamiento.
