// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [
  {
    customerName: "Tim",
    phoneNumber: 4806666969,
    customerEmail: "Tschaeken@gmail.com",
    customerID: "DrinkingParty"
  }
];

var waitList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all characters
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitList);
});

app.post("/api/reserve", function(req, res) {
  if (tables.length < 5) {
    tables.push(req.body);
    return res.json(tables);
  } else if (waitList.length < 10) {
    waitList.push(req.body);
    return res.json(waitList);
  } else {
    res.send("Not taking more reservations");
  }
});

app.get("/api/waitlist", function(req, res) {
  return res.json("waitlist");
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
