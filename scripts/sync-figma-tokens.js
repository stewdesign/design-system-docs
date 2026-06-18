const fs = require('fs');
const https = require('https');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;

if (!FIGMA_TOKEN || !FIGMA_FILE_ID) {
  console.error('Missing FIGMA_TOKEN or FIGMA_FILE_ID environment variables');
  process.exit(1);
}

function fetchFigmaVariables() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: `/v1/files/${FIGMA_FILE_ID}/variables/local`,
      headers: { 'X-Figma-Token': FIGMA_TOKEN }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

function resolveModeId(collection, modeId) {
  const mode = collection.modes.find(m => m.modeId === modeId);
  return mode ? mode.name.toLowerCase().replace(/\s+/g, '-') : modeId;
}

function resolveValue(value, variables) {
  if (value && value.type === 'VARIABLE_ALIAS') {
    const ref = variables[value.id];
    if (ref && ref.resolvedType === 'COLOR') {
      const firstMode = Object.values(ref.valuesByMode)[0];
      return resolveValue(firstMode, variables);
    }
  }
  if (value && typeof value === 'object' && 'r' in value) {
    const r = Math.round(value.r * 255);
    const g = Math.round(value.g * 255);
    const b = Math.round(value.b * 255);
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`.toUpperCase();
  }
  return value;
}

async function main() {
  console.log('Fetching variables from Figma...');
  const data = await fetchFigmaVariables();

  if (data.error) {
    console.error('Figma API error:', data.error);
    process.exit(1);
  }

  console.log('Collections found:');
  Object.values(data.meta.variableCollections).forEach(c => {
    console.log(` - ${c.name}: modes = ${c.modes.map(m => `${m.name} (${m.modeId})`).join(', ')}`);
  });

  const variables = data.meta.variables;
  const collections = data.meta.variableCollections;
  const output = {};

  Object.values(variables).forEach(variable => {
    if (variable.resolvedType !== 'COLOR') return;
    const collection = collections[variable.variableCollectionId];
    if (!collection) return;

    const tokenName = variable.name.replace(/\//g, '/');
    output[tokenName] = {};

    Object.entries(variable.valuesByMode).forEach(([modeId, value]) => {
      const modeName = resolveModeId(collection, modeId);
      output[tokenName][modeName] = resolveValue(value, variables);
    });
  });

  fs.writeFileSync('tokens/figma-tokens.json', JSON.stringify(output, null, 2));
  console.log(`Wrote ${Object.keys(output).length} tokens to tokens/figma-tokens.json`);
}

main().catch(err => { console.error(err); process.exit(1); });