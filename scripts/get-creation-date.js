const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const fileName = process.argv[2];

if (!fileName) {
  console.error("Uso: npm run get-creation-date <nombre-del-archivo>");
  process.exit(1);
}

const baseDir = path.join(__dirname, "../src");

function findFile(dir, name) {
  let results = [];
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(findFile(fullPath, name));
    } else if (file === name) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = findFile(baseDir, fileName);

if (files.length === 0) {
  console.error(`Archivo '${fileName}' no encontrado en src/`);
  process.exit(1);
} else if (files.length > 1) {
  console.log(`Múltiples archivos encontrados con el nombre '${fileName}':`);
  files.forEach((file) => console.log(`  ${file}`));
  process.exit(1);
}

const filePath = files[0];

try {
  const date = execSync(
    `git log --diff-filter=A --follow --format=%aD -- "${filePath}"`,
    { encoding: "utf8" }
  ).trim();

  if (date) {
    console.log(`Fecha de creación de ${fileName}: ${date}`);
  } else {
    console.log(`No se encontró fecha de creación para ${fileName}`);
  }
} catch (error) {
  console.error(`Error al obtener la fecha de creación: ${error.message}`);
}
