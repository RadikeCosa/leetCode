---
title: "Calcetines Faltantes"
difficulty: "easy"
topics:
  - Math
  - Validation
  - Conversion
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-19"
---

# Calcetines Faltantes - Explicación

## Descripción del Problema

Este problema simula la gestión de calcetines a través de múltiples ciclos de lavado, donde diferentes eventos afectan la cantidad total de calcetines según reglas específicas.

**Parámetros de entrada:**

- `pairs`: Número inicial de pares de calcetines (cada par = 2 calcetines individuales)
- `cycles`: Número de ciclos de lavado realizados

**Reglas que se aplican durante los ciclos:**

1. **Cada 2 ciclos**: Se pierde 1 calcetín individual
2. **Cada 3 ciclos**: Encuentras 1 calcetín individual perdido
3. **Cada 5 ciclos**: Se desgasta 1 calcetín y debe desecharse
4. **Cada 10 ciclos**: Compras 1 par nuevo (2 calcetines)

**Restricciones importantes:**

- Las reglas pueden superponerse en el mismo ciclo
- Nunca puedes tener menos de 0 calcetines en total
- El resultado debe ser el número de **pares completos** (calcetines individuales ÷ 2, redondeado hacia abajo)

**Ejemplo de superposición:** En el ciclo 10, ocurren simultáneamente:

- Pierdes 1 calcetín (regla del ciclo 2: 10 es múltiplo de 2)
- Desechas 1 calcetín (regla del ciclo 5: 10 es múltiplo de 5)
- Compras 1 par (regla del ciclo 10: 10 es múltiplo de 10)
- Resultado neto: -1 -1 +2 = 0 calcetines de cambio

## Análisis de Casos de Prueba

Analicemos cada caso paso a paso para entender cómo se aplican las reglas:

### Caso 1: `sockPairs(2, 5)` → Resultado: `1`

- **Inicio**: 2 pares = 4 calcetines individuales
- **Ciclos analizados**: 1, 2, 3, 4, 5

**Eventos por ciclo:**

- Ciclo 2: Se pierde 1 calcetín (regla cada 2) → 4 - 1 = 3
- Ciclo 3: Encuentras 1 calcetín (regla cada 3) → 3 + 1 = 4
- Ciclo 4: Se pierde 1 calcetín (regla cada 2) → 4 - 1 = 3
- Ciclo 5: Se desgasta 1 calcetín (regla cada 5) → 3 - 1 = 2

**Resultado**: 2 calcetines individuales = 1 par completo

### Caso 2: `sockPairs(1, 2)` → Resultado: `0`

- **Inicio**: 1 par = 2 calcetines individuales
- **Ciclos analizados**: 1, 2

**Eventos por ciclo:**

- Ciclo 2: Se pierde 1 calcetín (regla cada 2) → 2 - 1 = 1

**Resultado**: 1 calcetín individual = 0 pares completos

### Caso 3: `sockPairs(5, 11)` → Resultado: `4`

- **Inicio**: 5 pares = 10 calcetines individuales
- **Eventos clave en 11 ciclos:**
 - Ciclos múltiplos de 2 (2,4,6,8,10): 5 calcetines perdidos
 - Ciclos múltiplos de 3 (3,6,9): 3 calcetines encontrados
 - Ciclos múltiplos de 5 (5,10): 2 calcetines desechados
 - Ciclos múltiplos de 10 (10): 1 par comprado (+2 calcetines)

**Cálculo**: 10 - 5 + 3 - 2 + 2 = 8 calcetines = 4 pares

### Caso 4: `sockPairs(6, 25)` → Resultado: `3`

- **Inicio**: 6 pares = 12 calcetines individuales
- **En 25 ciclos:**
 - Múltiplos de 2: 12 calcetines perdidos
 - Múltiplos de 3: 8 calcetines encontrados
 - Múltiplos de 5: 5 calcetines desechados
 - Múltiplos de 10: 2 pares comprados (+4 calcetines)

**Cálculo**: 12 - 12 + 8 - 5 + 4 = 7 calcetines = 3 pares

### Caso 5: `sockPairs(1, 8)` → Resultado: `0`

- **Inicio**: 1 par = 2 calcetines individuales
- **En 8 ciclos:**
 - Múltiplos de 2: 4 calcetines perdidos
 - Múltiplos de 3: 2 calcetines encontrados
 - Múltiplos de 5: 1 calcetín desechado

**Cálculo**: 2 - 4 + 2 - 1 = -1, pero mínimo es 0 → 0 calcetines = 0 pares

## Enfoque de Solución

### Estrategia Optimizada: Cálculo Directo con Múltiplos

En lugar de simular cada ciclo individualmente, podemos calcular directamente cuántas veces se aplica cada regla usando **división entera**.

**Fórmula matemática:**

```javascript
// Convertir pares iniciales a calcetines individuales
totalSocks = pairs * 2;

// Calcular eventos totales usando Math.floor()
socksLost = Math.floor(cycles / 2); // Cada 2 ciclos: pierde 1
socksFound = Math.floor(cycles / 3); // Cada 3 ciclos: encuentra 1
socksDiscarded = Math.floor(cycles / 5); // Cada 5 ciclos: desecha 1
socksBought = Math.floor(cycles / 10) * 2; // Cada 10 ciclos: compra 1 par

// Aplicar todas las reglas simultáneamente
totalSocks = totalSocks - socksLost + socksFound - socksDiscarded + socksBought;

// Aplicar restricción de no negativos
totalSocks = Math.max(totalSocks, 0);

// Convertir a pares completos
return Math.floor(totalSocks / 2);
```

### Ventajas de Esta Estrategia

**✅ Eficiencia superior:**

- **Complejidad temporal**: O(1) en lugar de O(n)
- **Complejidad espacial**: O(1)
- Perfecto para valores grandes de `cycles` (ej: 1,000,000)

**✅ Claridad matemática:**

- Cada regla se calcula independientemente
- Fácil verificación manual
- Menos propenso a errores de implementación

**✅ Escalabilidad:**

- No depende del número de ciclos
- Tiempo de ejecución constante

### Verificación Matemática

**Ejemplo con `sockPairs(5, 11)`:**

```
Inicio: 5 pares = 10 calcetines

Eventos en 11 ciclos:
- Math.floor(11/2) = 5 calcetines perdidos
- Math.floor(11/3) = 3 calcetines encontrados
- Math.floor(11/5) = 2 calcetines desechados
- Math.floor(11/10) = 1 par comprado = 2 calcetines

Cálculo: 10 - 5 + 3 - 2 + 2 = 8 calcetines = 4 pares ✅
```

## Complejidad

### Complejidad Temporal

**O(1) - Tiempo constante**

- La solución realiza un número fijo de operaciones matemáticas
- No depende del valor de `cycles`
- Cada operación (`Math.floor()`, suma, resta) es O(1)
- Total: 4 divisiones + 4 operaciones aritméticas + 2 funciones = O(1)

### Complejidad Espacial

**O(1) - Espacio constante**

- Solo utiliza variables primitivas (`socksLost`, `socksFound`, etc.)
- No se crean estructuras de datos adicionales
- El espacio usado no depende del tamaño de la entrada

## Conceptos Clave

### 1. **Optimización Matemática**

- **División entera**: `Math.floor(cycles / n)` calcula múltiplos eficientemente
- **Agregación**: Sumar todos los efectos al final en lugar de paso a paso
- **Complejidad**: Transformar algoritmo O(n) a O(1)

### 2. **Manejo de Restricciones**

- **No negativos**: `Math.max(totalSocks, 0)` asegura el mínimo
- **Conversión de tipos**: Pares ↔ calcetines individuales
- **Redondeo hacia abajo**: `Math.floor()` para pares completos

### 3. **Superposición de Reglas**

- Múltiples reglas pueden aplicarse en el mismo ciclo
- El orden de aplicación no afecta el resultado final
- Cálculo matemático directo evita complejidad de simulación

### 4. **Patrones de FreeCodeCamp**

- **Entrada/Salida clara**: Parámetros bien definidos
- **Casos edge**: Valores negativos, cero pares
- **Eficiencia**: Optimización para casos grandes

## Notas de Implementación

### ✅ **Buenas Prácticas Aplicadas**

- **Variables descriptivas**: `socksLost`, `socksFound` en lugar de `a`, `b`
- **Comentarios explicativos**: Cada paso documentado
- **Separación de responsabilidades**: Cada regla calculada independientemente
- **Validación**: Restricción de no negativos aplicada explícitamente

### 🔄 **Alternativas Consideradas**

1. **Simulación iterativa**: Más intuitiva pero menos eficiente O(n)
2. **Recursión**: Innecesariamente compleja para este problema
3. **Lookup tables**: Exceso de complejidad para reglas matemáticas simples

### 🎯 **Casos de Uso Ideales**

- **Valores grandes de cycles**: Excelente rendimiento
- **Múltiples llamadas**: Tiempo constante por ejecución
- **Sistemas en tiempo real**: Respuesta predecible y rápida

### ⚠️ **Consideraciones Especiales**

- **Overflow**: Para valores extremos de `cycles`, verificar límites de JavaScript
- **Precisión**: `Math.floor()` garantiza enteros correctos
- **Legibilidad**: Balance entre optimización y claridad del código