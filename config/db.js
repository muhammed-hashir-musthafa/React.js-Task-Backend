const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS notes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      value TEXT NOT NULL,
      date DATETIME NOT NULL
    )
  `;

  db.query(createTableQuery, (err) => {
    if (err) console.error("Table creation failed:", err.stack);
    else console.log("Table 'notes' is ready.");
  });
});

module.exports = db;
