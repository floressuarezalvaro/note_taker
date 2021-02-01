const router = require('express').Router();
const path = require('path');

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
router.get("/assets/css/styles.css", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
})

module.exports = router;