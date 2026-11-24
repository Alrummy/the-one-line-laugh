const fs = require('fs');
const path = require('path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });

// Angle: a houseplant outlasts every New Year's resolution — a one-line brag with a dash.
const text = "I've kept a houseplant alive for six months now — six months longer than any of my New Year's resolutions.";
fs.writeFileSync(path.join(outDir, 'entry.txt'), text + '\n');
