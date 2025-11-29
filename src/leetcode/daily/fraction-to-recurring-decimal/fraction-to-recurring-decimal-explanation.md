# LeetCode 166: Fraction to Recurring Decimal

## Análisis del Problema

**Dificultad:** Medium  
**Temas:** Hash Table, Math, String  
**Enlace:** [LeetCode 166](https://leetcode.com/problems/fraction-to-recurring-decimal/)

### Descripción

Este problema requiere convertir una fracción (numerador/denominador) a su representación decimal en formato string. Si la parte decimal se repite, debe encerrarse entre paréntesis. El desafío principal está en detectar cuándo comienza un ciclo de repetición.

### Ejemplos Clave

- `1/2 = "0.5"` → División exacta, sin repetición
- `2/1 = "2"` → Resultado entero
- `4/333 = "0.(012)"` → Repetición cíclica desde el inicio de decimales
- `1/6 = "0.1(6)"` → Primero decimales normales, luego repetición
- `1/7 = "0.(142857)"` → Repetición larga de 6 dígitos

### Restricciones

- `-2^31 <= numerator, denominator <= 2^31 - 1`
- `denominator != 0`
- La respuesta garantizada < 10^4 caracteres

## Enfoque y Algoritmo

### Intuición Principal

El problema se resuelve **simulando división larga manual**, exactamente como se hace en primaria. La clave está en detectar cuándo un **resto se repite**, lo que indica el inicio de un ciclo.

### Algoritmo Paso a Paso

1. **Manejar casos especiales:**

   - División exacta → retornar directamente
   - Determinar signo del resultado

2. **Separar parte entera y decimal:**

   - Parte entera: `Math.floor(numerator / denominator)`
   - Resto inicial: `numerator % denominator`

3. **Simulación de división larga:**

   - Usar HashMap para trackear: `resto → posición en array`
   - Para cada resto:
     - Si ya se vio → insertar paréntesis y terminar
     - Si no → continuar división: `resto * 10`, calcular dígito, nuevo resto

4. **Construcción del resultado:**
   - Combinar: signo + parte entera + "." + decimales

## Implementación Detallada

### Manejo de Signos

```typescript
const isNegative = numerator < 0 !== denominator < 0;
```

Usa XOR lógico: resultado negativo solo si exactamente uno de los números es negativo.

### Detección de Ciclos

```typescript
const remainderMap = new Map<number, number>();
// Clave: resto, Valor: posición donde apareció
```

### Simulación de División Larga

```typescript
remainder *= 10; // "Bajar un 0"
const nextDigit = Math.floor(remainder / denominator); // Calcular dígito
digits.push(nextDigit.toString()); // Agregar al resultado
remainder %= denominator; // Calcular nuevo resto
```

### Inserción de Paréntesis

```typescript
// Cuando se detecta repetición:
digits.splice(repeatIndex, 0, "("); // Insertar "(" donde empezó el ciclo
digits.push(")"); // Agregar ")" al final
```

## Análisis de Complejidad

### Complejidad Temporal: O(d)

- **d** = número de dígitos únicos antes de que se repita un resto
- En el peor caso, d puede ser hasta el valor del denominador
- Cada operación en el HashMap es O(1)
- La inserción con `splice` es O(d) pero solo sucede una vez

### Complejidad Espacial: O(d)

- HashMap almacena hasta d entradas
- Array de dígitos almacena hasta d elementos
- Espacio adicional constante para variables

## Casos Edge Importantes

1. **Cero:** `0/n = "0"` (nunca negativo, incluso si n < 0)
2. **Números negativos:** Todas las combinaciones de signos
3. **División exacta:** Sin decimales, manejo de signos correcto
4. **Repetición inmediata:** Como `1/3 = "0.(3)"`
5. **Repetición tardía:** Como `1/6 = "0.1(6)"`
6. **Repeticiones largas:** Como `1/7 = "0.(142857)"`

## Patrones y Técnicas Utilizadas

### 1. **Simulación de División Larga**

- Técnica fundamental para problemas de conversión numérica
- Multiplicar resto por 10 simula "bajar un cero"

### 2. **HashMap para Detección de Ciclos**

- Patrón común: usar HashMap para detectar elementos repetidos
- Mapear elemento → primera posición de aparición

### 3. **XOR para Manejo de Signos**

- `(a < 0) !== (b < 0)` detecta signos diferentes elegantemente
- Evita múltiples if/else para todas las combinaciones

### 4. **Array Manipulation con Splice**

- `splice(index, 0, element)` para insertar en posición específica
- Más intuitivo que manipulación de strings con slice/concatenación

### 5. **Separación de Concerns**

- Separar lógica: signos → parte entera → parte decimal → construcción final
- Cada paso se puede probar y debuggear independientemente

## Problemas Relacionados

- **LeetCode 7:** Reverse Integer (manejo de overflow)
- **LeetCode 12:** Integer to Roman (conversión numérica)
- **LeetCode 13:** Roman to Integer (parsing numérico)
- **LeetCode 29:** Divide Two Integers (división sin operador /)
