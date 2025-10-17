# Conceptos y Patrones JavaScript - FreeCodeCamp

## Manipulación de Strings

### Detección de Separadores

**Patrón:** Cuando una entrada puede tener diferentes tipos de separadores, detectar dinámicamente cuál se usa.

```javascript
// Detectar separador (espacio o guion)
const separator = card.includes(" ") ? " " : "-";
```

**Cuándo usar:**

- Entradas con formato variable pero consistente
- Necesidad de preservar el formato original en la salida
- Separadores limitados a opciones conocidas

**Ejemplo del problema Credit Card Masker:**

```javascript
function mask(card) {
  const separator = card.includes(" ") ? " " : "-";
  const groups = card.split(separator);
  const masked = groups.map((group, i) => (i < 3 ? "****" : group));
  return masked.join(separator);
}
```

### Procesamiento por Grupos

**Patrón:** Dividir strings estructurados en grupos lógicos para procesamiento selectivo.

```javascript
// Dividir y procesar grupos
const groups = card.split(separator);
const processed = groups.map((group, index) => {
  // Lógica diferente según la posición del grupo
  return index < 3 ? transform(group) : group;
});
```

**Beneficios:**

- Simplifica lógica compleja
- Mantiene estructura del dato original
- Fácil de entender y mantener

## Arrays Funcionales

### map() con Índice

**Patrón:** Usar el parámetro `index` en `map()` para aplicar transformaciones condicionales.

```javascript
array.map((element, index) => {
  // Transformación basada en la posición
  return index < threshold ? transform(element) : element;
});
```

**Casos de uso:**

- Transformaciones parciales de arrays
- Procesamiento condicional por posición
- Creación de máscaras o filtros selectivos

## Operadores y Expresiones

### Operador Ternario para Configuración

**Patrón:** Usar ternario para configurar variables basadas en condiciones simples.

```javascript
const config = condition ? valueA : valueB;
```

**Ventajas:**

- Conciso para decisiones binarias
- Legible cuando las opciones son claras
- Evita bloques if-else innecesarios

## Patrones de Validación

### Formatos Consistentes

**Patrón:** Aprovechar restricciones conocidas para simplificar validación.

- **Longitud fija:** No validar longitud si siempre es la misma
- **Caracteres limitados:** Solo validar caracteres permitidos si son conocidos
- **Estructura fija:** Confiar en el formato garantizado por el problema

**Ejemplo:** Credit Card Masker asume 16 dígitos + 3 separadores = 19 caracteres siempre.

## Mejores Prácticas

### Nombres Descriptivos

```javascript
// ✅ Bueno
const separator = card.includes(" ") ? " " : "-";
const groups = card.split(separator);
const maskedGroups = groups.map(/* ... */);

// ❌ Evitar
const s = card.includes(" ") ? " " : "-";
const g = card.split(s);
const m = g.map(/* ... */);
```

### Comentarios Estratégicos

```javascript
// Detectar el separador usado (espacio o guion)
const separator = card.includes(" ") ? " " : "-";

// Dividir en grupos de 4 dígitos
const groups = card.split(separator);

// Enmascarar selectivamente
const masked = groups.map((group, i) => (i < 3 ? "****" : group));
```

### Funciones Puras

- **Input consistente → Output consistente**
- **Sin efectos secundarios**
- **Fáciles de testear**

## Errores Comunes a Evitar

### 1. Separadores Mezclados

```javascript
// ❌ Incorrecto - siempre usa guiones
return masked.join("-");

// ✅ Correcto - preserva el separador original
return masked.join(separator);
```

### 2. Índices Fuera de Rango

```javascript
// ❌ Puede causar errores si array es más pequeño
if (groups.length > 3) {
  // lógica compleja
}

// ✅ Aprovecha restricciones conocidas
// Sabemos que siempre hay exactamente 4 grupos
const masked = groups.map((group, i) => (i < 3 ? "****" : group));
```

### 3. Regex Innecesariamente Complejo

```javascript
// ❌ Overkill para este problema
const regex = /^(\d{4})[-\s](\d{4})[-\s](\d{4})[-\s](\d{4})$/;

// ✅ Simple y directo
const separator = card.includes(" ") ? " " : "-";
const groups = card.split(separator);
```
