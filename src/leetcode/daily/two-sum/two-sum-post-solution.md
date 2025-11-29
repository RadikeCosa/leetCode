# Intuition

Al ver este problema, mi primera impresión es que necesito encontrar dos números en un array que sumen un valor específico. El enfoque más obvio sería probar todas las combinaciones posibles (fuerza bruta), pero esto sería ineficiente.

La clave está en darse cuenta de que mientras examino cada número, puedo preguntarme: "¿ya he visto el número que necesito para completar la suma?" Esto me lleva a pensar en usar una estructura de datos que me permita búsquedas rápidas.

# Approach

Uso un **hash map** para resolver este problema de manera eficiente en una sola pasada:

1. **Crear un hash map** para almacenar números ya vistos y sus índices
2. **Para cada elemento del array:**
   - Calcular el "complemento": `complement = target - currentNumber`
   - Verificar si este complemento ya existe en el hash map
   - Si existe: devolver los índices `[complementIndex, currentIndex]`
   - Si no existe: agregar el número actual y su índice al hash map
3. **Continuar** hasta encontrar la solución (garantizada por las restricciones)

**¿Por qué funciona?**

- Si estoy en el índice `i` y el complemento está en el hash map, significa que ya pasé por el número que necesito
- El hash map me da acceso O(1) para verificar si un número existe
- Solo necesito una pasada porque voy "construyendo" mi conjunto de números disponibles

# Complexity

- **Time complexity:** $$O(n)$$

  - Una sola iteración por el array de longitud n
  - Cada operación de hash map (búsqueda e inserción) es O(1) en promedio

- **Space complexity:** $$O(n)$$
  - En el peor caso, almaceno n-1 elementos en el hash map
  - El espacio crece linealmente con el tamaño del input

# Code

```typescript
export function twoSum(nums: number[], target: number): number[] {
  // Map para recordar: valor -> índice
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    // ¿Ya vi el número que necesito?
    if (seen.has(complement)) {
      // ¡Encontré la pareja! Regreso los índices
      return [seen.get(complement)!, i];
    }

    // Guardo el número actual para futuras referencias
    seen.set(currentNum, i);
  }

  return []; // Nunca debería llegar aquí según el problema
}
```
