#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ignore = require('ignore')();
if (fs.existsSync('.gitignore')) {
  ignore.add(fs.readFileSync('.gitignore', 'utf8'));
}
ignore.add('.git');
const outputFile = process.argv[2] || 'vibe_dump.md';
ignore.add('vibe_dump.md'); // Always ignore default output
ignore.add(outputFile); // Also ignore the specified output file
let output = '# Project Structure\n```\n';
function walk(dir, depth = 0) {
  const indent = '  '.repeat(depth);
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const relPath = path.relative('.', fullPath);
    if (ignore.ignores(relPath) || fullPath.includes('.git')) return;
    if (fs.statSync(fullPath).isDirectory()) {
      output += `${indent}Dir: ${fullPath}\n`;
      walk(fullPath, depth + 1);
    } else {
      output += `${indent}File: ${fullPath}\n`;
    }
  });
}
walk('.');
output += '```\n\n# File Contents\n';
function walkFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const relPath = path.relative('.', fullPath);
    if (ignore.ignores(relPath) || fullPath.includes('.git')) return;
    if (fs.statSync(fullPath).isDirectory()) {
      walkFiles(fullPath);
    } else {
      output += `## File: ${fullPath}\n\`\`\`\n`;
      const content = fs.readFileSync(fullPath, 'utf8');
      const escapedContent = content.replace(/```/g, '\\`\\`\\`');
      output += escapedContent + '\n';
      output += '```\n\n';
    }
  });
}
walkFiles('.');
fs.writeFileSync(outputFile, output);
console.log(`Output written to ${outputFile}`);