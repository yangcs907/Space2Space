// this file will provide routes for the various html pages we will be forming
var path = require("path");

// Routes

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });
  // below are templates for further html routes
  app.get("/profiles", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profiles.html"))
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"))
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"))
  });

  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-up.html"))
  });

  app.get("/user-profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-profile.html"))
  });

  app.get("/my-profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/my-profile.html"))
  });

  app.get("/resources", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/resources.html"))
  });

  app.get("/api/:id", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/view-profile.html"))
  });



};
