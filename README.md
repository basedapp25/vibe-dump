# vibe-dump

A CLI utility to dump your project’s directory structure and file contents into a Markdown file, respecting `.gitignore`. Handy when Cursor and Windsurf agents fail you and you need to talk to Grok3 or anything else chat bots in a browser but don't want to copy paste individual files. Let's stop shlepping for AI!

Create a dump markdown file and add that as an attachment to your 3rd party AI chat bot

## Features
- Outputs project structure and file contents in a clean Markdown format.
- Respects `.gitignore` to exclude unwanted files (e.g., `.git`, `node_modules`).
- Customizable output file name (defaults to `project_dump.md`).

## Installation
Install globally via npm:  
```bash
npm install -g vibe-dump
```

## Usage
Run in your project directory:  
```bash
vibe-dump [output-file]
```
- `[output-file]`: Optional. Name of the output Markdown file (e.g., `my_dump.md`). Defaults to `project_dump.md`.  
- Example: `vibe-dump my_project.md`

### Output Format
- `# Project Structure`: Directory tree with files and folders (excluding `.gitignore` patterns).  
- `# File Contents`: Each file’s contents in a separate code block.

## Example
```bash
vibe-dump my_project.md
```
Generates `my_project.md` with:  
```markdown
# Project Structure
```
File: ./index.html
File: ./main.js
Dir: ./js
  Dir: ./js/scenes
    File: ./js/scenes/mainScene.js
```

# File Contents
## File: ./index.html
```
<!DOCTYPE html>
<html>
...
```
## File: ./main.js
```
console.log('Hello');
...
```
```

## Contributing
1. Fork the repo: [github.com/yourusername/vibe-dump](https://github.com/yourusername/vibe-dump)  
2. Create a feature branch: `git checkout -b my-feature`  
3. Commit changes: `git commit -m "Add feature"`  
4. Push: `git push origin my-feature`  
5. Open a pull request.

## License
MIT License.

## Author
Arch Valmiki