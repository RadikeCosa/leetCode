---
title: "Navigator"
difficulty: "easy"
topics:
  - Array
  - Simulation
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

## Enunciado del Problema

Dado un string que representa una secuencia de instrucciones de navegación ("N", "S", "E", "O"), determinar la posición final en un plano cartesiano, partiendo desde el origen (0, 0).

Las instrucciones son:

- "N": norte (+y)
- "S": sur (-y)
- "E": este (+x)
- "O": oeste (-x)

**Ejemplo:**

- navigator("NNEOS") → [2, 1]
- navigator("SSEE") → [2, -2]
- navigator("") → [0, 0]

## Análisis Inicial

Este problema es un clásico de simulación de movimientos en un plano cartesiano. Cada instrucción modifica la posición actual según la dirección indicada.

**Desafíos identificados:**

- Parsing de instrucciones
- Actualización de coordenadas
- Manejo de string vacío

## Estrategias posibles

### 1. Enfoque con bucle for

- Simple y directo
- Legible
- Eficiente

### 2. Enfoque con reduce

- Funcional
- Conciso
- Menos legible para principiantes

### 3. Enfoque con switch/case

- Claro para múltiples instrucciones
- Fácil de extender

## Solución Implementada

```javascript
function navigator(instructions) {
  let x = 0,
    y = 0;
  for (const dir of instructions) {
    switch (dir) {
      case "N":
        y++;
        break;
      case "S":
        y--;
        break;
      case "E":
        x++;
        break;
      case "O":
        x--;
        break;
    }
  }
  return [x, y];
}
```

**Lógica paso a paso:**

1. Inicializar posición en (0, 0)
2. Recorrer cada instrucción
3. Actualizar x/y según la dirección
4. Retornar posición final

## Alternativas Consideradas

### 1. Enfoque con reduce

```javascript
function navigator(instructions) {
  return [...instructions].reduce(
    ([x, y], dir) => {
      if (dir === "N") return [x, y + 1];
      if (dir === "S") return [x, y - 1];
      if (dir === "E") return [x + 1, y];
      if (dir === "O") return [x - 1, y];
      return [x, y];
    },
    [0, 0]
  );
}
```

- Conciso
- Menos eficiente (crea arrays en cada paso)

### 2. Enfoque con objeto de movimientos

```javascript
function navigator(instructions) {
  const moves = { N: [0, 1], S: [0, -1], E: [1, 0], O: [-1, 0] };
  let x = 0,
    y = 0;
  for (const dir of instructions) {
    if (moves[dir]) {
      x += moves[dir][0];
      y += moves[dir][1];
    }
  }
  return [x, y];
}
```

- Fácil de extender
- Legible

## Elección del Enfoque

Se eligió el enfoque con bucle y switch por su claridad y eficiencia.

## Complejidad

- Tiempo: O(n) donde n es la longitud del string
- Espacio: O(1)

## Aprendizajes

- Simulación de movimientos es útil en problemas de algoritmos y juegos
- El manejo de strings y actualización de variables es directo en JavaScript