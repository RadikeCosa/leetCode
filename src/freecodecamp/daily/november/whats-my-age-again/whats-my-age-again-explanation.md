---
name: whats-my-age-again
source: freecodecamp
series: daily
category: freecodecamp
difficulty: easy
topics: []
createdAt: 2025-11-27
---

# What's My Age Again? - Análisis y Explicación

## Enunciado del Problema

Dada una fecha de nacimiento en formato `YYYY-MM-DD`, devolver la edad exacta de la persona **al día 27 de noviembre de 2025**, como un número entero.

**Restricciones:**

- Todas las fechas de nacimiento son válidas y anteriores al 27 de noviembre de 2025.
- Se debe tener en cuenta si la persona ya cumplió años en 2025 o no.

## Análisis Inicial

### Comprensión del Problema

Necesitamos calcular cuántos años completos han pasado desde la fecha de nacimiento hasta el **27 de noviembre de 2025**.  
No basta con restar los años: hay que verificar si el cumpleaños de 2025 ya ocurrió o aún está por ocurrir.

Ejemplo:

- Nacido el `1990-11-26` → el 27 de noviembre de 2025 ya cumplió 35 años → edad = 35
- Nacido el `1990-11-28` → su cumpleaños 2025 es el 28 de noviembre → aún no cumplió → edad = 34

## Casos de Prueba Identificados

| Fecha de nacimiento | Edad esperada (27-nov-2025) | Razón                                |
| ------------------- | --------------------------- | ------------------------------------ |
| 2000-01-01          | 25                          | Cumpleaños pasó hace meses           |
| 2000-11-27          | 25                          | Cumple exactamente hoy               |
| 2000-11-28          | 24                          | Cumple mañana                        |
| 1995-12-31          | 29                          | Cumple en diciembre → no cumplió aún |
| 2025-01-01          | 0                           | Tiene menos de 1 año                 |
| 1950-06-15          | 75                          | Caso normal, ya cumplió              |

## Desarrollo de la Solución

### Enfoque Elegido

El algoritmo más simple, robusto y ampliamente usado:

1. Extraer año, mes y día de la fecha de nacimiento.
2. Calcular edad tentativa: `2025 - birthYear`
3. Restar 1 si el cumpleaños de 2025 **aún no ha ocurrido**, es decir:
   - Si el mes de nacimiento es posterior a noviembre (`birthMonth > 11`), o
   - Si el mes es noviembre pero el día es posterior al 27 (`birthMonth === 11 && birthDay > 27`)

Este método evita completamente problemas de zonas horarias, DST o precisión de milisegundos.

### Implementación Paso a Paso

1. Recibir string `birthday` en formato `"YYYY-MM-DD"`
2. Dividirlo: `const [year, month, day] = birthday.split('-').map(Number)`
3. Calcular edad base: `let age = 2025 - year`
4. Verificar si ya cumplió en 2025:

   ```js
   const hasHadBirthdayThisYear = month < 11 || (month === 11 && day <= 27);
   ```

   o equivalently:

```js
const birthdayThisYearPending = month > 11 || (month === 11 && day > 27);
```

5. Si el cumpleaños aún no pasó → `age--`
6. Retornar `age`

```js
function getAge(birthday) {
  const [y, m, d] = birthday.split("-").map(Number);
  const today = new Date();
  const age = today.getFullYear() - y;
  const hadBirthday =
    today.getMonth() + 1 > m ||
    (today.getMonth() + 1 === m && today.getDate() >= d);
  return hadBirthday ? age : age - 1;
}
```

## Análisis de Complejidad

### Complejidad Temporal

**O(1)** – Solo operaciones aritméticas y comparaciones simples. No depende del tamaño de entrada.

### Complejidad Espacial

**O(1)** – Solo unas pocas variables primitivas.

## Casos Edge y Consideraciones

| Caso                                    | Manejado correctamente? | Nota                                                                                    |
| --------------------------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| Cumpleaños el 27 de noviembre           | Yes                     | Se considera que ya cumplió                                                             |
| Cumpleaños el 28 de noviembre           | Yes                     | Aún no cumplió                                                                          |
| Nacidos el 29 de febrero (año bisiesto) | Yes                     | Como la fecha es válida y anterior a 2025-11-27, no hay conflicto en 2025 (no bisiesto) |
| Fecha justo antes: 2025-11-26           | Yes                     | Edad correcta                                                                           |
| Bebés nacidos en 2025                   | Yes                     | Edad 0                                                                                  |

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Cálculo de edad basado en componentes de fecha (año/mes/día) en vez de timestamps
- Evitar el uso directo de `new Date()` en cálculos de edad (problemas comunes con UTC/DST)

## Recursos y Referencias

- [How do you calculate age in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/10008050/get-age-from-birthdate)
- [date-fns - differenceInYears](https://date-fns.org/v2.30.0/docs/differenceInYears)
- [The Date Problem - Why subtracting years is wrong](https://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time)
