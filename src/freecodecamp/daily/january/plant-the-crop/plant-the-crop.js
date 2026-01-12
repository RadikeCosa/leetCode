/**
 * FreeCodeCamp Problem: Plant The Crop
 * Category: FreeCodeCamp
 *
 * @param {number} fieldSize - The size of the farm field.
 * @param {string} unit - The unit of measurement for the field size ("acres" or "hectares").
 * @param {string} crop - The type of crop to be planted.
 * @returns {number} The number of plants that can fit in the field.
 */
function getNumberOfPlants(fieldSize, unit, crop) {
  const unitToSquareMeters = {
    acres: 4046.86,
    hectares: 10000,
  };

  const cropSpaceRequirements = {
    corn: 1,
    wheat: 0.1,
    soybeans: 0.5,
    tomatoes: 0.25,
    lettuce: 0.2,
  };

  // Convert field size to square meters
  const fieldSizeInSquareMeters =
    fieldSize * unitToSquareMeters[unit.toLowerCase()];

  // Get space required per plant for the given crop
  const spacePerPlant = cropSpaceRequirements[crop.toLowerCase()];

  // Calculate the number of plants that can fit in the field
  const numberOfPlants = Math.floor(fieldSizeInSquareMeters / spacePerPlant);

  return numberOfPlants;
}

export default getNumberOfPlants;
