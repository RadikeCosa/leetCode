# Análisis: Decimal to Binary

## Enunciado del Problema

Dado un número entero no negativo, devolver su representación binaria como una cadena de texto.

## Solución Implementada

### Algoritmo Utilizado

La solución implementa el algoritmo clásico de conversión decimal a binario mediante división repetida por 2:

```javascript
function toBinary(decimal) {
  if (decimal === 0) return "0";

  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary; // Prepend remainder
    decimal = Math.floor(decimal / 2); // Update decimal
  }

  return binary;
}
```

### Explicación Paso a Paso

Para convertir 12 a binario:

```
12 ÷ 2 = 6  resto 0  → binary = "0"
 6 ÷ 2 = 3  resto 0  → binary = "00"
 3 ÷ 2 = 1  resto 1  → binary = "100"
 1 ÷ 2 = 0  resto 1  → binary = "1100"
```

Resultado final: "1100"

### Componentes de la Solución

**1. Caso especial del cero:**

```javascript
if (decimal === 0) return "0";
```

- Maneja el caso edge donde el número es cero
- Retorna directamente "0" sin entrar al bucle

**2. Inicialización:**

```javascript
let binary = "";
```

- Variable que acumulará la representación binaria
- Comienza vacía y se construye bit por bit

**3. Bucle principal:**

```javascript
while (decimal > 0) {
```

- Continúa mientras haya bits por procesar
- Se detiene cuando decimal llega a 0

**4. Extracción del bit menos significativo:**

```javascript
binary = (decimal % 2) + binary;
```

- `decimal % 2` da el resto: 0 o 1
- Se prependea (agrega al inicio) para mantener el orden correcto
- Los bits se van agregando de derecha a izquierda

**5. Preparación para siguiente iteración:**

```javascript
decimal = Math.floor(decimal / 2);
```

- División entera por 2
- Elimina el bit menos significativo procesado
- Prepara el siguiente bit para la próxima iteración

## Análisis de Complejidad

### Complejidad Temporal

- **O(log n)**: El número de iteraciones es proporcional al logaritmo base 2 del número
- Para n = 1,000,000: ~20 iteraciones
- Para n = 1,000,000,000: ~30 iteraciones

### Complejidad Espacial

- **O(log n)**: Espacio para almacenar la cadena resultante
- En JavaScript, las strings son inmutables, por lo que cada concatenación crea una nueva string

## Alternativas Consideradas

### Usando Array y Reverse

```javascript
function toBinary(decimal) {
  if (decimal === 0) return "0";

  const bits = [];
  while (decimal > 0) {
    bits.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  return bits.reverse().join("");
}
```

**Ventajas**: Más eficiente en memoria para números grandes
**Desventajas**: Crea un array intermedio

### Usando toString(2)

```javascript
function toBinary(decimal) {
  return decimal.toString(2);
}
```

**Ventajas**: Una línea, muy simple
**Desventajas**: No pedagógica, no muestra el algoritmo

## Tests Implementados

### Tests de los Ejemplos

- `toBinary(5)` → `"101"`
- `toBinary(12)` → `"1100"`
- `toBinary(50)` → `"110010"`
- `toBinary(99)` → `"1100011"`

### Tests de Casos Edge

- `toBinary(0)` → `"0"` (caso especial)
- `toBinary(1)` → `"1"` (potencia de 2 más pequeña)
- `toBinary(2)` → `"10"` (primera potencia de 2 par)
- `toBinary(8)` → `"1000"` (potencia de 2 más grande en tests)

## Validación de la Solución

La implementación actual:

- ✅ Maneja correctamente todos los casos de prueba
- ✅ Tiene complejidad óptima O(log n)
- ✅ Es legible y fácil de entender
- ✅ Maneja el caso edge del cero
- ✅ Usa ES modules modernos

## Posibles Optimizaciones Futuras

1. **Bit shifting**: Usar operaciones a nivel de bits para mayor eficiencia
2. **Memoización**: Cache de resultados para números recurrentes
3. **Validación de input**: Verificar que el input sea un entero no negativo

## Conclusión

Esta solución implementa correctamente el algoritmo de conversión decimal a binario, es eficiente, legible y bien testeada. El enfoque iterativo con construcción de string desde el inicio es simple y efectivo para este problema.

### ¿Qué es un número binario?

Un número binario utiliza únicamente los dígitos 0 y 1 para representar cualquier número. Es el sistema numérico fundamental que utilizan las computadoras.

### Algoritmo de Conversión

Para convertir un número decimal a binario, se debe:

1. Dividir repetidamente el número entre 2
2. Registrar el resto de cada división (0 o 1)
3. Continuar hasta que el número llegue a cero
4. Leer los restos desde el último registrado hasta el primero

### Ejemplo Detallado: Convertir 12 a Binario

```
12 ÷ 2 = 6  resto 0
 6 ÷ 2 = 3  resto 0
 3 ÷ 2 = 1  resto 1
 1 ÷ 2 = 0  resto 1
```

Los restos en orden inverso: 1, 1, 0, 0
Resultado: "1100"

## Casos Especiales a Considerar

- **Cero (0)**: El caso más simple, debería devolver "0"
- **Potencias de 2**: Números como 1, 2, 4, 8, etc. tienen representaciones binarias simples
- **Números grandes**: Hasta 1,000,000 según las restricciones

## Estrategia de Implementación

### Enfoque Iterativo

1. Inicializar una cadena vacía para almacenar los bits
2. Mientras el número sea mayor que 0:
   - Calcular el resto de dividir por 2
   - Agregar el resto al inicio de la cadena (o usar un array y reverse)
   - Dividir el número entre 2 (división entera)
3. Manejar el caso especial del cero

### Complejidad

- **Tiempo**: O(log n) - el número de divisiones es proporcional al logaritmo del número
- **Espacio**: O(log n) - espacio para almacenar la cadena resultante

## Posibles Implementaciones

### Opción 1: Usando Array y Reverse

```javascript
function toBinary(decimal) {
  if (decimal === 0) return "0";

  const bits = [];
  while (decimal > 0) {
    bits.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  return bits.reverse().join("");
}
```

### Opción 2: Construyendo String desde el Inicio

```javascript
function toBinary(decimal) {
  if (decimal === 0) return "0";

  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}
```

## Tests Necesarios

Basándonos en los ejemplos proporcionados y casos edge:

1. `toBinary(5)` debería devolver `"101"`
2. `toBinary(12)` debería devolver `"1100"`
3. `toBinary(50)` debería devolver `"110010"`
4. `toBinary(99)` debería devolver `"1100011"`
5. `toBinary(0)` debería devolver `"0"` (caso edge)
6. `toBinary(1)` debería devolver `"1"` (potencia de 2)
7. `toBinary(2)` debería devolver `"10"` (otra potencia de 2)

## Preguntas para Reflexionar

- ¿Cómo manejarías números muy grandes?
- ¿Qué sucede si el input no es un número entero?
- ¿Es necesario validar el input según las restricciones?
- ¿Cuál implementación es más eficiente en términos de memoria?
