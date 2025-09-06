# Problema 2727: Is Object Empty

## Análisis del Problema

### Descripción

El problema pide determinar si un objeto o array está vacío:

- Un objeto vacío no contiene pares clave-valor
- Un array vacío no contiene elementos
- El input puede ser cualquier salida válida de `JSON.parse`

### Casos de Ejemplo

1. **`{"x": 5, "y": 42}` → `false`**: Objeto con 2 propiedades, no está vacío
2. **`{}` → `true`**: Objeto sin propiedades, está vacío
3. **`[null, false, 0]` → `false`**: Array con 3 elementos, no está vacío

### Restricciones

- El input es siempre un objeto o array válido (salida de JSON.parse)
- `2 <= JSON.stringify(obj).length <= 10^5`
- **Desafío**: Resolver en tiempo O(1)

## Enfoque de Solución

### Estrategia

Usar diferentes técnicas según el tipo de input:

1. **Arrays**: Verificar `length === 0` (naturalmente O(1))
2. **Objetos**: Usar `for...in` loop que se rompe inmediatamente (O(1) verdadero)

### Algoritmo

1. Determinar si el input es array usando `Array.isArray()`
2. Si es array: retornar `obj.length === 0`
3. Si es objeto: usar `for...in` loop:
   - Si encuentra al menos una propiedad → retornar `false`
   - Si nunca entra al loop → retornar `true`

### Casos Borde

- **Array vacío `[]`**: `length === 0` → `true`
- **Objeto vacío `{}`**: `for...in` nunca ejecuta → `true`
- **Array con elementos falsy**: Sigue teniendo length > 0 → `false`
- **Objeto con propiedades undefined**: Sigue siendo una propiedad → `false`

## Análisis de Complejidad

### Complejidad Temporal

- **Arrays**: O(1) - acceso directo a la propiedad `length`
- **Objetos**: O(1) - el loop se rompe en la primera iteración o nunca se ejecuta
- **General**: **O(1) verdadero** ✅

### Complejidad Espacial

- **O(1)** - Solo usamos variables auxiliares constantes, no estructuras adicionales

## Implementación

### Decisiones de Diseño

1. **`Array.isArray()` vs `typeof`**: Más preciso para distinguir arrays de objetos
2. **`for...in` vs `Object.keys()`**: El primero es O(1), el segundo es O(n)
3. **Return temprano**: En objetos, retornamos `false` inmediatamente al encontrar una propiedad

### Código Final

```typescript
export function isEmpty(obj: Record<string, any> | any[]): boolean {
  // Verificar si es array o objeto y aplicar estrategia O(1) correspondiente
  if (Array.isArray(obj)) {
    // Para arrays: usar .length es naturalmente O(1)
    return obj.length === 0;
  }

  // Para objetos: usar for...in que se rompe en la primera iteración (O(1) verdadero)
  for (let key in obj) {
    return false; // Si encontramos al menos una propiedad, no está vacío
  }
  return true; // Si nunca entró al loop, el objeto está vacío
}
```

## Conceptos Aprendidos

### Técnicas Utilizadas

- **Discriminación de tipos**: `Array.isArray()` para distinguir arrays de objetos
- **Optimización O(1)**: `for...in` con return temprano vs `Object.keys()`
- **Short-circuiting**: Terminar la evaluación en cuanto se encuentra evidencia

### Aplicaciones

- **Validación de formularios**: Verificar si campos están vacíos
- **APIs**: Validar payloads antes de procesamiento
- **Optimización**: Evitar operaciones costosas en estructuras vacías
- **Functional programming**: Pattern matching en estructuras de datos
