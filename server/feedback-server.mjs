#!/usr/bin/env node
// feedback-server — 零依赖留言服务（Node 22+，无 npm 依赖）
// 作用：接收访客留言（写入待审核队列），提供已审核留言查询
// 运行：node server/feedback-server.mjs --port 3900 --data /var/lib/bs-portfolio-feedback
// nginx: location /api/ { proxy_pass http://127.0.0.1:3900; }
// 安全：字段长度硬校验 + 简单限速（同 IP 每分钟 5 条）+ 无任何依赖面

import { http } from 'node:http';
import { fs } from 'node:fs';
import { path } from 'node:path';

const args = process.argv.slice(2);
const arg = (k, d) => {
  const i = args.indexOf(k);
  return i >= 0 && args[i + 1] ? args[i + 1] : d;
};
const PORT = Number(arg('--port', 3900));
const DATA_DIR = path.resolve(arg('--data', './feedback-data'));
const PENDING = path.join(DATA_DIR, 'pending');
const APPROVED = path.join(DATA_DIR, 'approved');

for (const d of [PENDING, APPROVED]) fs.mkdirSync(d, { recursive: true });

const RATE = new Map(); // ip -> timestamps[]
const rateOk = (ip) => {
  const now = Date.now();
  const arr = (RATE.get(ip) ?? []).filter((t) => now - t < 60_000);
  if (arr.length >= 5) return false;
  arr.push(now);
  RATE.set(ip, arr);
  return true;
};
const clean = (s, max) => String(s ?? '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, max);

const server = http.createServer(async (req, res) => {
  const ip = req.socket.remoteAddress ?? '?';
  const send = (code, body) => {
    res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify(body));
  };
  if (req.method === 'OPTIONS') return send(204, {});

  // POST /api/feedback —— 访客留言入库（待审核）
  if (req.method === 'POST' && req.url === '/api/feedback') {
    if (!rateOk(ip)) return send(429, { ok: false, error: '发言太快，歇一会' });
    let raw = '';
    req.on('data', (c) => { raw += c; if (raw.length > 4096) req.destroy(); });
    req.on('end', () => {
      try {
        const b = JSON.parse(raw);
        const rec = {
          project: clean(b.project, 64),
          nick: clean(b.nick, 24) || '匿名',
          text: clean(b.text, 200),
          ip,
          at: new Date().toISOString(),
        };
        if (!rec.project || !rec.text) return send(400, { ok: false, error: '项目与内容必填' });
        const file = path.join(PENDING, `${rec.project}-${Date.now()}.json`);
        fs.writeFileSync(file, JSON.stringify(rec, null, 2));
        send(200, { ok: true, message: '已收到，审核通过后上弹幕' });
      } catch {
        send(400, { ok: false, error: 'JSON 无效' });
      }
    });
    return;
  }

  // GET /api/feedback?project=xxx —— 已审核留言（站点构建前拉取用）
  if (req.method === 'GET' && req.url.startsWith('/api/feedback')) {
    const q = new URL(req.url, 'http://x').searchParams;
    const project = q.get('project');
    const out = [];
    for (const f of fs.readdirSync(APPROVED)) {
      if (!f.endsWith('.json')) continue;
      const r = JSON.parse(fs.readFileSync(path.join(APPROVED, f), 'utf8'));
      if (!project || r.project === project) out.push({ nick: r.nick, text: r.text, at: r.at });
    }
    return send(200, { ok: true, items: out });
  }

  send(404, { ok: false, error: 'not found' });
});

server.listen(PORT, '127.0.0.1', () => console.log(`feedback-server on 127.0.0.1:${PORT}，数据目录 ${DATA_DIR}`));
