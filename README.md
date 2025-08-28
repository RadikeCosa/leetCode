# LeetCode & Algoritmos - Apuntes de Estudio

Este repositorio es mi espacio personal de práctica y documentación para problemas de algoritmos y estructuras de datos, principalmente de LeetCode. El objetivo es crear una base sólida de conocimientos para preparación de entrevistas técnicas.

## 🎯 Propósito del Proyecto

- **Práctica constante**: Resolver problemas de algoritmos de forma regular
- **Documentación detallada**: Cada problema incluye análisis del razonamiento, conceptos utilizados y reflexiones
- **Evolución del conocimiento**: Construcción gradual de una biblioteca de conceptos y patrones

## 📁 Estructura del Proyecto

```
src/
├── conceptos-y-algoritmos.md     # Base de conocimientos acumulativa
├── daily/                       # Desafíos diarios de LeetCode
│   └── problema-nombre/
│       ├── problema-nombre.ts              # Implementación de la solución
│       ├── problema-nombre.test.ts         # Tests automatizados
│       ├── problema-nombre-explanation.md  # Análisis detallado del problema
│       └── problema-nombre-post-solution.md # Formato LeetCode post
└── 30-days-js/                 # Serie "30 Days of JavaScript"
    ├── conceptos-javascript.md         # Conceptos JS/TS específicos
    ├── parte-1-introduccion/           # Fundamentos de JavaScript
    ├── parte-2-transformacion-de-arrays/ # Array methods y transformaciones
    ├── parte-3-function-transformations/  # Higher-order functions
    └── utilidades/                     # Templates y herramientas
```

## 🛠️ Tecnologías

- **[TypeScript](https://www.typescriptlang.org/)**: Lenguaje principal para implementaciones
- **[Vitest](https://vitest.dev/)**: Framework de testing para validar soluciones
- **[Node.js](https://nodejs.org/)**: Entorno de ejecución

## 🚀 Scripts Disponibles

```bash
# Ejecutar todos los tests
npm run test

# Ejecutar tests en modo watch (observa cambios)
npm run test:watch

# Ejecutar test específico por patrón de nombre
npm run current "nombre-del-test"

# Compilar TypeScript
npm run build
```

## 📚 Metodología de Estudio

### Para cada problema:

1. **Análisis inicial**: Entender completamente el enunciado y restricciones
2. **Diseño de solución**: Razonar el enfoque antes de programar
3. **Implementación**: Escribir tests primero, luego la solución
4. **Documentación**: Crear apuntes detallados con:
   - Proceso de razonamiento
   - Conceptos de programación utilizados
   - Análisis de complejidad
   - Reflexiones y posibles mejoras
5. **Síntesis**: Actualizar el archivo de conceptos generales

### Serie "30 Days of JavaScript"

Esta serie se centra en conceptos fundamentales de JavaScript/TypeScript aplicados a algoritmos y estructuras de datos. Organizada temáticamente:

- **Parte 1 - Introducción**: Fundamentos de JavaScript (closures, functions, etc.)
- **Parte 2 - Transformación de Arrays**: Array methods (map, filter, reduce)
- **Parte 3 - Function Transformations**: Higher-order functions y composition

Cada ejercicio mantiene la misma profundidad analítica que el resto del proyecto, con documentación comprensiva y tests exhaustivos.

### Conceptos clave documentados:

- **Algoritmos**: Greedy, recursión, programación dinámica, etc.
- **Estructuras de datos**: Arrays, árboles, grafos, hash tables, etc.
- **Patrones de resolución**: Dos punteros, sliding window, divide y vencerás, etc.
- **JavaScript/TypeScript**: Closures, HOFs, functional programming, tipos avanzados
- **Análisis de complejidad**: Temporal y espacial
- **Técnicas de programación**: Bucles anidados, estructuras auxiliares, etc.

## 🎯 Objetivos de Aprendizaje

- Desarrollar intuición para reconocer patrones en problemas de algoritmos
- Dominar el análisis de complejidad temporal y espacial
- Practicar la comunicación técnica clara y estructurada
- **Fortalecer fundamentos de JavaScript/TypeScript** con la serie de 30 días
- **Dominar programación funcional** y higher-order functions
- Construir confianza para entrevistas técnicas
- Mantener un registro organizado del progreso y conocimientos adquiridos

## 📖 Series de Problemas

### Daily Problems

Problemas generales de LeetCode enfocados en algoritmos y estructuras de datos fundamentales.

### 30 Days of JavaScript

Serie especializada en JavaScript/TypeScript que combina conceptos del lenguaje con resolución de problemas:

- **Test-first approach**: Tests completos antes de implementar
- **Documentación comprensiva**: Análisis completo post-solución
- **Organización temática**: Agrupados por conceptos en lugar de por día
- **Acumulación de conocimiento**: Patrones JS/TS en `conceptos-javascript.md`

## 📝 Notas

Este repositorio es un trabajo en progreso que se actualiza constantemente. Cada problema resuelto añade valor al conjunto total de conocimientos, creando una biblioteca personal de referencia técnica.

---

_Última actualización: Agosto 2025_
