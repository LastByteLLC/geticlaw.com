CREATE TABLE IF NOT EXISTS feedback (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  message     TEXT NOT NULL,
  category    TEXT,
  app_version TEXT,
  created_at  TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS crash_logs (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  report      TEXT NOT NULL,
  app_version TEXT,
  os_version  TEXT,
  device      TEXT,
  created_at  TEXT NOT NULL DEFAULT (datetime('now'))
);
