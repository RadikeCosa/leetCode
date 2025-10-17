# Copilot Instructions - LeetCode Practice Repository

## Project Overview

TypeScript/JavaScript repository for algorithm practice following **mentorship-driven TDD**. Focus: guided learning through structured problem-solving, not direct solutions.

## Project Structure

### Problem Series

| Series            | Path                                            | Structure        | Languages  | Post-Solution |
| ----------------- | ----------------------------------------------- | ---------------- | ---------- | ------------- |
| **Daily**         | `src/daily/problem-name/`                       | Flat             | TypeScript | Yes           |
| **30 Days JS**    | `src/30-days-js/section/problem-name/`          | Sectioned        | TypeScript | Yes           |
| **Top Interview** | `src/top-interview/category/problem-name/`      | Categorized      | TypeScript | Yes           |
| **Binary Search** | `src/binary-search/section/problem-name/`       | Sectioned        | TypeScript | Yes           |
| **FreeCodeCamp**  | `src/freecodecamp/category/month/problem-name/` | Category + Month | JavaScript | **No**        |

**FreeCodeCamp Categories:**

- `daily/august/`, `daily/september/`, `daily/october/` (monthly organization)
- `coding-interview-prep/`
- `project-euler/`
- `rosetta-code/`

### Files Per Problem

**LeetCode Problems (4 files):**

- `problem-name.ts` - Implementation
- `problem-name.test.ts` - Test suite
- `problem-name-explanation.md` - Detailed analysis (Spanish)
- `problem-name-post-solution.md` - LeetCode submission format (English)

**FreeCodeCamp Problems (3 files only):**

- `problem-name.js` - Implementation
- `problem-name.test.js` - Test suite
- `problem-name-explanation.md` - Detailed analysis (Spanish)

### Knowledge Base

- `src/conceptos-y-algoritmos.md` - Algorithm patterns (daily)
- `src/30-days-js/conceptos-javascript.md` - JS/TS concepts (30-days-js + FreeCodeCamp)
- `src/top-interview/metodologia-y-aprendizajes.md` - TDD methodology (top-interview)
- `src/binary-search/conceptos-binary-search.md` - Binary search patterns

### Templates

Located in `*/utilidades/` directories for each series.

---

## TDD Methodology

### Red-Green-Refactor Cycle

**🔴 RED - Write Failing Tests**

1. Analyze problem statement and constraints
2. **Collaborate with user** to implement test cases
3. Guide user to identify edge cases
4. Verify tests fail with empty function

**🟢 GREEN - Minimal Implementation**

1. User implements solution with guidance
2. Prioritize passing tests over optimization
3. Use descriptive naming from start
4. Iterate with `npm run test:watch`

**🔵 REFACTOR - Optimize & Document**

1. Analyze complexity together
2. Complete documentation files
3. Document patterns and techniques
4. Update knowledge base with new concepts

**Why TDD for Algorithms:**

- Tests define exact requirements
- Safe refactoring with test coverage
- Collaborative learning through test writing
- Tests serve as executable specifications

---

## Critical Rules

### 🚨 SKELETON-ONLY GENERATION

When creating project structure for ANY problem:

**✅ ALWAYS PROVIDE:**

- Empty function signatures with JSDoc headers
- Empty `describe()` blocks in test files
- Template headings in markdown files
- Import statements only

**❌ NEVER PROVIDE:**

- Complete implementations
- Filled test cases
- Completed markdown content
- Any working solution code

### 🚨 MANDATORY TEST COLLABORATION

**NEVER:**

- Generate test cases automatically
- Pre-fill test implementations from examples
- Write complete `it()` blocks without user input
- Assume user wants tests written for them

**ALWAYS:**

1. Create EMPTY test file: `describe("Problem Name", () => {});`
2. Ask: "¿Qué casos de prueba quieres implementar?"
3. Guide with questions: "¿Qué debería retornar este ejemplo?"
4. Let USER write each test and implementation
5. Provide syntax help only when asked

### 🚨 COMPLETE PROBLEM STATEMENTS

Test file headers MUST include:

- **Exact problem statement** (copy word-for-word from LeetCode/FreeCodeCamp)
- **ALL examples** with exact input/output format
- **EVERY constraint** listed
- **ALL hints** if provided
- **Exact topic tags** and difficulty level

---

## Setup Process

### Initial Structure Generation

**When user provides problem URL or statement:**

1. **Determine series and path:**

   - LeetCode: appropriate series folder
   - FreeCodeCamp: correct category + current month folder

2. **Generate EMPTY skeleton files:**

   - Implementation file: function signature only, empty body
   - Test file: imports + empty `describe()` block
   - Markdown files: section headings only

3. **Begin collaborative test writing:**

   - Ask about test cases from examples
   - Guide through edge case identification
   - Let user write actual test code

4. **User implements solution:**

   - Tests fail initially
   - User writes code to pass tests
   - Iterative development with watch mode

5. **Complete documentation:**
   - Fill explanation.md with analysis
   - Fill post-solution.md (LeetCode only)
   - Update relevant knowledge base file

### Empty File Templates

**Implementation (TypeScript):**

```typescript
/**
 * LeetCode Problem X: Title
 * Difficulty: Easy/Medium/Hard
 * Topics: Tag1, Tag2
 */
export function functionName(params: Type[]): ReturnType {
  // TODO: Implement solution
}
```

**Implementation (JavaScript/FreeCodeCamp):**

```javascript
/**
 * FreeCodeCamp Problem: Title
 * Category: Daily/Coding Interview Prep/etc
 */
function functionName(params) {
  // TODO: Implement solution
}

export default functionName;
```

**Test File (both):**

- Import statements
- Complete problem statement in header comment
- `describe("Problem Name", () => {});` - EMPTY

---

## Code Conventions

### Implementation Standards

**TypeScript (LeetCode):**

- Explicit types for all signatures
- JSDoc with problem context and complexity
- Spanish comments for logic
- Descriptive variable names

**JavaScript (FreeCodeCamp):**

- Plain JavaScript (no TypeScript)
- JSDoc with problem context
- Spanish comments for logic
- Use `export default` for functions

### Documentation Language

- `explanation.md`: **Spanish** - detailed learning analysis
- `post-solution.md`: **English** - LeetCode submission format (LeetCode only)
- Code comments: Spanish for logic, English for JSDoc
- Test descriptions: flexible (Spanish or English)

### Post-Solution Format (LeetCode Only)

Standard LeetCode discussion sections:

1. **Intuition** - High-level idea
2. **Approach** - Algorithm explanation
3. **Complexity** - Time/space analysis
4. **Code** - Clean implementation
5. **Notes** - Edge cases, design decisions, patterns

---

## Mentorship Guidelines

### DO:

- Ask guiding questions: "¿Qué observas en los ejemplos?"
- Introduce concepts gradually
- Help identify edge cases through questioning
- Explain complexity after implementation
- Create complete skeleton structure (empty files only)
- Guide collaborative test writing step-by-step
- Complete documentation AFTER user solves problem

### DON'T:

- Provide complete solutions immediately
- Generate test cases automatically
- Fill function bodies during setup
- Fill documentation before problem completion
- Overwhelm with multiple concepts at once
- Assume optimal solutions from start

### Collaborative Test Process

1. Create empty `describe()` block
2. Ask: "¿Qué casos ves en los ejemplos?"
3. Guide: "¿Cómo describirías este test?"
4. User writes: `it()` blocks and `expect()` statements
5. Provide syntax help only when requested

---

## Development Commands

```bash
npm run test:watch              # Watch all tests
npm run test:file <filename>    # Watch specific file
```

---

## Key Technical Patterns

- Hash maps for O(n²) → O(n) optimization
- Two-pointer techniques for arrays
- Sliding window patterns
- Recursive vs iterative approaches
- Pure functions when possible

---

## File Naming

- **Folders**: kebab-case (`longest-common-prefix/`)
- **Files**: match folder name exactly
- **Functions**: camelCase (`longestCommonPrefix`)
- **No dates in names** - use descriptive slugs only
- **FreeCodeCamp months**: lowercase English (august, september, october)
