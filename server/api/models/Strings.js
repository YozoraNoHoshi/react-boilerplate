const db = require('../../db.js');

class Strings {
  static async addString(string) {
    const result = await db.query(
      `INSERT INTO strings (string) VALUES ($1) RETURNING string`,
      [string],
    );
    return result.rows[0].string;
  }

  static async getStrings() {
    const result = await db.query(`SELECT string FROM strings`);
    return result.rows.map(s => s.string);
  }
}

module.exports = Strings;
