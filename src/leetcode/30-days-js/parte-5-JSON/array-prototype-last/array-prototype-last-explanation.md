---
title: "array-prototype-last"
difficulty: "easy"
topics:
  - Array
  - Prototype
  - Extension
source: "leetcode"
series: "parte-5-JSON"
category: "30-days-js"
createdAt: "2025-09-16"
---

# LeetCode Problem 2619: Array Prototype Last

## Descripción del Problema

Este problema requiere extender el prototipo de Array en JavaScript para agregar un método `last()` que retorne el último elemento del array. Si el array está vacío, debe retornar -1.

## Análisis

### Concepto Clave: Prototype Extension

- **Prototype en JavaScript**: Mecanismo por el cual los objetos heredan características de otros objetos
- **Array.prototype**: Permite agregar métodos a todos los arrays existentes y futuros
- **this keyword**: Dentro del método, `this` se refiere al array específico que llama al método

### Casos a Considerar

1. **Array con elementos**: Retornar `this[this.length - 1]`
2. **Array vacío**: Retornar `-1` como especificado
3. **Elementos diversos**: Puede contener null, objetos, números, etc.

### Edge Cases Probados

1. **Array con un solo elemento**: `[42]` → retorna `42`
2. **Valores falsy como último elemento**:
   - `[1, 2, undefined]` → retorna `undefined`
   - `[1, 2, null]` → retorna `null`
3. **Diferentes tipos de datos**:
   - **Números**: `[10, 20, 30]` → retorna `30`
   - **Strings**: `["a", "b", "c"]` → retorna `"c"`
   - **Objetos**: `[{}, { name: "test" }]` → retorna `{ name: "test" }`
4. **Arrays mixtos**: `[1, "hello", { key: "value" }]` → retorna el objeto

## Enfoque de Solución

### Estrategia

1. **Verificar longitud**: Si `this.length === 0`, retornar -1
2. **Acceso directo**: Usar índice `this.length - 1` para acceder al último elemento
3. **Declaración de tipos**: Usar TypeScript para definir la extensión del prototipo

### Implementación

```typescript
declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};
```

## Complejidad

- **Tiempo**: O(1) - Acceso directo por índice
- **Espacio**: O(1) - No se usa espacio adicional

## Puntos Clave de Aprendizaje

### JavaScript/TypeScript Concepts

1. **Prototype Modification**: Cómo extender tipos nativos
2. **Global Type Declaration**: Uso de `declare global` en TypeScript
3. **this Context**: Entendimiento del contexto en métodos de prototipo
4. **Type Safety**: Definir tipos de retorno union (`T | -1`)

### Best Practices

- Siempre verificar edge cases (array vacío)
- Usar declaraciones de tipo para mejor IDE support
- Considerar el impacto de modificar prototipos nativos