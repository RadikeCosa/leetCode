/**
 * Utility functions for problem structure generation
 */

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  createImplementationTemplate,
  createTestTemplate,
  createExplanationTemplate,
  createPostSolutionTemplate,
} from "./templates";

export type SeriesType =
  | "daily"
  | "30-days-js"
  | "top-interview"
  | "binary-search"
  | "freecodecamp";

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface SeriesConfig {
  path: string;
  structure: string;
  language: string;
  hasPostSolution: boolean;
  requiresCategory: boolean;
  validCategories?: string[];
}

// Series configuration according to copilot-instructions.md
export const SERIES_CONFIG: Record<SeriesType, SeriesConfig> = {
  daily: {
    path: "leetcode/daily",
    structure: "flat",
    language: "ts",
    hasPostSolution: true,
    requiresCategory: false,
  },
  "30-days-js": {
    path: "leetcode/30-days-js",
    structure: "sectioned",
    language: "ts",
    hasPostSolution: true,
    requiresCategory: true,
    validCategories: [
      "parte-1-introduccion",
      "parte-2-transformacion-de-arrays",
      "parte-3-function-transformations",
      "parte-4-programacion-asincrona",
      "parte-5-JSON",
    ],
  },
  "top-interview": {
    path: "leetcode/top-interview",
    structure: "categorized",
    language: "ts",
    hasPostSolution: true,
    requiresCategory: true,
    validCategories: [
      "array-string",
      "hash-table",
      "intervals",
      "linked-list",
      "matrix",
      "sliding-window",
    ],
  },
  "binary-search": {
    path: "leetcode/binary-search",
    structure: "sectioned",
    language: "ts",
    hasPostSolution: true,
    requiresCategory: true,
    validCategories: [
      "as-a-tool",
      "math",
      "rotated-array",
      "search-in-array",
      "standard-search",
      "tricky-invariant",
    ],
  },
  freecodecamp: {
    path: "freecodecamp",
    structure: "category+month",
    language: "js",
    hasPostSolution: false,
    requiresCategory: true,
    validCategories: [
      "daily",
      "coding-interview-prep",
      "project-euler",
      "rosetta-code",
    ],
  },
};

/**
 * Validate command line arguments
 */
export function validateArguments(
  series: SeriesType,
  problemName: string,
  category?: string
): ValidationResult {
  // Check if series is provided
  if (!series) {
    return {
      isValid: false,
      error:
        "Series is required. Available: daily, 30-days-js, top-interview, binary-search, freecodecamp",
    };
  }

  // Check if series is valid
  if (!SERIES_CONFIG[series]) {
    return {
      isValid: false,
      error: `Invalid series: ${series}. Available: ${Object.keys(
        SERIES_CONFIG
      ).join(", ")}`,
    };
  }

  // Check if problem name is provided
  if (!problemName) {
    return {
      isValid: false,
      error: "Problem name is required",
    };
  }

  // Validate problem name format (kebab-case)
  if (!/^[a-z0-9-]+$/.test(problemName)) {
    return {
      isValid: false,
      error:
        'Problem name must be in kebab-case (e.g., "two-sum", "longest-common-prefix")',
    };
  }

  const seriesConfig = SERIES_CONFIG[series];

  // Check if category is required but not provided
  if (seriesConfig.requiresCategory && !category) {
    return {
      isValid: false,
      error: `Category is required for ${series}. Available: ${seriesConfig.validCategories?.join(
        ", "
      )}`,
    };
  }

  // Check if category is valid when provided
  if (
    category &&
    seriesConfig.validCategories &&
    !seriesConfig.validCategories.includes(category.split("/")[0])
  ) {
    return {
      isValid: false,
      error: `Invalid category for ${series}. Available: ${seriesConfig.validCategories.join(
        ", "
      )}`,
    };
  }

  // Special validation for FreeCodeCamp daily category (requires month)
  if (
    series === "freecodecamp" &&
    category === "daily" &&
    !category.includes("/")
  ) {
    return {
      isValid: false,
      error:
        "FreeCodeCamp daily category requires month (e.g., daily/november)",
    };
  }

  return { isValid: true };
}

/**
 * Determine the full path for a problem based on series and category
 */
export function determineProblemPath(
  series: SeriesType,
  problemName: string,
  category?: string
): string {
  const seriesConfig = SERIES_CONFIG[series];

  switch (seriesConfig.structure) {
    case "flat":
      return join(seriesConfig.path, problemName);

    case "sectioned":
    case "categorized":
      if (!category) {
        throw new Error(`Category is required for ${series}`);
      }
      return join(seriesConfig.path, category, problemName);

    case "category+month":
      if (!category) {
        throw new Error(`Category is required for ${series}`);
      }
      return join(seriesConfig.path, category, problemName);

    default:
      throw new Error(`Unknown structure type: ${seriesConfig.structure}`);
  }
}

/**
 * Generate skeleton files for a problem
 */
export function generateSkeletonFiles(
  series: SeriesType,
  problemName: string,
  fullPath: string
): string[] {
  const seriesConfig = SERIES_CONFIG[series];
  const createdFiles: string[] = [];

  // Convert kebab-case to camelCase for function names
  const functionName = problemName
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");

  // 1. Implementation file
  const implementationFile = `${problemName}.${seriesConfig.language}`;
  const implementationPath = join(fullPath, implementationFile);
  writeFileSync(
    implementationPath,
    createImplementationTemplate(series, problemName, functionName)
  );
  createdFiles.push(implementationFile);

  // 2. Test file
  const testFile = `${problemName}.test.${seriesConfig.language}`;
  const testPath = join(fullPath, testFile);
  writeFileSync(
    testPath,
    createTestTemplate(series, problemName, functionName)
  );
  createdFiles.push(testFile);

  // 3. Explanation file (always created)
  const explanationFile = `${problemName}-explanation.md`;
  const explanationPath = join(fullPath, explanationFile);
  writeFileSync(explanationPath, createExplanationTemplate(problemName));
  createdFiles.push(explanationFile);

  // 4. Post-solution file (only for LeetCode series)
  if (seriesConfig.hasPostSolution) {
    const postSolutionFile = `${problemName}-post-solution.md`;
    const postSolutionPath = join(fullPath, postSolutionFile);
    writeFileSync(postSolutionPath, createPostSolutionTemplate(problemName));
    createdFiles.push(postSolutionFile);
  }

  return createdFiles;
}
