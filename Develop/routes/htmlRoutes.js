const path = require('path')

module.exports = (app) => {
    console.log("html routes is running")
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });
};