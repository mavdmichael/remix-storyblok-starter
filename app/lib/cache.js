const sqlite3 = require("sqlite3");

class Cache {
  // private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database("./db/cache.db", (err) => {
      if (err) {
        console.error("👮 Can't connect to cache database.");
      } else {
        console.log("📦 Connected to cache database.");
        this.createTable();
      }
    });
  }

  // private createTable() {
  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS cache (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        external_id INTEGER,
        slug TEXT,
        data TEXT,
        expiration INTEGER
      )
    `;
    this.db.run(sql);
  }

  // public has(external_id: number, slug: string): Promise<boolean> {
  has(slug) {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT *
        FROM cache
        WHERE slug = ?
      `;
      this.db.get(sql, [slug], (err, row) => {
        if (err) {
          console.error(err);
          resolve(false);
        } else {
          resolve(row);
        }
      });
    });
  }

  // public add(
  //   external_id: number,
  //   slug: string,
  //   data: string,
  //   expiration = 604800
  // ): void {
  add(external_id, slug, data, expiration = 604800) {
    const sql = `
      INSERT INTO cache (external_id, slug, data, expiration)
      VALUES (?, ?, ?, strftime('%s', 'now') + ?)
    `;
    this.db.run(sql, [external_id, slug, data, expiration]);
  }

  // public clear(): void {
  clear() {
    const sql = "DELETE FROM cache";
    this.db.run(sql);
  }
}

// export default Cache;
module.exports = Cache;
