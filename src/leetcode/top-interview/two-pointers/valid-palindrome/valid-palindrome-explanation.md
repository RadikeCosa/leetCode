---
id: valid-palindrome
source: leetcode
series: top-interview
category: top-interview
difficulty: easy
topics:
  - Two Pointers
  - String
createdAt: 2025-09-02
---

# Valid Palindrome - Análisis y Explicación

## Problema

**LeetCode 125: Valid Palindrome (Easy)**

Una frase es un palíndromo si, después de convertir todas las letras mayúsculas en minúsculas y eliminar todos los caracteres no alfanuméricos, se lee igual hacia adelante que hacia atrás.

## Enfoque

### Two Pointers con Validación In-Place

**Insight clave:** No necesitamos limpiar el string completo. Podemos usar dos punteros que salten caracteres no alfanuméricos y comparen solo los válidos.

### Algoritmo paso a paso:

1. **Inicializar punteros:** `left = 0`, `right = s.length - 1`
2. **Loop principal:** Mientras `left < right`:
   - **Saltar no alfanuméricos desde izquierda:** Avanzar `left` hasta encontrar carácter válido
   - **Saltar no alfanuméricos desde derecha:** Retroceder `right` hasta encontrar carácter válido
   - **Comparar:** Si `s[left].toLowerCase() !== s[right].toLowerCase()` → retornar `false`
   - **Avanzar:** `left++`, `right--`
3. **Retornar `true`:** Si completamos el loop sin encontrar diferencias

### Función auxiliar:

```typescript
const isAlphaNumeric = (char: string): boolean => {
  return /[a-z0-9]/i.test(char);
};
```

**¿Por qué regex?** Maneja tanto letras como números con una sola verificación case-insensitive.

### Ejemplo de ejecución:

**Input:** `"A man, a plan, a canal: Panama"`

```
Iteración 1: left=0('A'), right=30('a') → 'A'=='a' ✓ → left=1, right=29
Iteración 2: left=1(' '), right=29('m') → left=2 (saltar espacio)
Iteración 3: left=2('m'), right=29('m') → 'm'=='m' ✓ → left=3, right=28
...
Continúa hasta que left >= right → true
```

## Análisis de Complejidad

- **Tiempo:** O(n) - cada carácter se visita máximo una vez
- **Espacio:** O(1) - solo variables auxiliares (punteros)

### Justificación de complejidad:

- **O(n) tiempo:** En el peor caso, recorremos toda la cadena una vez
- **O(1) espacio:** Solo usamos dos punteros y variables auxiliares, independiente del tamaño de entrada

## Casos Edge

✅ **String vacío:** `""` → `true` (no entra al while loop)  
✅ **Solo caracteres no alfanuméricos:** `".,!@#"` → `true` (punteros se cruzan sin comparar)  
✅ **Un solo carácter alfanumérico:** `"a"` → `true`  
✅ **Números mezclados:** `"A1B2b1a"` → `true`  
✅ **Mayúsculas/minúsculas:** `"Aa"` → `true`  
✅ **Espacios múltiples:** `"  a  "` → `true`

### Casos críticos manejados:

1. **Cruce de punteros:** La condición `left < right` en los while internos evita problemas
2. **String de un carácter:** Se maneja naturalmente por la condición del loop principal
3. **Solo caracteres no válidos:** Los punteros se cruzan sin hacer comparaciones

## Conceptos Clave

### **1. Two Pointers Pattern**

- **Definición:** Técnica que usa dos punteros moviéndose desde extremos hacia el centro
- **Aplicación:** Ideal para verificación de propiedades simétricas como palíndromos
- **Ventaja:** Reduce complejidad espacial eliminando necesidad de crear estructuras auxiliares

### **2. In-Place Processing**

- **Concepto:** Procesar datos sin crear copias adicionales
- **Implementación:** Saltar caracteres no válidos durante la comparación
- **Beneficio:** Memoria constante O(1) vs O(n) de métodos que crean strings limpios

### **3. Case-Insensitive Comparison**

- **Método:** `toLowerCase()` para normalizar antes de comparar
- **Alternativa:** Operaciones bitwise con `charCodeAt()` y máscara, pero menos legible
- **Consideración:** Se aplica solo a caracteres válidos, no a todo el string

### **4. Regex para Validación**

- **Pattern:** `/[a-z0-9]/i` - letras y números, case-insensitive
- **Ventaja:** Expresivo y conciso vs múltiples comparaciones
- **Rendimiento:** Suficientemente eficiente para verificaciones simples de caracteres

### **5. Early Termination**

- **Implementación:** Retornar `false` inmediatamente al encontrar diferencia
- **Beneficio:** Evita comparaciones innecesarias en casos no-palíndromo
- **Impacto:** Mejor rendimiento promedio especialmente en strings largos no-palíndromo
