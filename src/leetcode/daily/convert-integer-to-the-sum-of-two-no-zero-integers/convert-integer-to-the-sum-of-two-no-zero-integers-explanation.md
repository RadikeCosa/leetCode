---
title: "Convert Integer to the Sum of Two No-Zero Integers"
difficulty: "easy"
topics:
  - Math
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-09-08"
---

## Convert Integer to the Sum of Two No-Zero Integers

Encontrar dos enteros "No-Zero" que sumen un número dado n.

## Ejemplos

- Input: n = 2
- Output: [1,1]
- Explicación: 1 + 1 = 2, y tanto 1 como 1 no contienen ceros.

- Input: n = 11
- Output: [2,9] (o cualquier otra combinación válida como [8,3])
- Explicación: 2 + 9 = 11, y ninguno de los dos números contiene ceros.

## Análisis

Este problema requiere encontrar dos números positivos que:

1. **Sumen exactamente n**: a + b = n
2. **No contengan el dígito 0**: Ningún dígito en su representación decimal puede ser 0

La estrategia óptima es **fuerza bruta inteligente**: probar todas las combinaciones posibles desde el más pequeño hasta encontrar la primera válida.

### ¿Por qué funciona?

- **Garantía de solución**: El problema garantiza que siempre existe al menos una respuesta válida
- **Terminación temprana**: Paramos tan pronto encontramos la primera combinación válida
- **Exhaustivo**: Si probamos desde i=1 hasta n-1, cubrimos todas las posibles divisiones de n

## Enfoque detallado

### Paso 1: Función auxiliar para verificar No-Zero

```typescript
const isNoZeroInteger = (n: number): boolean => {
 return !n.toString().includes("0");
};
```

Esta función convierte el número a string y verifica que no contenga el carácter '0'.

### Paso 2: Loop de prueba exhaustiva

```typescript
for (let i = 1; i < n; i++) {
 let a = i;
 let b = n - i;
 if (isNoZeroInteger(a) && isNoZeroInteger(b)) return [a, b];
}
```

Para cada valor de i desde 1 hasta n-1:

- **a = i**: Primer número de la combinación
- **b = n - i**: Segundo número (garantiza que a + b = n)
- **Verificación**: Si ambos son No-Zero, retornamos la combinación

### Implementación completa

```typescript
export function getNoZeroIntegers(n: number): number[] {
 const isNoZeroInteger = (n: number): boolean => {
 return !n.toString().includes("0");
 };
 for (let i = 1; i < n; i++) {
 let a = i;
 let b = n - i;
 if (isNoZeroInteger(a) && isNoZeroInteger(b)) return [a, b];
 }

 return [];
}
```

### Estrategia de Testing (TDD)

**🔴 FASE RED**: Implementamos tests que fallen

- Test específico: `n = 2` → `[1,1]`
- Test genérico: Validación de condiciones (suma correcta + ambos No-Zero)
- Funciones auxiliares para validación

**🟢 FASE GREEN**: Implementación mínima funcional

- Loop iterativo probando combinaciones
- Verificación de condiciones No-Zero
- Return inmediato al encontrar solución válida

**🔵 FASE REFACTOR**: Análisis y optimización

- Análisis de complejidad temporal y espacial
- Documentación completa del approach
- Consideración de optimizaciones alternativas

## Casos extremos

- **n = 2**: Caso mínimo, respuesta única [1,1]
- **n con muchos ceros (ej: 1000)**: Requerirá más iteraciones para evitar números como 100, 10, etc.
- **n grandes**: El algoritmo sigue siendo eficiente para n ≤ 10⁴

## Complejidad

- **Time complexity**: O(n × log n)
 - Loop: O(n) iteraciones en el peor caso
 - Verificación No-Zero: O(log n) por toString()
- **Space complexity**: O(log n)
 - Strings temporales para verificación No-Zero

## Conclusión

La solución implementa una estrategia de **fuerza bruta optimizada** que es:

- **Simple y legible**: Lógica directa fácil de entender
- **Eficiente en la práctica**: Terminación temprana en casos típicos
- **Correcta**: Cubre exhaustivamente todos los casos posibles
- **Maintainable**: Código claro con funciones auxiliares bien definidas

### Lecciones aprendidas

- **TDD es fundamental**: Los tests guiaron la implementación correcta
- **Claridad vs micro-optimización**: toString().includes() es más legible que aritmética manual
- **Early termination**: Return inmediato mejora significativamente el caso promedio