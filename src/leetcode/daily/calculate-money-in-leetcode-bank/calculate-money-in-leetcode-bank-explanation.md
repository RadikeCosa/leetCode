---
title: "Calculate Money in LeetCode Bank"
difficulty: "easy"
topics:
  - Math
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

## Calculate Money in LeetCode Bank

## Enunciado del problema

Hercy quiere ahorrar dinero durante los primeros n días. Cada semana sigue un patrón: el lunes ahorra 1 dólar, martes 2, miércoles 3, jueves 4, viernes 5, sábado 6, domingo 7. La semana siguiente, el lunes ahorra 2 dólares, martes 3, etc. Calcula cuánto dinero ha ahorrado después de n días.

**Ejemplos:**

- n = 4: 1 + 2 + 3 + 4 = 10
- n = 10: 1+2+3+4+5+6+7 + 2+3 = 37
- n = 20: suma completa de 2 semanas + 6 días de la tercera semana = 96

**Restricciones:**

- 1 <= n <= 1000

## Solución

Utilizamos un enfoque de patrón/precomputación para calcular eficientemente la suma total.

**Pasos:**

1. Calcular semanas completas: `completeWeeks = Math.floor(n / 7)`
2. Calcular días restantes: `remainingDays = n % 7`
3. Suma de semanas completas usando fórmula de serie aritmética
4. Suma de días restantes con un loop simple

**Fórmula para semanas completas:**

- Primera semana: 1+2+3+4+5+6+7 = 28
- Segunda semana: 2+3+4+5+6+7+8 = 35
- Tercera semana: 3+4+5+6+7+8+9 = 42
- Patrón: suma = 7 \* (semana + 1) / 2 + 21

## Enfoques alternativos

1. **Loop simple:** Iterar día por día calculando el ahorro. O(n) tiempo, más simple pero menos eficiente.
2. **Fórmula cerrada completa:** Derivar una fórmula matemática para n días directamente, pero más compleja.

## Complejidad

- **Tiempo:** O(1) - operaciones constantes
- **Espacio:** O(1) - variables fijas

## Aprendizajes

- Reconocimiento de patrones en problemas matemáticos
- Uso de series aritméticas para optimización
- Importancia de fórmulas cerradas para eficiencia
- Debugging de precisión decimal en cálculos enteros