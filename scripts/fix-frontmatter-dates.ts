/**
 * Fix frontmatter dates in markdown files to match their git creation dates
 * 
 * This script:
 * 1. Finds all markdown explanation files
 * 2. Gets their git creation date (first commit date)
 * 3. Updates the createdAt field in frontmatter to match
 */

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

interface FileUpdate {
  path: string;
  oldDate: string;
  newDate: string;
}

/**
 * Get the git creation date for a file
 */
function getGitCreationDate(filePath: string): string | null {
  try {
    // Sanitize the file path to prevent command injection
    const sanitizedPath = filePath.replace(/["'`$\\]/g, "\\$&");
    
    // Get the date of the first commit that added this file
    const result = execSync(
      `git log --diff-filter=A --follow --format=%aI -1 -- "${sanitizedPath}"`,
      { encoding: "utf-8", stdio: ["pipe", "pipe", "ignore"] }
    );
    
    if (!result.trim()) {
      return null;
    }
    
    // Extract just the date part (YYYY-MM-DD)
    const isoDate = result.trim();
    return isoDate.slice(0, 10);
  } catch (error) {
    return null;
  }
}

/**
 * Extract createdAt date from frontmatter
 */
function extractCreatedAt(content: string): string | null {
  // Trim content to handle leading whitespace/BOM
  const trimmedContent = content.trim();
  const match = trimmedContent.match(/^---\n[\s\S]*?createdAt:\s*["']?(\d{4}-\d{2}-\d{2})["']?/);
  return match ? match[1] : null;
}

/**
 * Update createdAt date in frontmatter
 */
function updateCreatedAt(content: string, newDate: string): string {
  // Trim content to handle leading whitespace/BOM
  const trimmedContent = content.trim();
  return trimmedContent.replace(
    /(^---\n[\s\S]*?createdAt:\s*)["']?\d{4}-\d{2}-\d{2}["']?/,
    `$1"${newDate}"`
  );
}

/**
 * Recursively find all files matching a pattern
 */
function findFiles(dir: string, pattern: RegExp, files: string[] = []): string[] {
  try {
    const items = readdirSync(dir);
    
    for (const item of items) {
      const fullPath = join(dir, item);
      
      try {
        const stat = statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (item !== "node_modules" && !item.startsWith(".")) {
            findFiles(fullPath, pattern, files);
          }
        } else if (pattern.test(item)) {
          files.push(fullPath);
        }
      } catch (err) {
        // Skip files we can't access (log for debugging)
        console.warn(`⚠️  Cannot access: ${fullPath}`);
        continue;
      }
    }
  } catch (err) {
    // Skip directories we can't access
  }
  
  return files;
}

/**
 * Main function to fix all frontmatter dates
 */
function fixFrontmatterDates(): void {
  console.log("🔍 Searching for markdown files with frontmatter...\n");
  
  // Find all explanation markdown files
  const files = findFiles("src", /-explanation\.md$/);
  
  const updates: FileUpdate[] = [];
  const unchanged: string[] = [];
  const noGitDate: string[] = [];
  
  for (const file of files) {
    const content = readFileSync(file, "utf-8");
    const currentDate = extractCreatedAt(content);
    
    if (!currentDate) {
      console.log(`⚠️  No createdAt found in: ${file}`);
      continue;
    }
    
    const gitDate = getGitCreationDate(file);
    
    if (!gitDate) {
      noGitDate.push(file);
      console.log(`⚠️  No git history found for: ${file}`);
      continue;
    }
    
    if (currentDate !== gitDate) {
      const newContent = updateCreatedAt(content, gitDate);
      writeFileSync(file, newContent, "utf-8");
      updates.push({ path: file, oldDate: currentDate, newDate: gitDate });
    } else {
      unchanged.push(file);
    }
  }
  
  // Print summary
  console.log("\n" + "=".repeat(60));
  console.log("📊 SUMMARY");
  console.log("=".repeat(60));
  
  if (updates.length > 0) {
    console.log(`\n✅ Updated ${updates.length} file(s):\n`);
    for (const update of updates) {
      console.log(`   ${update.path}`);
      console.log(`      ${update.oldDate} → ${update.newDate}`);
    }
  }
  
  if (unchanged.length > 0) {
    console.log(`\n✓ ${unchanged.length} file(s) already had correct dates`);
  }
  
  if (noGitDate.length > 0) {
    console.log(`\n⚠️  ${noGitDate.length} file(s) had no git history (skipped)`);
  }
  
  console.log("\n" + "=".repeat(60));
  console.log(`Total files processed: ${files.length}`);
  console.log("=".repeat(60) + "\n");
}

// Run the script
try {
  fixFrontmatterDates();
} catch (error) {
  console.error("❌ Error:", error);
  process.exit(1);
}
