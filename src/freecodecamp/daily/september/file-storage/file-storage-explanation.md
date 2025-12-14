---
title: File Storage
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-14
difficulty: easy
topics:
  - math
  - simulation
blogLink: https://blog-astro-rouge.vercel.app/posts/file-storage/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-20/
---

## File Storage - Análisis y Explicación

## Enunciado del Problema

Dado el tamaño de un archivo y la capacidad de un disco duro en gigabytes (GB) devolve el numero de archivos que el disco duro puede guardar siguiendo las siguientes restricciones:

- la unidad de tamaño del archivo puede ser "B" (bytes), "KB" (kilobytes) o "MB" (megabytes).
- devolve el numero total de arhivos que pueden ser almacenados en el disco duro.
- usa las siguientes conversiones

  Unidad / Equivalencia
  1 B = 1 B
  1KB = 1000 B
  1MB = 1000 KB
  1GB = 1000 MB

Por ejemplo, dados 500, "KB" y 1 como argumentos, determina cuantos archivos de 500 KB pueden caber en un disco duro de 1 GB.

## Análisis Inicial

### Comprensión del Problema

El problema pide una funcion que debe calcular cuantos archivos de un tamaño dado (en b, kb o mb) pueden ser almacenados en un disco duro de una capacidad dada en gb. Es necesario convertir todas las unidades a una unidad comun (bytes) usando las equivalencias proporcionadas y luego realizar la division para obtener el numero de archivos que caben en el disco duro.

### Identificación de Entradas y Salidas

- Entradas:
  - fileSize: numero que representa el tamaño del archivo.
  - fileUnit: string que representa la unidad del tamaño del archivo ("B", "KB", "MB").
  - driveSizeGb: numero que representa la capacidad del disco duro en gigabytes (GB).
- Salida:
  - Un numero entero que representa la cantidad de archivos que pueden ser almacenados en el disco

### Casos de Prueba Identificados

| Tamaño del Archivo | Unidad del Archivo | Tamaño del Disco Duro (GB) | Resultado Esperado |
| ------------------ | ------------------ | -------------------------- | ------------------ |
| 500                | "KB"               | 1                          | 2000               |
| 50000              | "B"                | 1                          | 20000              |
| 5                  | "MB"               | 1                          | 200                |
| 4096               | "B"                | 1.5                        | 366210             |
| 220.5              | "KB"               | 100                        | 453514             |
| 4.5                | "MB"               | 750                        | 166666             |

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque que elegi para la solucion es convertir tanto el tamaño del archivo como la capacidad del disco duro a bytes. Luego, divido la capacidad total del disco duro en bytes por el tamaño del archivo en bytes para obtener el numero de archivos que pueden ser almacenados.

### Implementación Paso a Paso

1. Definir una funcion `numberOfFiles` que tome tres parametros: `fileSize`, `fileUnit`, y `driveSizeGb`.
2. Crear un objeto `unitToBytes` que mapee las unidades "B", "KB", y "MB" a sus equivalentes en bytes.
3. Convertir el tamaño del archivo a bytes multiplicando `fileSize` por el valor correspondiente en `unitToBytes`.
4. Convertir la capacidad del disco duro a bytes multiplicando `driveSizeGb` por 1,000,000,000 (bytes en un GB).
5. Calcular el numero de archivos dividiendo la capacidad del disco duro en bytes por el tamaño del archivo en bytes.
6. Devolver el resultado como un numero entero usando `Math.floor` para redondear hacia abajo.

### Código Final

```javascript
function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  const unitToBytes = {
    B: 1,
    KB: 1_000,
    MB: 1_000_000,
    GB: 1_000_000_000,
  };
  const fileSizeInBytes = fileSize * unitToBytes[fileUnit];
  const driveSizeInBytes = driveSizeGb * unitToBytes.GB;
  return Math.floor(driveSizeInBytes / fileSizeInBytes);
}
```

## Análisis de Complejidad

### Complejidad Temporal

La función realiza una cantidad constante de operaciones, independientemente del tamaño de los datos de entrada. Todas las conversiones y la división son operaciones de tiempo constante.  
**Complejidad temporal:** $O(1)$

### Complejidad Espacial

No se utilizan estructuras de datos adicionales que crezcan con la entrada, solo variables simples y un objeto de tamaño fijo para las conversiones.  
**Complejidad espacial:** $O(1)$

## Casos Edge y Consideraciones

- Si el tamaño del archivo es 0, la función retornará Infinity. Se podría agregar una validación para retornar 0 en ese caso.
- Si la unidad del archivo no es válida (no está en el objeto de conversión), la función retornará NaN. Se recomienda validar la unidad antes de hacer la conversión.
- Si la capacidad del disco es 0, el resultado será 0, lo cual es correcto.
- El resultado siempre se redondea hacia abajo, ya que no se pueden almacenar archivos parciales.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Conversión de unidades utilizando un objeto de mapeo.
- División entera para calcular la cantidad máxima de archivos que caben en el disco.
- Validación implícita de entradas a través de la estructura del código.

### Posibles Optimizaciones

- Se puede agregar manejo explícito de errores para entradas inválidas (por ejemplo, unidades no reconocidas o tamaños negativos).
- Si se agregan más unidades (por ejemplo, TB), solo es necesario actualizar el objeto de conversión.
- Se puede internacionalizar el código para soportar diferentes idiomas o formatos de entrada.

## Recursos y Referencias

- [Conversión de unidades de almacenamiento (Wikipedia)](https://es.wikipedia.org/wiki/Byte)
- [Documentación de Math.floor (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
