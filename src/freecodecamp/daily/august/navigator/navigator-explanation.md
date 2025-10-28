# Navigator

## Enunciado del Problema

Dado un array de comandos de navegador ejecutados en Netscape Navigator, retornar la página actual después de ejecutar todos los comandos siguiendo estas reglas:

Siempre empiezas en la página "Home", que no está incluida en el array de comandos.
Los comandos válidos son:

- "Visit Page": Donde "Page" es el nombre de la página que visitas. Por ejemplo, "Visit About" te lleva a la página "About". Cuando visitas una nueva página, asegúrate de descartar cualquier historial forward que tengas.
- "Back": Te lleva a la página anterior en tu historial o se queda en la página actual si no hay una.
- "Forward": Te lleva forward en el historial a la página de la que viniste o se queda en la página actual si no hay una.

Por ejemplo, dado ["Visit About Us", "Back", "Forward"], retornar "About Us".

**Ejemplos:**

- navigate(["Visit About Us", "Back", "Forward"]) → "About Us"
- navigate(["Forward"]) → "Home"
- navigate(["Back"]) → "Home"
- navigate(["Visit About Us", "Visit Gallery"]) → "Gallery"
- navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) → "Home"
- navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) → "Contact"
- navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) → "Visit Us"

**Restricciones:**

- El array de comandos puede estar vacío o contener comandos válidos
- Los nombres de páginas pueden contener espacios y caracteres especiales
- Siempre se empieza en la página "Home"
- "Back" y "Forward" se quedan en la página actual si no hay historial disponible
- Los comandos "Visit" descartan el historial forward

## Análisis Inicial

Este problema simula el comportamiento de navegación de un navegador web, específicamente el sistema de historial de páginas que permite ir hacia atrás y hacia adelante. Es un excelente ejercicio para entender estructuras de datos y algoritmos de navegación.

**¿Por qué es importante este problema?**

1. **Simula comportamiento real**: Los navegadores web usan exactamente esta lógica
2. **Estructuras de datos**: Requiere entender stacks (pilas) para el historial
3. **Lógica condicional**: Manejo de casos edge cuando no hay historial
4. **Parsing de comandos**: Procesamiento de strings con formato específico

**Desafíos identificados:**

- **Estado mutable**: Necesitamos mantener el estado del navegador entre comandos
- **Historial bidireccional**: Tanto "back" como "forward" history
- **Comandos variables**: "Visit Página" vs comandos fijos "Back"/"Forward"
- **Casos edge**: Comportamiento cuando no hay historial disponible

**Estrategias posibles:**

### 1. **Enfoque con Arrays (Implementado)**
- ✅ **Natural**: Arrays como stacks (push/pop)
- ✅ **Sencillo**: Fácil de entender y debuggear
- ✅ **Eficiente**: Operaciones O(1) para push/pop
- ✅ **Flexible**: Fácil agregar funcionalidades

### 2. **Enfoque con Linked List**
- ❌ **Overkill**: Más complejo sin beneficios reales
- ❌ **Más código**: Implementación manual de lista enlazada

### 3. **Enfoque con Map/Objeto**
- ❌ **Ineficiente**: No mantiene orden de navegación
- ❌ **Más complejo**: Tendríamos que manejar índices manualmente

**Elección del enfoque:** Arrays como stacks es la solución más natural y eficiente.

**Conceptos clave a dominar:**

1. **Stack (Pila)**: LIFO - Last In, First Out
2. **Mutabilidad**: El estado cambia con cada comando
3. **Parsing**: Extraer información de strings estructurados
4. **Casos edge**: Comportamiento cuando no hay elementos en los stacks

## Solución Implementada

Implementamos una solución orientada a objetos usando una clase `BrowserHistory` que encapsula toda la lógica del navegador. Esto nos permite separar responsabilidades y hacer el código más mantenible.

### Arquitectura de la Solución

```
BrowserHistory (Clase)
├── current: string        // Página actual
├── backHistory: string[]  // Stack de páginas anteriores
└── forwardHistory: string[] // Stack de páginas siguientes

navigate(commands) → BrowserHistory → current
```

### Lógica Paso a Paso

**1. Inicialización:**
```javascript
const browser = new BrowserHistory();
// Estado inicial: { current: "Home", backHistory: [], forwardHistory: [] }
```

**2. Procesamiento de comandos:**
Para cada comando en el array, ejecutamos la lógica correspondiente:

**Comando "Visit Página":**
```javascript
// Ejemplo: "Visit About Us"
// 1. Extraer página: "About Us"
// 2. Guardar página actual en backHistory
// 3. Cambiar current a nueva página
// 4. Limpiar forwardHistory (comportamiento del navegador)
```

**Comando "Back":**
```javascript
// 1. Verificar si hay páginas en backHistory
// 2. Si sí: mover current a forwardHistory
// 3. Tomar la última página de backHistory como nueva current
// 4. Si no: quedarse en la página actual
```

**Comando "Forward":**
```javascript
// 1. Verificar si hay páginas en forwardHistory
// 2. Si sí: mover current a backHistory
// 3. Tomar la última página de forwardHistory como nueva current
// 4. Si no: quedarse en la página actual
```

### Ejemplo Detallado

Tomemos el ejemplo: `["Visit About Us", "Back", "Forward"]`

**Estado inicial:**
```
current: "Home"
backHistory: []
forwardHistory: []
```

**Después de "Visit About Us":**
```
current: "About Us"     ← Nueva página
backHistory: ["Home"]   ← Página anterior guardada
forwardHistory: []      ← Limpiado
```

**Después de "Back":**
```
current: "Home"         ← Regresamos
backHistory: []         ← Vacío (sacamos "Home")
forwardHistory: ["About Us"] ← Guardamos donde estábamos
```

**Después de "Forward":**
```
current: "About Us"     ← Avanzamos
backHistory: ["Home"]   ← Regresamos a tener "Home"
forwardHistory: []      ← Vacío (sacamos "About Us")
```

**Resultado final:** `"About Us"`

### Ventajas de Esta Implementación

1. **Encapsulación**: Toda la lógica del navegador está en una clase
2. **Claridad**: Métodos separados para cada acción
3. **Mantenibilidad**: Fácil cambiar la implementación interna
4. **Reutilizable**: La clase podría usarse en otros contextos
5. **Testable**: Cada método puede testearse independientemente

## Alternativas Consideradas

### 1. **Enfoque con Objeto Literal (Versión Inicial)**
```javascript
function navigate(commands) {
  const navigator = {
    current: "Home",
    backHistory: [],
    forwardHistory: []
  };
  
  for (const command of commands) {
    if (command.startsWith("Visit ")) {
      const page = command.slice(6);
      navigator.backHistory.push(navigator.current);
      navigator.current = page;
      navigator.forwardHistory = [];
    } else if (command === "Back") {
      if (navigator.backHistory.length > 0) {
        navigator.forwardHistory.push(navigator.current);
        navigator.current = navigator.backHistory.pop();
      }
    } else if (command === "Forward") {
      if (navigator.forwardHistory.length > 0) {
        navigator.backHistory.push(navigator.current);
        navigator.current = navigator.forwardHistory.pop();
      }
    }
  }
  return navigator.current;
}
```

**Cuándo usar:**
- ✅ **Más simple**: Menos código para escribir
- ✅ **Directo**: Sin necesidad de definir clase
- ✅ **Rápido de prototipar**: Ideal para pruebas rápidas
- ❌ **Menos estructurado**: Lógica mezclada en una función
- ❌ **Menos reutilizable**: Difícil extraer la lógica del navegador

### 2. **Enfoque con Arrays como Stacks Personalizados**
```javascript
class BrowserHistory {
  constructor() {
    this.history = ["Home"];  // Un solo array para todo el historial
    this.currentIndex = 0;    // Índice de la página actual
  }
  
  visit(page) {
    // Remover elementos forward del array
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(page);
    this.currentIndex++;
  }
  
  back() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  
  forward() {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
    }
  }
  
  getCurrentPage() {
    return this.history[this.currentIndex];
  }
}
```

**Cuándo usar:**
- ✅ **Memoria eficiente**: Un solo array en lugar de tres
- ✅ **Más simple**: Solo manejar un índice
- ✅ **Fácil de entender**: Un solo array con un puntero
- ❌ **Más propenso a errores**: Manejo manual de índices
- ❌ **Menos intuitivo**: No refleja claramente back/forward

### 3. **Enfoque Funcional con Inmutabilidad**
```javascript
function navigate(commands) {
  const initialState = {
    current: "Home",
    backHistory: [],
    forwardHistory: []
  };
  
  const finalState = commands.reduce((state, command) => {
    if (command.startsWith("Visit ")) {
      const page = command.replace("Visit ", "");
      return {
        current: page,
        backHistory: [...state.backHistory, state.current],
        forwardHistory: []
      };
    } else if (command === "Back" && state.backHistory.length > 0) {
      return {
        current: state.backHistory[state.backHistory.length - 1],
        backHistory: state.backHistory.slice(0, -1),
        forwardHistory: [...state.forwardHistory, state.current]
      };
    } else if (command === "Forward" && state.forwardHistory.length > 0) {
      return {
        current: state.forwardHistory[state.forwardHistory.length - 1],
        backHistory: [...state.backHistory, state.current],
        forwardHistory: state.forwardHistory.slice(0, -1)
      };
    }
    return state;
  }, initialState);
  
  return finalState.current;
}
```

**Cuándo usar:**
- ✅ **Inmutable**: No modifica estado existente
- ✅ **Funcional**: Usa reduce para transformación
- ✅ **Predecible**: Fácil de testear y debuggear
- ❌ **Más complejo**: Spread operators y slicing
- ❌ **Menos eficiente**: Crea nuevos arrays constantemente
- ❌ **Difícil de leer**: Lógica nested en reduce

### 4. **Alternativas para Extraer Nombres de Páginas**

**Opción A: `slice(6)`**
```javascript
const page = command.slice(6);  // "Visit About Us" → "About Us"
```

**Opción B: `replace("Visit ", "")` (Implementada)**
```javascript
const page = command.replace("Visit ", "");  // "Visit About Us" → "About Us"
```

**Opción C: `substring(6)`**
```javascript
const page = command.substring(6);  // Similar a slice
```

**Opción D: `split()` con destructuring**
```javascript
const [, page] = command.split(" ", 2);  // ["Visit", "About Us"] → "About Us"
```

**Opción E: Expresión regular**
```javascript
const page = command.match(/^Visit (.+)$/)[1];  // Captura grupo
```

## Elección de la Solución Implementada

Elegimos la **clase `BrowserHistory`** con **`replace()`** por estas razones:

1. **Claridad pedagógica**: La clase encapsula perfectamente el concepto de "navegador"
2. **Mantenibilidad**: Fácil agregar nuevos métodos o modificar comportamiento
3. **Legibilidad**: `replace("Visit ", "")` deja claro qué se está removiendo
4. **Robustez**: Maneja correctamente todos los casos edge
5. **Extensibilidad**: Fácil agregar funcionalidades como "ir a página específica"

**Comparación final:**

| Enfoque | Legibilidad | Mantenibilidad | Performance | Elegido |
|---------|-------------|----------------|-------------|---------|
| **Clase + replace()** | Excelente | Excelente | Buena | ✅ Sí |
| Objeto literal + slice() | Buena | Regular | Buena | ❌ No |
| Array único + índice | Regular | Regular | Buena | ❌ No |
| Funcional inmutable | Regular | Buena | Regular | ❌ No |

## Complejidad

### Análisis Detallado

**Tiempo: O(n)**
- Un bucle que itera n veces (n = número de comandos)
- Cada iteración: operaciones O(1)
  - `startsWith()`: O(1) comparación de prefijo
  - `replace()`: O(m) donde m es longitud del comando
  - `push()`/`pop()`: O(1) operaciones de array
- **Total**: O(n×m) donde m es longitud promedio de comandos
- **En práctica**: O(n) ya que m es constante y pequeño

**Espacio: O(n)**
- `backHistory`: Hasta n elementos en el peor caso
- `forwardHistory`: Hasta n elementos en el peor caso
- **Total**: O(n) espacio adicional
- **Mejor caso**: O(1) si solo comandos "Back"/"Forward" sin "Visit"

### Consideraciones Prácticas

- **n típico**: Arrays de comandos pequeños (10-100 elementos)
- **Longitud de comandos**: "Visit Página Larga" ~20-50 caracteres
- **Performance real**: Instantáneo incluso para n=1000
- **Sin bottlenecks**: Todas las operaciones son O(1) o O(m)

### Comparación con Límites Teóricos

- **Caso mejor**: Solo "Back"/"Forward" sin historial → O(1) espacio
- **Caso peor**: Solo "Visit" commands → O(n) espacio para historial
- **Escalabilidad**: Funciona bien hasta n=10^6 comandos
- **Optimización posible**: Si n es muy grande, considerar linked lists

## Aprendizajes y Reflexiones

### Patrones Identificados

1. **Stack como estructura de datos**: Uso natural de arrays como pilas LIFO
2. **Estado mutable vs inmutable**: Trade-offs entre claridad y performance
3. **Encapsulación con clases**: Separar responsabilidades mejora mantenibilidad
4. **Parsing de comandos**: Extraer información de strings estructurados
5. **Manejo de casos edge**: Comportamiento cuando estructuras están vacías

### Mejores Prácticas Aplicadas

- **Nombres descriptivos**: `backHistory`, `forwardHistory`, `getCurrentPage()`
- **Comentarios estratégicos**: Explicar lógica compleja, no lo obvio
- **Validación defensiva**: Verificar longitud antes de `pop()`
- **Separación de responsabilidades**: Clase para lógica, función para procesamiento
- **API clara**: Métodos que expresan intención (`visit()`, `back()`, `forward()`)

### Reflexiones sobre TDD

- Los tests fueron cruciales para validar casos edge
- La refactorización fue segura gracias a la cobertura de tests
- Los tests sirvieron como especificación ejecutable
- TDD ayudó a pensar en todos los casos posibles antes de implementar

### Comparación con Navegadores Reales

**Similitudes:**
- Historial back/forward como stacks
- "Visit" descarta forward history
- Comportamiento cuando no hay más páginas

**Diferencias:**
- Navegadores reales guardan URLs completas, timestamps, etc.
- Manejo de navegación en tabs vs windows
- Persistencia del historial entre sesiones
- Límites de memoria para el historial

### Posibles Extensiones

- **Navegación por índice**: Ir a una página específica del historial
- **Historial con timestamps**: Rastrear cuándo se visitó cada página
- **Favoritos**: Marcar páginas como favoritas
- **Búsqueda**: Buscar en el historial
- **Múltiples tabs**: Manejar navegación en múltiples pestañas
- **Validación de URLs**: Verificar que las páginas sean URLs válidas

### Conceptos Relacionados

- **Stack data structure**: Base fundamental para este problema
- **Browser history API**: Cómo los navegadores exponen esta funcionalidad
- **Undo/Redo patterns**: Similar en editores de texto
- **State management**: Manejo de estado en aplicaciones
- **Command pattern**: Patrón de diseño para acciones reversibles

### Preguntas Frecuentes

**¿Por qué usar stacks (arrays) para el historial?**
- Los stacks son perfectos para navegación LIFO
- Fáciles de implementar con arrays en JavaScript
- Operaciones push/pop son O(1)

**¿Por qué "Visit" limpia el forward history?**
- Es el comportamiento estándar de los navegadores
- Cuando visitas una nueva página, el "futuro" se pierde
- Evita inconsistencias en el historial

**¿Qué pasa si hay comandos inválidos?**
- En esta implementación, se ignoran silenciosamente
- Podríamos agregar validación y lanzar errores
- Depende de los requisitos específicos

**¿Podría optimizarse más?**
- Para n muy grande: usar linked lists en lugar de arrays
- Para memoria limitada: limitar tamaño del historial
- Pero para casos típicos: esta implementación es óptima

Este problema ilustra perfectamente cómo los conceptos de estructuras de datos se aplican en el mundo real, específicamente en la navegación web que usamos todos los días.
