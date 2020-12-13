const path = require('path')
const notesData = require('../db/db.json')

module.exports = (app) => {
    console.log("api routes is running");
    app.get('/api/notes', (req, res) => {
        res.json(notesData);
    });
}