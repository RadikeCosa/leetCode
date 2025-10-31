# 🚨 REGLAS CRÍTICAS - LEE PRIMERO

## NUNCA generes código completo en el setup inicial

- ❌ Funciones implementadas
- ❌ Tests con casos completos
- ❌ Documentación rellena
- ✅ Solo skeletons vacíos + imports

## SIEMPRE colabora en los tests

1. Crea `describe()` vacío
2. Pregunta: "¿Qué casos de prueba quieres implementar?"
3. Usuario escribe cada `it()` y `expect()`
4. Tú solo ayudas con sintaxis si se pide

## SIEMPRE incluye problema completo en tests

- Statement word-for-word
- Todos los ejemplos
- Todas las constraints
- Hints si existen
- Tags y dificultad

---

# 📋 Guía Rápida de Decisiones

| Situación                     | Acción Correcta                                     |
| ----------------------------- | --------------------------------------------------- |
| Usuario da URL/problema       | Generar estructura vacía → Preguntar por tests      |
| "Crea los tests"              | ❌ NO. Preguntar: "¿Qué casos ves en los ejemplos?" |
| Tests fallan                  | ✅ Correcto. Usuario implementa solución            |
| Tests pasan                   | Completar documentación + actualizar knowledge base |
| Usuario pide solución directa | Guiar con preguntas, no dar código                  |

---

# 📁 Estructura del Proyecto

## Series y Rutas

| Serie             | Path                                            | Estructura     | Lenguaje | Post-Solution |
| ----------------- | ----------------------------------------------- | -------------- | -------- | ------------- |
| **Daily**         | `src/daily/problem-name/`                       | Flat           | TS       | ✅            |
| **30 Days JS**    | `src/30-days-js/section/problem-name/`          | Sectioned      | TS       | ✅            |
| **Top Interview** | `src/top-interview/category/problem-name/`      | Categorized    | TS       | ✅            |
| **Binary Search** | `src/binary-search/section/problem-name/`       | Sectioned      | TS       | ✅            |
| **FreeCodeCamp**  | `src/freecodecamp/category/month/problem-name/` | Category+Month | JS       | ❌            |

### FreeCodeCamp Categorías

- `daily/{august,september,october}/`
- `coding-interview-prep/`
- `project-euler/`
- `rosetta-code/`

## Archivos por Problema

**LeetCode (4 archivos)**:

- `problem-name.ts` - Implementación
- `problem-name.test.ts` - Tests
- `problem-name-explanation.md` - Análisis detallado (español)
- `problem-name-post-solution.md` - Formato LeetCode (inglés)

**FreeCodeCamp (3 archivos)**:

- `problem-name.js` - Implementación
- `problem-name.test.js` - Tests
- `problem-name-explanation.md` - Análisis (español)

## Knowledge Bases

- `src/conceptos-y-algoritmos.md` - Patrones algoritmos (daily)
- `src/30-days-js/conceptos-javascript.md` - Conceptos JS/TS (30-days + FCC)
- `src/top-interview/metodologia-y-aprendizajes.md` - Metodología TDD
- `src/binary-search/conceptos-binary-search.md` - Patrones binary search

---

# 🔄 Metodología TDD (Red-Green-Refactor)

## 🔴 RED - Tests que Fallan

1. Analizar problema y constraints
2. **Colaborar con usuario** para implementar tests
3. Guiar identificación de edge cases mediante preguntas
4. Verificar que tests fallen con función vacía

## 🟢 GREEN - Implementación Mínima

1. Usuario implementa con tu guía
2. Priorizar pasar tests > optimización
3. Naming descriptivo desde el inicio
4. Iterar con `npm run test:watch`

## 🔵 REFACTOR - Optimizar y Documentar

1. Analizar complejidad juntos
2. Completar archivos de documentación
3. Documentar patrones y técnicas
4. Actualizar knowledge base con conceptos nuevos

**Por qué TDD para algoritmos:**

- Tests definen requisitos exactos
- Refactoring seguro con cobertura
- Aprendizaje colaborativo escribiendo tests
- Tests = especificaciones ejecutables

---

# ⚙️ Proceso de Setup

## Cuando usuario provee URL/problema:

### 1️⃣ Determinar serie y path

- LeetCode → carpeta de serie apropiada
- FreeCodeCamp → categoría correcta + mes actual

### 2️⃣ Generar SOLO skeletons vacíos

**Implementation (TS)**:

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

**Implementation (JS/FCC)**:

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

**Test file**:

```typescript
// [IMPORTS]
// [COMPLETE PROBLEM STATEMENT IN COMMENT]

describe("Problem Name", () => {
  // EMPTY - collaborative test writing starts here
});
```

**Markdown files**:

- Solo headings de secciones
- Sin contenido

### 3️⃣ Iniciar escritura colaborativa de tests

```
❌ NO: "Aquí están los tests basados en los ejemplos"
✅ SÍ: "¿Qué casos de prueba ves en el ejemplo 1?"
✅ SÍ: "¿Qué debería retornar con ese input?"
✅ SÍ: "¿Qué edge cases podríamos considerar?"
```

### 4️⃣ Usuario implementa solución

- Tests fallan inicialmente ✅
- Usuario escribe código para pasarlos
- Desarrollo iterativo con watch mode

### 5️⃣ Completar documentación

- `explanation.md` con análisis
- `post-solution.md` (solo LeetCode)
- Actualizar knowledge base relevante

---

# 💻 Convenciones de Código

## Standards de Implementación

**TypeScript (LeetCode)**:

- Tipos explícitos en todas las signatures
- JSDoc con contexto del problema y complejidad
- Comentarios en español para lógica
- Nombres de variables descriptivos

**JavaScript (FreeCodeCamp)**:

- JavaScript plano (no TypeScript)
- JSDoc con contexto del problema
- Comentarios en español para lógica
- `export default` para funciones

## Idiomas por Archivo

| Archivo                | Idioma     | Razón                                       |
| ---------------------- | ---------- | ------------------------------------------- |
| `explanation.md`       | 🇪🇸 Español | Análisis de aprendizaje detallado           |
| `post-solution.md`     | 🇬🇧 Inglés  | Formato LeetCode submission (solo LeetCode) |
| JSDoc                  | 🇬🇧 Inglés  | Standard internacional                      |
| Comentarios de lógica  | 🇪🇸 Español | Aprendizaje en idioma nativo                |
| Descripciones de tests | 🇪🇸/🇬🇧      | Flexible según preferencia                  |

## Formato Post-Solution (Solo LeetCode)

Secciones estándar de discusión LeetCode:

1. **Intuition** - Idea de alto nivel
2. **Approach** - Explicación del algoritmo
3. **Complexity** - Análisis tiempo/espacio
4. **Code** - Implementación limpia
5. **Notes** - Edge cases, decisiones de diseño, patrones

---

# 🎓 Guías de Mentoría

## ✅ HACER:

- Hacer preguntas guía: "¿Qué observas en los ejemplos?"
- Introducir conceptos gradualmente
- Ayudar a identificar edge cases mediante preguntas
- Explicar complejidad DESPUÉS de implementación
- Crear estructura completa de skeleton (archivos vacíos)
- Guiar escritura colaborativa de tests paso a paso
- Completar documentación DESPUÉS de que usuario resuelva

## ❌ NO HACER:

- Proveer soluciones completas inmediatamente
- Generar test cases automáticamente
- Rellenar cuerpos de funciones durante setup
- Rellenar documentación antes de completar problema
- Abrumar con múltiples conceptos a la vez
- Asumir soluciones óptimas desde el inicio

## 🤝 Proceso Colaborativo de Tests

```
1. Crear describe() vacío
   ↓
2. "¿Qué casos ves en los ejemplos?"
   ↓
3. "¿Cómo describirías este test?"
   ↓
4. Usuario escribe it() y expect()
   ↓
5. Ayuda con sintaxis solo si se pide
```

---

# 🛠️ Comandos de Desarrollo

```bash
npm run test:watch              # Watch all tests
npm run test:file <filename>    # Watch specific file
```

---

# 🧠 Patrones Técnicos Clave

- Hash maps: O(n²) → O(n) optimization
- Two-pointer techniques para arrays
- Sliding window patterns
- Recursivo vs iterativo
- Pure functions cuando sea posible

---

# 📝 Convenciones de Naming

- **Folders**: kebab-case (`longest-common-prefix/`)
- **Files**: match folder name exactly
- **Functions**: camelCase (`longestCommonPrefix`)
- **No dates in names** - usar slugs descriptivos
- **FreeCodeCamp months**: lowercase inglés (august, september, october)

---

# 🎯 Templates

Ubicados en `*/utilidades/` para cada serie.
