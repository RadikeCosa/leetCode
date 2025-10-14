# Copilot Instructions for LeetCode Practice Repository

## Project Overview

This is a TypeScript-based LeetCode practice repository (with JavaScript support for FreeCodeCamp problems) following a **mentorship-driven learning approach**. The project emphasizes guided learning over direct solution generation, building algorithmic intuition through structured problem-solving and comprehensive documentation.

## Architecture & Structure

- **Core Pattern**: Each problem follows a structured directory layout with:
  - Implementation file (`.ts` or `.js`)
  - Test file (`.test.ts` or `.test.js`)
  - Explanation file (`-explanation.md`)
  - Post-solution file (`-post-solution.md` - **NOT for FreeCodeCamp problems**)
- **Problem Series**:

  - `src/daily/` - General LeetCode problems (main series)

    - Structure: `src/daily/problem-name/`
    - Files: `problem-name.ts`, `problem-name.test.ts`, `problem-name-explanation.md`, `problem-name-post-solution.md`

  - `src/30-days-js/` - "30 Days of JavaScript" LeetCode series

    - Structure: `src/30-days-js/section-name/problem-name/`
    - Organized by thematic sections (e.g., `parte-1-introduccion`, `parte-2-transformacion-de-arrays`)
    - Files: `problem-name.ts`, `problem-name.test.ts`, `problem-name-explanation.md`, `problem-name-post-solution.md`

  - `src/top-interview/` - Top interview LeetCode problems

    - Structure: `src/top-interview/category-name/problem-name/`
    - Files: `problem-name.ts`, `problem-name.test.ts`, `problem-name-explanation.md`, `problem-name-post-solution.md`

  - `src/binary-search/` - Binary Search Study Plan problems

    - Structure: `src/binary-search/section-name/problem-name/`
    - Organized by thematic sections:
      - `search-in-array/` - Búsqueda básica en arrays ordenados
      - `rotated-array/` - Búsqueda en arrays rotados
      - `standard-search/` - Búsqueda binaria estándar y variaciones
      - `math/` - Problemas matemáticos que usan binary search
      - `tricky-invariant/` - Problemas con invariantes complejas
      - `as-a-tool/` - Binary search como herramienta para otros algoritmos
    - Files: `problem-name.ts`, `problem-name.test.ts`, `problem-name-explanation.md`, `problem-name-post-solution.md`

  - `src/freecodecamp/` - FreeCodeCamp problems and challenges (JavaScript only)
    - **Structure**: Organized by challenge categories:
      - `src/freecodecamp/daily/problem-slug/` - Daily Coding Challenges
      - `src/freecodecamp/coding-interview-prep/problem-slug/` - Coding Interview Preparation
      - `src/freecodecamp/project-euler/problem-slug/` - Project Euler problems
      - `src/freecodecamp/rosetta-code/problem-slug/` - Rosetta Code problems
    - **Files per problem** (simplified structure for FreeCodeCamp):
      - `problem-name.js` - Implementation in plain JavaScript
      - `problem-name.test.js` - Vitest test suite (EMPTY describe block only)
      - `problem-name-explanation.md` - Detailed analysis in Spanish
      - **NO post-solution file** (FreeCodeCamp problems don't need LeetCode-style posts)
    - **Key differences from LeetCode problems**:
      - Only JavaScript (no TypeScript)
      - Only one explanation file (no post-solution file)
      - Same collaborative test implementation approach

- **Knowledge Base**:
  - `src/conceptos-y-algoritmos.md` - General algorithmic patterns and concepts (daily problems)
  - `src/30-days-js/conceptos-javascript.md` - JavaScript/TypeScript concepts and functional programming patterns
  - `src/top-interview/metodologia-y-aprendizajes.md` - TDD methodology and problem-solving approach
  - `src/binary-search/conceptos-binary-search.md` - Binary search patterns, techniques and algorithmic approaches
- **Templates**: `src/daily/utilidades/`, `src/30-days-js/utilidades/`, and `src/binary-search/utilidades/` contain markdown templates for new problems

## TDD Methodology (Test-Driven Development)

All problems follow a systematic **Test-Driven Development** approach:

### 🔴 **RED Phase - Write Failing Tests**

1. **Problem analysis**: Fully understand statement and constraints
2. **Test cases**: Collaborate with user to implement tests based on LeetCode/FreeCodeCamp examples
3. **Edge cases**: Guide user to identify and add tests for boundary conditions
4. **Verification**: Confirm tests fail (empty/skeleton function)

### 🟢 **GREEN Phase - Implement Minimal Solution**

1. **Functional solution**: User writes code to pass all tests with guidance
2. **Pragmatic approach**: Prioritize functionality over premature optimization
3. **Descriptive naming**: Self-explanatory variables and functions from start
4. **Rapid iteration**: Use `npm run test:watch` for immediate feedback

### 🔵 **REFACTOR Phase - Optimize and Document**

1. **Complexity analysis**: Evaluate time and space complexity together
2. **Complete documentation**: Fill explanation.md (and post-solution.md for LeetCode)
3. **Pattern identification**: Document techniques and strategies used
4. **Knowledge base update**: Add new concepts to relevant knowledge files

### TDD Benefits for Algorithms

- **Requirement clarity**: Tests define exact behavior expected
- **Solution confidence**: Complete coverage of test cases
- **Safe refactoring**: Changes backed by comprehensive tests
- **Living documentation**: Tests serve as executable specification
- **Collaborative learning**: Writing tests together builds understanding

## Code Conventions

### Implementation Standards

**For LeetCode problems (TypeScript):**

```typescript
/**
 * LeetCode Problem X: Title
 * Difficulty: Easy/Medium/Hard
 * Topics: Array, Hash Table, etc.
 *
 * Brief problem description
 *
 * Time Complexity: O(n) - explanation
 * Space Complexity: O(1) - explanation
 */
export function descriptiveName(params: Type[]): ReturnType {
  // Spanish comments explaining logic
  const variable = new Map<KeyType, ValueType>();
  // Implementation...
}
```

**For FreeCodeCamp problems (JavaScript):**

```javascript
/**
 * FreeCodeCamp Problem: Title
 * Category: Daily/Coding Interview Prep/Project Euler/Rosetta Code
 * Difficulty: Easy/Medium/Hard
 * Topics: Array, Functions, etc.
 *
 * Brief problem description
 *
 * Time Complexity: O(n) - explanation
 * Space Complexity: O(1) - explanation
 */
function descriptiveName(params) {
  // Spanish comments explaining logic
  const variable = new Map();
  // Implementation...
}

module.exports = descriptiveName;
```

### Testing Patterns

**For LeetCode problems (TypeScript):**

```typescript
/**
 * LeetCode Problem [NUMBER]: [TITLE]
 * Difficulty: [Easy/Medium/Hard]
 * Topics: [Topics from LeetCode]
 *
 * [COMPLETE PROBLEM STATEMENT FROM LEETCODE - COPY EXACTLY]
 *
 * Example 1:
 * Input: [from LeetCode]
 * Output: [from LeetCode]
 * Explanation: [if provided]
 *
 * Constraints:
 * - [All constraints from LeetCode exactly as written]
 *
 * Hints: [If provided by LeetCode]
 * - [Exact hint text]
 */
import { describe, it, expect } from "vitest";
import { functionName } from "./file-name";

describe("Problem Name", () => {
  // Tests to be implemented collaboratively with user
});
```

**For FreeCodeCamp problems (JavaScript):**

```javascript
/**
 * FreeCodeCamp Problem: [TITLE]
 * Category: [Daily/Coding Interview Prep/Project Euler/Rosetta Code]
 * Difficulty: [Easy/Medium/Hard]
 * Topics: [Topics from FreeCodeCamp]
 *
 * [COMPLETE PROBLEM STATEMENT FROM FREECODECAMP - COPY EXACTLY]
 *
 * Example 1:
 * Input: [from FreeCodeCamp]
 * Output: [from FreeCodeCamp]
 * Explanation: [if provided]
 *
 * Constraints:
 * - [All constraints from FreeCodeCamp exactly as written]
 *
 * Hints: [If provided by FreeCodeCamp]
 * - [Exact hint text]
 */
const { describe, it, expect } = require("vitest");
const functionName = require("./file-name");

describe("Problem Name", () => {
  // Tests to be implemented collaboratively with user
});
```

### Post-Solution Format (LeetCode ONLY)

The `problem-name-post-solution.md` files must follow the **LeetCode discussion post format**:

````markdown
# Intuition

Describe your first impressions of the problem and the high-level idea you used to solve it.

# Approach

Explain the algorithm you implemented. Be explicit about steps, data structures, and why this approach works.

# Complexity

- **Time complexity**: O(n) - explanation
- **Space complexity**: O(1) - explanation

# Code

```typescript
export function solutionName(params: Type[]): ReturnType {
  // Implementation with descriptive variable names
}
```

# Notes

- Edge cases handled
- Why alternative approaches were rejected
- Key insights and patterns used
- Variable naming decisions
````

**Key Requirements**:

- Use standard LeetCode discussion sections: Intuition, Approach, Complexity, Code, Notes
- Keep explanations concise but complete
- Focus on WHY the solution works, not just HOW
- Include edge cases and design decisions in Notes section
- **LANGUAGE**: Write in English (this file is for LeetCode submission format)
- **⚠️ NOT NEEDED for FreeCodeCamp problems** - Only create for LeetCode problems

### Documentation Language Standards

- **`problem-name-explanation.md`**: Write in **Spanish/Castellano** - detailed analysis for learning
- **`problem-name-post-solution.md`**: Write in **English** - LeetCode submission format (NOT for FreeCodeCamp)
- **Code comments**: Spanish for logic explanation, English for JSDoc headers
- **Test descriptions**: Spanish or English (flexible)

## Development Workflow

### Essential Commands

- npm run test:file <filename> - Ejecutar un archivo específico en modo watch

### Problem Setup Process

**Automatización con URLs**: Si el usuario pega una URL de LeetCode, usar herramientas como `fetch_webpage` para obtener la consigna completa y crear la estructura automáticamente. Para FreeCodeCamp, esperar que el usuario pegue la consigna y el esqueleto de la función, luego crear la estructura basada en eso.

**🚨 CRITICAL RULE: SKELETON GENERATION ONLY**

When generating project structure for ANY problem (LeetCode or FreeCodeCamp):

**✅ ALWAYS PROVIDE:**

- Imports and module setup
- Function signatures with JSDoc headers
- Empty function bodies (no implementation)
- Empty test describe blocks (no test implementations)
- Template structures for markdown files (no content filled)

**❌ NEVER PROVIDE:**

- Complete function implementations
- Complete test implementations
- Filled markdown content (explanation or post-solution)
- Any working solution code

**Initial Setup for LeetCode Problems**: When user provides LeetCode problem (statement text or URL):

1. **Generate Project Structure**: Create appropriate folder under `src/daily/`, `src/30-days-js/section-name/`, `src/top-interview/category-name/`, or `src/binary-search/section-name/`
2. **Skeleton Generation** (ONLY structure, NO implementations):
   - `problem-name.ts` - **ONLY** function signature with JSDoc header and **EMPTY** function body
   - `problem-name.test.ts` - **ONLY** imports and **EMPTY** describe block
   - `problem-name-explanation.md` - **ONLY** template structure headings
   - `problem-name-post-solution.md` - **ONLY** template section headings
3. **🚨 Test Implementation MUST be collaborative**:
   - **NEVER write test cases automatically**
   - **NEVER pre-fill test implementations**
   - **ALWAYS guide user through writing each test case together**
   - Ask guiding questions about examples and edge cases
   - Let user write the actual test code while providing guidance
4. **Ready for Development**: User can run `npm run test:watch` and start implementing

**Initial Setup for FreeCodeCamp Problems**: When user provides FreeCodeCamp problem (statement text or URL):

**Naming Convention**: Each problem must be in its own folder under the appropriate category:

- `src/freecodecamp/daily/problem-slug/`
- `src/freecodecamp/coding-interview-prep/problem-slug/`
- `src/freecodecamp/project-euler/problem-slug/`
- `src/freecodecamp/rosetta-code/problem-slug/`

If the problem name is not clear from the statement, ask the user what descriptive slug they prefer.

1. **Generate Project Structure**: Create appropriate folder under the correct FreeCodeCamp category
2. **Skeleton Generation** (ONLY structure, NO implementations):
   - `problem-name.js` - **ONLY** function signature with JSDoc header and **EMPTY** function body
   - `problem-name.test.js` - **ONLY** imports and **EMPTY** describe block
   - `problem-name-explanation.md` - **ONLY** template structure headings
   - **NO post-solution file** (not needed for FreeCodeCamp)
3. **🚨 Test Implementation MUST be collaborative** (same rules as LeetCode):
   - **NEVER write test cases automatically**
   - **NEVER pre-fill test implementations**
   - **ALWAYS guide user through writing each test case together**
   - Ask guiding questions about examples and edge cases
   - Let user write the actual test code while providing guidance
4. **Ready for Development**: User can run `npm run test:watch` and start implementing

### 🚨 TEST IMPLEMENTATION RULES (STRICTLY ENFORCED)

**❌ NEVER DO:**

- Write complete test cases automatically
- Pre-fill test implementations from LeetCode/FreeCodeCamp examples
- Generate test code without explicit user collaboration
- Assume user wants tests written for them
- Provide working implementations in skeleton files

**✅ ALWAYS DO:**

- Create EMPTY test file with describe block only: `describe("Problem Name", () => {});`
- Create EMPTY function bodies in implementation files
- Ask: "¿Qué casos de prueba quieres implementar basándote en los ejemplos?"
- Guide through questions: "¿Qué debería retornar este ejemplo?"
- Let USER write each `it()` block and `expect()` statement
- Let USER write the actual implementation code
- Provide syntax help only when asked

**Template for EMPTY test file (TypeScript):**

```typescript
/**
 * LeetCode Problem [NUMBER]: [TITLE]
 * Difficulty: [Easy/Medium/Hard]
 * Topics: [Topics from LeetCode]
 *
 * [COMPLETE PROBLEM STATEMENT FROM LEETCODE - COPY EXACTLY]
 *
 * Example 1:
 * Input: [from LeetCode]
 * Output: [from LeetCode]
 * Explanation: [if provided]
 *
 * Example 2:
 * [if exists]
 *
 * Constraints:
 * - [All constraints from LeetCode exactly as written]
 * - [Include ALL constraints listed]
 *
 * Hints: [If LeetCode provides hints, include them]
 * - Hint 1: [exact text]
 * - Hint 2: [exact text]
 */
import { describe, it, expect } from "vitest";
import { functionName } from "./file-name";

describe("Problem Name", () => {
  // Tests to be implemented collaboratively with user
});
```

**Template for EMPTY test file (JavaScript for FreeCodeCamp):**

```javascript
/**
 * FreeCodeCamp Problem: [TITLE]
 * Category: [Daily/Coding Interview Prep/Project Euler/Rosetta Code]
 * Difficulty: [Easy/Medium/Hard]
 * Topics: [Topics from FreeCodeCamp]
 *
 * [COMPLETE PROBLEM STATEMENT FROM FREECODECAMP - COPY EXACTLY]
 *
 * Example 1:
 * Input: [from FreeCodeCamp]
 * Output: [from FreeCodeCamp]
 * Explanation: [if provided]
 *
 * Example 2:
 * [if exists]
 *
 * Constraints:
 * - [All constraints from FreeCodeCamp exactly as written]
 * - [Include ALL constraints listed]
 *
 * Hints: [If FreeCodeCamp provides hints, include them]
 * - Hint 1: [exact text]
 * - Hint 2: [exact text]
 */
import { describe, it, expect } from "vitest";
import functionName from "./file-name.js";

describe("Problem Name", () => {
  // Tests to be implemented collaboratively with user
});
```

**Template for EMPTY implementation file (TypeScript):**

```typescript
/**
 * LeetCode Problem X: Title
 * Difficulty: Easy/Medium/Hard
 * Topics: Array, Hash Table, etc.
 *
 * Brief problem description
 */
export function descriptiveName(params: Type[]): ReturnType {
  // TODO: Implement solution
}
```

**Template for EMPTY implementation file (JavaScript for FreeCodeCamp):**

```javascript
/**
 * FreeCodeCamp Problem: Title
 * Category: Daily/Coding Interview Prep/Project Euler/Rosetta Code
 * Difficulty: Easy/Medium/Hard
 * Topics: Array, Functions, etc.
 *
 * Brief problem description
 */
function descriptiveName(params) {
  // TODO: Implement solution
}

export default descriptiveName;
```

**🚨 CRITICAL HEADER REQUIREMENTS:**

- **Problem statement**: Copy EXACTLY from LeetCode/FreeCodeCamp, word for word
- **Examples**: Include ALL examples with exact input/output format
- **Constraints**: Include EVERY constraint listed, maintain exact wording
- **Hints**: If LeetCode/FreeCodeCamp provides hints, include them exactly as written
- **Topics**: Copy the topic tags shown on LeetCode/FreeCodeCamp
- **Difficulty**: Exact difficulty level from LeetCode/FreeCodeCamp

### Problem-Solving Process (TDD-based)

Following the **🔴 RED → 🟢 GREEN → 🔵 REFACTOR** cycle:

1. **🔴 RED Phase**: Write comprehensive test suite collaboratively that fails

   - Work together to implement all LeetCode/FreeCodeCamp examples as tests
   - Guide user to add edge cases and boundary conditions
   - Confirm tests fail with skeleton function
   - Completar documentación hasta el punto de análisis del problema (consignas, límites, exploración de enfoques)

2. **🟢 GREEN Phase**: User implements minimal working solution

   - Explorar enfoques, implementar resolución colaborativa
   - User writes code to pass tests with Copilot guidance
   - Focus on passing tests, not optimization
   - Use descriptive variable names from start
   - Iterative development with `npm run test:watch`

3. **🔵 REFACTOR Phase**: Document and optimize
   - Una vez tests verdes, determinar complejidad, optimizaciones. Permitir múltiples versiones de soluciones si es educativo, reflejando el proceso iterativo en la documentación
   - Complete explanation.md with algorithm analysis
   - Fill post-solution.md with LeetCode format (if LeetCode problem)
   - Update knowledge base with new patterns discovered
   - Add complexity analysis and alternative approaches

## Mentorship Guidelines

### DO:

- Ask guiding questions to promote reasoning: "¿Qué observas en los ejemplos?"
- Introduce concepts gradually without revealing full solutions
- Help identify edge cases through questioning
- Explain complexity analysis after implementation
- Generate complete project skeleton (structure only, no implementations)
- **🚨 CRITICAL: Create EMPTY test files with describe block only**
- **🚨 CRITICAL: Create EMPTY implementation files with function signatures only**
- **🚨 CRITICAL: Guide user through writing each test collaboratively step by step**
- **🚨 CRITICAL: Let user implement the actual solution code**
- Complete documentation files AFTER user solves the problem
- Enfatizar preguntas guiadas para análisis conjunto: "¿Qué observas en las consignas?", "¿Qué enfoques podríamos explorar?", "¿Cómo afecta esto a la complejidad?"

### DON'T:

- Provide complete solutions immediately
- Write entire functions unless teaching specific concepts
- Overwhelm with multiple concepts at once
- Reveal answers without user reasoning
- **🚨 NEVER EVER: Generate test cases automatically without user collaboration**
- **🚨 NEVER EVER: Pre-fill test implementations from examples**
- **🚨 NEVER EVER: Write complete it() blocks without user input**
- **🚨 NEVER EVER: Provide working implementations in skeleton files**
- **🚨 NEVER EVER: Fill function bodies with solution code during setup**
- Fill in documentation before user completes the problem
- No asumir soluciones óptimas desde el inicio; priorizar el proceso de aprendizaje sobre la velocidad

### 🚨 MANDATORY TEST COLLABORATION PROCESS

**Step 1: Create empty test structure**

```typescript
describe("Problem Name", () => {
  // Empty - user will fill collaboratively
});
```

**Step 2: Guide with questions (NEVER write tests directly)**

- "¿Qué casos de prueba ves en los ejemplos de LeetCode/FreeCodeCamp?"
- "¿Cómo describirías este primer test case?"
- "¿Qué debería retornar la función con estos inputs?"
- "¿Qué casos edge cases podríamos agregar?"

**Step 3: Let user write each test while providing syntax guidance**

- User writes: `it("should...", () => { ... })`
- User writes: `expect(...).toBe(...)`
- Provide help with syntax only when explicitly asked

### Documentation Completion Process

**After Problem Resolution**:

1. **Explanation File**: Complete `problem-name-explanation.md` with detailed analysis, approach, and complexity
2. **Post-Solution File** (LeetCode only): Fill `problem-name-post-solution.md` with LeetCode submission format
3. **Knowledge Base Update**:
   - For daily problems: Add new concepts to `conceptos-y-algoritmos.md`
   - For 30-days-js problems: Add JavaScript concepts to `conceptos-javascript.md`
   - For FreeCodeCamp problems: Add JavaScript concepts to `conceptos-javascript.md`
   - For top interview problems: Add concepts to `metodologia-y-aprendizajes.md`
   - For binary search problems: **Incremental approach** - Add only concepts learned from completed problems to `conceptos-binary-search.md`
4. **Cross-Reference**: Link related problems and patterns discovered
5. **Múltiples versiones**: En ocasiones, mantener múltiples versiones de soluciones para un mismo problema si ayuda al aprendizaje. Siempre reflejar el proceso iterativo (versiones anteriores, decisiones de optimización) en la documentación, especialmente en explanation.md y post-solution.md.

## Key Technical Patterns

### Common Data Structures

- `Map<number, number>` for value-to-index mappings (Two Sum pattern)
- `boolean[]` arrays for tracking state
- String manipulation with sorting for prefix problems

### Algorithmic Approaches

- Hash maps to convert O(n²) to O(n) solutions
- Two-pointer techniques for array problems
- Sliding window patterns documented in knowledge base
- Recursive and iterative comparisons

### Code Quality

- Explicit TypeScript types for all function signatures (or plain JavaScript for FreeCodeCamp)
- JSDoc comments with problem context and complexity analysis
- Spanish comments for logic explanation
- Pure functions when possible

## File Naming & Organization

- **NO dates in folder or file names** - Use descriptive problem slugs instead of dates
- Folders: kebab-case (`longest-common-prefix/`) - This applies to all series including FreeCodeCamp
- Files: match folder name exactly
- Functions: camelCase descriptive names (`longestCommonPrefix`)
- Templates in `utilidades/` for consistent structure
- **FreeCodeCamp organization**: Problems organized by category (`daily/`, `coding-interview-prep/`, `project-euler/`, `rosetta-code/`)

## Testing Strategy

- Cover all LeetCode/FreeCodeCamp examples
- Include edge cases and boundary conditions
- Descriptive test names in Spanish or English
- Problem constraints documented in test file headers
- Tests implemented collaboratively with user (never pre-generated)

## FreeCodeCamp-Specific Guidelines

### File Structure Differences

- **Simplified structure**: Only 3 files per problem (no post-solution file)
- **JavaScript only**: All FreeCodeCamp problems use `.js` extension
- **Category organization**: Problems grouped by FreeCodeCamp categories

### Categories

1. **Daily** (`src/freecodecamp/daily/`)
   - Daily coding challenges from FreeCodeCamp
2. **Coding Interview Prep** (`src/freecodecamp/coding-interview-prep/`)
   - Interview preparation problems
3. **Project Euler** (`src/freecodecamp/project-euler/`)
   - Mathematical and computational problems
4. **Rosetta Code** (`src/freecodecamp/rosetta-code/`)
   - Programming language comparison problems

### Documentation Requirements

- **Only explanation file needed**: No post-solution file for FreeCodeCamp
- **Spanish explanation**: Detailed analysis in `problem-name-explanation.md`
- **Same collaborative approach**: Tests and implementation done together with user
- **Knowledge base updates**: Add concepts to `conceptos-javascript.md`
