const express = require("express");
const bodyParser = require("body-parser");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api", bookingRoutes);

module.exports = app;