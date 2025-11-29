# Sleep - Análisis del Problema

## Descripción

Dado un entero positivo `millis`, escribe una función asíncrona que "duerma" por `millis` milisegundos. Puede resolver con cualquier valor.

## Análisis Inicial

### ¿Qué observas en los ejemplos?

- El problema requiere crear una función que retarde la ejecución por un tiempo específico
- La función debe ser asíncrona y retornar una Promise
- El tiempo de espera debe ser aproximadamente igual al valor dado en milisegundos

### Casos de Prueba

1. **Ejemplo 1**: `millis = 100` → debe resolver después de ~100ms
2. **Ejemplo 2**: `millis = 200` → debe resolver después de ~200ms

### Restricciones

- `1 <= millis <= 1000`
- Se permite una desviación menor del tiempo real de espera

## Enfoque de Solución

### Conceptos Clave

- **Programación Asíncrona**: Manejo de operaciones que no bloquean el hilo principal
- **Promises**: Objetos que representan la eventual completación de una operación asíncrona
- **setTimeout**: Función que ejecuta código después de un retraso especificado

### Estrategia

Para crear una función que "duerma" por un tiempo determinado, necesitamos:

1. **Crear una Promise** que se resuelva después de un tiempo específico
2. **Usar setTimeout** para programar la resolución de la Promise
3. **Usar async/await** para hacer que la función espere hasta que se resuelva la Promise

La idea es combinar `setTimeout` (que programa ejecución futura) con `Promise` (que permite operaciones asíncronas) y `await` (que pausa la ejecución hasta que la Promise se resuelve).

## Implementación

```typescript
export async function sleep(millis: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, millis));
}
```

### Explicación paso a paso:

1. **`new Promise((resolve) => ...)`**: Creamos una nueva Promise que recibe la función `resolve` como parámetro
2. **`setTimeout(resolve, millis)`**: Programamos que `resolve` se ejecute después de `millis` milisegundos
3. **`await`**: Pausamos la ejecución de la función hasta que la Promise se resuelve
4. **Cuando setTimeout ejecuta `resolve()`**: La Promise cambia de "pending" a "resolved" y `await` termina

### ¿Por qué funciona?

- `setTimeout` es asíncrono por naturaleza - no bloquea el hilo principal
- `Promise` nos permite "envolver" esta operación asíncrona
- `await` convierte el código asíncrono en algo que parece síncrono

## Complejidad

- **Tiempo**: O(1) - La operación es constante, independiente del valor de `millis`
- **Espacio**: O(1) - No usamos estructuras de datos adicionales, solo una Promise temporal

Nota: Aunque el tiempo de "espera" es `millis`, en términos de complejidad algorítmica es O(1) porque no procesamos datos de entrada de tamaño variable.

## Casos Edge

1. **Valor mínimo (1ms)**: Funciona correctamente, aunque en la práctica puede tomar un poco más debido a la precisión del timer del navegador
2. **Valor máximo (1000ms)**: Sin problemas, setTimeout puede manejar fácilmente estos valores
3. **Precisión del timing**: Se permite cierta desviación, lo que es realista dado que JavaScript no garantiza precisión perfecta en timers

## Patrones Aprendidos

### 1. **Promise + setTimeout Pattern**

```typescript
// Patrón para crear delays asíncronos
new Promise((resolve) => setTimeout(resolve, delay));
```

### 2. **Async/Await Wrapping**

```typescript
// Convertir operaciones callback-based a async/await
async function asyncOperation() {
  await new Promise((resolve) => someAsyncAPI(resolve));
}
```

### 3. **Timer-based Asynchronous Operations**

- Combinación de APIs del navegador (`setTimeout`) con Promises modernas
- Útil para testing, rate limiting, y user experience improvements

### 4. **Promise Constructor Pattern**

- El constructor Promise recibe una función "executor"
- Esta función recibe `resolve` y `reject` como parámetros
- Llamar `resolve()` completa la Promise exitosamente
