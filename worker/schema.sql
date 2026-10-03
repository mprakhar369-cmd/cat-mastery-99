-- CAT Mastery 99 — benchmark backend schema (Cloudflare D1)
-- Setup: npx wrangler d1 create cat-mastery-bench  -> paste database_id into wrangler.toml
--        npx wrangler d1 execute cat-mastery-bench --file=./schema.sql

CREATE TABLE IF NOT EXISTS attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id TEXT NOT NULL,
  kind TEXT NOT NULL,            -- daily | topic | mock | trap | triage | recall | pyq
  title TEXT NOT NULL DEFAULT '',
  score INTEGER NOT NULL DEFAULT 0,
  max INTEGER NOT NULL DEFAULT 0,
  acc INTEGER NOT NULL DEFAULT 0, -- accuracy percent 0-100
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_attempts_kind_acc ON attempts(kind, acc);
CREATE INDEX IF NOT EXISTS idx_attempts_created ON attempts(created_at);

CREATE TABLE IF NOT EXISTS daily_activity (
  day TEXT NOT NULL,
  client_id TEXT NOT NULL,
  attempted INTEGER NOT NULL DEFAULT 0,
  correct INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, client_id)
);
