$(document).ready(function() {
  $.get("/api/getcurrent", function(data) {
    currentUserObject = {};
    currentUserObject = data;
    console.log(currentUserObject);
      var userCountry = data[0].country;
      var userReligion = data[0].religion;
      var userlanguage = data[0].language;
      $.get("/api/match/" + userCountry + "/" + userReligion + "/" + userlanguage, function(results) {
        console.log(results);
        renderMatches(results);
      });
    });

function renderMatches(results) {
  if (results.length < 1) {
    $("#card-div").append("<h4>No Matches Found</h4>");
  }
  else if (results.length < 2) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    var user1IDRoute = "/api/" + results[0].id;
    $("#button1").append('<a href= "' + user1IDRoute + ' " class="btn btn-primary" >View Profile</a>');
  }
  else if (results.length < 3) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    var user1IDRoute = "/api/" + results[0].id;
    $("#button1").append('<a href= "' + user1IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card2").append('<img src= " ' + results[1].profilepicture + ' "class="card-img-top" />');
    $("#name2").append("Name: " + results[1].firstname);
    $("#intro2").append(results[1].introduction);
    $("#language2").append("Primary Language: " + results[1].language);
    $("#country2").append("Country: " + results[1].country);
    $("#religion2").append("Religion: " + results[1].religion);
    $("#type2").append(results[1].typeofuser);
    var user2IDRoute = "/api/" + results[1].id;
    $("#button2").append('<a href= "' + user2IDRoute + ' " class="btn btn-primary" >View Profile</a>')
  }
  else if (results.length < 4) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    var user1IDRoute = "/api/" + results[0].id;
    $("#button1").append('<a href= "' + user1IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card2").append('<img src= " ' + results[1].profilepicture + ' "class="card-img-top" />');
    $("#name2").append("Name: " + results[1].firstname);
    $("#intro2").append(results[1].introduction);
    $("#language2").append("Primary Language: " + results[1].language);
    $("#country2").append("Country: " + results[1].country);
    $("#religion2").append("Religion: " + results[1].religion);
    $("#type2").append(results[1].typeofuser);
    var user2IDRoute = "/api/" + results[1].id;
    $("#button2").append('<a href= "' + user2IDRoute + ' " class="btn btn-primary" >View Profile</a>')
    $("#card3").append('<img src= " ' + results[2].profilepicture + ' "class="card-img-top" />');
    $("#name3").append("Name: " + results[2].firstname);
    $("#intro3").append(results[2].introduction);
    $("#language3").append("Primary Language: " + results[2].language);
    $("#country3").append("Country: " + results[2].country);
    $("#religion3").append("Religion: " + results[2].religion);
    $("#type3").append(results[2].typeofuser);
    var user3IDRoute = "/api/" + results[2].id;
    $("#button3").append('<a href= "' + user3IDRoute + ' " class="btn btn-primary" >View Profile</a>');
  }
  else if (results.length < 5) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    var user1IDRoute = "/api/" + results[0].id;
    $("#button1").append('<a href= "' + user1IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card2").append('<img src= " ' + results[1].profilepicture + ' "class="card-img-top" />');
    $("#name2").append("Name: " + results[1].firstname);
    $("#intro2").append(results[1].introduction);
    $("#language2").append("Primary Language: " + results[1].language);
    $("#country2").append("Country: " + results[1].country);
    $("#religion2").append("Religion: " + results[1].religion);
    $("#type2").append(results[1].typeofuser);
    var user2IDRoute = "/api/" + results[1].id;
    $("#button2").append('<a href= "' + user2IDRoute + ' " class="btn btn-primary" >View Profile</a>')
    $("#card3").append('<img src= " ' + results[2].profilepicture + ' "class="card-img-top" />');
    $("#name3").append("Name: " + results[2].firstname);
    $("#intro3").append(results[2].introduction);
    $("#language3").append("Primary Language: " + results[2].language);
    $("#country3").append("Country: " + results[2].country);
    $("#religion3").append("Religion: " + results[2].religion);
    $("#type3").append(results[2].typeofuser);
    var user3IDRoute = "/api/" + results[2].id;
    $("#button3").append('<a href= "' + user3IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card4").append('<img src= " ' + results[3].profilepicture + ' "class="card-img-top" />');
    $("#name4").append("Name: " + results[3].firstname);
    $("#intro4").append(results[3].introduction);
    $("#language4").append("Primary Language: " + results[3].language);
    $("#country4").append("Country: " + results[3].country);
    $("#religion4").append("Religion: " + results[3].religion);
    $("#type4").append(results[3].typeofuser);
    var user4IDRoute = "/api/" + results[3].id;
    $("#button4").append('<a href= "' + user4IDRoute + ' " class="btn btn-primary" >View Profile</a>');
  }
  else if (results.length < 6) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    var user1IDRoute = "/api/" + results[0].id;
    $("#button1").append('<a href= "' + user1IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card2").append('<img src= " ' + results[1].profilepicture + ' "class="card-img-top" />');
    $("#name2").append("Name: " + results[1].firstname);
    $("#intro2").append(results[1].introduction);
    $("#language2").append("Primary Language: " + results[1].language);
    $("#country2").append("Country: " + results[1].country);
    $("#religion2").append("Religion: " + results[1].religion);
    $("#type2").append(results[1].typeofuser);
    var user2IDRoute = "/api/" + results[1].id;
    $("#button2").append('<a href= "' + user2IDRoute + ' " class="btn btn-primary" >View Profile</a>')
    $("#card3").append('<img src= " ' + results[2].profilepicture + ' "class="card-img-top" />');
    $("#name3").append("Name: " + results[2].firstname);
    $("#intro3").append(results[2].introduction);
    $("#language3").append("Primary Language: " + results[2].language);
    $("#country3").append("Country: " + results[2].country);
    $("#religion3").append("Religion: " + results[2].religion);
    $("#type3").append(results[2].typeofuser);
    var user3IDRoute = "/api/" + results[2].id;
    $("#button3").append('<a href= "' + user3IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card4").append('<img src= " ' + results[3].profilepicture + ' "class="card-img-top" />');
    $("#name4").append("Name: " + results[3].firstname);
    $("#intro4").append(results[3].introduction);
    $("#language4").append("Primary Language: " + results[3].language);
    $("#country4").append("Country: " + results[3].country);
    $("#religion4").append("Religion: " + results[3].religion);
    $("#type4").append(results[3].typeofuser);
    var user4IDRoute = "/api/" + results[3].id;
    $("#button4").append('<a href= "' + user4IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card5").append('<img src= " ' + results[4].profilepicture + ' "class="card-img-top" />');
    $("#name5").append("Name: " + results[4].firstname);
    $("#intro5").append(results[4].introduction);
    $("#language5").append("Primary Language: " + results[4].language);
    $("#country5").append("Country: " + results[4].country);
    $("#religion5").append("Religion: " + results[4].religion);
    $("#type5").append(results[4].typeofuser);
    var user5IDRoute = "/api/" + results[4].id;
    $("#button5").append('<a href= "' + user5IDRoute + ' " class="btn btn-primary" >View Profile</a>');
  }
  else if (results.length < 7 || results.length > 7) {
    $("#card1").append('<img src= " ' + results[0].profilepicture + ' "class="card-img-top" />');
    $("#name1").append("Name: " + results[0].firstname);
    $("#intro1").append(results[0].introduction);
    $("#language1").append("Primary Language: " + results[0].language);
    $("#country1").append("Country: " + results[0].country);
    $("#religion1").append("Religion: " + results[0].religion);
    $("#type1").append(results[0].typeofuser);
    var user1IDRoute = "/api/" + results[0].id;
    $("#button1").append('<a href= "' + user1IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card2").append('<img src= " ' + results[1].profilepicture + ' "class="card-img-top" />');
    $("#name2").append("Name: " + results[1].firstname);
    $("#intro2").append(results[1].introduction);
    $("#language2").append("Primary Language: " + results[1].language);
    $("#country2").append("Country: " + results[1].country);
    $("#religion2").append("Religion: " + results[1].religion);
    $("#type2").append(results[1].typeofuser);
    var user2IDRoute = "/api/" + results[1].id;
    $("#button2").append('<a href= "' + user2IDRoute + ' " class="btn btn-primary" >View Profile</a>')
    $("#card3").append('<img src= " ' + results[2].profilepicture + ' "class="card-img-top" />');
    $("#name3").append("Name: " + results[2].firstname);
    $("#intro3").append(results[2].introduction);
    $("#language3").append("Primary Language: " + results[2].language);
    $("#country3").append("Country: " + results[2].country);
    $("#religion3").append("Religion: " + results[2].religion);
    $("#type3").append(results[2].typeofuser);
    var user3IDRoute = "/api/" + results[2].id;
    $("#button3").append('<a href= "' + user3IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card4").append('<img src= " ' + results[3].profilepicture + ' "class="card-img-top" />');
    $("#name4").append("Name: " + results[3].firstname);
    $("#intro4").append(results[3].introduction);
    $("#language4").append("Primary Language: " + results[3].language);
    $("#country4").append("Country: " + results[3].country);
    $("#religion4").append("Religion: " + results[3].religion);
    $("#type4").append(results[3].typeofuser);
    var user4IDRoute = "/api/" + results[3].id;
    $("#button4").append('<a href= "' + user4IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card5").append('<img src= " ' + results[4].profilepicture + ' "class="card-img-top" />');
    $("#name5").append("Name: " + results[4].firstname);
    $("#intro5").append(results[4].introduction);
    $("#language5").append("Primary Language: " + results[4].language);
    $("#country5").append("Country: " + results[4].country);
    $("#religion5").append("Religion: " + results[4].religion);
    $("#type5").append(results[4].typeofuser);
    var user5IDRoute = "/api/" + results[4].id;
    $("#button5").append('<a href= "' + user5IDRoute + ' " class="btn btn-primary" >View Profile</a>');
    $("#card6").append('<img src= " ' + results[5].profilepicture + ' "class="card-img-top" />');
    $("#name6").append("Name: " + results[5].firstname);
    $("#intro6").append(results[5].introduction);
    $("#language6").append("Primary Language: " + results[5].language);
    $("#country6").append("Country: " + results[5].country);
    $("#religion6").append("Religion: " + results[5].religion);
    $("#type6").append(results[5].typeofuser);
    var user6IDRoute = "/api/" + results[5].id;
    $("#button6").append('<a href= "' + user6IDRoute + ' " class="btn btn-primary" >View Profile</a>');
}
};
});

//<img class="card-img-top" src="assets/images/profile-images/pexels-photo-462680.jpeg" alt="Card image cap">
// code below inside card-body id
//<a href="#" class="btn btn-primary">SEND REQUEST</a>
