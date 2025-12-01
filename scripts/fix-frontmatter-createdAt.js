const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Cambia esto por la ruta raíz de tus archivos explicativos
const baseDir = path.join(__dirname, "../src");

function getAllExplanationFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(getAllExplanationFiles(fullPath));
    } else if (file.endsWith("-explanation.md")) {
      results.push(fullPath);
    }
  });
  return results;
}

function getGitCreationDate(filePath) {
  try {
    const date = execSync(
      `git log --diff-filter=A --follow --format=%aD -- "${filePath}"`,
      { encoding: "utf8" }
    ).trim();
    // Formato YYYY-MM-DD
    return new Date(date).toISOString().slice(0, 10);
  } catch {
    return null;
  }
}

function updateFrontmatterDate(filePath, newDate) {
  const content = fs.readFileSync(filePath, "utf8");
  const updated = content.replace(
    /(createdAt:\s*)\d{4}-\d{2}-\d{2}/,
    `$1${newDate}`
  );
  fs.writeFileSync(filePath, updated, "utf8");
}

const files = getAllExplanationFiles(baseDir);
files.forEach((file) => {
  const date = getGitCreationDate(file);
  if (date) updateFrontmatterDate(file, date);
  else console.log(`No se pudo obtener fecha para: ${file}`);
});

console.log("Fechas actualizadas.");
