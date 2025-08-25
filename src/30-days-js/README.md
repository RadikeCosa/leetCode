# 30 Days of JavaScript - LeetCode

Esta carpeta contiene la serie de problemas "30 Days of JavaScript" de LeetCode, siguiendo la misma metodología y estructura del proyecto principal.

## Estructura de cada problema

Cada problema sigue el patrón establecido en las normas del proyecto:

```
src/30-days-js/problem-name/
├── problem-name.ts              # Implementación TypeScript
├── problem-name.test.ts         # Suite de tests con Vitest
├── problem-name-explanation.md  # Análisis detallado
└── problem-name-post-solution.md # Formato LeetCode post
```

## Enfoque de aprendizaje

- **Mentorship-driven**: Preguntas guía en lugar de soluciones directas
- **Test-first**: Tests completos antes de implementar
- **Documentación comprensiva**: Análisis completo post-solución
- **Acumulación de conocimiento**: Patrones y conceptos en `../conceptos-y-algoritmos.md`

## Comandos útiles

```bash
# Ejecutar tests de toda la serie
npm test -- 30-days-js

# Modo watch para desarrollo
npm run test:watch

# Compilación TypeScript
npm run build
```

## Normas de implementación

### Código TypeScript

- Tipos explícitos en todas las funciones
- JSDoc con contexto del problema y complejidad
- Comentarios en español explicando la lógica
- Nombres descriptivos y camelCase

### Tests

- Todos los ejemplos de LeetCode cubiertos
- Casos extremos y boundary conditions
- Nombres descriptivos de tests
- Documentación completa del problema en comentarios

### Documentación

- **explanation.md**: Análisis completo después de resolver
- **post-solution.md**: Formato estándar de LeetCode
- Actualización de conceptos generales tras cada problema

## Serie "30 Days of JavaScript"

Esta serie se centra en conceptos fundamentales de JavaScript/TypeScript aplicados a algoritmos y estructuras de datos, perfecta para consolidar tanto el lenguaje como las habilidades de resolución de problemas.

Cada problema se aborda con la misma profundidad analítica que el resto del proyecto, manteniendo la coherencia metodológica y de documentación.
