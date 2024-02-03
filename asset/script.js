var apiKey="Mzk2OTE5NzR8MTcwNjczNjQ3MS45OTA5Mjc3";
var startDate=dayjs().format("YYYY-MM-DD");
var endDate=dayjs().format("YYYY-MM-DD");


//Shortened Api url with API key for reusability. 

var apiUrl="https://api.seatgeek.com/2/";
var authKey=`client_id=${apiKey}`;



// <!-- Search for events by performers eg taylor swift  -->

function searchByPerformer(performerName){
      var searchUrl=`${apiUrl}performers?q=${performerName}&${authKey}`;

    fetch(searchUrl)
    .then(function(response){
        console.log(searchUrl);
        return response.json();
    }).then(function(data){
        console.log(data);
    })


}
searchByPerformer("Taylor Swift");

// <!-- Search for events by category eg concert or sport  -->
function searchByCategory(type){
    var searchUrl=`${apiUrl}events?q=${type}&${authKey}`;

  fetch(searchUrl)
  .then(function(response){
      console.log(searchUrl);
      return response.json();
  }).then(function(data){
      console.log(data);
  })


}
searchByCategory("Concert");

// <!-- Events near user's current location-->

function searchByCurrentLocation(){
    var searchUrl=`${apiUrl}events/?&geoip=true&${authKey}`;
    

  fetch(searchUrl)
  .then(function(response){
      console.log(searchUrl);
      return response.json();
  }).then(function(data){
      console.log(data);
  })


}
searchByCurrentLocation();





// <!-- Search for location  and distance-->

// https://api.seatgeek.com/2/events/?venue.city=New%20York&client_id=Mzk2OTE5NzR8MTcwNjczNjQ3MS45OTA5Mjc3

function searchByCityChoice(city){
    var searchUrl=`${apiUrl}events/?venue.city=${city}&${authKey}`;
    

  fetch(searchUrl)
  .then(function(response){
      console.log(searchUrl);
      return response.json();
  }).then(function(data){
      console.log(data);
//Display results
console.log("In London");
console.log(data.events[1].datetime_utc);
console.log(data.events[1].venue.url);
console.log(data.events[1].performers);

  })


}
searchByCityChoice("London");



// <!-- Display section of the events -->



