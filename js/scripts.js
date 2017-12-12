//back end
var sums = [];

var ageRange1 = [];
for (var i = 0; i <= 16; i++) {
  ageRange1.push(i);
}

var ageRange2 = [];
for (var i = 17; i <= 64; i++) {
  ageRange2.push(i);
}

var ageRange3 = [];
for (var i = 64; i <= 160; i++) {
  ageRange3.push(i);
}

var movie1 = { name: "Indecent Proposal", price: 5.00 };
var movie2 = { name: "Memento", price: 7.00 };
var movie3 = { name: "Alien", price: 6.00 };

var time1 = { time: "10:00", price: 0.50 };
var time2 = { time: "15:00", price: 1.00 };
var time3 = { time: "20:00", price: 1.50 };

var age1 = { ageRange1, price: 0.50 };
var age2 = { ageRange2, price: 1.00 };
var age3 = { ageRange3, price: 0.00 };

function Ticket(movie, time, age) {
  this.movieName = movie;
  this.movieTime = time;
  this.userAge = age;
}


Ticket.prototype.ticketPrice = function() {
  // debugger;
  var moviePrice;
  var timePrice;
  var agePrice;

  if (this.movieName === "1") {
    moviePrice = movie1.price;
  } else if (this.movieName === "2") {
    moviePrice = movie2.price;
  } else if (this.movieName === "3") {
    moviePrice = movie3.price;
  } else {

  }

  if (this.movieTime === "1") {
    timePrice = time1.price;
  } else if (this.movieTime === "2") {
    timePrice = time2.price;
  } else if (this.movieTime === "3") {
    timePrice = time3.price;
  } else {

  }

  if (this.userAge < 17) {
    agePrice = age1.price;
  } else if (this.userAge >= 17 && this.userAge <= 64) {
    agePrice = age2.price;
  } else if (this.userAge > 64) {
    agePrice = age3.price;
  } else {

  }
  var sum = moviePrice + timePrice + agePrice;
  sums.push(sum);
  console.log(sum);
};

//var totalCost = price(movie2.price, time1.price, age1.price);
//console.log(totalCost);

//front end
$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var selectMovie = $("#movie-name").val();
    var selectTime = $("#movie-time").val();
    var selectAge = $("input#user-age").val();

    var ticket = new Ticket(selectMovie, selectTime, selectAge);
    ticket.ticketPrice();

    var selector = eval("movie" + selectMovie + ".name");
    var selector2 = eval("time" + selectTime + ".time");
    console.log(selector);
    $("#ticketUl").append("<span>" + selector + "</span><br>" + "<span>" + selector2 + "</span><br>" + "<span>" + "$" + sums + "</span>");

    $(".ticketDiv").show();
  })

})
