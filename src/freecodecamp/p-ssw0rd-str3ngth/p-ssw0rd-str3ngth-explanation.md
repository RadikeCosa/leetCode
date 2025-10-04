# Explicación (Español) — P@ssw0rd Str3ngth!

## Enunciado

Dado un string que representa una contraseña, devuelve "weak", "medium" o "strong" dependiendo de su fortaleza.

La contraseña se evalúa con las siguientes reglas:

- Tiene al menos 8 caracteres.
- Contiene letras mayúsculas y minúsculas.
- Contiene al menos un número.
- Contiene al menos un carácter especial de este conjunto: `!`, `@`, `#`, `$`, `%`, `^`, `&` o `*`.

Devuelve "weak" si cumple menos de dos de las reglas. Devuelve "medium" si cumple 2 o 3 reglas. Devuelve "strong" si cumple las 4 reglas.

## Análisis

(Puedes completar con observaciones y restricciones específicas)

## Casos de prueba sugeridos

- Ejemplos proporcionados en la plataforma.
- Contraseñas vacías o muy cortas.
- Contraseñas con todos los criterios salvo un tipo de carácter.

## Complejidad

- **Time complexity**: O(n) — escanear la contraseña una vez
- **Space complexity**: O(1) — contadores y flags
