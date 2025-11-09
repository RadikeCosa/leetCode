# Scripts para el Proyecto LeetCode

Este directorio contiene scripts automatizados para generar y gestionar la estructura de problemas siguiendo la metodología TDD establecida en las copilot-instructions.

## 🚀 Scripts Disponibles

### `npm run new-problem`

Crea la estructura completa de un nuevo problema con archivos skeleton.

**Uso:**

```bash
npm run new-problem <series> <problem-name> [category]
```

**Ejemplos:**

```bash
# Serie Daily (sin categoría)
npm run new-problem daily "two-sum"

# Serie Top Interview (con categoría)
npm run new-problem top-interview "longest-substring" array-string

# Serie FreeCodeCamp (con categoría y mes)
npm run new-problem freecodecamp "reverse-string" daily/november

# Serie Binary Search (con sección)
npm run new-problem binary-search "search-in-matrix" standard-search
```

**Series disponibles:**

- `daily` - Problemas diarios de LeetCode
- `30-days-js` - Serie 30 Days of JavaScript
- `top-interview` - Top Interview Questions
- `binary-search` - Serie Binary Search
- `freecodecamp` - Problemas de FreeCodeCamp

### `npm run list-problems`

Lista todos los problemas del workspace con su estado de completitud.

**Uso:**

```bash
# Listar todos los problemas
npm run list-problems

# Listar problemas de una serie específica
npm run list-problems daily

# Mostrar detalles adicionales
npm run list-problems --details
```

### `npm run validate-problems`

Valida la estructura de todos los problemas y detecta archivos faltantes.

**Uso:**

```bash
# Validar todo el proyecto
npm run validate-problems

# Validar serie específica
npm run validate-problems daily
```

### `npm run format-files`

Formatea archivos Markdown del proyecto.

**Uso:**

```bash
# Formatear todos los archivos
npm run format-files

# Formatear directorio específico
npm run format-files src/daily
```

## 📁 Estructura Generada

### LeetCode Problems (TS)

Para series: `daily`, `30-days-js`, `top-interview`, `binary-search`

```text
problem-name/
├── problem-name.ts              # Implementación (skeleton)
├── problem-name.test.ts         # Tests (colaborativo)
├── problem-name-explanation.md  # Análisis (español)
└── problem-name-post-solution.md # Post LeetCode (inglés)
```

### FreeCodeCamp Problems (JS)

Para serie: `freecodecamp`

```text
problem-name/
├── problem-name.js              # Implementación (skeleton)
├── problem-name.test.js         # Tests (colaborativo)
└── problem-name-explanation.md  # Análisis (español)
```

## 🎯 Metodología TDD

Los scripts siguen estrictamente la metodología establecida:

### 🔴 RED Phase

1. **Solo skeletons**: Los archivos se crean vacíos con TODOs
2. **Tests colaborativos**: El archivo de test tiene un `describe()` vacío
3. **Documentación**: Solo headers de secciones, sin contenido

### 🟢 GREEN Phase

1. **Escritura colaborativa**: Usuario escribe tests con guía
2. **Implementación iterativa**: Usuario implementa con `npm run test:watch`
3. **Desarrollo guiado**: Preguntas como "¿Qué casos ves en los ejemplos?"

### 🔵 REFACTOR Phase

1. **Documentación completa**: Se completan los archivos .md
2. **Análisis de complejidad**: Se documenta después de implementar
3. **Knowledge base**: Se actualizan los archivos de conceptos

## ⚙️ Configuración por Serie

| Serie         | Path                          | Estructura     | Lenguaje | Post-Solution |
| ------------- | ----------------------------- | -------------- | -------- | ------------- |
| daily         | `src/daily/`                  | Flat           | TS       | ✅            |
| 30-days-js    | `src/30-days-js/section/`     | Sectioned      | TS       | ✅            |
| top-interview | `src/top-interview/category/` | Categorized    | TS       | ✅            |
| binary-search | `src/binary-search/section/`  | Sectioned      | TS       | ✅            |
| freecodecamp  | `src/freecodecamp/cat/month/` | Category+Month | JS       | ❌            |

## 🛠️ Desarrollo de Scripts

Los scripts están organizados en:

- `scripts/new-problem.ts` - Script principal
- `scripts/utils/problem-utils.ts` - Funciones de utilidad
- `scripts/utils/templates.ts` - Generadores de templates
- `scripts/list-problems.ts` - Listado de problemas
- `scripts/validate-problems.ts` - Validación de estructura
- `scripts/format-files.ts` - Formateo de archivos

## 📝 Convenciones

- **Naming**: kebab-case para carpetas y archivos
- **Functions**: camelCase para nombres de funciones
- **Comments**: Español para lógica, inglés para JSDoc
- **Tests**: Colaborativos, nunca auto-generados
- **Documentation**: Se completa DESPUÉS de implementar

## 🚨 Reglas Críticas

- ❌ **NUNCA** generar código completo en setup
- ❌ **NUNCA** crear tests automáticamente
- ✅ **SIEMPRE** colaborar en escritura de tests
- ✅ **SIEMPRE** incluir problema completo en comentarios
- ✅ **SIEMPRE** empezar con skeletons vacíos
