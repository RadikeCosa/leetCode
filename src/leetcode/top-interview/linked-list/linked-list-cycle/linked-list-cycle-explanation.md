# Linked List Cycle

Detectar si una linked list tiene un ciclo, es decir, si siguiendo los punteros `next` podemos volver a un nodo ya visitado.

## Ejemplos

**Ejemplo 1:**

- Input: head = [3,2,0,-4], pos = 1
- Output: true
- Explicación: Hay un ciclo donde el último nodo apunta al nodo en posición 1

**Ejemplo 2:**

- Input: head = [1,2], pos = 0
- Output: true
- Explicación: El último nodo apunta al primer nodo

**Ejemplo 3:**

- Input: head = [1], pos = -1
- Output: false
- Explicación: No hay ciclo, el único nodo apunta a null

## Análisis

### Comprensión del problema:

- Una **linked list** es una cadena de nodos donde cada nodo tiene un valor y una referencia al siguiente
- Un **ciclo** existe cuando un nodo apunta de vuelta a un nodo anterior en lugar de terminar en `null`
- Solo recibimos el `head` (primer nodo), no recibimos el parámetro `pos`
- Debemos detectar si existe algún ciclo en la estructura

### Desafío principal:

Si hay un ciclo, un recorrido normal con `while (current !== null)` se vuelve infinito porque nunca llegamos a `null`.

## Enfoque detallado

### Solución implementada: HashSet de nodos visitados

```typescript
export function hasCycle(head: ListNode | null): boolean {
  const visitados = new Set<ListNode>();
  let current = head;

  while (current !== null) {
    // Si ya visitamos este nodo, hay ciclo
    if (visitados.has(current)) {
      return true;
    }

    // Marcar como visitado y continuar
    visitados.add(current);
    current = current.next;
  }

  return false; // Llegamos a null, no hay ciclo
}
```

### Pasos del algoritmo:

1. **Inicializar** un Set para rastrear nodos visitados
2. **Recorrer** la lista nodo por nodo
3. **En cada nodo**: verificar si ya lo habíamos visitado
   - Si SÍ → hay ciclo, retornar `true`
   - Si NO → agregarlo al Set y continuar
4. **Si llegamos a `null`** → no hay ciclo, retornar `false`

### ¿Por qué funciona?

- Si hay ciclo, eventualmente volveremos a un nodo ya visitado
- Si no hay ciclo, eventualmente llegaremos a `null`
- El Set nos permite detectar revisitas en tiempo O(1)

## Casos extremos

- **Lista vacía** (`head = null`): No hay ciclo → `false`
- **Un solo nodo sin ciclo**: Apunta a `null` → `false`
- **Un solo nodo con ciclo**: Apunta a sí mismo → `true`
- **Ciclo al inicio**: El segundo nodo apunta al primero
- **Ciclo al final**: El último nodo apunta a cualquier nodo anterior

## Complejidad

### Time Complexity: O(n)

- **Mejor caso**: O(1) si hay ciclo inmediato
- **Peor caso**: O(n) si visitamos todos los nodos antes de detectar ciclo o llegar a null
- Cada nodo se visita máximo una vez

### Space Complexity: O(n)

- El Set puede almacenar hasta `n` nodos únicos en el peor caso
- **Alternativa O(1)**: Two Pointers (Floyd's Algorithm) - más complejo pero sin memoria extra

## Conclusión

### Lecciones aprendidas:

1. **Linked Lists**: Estructura de nodos conectados por referencias, no arrays
2. **Detección de ciclos**: Usar Set para rastrear nodos visitados es intuitivo y eficaz
3. **Referencias vs valores**: Comparamos referencias de nodos, no sus valores
4. **Casos edge**: Considerar listas vacías, un solo nodo, y ciclos de diferentes tipos

### Patrón aplicable:

Esta técnica de "rastrear visitados" se puede aplicar a cualquier problema de detección de ciclos en grafos o estructuras enlazadas.
