---
title: "is-subsequence"
difficulty: "easy"
topics:
  - Two Pointers
  - String
  - Dynamic Programming
source: "leetcode"
series: "top-interview"
category: "top-interview"
createdAt: "2025-09-03"
---

# Is Subsequence - Análisis y Explicación

## Problema

**LeetCode 392: Is Subsequence (Easy)**

Dados dos strings `s` y `t`, retornar `true` si `s` es una subsecuencia de `t`, `false` en caso contrario.

Una subsecuencia de un string es un nuevo string que se forma a partir del string original eliminando algunos (pueden ser ninguno) de los caracteres sin alterar las posiciones relativas de los caracteres restantes.

## Enfoque

### Two Pointers Paralelos (Sequential Matching)

**Insight clave:** Para verificar si `s` es subsecuencia de `t`, necesitamos encontrar todos los caracteres de `s` en `t` manteniendo el orden relativo. No necesitamos encontrarlos consecutivamente, solo en el orden correcto.

### Algoritmo paso a paso:

1. **Inicializar punteros:** `subsequenceIndex = 0` (para `s`), `sourceIndex = 0` (para `t`)
2. **Loop principal:** Mientras tengamos caracteres pendientes en ambos strings:
   - **Si coinciden caracteres:** `s[subsequenceIndex] === t[sourceIndex]` → avanzar `subsequenceIndex`
   - **Siempre:** avanzar `sourceIndex` (continuamos buscando en `t`)
3. **Verificar resultado:** Si `subsequenceIndex === s.length` → encontramos toda la subsecuencia

### Ejemplo de ejecución:

**Input:** `s = "abc", t = "ahbgdc"`

```
Iteración 1: s[0]='a', t[0]='a' → MATCH ✓ → subsequenceIndex=1, sourceIndex=1
Iteración 2: s[1]='b', t[1]='h' → NO match → subsequenceIndex=1, sourceIndex=2
Iteración 3: s[1]='b', t[2]='b' → MATCH ✓ → subsequenceIndex=2, sourceIndex=3
Iteración 4: s[2]='c', t[3]='g' → NO match → subsequenceIndex=2, sourceIndex=4
Iteración 5: s[2]='c', t[4]='d' → NO match → subsequenceIndex=2, sourceIndex=5
Iteración 6: s[2]='c', t[5]='c' → MATCH ✓ → subsequenceIndex=3, sourceIndex=6

Final: subsequenceIndex=3 === s.length → TRUE
```

## Análisis de Complejidad

- **Tiempo:** O(n + m) - donde n = `s.length`, m = `t.length`
- **Espacio:** O(1) - solo dos punteros, independiente del tamaño de entrada

### Justificación de complejidad:

- **O(n + m) tiempo:** En el peor caso, recorremos todo `t` una vez y encontramos todos los caracteres de `s`
- **O(1) espacio:** Solo usamos dos variables enteras para los punteros

## Casos Edge

✅ **String s vacío:** `s = "", t = "abc"` → `true` (string vacío es subsecuencia de cualquier cosa)  
✅ **String t vacío:** `s = "a", t = ""` → `false` (no se puede encontrar nada en string vacío)  
✅ **Ambos vacíos:** `s = "", t = ""` → `true` (string vacío es subsecuencia de string vacío)  
✅ **Subsecuencia completa:** `s = "abc", t = "abc"` → `true`  
✅ **Sin coincidencias:** `s = "axc", t = "ahbgdc"` → `false` (falta 'x')  
✅ **Orden incorrecto:** `s = "acb", t = "abc"` → `false` (orden relativo no se mantiene)

### Casos críticos manejados:

1. **String s más largo que t:** La condición del while maneja esto naturalmente
2. **Caracteres repetidos en t:** El algoritmo encuentra la primera ocurrencia disponible
3. **Subsecuencia al final:** Funciona correctamente hasta el último carácter

## Conceptos Clave

### **1. Two Pointers Paralelos**

- **Definición:** Técnica que usa dos punteros avanzando en la misma dirección pero a diferentes velocidades
- **Aplicación:** Ideal para problemas de matching secuencial y verificación de subsecuencias
- **Diferencia vs Convergentes:** No se mueven hacia el centro, sino hacia adelante en paralelo

### **2. Sequential Matching Pattern**

- **Concepto:** Encontrar elementos en orden específico sin requerir posiciones consecutivas
- **Implementación:** Avanzar el puntero "objetivo" solo cuando encuentras match
- **Beneficio:** Una sola pasada lineal vs múltiples búsquedas

### **3. Greedy Matching Strategy**

- **Estrategia:** Tomar la primera ocurrencia disponible de cada carácter
- **Justificación:** Si existe una subsecuencia, la estrategia greedy la encontrará
- **Optimización:** No necesitamos backtracking ni explorar múltiples caminos

### **4. Early Termination Conditions**

- **Condición 1:** Si `subsequenceIndex === s.length` → éxito inmediato
- **Condición 2:** Si `sourceIndex === t.length` pero `subsequenceIndex < s.length` → fallo
- **Beneficio:** Evita procesamiento innecesario

### **5. Diferencias con Otros Patrones Two Pointers**

**vs Valid Palindrome (Convergentes):**

- **Direcciones:** Paralelos hacia adelante vs convergentes hacia centro
- **Velocidad:** Variable vs simétrica
- **Objetivo:** Matching secuencial vs verificación simétrica

**vs Two Sum (Búsqueda):**

- **Estructura:** Strings vs arrays numéricos
- **Estrategia:** Sequential matching vs sum-based search
- **Complejidad:** O(n+m) vs O(n) con array ordenado