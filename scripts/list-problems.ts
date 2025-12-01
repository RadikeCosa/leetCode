/**
 * List all problems in the workspace with their status
 * Usage: npm run list-problems [series]
 */

import { readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import { SeriesType, SERIES_CONFIG } from "./utils/problem-utils";

interface ProblemInfo {
  name: string;
  path: string;
  series: string;
  category?: string;
  hasImplementation: boolean;
  hasTests: boolean;
  hasExplanation: boolean;
  hasPostSolution: boolean;
}

/**
 * Recursively get all problems from a series (any depth)
 */
function getProblemsFromSeries(
  seriesName: string,
  seriesPath: string,
  category?: string
): ProblemInfo[] {
  const problems: ProblemInfo[] = [];
  const seriesConfig = SERIES_CONFIG[seriesName as SeriesType];

  if (!existsSync(seriesPath)) {
    return problems;
  }

  const items = readdirSync(seriesPath);
  for (const item of items) {
    if (item === "utilidades") continue;
    const itemPath = join(seriesPath, item);
    if (statSync(itemPath).isDirectory()) {
      // Check if this directory is a problem (contains implementation file)
      const ext = seriesConfig.language;
      const implementationFile = join(itemPath, `${item}.${ext}`);
      if (existsSync(implementationFile)) {
        problems.push(analyzeProblem(item, itemPath, seriesName, category));
      } else {
        // Recurse deeper
        problems.push(...getProblemsFromSeries(seriesName, itemPath, item));
      }
    }
  }

  return problems;
}

/**
 * Analyze a problem directory to check what files exist
 */
function analyzeProblem(
  name: string,
  path: string,
  series: string,
  category?: string
): ProblemInfo {
  const seriesConfig = SERIES_CONFIG[series as SeriesType];
  const ext = seriesConfig.language;

  return {
    name,
    path,
    series,
    category,
    hasImplementation: existsSync(join(path, `${name}.${ext}`)),
    hasTests: existsSync(join(path, `${name}.test.${ext}`)),
    hasExplanation: existsSync(join(path, `${name}-explanation.md`)),
    hasPostSolution: existsSync(join(path, `${name}-post-solution.md`)),
  };
}

/**
 * Display problems in a formatted table
 */
function displayProblems(
  problems: ProblemInfo[],
  showDetails: boolean = false
) {
  if (problems.length === 0) {
    console.log("📭 No problems found");
    return;
  }

  console.log(`📊 Found ${problems.length} problems\n`);

  // Group by series
  const grouped = problems.reduce((acc, problem) => {
    if (!acc[problem.series]) {
      acc[problem.series] = [];
    }
    acc[problem.series].push(problem);
    return acc;
  }, {} as Record<string, ProblemInfo[]>);

  for (const [series, seriesProblems] of Object.entries(grouped)) {
    console.log(
      `🎯 ${series.toUpperCase()} (${seriesProblems.length} problems)`
    );
    console.log("=".repeat(50));

    for (const problem of seriesProblems) {
      const status = getStatusIndicators(problem);
      const categoryStr = problem.category ? ` (${problem.category})` : "";

      console.log(`📝 ${problem.name}${categoryStr}`);
      if (showDetails) {
        console.log(`   Path: ${problem.path}`);
      }
      console.log(`   Status: ${status}`);
      console.log();
    }
  }
}

/**
 * Get status indicators for a problem
 */
function getStatusIndicators(problem: ProblemInfo): string {
  const indicators = [];

  indicators.push(problem.hasImplementation ? "✅ Code" : "❌ Code");
  indicators.push(problem.hasTests ? "✅ Tests" : "❌ Tests");
  indicators.push(problem.hasExplanation ? "✅ Explanation" : "❌ Explanation");

  const seriesConfig = SERIES_CONFIG[problem.series as SeriesType];
  if (seriesConfig.hasPostSolution) {
    indicators.push(problem.hasPostSolution ? "✅ Post" : "❌ Post");
  }

  return indicators.join(" | ");
}

/**
 * Get completion statistics
 */
function getStats(problems: ProblemInfo[]) {
  const total = problems.length;
  const withImplementation = problems.filter((p) => p.hasImplementation).length;
  const withTests = problems.filter((p) => p.hasTests).length;
  const withExplanation = problems.filter((p) => p.hasExplanation).length;
  const withPostSolution = problems.filter((p) => p.hasPostSolution).length;

  console.log("📈 Statistics:");
  console.log(`   Total problems: ${total}`);
  console.log(
    `   With implementation: ${withImplementation}/${total} (${Math.round(
      (withImplementation / total) * 100
    )}%)`
  );
  console.log(
    `   With tests: ${withTests}/${total} (${Math.round(
      (withTests / total) * 100
    )}%)`
  );
  console.log(
    `   With explanation: ${withExplanation}/${total} (${Math.round(
      (withExplanation / total) * 100
    )}%)`
  );
  console.log(
    `   With post-solution: ${withPostSolution}/${total} (${Math.round(
      (withPostSolution / total) * 100
    )}%)`
  );
}

// Main execution
const targetSeries = process.argv[2] as SeriesType;
const showDetails = process.argv.includes("--details");

if (targetSeries && !SERIES_CONFIG[targetSeries]) {
  console.error(`❌ Invalid series: ${targetSeries}`);
  console.error(`Available series: ${Object.keys(SERIES_CONFIG).join(", ")}`);
  process.exit(1);
}

try {
  let allProblems: ProblemInfo[] = [];

  if (targetSeries) {
    // Show problems from specific series
    const seriesPath = join("src", SERIES_CONFIG[targetSeries].path);
    allProblems = getProblemsFromSeries(targetSeries, seriesPath);
    console.log(`🔍 Listing problems from: ${targetSeries}\n`);
  } else {
    // Show problems from all series
    console.log("🔍 Listing all problems\n");
    for (const [seriesName, config] of Object.entries(SERIES_CONFIG)) {
      const seriesPath = join("src", config.path);
      const seriesProblems = getProblemsFromSeries(seriesName, seriesPath);
      allProblems.push(...seriesProblems);
    }
  }

  displayProblems(allProblems, showDetails);

  if (allProblems.length > 0) {
    console.log();
    getStats(allProblems);
  }
} catch (error) {
  console.error("❌ Error listing problems:", error);
  process.exit(1);
}
