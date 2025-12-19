/**
 * Calcula la máxima ganancia posible realizando hasta k transacciones,
 * permitiendo transacciones normales y ventas en corto.
 * @param prices - Array de precios por día
 * @param k - Máximo número de transacciones permitidas
 * @returns Ganancia máxima alcanzable
 */
export default function maximumProfit(prices: number[], k: number): number {
  const n = prices.length;
  if (n < 2 || k === 0) return 0;

  // DP arrays:
  // free[t]: máxima ganancia con t transacciones completadas y sin posición abierta
  // holdLong[t]: máxima ganancia con t transacciones completadas y una posición larga abierta
  // holdShort[t]: máxima ganancia con t transacciones completadas y una posición corta abierta
  const free = new Array(k + 1).fill(0);
  const holdLong = new Array(k + 1).fill(-Infinity);
  const holdShort = new Array(k + 1).fill(-Infinity);

  for (let day = 0; day < n; day++) {
    for (let t = k; t >= 1; t--) {
      // Cerrar posición larga (vender):
      free[t] = Math.max(free[t], holdLong[t] + prices[day]);
      // Cerrar posición corta (recomprar):
      free[t] = Math.max(free[t], holdShort[t] - prices[day]);
      // Abrir posición larga (comprar):
      holdLong[t] = Math.max(holdLong[t], free[t - 1] - prices[day]);
      // Abrir posición corta (vender en corto):
      holdShort[t] = Math.max(holdShort[t], free[t - 1] + prices[day]);
    }
  }
  // La respuesta es el mejor resultado sin posición abierta, con hasta k transacciones
  return Math.max(...free);
}
