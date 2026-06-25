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

function isAlias(value) {
  return value && typeof value === 'object' && value.type === 'VARIABLE_ALIAS';
}

function resolveValue(value, variables) {
  if (value && value.type === 'VARIABLE_ALIAS') {
    const ref = variables[value.id];
    if (ref) {
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

  const colorTokens = {};
  const singleTokens = { string: {}, float: {} };

  Object.values(variables).forEach(variable => {
    const collection = collections[variable.variableCollectionId];
    if (!collection) return;

    if (variable.resolvedType === 'COLOR') {
      const tokenName = variable.name;
      colorTokens[tokenName] = {};
      Object.entries(variable.valuesByMode).forEach(([modeId, value]) => {
        const modeName = resolveModeId(collection, modeId);
        colorTokens[tokenName][modeName] = resolveValue(value, variables);
      });
    }

    if (variable.resolvedType === 'STRING') {
      const firstMode = Object.values(variable.valuesByMode)[0];
      const resolved = resolveValue(firstMode, variables);
      if (resolved && typeof resolved === 'string') {
        singleTokens.string[variable.name] = resolved;
      }
    }

if (variable.resolvedType === 'FLOAT') {
      const collection = collections[variable.variableCollectionId];
      const modeCount = Object.keys(variable.valuesByMode).length;

      if (modeCount === 1) {
        // Single mode — store as plain value
        const firstMode = Object.values(variable.valuesByMode)[0];
        const resolved = resolveValue(firstMode, variables);
        if (resolved !== null && resolved !== undefined && !isAlias(resolved)) {
          singleTokens.float[variable.name] = resolved;
        }
      } else {
        // Multiple modes — store as object with mode names as keys
        const modeValues = {};
        Object.entries(variable.valuesByMode).forEach(([modeId, value]) => {
          const modeName = resolveModeId(collection, modeId);
          const resolved = resolveValue(value, variables);
          if (resolved !== null && resolved !== undefined && typeof resolved === 'number') {
            modeValues[modeName] = resolved;
          }
        });
        if (Object.keys(modeValues).length > 0) {
          singleTokens.float[variable.name] = modeValues;
        }
      }
    }
  });

  fs.writeFileSync('tokens/figma-tokens.json', JSON.stringify(colorTokens, null, 2));
  console.log(`Wrote ${Object.keys(colorTokens).length} colour tokens to tokens/figma-tokens.json`);

  fs.writeFileSync('tokens/figma-tokens-all.json', JSON.stringify({ color: colorTokens, string: singleTokens.string, float: singleTokens.float }, null, 2));
  console.log(`Wrote all tokens to tokens/figma-tokens-all.json`);
}

main().catch(err => { console.error(err); process.exit(1); });