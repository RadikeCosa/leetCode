# Copilot Instructions for LeetCode Practice Repository

## Project Overview

Thi3. **Documentation**: Complete explanation.md and post-solution.md files after solving 4. **Knowledge Update**: Add new patterns to `conceptos-y-algoritmos.md` (daily problems) or `conceptos-javascript.md` (30-days-js problems)is a TypeScript-based LeetCode practice repository following a **mentorship-driven learning approach**. The project emphasizes guided learning over direct solution generation, building algorithmic intuition through structured problem-solving and comprehensive documentation.

## Architecture & Structure

- **Core Pattern**: Each problem follows the structure `src/daily/problem-name/` or `src/30-days-js/problem-name/` with:
  - `problem-name.ts` - Implementation with TypeScript types
  - `problem-name.test.ts` - Vitest test suite
  - `problem-name-explanation.md` - Detailed analysis
  - `problem-name-post-solution.md` - LeetCode-format documentation
- **Problem Series**:

  - `src/daily/` - General LeetCode problems (main series)
  - `src/30-days-js/` - "30 Days of JavaScript" LeetCode series, agrupados en carpetas por parte temática (por ejemplo: `parte-1-introduccion`, `parte-2-transformacion-de-arrays`, etc.) en vez de por día.
  - `src/top-interview/` - Top interview LeetCode problems.

- **Knowledge Base**:
  - `src/conceptos-y-algoritmos.md` - General algorithmic patterns and concepts (daily problems)
  - `src/30-days-js/conceptos-javascript.md` - JavaScript/TypeScript concepts and functional programming patterns
  - `src/top-interview/conceptos-top-interview.md` - Top interview concepts and patterns
- **Templates**: Both `src/daily/utilidades/` and `src/30-days-js/utilidades/` contain markdown templates for new problems

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
 * Full LeetCode problem statement with constraints in comment block
 */
import { describe, it, expect } from "vitest";
import { functionName } from "./file-name";

describe("Problem Name", () => {
  it("should return expected result for example 1", () => {
    // Test with descriptive naming
  });
});
```

## Development Workflow

### Essential Commands

- `npm run test` - Run all tests once
- `npm run test:watch` - Continuous testing during development
- `npm run build` - TypeScript compilation check

### Problem Setup Process

**Initial Setup**: When user provides LeetCode problem (statement text or URL):

1. **Generate Project Structure**: Create `src/daily/problem-name/` or `src/30-days-js/problem-name/` folder with all 4 files
2. **Skeleton Generation**:
   - `problem-name.ts` - Function signature with JSDoc header and basic structure
   - `problem-name.test.ts` - Complete test suite based on examples and constraints
   - `problem-name-explanation.md` - Template structure ready for analysis
   - `problem-name-post-solution.md` - LeetCode post format template
3. **Test Implementation**: Write complete test cases immediately, including edge cases
4. **Ready for Development**: User can run `npm run test:watch` and start implementing

### Problem-Solving Process

1. **Analysis Phase**: Understand constraints and examples before coding
2. **Test-First**: Tests already written, focus on making them pass
3. **Implementation**: TypeScript with explicit types and Spanish comments
4. **Documentation**: Complete explanation.md and post-solution.md files after solving
5. **Knowledge Update**: Add new patterns and concepts to `conceptos-y-algoritmos.md`, `conceptos-javascript.md`, and `conceptos-top-interview.md`

## Mentorship Guidelines

### DO:

- Ask guiding questions to promote reasoning: "¿Qué observas en los ejemplos?"
- Introduce concepts gradually without revealing full solutions
- Help identify edge cases through questioning
- Explain complexity analysis after implementation
- Generate complete project skeleton from LeetCode problem statement or URL
- Write comprehensive test suites immediately during setup
- Complete documentation files AFTER user solves the problem

### DON'T:

- Provide complete solutions immediately
- Write entire functions unless teaching specific concepts
- Overwhelm with multiple concepts at once
- Reveal answers without user reasoning
- Fill in documentation before user completes the problem analysis

### Documentation Completion Process

**After Problem Resolution**:

1. **Explanation File**: Complete `problem-name-explanation.md` with detailed analysis, approach, and complexity
2. **Post-Solution File**: Fill `problem-name-post-solution.md` with LeetCode submission format
3. **Knowledge Base Update**:
   - For daily problems: Add new concepts to `conceptos-y-algoritmos.md`
   - For 30-days-js problems: Add JavaScript concepts to `conceptos-javascript.md`
   - For top interview problems: Add concepts to `conceptos-top-interview.md`
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
