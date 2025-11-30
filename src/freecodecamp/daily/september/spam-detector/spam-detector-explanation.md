---
name: spam-detector
source: freecodecamp
series: daily
category: daily
createdAt: 2025-09-10
difficulty: easy
topics:
  - String
  - Validation
hasImplementation: true
hasTests: true
hasExplanation: true
hasPostSolution: false
---

# Spam Detector - Análisis Detallado

## Enunciado del Problema

Dado un número de teléfono en el formato "+A (BBB) CCC-DDDD", donde cada letra representa un dígito según lo siguiente:

A representa el código de país y puede tener cualquier cantidad de dígitos.
BBB representa el código de área y siempre tendrá tres dígitos.
CCC y DDDD representan el número local y siempre tendrán tres y cuatro dígitos de longitud, respectivamente.
Determinar si es un número spam basado en los siguientes criterios:

El código de país tiene más de 2 dígitos de longitud o no comienza con cero (0).
El código de área es mayor que 900 o menor que 200.
La suma de los primeros tres dígitos del número local aparece dentro de los últimos cuatro dígitos del número local.
El número tiene el mismo dígito cuatro o más veces en fila (ignorando los caracteres de formato).

## Análisis Inicial

### Comprensión del Problema

El problema requiere analizar números de teléfono con un formato específico y determinar si cumplen ciertos criterios de spam. Los criterios son independientes - si cualquiera se cumple, el número es considerado spam.

**Entrada:** Una cadena de texto con formato específico de número de teléfono
**Salida:** Un booleano indicando si el número es spam

### Casos de Ejemplo

Analizando los ejemplos proporcionados:

1. `"+0 (200) 234-0182"` → `false`

   - Código de país: "0" (1 dígito, comienza con 0) → Válido
   - Código de área: "200" (entre 200-900) → Válido
   - Suma local: 2+3+4=9, no aparece en "0182" → Válido
   - Sin 4 dígitos repetidos → No es spam

2. `"+091 (555) 309-1922"` → `true`

   - Código de país: "091" (3 dígitos > 2) → Spam por criterio 1

3. `"+1 (555) 435-4792"` → `true`

   - Código de país: "1" (no comienza con 0) → Spam por criterio 1

4. `"+0 (955) 234-4364"` → `true`

   - Código de área: "955" (> 900) → Spam por criterio 2

5. `"+0 (155) 131-6943"` → `true`

   - Código de área: "155" (< 200) → Spam por criterio 2

6. `"+0 (555) 135-0192"` → `true`

   - Suma local: 1+3+5=9, aparece en "0192" → Spam por criterio 3

7. `"+0 (555) 564-1987"` → `true`

   - Dígitos consecutivos: "5555" (4 cincos seguidos) → Spam por criterio 4

8. `"+00 (555) 234-0182"` → `false`
   - Código de país: "00" (2 dígitos, comienza con 0) → Válido
   - Otros criterios también válidos → No es spam

### Restricciones

- El formato del número siempre será consistente: "+A (BBB) CCC-DDDD"
- Los códigos de área siempre tendrán exactamente 3 dígitos
- Los números locales siempre tendrán 3+4 dígitos
- Solo se consideran dígitos consecutivos idénticos (ignorando formato)
- Los criterios son OR - cualquier criterio que se cumpla marca como spam

## Solución Implementada

### Enfoque Algorítmico

La solución utiliza un enfoque secuencial que verifica cada criterio de spam en orden:

1. **Extracción de componentes:** Utilizar expresiones regulares para extraer código de país, área y números locales
2. **Validación de formato:** Verificar que el número tenga el formato esperado
3. **Verificación secuencial:** Evaluar cada criterio de spam en orden (OR lógico)
4. **Retorno temprano:** Devolver `true` inmediatamente al encontrar el primer criterio que se cumple

### Implementación

```javascript
function isSpam(number) {
  const partes = extraerPartesConRegex(number);
  if (!partes) return false;

  const { countryCode, areaCode, localFirst, localLast } = partes;

  // Criterio 1: Código de país inválido
  if (countryCode.length > 2 || countryCode[0] !== "0") {
    return true;
  }

  // Criterio 2: Código de área fuera de rango
  if (areaCode > 900 || areaCode < 200) {
    return true;
  }

  // Criterio 3: Suma de primeros 3 dígitos aparece en últimos 4
  const sumaLocal = localFirst
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  if (localLast.includes(sumaLocal.toString())) {
    return true;
  }

  // Criterio 4: Cuatro o más dígitos idénticos consecutivos
  const numeroSinFormato = number.replace(/[^\d]/g, "");
  if (/(\d)\1{3,}/.test(numeroSinFormato)) {
    return true;
  }

  return false;
}
```

### Complejidad

- **Tiempo:** O(n) donde n es la longitud del string de entrada
  - Regex `match()`: O(n)
  - Verificación de criterios: O(1) (operaciones constantes)
  - Cálculo de suma: O(1) (máximo 3 dígitos)
  - Búsqueda de dígitos repetidos: O(n)
- **Espacio:** O(1) adicional (sin estructuras de datos que crezcan con n)

## Casos de Prueba

### Casos Básicos

**No spam válido:**

- `"+0 (200) 234-0182"` → Código de país "0" (válido), área "200" (válido), suma 2+3+4=9 no en "0182", sin repeticiones

**Spam por código de país:**

- `"+091 (555) 309-1922"` → Código "091" tiene 3 dígitos (> 2)
- `"+1 (555) 435-4792"` → Código "1" no comienza con 0

### Casos con Códigos de Área

**Área alta (spam):**

- `"+0 (955) 234-4364"` → Área "955" > 900

**Área baja (spam):**

- `"+0 (155) 131-6943"` → Área "155" < 200

### Casos con Suma de Dígitos Locales

**Suma presente (spam):**

- `"+0 (555) 135-0192"` → Suma 1+3+5=9 aparece en "0192"

**Suma ausente (no spam):**

- `"+0 (555) 234-0182"` → Suma 2+3+4=9 no aparece en "0182"

### Casos con Dígitos Repetidos

**Cuatro repeticiones (spam):**

- `"+0 (555) 564-1987"` → Contiene "5555" (cuatro cincos)

**Sin repeticiones (no spam):**

- `"+00 (555) 234-0182"` → Sin cuatro dígitos consecutivos idénticos

### Casos Extremos

**Código de país de 2 dígitos válido:**

- `"+00 (555) 234-0182"` → Código "00" tiene 2 dígitos y comienza con 0

## Aprendizajes y Reflexiones

### Patrones Identificados

- **Expresiones regulares para parsing:** Las regex son poderosas para extraer datos estructurados de strings
- **Verificación secuencial con retorno temprano:** Permite código legible y eficiente
- **Uso de métodos de array funcionales:** `split()`, `reduce()`, `includes()` facilitan manipulaciones de strings
- **Backreferences en regex:** `(\d)\1{3,}` para encontrar repeticiones consecutivas

### Posibles Optimizaciones

#### Optimización 1: Cálculo de suma más eficiente

```javascript
// Actual: split + reduce
const sumaLocal = localFirst
  .split("")
  .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

// Optimizado: acceso directo por índices
const sumaLocal =
  parseInt(localFirst[0]) + parseInt(localFirst[1]) + parseInt(localFirst[2]);
```

#### Optimización 2: Reutilizar dígitos extraídos

```javascript
// Actual: vuelve a hacer replace
const numeroSinFormato = number.replace(/[^\d]/g, "");

// Optimizado: concatenar las partes ya extraídas
const numeroSinFormato = countryCode + areaCode + localFirst + localLast;
```

#### Optimización 3: Función inlineada

```javascript
// Actual: función separada
function extraerPartesConRegex(number) {
  /* ... */
}

// Optimizado: inline para reducir llamadas a función
const match = number.match(/\+(\d+)\s+\((\d{3})\)\s+(\d{3})-(\d{4})/);
if (!match) return false;
const [, countryCode, areaCode, localFirst, localLast] = match;
```

#### Optimización 4: Early return más agresivo

```javascript
// Combinar criterios simples primero
if (countryCode.length > 2) return true;
if (countryCode[0] !== "0") return true;
if (areaCode > 900 || areaCode < 200) return true;
// ... resto de criterios
```

### Lecciones Aprendidas

- **Importancia del análisis inicial:** Entender todos los criterios antes de implementar
- **Regex como herramienta principal:** Para parsing de formatos estructurados
- **Legibilidad vs performance:** El código actual privilegia la claridad sobre micro-optimizaciones
- **Testing exhaustivo:** Los 8 tests cubren todos los criterios y casos extremos
- **Separación de responsabilidades:** La función auxiliar mantiene el código principal limpio
- **Retorno temprano:** Mejora la legibilidad y puede optimizar en casos comunes
