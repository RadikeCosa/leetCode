/**
 * Format markdown files using autocorrect
 * Usage: npm run format-files [pattern]
 */

import { readFile, writeFile, readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import process from "node:process";

interface MarkdownContent {
  frontmatter: string;
  body: string;
  hasFrontmatter: boolean;
}

/**
 * Split Markdown file into frontmatter and content
 */
function splitContent(content: string): MarkdownContent {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/m);
  if (!match) {
    return {
      frontmatter: "",
      body: content,
      hasFrontmatter: false,
    };
  }

  return {
    frontmatter: match[1],
    body: match[2],
    hasFrontmatter: true,
  };
}

/**
 * Simple text formatting function (can be replaced with autocorrect when available)
 */
function formatText(text: string): string {
  return (
    text
      // Fix common spacing issues
      .replace(/([a-zA-Z])([0-9])/g, "$1 $2")
      .replace(/([0-9])([a-zA-Z])/g, "$1 $2")
      // Fix multiple spaces
      .replace(/  +/g, " ")
      // Fix line endings
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
  );
}

/**
 * Recursively find markdown files
 */
async function findMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];

  try {
    const entries = await readdir(dir);

    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stats = await stat(fullPath);

      if (
        stats.isDirectory() &&
        !["node_modules", ".git", ".vscode"].includes(entry)
      ) {
        const subFiles = await findMarkdownFiles(fullPath);
        files.push(...subFiles);
      } else if (stats.isFile() && extname(entry) === ".md") {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories we can't read
  }

  return files;
}

/**
 * Get all Markdown files to process
 */
async function getMarkdownFiles(pattern?: string): Promise<string[]> {
  console.log("🔍 Scanning Markdown files...");

  // Simple implementation: scan src directory
  const baseDir = pattern || "src";
  const files = await findMarkdownFiles(baseDir);

  console.log(`📦 Found ${files.length} Markdown files`);
  return files;
}

/**
 * Format a single Markdown file
 */
async function formatSingleFile(filePath: string): Promise<boolean> {
  const content = await readFile(filePath, "utf8");
  const { frontmatter, body, hasFrontmatter } = splitContent(content);

  const formattedBody = formatText(body);
  const newContent = hasFrontmatter
    ? `---\n${frontmatter}\n---\n${formattedBody}`
    : formattedBody;

  // Skip if content hasn't changed
  if (content === newContent) {
    return false;
  }

  // Write updated content to file
  await writeFile(filePath, newContent, "utf8");
  console.log(`✅ ${filePath}`);
  return true;
}

/**
 * Report formatting results
 */
function reportResults(changedCount: number, errorCount: number) {
  if (changedCount === 0) {
    console.log("✅ Check complete, no files needed formatting changes");
  } else {
    console.log(`✨ Formatted ${changedCount} files successfully`);
  }

  if (errorCount > 0) {
    console.log(`⚠️ ${errorCount} files failed to format`);
  }
}

/**
 * Main function to format Markdown files
 */
async function formatMarkdownFiles(): Promise<void> {
  const pattern = process.argv[2];
  const files = await getMarkdownFiles(pattern);

  let changedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    try {
      const wasChanged = await formatSingleFile(file);
      if (wasChanged) {
        changedCount++;
      }
    } catch (error) {
      console.error(`❌ ${file}:`, error);
      errorCount++;
    }
  }

  reportResults(changedCount, errorCount);
}

formatMarkdownFiles().catch((error) => {
  console.error("❌ Execution failed:", error);
  process.exit(1);
});
