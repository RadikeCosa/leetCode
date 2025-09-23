# Compare Version Numbers - Explicación Detallada

## Problema

**LeetCode 165: Compare Version Numbers**  
**Dificultad:** Medium  
**Temas:** Two Pointers, String

## Enunciado

Dados dos strings de versión, `version1` y `version2`, compáralos. Un string de versión consiste en revisiones separadas por puntos '.'. El valor de la revisión es su conversión a entero ignorando los ceros a la izquierda.

Para comparar strings de versión, compara sus valores de revisión en orden de izquierda a derecha. Si uno de los strings de versión tiene menos revisiones, trata los valores de revisión faltantes como 0.

## Análisis del Problema

### Casos de Ejemplo

1. `version1 = "1.2"`, `version2 = "1.10"` → `-1`
   - Primera revisión: 1 === 1 ✅ continuar
   - Segunda revisión: 2 < 10 ✅ retornar -1

2. `version1 = "1.01"`, `version2 = "1.001"` → `0`  
   - Primera revisión: 1 === 1 ✅ continuar
   - Segunda revisión: parseInt("01") === parseInt("001") → 1 === 1 ✅ retornar 0

3. `version1 = "1.0"`, `version2 = "1.0.0.0"` → `0`
   - Primera revisión: 1 === 1 ✅ continuar  
   - Segunda revisión: 0 === 0 ✅ continuar
   - Tercera revisión: 0 (faltante) === 0 ✅ continuar
   - Cuarta revisión: 0 (faltante) === 0 ✅ retornar 0

### Observaciones Clave

- Los ceros a la izquierda deben ser ignorados al convertir a entero
- Las revisiones faltantes se tratan como 0
- La comparación es lexicográfica por revisiones, no por string completo

## Estrategias de Solución

### Enfoque 1: Split y Comparación (O(n+m) espacio)

**Proceso paso a paso:**

1. **Dividir ambos strings:** `split('.')` convierte strings en arrays
2. **Determinar longitud máxima:** `Math.max()` para saber hasta dónde iterar
3. **Comparar posición por posición:** usar `|| "0"` para manejar posiciones faltantes
4. **Convertir y comparar:** `parseInt()` maneja ceros a la izquierda automáticamente

```typescript
export function compareVersionSplit(version1: string, version2: string): number {
  const parts1 = version1.split('.'); // ["1", "2"]
  const parts2 = version2.split('.'); // ["1", "10"]
  
  const maxLength = Math.max(parts1.length, parts2.length);
  
  for (let i = 0; i < maxLength; i++) {
    const num1 = parseInt(parts1[i] || "0"); // Si no existe, usar "0"
    const num2 = parseInt(parts2[i] || "0");
    
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
    // Si son iguales, continuar al siguiente
  }
  
  return 0; // Todas las revisiones son iguales
}
```

**Complejidad:**
- Tiempo: O(n + m) - recorrer ambos strings una vez
- Espacio: O(n + m) - almacenar arrays del split

### Enfoque 2: Two Pointers (O(1) espacio)

**Proceso paso a paso:**

1. **Inicializar punteros:** `p1` para version1, `p2` para version2
2. **Loop mientras queden caracteres:** `while (p1 < version1.length || p2 < version2.length)`
3. **Extraer números incrementalmente:** construir dígito por dígito sin arrays
4. **Comparar directamente:** sin almacenamiento intermedio

```typescript
export function compareVersion(version1: string, version2: string): number {
  let p1 = 0; // Puntero para version1
  let p2 = 0; // Puntero para version2

  while (p1 < version1.length || p2 < version2.length) {
    // Extraer próximo número de version1
    let num1 = 0;
    while (p1 < version1.length && version1[p1] !== '.') {
      num1 = num1 * 10 + parseInt(version1[p1]); // Construir número dígito a dígito
      p1++;
    }
    p1++; // Saltar el punto '.'

    // Extraer próximo número de version2  
    let num2 = 0;
    while (p2 < version2.length && version2[p2] !== '.') {
      num2 = num2 * 10 + parseInt(version2[p2]); // Construir número dígito a dígito
      p2++;
    }
    p2++; // Saltar el punto '.'

    // Comparar números extraídos
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0; // Todas las revisiones son iguales
}
```

**Complejidad:**
- Tiempo: O(n + m) - cada carácter se procesa exactamente una vez
- Espacio: O(1) - solo variables auxiliares

### Construcción de Números Dígito a Dígito

Ejemplo con "123":
```typescript
num = 0
// Procesar '1': num = 0 * 10 + 1 = 1
// Procesar '2': num = 1 * 10 + 2 = 12  
// Procesar '3': num = 12 * 10 + 3 = 123
```

## Casos Edge Implementados

1. **Ceros a la izquierda múltiples:** `"1.000"` vs `"1.0"` → `0`
2. **Longitudes muy diferentes:** `"1"` vs `"1.0.0.0.0"` → `0`
3. **Comparaciones complejas:** `"1.1"` vs `"1.0.0.0.0"` → `1`

## Micro-optimizaciones Avanzadas

### Evitar parseInt() con charCodeAt()

```typescript
// En lugar de: parseInt(version1[p1])
// Usar: version1[p1].charCodeAt(0) - 48

num1 = num1 * 10 + (version1[p1].charCodeAt(0) - 48);
```

**Explicación:**
- `charCodeAt(0)` obtiene el código ASCII del primer carácter
- Los dígitos '0'-'9' tienen códigos ASCII 48-57
- Restar 48 convierte código ASCII a valor numérico
- Es más rápido que `parseInt()` para un solo carácter

### Manejo Elegante de Puntos

```typescript
// En lugar de: p1++ (siempre incrementar)
// Usar: if (p1 < version1.length) p1++ (solo si no estamos al final)

if (p1 < version1.length) p1++; // Evita incrementar fuera de límites
if (p2 < version2.length) p2++;
```

**Explicación:**
- Previene incrementar punteros más allá del final del string
- Más seguro aunque no afecte funcionalidad en este caso específico

### Optimización de Comparación con Operador Ternario

```typescript
// En lugar de múltiples if-else
// Usar: return num1 > num2 ? 1 : num1 < num2 ? -1 : continuar

const result = num1 > num2 ? 1 : num1 < num2 ? -1 : 0;
if (result !== 0) return result;
```

## Comparación de Enfoques

| Aspecto | Split | Two Pointers |
|---------|-------|--------------|
| **Legibilidad** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Tiempo** | O(n + m) | O(n + m) |
| **Espacio** | O(n + m) | **O(1)** ✅ |
| **Facilidad debug** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Memoria óptima** | ❌ | ✅ |

## Lecciones Aprendidas

1. **TDD fue clave:** Tests primero nos dieron confianza para refactorizar
2. **Dos enfoques válidos:** Split más legible, Two Pointers más eficiente en memoria
3. **Manejo de casos edge:** Ceros a la izquierda y longitudes diferentes son críticos
4. **parseInt() vs charCodeAt():** Micro-optimizaciones útiles para casos masivos
5. **Variables descriptivas:** `p1`, `p2` más claro que `i`, `j`