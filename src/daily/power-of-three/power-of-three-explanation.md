# Power of Three - Documentación

## Descripción del Problema

**LeetCode 326 - Easy**  
**Daily Challenge: 13 de Agosto, 2025**

Dado un entero `n`, devuelve `true` si es una potencia de tres. De lo contrario, devuelve `false`.

Un entero `n` es una potencia de tres si existe un entero `x` tal que `n == 3^x`.

## Restricciones

- `-2^31 <= n <= 2^31 - 1`

## Pregunta de Seguimiento

¿Podrías resolverlo sin usar ningún bucle o recursión?

## Ejemplos y Casos de Prueba

### Ejemplo 1: Potencia válida

**Input:**

```typescript
n = 27;
```

**Output:**

```typescript
true;
```

**Explicación:**
27 = 3^3, por lo tanto es una potencia de tres.

### Ejemplo 2: No es potencia de tres

**Input:**

```typescript
n = 0;
```

**Output:**

```typescript
false;
```

**Explicación:**
No existe ningún x tal que 3^x = 0.

### Ejemplo 3: Potencia de tres básica

**Input:**

```typescript
n = 1;
```

**Output:**

```typescript
true;
```

**Explicación:**
1 = 3^0, por lo tanto es una potencia de tres.

## Análisis del Problema

### Observaciones Clave

1. **Potencias de 3**: 3^0 = 1, 3^1 = 3, 3^2 = 9, 3^3 = 27, 3^4 = 81, ...
2. **Números negativos**: No pueden ser potencias de tres positivas
3. **Cero**: No es una potencia de tres
4. **Número 1**: Es 3^0, por lo tanto sí es una potencia de tres

### Enfoques Posibles

#### Enfoque 1: División iterativa

- Dividir repetidamente entre 3 mientras sea divisible
- Si llegamos a 1, es potencia de tres
- Complejidad: O(log n)

#### Enfoque 2: Recursión

- Caso base: n == 1 → true, n < 1 → false
- Caso recursivo: n % 3 == 0 && isPowerOfThree(n / 3)
- Complejidad: O(log n)

#### Enfoque 3: Logaritmos

- Usar log₃(n) = log(n) / log(3)
- Verificar si el resultado es un entero
- Cuidado con precisión de punto flotante

#### Enfoque 4: Número mágico (sin bucles/recursión)

- Encontrar la mayor potencia de 3 que cabe en un int de 32 bits
- Si n divide a esa potencia, entonces n es potencia de 3
- 3^19 = 1162261467 es la mayor potencia de 3 en rango int32

## Casos Edge Importantes

- `n = 1`: Debe devolver `true` (3^0)
- `n = 0`: Debe devolver `false`
- `n < 0`: Todos deben devolver `false`
- Números muy grandes pero no potencias de 3
- Múltiplos de 3 que no son potencias de 3 (ej: 6, 12, 15)

## Complejidad Esperada

- **Tiempo**: O(log n) para enfoques iterativo/recursivo, O(1) para enfoque matemático
- **Espacio**: O(1) para enfoque iterativo, O(log n) para recursivo debido a la pila

## Reflexiones para Entrevistas Técnicas

1. **Pregunta de seguimiento**: El enfoque sin bucles/recursión usando el número mágico es elegante
2. **Manejo de edge cases**: Importante considerar 0, negativos y el caso especial de 1
3. **Precisión numérica**: Si usas logaritmos, discute los problemas de precisión
4. **Trade-offs**: Discute las ventajas de cada enfoque

## Conceptos Relacionados

- Potencias y exponentes
- Logaritmos
- Divisibilidad
- Recursión vs iteración
- Manejo de casos edge
