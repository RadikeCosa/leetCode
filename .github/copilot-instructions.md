# Copilot Instructions for LeetCode Practice Repository

## Project Overview

Thi3. **Documentation**: Complete explanation.md and post-solution.md files after solving 4. **Knowledge Update**: Add new patterns to `conceptos-y-algoritmos.md` (daily problems) or `conceptos-javascript.md` (30-days-js problems)is a TypeScript-based LeetCode practice repository following a **mentorship-driven learning approach**. The project emphasizes guided learning over direct solution generation, building algorithmic intuition through structured problem-solving and comprehensive documentation.

## Architecture & Structure

- **Core Pattern**: Each problem follows the structure `src/daily/problem-name/`, `src/30-days-js/section-name/problem-name/`, `src/top-interview/category-name/problem-name/`, or `src/binary-search/section-name/problem-name/` with:
  - `problem-name.ts` - Implementation with TypeScript types
  - `problem-name.test.ts` - Vitest test suite
  - `problem-name-explanation.md` - Detailed analysis
  - `problem-name-post-solution.md` - LeetCode-format documentation
- **Problem Series**:

  - `src/daily/` - General LeetCode problems (main series)
  - `src/30-days-js/` - "30 Days of JavaScript" LeetCode series, agrupados en carpetas por parte temática (por ejemplo: `parte-1-introduccion`, `parte-2-transformacion-de-arrays`, etc.) en vez de por día.
  - `src/top-interview/` - Top interview LeetCode problems.
  - `src/binary-search/` - Binary Search Study Plan problems, organizados en subcarpetas por sección temática:
    - `search-in-array/` - Búsqueda básica en arrays ordenados
    - `rotated-array/` - Búsqueda en arrays rotados
    - `standard-search/` - Búsqueda binaria estándar y variaciones
    - `math/` - Problemas matemáticos que usan binary search
    - `tricky-invariant/` - Problemas con invariantes complejas
    - `as-a-tool/` - Binary search como herramienta para otros algoritmos
  - `src/freecodecamp/` - freeCodeCamp Daily Coding Challenge problems and other freeCodeCamp exercises. Follow the same folder/file conventions as other series. Recommended organization:
    - `src/freecodecamp/YYYY-MM-DD-problem-slug/` - Daily challenge by date (preferred for daily prompts)
    - `src/freecodecamp/problem-slug/` - Alternatively, use a descriptive slug if no date is needed
      Each problem folder should include the same four files used across the repo:
      - `problem-name.ts` - Implementation with TypeScript types
      - `problem-name.test.ts` - Vitest test suite (EMPTY describe block only — must be filled collaboratively)
      - `problem-name-explanation.md` - Detailed analysis (in Spanish)
      - `problem-name-post-solution.md` - freeCodeCamp/LeetCode-style post (in English)

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
2. **Test cases**: Collaborate with user to implement tests based on LeetCode examples
3. **Edge cases**: Guide user to identify and add tests for boundary conditions
4. **Verification**: Confirm tests fail (empty/skeleton function)

### 🟢 **GREEN Phase - Implement Minimal Solution**

1. **Functional solution**: User writes code to pass all tests with guidance
2. **Pragmatic approach**: Prioritize functionality over premature optimization
3. **Descriptive naming**: Self-explanatory variables and functions from start
4. **Rapid iteration**: Use `npm run test:watch` for immediate feedback

### 🔵 **REFACTOR Phase - Optimize and Document**

1. **Complexity analysis**: Evaluate time and space complexity together
2. **Complete documentation**: Fill explanation.md and post-solution.md
3. **Pattern identification**: Document techniques and strategies used
4. **Knowledge base update**: Add new concepts to relevant knowledge files

### TDD Benefits for Algorithms

- **Requirement clarity**: Tests define exact behavior expected
- **Solution confidence**: Complete coverage of test cases
- **Safe refactoring**: Changes backed by comprehensive tests
- **Living documentation**: Tests serve as executable specification
- **Collaborative learning**: Writing tests together builds understanding
- **Safe refactoring**: Changes backed by comprehensive tests
- **Living documentation**: Tests serve as executable specification

## Code Conventions

### Implementation Standards

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

### Testing Patterns

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
  it("should return expected result for example 1", () => {
    // Test implementation based on LeetCode examples
    expect(functionName(input)).toBe(expectedOutput);
  });
});
```

### Post-Solution Format

The `problem-name-post-solution.md` files must follow the **LeetCode discussion post format**:

````markdown
# Intuition

Describe your first impressions of the problem and the high-level idea you used to solve it.

# Approach

Explain the algorithm you implemented. Be explicit about steps, data structures, and why this approach works.

# Complexity

- **Time complexity**: O(n) - explanation
- **Space complexity**: O(1) - explanation (or specify if different)

# Code

```typescript
export function solutionName(params: Type[]): ReturnType {
  // Implementation with descriptive variable names
}
```
````

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

### Documentation Language Standards

- **`problem-name-explanation.md`**: Write in **Spanish/Castellano** - detailed analysis for learning
- **`problem-name-post-solution.md`**: Write in **English** - LeetCode submission format for international audience
- **Code comments**: Spanish for logic explanation, English for JSDoc headers
- **Test descriptions**: Spanish or English (flexible)

## Development Workflow

### Essential Commands

- `npm run test` - Run all tests once
- `npm run test:watch` - Continuous testing during development
- `npm run build` - TypeScript compilation check

### Problem Setup Process

**Initial Setup**: When user provides LeetCode problem (statement text or URL):

1. **Generate Project Structure**: Create `src/daily/problem-name/`, `src/30-days-js/problem-name/`, `src/top-interview/problem-name/`, or `src/binary-search/section-name/problem-name/` folder with all 4 files
2. **Skeleton Generation**:
   - `problem-name.ts` - Function signature with JSDoc header and basic structure
   - `problem-name.test.ts` - **EMPTY test file template with imports only**
   - `problem-name-explanation.md` - Template structure ready for analysis
   - `problem-name-post-solution.md` - LeetCode post format template
3. **🚨 CRITICAL: Test Implementation MUST be collaborative**:
   - **NEVER write test cases automatically**
   - **NEVER pre-fill test implementations**
   - **ALWAYS guide user through writing each test case together**
   - Ask guiding questions about examples and edge cases
   - Let user write the actual test code while providing guidance
4. **Ready for Development**: User can run `npm run test:watch` and start implementing

### 🚨 TEST IMPLEMENTATION RULES (STRICTLY ENFORCED)

**❌ NEVER DO:**
- Write complete test cases automatically
- Pre-fill test implementations from LeetCode examples
- Generate test code without explicit user collaboration
- Assume user wants tests written for them

**✅ ALWAYS DO:**
- Create EMPTY test file with describe block only: `describe("Problem Name", () => {});`
- Ask: "¿Qué casos de prueba quieres implementar basándote en los ejemplos?"
- Guide through questions: "¿Qué debería retornar este ejemplo?"
- Let USER write each `it()` block and `expect()` statement
- Provide syntax help only when asked

**Template for EMPTY test file:**
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

**🚨 CRITICAL HEADER REQUIREMENTS:**
- **Problem statement**: Copy EXACTLY from LeetCode, word for word
- **Examples**: Include ALL examples with exact input/output format
- **Constraints**: Include EVERY constraint listed, maintain exact wording
- **Hints**: If LeetCode provides hints, include them exactly as written
- **Topics**: Copy the topic tags shown on LeetCode
- **Difficulty**: Exact difficulty level from LeetCode`

### Problem-Solving Process

1. **Analysis Phase**: Understand constraints and examples before coding
2. **Test-First**: Tests already written, focus on making them pass
3. **Implementation**: TypeScript with explicit types and Spanish comments
4. **Documentation**: Complete explanation.md and post-solution.md files after solving
5. **Knowledge Update**: Add new patterns to relevant knowledge files:
   - Daily problems → `conceptos-y-algoritmos.md`
   - 30-days-js problems → `conceptos-javascript.md`
   - Binary search problems → `conceptos-binary-search.md` (incremental approach: only concepts from completed problems)

### Problem-Solving Process (TDD-based)

Following the **🔴 RED → 🟢 GREEN → 🔵 REFACTOR** cycle:

1. **🔴 RED Phase**: Write comprehensive test suite collaboratively that fails

   - Work together to implement all LeetCode examples as tests
   - Guide user to add edge cases and boundary conditions
   - Confirm tests fail with skeleton function

2. **🟢 GREEN Phase**: Implement minimal working solution

   - Focus on passing tests, not optimization
   - Use descriptive variable names from start
   - Iterative development with `npm run test:watch`

3. **🔵 REFACTOR Phase**: Document and optimize
   - Complete explanation.md with algorithm analysis
   - Fill post-solution.md with LeetCode format
   - Update knowledge base with new patterns discovered
   - Add complexity analysis and alternative approaches

## Mentorship Guidelines

### DO:

- Ask guiding questions to promote reasoning: "¿Qué observas en los ejemplos?"
- Introduce concepts gradually without revealing full solutions
- Help identify edge cases through questioning
- Explain complexity analysis after implementation
- Generate complete project skeleton from LeetCode problem statement or URL
- **🚨 CRITICAL: Create EMPTY test files with describe block only**
- **🚨 CRITICAL: Guide user through writing each test collaboratively step by step**
- **🚨 CRITICAL: Never write test implementations automatically**
- Complete documentation files AFTER user solves the problem analysis

### DON'T:

- Provide complete solutions immediately
- Write entire functions unless teaching specific concepts
- Overwhelm with multiple concepts at once
- Reveal answers without user reasoning
- **🚨 NEVER EVER: Generate test cases automatically without user collaboration**
- **🚨 NEVER EVER: Pre-fill test implementations from examples**
- **🚨 NEVER EVER: Write complete it() blocks without user input**
- Fill in documentation before user completes the problem analysis

### 🚨 MANDATORY TEST COLLABORATION PROCESS

**Step 1: Create empty test structure**

```typescript
describe("Problem Name", () => {
  // Empty - user will fill collaboratively
});
```

**Step 2: Guide with questions (NEVER write tests directly)**

- "¿Qué casos de prueba ves en los ejemplos de LeetCode?"
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
2. **Post-Solution File**: Fill `problem-name-post-solution.md` with LeetCode submission format
3. **Knowledge Base Update**:
   - For daily problems: Add new concepts to `conceptos-y-algoritmos.md`
   - For 30-days-js problems: Add JavaScript concepts to `conceptos-javascript.md`
   - For top interview problems: Add concepts to `metodologia-y-aprendizajes.md`
   - For binary search problems: **Incremental approach** - Add only concepts learned from completed problems to `conceptos-binary-search.md`
4. **Cross-Reference**: Link related problems and patterns discovered

- Fill in documentation before user completes the problem analysis

### Documentation Completion Process

**After Problem Resolution**:

1. **Explanation File**: Complete `problem-name-explanation.md` with detailed analysis, approach, and complexity
2. **Post-Solution File**: Fill `problem-name-post-solution.md` with LeetCode submission format
3. **Knowledge Base Update**:
   - For daily problems: Add new concepts to `conceptos-y-algoritmos.md`
   - For 30-days-js problems: Add JavaScript concepts to `conceptos-javascript.md`
   - For top interview problems: Add concepts to `metodologia-y-aprendizajes.md`
   - For binary search problems: Add binary search concepts to `conceptos-binary-search.md`
4. **Cross-Reference**: Link related problems and patterns discovered

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

- Explicit TypeScript types for all function signatures
- JSDoc comments with problem context and complexity analysis
- Spanish comments for logic explanation
- Pure functions when possible

## File Naming & Organization

- Folders: kebab-case (`longest-common-prefix/`)
- Files: match folder name exactly
- Functions: camelCase descriptive names (`longestCommonPrefix`)
- Templates in `utilidades/` for consistent structure

## Testing Strategy

- Cover all LeetCode examples
- Include edge cases and boundary conditions
- Descriptive test names in Spanish or English
- Problem constraints documented in test file headers

```

```
````
