import Database from "better-sqlite3";
import path from "path";

const db = new Database(path.join(process.cwd(), "database.sqlite"));

db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    institution TEXT,
    password TEXT NOT NULL
  )
`).run();

export default db;
