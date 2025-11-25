import { prefixesDivBy5 } from "./binary-prefix-divisible-by-five";
import { describe, it, expect } from "vitest";
/**
 * TODO: Add complete problem statement here
 ¡Perfecto! Me encanta que trabajes con tests primero, eso es muy buena práctica.

Aquí tienes **10 casos de prueba bien pensados** para este problema, perfectos para desarrollar con confianza (TDD style). Incluyen los ejemplos del enunciado, casos típicos, casos borde y algunos trampa clásicos:

```python
test_cases = [
    # 1. Ejemplo del enunciado 1
    {
        "input": [0, 1, 1],
        "expected": [True, False, False],
        "name": "Ejemplo 1 - empieza con 0"
    },
    
    # 2. Ejemplo del enunciado 2
    {
        "input": [1, 1, 1],
        "expected": [False, False, False],
        "name": "Ejemplo 2 - solo unos"
    },
    
    # 3. Caso borde: un solo elemento 0
    {
        "input": [0],
        "expected": [True],
        "name": "Un solo 0 → divisible por 5"
    },
    
    # 4. Caso borde: un solo elemento 1
    {
        "input": [1],
        "expected": [False],
        "name": "Un solo 1 → no divisible"
    },
    
    # 5. Todo ceros (varios)
    {
        "input": [0, 0, 0, 0, 0],
        "expected": [True, True, True, True, True],
        "name": "Varios ceros → siempre divisible"
    },
    
    # 6. Número que forma 5 en binario: 101
    {
        "input": [1, 0, 1],
        "expected": [False, False, True],
        "name": "101 binario = 5 decimal → solo el último es True"
    },
    
    # 7. Número que forma 10 en binario: 1010
    {
        "input": [1, 0, 1, 0],
        "expected": [False, False, True, True],
        "name": "1010 = 10 → divisible por 5 desde el tercer prefijo"
    },
    
    # 8. Caso largo que genera número muy grande (prueba overflow si no usas módulo)
    {
        "input": [1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1],  # 22 bits
        "expected": [False, False, False, True, True, True, True, False, False, True, False, False, False, False, True, False, True, False, False, False, True, False],
        "name": "Caso largo (22 bits) - fuerza overflow si no usas %5"
    },
    
    # 9. Patrón repetitivo que genera muchos múltiplos de 5
    {
        "input": [1,0,1,0,1,0,1,0,1,0],  # 1010101010 = 5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560 → todos múltiplos de 5 a partir del 3ro
        "expected": [False, False, True, True, True, True, True, True, True, True],
        "name": "Patrón 10 repetido → muchos True seguidos"
    },
    
    # 10. El caso más largo permitido (10^5 elementos) - solo para probar rendimiento, no lo corras siempre
    {
        "input": [0] * 100000,  # 100,000 ceros
        "expected": [True] * 100000,
        "name": "CASO LÍMITE: 10^5 ceros (solo para prueba final de tiempo)"
    },
]
```

 */

describe("Binary Prefix Divisible By Five", () => {
  it("should pas example example 1 test case", () => {
    const nums = [0, 1, 1];
    const expected = [true, false, false];
    expect(prefixesDivBy5(nums)).toEqual(expected);
  });

  it("should pas example example 2 test case", () => {
    const nums = [1, 1, 1];
    const expected = [false, false, false];
    expect(prefixesDivBy5(nums)).toEqual(expected);
  });
  it("should handle single 0", () => {
    const nums = [0];
    const expected = [true];
    expect(prefixesDivBy5(nums)).toEqual(expected);
  });

  it("should handle single 1", () => {
    const nums = [1];
    const expected = [false];
    expect(prefixesDivBy5(nums)).toEqual(expected);
  });

  it("should handle multiple zeros", () => {
    const nums = [0, 0, 0, 0, 0];
    const expected = [true, true, true, true, true];
    expect(prefixesDivBy5(nums)).toEqual(expected);
  });

  it("should handle binary 101", () => {
    const nums = [1, 0, 1];
    const expected = [false, false, true];
    expect(prefixesDivBy5(nums)).toEqual(expected);
  });

  it("should handle binary 1010", () => {
    const nums = [1, 0, 1, 0];
    const expected = [false, false, true, true];
    expect(prefixesDivBy5(nums)).toEqual(expected);
  });
});
