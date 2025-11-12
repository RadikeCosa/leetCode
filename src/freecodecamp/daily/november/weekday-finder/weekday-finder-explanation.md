# Weekday Finder

## Descripción del Problema

Dado un string de fecha en el formato YYYY-MM-DD, retorna el día de la semana.

Los días válidos que se pueden retornar son:

- "Sunday"
- "Monday"
- "Tuesday"
- "Wednesday"
- "Thursday"
- "Friday"
- "Saturday"

Asegúrate de ignorar las zonas horarias.

## Ejemplos

1. `getWeekday("2025-11-06")` debería retornar `Thursday`.
2. `getWeekday("1999-12-31")` debería retornar `Friday`.
3. `getWeekday("1111-11-11")` debería retornar `Saturday`.
4. `getWeekday("2112-12-21")` debería retornar `Wednesday`.
5. `getWeekday("2345-10-01")` debería retornar `Monday`.

## Restricciones

- El string de entrada siempre estará en el formato YYYY-MM-DD.
- El año será un entero válido.
- La función no debe considerar zonas horarias.

## Solución

La solución utiliza el objeto `Date` nativo de JavaScript para parsear el string de entrada y determinar el día de la semana. El método `toLocaleDateString` se usa con la opción `weekday` para obtener el nombre completo del día en inglés.

### Código

```javascript
function getWeekday(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", { weekday: "long" });
}
```

### Explicación

1. **Manejo de Zonas Horarias**: Al agregar `"T00:00:00"` al string de fecha, creamos una fecha-hora local en lugar de UTC, evitando problemas de conversión de zona horaria que podrían cambiar el día.
2. **Parseo de la Fecha**: El constructor `Date` crea un objeto `Date` a partir del string de entrada mejorado.
3. **Formateo del Día**: El método `toLocaleDateString` con la opción `{ weekday: "long" }` retorna el nombre completo del día en inglés.
4. **Implementación Limpia**: Este enfoque evita la necesidad de un array manual de días mientras asegura resultados consistentes en diferentes zonas horarias.

### Complejidad

- **Complejidad Temporal**: O(1), ya que las operaciones realizadas son de tiempo constante.
- **Complejidad Espacial**: O(1), ya que no se utilizan estructuras de datos adicionales.

### Primera Solución Propuesta

Inicialmente, la solución utilizaba el método `toLocaleDateString` directamente sobre un objeto `Date` creado a partir del string de entrada. El código era el siguiente:

```javascript
function getWeekday(dateString) {
  let date = new Date(dateString);
  const options = { weekday: "long" };
  return date.toLocaleDateString("en-US", options);
}
```

#### Problema

Esta implementación fallaba en algunos casos debido a cómo JavaScript maneja las zonas horarias. Cuando se crea un objeto `Date` con un string en el formato `YYYY-MM-DD`, JavaScript lo interpreta como UTC a medianoche. Sin embargo, el método `toLocaleDateString` convierte esta fecha a la zona horaria local, lo que puede cambiar el día dependiendo de la ubicación del sistema.

Por ejemplo, para el string `"2025-11-06"`, en ciertas zonas horarias el día retornado era incorrectamente `Wednesday` en lugar de `Thursday`.

### Solución Mejorada

Para resolver este problema, se agregó explícitamente la hora `"T00:00:00"` al string de entrada. Esto asegura que la fecha se interprete correctamente como una fecha local, evitando problemas de conversión de zona horaria.
