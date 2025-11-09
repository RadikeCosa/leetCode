/**
 * Create a new LeetCode/FreeCodeCamp problem structure with skeleton files
 * Usage: npm run new-problem <series> <problem-name> [category/section]
 *
 * Examples:
 * npm run new-problem daily "two-sum"
 * npm run new-problem top-interview "longest-substring" array-string
 * npm run new-problem freecodecamp "reverse-string" daily/november
 * npm run new-problem binary-search "search-in-matrix" standard-search
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import {
  determineProblemPath,
  validateArguments,
  generateSkeletonFiles,
  SeriesType,
} from "./utils/problem-utils";

// Parse command line arguments
const [series, problemName, category] = process.argv.slice(2);

// Validate input arguments
const validation = validateArguments(
  series as SeriesType,
  problemName,
  category
);
if (!validation.isValid) {
  console.error(`❌ ${validation.error}`);
  process.exit(1);
}

// Determine full path for the problem
const problemPath = determineProblemPath(
  series as SeriesType,
  problemName,
  category
);
const fullPath = join("src", problemPath);

// Check if problem already exists
if (existsSync(fullPath)) {
  console.error(`❌ Problem already exists: ${fullPath}`);
  process.exit(1);
}

// Create directory structure
mkdirSync(fullPath, { recursive: true });

// Generate skeleton files
try {
  const createdFiles = generateSkeletonFiles(
    series as SeriesType,
    problemName,
    fullPath
  );

  console.log(`✅ Problem structure created: ${fullPath}`);
  console.log("📝 Files created:");
  createdFiles.forEach((file) => console.log(`   - ${file}`));
  console.log("\n🎯 Next steps:");
  console.log("1. Open the test file and start collaborative test writing");
  console.log("2. Run: npm run test:watch");
  console.log("3. Implement the solution following TDD methodology");
} catch (error) {
  console.error("❌ Failed to create problem structure:", error);
  process.exit(1);
}
