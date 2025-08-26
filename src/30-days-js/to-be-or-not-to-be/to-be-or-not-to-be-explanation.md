# To Be Or Not To Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions:
• toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
• notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

## Ejemplos

- Input: func = () => expect(5).toBe(5)
- Output: {"value": true}
- Explanation: 5 === 5 so this expression returns true.

- Input: func = () => expect(5).toBe(null)
- Output: {"error": "Not Equal"}
- Explanation: 5 !== null so this expression throw the error "Not Equal".

- Input: func = () => expect(5).notToBe(null)
- Output: {"value": true}
- Explanation: 5 !== null so this expression returns true.

## Análisis

[Este análisis se completará después de resolver el problema]

## Enfoque detallado

[La explicación detallada de la solución se agregará aquí después de la implementación]

## Casos extremos

[Los casos extremos se documentarán después de resolver el problema]

## Complejidad

[El análisis de complejidad se completará después de la implementación]

## Conclusión

[Las lecciones aprendidas se agregarán al finalizar el problema]
