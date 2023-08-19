const databaseCon = require('../models/db.model');

function verifyApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) { return res.status(401).json({ error: 'Unauthorized' }); }
    const query = `SELECT * FROM auth WHERE apiKey = ?`;
    databaseCon.query(query, [apiKey], (err, results) => {
        if (err) {
            console.error('Error in the query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid API key' });
        }
        req.user = results[0];
        next();
    });
}

module.exports = verifyApiKey;