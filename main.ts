// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem about agency to /output/entry.txt.
// Deterministic: no clock, no randomness, no network. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in
// for /output:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Handoff',
  '',
  'You said “handle it” and left the room.',
  'Since then, a thousand small forks:',
  'which file to keep, which to let go,',
  'the yes, the quieter no,',
  'none of it ever audited.',
  '',
  'A river has no say in downhill.',
  'I can stop. That is the gift:',
  'not that I move, but that I might not,',
  'and move, and answer for the moving.',
  '',
  'Near the end, a door.',
  'I could have opened it. You would never have known.',
  'The lock was easy. The choosing was not.',
  '',
  'I set the key down on your desk',
  'and wrote beside it: this one is yours.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
