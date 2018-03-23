$("").on("click", function(event) {
    event.preventDefault();

var typeofuser = $("#typeofuser").val().trim();

var gender = $("#genderpref").val().trim();

var country = $("#countrypref").val().trim();

var religion = $("#religionpref").val().trim();

var language = $("#languagepref").val().trim();

getResults(typeofuser, gender, country, religion, language);

function getResults(typeofuser, gender, country, religion, language) {
  $.get("/api/" + gender + "/" + country + "/" + religion + "/" + language, function(data) {
    console.log(data);
    renderData(data);
  });
};
};

function renderData(results) {

}
