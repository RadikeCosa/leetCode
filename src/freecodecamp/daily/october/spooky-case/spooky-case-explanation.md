---
name: spooky-case
source: freecodecamp
series: daily
category: daily
createdAt: 2025-10-06
difficulty: easy
topics:
  - String
  - Regex
hasImplementation: true
hasTests: true
hasExplanation: true
hasPostSolution: false
---

# SpOoKy~CaSe - Análisis y Solución

## Descripción del Problema

Dado un string que representa un nombre de variable, convertirlo a "spooky case" siguiendo estas reglas:

1. Reemplazar todos los guiones bajos (\_) y guiones medios (-) por tildes (~)
2. Capitalizar la primera letra y cada segunda letra después de esa
3. Ignorar las tildes al contar las letras para la capitalización

### Ejemplos

- `hello_world` → `HeLlO~wOrLd`
- `Spooky_Case` → `SpOoKy~CaSe`
- `TRICK-or-TREAT` → `TrIcK~oR~tReAt`
- `c_a-n_d-y_-b-o_w-l` → `C~a~N~d~Y~~b~O~w~L`
- `thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts` → `ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS`

## Planteamiento y Solución

### Análisis del Problema

El problema se puede descomponer en dos partes principales:

1. **Transformación de Separadores**:

   - Input puede contener guiones (-) y guiones bajos (\_) en cualquier combinación
   - Debemos reemplazar TODOS con tildes (~)
   - La cantidad y posición de separadores debe mantenerse exacta
   - Pueden existir separadores consecutivos (ej: \_- → ~~)

2. **Patrón de Alternación**:
   - Cada letra alterna entre mayúscula y minúscula
   - La primera letra SIEMPRE va en mayúscula
   - Los caracteres ~ NO cuentan para la alternación
   - El caso original de las letras es irrelevante

### Enfoque Utilizado

Implementamos una solución en dos fases para mantener el código limpio y fácil de mantener:

1. **Fase 1: Normalización de Separadores**

   ```javascript
   const str = boo.replace(/[-_]/g, "~");
   ```

   - Usamos regex con el flag `g` (global)
   - El patrón `[-_]` captura ambos tipos de separadores
   - La operación es eficiente y mantiene el orden

2. **Fase 2: Aplicación del Patrón Spooky**

   ```javascript
   let capitalize = true; // Iniciamos con mayúscula

   for (let char of str) {
     if (char === "~") {
       result += "~"; // Preservamos tilde sin cambiar estado
     } else {
       result += capitalize ? char.toUpperCase() : char.toLowerCase();
       capitalize = !capitalize; // Alternamos para siguiente letra
     }
   }
   ```

### Complejidad

**Complejidad Temporal: O(n)**

- `replace()`: O(n) - recorre todo el string una vez
- Loop principal: O(n) - una iteración por caracter
- Operaciones de caso (toUpperCase/toLowerCase): O(1)
- Total: O(n) donde n es la longitud del string

**Complejidad Espacial: O(n)**

- String resultado: O(n) - mismo tamaño que input
- Variables de control (capitalize, char): O(1)
- No usamos estructuras auxiliares que crezcan
- Total: O(n) para almacenar el resultado

### Consideraciones Especiales

1. **Casos Borde (Edge Cases)**:

   - String vacío → retorna string vacío
   - Un solo caracter → siempre en mayúscula
   - Solo separadores → se convierten a tildes
   - Separadores consecutivos → se mantienen

2. **Invariantes del Algoritmo**:

   - La longitud del output = longitud del input
   - Número de separadores se mantiene constante
   - Primera letra siempre mayúscula

3. **Alternativas Consideradas**:

   - ❌ Dividir por separadores y juntar: más complejo y pierde separadores consecutivos
   - ❌ Usar índices para alternar: más difícil manejar las tildes
   - ✅ Estado booleano: simple y efectivo

4. **Aprendizajes y Patrones**:

   - Estado simple vs complejidad: un booleano es suficiente
   - Transformación en fases: facilita testing y mantenimiento
   - Inmutabilidad: generamos nuevo string en vez de modificar
   - Regex para normalización: más limpio que múltiples replaces

5. **Mejoras Posibles**:
   - Validación de input si fuera necesario
   - Manejo de caracteres especiales adicionales
   - Optimización de memoria para strings muy grandes
   - Configuración de separadores dinámicos
