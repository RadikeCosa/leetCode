# Fruits Into Baskets II - Documentación

## Descripción del Problema

Se nos dan dos arrays de enteros, `fruits` y `baskets`, cada uno de longitud n:

- `fruits[i]` representa la cantidad del i-ésimo tipo de fruta
- `baskets[j]` representa la capacidad de la j-ésima canasta

Debemos colocar las frutas de izquierda a derecha siguiendo estas reglas:

1. Cada tipo de fruta debe colocarse en la canasta disponible más a la izquierda que tenga capacidad mayor o igual a la cantidad de ese tipo de fruta.
2. Cada canasta puede contener solo un tipo de fruta.
3. Si un tipo de fruta no puede colocarse en ninguna canasta, queda sin colocar.

El objetivo es devolver el número de tipos de fruta que quedan sin colocar después de realizar todas las asignaciones posibles.

## Restricciones

- n == fruits.length == baskets.length
- 1 <= n <= 100
- 1 <= fruits[i], baskets[i] <= 1000

## Ejemplos y Casos de Prueba

### Ejemplo 1: Una fruta sin colocar

**Input:**

```typescript
fruits = [3, 5, 2];
baskets = [4, 3, 1];
```

**Output esperado:**

```typescript
1;
```

**Explicación paso a paso:**

1. Primera fruta (3) se coloca en la primera canasta (4)
2. Segunda fruta (5) no puede colocarse en ninguna canasta restante
3. Tercera fruta (2) se coloca en la segunda canasta (3)
   **Resultado:** 1 fruta queda sin colocar

### Ejemplo 2: Todas las frutas colocadas

**Input:**

```typescript
fruits = [3, 6, 1];
baskets = [6, 4, 7];
```

**Output esperado:**

```typescript
0;
```

**Explicación paso a paso:**

1. Primera fruta (3) se coloca en la primera canasta (6)
2. Segunda fruta (6) se coloca en la tercera canasta (7)
3. Tercera fruta (1) se coloca en la segunda canasta (4)
   **Resultado:** Todas las frutas se colocan correctamente

---

## Proceso de Razonamiento y Diseño de la Solución

### 1. Análisis del problema

- Se requiere simular un proceso de asignación secuencial, respetando restricciones de capacidad y unicidad de uso de canastas.
- El objetivo es minimizar la cantidad de frutas no colocadas.

### 2. Estrategia Algorítmica

- Recorrer cada fruta en orden (bucle externo)
- Para cada fruta, buscar la primera canasta disponible (bucle interno) que cumpla:
  - No haya sido usada
  - Tenga capacidad suficiente
- Si se encuentra, marcar la canasta como usada y continuar con la siguiente fruta
- Si no se encuentra, incrementar el contador de frutas no colocadas

### 3. Conceptos de Programación Utilizados

- **Bucles anidados:** Para comparar cada fruta con cada canasta
- **Estructura de datos auxiliar:** Array de booleanos para marcar canastas usadas
- **Variables de control:** Contador de frutas no colocadas, bandera para saber si una fruta fue colocada
- **Simulación paso a paso:** Implementación directa de las reglas del problema

### 4. Conceptos Algorítmicos

- **Greedy (avaro):** Siempre se elige la primera canasta disponible que cumpla la condición, sin mirar el futuro
- **Complejidad temporal:** O(n^2) en el peor caso, ya que para cada fruta se puede recorrer todas las canastas
- **Simulación:** El algoritmo reproduce fielmente el proceso descrito en el enunciado

---

## Reflexiones y Posibles Mejoras

- La solución es óptima para los límites del problema (n ≤ 100)
- Si el tamaño de los arrays fuera mucho mayor, se podría pensar en estructuras más eficientes (por ejemplo, árboles de búsqueda para encontrar la canasta adecuada más rápido)
- Es importante practicar este tipo de problemas para afianzar la habilidad de traducir reglas en código y de usar estructuras auxiliares simples

---

## Resumen para Entrevistas

- Leer cuidadosamente el enunciado y traducir las reglas a pasos concretos
- Identificar restricciones y elegir estructuras de datos adecuadas
- Simular el proceso paso a paso antes de codificar
- Comentar el código para dejar claro el razonamiento

```

```
