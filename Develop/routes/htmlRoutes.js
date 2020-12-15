const path = require('path');
const router = require('express').Router();

    // console.log("html routes is running")
router.get('/', (req, res) => {
    console.log("html routes is running");
    res.sendFile(path.join(__dirname, '../public/index.html'))
    });
router.get('/notes', (req, res) => {
    console.log("html/notes routes is running");
    res.sendFile(path.join(__dirname, '../public/notes.html'))
    });

router.get("/assets/js/index.js", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
    })

module.exports = router;