const fs = require ('fs');
const express = require ('express');
const app = express();

const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
const PORT = 8080;

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App listening on PORT: http://localhost:${PORT}`)
});