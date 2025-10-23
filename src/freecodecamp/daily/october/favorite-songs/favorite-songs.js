/**
 * FreeCodeCamp Problem: Favorite Songs
 * Category: Daily
 */
function favoriteSongs(playlist) {
  // Ordenar por plays descendente y tomar los primeros dos títulos
  return playlist
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 2)
    .map((song) => song.title);
}

export default favoriteSongs;
