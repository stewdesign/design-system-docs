const fs = require('fs');

const tokens = JSON.parse(fs.readFileSync('tokens/figma-tokens.json', 'utf-8'));

function toVarName(tokenName) {
  return tokenName
    .toLowerCase()
    .replace(/\//g, '-')
    .replace(/\s+/g, '-');
}

let light = '';
let dark = '';

for (const [tokenName, modes] of Object.entries(tokens)) {
  if (typeof modes.light !== 'string' || typeof modes.dark !== 'string') continue;
  const varName = `--${toVarName(tokenName)}`;
  light += `  ${varName}: ${modes.light};\n`;
  dark += `  ${varName}: ${modes.dark};\n`;
}

const css = `/* Auto-generated from tokens/figma-tokens.json — do not edit directly */

:root {
${light}}

@media (prefers-color-scheme: dark) {
  :root {
${dark}  }
}
`;

fs.mkdirSync('src/styles', { recursive: true });
fs.writeFileSync('src/styles/tokens.css', css);
console.log('Wrote src/styles/tokens.css');