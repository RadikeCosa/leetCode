/**
 * Calcula la máxima ganancia posible realizando hasta k transacciones,
 * permitiendo transacciones normales y ventas en corto.
 * @param prices - Array de precios por día
 * @param k - Máximo número de transacciones permitidas
 * @returns Ganancia máxima alcanzable
 */
export default function maximumProfit(prices: number[], k: number): number {
  // Memoización: clave -> resultado
  const memo = new Map<string, number>();

  /**
   * Función DP principal.
   * @param idx Día actual
   * @param transactionsDone Transacciones completadas
   * @param inTransaction Si hay una transacción abierta (true/false)
   * @param transactionType Tipo de transacción abierta: 0 = ninguna, 1 = normal, 2 = venta en corto
   * @param lastPrice Precio en el que se abrió la transacción (si aplica)
   */
  function dp(
    idx: number,
    transactionsDone: number,
    inTransaction: boolean,
    transactionType: 0 | 1 | 2,
    lastPrice: number
  ): number {
    // Caso base: fin del array o máximo de transacciones alcanzado
    if (idx === prices.length || transactionsDone === k) return 0;

    // Clave única para memoización
    const key = `${idx},${transactionsDone},${inTransaction},${transactionType},${lastPrice}`;
    if (memo.has(key)) return memo.get(key)!;

    // Opción 1: esperar (no hacer nada este día)
    let res = dp(
      idx + 1,
      transactionsDone,
      inTransaction,
      transactionType,
      lastPrice
    );

    if (!inTransaction) {
      // Opción 2: iniciar una transacción normal (comprar)
      res = Math.max(
        res,
        dp(idx + 1, transactionsDone, true, 1, prices[idx]) // Abrimos compra
      );
      // Opción 3: iniciar una venta en corto (vender en corto)
      res = Math.max(
        res,
        dp(idx + 1, transactionsDone, true, 2, prices[idx]) // Abrimos venta en corto
      );
    } else {
      if (transactionType === 1) {
        // Opción 4: cerrar transacción normal (vender)
        // Ganancia: precio actual - precio de compra
        res = Math.max(
          res,
          prices[idx] -
            lastPrice +
            dp(idx + 1, transactionsDone + 1, false, 0, 0)
        );
      } else if (transactionType === 2) {
        // Opción 5: cerrar venta en corto (recomprar)
        // Ganancia: precio de venta en corto - precio de recompra
        res = Math.max(
          res,
          lastPrice -
            prices[idx] +
            dp(idx + 1, transactionsDone + 1, false, 0, 0)
        );
      }
    }

    memo.set(key, res);
    return res;
  }

  // Llamada inicial: día 0, 0 transacciones, sin transacción abierta
  return dp(0, 0, false, 0, 0);
}
