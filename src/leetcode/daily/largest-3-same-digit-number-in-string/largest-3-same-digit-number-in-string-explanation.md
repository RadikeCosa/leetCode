---
title: "Largest 3 Same Digit Number in String"
difficulty: "easy"
topics:
  - Sliding Window
  - String
  - Counting
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-08-14"
tags:
  - sliding-window
  - string
  - counting
language: "typescript"
author: "ramiro"
---

## Largest 3-Same-Digit Number in String - Explicación

## Descripción del Problema

Dada una cadena `num` compuesta solo por dígitos, encontrar el mayor substring de longitud 3 donde todos los caracteres sean iguales. Si no existe tal substring, retornar cadena vacía `""`.

## Ejemplos Analizados

1. **Input:** `"6777133339"` → **Output:** `"777"`

   - Triples encontradas: `"777"` (posición 1), `"333"` (posición 5)
   - La mayor lexicográficamente: `"777"`

2. **Input:** `"2300019"` → **Output:** `"000"`

   - Solo una triple: `"000"` (posición 2)

3. **Input:** `"42352338"` → **Output:** `""`
   - No hay triples de dígitos iguales

## Enfoque: Sliding Window de Tamaño Fijo

### Estrategia

- **Patrón identificado:** Sliding Window fija (ventana de tamaño 3)
- **Recorrido:** Iterar `i` desde 0 hasta `num.length - 3`
- **Condición de validez:** `num[i] === num[i+1] === num[i+2]`
- **Comparación:** Lexicográfica entre strings de 3 dígitos

### Implementación Final

```typescript
export function largestGoodInteger(num: string): string {
  let best = "";
  for (let i = 0; i < num.length - 2; i++) {
    const a = num[i];
    if (a === num[i + 1] && a === num[i + 2]) {
      let candidate = a + a + a;
      if (candidate === "999") {
        return "999"; // Early termination optimization
      }
      if (candidate > best) {
        best = candidate;
      }
    }
  }
  return best;
}
```

## Complejidad

- **Tiempo:** O(n) - cada posición se visita una vez
- **Espacio:** O(1) - solo variables auxiliares

## Insights Clave Descubiertos

### 1. Comparación Lexicográfica de Strings

JavaScript compara strings carácter por carácter:

- `"777" > "333"` → `true` (porque '7' > '3')
- `"111" > ""` → `true` (cualquier string no vacío > string vacío)
- Esto funciona perfectamente para dígitos porque mantiene el orden numérico

### 2. Optimización: Early Termination

- Si encontramos `"999"`, no puede haber nada mayor
- Return inmediato sin seguir buscando
- Mejora el caso promedio sin cambiar el peor caso O(n)

### 3. Construcción del Candidato

- Si `a = "7"` y sabemos que los 3 son iguales
- `candidate = a + a + a = "777"`
- Evita usar substring() y acceso repetido a índices

## Casos Extremos Considerados

- **String mínimo:** `"000"` → válido, retorna `"000"`
- **Sin triples:** `"12345"` → retorna `""`
- **Solapamiento:** `"1111"` → múltiples `"111"`, todos iguales
- **Early exit:** `"6999133"` → encuentra `"999"` y termina inmediatamente

## Patrón Aplicable

**Sliding Window de Tamaño Fijo** es útil para:

- Detección de patrones consecutivos
- Validaciones en ventanas constantes
- Problemas de substring con condiciones específicas

## Reflexiones para Entrevistas

1. **Análisis del problema:** Identificar que necesitamos exactamente 3 caracteres iguales
2. **Elección de estructura:** Window fija > window variable para este caso
3. **Optimizaciones:** Early termination cuando se encuentra el máximo absoluto
4. **Casos edge:** String vacío, longitud mínima, sin matches válidos

---

_Problema resuelto aplicando sliding window fija y comparación lexicográfica de strings._

## Ejemplos

1. `num = "6777133339"` → `"777"`
   - Triples válidas: `"777"`, `"333"` → mayor es `"777"`.
2. `num = "2300019"` → `"000"` (solo triple existente)
3. `num = "42352338"` → `""` (no hay triple)

## Restricciones

- 3 <= num.length <= 1000
- Solo dígitos '0'–'9'

## Análisis Inicial

Observaciones:

- Solo interesan ventanas de tamaño 3.
- Para ser válida: `num[i] == num[i+1] == num[i+2]`.
- Comparar cadenas de longitud 3 lexicográficamente equivale a comparar el dígito único.
- Máximo posible: "999" (best early exit conceptual si se quisiera micro-optimizar).

Preguntas / Reflexión:

- ¿Qué ocurre si hay solapamiento? (Ej: "1111" contiene dos triples "111" en i=0 e i=1) → Ambas válidas, elegir la máxima (son iguales).
- ¿Necesitamos almacenar todas? No, solo el máximo actual.
- ¿Hay beneficio de un enfoque distinto a escaneo lineal? Dado n ≤ 1000, no.

## Enfoque Propuesto (Sliding Window / Escaneo Lineal)

Iterar i desde 0 hasta n-3 y verificar si los tres caracteres son iguales.
Si válido y mayor que el actual `best`, actualizar.

### Complejidad

- Tiempo: O(n)
- Espacio: O(1)

## Casos Extremos

- Cadena de longitud exactamente 3 (match / no match)
- Ninguna triple → devolver ""
- Todas iguales ("0000", "99999")
- Múltiples triples distintas ("111222333")

## Posibles Optimizaciones

- Early return si encontramos "999" (no existe valor mayor).
- Break anticipado si el dígito actual es '9' y forma triple.

## Patrón y Conexión

Patrón: Sliding window fija (tamaño constante). Reconoce coincidencias consecutivas.
Conecta con problemas de detección de patrones repetidos y run-length encoding.

## Próximos Pasos

1. Implementar la función en `largest-3-same-digit-number-in-string.ts`.
2. Ejecutar tests y validar edge cases.
3. (Opcional) Añadir early exit.

---

Actualizar `conceptos-y-algoritmos.md` solo si agregamos algo nuevo (Sliding window fija). Pendiente decidir si ya existe sección.
