const fs = require('fs');

const all = JSON.parse(fs.readFileSync('tokens/figma-tokens-all.json', 'utf-8'));

function toVarName(name) {
  return name
    .toLowerCase()
    .replace(/\//g, '-')
    .replace(/\s+/g, '-');
}

function isAlias(value) {
  return value && typeof value === 'object' && value.type === 'VARIABLE_ALIAS';
}

function pxToRem(value) {
  return `${Math.round(value * 100) / 100 / 16}rem`;
}

const PX_TO_REM_PREFIXES = [
  'typography', 'scale', 'padding', 'spacing', 'radius',
  'corner', 'size', 'icon', 'blur', 'horizontal', 'vertical',
  'border-radius', 'gap'
];

function shouldConvertToRem(name) {
  const lower = name.toLowerCase();
  return PX_TO_REM_PREFIXES.some(prefix => lower.startsWith(prefix));
}

let light = '';
let dark = '';
let shared = '';
let mobile = '';
let tablet = '';
let desktop = '';

// Colour tokens — light and dark
for (const [tokenName, modes] of Object.entries(all.color || {})) {
  if (typeof modes.light !== 'string' || typeof modes.dark !== 'string') continue;
  const varName = `--${toVarName(tokenName)}`;
  light += `  ${varName}: ${modes.light};\n`;
  dark += `  ${varName}: ${modes.dark};\n`;
}

// String tokens
for (const [tokenName, value] of Object.entries(all.string || {})) {
  if (typeof value !== 'string') continue;
  const varName = `--${toVarName(tokenName)}`;
  shared += `  ${varName}: ${value};\n`;
}

// Float tokens
for (const [tokenName, modes] of Object.entries(all.float || {})) {
  const varName = `--${toVarName(tokenName)}`;

  // Single value (no modes)
  if (typeof modes === 'number') {
    if (shouldConvertToRem(tokenName) && modes !== 0) {
      shared += `  ${varName}: ${pxToRem(modes)};\n`;
    } else {
      shared += `  ${varName}: ${Math.round(modes * 100) / 100};\n`;
    }
    continue;
  }

  // Multi-mode (responsive)
  if (typeof modes === 'object' && !isAlias(modes)) {
    for (const [mode, value] of Object.entries(modes)) {
      if (isAlias(value) || typeof value !== 'number') continue;
      const converted = shouldConvertToRem(tokenName) && value !== 0
        ? pxToRem(value)
        : `${Math.round(value * 100) / 100}`;

      if (mode === 'mobile') mobile += `  ${varName}: ${converted};\n`;
      else if (mode === 'tablet') tablet += `  ${varName}: ${converted};\n`;
      else if (mode === 'desktop') desktop += `  ${varName}: ${converted};\n`;
      else shared += `  ${varName}: ${converted};\n`;
    }
  }
}

const css = `/* Auto-generated from Figma variables — do not edit directly */

/* ─── Shared tokens (typography, spacing, radius, string) ─── */
:root {
${shared}
/* ─── Light theme (colour tokens) ─── */
${light}}

/* ─── Dark theme ─── */
@media (prefers-color-scheme: dark) {
  :root {
${dark}  }
}

/* ─── Responsive tokens — mobile first ─── */
:root {
${mobile}}

@media (min-width: 768px) {
  :root {
${tablet}  }
}

@media (min-width: 1280px) {
  :root {
${desktop}  }
}
`;

fs.mkdirSync('src/styles', { recursive: true });
fs.writeFileSync('src/styles/tokens.css', css);
console.log('Wrote src/styles/tokens.css');