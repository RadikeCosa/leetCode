const { execSync } = require('child_process');
const path = require('path');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Uso: npm run get-creation-date <ruta-del-archivo>');
  process.exit(1);
}

try {
  const absolutePath = path.resolve(filePath);
  const date = execSync(
    `git log --diff-filter=A --follow --format=%aD -- "${absolutePath}"`,
    { encoding: 'utf8' }
  ).trim();

  if (date) {
    console.log(`Fecha de creación de ${filePath}: ${date}`);
  } else {
    console.log(`No se encontró fecha de creación para ${filePath}`);
  }
} catch (error) {
  console.error(`Error al obtener la fecha de creación: ${error.message}`);
}