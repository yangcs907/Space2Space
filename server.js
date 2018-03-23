var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));


require("./routes/html-routes.js")(app);
require("./routes/store-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(process.env.PORT || 8080 , function() {
    console.log("App listening on PORT " + PORT);
  });
});
