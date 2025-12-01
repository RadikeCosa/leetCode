/**
 * Validate problem structure and check for missing files
 * Usage: npm run validate-problems [series]
 */

import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import { SeriesType, SERIES_CONFIG } from "./utils/problem-utils";

interface ValidationIssue {
  type: "error" | "warning";
  problem: string;
  message: string;
}

interface ProblemValidation {
  name: string;
  path: string;
  series: string;
  category?: string;
  issues: ValidationIssue[];
  isComplete: boolean;
}

/**
 * Validate a single problem directory
 */
function validateProblem(
  name: string,
  path: string,
  series: string,
  category?: string
): ProblemValidation {
  const issues: ValidationIssue[] = [];
  const seriesConfig = SERIES_CONFIG[series as SeriesType];
  const ext = seriesConfig.language;

  // Check required files
  const implementationFile = `${name}.${ext}`;
  const testFile = `${name}.test.${ext}`;
  const explanationFile = `${name}-explanation.md`;
  const postSolutionFile = `${name}-post-solution.md`;

  // Implementation file
  if (!existsSync(join(path, implementationFile))) {
    issues.push({
      type: "error",
      problem: name,
      message: `Missing implementation file: ${implementationFile}`,
    });
  }

  // Test file
  if (!existsSync(join(path, testFile))) {
    issues.push({
      type: "error",
      problem: name,
      message: `Missing test file: ${testFile}`,
    });
  }

  // Explanation file
  if (!existsSync(join(path, explanationFile))) {
    issues.push({
      type: "warning",
      problem: name,
      message: `Missing explanation file: ${explanationFile}`,
    });
  }

  // Post-solution file (only for LeetCode)
  if (
    seriesConfig.hasPostSolution &&
    !existsSync(join(path, postSolutionFile))
  ) {
    issues.push({
      type: "warning",
      problem: name,
      message: `Missing post-solution file: ${postSolutionFile}`,
    });
  }

  // Validate naming convention (kebab-case)
  if (!/^[a-z0-9-]+$/.test(name)) {
    issues.push({
      type: "error",
      problem: name,
      message: "Problem name should be in kebab-case",
    });
  }

  const isComplete =
    issues.filter((issue) => issue.type === "error").length === 0;

  return {
    name,
    path,
    series,
    category,
    issues,
    isComplete,
  };
}

/**
 * Recursively validate all problem directories in a series
 */
function validateProblemsRecursive(
  currentPath: string,
  seriesName: string,
  category?: string
): ProblemValidation[] {
  const validations: ProblemValidation[] = [];
  const items = readdirSync(currentPath);

  for (const item of items) {
    if (item === "utilidades") continue;
    const itemPath = join(currentPath, item);
    if (statSync(itemPath).isDirectory()) {
      // Check if this directory is a problem (contains implementation file)
      const seriesConfig = SERIES_CONFIG[seriesName as SeriesType];
      const ext = seriesConfig.language;
      const implementationFile = join(itemPath, `${item}.${ext}`);
      if (existsSync(implementationFile)) {
        validations.push(validateProblem(item, itemPath, seriesName, category));
      } else {
        // Recurse deeper
        validations.push(
          ...validateProblemsRecursive(itemPath, seriesName, item)
        );
      }
    }
  }
  return validations;
}

/**
 * Validate all problems in a series (recursive version)
 */
function validateSeries(
  seriesName: string,
  seriesPath: string
): ProblemValidation[] {
  if (!existsSync(seriesPath)) {
    console.log(`⚠️ Series directory not found: ${seriesPath}`);
    return [];
  }
  return validateProblemsRecursive(seriesPath, seriesName);
}

/**
 * Display validation results
 */
function displayResults(validations: ProblemValidation[]) {
  const totalProblems = validations.length;
  const completeProblems = validations.filter((v) => v.isComplete).length;
  const problemsWithErrors = validations.filter((v) =>
    v.issues.some((i) => i.type === "error")
  ).length;
  const problemsWithWarnings = validations.filter((v) =>
    v.issues.some((i) => i.type === "warning")
  ).length;

  console.log("📊 Validation Summary:");
  console.log(`   Total problems: ${totalProblems}`);
  console.log(
    `   Complete problems: ${completeProblems}/${totalProblems} (${Math.round(
      (completeProblems / totalProblems) * 100
    )}%)`
  );
  console.log(`   Problems with errors: ${problemsWithErrors}`);
  console.log(`   Problems with warnings: ${problemsWithWarnings}`);
  console.log();

  // Group by series
  const grouped = validations.reduce((acc, validation) => {
    if (!acc[validation.series]) {
      acc[validation.series] = [];
    }
    acc[validation.series].push(validation);
    return acc;
  }, {} as Record<string, ProblemValidation[]>);

  for (const [series, seriesValidations] of Object.entries(grouped)) {
    console.log(`🎯 ${series.toUpperCase()}`);
    console.log("=".repeat(50));

    for (const validation of seriesValidations) {
      if (validation.issues.length === 0) {
        const categoryStr = validation.category
          ? ` (${validation.category})`
          : "";
        console.log(`✅ ${validation.name}${categoryStr}`);
      } else {
        const categoryStr = validation.category
          ? ` (${validation.category})`
          : "";
        console.log(`❌ ${validation.name}${categoryStr}`);

        for (const issue of validation.issues) {
          const icon = issue.type === "error" ? "🔴" : "🟡";
          console.log(`   ${icon} ${issue.message}`);
        }
      }
    }
    console.log();
  }

  // Show actionable items
  const allIssues = validations.flatMap((v) => v.issues);
  const errors = allIssues.filter((i) => i.type === "error");
  const warnings = allIssues.filter((i) => i.type === "warning");

  if (errors.length > 0) {
    console.log("🚨 Critical Issues (Errors):");
    errors.forEach((error) =>
      console.log(`   - ${error.problem}: ${error.message}`)
    );
    console.log();
  }

  if (warnings.length > 0) {
    console.log("⚠️ Suggestions (Warnings):");
    warnings.forEach((warning) =>
      console.log(`   - ${warning.problem}: ${warning.message}`)
    );
    console.log();
  }
}

// Main execution
const targetSeries = process.argv[2] as SeriesType;

if (targetSeries && !SERIES_CONFIG[targetSeries]) {
  console.error(`❌ Invalid series: ${targetSeries}`);
  console.error(`Available series: ${Object.keys(SERIES_CONFIG).join(", ")}`);
  process.exit(1);
}

try {
  let allValidations: ProblemValidation[] = [];

  if (targetSeries) {
    // Validate specific series
    const seriesPath = join("src", SERIES_CONFIG[targetSeries].path);
    allValidations = validateSeries(targetSeries, seriesPath);
    console.log(`🔍 Validating series: ${targetSeries}\n`);
  } else {
    // Validate all series
    console.log("🔍 Validating all series\n");
    for (const [seriesName, config] of Object.entries(SERIES_CONFIG)) {
      const seriesPath = join("src", config.path);
      const seriesValidations = validateSeries(seriesName, seriesPath);
      allValidations.push(...seriesValidations);
    }
  }

  displayResults(allValidations);

  // Exit with error code if there are critical issues
  const hasErrors = allValidations.some((v) =>
    v.issues.some((i) => i.type === "error")
  );
  if (hasErrors) {
    console.log("❌ Validation failed due to critical issues");
    process.exit(1);
  } else {
    console.log("✅ Validation passed!");
  }
} catch (error) {
  console.error("❌ Error during validation:", error);
  process.exit(1);
}
