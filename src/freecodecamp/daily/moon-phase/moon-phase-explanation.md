# Explicación

## Análisis del problema

El problema requiere determinar la fase lunar para una fecha dada, usando un ciclo lunar simplificado de 28 días dividido en cuatro fases iguales. La fecha de referencia es "2000-01-06" (día 1 del ciclo, luna nueva). No se darán fechas anteriores a esta referencia.

El ciclo se divide así:

- "New": días 1-7
- "Waxing": días 8-14
- "Full": días 15-21
- "Waning": días 22-28

Después del día 28, el ciclo se repite (día 29 = día 1, etc.).

Para resolverlo, necesitamos:

1. Calcular los días transcurridos desde la fecha de referencia hasta la fecha dada.
2. Determinar el día del ciclo actual (usando módulo 28).
3. Mapear ese día a la fase correspondiente.

El cálculo de días requiere manejar fechas correctamente, considerando años bisiestos y diferencias en meses/días.

## Enfoque y algoritmo

El algoritmo sigue estos pasos:

1. **Parsear las fechas**: Convertir las strings "YYYY-MM-DD" a objetos Date de JavaScript.
2. **Calcular diferencia en días**: Restar la fecha de referencia de la fecha dada para obtener los días transcurridos.
3. **Determinar día del ciclo**: Usar módulo 28 para encontrar el día actual en el ciclo (1-28).
4. **Mapear a fase**: Usar rangos para determinar la fase:
   - Si día <= 7: "New"
   - Si día <= 14: "Waxing"
   - Si día <= 21: "Full"
   - Si día <= 28: "Waning"

Para el cálculo de días, podemos usar la diferencia en milisegundos entre las fechas y convertir a días. Es importante manejar correctamente los años bisiestos y las zonas horarias (usar UTC para evitar problemas).

Este enfoque es directo y eficiente, ya que el cálculo de fechas es O(1) en JavaScript moderno.

## Complejidad

## Casos límite y ejemplos

## Aprendizajes y patrones
