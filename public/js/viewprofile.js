$(document).ready(function() {
    $.get("/api/:id", function(data) {
      id: req.params.id
      currentViewObject = {};
      currentViewObject = data;
      console.log(currentViewObject);
      renderViewData(data);
    });


function renderViewrData(data) {
  var userName = data[0].firstname + " " + data[0].lastname;
  $(".card-header").empty();
  $("#userName").append(userName);
  $("#introduction").append(data[0].introduction);
  $("#typeOfuser").append("Type of User: " + data[0].typeofuser);
  $("#firstName").append("First Name: " + data[0].firstname);
  $("#lastName").append("Last Name: " + data[0].lastname);
  $("#birthdate").append("Birthdate: " + data[0].birthdate);
  $("#gender").append("Gender: " + data[0].gender);
  $("#email").append("Email: " + data[0].emailaddress);
  $("#country").append("Country: " + data[0].country);
  $("#school").append("School: " + data[0].school);
  $("#religion").append("Religion: " + data[0].religion);
  $("#languages").append("Language: " + data[0].language);
  $("#staylength").append("Stay Length(if traveling): " + data[0].staylength);
  $(".left").append('<img src= " ' + data[0].profilepicture + ' " class="img-thumbnail" />');
};
