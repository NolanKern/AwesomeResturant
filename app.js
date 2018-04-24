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

app.get("/api/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// app.get("/api/tables/:tables", function(req, res) {
//   var chosen = req.params.tables;

//   console.log(chosen);

//   for (var i = 0; i < tables.length; i++) {
//     if (chosen === tables[i].routeName) {
//       return res.json(tables[i]);
//     }
//   }

//   return res.json(false);
});

// Create New Reservation - takes in JSON input
app.post("/api/tables", function(req, res) {
  var newreserve = req.body;
  newreserve.routeName = newreserve.name.replace(/\s+/g, "").toLowerCase();
  console.log(newreserve);
  tables.push(newreserve);
  res.json(newreserve);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
