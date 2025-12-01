---
title: "is-match"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-17"
---

# Is Match - Análisis y Explicación

## Enunciado del Problema

Fingerprint Test
Given two strings representing fingerprints, determine if they are a match using the following rules:

Each fingerprint will consist only of lowercase letters (a-z).
Two fingerprints are considered a match if:
They are the same length.
The number of differing characters does not exceed 10% of the fingerprint length.

Test de Huellas Dactilares
Dadas dos cadenas que representan huellas dactilares, determina si coinciden utilizando las siguientes
reglas:
Cada huella dactilar consistirá únicamente en letras minúsculas (a-z).
Dos huellas dactilares se consideran coincidentes si:
Tienen la misma longitud.
El número de caracteres diferentes no excede el 10% de la longitud de la huella dactilar.

## Análisis Inicial

el problema requiere comparar dos cadenas, si son de igual longitud y si la cantidad de caracteres diferentes entre ellas no supera el 10% de su longitud.

### Comprensión del Problema

La función debe recibir dos cadenas que representan huellas dactilares y determinar si coinciden según las reglas establecidas: deben tener la misma longitud y el número de caracteres diferentes no debe exceder el 10% de la longitud de las cadenas.

### Casos de Prueba Identificados

1. isMatch("helloworld", "helloworld") should return true.
2. isMatch("helloworld", "helloworlds") should return false.
3. isMatch("helloworld", "jelloworld") should return true.
4. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") should return true.
5. isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") should return true.
6. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") should return false.

## Desarrollo de la Solución

### Enfoque Elegido

<!-- TODO: Explicar el algoritmo/estrategia utilizada -->

### Implementación Paso a Paso

<!-- TODO: Detallar la lógica de implementación -->

## Análisis de Complejidad

### Complejidad Temporal

<!-- TODO: Analizar Big O tiempo -->

### Complejidad Espacial

<!-- TODO: Analizar Big O espacio -->

## Casos Edge y Consideraciones

<!-- TODO: Documentar casos especiales manejados -->

## Reflexiones y Aprendizajes

### Conceptos Aplicados

<!-- TODO: ¿Qué patrones/técnicas se usaron? -->

### Posibles Optimizaciones

<!-- TODO: ¿Se puede mejorar? -->

## Recursos y Referencias

<!-- TODO: Links útiles, algoritmos relacionados, etc. -->