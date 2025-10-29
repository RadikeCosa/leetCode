/**
 * FreeCodeCamp Problem: Email Sorter
 * Category: Daily
 *
 * Complejidad Temporal: O(n log n) - Dominado por el algoritmo de ordenamiento
 * Complejidad Espacial: O(1) - No usamos espacio extra significativo
 */
function sort(emails) {
  // Usamos el método sort() de arrays con una función comparadora personalizada
  // Esta función se ejecuta para cada par de emails durante el ordenamiento
  return emails.sort((a, b) => {
    // Paso 1: Separar cada email en username y domain usando split('@')
    // Ejemplo: "jill@mail.com" -> ["jill", "mail.com"]
    const [userA, domainA] = a.split("@");
    const [userB, domainB] = b.split("@");

    // Paso 2: Comparar dominios primero (case-insensitive)
    // Convertimos a minúsculas para ignorar mayúsculas/minúsculas
    // localeCompare() retorna -1, 0, o 1 según el orden alfabético
    const domainCompare = domainA
      .toLowerCase()
      .localeCompare(domainB.toLowerCase());

    // Si los dominios son diferentes, retornamos el resultado de la comparación
    // Esto determina el orden: dominio más pequeño alfabéticamente viene primero
    if (domainCompare !== 0) {
      return domainCompare;
    }

    // Paso 3: Si los dominios son iguales, comparamos los usernames
    // También case-insensitive para mantener consistencia
    // localeCompare() maneja correctamente el orden alfabético
    return userA.toLowerCase().localeCompare(userB.toLowerCase());
  });
}

export default sort;
