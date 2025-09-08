# Isomorphic Strings

Dadas dos cadenas `s` y `t`, determinar si son isomórficas.

Dos cadenas `s` y `t` son isomórficas si los caracteres en `s` pueden ser reemplazados para obtener `t`. Todas las ocurrencias de un carácter deben ser reemplazadas con otro carácter preservando el orden de los caracteres. Ningún carácter puede mapear a dos caracteres diferentes, pero un carácter puede mapear a sí mismo.

## Ejemplos

### Ejemplo 1:

- Input: s = "egg", t = "add"
- Output: true
- Explicación: Las cadenas pueden hacerse idénticas mapeando 'e' → 'a' y 'g' → 'd'

### Ejemplo 2:

- Input: s = "foo", t = "bar"
- Output: false
- Explicación: 'o' necesitaría mapear tanto a 'a' como a 'r', lo cual es imposible

### Ejemplo 3:

- Input: s = "paper", t = "title"
- Output: true

## Análisis

Este problema requiere verificar si dos strings pueden establecer un **mapeo bidireccional consistente** entre sus caracteres. Es un problema clásico de **Hash Table** que demuestra la importancia de trackear relaciones en ambas direcciones.

### 🎯 **Enfoque de Testing: Categorización por Tipo de Fallo**

Para este problema implementamos un **enfoque de testing categorizado** que organiza los casos de prueba según el tipo de validación que realizan:

#### **✅ Casos válidos (isomórficos):**

```typescript
describe("Valid isomorphic cases", () => {
  it("should handle identical characters mapping", () => {
    expect(isIsomorphic("egg", "add")).toBe(true);
    // e→a, g→d (mapeo consistente)
  });

  it("should handle complex mappings", () => {
    expect(isIsomorphic("paper", "title")).toBe(true);
    // p→t, a→i, p→t, e→l, r→e (mapeo bidireccional válido)
  });

  it("should handle self-mapping", () => {
    expect(isIsomorphic("abc", "abc")).toBe(true);
    // Cada carácter mapea a sí mismo
  });
});
```

#### **❌ Mapeos inválidos:**

```typescript
describe("Invalid mappings", () => {
  it("should detect one-to-many mapping violation", () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
    // 'o' necesitaría mapear tanto a 'a' como a 'r' ❌
  });

  it("should detect many-to-one mapping violation", () => {
    expect(isIsomorphic("ab", "cc")).toBe(false);
    // Tanto 'a' como 'b' mapearían a 'c' ❌
  });
});
```

#### **🔍 Casos edge:**

```typescript
describe("Edge cases", () => {
  it("should handle single character", () => {
    expect(isIsomorphic("a", "b")).toBe(true);
    // Caso más simple: un solo mapeo
  });

  it("should handle identical strings", () => {
    expect(isIsomorphic("abc", "abc")).toBe(true);
    // Auto-mapeo perfecto
  });
});
```

### 🏆 **Ventajas del enfoque categorizado:**

1. **Claridad semántica**: Cada test explica QUÉ tipo de mapeo valida
2. **Debugging efectivo**: Si falla, sabes exactamente qué caso no funciona
3. **Cobertura exhaustiva**: Casos válidos, inválidos y edge cases separados
4. **Documentación viva**: Los nombres de tests explican el comportamiento esperado
5. **Mantenibilidad**: Fácil agregar nuevos casos en la categoría apropiada

### 🔬 **Tipos de violaciones a detectar:**

#### **📍 One-to-Many (1→N):**

- Un carácter de `s` mapea a múltiples caracteres de `t`
- Ejemplo: `"foo" → "bar"` donde 'o' mapearía a 'a' y 'r'

#### **📍 Many-to-One (N→1):**

- Múltiples caracteres de `s` mapean al mismo carácter de `t`
- Ejemplo: `"ab" → "cc"` donde 'a' y 'b' mapearían ambos a 'c'

#### **📍 Inconsistencia bidireccional:**

- El mapeo s→t es válido pero t→s no, o viceversa
- Requiere validación en ambas direcciones

## Enfoque detallado

_Paso a paso de la solución implementada a completar después de la implementación._

## Casos extremos

_Lista de casos extremos y cómo se tratan a completar después de la implementación._

## Complejidad

- Time complexity: _A determinar después de la implementación_
- Space complexity: _A determinar después de la implementación_

## Conclusión

_Resumen y lecciones aprendidas a completar después de la implementación._
