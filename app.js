const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Create New Reservation - takes in JSON input
app.post("/api/tables", function(req, res) {
  let newreserve = req.body;
  console.log(newreserve);
  tables.push(newreserve);
  return res.json(newreserve);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
