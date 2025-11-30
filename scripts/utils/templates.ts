/**
 * Template generators for skeleton files
 */

import { SeriesType, SERIES_CONFIG } from "./problem-utils";

/**
 * Create implementation file template (TypeScript or JavaScript)
 */
export function createImplementationTemplate(
  series: SeriesType,
  problemName: string,
  functionName: string
): string {
  const seriesConfig = SERIES_CONFIG[series];

  if (seriesConfig.language === "ts") {
    // TypeScript template for LeetCode problems
    return `/**
 * LeetCode Problem: ${problemName
   .split("-")
   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
   .join(" ")}
 * Difficulty: 
 * Topics: 
 * 
 * @param {any} param - TODO: Define parameter type and description
 * @returns {any} TODO: Define return type and description
 */
export function ${functionName}(param: any): any {
  // TODO: Implement solution
}
`;
  } else {
    // JavaScript template for FreeCodeCamp problems
    return `/**
 * FreeCodeCamp Problem: ${problemName
   .split("-")
   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
   .join(" ")}
 * Category: ${series === "freecodecamp" ? "FreeCodeCamp" : series}
 * 
 * @param {any} param - TODO: Define parameter and description
 * @returns {any} TODO: Define return type and description
 */
function ${functionName}(param) {
  // TODO: Implement solution
}

export default ${functionName};
`;
  }
}

/**
 * Create test file template
 */
export function createTestTemplate(
  series: SeriesType,
  problemName: string,
  functionName: string
): string {
  const seriesConfig = SERIES_CONFIG[series];
  const titleCase = problemName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (seriesConfig.language === "ts") {
    return `import { ${functionName} } from './${problemName}';

/**
 * TODO: Add complete problem statement here
 * 
 * Problem statement word-for-word:
 * - [ ] Add problem description
 * - [ ] Add all examples
 * - [ ] Add all constraints  
 * - [ ] Add hints if they exist
 * - [ ] Add tags and difficulty
 */

describe("${titleCase}", () => {
  // TODO: Collaborative test writing starts here
  // Ask: "¿Qué casos de prueba ves en el ejemplo 1?"
  // User implements each it() and expect()
});
`;
  } else {
    return `import ${functionName} from './${problemName}';

/**
 * TODO: Add complete problem statement here
 * 
 * Problem statement word-for-word:
 * - [ ] Add problem description
 * - [ ] Add all examples
 * - [ ] Add all constraints  
 * - [ ] Add hints if they exist
 * - [ ] Add tags and difficulty
 */

describe("${titleCase}", () => {
  // TODO: Collaborative test writing starts here
  // Ask: "¿Qué casos de prueba ves en el ejemplo 1?"
  // User implements each it() and expect()
});
`;
  }
}

/**
 * Create explanation file template (always in Spanish)
 */
export function createExplanationTemplate(problemName: string): string {
  const titleCase = problemName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return `---
title: ${titleCase}
source: leetcode
series: TODO
category: TODO
createdAt: ${new Date().toISOString().slice(0, 10)}
difficulty: TODO
topics:
  - TODO
---

# ${titleCase} - Análisis y Explicación

## Enunciado del Problema

<!-- TODO: Agregar enunciado completo del problema -->

## Análisis Inicial

### Comprensión del Problema

<!-- TODO: Explicar qué necesita hacer la función -->

### Casos de Prueba Identificados

<!-- TODO: Documentar casos de prueba después de implementarlos -->

## Desarrollo de la Solución

### Enfoque Elegido

<!-- TODO: Explicar el algoritmo/estrategia utilizada -->

### Implementación Paso a Paso

<!-- TODO: Detallar la lógica de implementación -->

## Análisis de Complejidad

### Complejidad Temporal
<!-- TODO: Analizar Big O tiempo -->

### Complejidad Espacial  
<!-- TODO: Analizar Big O espacio -->

## Casos Edge y Consideraciones

<!-- TODO: Documentar casos especiales manejados -->

## Reflexiones y Aprendizajes

### Conceptos Aplicados

<!-- TODO: ¿Qué patrones/técnicas se usaron? -->

### Posibles Optimizaciones

<!-- TODO: ¿Se puede mejorar? -->

## Recursos y Referencias

<!-- TODO: Links útiles, algoritmos relacionados, etc. -->
`;
}

/**
 * Create post-solution file template (only for LeetCode, in English)
 */
export function createPostSolutionTemplate(problemName: string): string {
  const titleCase = problemName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return `# ${titleCase} - LeetCode Solution

## Intuition

<!-- TODO: High-level idea for solving the problem -->

## Approach

<!-- TODO: Detailed algorithm explanation -->

## Complexity

- **Time complexity:** <!-- TODO: O(?) -->
- **Space complexity:** <!-- TODO: O(?) -->

## Code

\`\`\`typescript
// TODO: Add clean implementation here
\`\`\`

## Notes

<!-- TODO: Edge cases, design decisions, patterns used -->
`;
}
