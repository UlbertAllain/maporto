import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
// Translate optional preview-host arguments; normal Windows usage is npm run dev.
const args = process.argv.slice(2).filter(arg => arg !== '--strictPort').map(arg => arg === '--host' ? '--hostname' : arg);
const child = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'dev', '--webpack', ...args], { stdio: 'inherit' });
child.on('error', error => { console.error(error.message); process.exitCode = 1; });
child.on('exit', code => { process.exitCode = code ?? 1; });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
