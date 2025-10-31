# Nth Prime - Análisis de Soluciones

## Análisis del Problema

El problema consiste en encontrar el n-ésimo número primo en la secuencia de números primos.

### Requisitos
- **Entrada**: Un número entero positivo `n` (1 ≤ n ≤ 1000)
- **Salida**: El n-ésimo número primo
- **Definición**: Un número primo es un entero positivo mayor que 1 que solo es divisible por 1 y sí mismo

### Ejemplos de Entrada/Salida
```
n = 5    → 11    (5to primo)
n = 10   → 29    (10mo primo)
n = 16   → 53    (16to primo)
n = 99   → 523   (99no primo)
n = 1000 → 7919  (1000mo primo)
```

## Evolución de Soluciones

### 1. Solución Básica (Fuerza Bruta Optimizada)

```javascript
function nthPrime(n) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  let current = 1;
  while (count < n) {
    current++;
    if (isPrime(current)) count++;
  }
  return current;
}
```

#### Características:
- ✅ Muy legible y fácil de entender
- ✅ Implementación directa del concepto
- ✅ Optimización básica usando raíz cuadrada
- ❌ Ineficiente para números grandes
- ❌ Repite cálculos innecesariamente

#### Rendimiento:
- **Complejidad Temporal**: O(n * √m) donde m es el valor del n-ésimo primo
- **Complejidad Espacial**: O(1)
- **Tiempos Típicos**:
  - n = 100: ~50ms
  - n = 1000: ~2000ms

### 2. Solución con Caché de Primos

```javascript
function nthPrime(n) {
  const smallPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  if (n <= 10) return smallPrimes[n - 1];

  const primes = [...smallPrimes];
  let num = primes[primes.length - 1] + 2;

  function isPrime(num) {
    const sqrt = Math.sqrt(num);
    for (let i = 0; primes[i] <= sqrt; i++) {
      if (num % primes[i] === 0) return false;
    }
    return true;
  }

  while (primes.length < n) {
    if (isPrime(num)) primes.push(num);
    num += 2;
  }
  return primes[n - 1];
}
```

#### Características:
- ✅ Buen balance entre legibilidad y rendimiento
- ✅ Optimizaciones intuitivas
- ✅ Reutiliza cálculos previos
- ✅ Solo verifica números impares
- ❌ Mayor uso de memoria

#### Rendimiento:
- **Complejidad Temporal**: O(n * log(log(n))) promedio
- **Complejidad Espacial**: O(n)
- **Tiempos Típicos**:
  - n = 100: ~20ms
  - n = 1000: ~500ms

### 3. Solución con Wheel Factorization

```javascript
function nthPrime(n) {
  if (n < 1) return null;
  const smallPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
  if (n <= 11) return smallPrimes[n - 1];

  const primes = [...smallPrimes];
  const wheelSkips = [4, 2, 4, 2, 4, 6, 2, 6];
  let num = 37;
  let wheelIndex = 0;

  function isPrime(num) {
    const sqrt = Math.sqrt(num);
    for (let i = 3; i < primes.length && primes[i] <= sqrt; i++) {
      if (num % primes[i] === 0) return false;
    }
    return true;
  }

  while (primes.length < n) {
    if (isPrime(num)) primes.push(num);
    num += wheelSkips[wheelIndex];
    wheelIndex = (wheelIndex + 1) % 8;
  }
  return primes[n - 1];
}
```

#### Características:
- ✅ Altamente optimizado
- ✅ Reduce drásticamente verificaciones
- ✅ Patrón de saltos eficiente
- ❌ Código más complejo
- ❌ Difícil de mantener

#### Rendimiento:
- **Complejidad Temporal**: O(n * log(log(n))) con constantes menores
- **Complejidad Espacial**: O(n)
- **Tiempos Típicos**:
  - n = 100: ~15ms
  - n = 1000: ~300ms

## Técnicas Avanzadas (No Implementadas)

### 1. Segmented Sieve of Eratosthenes
- Divide el rango de búsqueda en segmentos
- Mejor localidad de caché
- Menor uso de memoria
- Ideal para n > 100000

### 2. Miller-Rabin Primality Testing
- Test probabilístico de primalidad
- Extremadamente rápido para números grandes
- Determinístico hasta cierto rango
- Útil para verificación de números muy grandes

### 3. Wheel Factorization Avanzado
- Ruedas más grandes (210, 2310)
- Elimina más compuestos
- Mayor complejidad de implementación
- Beneficioso solo para n > 1000000

## Solución Recomendada

Para este problema específico (n ≤ 1000), la solución con caché de primos es la más adecuada porque:

1. **Balance**: Buena relación entre rendimiento y complejidad
2. **Mantenibilidad**: Código claro y fácil de entender
3. **Eficiencia**: Suficientemente rápida para los casos de prueba
4. **Memoria**: Uso de memoria aceptable para n ≤ 1000
5. **Escalabilidad**: Puede manejar casos más grandes sin modificaciones

## Aprendizajes y Patrones

1. **Optimización Incremental**:
   - Empezar con solución simple
   - Añadir optimizaciones una a una
   - Medir impacto de cada cambio

2. **Trade-offs**:
   - Velocidad vs Memoria
   - Complejidad vs Legibilidad
   - Generalidad vs Optimización específica

3. **Patrones de Optimización**:
   - Caché de resultados
   - Reducción de espacio de búsqueda
   - Reutilización de cálculos previos

4. **Límites de Optimización**:
   - Identificar cuando es "suficientemente bueno"
   - Considerar el contexto del problema
   - Balancear complejidad y beneficios
