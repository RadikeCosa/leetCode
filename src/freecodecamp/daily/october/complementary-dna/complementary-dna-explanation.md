---
title: "Complementary Dna"
difficulty: "easy"
topics:
  - Array
  - String
  - Hash Table
  - Conversion
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-25"
---

# Análisis del Problema: Complementary DNA

## Enunciado

Dado un string que representa una secuencia de ADN, retornar su cadena complementaria usando las siguientes reglas:

El ADN consiste de las letras "A", "C", "G", y "T".
Las letras "A" y "T" se complementan entre sí.
Las letras "C" y "G" se complementan entre sí.
Por ejemplo, dado "ACGT", retornar "TGCA".

## Análisis

Este problema requiere transformar cada carácter de una cadena de ADN según reglas específicas de complementariedad. Los pasos principales son:

1. **Recorrer cada carácter**: Procesar cada letra de la cadena de entrada
2. **Aplicar reglas de complementariedad**:
   - "A" → "T"
   - "T" → "A"
   - "C" → "G"
   - "G" → "C"
3. **Construir la cadena resultante**: Unir todos los caracteres complementarios
4. **Preservar el orden**: La cadena resultante debe mantener el mismo orden que la original

Casos especiales a considerar:

- La cadena puede tener cualquier longitud
- Solo contiene los caracteres válidos "A", "C", "G", "T"
- El resultado debe tener exactamente la misma longitud que la entrada
- Es sensible a mayúsculas/minúsculas (todos son mayúsculas)

## Solución

La solución implementada utiliza métodos funcionales de JavaScript para transformar cada carácter de la cadena de ADN:

### Paso 1: Definir el mapeo de complementos

```javascript
const pairs = { A: "T", T: "A", C: "G", G: "C" };
```

- Creamos un objeto que mapea cada nucleótido a su complemento
- Esto actúa como una "tabla de traducción" rápida y eficiente

### Paso 2: Convertir string a array de caracteres

```javascript
strand.split("");
```

- `split("")` divide el string en un array de caracteres individuales
- `"ACGT"` se convierte en `["A", "C", "G", "T"]`
- Necesario porque los strings son inmutables en JavaScript

### Paso 3: Transformar cada carácter

```javascript
.map((char) => pairs[char])
```

- `map()` aplica una función a cada elemento del array
- Para cada carácter, busca su complemento en el objeto `pairs`
- `["A", "C", "G", "T"]` se transforma en `["T", "G", "C", "A"]`

### Paso 4: Unir el array en un string

```javascript
.join("")
```

- `join("")` combina todos los elementos del array en un string
- `["T", "G", "C", "A"]` se convierte en `"TGCA"`
- El parámetro `""` asegura que no se agreguen separadores

### Resultado final

```javascript
return strand
  .split("")
  .map((char) => pairs[char])
  .join("");
```

- Todo se encadena en una sola línea funcional
- Cada método pasa su resultado al siguiente

## Enfoques alternativos

### Alternativa 1: Bucle for con concatenación

```javascript
function complementaryDNA(strand) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  let result = "";

  for (let char of strand) {
    result += pairs[char];
  }

  return result;
}
```

**Ventajas:** Simple, fácil de entender
**Desventajas:** Crea múltiples strings temporales (menos eficiente para strings largos)

### Alternativa 2: Bucle for con array

```javascript
function complementaryDNA(strand) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  const result = [];

  for (let char of strand) {
    result.push(pairs[char]);
  }

  return result.join("");
}
```

**Ventajas:** Más eficiente que concatenación de strings
**Desventajas:** Más código que el enfoque funcional

### Alternativa 3: Usando replace() con función

```javascript
function complementaryDNA(strand) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return strand.replace(/[ATCG]/g, (match) => pairs[match]);
}
```

**Ventajas:** Muy conciso, usa expresiones regulares
**Desventajas:** Menos legible para principiantes

### Alternativa 4: Usando Map object

```javascript
function complementaryDNA(strand) {
  const pairs = new Map([
    ["A", "T"],
    ["T", "A"],
    ["C", "G"],
    ["G", "C"],
  ]);

  return strand
    .split("")
    .map((char) => pairs.get(char))
    .join("");
}
```

**Ventajas:** Usa Map en lugar de objeto plano
**Desventajas:** Sintaxis más verbosa

## Complejidad

- **Tiempo**: O(n) donde n es la longitud del string (un recorrido lineal)
- **Espacio**: O(n) para el array intermedio creado por `split()`

## Aprendizajes

- **Métodos funcionales encadenados**: `split().map().join()` para transformación de strings
- **Objetos como mapas**: Uso de objetos literales para mapeo rápido de valores
- **Inmutabilidad de strings**: Por qué necesitamos convertir a array para transformación
- **Expresiones regulares**: Alternativa con `replace()` para substituciones complejas
- **Trade-offs de rendimiento**: Concatenación vs arrays para construcción de strings
- **Map vs Object**: Diferentes estructuras de datos para mapeo en JavaScript