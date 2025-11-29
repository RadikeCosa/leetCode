# Find Closest Person - Explicación Detallada

## Descripción del Problema

Este problema nos presenta un escenario en una línea numérica donde tres personas están posicionadas en diferentes puntos:

- **Persona 1** en posición `x`
- **Persona 2** en posición `y`
- **Persona 3** en posición `z` (no se mueve)

Tanto la Persona 1 como la Persona 2 se mueven hacia la Persona 3 a la misma velocidad. Necesitamos determinar quién llega primero.

## Análisis del Problema

### Conceptos Clave

1. **Distancia**: La distancia entre dos puntos en una línea numérica es el valor absoluto de su diferencia
2. **Tiempo de llegada**: Como ambas personas se mueven a la misma velocidad, quien tenga menor distancia llegará primero
3. **Casos posibles**:
   - Persona 1 llega primero → retornar 1
   - Persona 2 llega primero → retornar 2
   - Ambas llegan al mismo tiempo → retornar 0

### Estrategia de Solución

La clave está en entender que **el tiempo es proporcional a la distancia** cuando la velocidad es constante.

**Fórmula fundamental:**

```
tiempo = distancia / velocidad
```

Como ambas personas tienen la **misma velocidad**, podemos simplificar:

- Si `distancia_persona1 < distancia_persona2` → Persona 1 llega primero
- Si `distancia_persona1 > distancia_persona2` → Persona 2 llega primero
- Si `distancia_persona1 = distancia_persona2` → Llegan al mismo tiempo

**Pasos del algoritmo:**

1. Calcular `distancia_1_a_3 = |z - x|`
2. Calcular `distancia_2_a_3 = |z - y|`
3. Comparar distancias y retornar el resultado correspondiente

## Implementación

```typescript
export function findClosestPerson(x: number, y: number, z: number): number {
  // Calcular distancias absolutas hacia la Persona 3
  const distance1_3 = Math.abs(z - x);
  const distance2_3 = Math.abs(z - y);

  // Comparar distancias usando operador ternario anidado
  return distance1_3 < distance2_3 ? 1 : distance1_3 > distance2_3 ? 2 : 0;
}
```

### Decisiones de Diseño

1. **Variables descriptivas**: `distance1_3` y `distance2_3` dejan claro que medimos distancias hacia la Persona 3
2. **Math.abs()**: Esencial para manejar casos donde las personas están en lados opuestos de la Persona 3
3. **Operador ternario anidado**: Maneja los tres casos posibles de forma concisa y legible
4. **Una sola comparación por distancia**: Eficiente, no recalculamos valores

## Análisis de Complejidad

### Complejidad Temporal

**O(1) - Tiempo constante**

- 2 operaciones `Math.abs()`: O(1) cada una
- 2 comparaciones: O(1) cada una
- 1 operación de retorno: O(1)
- **Total**: O(1)

No importa qué tan grandes sean los valores de entrada, siempre ejecutamos el mismo número de operaciones.

### Complejidad Espacial

**O(1) - Espacio constante**

- 2 variables locales (`distance1_3`, `distance2_3`)
- No usamos estructuras de datos auxiliares
- El espacio usado no depende del tamaño de la entrada

## Casos Edge

### 1. **Todas las personas en el mismo punto**

```typescript
findClosestPerson(5, 5, 5) → 0
```

- Ambas distancias son 0 → empate

### 2. **Personas en extremos opuestos**

```typescript
findClosestPerson(1, 100, 50) → 1
```

- Persona 1: |50-1| = 49
- Persona 2: |50-100| = 50
- Persona 1 está más cerca

### 3. **Una persona ya está en el destino**

```typescript
findClosestPerson(10, 5, 5) → 2
```

- Persona 1: |5-10| = 5
- Persona 2: |5-5| = 0 (ya está ahí)

## Patrones y Técnicas Utilizadas

### 1. **Patrón de Comparación de Distancias**

- Problema común en geometría computacional
- Reducir problemas de movimiento a problemas de distancia
- Aplicable en pathfinding, física de juegos, etc.

### 2. **Uso Efectivo de Math.abs()**

- Manejo de coordenadas en línea numérica
- Abstracción de dirección (solo importa la magnitud)

### 3. **Operador Ternario Anidado**

- Manejo limpio de múltiples condiciones
- Alternativa concisa a if-else-if chains

### 4. **Naming Semántico de Variables**

- Variables auto-documentadas
- Reducción de necesidad de comentarios

## Conexiones con Otros Problemas

### Problemas Similares

- **Two Sum variants**: Comparación de distancias para encontrar pares óptimos
- **Closest Points**: Encontrar el punto más cercano en geometría
- **Meeting Point**: Problemas donde múltiples entidades convergen

### Patrones Aplicables

- **Distance Calculation**: Fundamental en muchos algoritmos geométricos
- **Optimization by Comparison**: Técnica para evitar cálculos complejos
- **Ternary Logic**: Manejo elegante de múltiples casos de retorno

### Extensiones Posibles

- **3D coordinates**: Extender a distancia euclidiana
- **Multiple people**: Generalizar para N personas
- **Different speeds**: Manejar velocidades variables
