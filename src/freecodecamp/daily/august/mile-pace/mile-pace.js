/**
 * FreeCodeCamp Problem: Mile Pace
 * Category: Daily
 */
function milePace(miles, duration) {
  // Parsear minutos y segundos del formato "MM:SS"
  const [minutes, seconds] = duration.split(":").map(Number);

  // Convertir tiempo total a segundos
  const totalSeconds = minutes * 60 + seconds;

  // Calcular segundos por milla
  const paceInSeconds = totalSeconds / miles;

  // Convertir segundos por milla a minutos y segundos
  const paceMinutes = Math.floor(paceInSeconds / 60);
  const paceRemainingSeconds = Math.round(paceInSeconds % 60);

  // Formatear con ceros a la izquierda
  return `${String(paceMinutes).padStart(2, "0")}:${String(
    paceRemainingSeconds
  ).padStart(2, "0")}`;
}

export default milePace;
