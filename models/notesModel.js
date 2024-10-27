const db = require("../config/db");

exports.findAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM notes", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.create = (note) => {
  const { value, date } = note;
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO notes (value, date) VALUES (?, ?)",
      [value, date],
      (err, result) => {
        if (err) return reject(err);
        resolve({ id: result.insertId, value, date });
      }
    );
  });
};

exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM notes WHERE id = ?", [id], (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};
