const router = require('express').Router();
const { nanoid } = require("nanoid")
let id = nanoid(7);
const path = require('path');
const notesData = path.join(__dirname, '../db/db.json');
const fs = require('fs');

router.get("/notes", (req, res) => {
    fs.readFile(notesData, "utf8", (err, data) => {
      if (err) throw err;
      const parsedData = JSON.parse(data);
      res.send(parsedData);
    });
  });

router.post("/notes", (req, res) => {
    fs.readFile(notesData, "utf8", (err, data) => {
      if (err) throw err;
      const notes = JSON.parse(data);
        console.log("read notes")
      notes.push({
        title: req.body.title,
        text: req.body.text,
        id: id,
      });
  
      fs.writeFile(notesData, JSON.stringify(notes), (err) => {
        if (err) return res.send("failed to add");
        console.log("wrote notes")
        return res.json({ msg: "success" });
      });
    });
  });

  module.exports = router;