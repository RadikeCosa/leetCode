# Contar combinaciones de cartas

## Enunciado

Una baraja estándar tiene 13 valores (ranks) por cada uno de los 4 palos, es decir, 52 cartas en total. Dado un entero `cards` que indica cuántas cartas se eligen de la baraja, devuelve el número de combinaciones distintas posibles. El orden no importa: elegir la carta A y luego la B es lo mismo que elegir B y luego A.

**Entrada:** un entero `cards` con 0 <= cards <= 52.

**Salida:** un entero con el número de combinaciones distintas, es decir, el coeficiente binomial "52 choose cards".

**Ejemplos:**

- `combinations(52) => 1`
- `combinations(1)  => 52`
- `combinations(2)  => 1326`
- `combinations(5)  => 2598960`
- `combinations(10) => 15820024220`

## Intuición

## Implementación de referencia (ejemplo)

Aquí tienes dos versiones breves que ilustran las ideas vistas arriba.

- Versión simple y legible usando Number (la que está en el repositorio):

```javascript
function combinationsNumber(cards) {
  const n = 52;
  if (!Number.isInteger(cards) || cards < 0 || cards > n)
    throw new Error("invalid");
  if (cards === 0 || cards === n) return 1;
  const m = Math.min(cards, n - cards);
  let result = 1;
  for (let i = 1; i <= m; i++) {
    result *= (n - m + i) / i;
  }
  return result; // suficiente para n=52 y ejemplos
}
```

- Versión exacta con BigInt (más robusta si n crece):

```javascript
function combinationsBigInt(cards) {
  const n = 52;
  if (!Number.isInteger(cards) || cards < 0 || cards > n)
    throw new Error("invalid");
  if (cards === 0 || cards === n) return 1n;
  const m = Math.min(cards, n - cards);
  let res = 1n;
  for (let i = 1; i <= m; i++) {
    res = (res * BigInt(n - m + i)) / BigInt(i);
  }
  return res;
}
```

La versión BigInt devuelve un entero grande (`BigInt`) sin pérdida. Si quieres un `Number` final (y sabes que cabe), convierte con `Number(res)`.

## Casos de prueba sugeridos

- `combinations(0) => 1`
- `combinations(1) => 52`
- `combinations(2) => 1326`
- `combinations(5) => 2598960`
- `combinations(10) => 15820024220`
- `combinations(50) => 1326` (simetría)
- Comprobaciones de validación: `combinations(-1)`, `combinations(53)` — deben fallar o seguir la política elegida.

## Notas de implementación y buenas prácticas

- Preferir la versión `Number` para claridad y para problemas con `n` pequeño y donde no se requiera exactitud absoluta en todos los pasos.
- Usar `BigInt` cuando:
  - `n` puede crecer mucho (factoriales enormes).
  - Requieres exactitud entera en todos los pasos (sin riesgo de redondeo).
- Si usas `BigInt`, mantén las operaciones en `BigInt` hasta el final para evitar conversiones repetidas.
- Añade validaciones explícitas al inicio de la función para asegurar entradas limpias y facilitar debugging.

## Complejidad y rendimiento

- Tiempo: O(min(k, n-k)) donde `k = cards` y `n = 52`.
- Espacio: O(1) adicional.

En la práctica, la versión iterativa es muy rápida para `n = 52` y trivial de entender.

## Conclusión

Para este ejercicio de FreeCodeCamp la versión simple con `Number` es clara y suficiente. Si tu dominio cambia a valores mucho mayores o precisas exactitud garantizada, cambia a la versión `BigInt` mostrada arriba.

Si quieres, puedo:

- Añadir ambos enfoques al repositorio (la versión `Number` por defecto y una alternativa `combinationsBigInt` en un archivo de utilidades).
- Añadir tests adicionales para validación de entradas y simetría.

Dime cuál prefieres y lo hago.

Buscamos el número de subconjuntos no ordenados de tamaño `k` (donde `k = cards`) extraídos de un conjunto de `n = 52` elementos. Es un caso clásico de combinatoria: los valores aumentan hasta aproximadamente `n/2` y luego decrecen de forma simétrica porque elegir `k` es equivalente a elegir los `n-k` que no se escogen.

$${52 \choose k} = \frac{52!}{k!\,(52-k)!}$$

y la simetría

$${52 \choose k} = {52 \choose 52-k}.$$

## Enfoque

Calcular el coeficiente binomial de forma exacta y eficiente sin evaluar factoriales completos.

Pasos propuestos:

1. Fijar `n = 52` y `k = cards`.
2. Si `k < 0` o `k > n`, tratar como entrada inválida (ver Casos borde).
3. Si `k === 0` devolver `1`.
4. Aprovechar la simetría: `k = Math.min(k, n - k)`.
5. Calcular iterativamente:

$${result = \prod_{i=1}^{k} \frac{n - k + i}{i}}$$

En la práctica, iteramos `i` de 1 a `k`, multiplicamos por `n - k + i` y dividimos por `i` en cada paso. Para mantener exactitud en JavaScript es recomendable usar `BigInt` (multiplicar y dividir en enteros exactos).

Este método usa O(k) tiempo y O(1) espacio adicional.

## Complejidad

- Tiempo: O(min(k, n-k)).
- Espacio: O(1) adicional.

## Notas y casos borde

- `cards = 0` => `1`.
- `cards = 52` => `1`.
- `cards = 50` => mismo resultado que `cards = 2` (simetría).
- Entradas fuera de `0..52`: definir comportamiento (lanzar error / devolver 0 / acotar). El enunciado asume entradas válidas, pero conviene documentarlo.
- Recomiendo `BigInt` para exactitud en la multiplicación y división iterativa.
