import fs from "fs";
import path from "path";

const problemsPath = path.resolve(__dirname, "../problems-data.json");
const outputPath = path.resolve(__dirname, "list-missing-metadata.json");

type Problem = {
  name: string;
  path: string;
  difficulty?: string;
  topics?: string[];
  category?: string;
};

function getMissingFields(problem: Problem): string[] {
  const missing: string[] = [];
  if (!problem.difficulty) missing.push("difficulty");
  if (!problem.topics || problem.topics.length === 0) missing.push("topics");
  if (!problem.category) missing.push("category");
  return missing;
}

function main() {
  const problems: Problem[] = JSON.parse(
    fs.readFileSync(problemsPath, "utf-8")
  );
  const missingList = problems
    .map((problem) => {
      const missing = getMissingFields(problem);
      if (missing.length > 0) {
        return {
          name: problem.name,
          path: problem.path,
          missing,
        };
      }
      return null;
    })
    .filter(Boolean);

  fs.writeFileSync(outputPath, JSON.stringify(missingList, null, 2), "utf-8");
  console.log(`Ejercicios con metadatos faltantes: ${missingList.length}`);
}

main();
