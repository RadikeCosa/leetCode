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

### 🧠 **Estrategia: Dos Mapas Bidireccionales**

La solución utiliza **dos hash maps** para trackear el mapeo en ambas direcciones:

```typescript
const sToT = new Map<string, string>(); // s → t
const tToS = new Map<string, string>(); // t → s
```

### 🔄 **Algoritmo paso a paso:**

1. **Inicialización**: Crear los dos mapas y obtener la longitud
2. **Iteración**: Para cada posición `i` desde 0 hasta `n-1`:
   - Extraer `charS = s[i]` y `charT = t[i]`
   - **Validar mapeo s→t**: Si `charS` ya existe, verificar que mapee a `charT`
   - **Validar mapeo t→s**: Si `charT` ya existe, verificar que venga de `charS`
   - **Crear mapeos**: Si no existen, establecer ambas direcciones
   - **Terminar temprano**: Return `false` si hay inconsistencia
3. **Resultado**: Return `true` si completamos sin inconsistencias

### 🎯 **Por qué dos mapas separados:**

**❌ Un solo mapa NO es suficiente:**

```typescript
// Solo s→t detectaría: "foo" → "bar" (one-to-many) ✅
// Pero NO detectaría: "ab" → "cc" (many-to-one) ❌
```

**✅ Dos mapas capturan ambas violaciones:**

- `sToT`: Previene que un carácter de `s` mapee a múltiples de `t`
- `tToS`: Previene que múltiples caracteres de `s` mapeen al mismo de `t`

### 🔍 **Verificaciones independientes:**

```typescript
// Verificar s → t
if (sToT.has(charS)) {
  if (sToT.get(charS) !== charT) return false; // Inconsistencia
} else {
  sToT.set(charS, charT); // Crear mapeo
}

// Verificar t → s (independiente de la anterior)
if (tToS.has(charT)) {
  if (tToS.get(charT) !== charS) return false; // Inconsistencia
} else {
  tToS.set(charT, charS); // Crear mapeo
}
```

**Clave**: Las verificaciones son **independientes**. No usamos `||` porque necesitamos validar ambas direcciones sin importar el estado de la otra.

## Casos extremos

### 🔸 **Cadenas idénticas**: `"abc"` y `"abc"`

- Cada carácter mapea a sí mismo
- Caso trivial que debe retornar `true`

### 🔸 **Un solo carácter**: `"a"` y `"b"`

- Mapeo más simple posible
- Siempre válido (un solo mapping)

### 🔸 **Caracteres repetidos válidos**: `"egg"` y `"add"`

- `e→a`, `g→d`, `g→d` (consistente)
- Verifica que repeticiones mantengan consistencia

### 🔸 **Caracteres repetidos inválidos**: `"foo"` y `"bar"`

- `f→b`, `o→a`, `o→r` (inconsistente para 'o')
- Detecta violación one-to-many

### 🔸 **Mapeo many-to-one**: `"ab"` y `"cc"`

- `a→c`, `b→c` (inválido: dos fuentes para 'c')
- Detecta violación con el mapa `tToS`

## Complejidad

### ⏱️ **Time Complexity: O(n)**

- **Una pasada**: Recorremos cada carácter exactamente una vez
- **Operaciones O(1)**: `has()`, `get()`, `set()` en Map son constantes en promedio
- **Sin loops anidados**: Algoritmo lineal puro

### 💾 **Space Complexity: O(min(m, n))**

- **m**: Número de caracteres únicos en `s`
- **n**: Número de caracteres únicos en `t`
- **Peor caso**: O(n) cuando todos los caracteres son únicos
- **Restricción real**: Limitado por el tamaño del alfabeto (ej: 256 para ASCII)
- **Caso típico**: Mucho menor que `n` en strings con repeticiones

### 🎯 **Optimizaciones aplicadas:**

- **Early termination**: Return `false` inmediatamente al detectar inconsistencia
- **Variables claras**: `charS`, `charT` evitan accesos repetidos a `s[i]`, `t[i]`
- **Maps tipados**: TypeScript garantiza type safety sin overhead

## Conclusión

### 🧩 **Patrones clave aprendidos:**

1. **Mapeo bidireccional**: Para relaciones 1:1, trackear ambas direcciones
2. **Verificaciones independientes**: No usar `||` cuando ambas condiciones deben validarse
3. **Early termination**: Optimizar retornando al primer error
4. **Testing categorizado**: Organizar tests por tipo de validación
5. **Hash Maps para relaciones**: Estructura ideal para mapeos carácter-a-carácter

### 🎓 **Conceptos transferibles:**

- **Pattern Matching**: Verificar consistencia en transformaciones
- **Bijective Functions**: Mapeos uno-a-uno en estructuras de datos
- **State Validation**: Usar múltiples estructuras para validar diferentes invariantes
- **Symmetric Verification**: Validar relaciones en ambas direcciones

### 🔄 **Conexión con otros problemas:**

- **Word Pattern**: Mismo concepto aplicado a palabras vs caracteres
- **Group Anagrams**: Mapeo de strings a grupos
- **Two Sum**: Hash map para relaciones valor-índice

Esta solución demuestra la potencia de los **Hash Maps** para problemas de mapeo y la importancia de considerar **restricciones bidireccionales** en problemas de transformación.
