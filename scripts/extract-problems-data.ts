/**
 * Script para extraer y estructurar datos de todos los ejercicios
 * Genera un archivo problems-data.json con los metadatos relevantes
 */

import {
  readdirSync,
  statSync,
  existsSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join, basename } from "node:path";

const SERIES_PATHS = [
  { source: "leetcode", path: "src/leetcode/daily", series: "daily" },
  {
    source: "leetcode",
    path: "src/leetcode/top-interview",
    series: "top-interview",
  },
  {
    source: "leetcode",
    path: "src/leetcode/binary-search",
    series: "binary-search",
  },
  { source: "leetcode", path: "src/leetcode/30-days-js", series: "30-days-js" },
  { source: "freecodecamp", path: "src/freecodecamp/daily", series: "daily" },
  {
    source: "freecodecamp",
    path: "src/freecodecamp/coding-interview-prep",
    series: "coding-interview-prep",
  },
  {
    source: "freecodecamp",
    path: "src/freecodecamp/project-euler",
    series: "project-euler",
  },
  {
    source: "freecodecamp",
    path: "src/freecodecamp/rosetta-code",
    series: "rosetta-code",
  },
];

function extractMetadataFromFile(filePath: string): {
  difficulty?: string;
  topics?: string[];
  category?: string;
} {
  try {
    const content = readFileSync(filePath, "utf8");
    const difficultyMatch = content.match(/Difficulty: (\w+)/i);
    const topicsMatch = content.match(/Topics?: ([^\n]+)/i);
    const categoryMatch = content.match(/Category: ([^\n]+)/i);
    return {
      difficulty: difficultyMatch
        ? difficultyMatch[1].toLowerCase()
        : undefined,
      topics: topicsMatch
        ? topicsMatch[1].split(/,|;/).map((t) => t.trim())
        : [],
      category: categoryMatch ? categoryMatch[1].toLowerCase() : undefined,
    };
  } catch {
    return {};
  }
}

function getCreatedAt(path: string): string | undefined {
  try {
    const stats = statSync(path);
    return stats.birthtime.toISOString().slice(0, 10);
  } catch {
    return undefined;
  }
}

type Problem = {
  name: string;
  path: string;
  source: string;
  series: string;
  category?: string;
  difficulty?: string;
  topics?: string[];
  hasImplementation: boolean;
  hasTests: boolean;
  hasExplanation: boolean;
  hasPostSolution: boolean;
  createdAt?: string;
};

function getProblemsFromSeries(seriesInfo: {
  source: string;
  path: string;
  series: string;
}): Problem[] {
  const problems: Problem[] = [];
  // Heurísticas para normalización
  const topicKeywords = [
    "array",
    "string",
    "math",
    "recursion",
    "hash",
    "tree",
    "graph",
    "dynamic",
    "greedy",
    "search",
    "sort",
    "set",
    "matrix",
    "pointer",
    "simulation",
    "geometry",
    "counting",
    "bit",
    "linked list",
    "stack",
    "queue",
  ];
  function normalizeDifficulty(problem: any): string | undefined {
    if (problem.difficulty) return problem.difficulty;
    const p = problem.path.toLowerCase();
    if (p.includes("easy")) return "easy";
    if (p.includes("medium")) return "medium";
    if (p.includes("hard")) return "hard";
    if (problem.source === "freecodecamp") return "easy";
    return undefined;
  }
  function extractTopics(problem: any): string[] {
    if (problem.topics && problem.topics.length > 0) return problem.topics;
    const namePath = (problem.name + " " + problem.path).toLowerCase();
    let topics = topicKeywords.filter((keyword) => namePath.includes(keyword));
    // Extraer tags por subcarpeta
    const parts = problem.path.split(/[\\\/]/);
    for (const part of parts) {
      if (
        topicKeywords.includes(part.toLowerCase()) &&
        !topics.includes(part)
      ) {
        topics.push(part.charAt(0).toUpperCase() + part.slice(1));
      }
    }
    // Ejemplo: si está en 'array-string', agregar 'Array', 'String'
    if (namePath.includes("array-string")) {
      if (!topics.includes("Array")) topics.push("Array");
      if (!topics.includes("String")) topics.push("String");
    }
    if (namePath.includes("hash-table")) {
      if (!topics.includes("Hash Table")) topics.push("Hash Table");
    }
    if (namePath.includes("linked-list")) {
      if (!topics.includes("Linked List")) topics.push("Linked List");
    }
    if (namePath.includes("matrix")) {
      if (!topics.includes("Matrix")) topics.push("Matrix");
    }
    return topics;
  }
  function normalizeCategory(problem: any): string | undefined {
    if (problem.category) return problem.category.trim();
    const parts = problem.path.split(/[\\\/]/);
    if (parts.includes("daily")) return "daily";
    if (parts.includes("project-euler")) return "project-euler";
    if (parts.includes("rosetta-code")) return "rosetta-code";
    if (parts.includes("coding-interview-prep")) return "coding-interview-prep";
    // Usar subcarpeta como categoría si es relevante
    const subcats = [
      "august",
      "november",
      "october",
      "september",
      "algorithm",
      "data-structures",
    ];
    for (const subcat of subcats) {
      if (parts.includes(subcat)) return subcat;
    }
    if (problem.series) return problem.series;
    return undefined;
  }
  function traverseDir(currentPath: string) {
    if (!existsSync(currentPath)) return;
    const items = readdirSync(currentPath);
    for (const item of items) {
      const itemPath = join(currentPath, item);
      const stats = statSync(itemPath);
      if (stats.isDirectory()) {
        // Recursivamente buscar ejercicios en subcarpetas
        traverseDir(itemPath);
        // Detectar si la carpeta actual es un ejercicio (tiene .js/.ts)
        const files = readdirSync(itemPath);
        const implFile = files.find(
          (f: string) => f.endsWith(".js") || f.endsWith(".ts")
        );
        if (implFile) {
          const testFile = files.find((f: string) => f.includes("test"));
          const explanationFile = files.find((f: string) =>
            f.includes("explanation")
          );
          const postSolutionFile = files.find((f: string) =>
            f.includes("post-solution")
          );
          let meta = implFile
            ? extractMetadataFromFile(join(itemPath, implFile))
            : {};
          const problemObj = {
            name: item,
            path: itemPath,
            source: seriesInfo.source,
            series: seriesInfo.series,
            category: normalizeCategory({
              ...meta,
              path: itemPath,
              series: seriesInfo.series,
            }),
            difficulty: normalizeDifficulty({
              ...meta,
              path: itemPath,
              source: seriesInfo.source,
            }),
            topics: extractTopics({ ...meta, name: item, path: itemPath }),
            hasImplementation: !!implFile,
            hasTests: !!testFile,
            hasExplanation: !!explanationFile,
            hasPostSolution: !!postSolutionFile,
            createdAt: getCreatedAt(itemPath),
          };
          problems.push(problemObj);
        }
      }
    }
  }
  traverseDir(seriesInfo.path);
  return problems;
}
function main(): void {
  let allProblems: Problem[] = [];
  for (const seriesInfo of SERIES_PATHS) {
    allProblems = allProblems.concat(getProblemsFromSeries(seriesInfo));
  }
  writeFileSync("problems-data.json", JSON.stringify(allProblems, null, 2));
  console.log(
    `Extraídos ${allProblems.length} ejercicios en problems-data.json`
  );
}

main();
