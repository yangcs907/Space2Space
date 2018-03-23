
var db = require("../models");


module.exports = function(app) {

  app.post("/api/add", function(req, res) {
  console.log(req.body);
  db.User.create({
    typeofuser: req.body.typeofuser,
  	firstname: req.body.firstname,
    lastname: req.body.lastname,
    profilepicture: req.body.profilepicture,
    birthdate: req.body.birthdate,
    gender: req.body.gender,
    emailaddress: req.body.emailaddress,
    country: req.body.country,
    school: req.body.school,
    religion: req.body.religion,
    language: req.body.language,
    staylength: req.body.staylength,
    introduction: req.body.introduction
  })
  .then(function(dbUser) {
    res.json(dbUser);
  });
});

  app.post("/api/currentUser", function(req, res) {
    console.log(req.body);
    db.currentUser.create({
      typeofuser: req.body.typeofuser,
    	firstname: req.body.firstname,
      lastname: req.body.lastname,
      profilepicture: req.body.profilepicture,
      birthdate: req.body.birthdate,
      gender: req.body.gender,
      emailaddress: req.body.emailaddress,
      country: req.body.country,
      school: req.body.school,
      religion: req.body.religion,
      language: req.body.language,
      staylength: req.body.staylength,
      introduction: req.body.introduction
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/getcurrent", function(req, res) {
    db.currentUser.findAll({})
    .then(function(dbGet) {
      res.json(dbGet);
    });
  });

  app.get("/api/search/:typeofuser/:country/:religion/:language", function(req, res) {
        db.User.findAll({
          where: {
            typeofuser: req.params.typeofuser,
            country: req.params.country,
            religion: req.params.religion,
            language: req.params.language
          }
        }).then(function(results) {
          res.json(results);
        });
    });

    app.get("/api/match/:country/:religion/:language", function(req, res) {
          db.User.findAll({
            where: {
              country: req.params.country,
              religion: req.params.religion,
              language: req.params.language
            }
          }).then(function(results) {
            res.json(results);
          });
      });

    app.get("api/:id", function(req, res) {
      db.User.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(results) {
        res.json(results);
      });
    });
};
