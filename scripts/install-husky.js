import { exec } from 'child_process';
import fs from 'fs';

if (!fs.existsSync('.husky/_/husky.sh')) {
  exec('husky install').stdout.pipe(process.stdout);
} else {
  console.log('husky already installed');
}

if (!fs.existsSync('.husky/pre-commit')) {
  exec('husky add .husky/pre-commit "echo \'eslint checking...\'\nnpx lint-staged"').stdout.pipe(
    process.stdout,
  );
} else {
  console.log('husky pre-commit exists');
}
