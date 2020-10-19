const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./src/routes/v1");

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", router);

app.listen(() => {
    console.log("Aplication running on port " + port);
});
