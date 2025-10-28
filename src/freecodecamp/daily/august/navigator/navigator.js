/**
 * FreeCodeCamp Problem: Navigator
 * Category: Daily
 */

// Alternativa 1: Usando clase para encapsular la lógica del navegador
class BrowserHistory {
  constructor() {
    this.current = "Home"; // Página actual (siempre empezamos en Home)
    this.backHistory = []; // Historial de páginas anteriores (para comando Back)
    this.forwardHistory = []; // Historial de páginas siguientes (para comando Forward)
  }

  /**
   * Visita una nueva página
   * - Agrega la página actual al historial de atrás
   * - Cambia a la nueva página
   * - Limpia el historial de adelante (comportamiento estándar del navegador)
   */
  visit(page) {
    this.backHistory.push(this.current);
    this.current = page;
    this.forwardHistory = []; // Limpiar forward history
  }

  /**
   * Retrocede a la página anterior
   * - Si hay páginas en el historial atrás:
   *   - Mueve la página actual al historial adelante
   *   - Toma la última página del historial atrás como nueva página actual
   * - Si no hay historial: se queda en la página actual
   */
  back() {
    if (this.backHistory.length > 0) {
      this.forwardHistory.push(this.current);
      this.current = this.backHistory.pop();
    }
    // Si no hay historial atrás, no hace nada (se queda en current)
  }

  /**
   * Avanza a la página siguiente
   * - Si hay páginas en el historial adelante:
   *   - Mueve la página actual al historial atrás
   *   - Toma la última página del historial adelante como nueva página actual
   * - Si no hay historial: se queda en la página actual
   */
  forward() {
    if (this.forwardHistory.length > 0) {
      this.backHistory.push(this.current);
      this.current = this.forwardHistory.pop();
    }
    // Si no hay historial adelante, no hace nada (se queda en current)
  }

  /**
   * Retorna la página actual
   */
  getCurrentPage() {
    return this.current;
  }
}

/**
 * Función principal que procesa una secuencia de comandos de navegación
 * @param {string[]} commands - Array de comandos ("Visit Page", "Back", "Forward")
 * @returns {string} - Página actual después de ejecutar todos los comandos
 */
function navigate(commands) {
  const browser = new BrowserHistory();

  // Procesar cada comando en orden
  for (const command of commands) {
    if (command.startsWith("Visit ")) {
      // Extraer el nombre de la página removiendo "Visit " del comando
      const page = command.replace("Visit ", "");
      browser.visit(page);
    } else if (command === "Back") {
      browser.back();
    } else if (command === "Forward") {
      browser.forward();
    }
    // Ignorar comandos no reconocidos (aunque según el problema solo hay estos 3 tipos)
  }

  return browser.getCurrentPage();
}

export default navigate;
