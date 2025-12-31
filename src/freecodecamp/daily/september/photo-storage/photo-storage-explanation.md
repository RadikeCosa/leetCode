---
title: Photo Storage
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-31
difficulty: easy
topics:
  - arrays
  - hash tables
  - data storage
blogLink: https://blog-astro-rouge.vercel.app/posts/photo-storage/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-19/
---

## Photo Storage - Análisis y Explicación

## Enunciado del Problema

Dado el tamaño de una foto en megabytes (MB) y la capacidad de un disco duro en gigabytes (GB), determina cuántas fotos completas se pueden almacenar en el disco usando las siguientes reglas:

- 1 gigabyte (GB) es igual a 1000 megabytes (MB).
- Devuelve el número de fotos enteras que caben en el disco (no fraccionarias).

## Análisis Inicial

### Comprensión del Problema

La función debe convertir la capacidad del disco de GB a MB (multiplicando por 1000) y calcular cuántas veces cabe el tamaño de una foto en esos megabytes totales. Como la consigna pide fotos "enteras", devolvemos la parte entera (redondeo hacia abajo).

### Casos de Prueba Identificados

- `photoSizeMb = 1`, `hardDriveSizeGb = 1` -> `1000` fotos.
- `photoSizeMb = 2`, `hardDriveSizeGb = 1` -> `500` fotos.
- `photoSizeMb = 3.5`, `hardDriveSizeGb = 5.5` -> `Math.floor(5.5*1000/3.5) = 1571` fotos.
- Casos límite: tamaño de foto `0` o negativo -> devolver `0` (guardamos contra división por cero).

## Desarrollo de la Solución

### Enfoque Elegido

El problema es puramente aritmético: convertir unidades y dividir. Usamos una expresión simple y un `Math.floor` para obtener fotos enteras.

### Implementación Paso a Paso

1. Convertir `hardDriveSizeGb` a megabytes: `totalMb = hardDriveSizeGb * 1000`.
2. Calcular cuántas fotos caben: `totalMb / photoSizeMb`.
3. Devolver la parte entera con `Math.floor`.

Implementación (JS):

```javascript
function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  if (photoSizeMb <= 0) return 0;
  const totalMb = hardDriveSizeGb * 1000;
  return Math.floor(totalMb / photoSizeMb);
}
```

## Análisis de Complejidad

### Complejidad Temporal

O(1). La operación es constante: unas pocas operaciones aritméticas independientemente del tamaño de los números.

### Complejidad Espacial

O(1). Uso de memoria constante.

## Casos Edge y Consideraciones

- Tamaño de foto `0` o negativo: evitamos división por cero y devolvemos `0`.
- Valores decimales: la función maneja `photoSizeMb` y `hardDriveSizeGb` como números flotantes; `Math.floor` asegura conteo de fotos enteras.
- Unidades: la consigna define 1 GB = 1000 MB (no 1024); respetamos esa conversión.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Conversión de unidades y aritmética básica.

### Posibles Optimizaciones

- No aplica optimizaciones relevantes por ser un cálculo simple; se podría añadir validación de tipos si se espera entrada no numérica.

## Recursos y Referencias

- Documentación de `Math.floor` en MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
