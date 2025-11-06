# Weekday Finder

## Problem Statement

Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

- "Sunday"
- "Monday"
- "Tuesday"
- "Wednesday"
- "Thursday"
- "Friday"
- "Saturday"

Be sure to ignore time zones.

## Examples

1. `getWeekday("2025-11-06")` should return `Thursday`.
2. `getWeekday("1999-12-31")` should return `Friday`.
3. `getWeekday("1111-11-11")` should return `Saturday`.
4. `getWeekday("2112-12-21")` should return `Wednesday`.
5. `getWeekday("2345-10-01")` should return `Monday`.

## Constraints

- The input string will always be in the format YYYY-MM-DD.
- The year will be a valid integer.
- The function should not consider time zones.

## Solución

La solución utiliza el objeto `Date` nativo de JavaScript para parsear la cadena de entrada y determinar el día de la semana. El método `toLocaleDateString` se usa con la opción `weekday` para obtener el nombre completo del día en inglés.

### Código

```javascript
function getWeekday(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", { weekday: "long" });
}
```

### Explicación

1. **Manejo de Zonas Horarias**: Al agregar `"T00:00:00"` a la cadena de fecha, creamos una fecha-hora local en lugar de UTC, evitando problemas de conversión de zona horaria que podrían cambiar el día.
2. **Parseo de la Fecha**: El constructor `Date` crea un objeto `Date` a partir de la cadena de entrada mejorada.
3. **Formateo del Día**: El método `toLocaleDateString` con la opción `{ weekday: "long" }` retorna el nombre completo del día en inglés.
4. **Implementación Limpia**: Este enfoque evita la necesidad de un array manual de días mientras asegura resultados consistentes en diferentes zonas horarias.

### Complejidad

- **Complejidad Temporal**: O(1), ya que las operaciones realizadas son de tiempo constante.
- **Complejidad Espacial**: O(1), ya que no se utilizan estructuras de datos adicionales.
