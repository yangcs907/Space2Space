var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  var currentUser = sequelize.define("currentUser", {
  	typeofuser: DataTypes.STRING,
  	firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    profilepicture: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    gender: DataTypes.STRING,
    emailaddress: DataTypes.STRING,
    country: DataTypes.STRING,
    school: DataTypes.STRING,
    religion: DataTypes.STRING,
    language: DataTypes.STRING,
    staylength: DataTypes.STRING,
    introduction: DataTypes.STRING
});

  return currentUser;


};
