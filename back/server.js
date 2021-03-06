var express = require("express");
var bodyParser = require("body-parser");
var apiRouter = require("./apiRouter").router;
var cors = require("cors");

var server = express();

server.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', function(req, res){
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("Serveur Awaree demarré...");
});


server.use("/api/", apiRouter);

server.listen(8080, function() {
  console.log("Le serveur a démarré ...");
});
