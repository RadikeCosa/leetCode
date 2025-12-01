---
title: "thermostat-adjuster-2"
difficulty: "easy"
topics:
  - Math
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-21"
---

# Thermostat Adjuster 2 - Explicación

## Enunciado del Problema

Dada la temperatura actual de una habitación en Fahrenheit y una temperatura objetivo en Celsius, retorna un string indicando cómo ajustar la temperatura de la habitación basado en estas restricciones:

- Retorna `"Heat: X degrees Fahrenheit"` si la temperatura actual está por debajo del objetivo. Con X siendo el número de grados Fahrenheit para calentar la habitación hasta alcanzar el objetivo, redondeado a 1 decimal.
- Retorna `"Cool: X degrees Fahrenheit"` si la temperatura actual está por encima del objetivo. Con X siendo el número de grados Fahrenheit para enfriar la habitación hasta alcanzar el objetivo, redondeado a 1 decimal.
- Retorna `"Hold"` si la temperatura actual es igual al objetivo.

**Fórmula de conversión:** `F = (C * 1.8) + 32`

**Casos de prueba:**

- `adjustThermostat(32, 0)` → `"Hold"` (32°F = 0°C)
- `adjustThermostat(70, 25)` → `"Heat: 7.0 degrees Fahrenheit"` (70°F < 77°F)
- `adjustThermostat(72, 18)` → `"Cool: 7.6 degrees Fahrenheit"` (72°F > 64.4°F)
- `adjustThermostat(212, 100)` → `"Hold"` (212°F = 100°C)
- `adjustThermostat(59, 22)` → `"Heat: 12.6 degrees Fahrenheit"` (59°F < 71.6°F)

## Análisis Inicial

El problema requiere tres pasos fundamentales:

1. **Conversión de unidades**: Convertir la temperatura objetivo de Celsius a Fahrenheit
2. **Comparación**: Determinar si la temperatura actual es mayor, menor o igual al objetivo
3. **Formateo de respuesta**: Generar el string apropiado con el cálculo de diferencia redondeado

**Puntos clave a considerar:**

- La temperatura actual ya está en Fahrenheit
- La temperatura objetivo necesita conversión de Celsius a Fahrenheit
- Las diferencias deben redondearse a exactamente 1 decimal
- El formato de string debe ser exacto: `"Heat: X degrees Fahrenheit"` / `"Cool: X degrees Fahrenheit"`

## Estrategia de Solución

### Paso 1: Conversión de temperatura objetivo

```javascript
const targetF = targetC * 1.8 + 32;
```

### Paso 2: Calcular diferencia y determinar acción

```javascript
const difference = targetF - currentF;

if (difference > 0) {
  // Necesitamos calentar: targetF es mayor que currentF
  return `Heat: ${difference.toFixed(1)} degrees Fahrenheit`;
} else if (difference < 0) {
  // Necesitamos enfriar: targetF es menor que currentF
  // Usamos Math.abs() para obtener valor positivo
  return `Cool: ${Math.abs(difference).toFixed(1)} degrees Fahrenheit`;
} else {
  // Las temperaturas son iguales
  return "Hold";
}
```

### Paso 3: Validación de cálculos

**Ejemplo - Caso 2:** `adjustThermostat(70, 25)`

- `targetF = (25 * 1.8) + 32 = 45 + 32 = 77°F`
- `difference = 77 - 70 = 7°F`
- `difference > 0` → `"Heat: 7.0 degrees Fahrenheit"`

**Ejemplo - Caso 3:** `adjustThermostat(72, 18)`

- `targetF = (18 * 1.8) + 32 = 32.4 + 32 = 64.4°F`
- `difference = 64.4 - 72 = -7.6°F`
- `difference < 0` → `"Cool: 7.6 degrees Fahrenheit"`

## Implementación Paso a Paso

### Versión Final Optimizada

```javascript
function adjustThermostat(currentF, targetC) {
  const targetF = parseFloat((targetC * 1.8 + 32).toFixed(1));

  if (currentF < targetF) {
    const difference = (targetF - currentF).toFixed(1);
    return `Heat: ${difference} degrees Fahrenheit`;
  } else if (currentF > targetF) {
    const difference = (currentF - targetF).toFixed(1);
    return `Cool: ${difference} degrees Fahrenheit`;
  } else {
    return "Hold";
  }
}
```

### Detalles de la Implementación

**1. Conversión de temperatura:**

```javascript
const targetF = parseFloat((targetC * 1.8 + 32).toFixed(1));
```

- Convertimos Celsius a Fahrenheit
- Redondeamos a 1 decimal con `toFixed(1)`
- Usamos `parseFloat()` para volver a número y permitir comparaciones precisas

**2. Comparación y cálculo de diferencias:**

```javascript
if (currentF < targetF) {
  const difference = (targetF - currentF).toFixed(1);
  return `Heat: ${difference} degrees Fahrenheit`;
}
```

- Comparamos temperaturas en Fahrenheit
- Calculamos diferencia manteniendo 1 decimal con `toFixed(1)`
- Retornamos string directamente sin `parseFloat()` para preservar formato

**3. Manejo de caso "Cool":**

```javascript
const difference = (currentF - targetF).toFixed(1);
```

- Invertimos el orden de la resta para obtener valor positivo
- No necesitamos `Math.abs()` porque ya controlamos el orden

## Complejidad

### Complejidad Temporal

O(1) - Operaciones aritméticas constantes. Solo conversión, comparación y formateo de números.

### Complejidad Espacial

O(1) - Se crean solo unas pocas variables para almacenar resultados intermedios.

## Casos Especiales y Edge Cases

### Manejo de Floating Point

- **Problema:** Las operaciones con decimales pueden generar imprecisión
- **Solución:** Usar `toFixed(1)` consistentemente para redondear a 1 decimal
- **Ejemplo:** `64.39999999` se convierte en `"64.4"`

### Casos de Igualdad

- **32°F y 0°C:** Ambos son exactamente 32°F → "Hold"
- **212°F y 100°C:** Ambos son exactamente 212°F → "Hold"
- **Precisión:** La comparación funciona porque redondeamos targetF antes de comparar

### Preservación de Formato

- **Requerimiento:** Siempre mostrar 1 decimal (ej: "7.0" no "7")
- **Solución:** Usar `toFixed(1)` en el template string final, no `parseFloat()`

### Casos Límite Adicionales Probados

**Temperaturas negativas:**

- `adjustThermostat(20, -10)` → `"Cool: 6.0 degrees Fahrenheit"`
- Maneja conversiones con Celsius negativos correctamente

**Diferencias muy pequeñas:**

- `adjustThermostat(70, 21)` → `"Cool: 0.2 degrees Fahrenheit"`
- Precisión mantenida para ajustes mínimos

**Redondeo complejo:**

- `adjustThermostat(60, 15.3)` → `"Cool: 0.5 degrees Fahrenheit"`
- `15.3°C = 59.54°F`, diferencia `0.46°F` redondeada a `0.5°F`

**Diferencias grandes:**

- `adjustThermostat(80, 40)` → `"Heat: 24.0 degrees Fahrenheit"`
- `40°C = 104°F`, maneja rangos amplios de temperatura

**Casi igualdad:**

- `adjustThermostat(68, 20.06)` → `"Heat: 0.1 degrees Fahrenheit"`
- Detecta diferencias mínimas que requieren ajuste

## Patrones y Técnicas Aplicadas

1. **Conversión de unidades**: Aplicación de fórmula matemática estándar
2. **Redondeo controlado**: Uso de `toFixed(1)` para precisión consistente
3. **Condicionales en cascada**: if/else if/else para manejo de 3 casos mutuamente excluyentes
4. **Template literals**: Construcción dinámica de strings con formato específico
5. **Separación de responsabilidades**: Conversión → Comparación → Formateo

## Aprendizajes Clave

- **toFixed() vs parseFloat()**: `toFixed()` preserva formato, `parseFloat()` lo elimina
- **Manejo de precisión**: Redondear antes de comparar evita problemas de floating point
- **Orden de operaciones**: Para diferencias positivas, controlar orden de resta es más simple que `Math.abs()`
- **Validación con cálculos manuales**: Verificar casos edge como 0°C = 32°F y 100°C = 212°F
- **Formato exacto de strings**: Los tests requieren formato preciso incluyendo espacios y mayúsculas