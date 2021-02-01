const express = require ('express');
const app = express();
const fs = require ('fs');

const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"))

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.listen(PORT, () => {
    console.log(`App listening on PORT: http://localhost:${PORT}`)
});