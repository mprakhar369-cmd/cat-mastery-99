// CAT Mastery 99 — benchmark sync worker (Cloudflare Workers + D1, no deps).
// Endpoints:
//   POST /api/attempts   {client_id, kind, title, score, max, acc}  (SYNC_SECRET required)
//   GET  /api/benchmarks?kind=mock        -> {n, p50, p90, avgAcc} per kind from last 30 days
// Deploy: 1) npx wrangler d1 create cat-mastery-bench
//         2) paste database_id into wrangler.toml + run schema.sql via d1 execute
//         3) npx wrangler secret put SYNC_SECRET
//         4) npx wrangler deploy
//         5) in the app: localStorage cat_sync_url = "https://<worker>.workers.dev", cat_sync_secret = "<same>"

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'access-control-allow-origin': '*',
          'access-control-allow-methods': 'GET, POST, OPTIONS',
          'access-control-allow-headers': 'content-type, x-sync-secret'
        }
      });
    }

    if (url.pathname === '/api/attempts' && request.method === 'POST') {
      if (request.headers.get('x-sync-secret') !== env.SYNC_SECRET) {
        return json({ error: 'unauthorized' }, 401);
      }
      let b;
      try { b = await request.json(); } catch { return json({ error: 'bad json' }, 400); }
      const { client_id, kind, title, score, max, acc } = b;
      if (!client_id || !kind) return json({ error: 'client_id and kind required' }, 400);
      await env.DB.prepare(
        'INSERT INTO attempts (client_id, kind, title, score, max, acc) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(String(client_id).slice(0, 64), String(kind).slice(0, 16), String(title || '').slice(0, 120),
        Math.max(0, parseInt(score) || 0), Math.max(0, parseInt(max) || 0),
        Math.min(100, Math.max(0, parseInt(acc) || 0))).run();
      return json({ ok: true });
    }

    if (url.pathname === '/api/benchmarks' && request.method === 'GET') {
      const kind = (url.searchParams.get('kind') || 'mock').slice(0, 16);
      const row = await env.DB.prepare(
        `SELECT COUNT(*) n, AVG(acc) avgAcc FROM attempts
         WHERE kind = ? AND created_at > datetime('now', '-30 days')`
      ).bind(kind).first();
      const p = await env.DB.prepare(
        `SELECT acc FROM attempts WHERE kind = ? AND created_at > datetime('now', '-30 days')
         ORDER BY acc`
      ).bind(kind).all();
      const accs = (p.results || []).map(r => r.acc).sort((a, b) => a - b);
      const pct = (q) => accs.length ? accs[Math.min(accs.length - 1, Math.floor(q * accs.length))] : null;
      return json({ kind, n: row.n || 0, avgAcc: Math.round(row.avgAcc || 0), p50: pct(0.5), p90: pct(0.9) });
    }

    return json({ ok: true, service: 'cat-mastery-bench' });
  }
};
