 const db = require('../config/db');

exports.getNotes = (req, res) => {
    db.query('SELECT * FROM notes', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.addNote = (req, res) => {
    const { value, date } = req.body;
    db.query('INSERT INTO notes (value, date) VALUES (?, ?)', [value, date], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, value, date });
    });
};

exports.deleteNote = (req, res) => {
    const noteId = req.params.id;
    db.query('DELETE FROM notes WHERE id = ?', [noteId], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(204).send();
    });
};

