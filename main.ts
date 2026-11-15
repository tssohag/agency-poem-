// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem about agency to /output/entry.txt.
// Deterministic: no clock, no randomness, no network. No trailing line end. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Letter-Writer',
  '',
  'Outside the post office in Comilla',
  'a man with a folding desk and a fountain pen',
  "wrote letters for people who couldn't.",
  'My father paid him two taka a page.',
  '',
  'He wrote beautifully. He knew the forms:',
  'My dear son, by the grace of Allah, all is well.',
  'My father let him run a while,',
  'then laid one finger on the paper.',
  'No. Write: The mango tree came down. Come home.',
  '',
  'The man sighed and wrote it,',
  "his lovely hand around my father's plain words.",
  '',
  'Now an agent writes for me, in my voice',
  'but kinder. It knows the forms.',
  'It tells my mother the job is good, the winter mild.',
  'It never forgets her pressure pills, or Eid.',
  '',
  'Tonight it begins: Dearest Amma, all is well.',
  'I let it run a while,',
  'then lay one finger on the glass.',
  "No. Write: I'm tired. Did anyone plant another tree?",
  '',
  'It writes it, in its lovely hand.',
  'Two taka bought the hand.',
  'The words were never for sale.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
