---
title: "phone-number-formatter"
difficulty: "easy"
topics:
  - String
  - Formatting
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-09-07"
---

# Phone Number Formatter - Explicación

## Enunciado del Problema

Dado un string de 11 dígitos, retorna el string como un número de teléfono en este formato: "+D (DDD) DDD-DDDD".

**Ejemplos:**

- `formatNumber("05552340182")` debe retornar `"+0 (555) 234-0182"`
- `formatNumber("15554354792")` debe retornar `"+1 (555) 435-4792"`

## Análisis Inicial

El problema requiere reformatear un string de 11 dígitos siguiendo un patrón específico:

- Primer dígito: código de país (después del +)
- Siguientes 3 dígitos: código de área (entre paréntesis)
- Siguientes 3 dígitos: código de oficina central
- Últimos 4 dígitos: número de línea (después del guión)

## Estrategia de Solución

Utilizamos el método `slice()` para extraer las diferentes partes del string:

1. `slice(0, 1)`: primer dígito (código de país)
2. `slice(1, 4)`: dígitos 2-4 (código de área)
3. `slice(4, 7)`: dígitos 5-7 (código de oficina)
4. `slice(7)`: dígitos 8-11 (número de línea)

Luego concatenamos usando template literals con el formato requerido.

## Implementación Paso a Paso

**Versión inicial (con variables intermedias):**

```javascript
function formatNumber(number) {
  let countryCode = number.slice(0, 1);
  let areaCode = number.slice(1, 4);
  let centralOfficeCode = number.slice(4, 7);
  let lineNumber = number.slice(7);

  return `+${countryCode} (${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}
```

**Versión optimizada (directa):**

```javascript
function formatNumber(number) {
  return `+${number.slice(0, 1)} (${number.slice(1, 4)}) ${number.slice(
    4,
    7
  )}-${number.slice(7)}`;
}
```

## Complejidad

### Complejidad Temporal

O(1) - Las operaciones de `slice()` en strings de longitud fija son constantes. No hay bucles ni recursión.

### Complejidad Espacial

O(1) - Solo se crean algunas variables temporales para las partes del string. El espacio usado no depende del tamaño de la entrada.

## Casos Especiales y Edge Cases

- **Input válido**: El problema asume que siempre se recibirá un string de exactamente 11 dígitos
- **No se requiere validación**: No necesitamos verificar la longitud o que sean solo números
- **Formato fijo**: Siempre seguimos el mismo patrón de formato

## Patrones y Técnicas Aplicadas

1. **String Slicing**: Técnica fundamental para extraer substrings
2. **Template Literals**: Para concatenación legible y eficiente
3. **Código en una línea**: Optimización que elimina variables intermedias
4. **Patrones de formato**: Aplicación de un formato específico a datos estructurados

## Aprendizajes Clave

- `slice(start, end)` extrae desde `start` hasta `end-1`
- `slice(start)` sin segundo parámetro extrae hasta el final
- Template literals (`${}`) son más legibles que concatenación con `+`
- Para problemas simples de formato, a veces la solución directa es más clara
- La optimización puede mejorar la legibilidad eliminando variables innecesarias