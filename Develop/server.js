const fs = require ('fs');
const express = require ('express');
const app = express();
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")
const PORT = 8080;

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App listening on PORT: http://localhost:${PORT}`)
});