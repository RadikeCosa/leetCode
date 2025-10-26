# Duration Formatter

## Enunciado del problema

Dado un número entero de segundos, devolver una cadena que represente la misma duración en el formato "H:MM:SS", donde "H" es el número de horas, "MM" es el número de minutos y "SS" es el número de segundos. Devolver el tiempo siguiendo las siguientes reglas:

- **Segundos**: Siempre deben ser dos dígitos.
- **Minutos**: Deben omitir los ceros a la izquierda cuando no sean necesarios. Usar "0" si la duración es menor a un minuto.
- **Horas**: Deben incluirse solo si son mayores a cero.

**Ejemplos:**

- `format(500)` debe devolver `"8:20"`
- `format(4000)` debe devolver `"1:06:40"`
- `format(1)` debe devolver `"0:01"`
- `format(5555)` debe devolver `"1:32:35"`
- `format(99999)` debe devolver `"27:46:39"`

## Solución

La solución utiliza operaciones matemáticas básicas para convertir segundos totales al formato requerido:

1. **Calcular horas**: `Math.floor(totalSeconds / 3600)`
2. **Calcular minutos restantes**: `Math.floor((totalSeconds % 3600) / 60)`
3. **Calcular segundos restantes**: `totalSeconds % 60`
4. **Formatear la salida** siguiendo las reglas específicas:
   - Segundos siempre con 2 dígitos: `.padStart(2, '0')`
   - Minutos sin ceros a la izquierda (excepto cuando es 0)
   - Horas solo si son > 0

**Implementación paso a paso:**

```javascript
function format(seconds) {
  // Calcular horas, minutos y segundos
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Formatear segundos con 2 dígitos
  const formattedSeconds = secs.toString().padStart(2, "0");

  // Construir resultado según reglas
  if (hours > 0) {
    return `${hours}:${minutes
      .toString()
      .padStart(2, "0")}:${formattedSeconds}`;
  } else {
    return `${minutes}:${formattedSeconds}`;
  }
}
```

**Casos especiales manejados:**

- Segundos < 60: Solo minutos y segundos (ej: "0:01")
- Segundos < 3600: Solo minutos y segundos (ej: "8:20")
- Segundos ≥ 3600: Horas, minutos y segundos (ej: "1:06:40")

## Enfoques alternativos

1. **Uso de objetos Date (menos eficiente):**

   ```javascript
   function formatWithDate(seconds) {
     const date = new Date(seconds * 1000);
     const h = date.getUTCHours();
     const m = date.getUTCMinutes();
     const s = date.getUTCSeconds();
     // Formatear según reglas...
   }
   ```

   - Ventaja: Manejo automático de conversiones
   - Desventaja: Overhead innecesario para cálculos simples

2. **Conversión a string y manipulación:**

   ```javascript
   function formatWithStrings(seconds) {
     const totalMinutes = Math.floor(seconds / 60);
     const remainingSeconds = seconds % 60;
     const hours = Math.floor(totalMinutes / 60);
     const minutes = totalMinutes % 60;
     // Formatear strings...
   }
   ```

   - Más verboso pero conceptualmente claro
   - Mayor riesgo de errores en formateo

3. **Función auxiliar para padding:**

   ```javascript
   const pad = (num) => num.toString().padStart(2, "0");
   // Usar pad() consistentemente
   ```

   - Mejora legibilidad y reusabilidad

## Complejidad

- **Tiempo:** O(1) - Operaciones aritméticas constantes
- **Espacio:** O(1) - Variables fijas, sin estructuras adicionales
- **Eficiencia:** Excelente para cualquier tamaño de input

## Aprendizajes

- **Cálculos modulares:** Uso efectivo de división y módulo para descomponer tiempo
- **Formateo condicional:** Lógica clara para diferentes formatos según presencia de horas
- **Padding de strings:** Técnica `.padStart()` para formato consistente
- **Reglas de negocio:** Importancia de seguir especificaciones exactas (ceros en segundos, etc.)
- **Testing exhaustivo:** Verificación de edge cases (con/sin horas, valores límite)
