---
title: "Find Resultant Array After Removing Anagrams"
difficulty: "easy"
topics:
  - Array
  - Hash Table
  - String
  - Sorting
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-10-13"
---

## Find Resultant Array After Removing Anagrams

### Enunciado del Problema

Dado un array de strings `words` donde cada string contiene letras minúsculas del inglés, debemos eliminar los strings que sean anagramas de su vecino anterior hasta que no sea posible realizar más operaciones.

Un anagrama es una palabra formada reorganizando las letras de otra usando exactamente las mismas letras una vez.

## Análisis de Complejidad

- **Tiempo:** O(n \* m log m), donde n es la cantidad de palabras y m la longitud máxima de cada palabra.
- **Espacio:** O(n \* m), por el array de resultado y las firmas temporales.

---

## Notas y Trade-offs

- El enfoque es directo y robusto para las restricciones del problema.
- Para strings cortas, ordenar es suficiente y claro.

---

## Casos Edge

1. **Array vacío:** No aplica (restricción mínima 1).
2. **Sin anagramas:** Retorna el array original.
3. **Todos anagramas:** Retorna solo el primer elemento.

---

## Lecciones Aprendidas

- Comparar la firma ordenada de cada palabra con la última agregada es suficiente y evita errores.
- El uso de un stack o array para el resultado simplifica la lógica.

---