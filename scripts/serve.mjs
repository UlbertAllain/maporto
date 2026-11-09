// Portable local preview for the static export, using only Node.js built-ins.
import http from 'node:http';
import { stat, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../out/', import.meta.url));
const args = process.argv.slice(2);
const option = name => args.includes(name) ? args[args.indexOf(name) + 1] : undefined;
const port = Number(option('--port') || process.env.PORT || 3000);
const host = option('--host') || '127.0.0.1';
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon','.woff2':'font/woff2'};
try { await stat(path.join(root, 'index.html')); } catch { console.error('Folder out belum ada. Jalankan npm run build terlebih dahulu.'); process.exit(1); }
const server = http.createServer(async (request, response) => {
  try {
    if (!['GET','HEAD'].includes(request.method)) { response.writeHead(405, {'Allow':'GET, HEAD'}); response.end(); return; }
    const pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
    let target = path.resolve(root, '.' + pathname);
    if (target !== path.resolve(root) && !target.startsWith(path.resolve(root) + path.sep)) { response.writeHead(403); response.end(); return; }
    if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
    const content = await readFile(target);
    response.writeHead(200, {'Content-Type': types[path.extname(target)] || 'application/octet-stream', 'X-Content-Type-Options':'nosniff'});
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
    response.end(await readFile(path.join(root, '404.html')).catch(() => 'Not found'));
  }
});
server.on('error', error => { console.error(error.code === 'EADDRINUSE' ? `Port ${port} sudah dipakai. Tutup server lain atau ubah PORT.` : error.message); process.exit(1); });
server.listen(port, host, () => console.log(`Static preview: http://localhost:${port}`));
