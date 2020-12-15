const router = require('express').Router();
const path = require('path');
const notesData = path.join(__dirname, '../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {
    console.log("api routes is running");
    fs.readFile(notesData, "utf8", (err, data) => {
        if (err) throw err;
        return res.json(JSON.parse(data))
    });
});

module.exports = router;