const fs = require ('fs');
const express = require ('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));