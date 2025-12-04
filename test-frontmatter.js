const fs = require("fs");
const yaml = require("js-yaml");

const filePath =
  "src/freecodecamp/daily/december/permutation-count/permutation-count-explanation.md";
const content = fs.readFileSync(filePath, "utf8");

console.log("File starts with:", JSON.stringify(content.slice(0, 50)));
console.log("Starts with ---:", content.startsWith("---"));
console.log("Has BOM:", content.charCodeAt(0) === 0xfeff);

const match = content.match(/^---\s*([\s\S]*?)---/);
console.log("Regex match found:", !!match);

if (match) {
  console.log("YAML content:", match[1].slice(0, 100));
  try {
    const data = yaml.load(match[1]);
    console.log("Parsed frontmatter:", JSON.stringify(data, null, 2));
  } catch (e) {
    console.log("YAML parse error:", e.message);
  }
} else {
  console.log("No match found");
}
