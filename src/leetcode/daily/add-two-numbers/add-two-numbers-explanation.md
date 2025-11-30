---
name: add-two-numbers
difficulty: medium
category: daily
topics: [Linked List, Math, Recursion]
source: leetcode
series: daily
createdAt: 2025-11-29
---

# Add Two Numbers - Explicación Detallada

## Problema

**LeetCode 2: Add Two Numbers**  
**Dificultad:** Medium  
**Temas:** Linked List, Math, Recursion

## Enunciado

Se te dan dos listas enlazadas no vacías que representan dos enteros no negativos. Los dígitos se almacenan en orden inverso, y cada nodo contiene un solo dígito. Suma los dos números y retorna la suma como una lista enlazada.

Puedes asumir que los dos números no contienen ceros a la izquierda, excepto el número 0 en sí mismo.

## Análisis del Problema

### Casos de Ejemplo

1. `l1 = [2,4,3]`, `l2 = [5,6,4]` → `[7,0,8]`

   - Representa: 342 + 465 = 807
   - En orden inverso: [2,4,3] = 342, [5,6,4] = 465, [7,0,8] = 807

2. `l1 = [0]`, `l2 = [0]` → `[0]`

   - Caso simple: 0 + 0 = 0

3. `l1 = [9,9,9,9,9,9,9]`, `l2 = [9,9,9,9]` → `[8,9,9,9,0,0,0,1]`
   - Representa: 9999999 + 9999 = 10009998
   - Múltiples carries consecutivos

### Observaciones Clave

- Los dígitos están en **orden inverso** (menos significativo primero)
- Necesitamos manejar el **carry** cuando la suma ≥ 10
- Las listas pueden tener **diferentes longitudes**
- El resultado puede ser **más largo** que ambas listas de entrada

## Estrategia de Solución

### Enfoque: Simulación de Suma Manual

**Idea:** Simular el proceso de suma que harías a mano, pero aprovechando que los dígitos ya están en orden inverso.

**Proceso paso a paso:**

1. **Inicializar:** Nodo dummy, punteros para ambas listas, carry = 0
2. **Mientras haya dígitos o carry:**
   - Obtener valores actuales (0 si la lista se acabó)
   - Calcular suma total = val1 + val2 + carry
   - Crear nuevo nodo con suma % 10
   - Actualizar carry = suma // 10
   - Avanzar punteros
3. **Retornar:** La lista resultado (saltando el nodo dummy)

## Implementación

### Código Final

```typescript
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // Nodo dummy para facilitar la construcción del resultado
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  // Mientras tengamos nodos en cualquiera de las listas o carry pendiente
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Obtener valores actuales (0 si el nodo es null)
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // Calcular suma total incluyendo carry
    const total = val1 + val2 + carry;

    // El dígito actual es total % 10
    const digit = total % 10;
    // El nuevo carry es total >= 10 ? 1 : 0
    carry = total >= 10 ? 1 : 0;

    // Crear nuevo nodo con el dígito calculado
    current.next = new ListNode(digit);
    current = current.next;

    // Avanzar a los siguientes nodos si existen
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // Retornar el primer nodo real (saltando el dummy)
  return dummyHead.next;
}
```

### Explicación Detallada

**Técnica del Nodo Dummy:**

- Crear un nodo auxiliar `dummyHead` simplifica la construcción
- Evita lógica especial para el primer nodo del resultado
- Al final retornamos `dummyHead.next`

**Condición del Loop:**

- `l1 !== null || l2 !== null || carry !== 0`
- Cubre todos los casos: nodos restantes en cualquier lista + carry final
- Ejemplo: `99 + 1 = 100` necesita una iteración extra para el carry

**Manejo de Valores Null:**

- `const val1 = l1 ? l1.val : 0` trata nodos null como dígito 0
- Permite procesar listas de diferentes longitudes naturalmente

**Aritmética del Carry:**

- `total = val1 + val2 + carry` suma todo incluyendo acarreo anterior
- `digit = total % 10` extrae el dígito actual
- `carry = total >= 10 ? 1 : 0` optimización clara para el nuevo carry

## Complejidad

### **Complejidad Temporal: O(max(n, m))**

- **n** = longitud de la primera lista enlazada
- **m** = longitud de la segunda lista enlazada
- Recorremos cada nodo de ambas listas exactamente una vez
- Una iteración adicional máximo para manejar carry final
- **Justificación:** No podemos hacer mejor que O(max(n, m)) porque necesitamos visitar cada dígito al menos una vez

### **Complejidad Espacial: O(max(n, m))**

- Creamos una nueva lista enlazada para almacenar el resultado
- La longitud del resultado será `max(n, m)` o `max(n, m) + 1` (si hay carry final)
- Variables auxiliares (carry, punteros): O(1)
- **Nota:** El espacio para el resultado es inevitable según la definición del problema

### **¿Se puede optimizar?**

**La implementación actual es óptima:**

- **Temporal:** No podemos evitar visitar cada dígito
- **Espacial:** Necesitamos crear el resultado, así que O(max(n, m)) es inevitable
- **Enfoque:** Algoritmo de un solo paso es la estrategia más eficiente

**Alternativas consideradas y rechazadas:**

- ❌ **Conversión a números:** Limitada por overflow de JavaScript numbers
- ❌ **Recursión:** Más overhead de stack sin beneficios de claridad
- ✅ **Iterativo actual:** Óptimo en tiempo, espacio y legibilidad

## Casos Edge

- Listas de diferente longitud
- Carry al final que requiere nodo adicional
- Una lista vacía (aunque el problema garantiza no vacías)
- Números con muchos 9s (múltiples carries)

## Patrones y Técnicas

- **Linked List traversal:** Recorrido simultáneo de dos listas
- **Dummy node:** Simplifica la construcción de la lista resultado
- **Carry arithmetic:** Manejo de acarreo en suma de dígitos
- **Edge case handling:** Listas de diferente longitud

## Lecciones Aprendidas

### **Técnicas Clave Aplicadas**

1. **Dummy Node Pattern:**

   - Simplifica enormemente la construcción de listas enlazadas
   - Evita casos especiales para el primer elemento
   - Patrón fundamental para problemas de linked lists

2. **Manejo Unificado de Casos Edge:**

   - Una sola condición de loop maneja todos los escenarios
   - Tratamiento consistente de valores null como 0
   - Código más limpio y menos propenso a errores

3. **Aritmética de Carry Optimizada:**
   - `carry = total >= 10 ? 1 : 0` es más claro que `Math.floor(total/10)`
   - Para suma de dígitos, el carry siempre es 0 o 1
   - Optimización de legibilidad sin sacrificar eficiencia

### **Patrones de Diseño Identificados**

- **Two Pointer Technique:** Procesamiento simultáneo de dos estructuras
- **Single Pass Algorithm:** Resolución completa en una iteración
- **State Machine:** Manejo de carry como estado que se propaga

### **Insights del Problema**

- **Orden reverso es ventajoso:** Permite procesamiento natural de menor a mayor significancia
- **Construcción incremental:** Buildear resultado nodo por nodo es más eficiente que post-procesamiento
- **Carry final:** Siempre considerar que puede necesitarse un dígito adicional

### **Conexiones con Otros Problemas**

- Base para problemas de aritmética en linked lists
- Patrón aplicable a multiplicación de números grandes
- Técnica de dummy node útil en merge de listas, reversión, etc.
