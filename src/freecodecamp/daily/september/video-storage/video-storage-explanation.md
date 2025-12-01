---
title: "video-storage"
difficulty: "easy"
topics:
  - Math
  - String
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Video Storage

## Enunciado del problema

Dado el tamaño de un video, una unidad para el tamaño del video, la capacidad de un disco duro, y una unidad para el disco duro, devolver el número de videos que el disco duro puede almacenar siguiendo las siguientes restricciones:

- La unidad para el tamaño del video puede ser bytes ("B"), kilobytes ("KB"), megabytes ("MB"), o gigabytes ("GB").
- Si no se proporciona una de las unidades de video anteriores, devolver "Invalid video unit".
- La unidad de la capacidad del disco duro puede ser gigabytes ("GB") o terabytes ("TB").
- Si no se proporciona una de las unidades de disco anteriores, devolver "Invalid drive unit".
- Devolver el número de videos enteros que el disco puede almacenar.
- Usar las siguientes conversiones:
  - 1 B = 1 B
  - 1 KB = 1000 B
  - 1 MB = 1000 KB
  - 1 GB = 1000 MB
  - 1 TB = 1000 GB

Por ejemplo, dados 500, "MB", 100, y "GB" como argumentos, determinar cuántos videos de 500 MB pueden caber en un disco duro de 100 GB.

**Ejemplos:**

- `numberOfVideos(500, "MB", 100, "GB")` debe devolver `200`
- `numberOfVideos(1, "TB", 10, "TB")` debe devolver `"Invalid video unit"`
- `numberOfVideos(2000, "MB", 100000, "MB")` debe devolver `"Invalid drive unit"`
- `numberOfVideos(500000, "KB", 2, "TB")` debe devolver `4000`
- `numberOfVideos(1.5, "GB", 2.2, "TB")` debe devolver `1466`

## Solución

La solución utiliza un enfoque directo con validación de unidades y conversión a una unidad común (bytes) para realizar los cálculos.

**Pasos de la implementación:**

1. **Validación de unidades:**

   - Verificar que `videoUnit` esté en `["B", "KB", "MB", "GB"]`
   - Verificar que `driveUnit` esté en `["GB", "TB"]`
   - Retornar mensajes de error específicos si no son válidas

2. **Conversión a bytes:**

   - Usar un objeto `unitToBytes` con los factores de conversión
   - Multiplicar el tamaño por el factor correspondiente
   - Esto permite comparar unidades diferentes en una base común

3. **Cálculo final:**
   - Dividir bytes del disco entre bytes del video
   - Usar `Math.floor()` para obtener solo videos enteros

**Código implementado:**

```javascript
function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  // Validación de unidades
  const validVideoUnits = ["B", "KB", "MB", "GB"];
  const validDriveUnits = ["GB", "TB"];

  if (!validVideoUnits.includes(videoUnit)) {
    return "Invalid video unit";
  }

  if (!validDriveUnits.includes(driveUnit)) {
    return "Invalid drive unit";
  }

  // Conversión a bytes
  const unitToBytes = {
    B: 1,
    KB: 1000,
    MB: 1000000,
    GB: 1000000000,
    TB: 1000000000000,
  };

  const videoBytes = videoSize * unitToBytes[videoUnit];
  const driveBytes = driveSize * unitToBytes[driveUnit];

  // Cálculo de videos enteros
  return Math.floor(driveBytes / videoBytes);
}
```

**Casos especiales manejados:**

- Unidades inválidas: Retorno de strings de error específicas
- Números decimales: Manejo correcto con multiplicación
- Videos que no caben completamente: `Math.floor()` garantiza solo enteros

## Enfoques alternativos

1. **Conversión sin objeto auxiliar:**

   ```javascript
   // Usar condicionales en lugar de lookup table
   let videoMultiplier = 1;
   switch (videoUnit) {
     case "KB":
       videoMultiplier = 1000;
       break;
     case "MB":
       videoMultiplier = 1000000;
       break;
     case "GB":
       videoMultiplier = 1000000000;
       break;
   }
   ```

   - Más verboso pero sin objetos
   - Mayor riesgo de errores tipográficos

2. **Validación con Set en lugar de Array:**

   ```javascript
   const validVideoUnits = new Set(["B", "KB", "MB", "GB"]);
   if (!validVideoUnits.has(videoUnit)) {
     return "Invalid video unit";
   }
   ```

   - Búsqueda O(1) vs O(n) del array
   - Más eficiente para muchas validaciones

3. **Función de conversión separada:**

   ```javascript
   function convertToBytes(size, unit) {
     const factors = {
       B: 1,
       KB: 1000,
       MB: 1000000,
       GB: 1000000000,
       TB: 1000000000000,
     };
     return size * factors[unit];
   }
   ```

   - Mejor separación de responsabilidades
   - Reutilizable para otras conversiones

## Complejidad

- **Tiempo:** O(1) - Operaciones aritméticas constantes y lookups en objeto
- **Espacio:** O(1) - Estructuras de datos fijas (arrays y objeto pequeño)
- **Eficiencia:** Excelente para cualquier tamaño de input

## Aprendizajes

- **Validación defensiva:** Importancia de validar inputs antes de procesar
- **Unidad común:** Técnica de convertir a una unidad base para simplificar cálculos
- **Objetos como lookup tables:** Eficiente para conversiones de unidades
- **Math.floor() para enteros:** Garantizar resultados enteros en divisiones
- **Separación de responsabilidades:** Validación separada de lógica de cálculo
- **Manejo de errores específico:** Mensajes claros para diferentes tipos de error