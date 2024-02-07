var apiKey="Mzk2OTE5NzR8MTcwNjczNjQ3MS45OTA5Mjc3";

//Shortened Api url with API key for reusability. 

var apiUrl="https://api.seatgeek.com/2/";
var authKey=`client_id=${apiKey}`;

document.addEventListener("DOMContentLoaded", function(){
    //selecting the button elements
    var performerBtn=document.getElementById("performerBtn");
    var categoryBtn=document.getElementById("categoryBtn");
    var cityBtn=document.getElementById("cityBtn");
   
   
    //selecting the input elements
    var performerInput=document.getElementById("performerInput");
    var sliderRange=document.getElementById("locationSlider")
    var sliderInput=document. getElementById("selectedLocation");
    var categoryInput=document.getElementById("categoryInput"); 
  

    performerBtn.addEventListener("click",searchByPerformer);
    cityBtn.addEventListener("click",getCityName);
    categoryBtn.addEventListener("click",searchByCategory);
    sliderRange.addEventListener("input",updateSliderValue);


function updateSliderValue(){
    sliderInput.textContent = sliderRange.value;

}

   
function getCityName(){
    var cityElement=document.getElementById("cityInput");
    var cityName=cityElement.value;
     
var newInput=cityName.split(" ");
var newCityAPI=" ";

for(var k=0;k<newInput.length;k++){

    newCityAPI+=newInput[k];
    if(k!==newInput.length-1){

        newCityAPI+="%20";
}
}

    searchByCityChoice(newCityAPI);
}
// <!-- Search for location  and distance-->

function searchByCityChoice(newCityAPI){
    var km=sliderRange.value;
    var searchUrl="";
    if(km!==undefined){
        searchUrl=`${apiUrl}events/?venue.city=${newCityAPI}&${authKey}`;
        
    }
     searchUrl=`${apiUrl}events/?venue.city=${newCityAPI}&range=${km}km&${authKey}`;
    
   

  fetch(searchUrl)
  .then(function(response){
      console.log(searchUrl);
      return response.json();
  }).then(function(data){
    createCards(data);
      

  })

}
//Search by category

function searchByCategory(event){
    event.preventDefault();
   
    var type = categoryInput.value;

    var searchUrl=`${apiUrl}events?q=${type}&${authKey}`;
 
   fetch(searchUrl)
   .then(function(response){
       console.log(searchUrl);
       return response.json();
   }).then(function(data){
     //   console.log(data);
 
       createCards(data);
        
 
   })
 
 
 }
// Search by performer

function searchByPerformer(event){
    event.preventDefault();
    var performerName = performerInput.value;  
var newInput=performerName.split(" ");
var result=" ";

for(var k=0;k<newInput.length;k++){

    result+=newInput[k];
    if(k!==newInput.length-1){

    result+="%20";
}
}

      var searchUrl=`${apiUrl}performers?q=${result}&${authKey}`;

    fetch(searchUrl)
    .then(function(response){
        console.log(searchUrl);
        return response.json();
    }).then(function(data){
     

//Construct card for performer results from the response

for(i=1;i<data.performers.length; i++){
   
var divrow=$("<div>").attr("class","row");
var divcolm=$("<div>").attr("class","col s12 m7");

var divCard=$("<div>").attr("class","card");
var divImg=$("<div>").attr("class","card-image");
var divContent=$("<div>").attr("class","card-content").append($("<p>"));
var divAction=$("<div>").attr("class","card-action").append($("<a>"));


var imgTag=$("<img>");
var getImage=data.performers[i].image;
imgTag.attr("src",getImage);
imgTag.attr("style","height:300 px")
divImg.append(imgTag);
var title=data.performers[i].name;
var category=data.performers[i].type;
divContent.find("p").text(`${category}\n${title}`);

var ticketurl=data.performers[i].url;
divAction.find("a").attr("href",ticketurl).text("Click this link for more details");

divCard.append(divImg,divContent,divAction);
divcolm.append(divCard);
divrow.append(divcolm);
$(".container #cardsection").append(divrow);

}

    })


}



});

//Create card function reusable bease on api response
function createCards(data){

    for(i=0;i<data.events.length; i++){
        //Getting data extracted for events
         var eventSelector=data.events[i];
         var eventType=eventSelector.type;
         var eventDate=eventSelector.datetime_utc;
         var eventAddress=eventSelector.venue.address;
         var eventCity=eventSelector.venue.display_location;
         var performers=eventSelector.performers[0];
         var performerName=performers.name;
         var performersImage=performers.image;
         var performerUrl=performers.url
         //Create Card
         var divrow=$("<div>").attr("class","row");
         var divcolm=$("<div>").attr("class","col s12 m7");
         var divCard=$("<div>").attr("class","card");
         var divImg=$("<div>").attr("class","card-image");
         var divContent=$("<div>").attr("class","card-content").append($("<p>"));
         var divAction=$("<div>").attr("class","card-action").append($("<a>"));
         var imgTag=$("<img>");
         imgTag.attr("src",performersImage);
         divImg.append(imgTag);
         divAction.find("a").attr("href",performerUrl).text("Click this link for more details");
         divContent.find("p").text(`${performerName},${eventType},${eventDate},${eventAddress},${eventCity}` );
     
         divCard.append(divImg,divContent,divAction);
         divcolm.append(divCard);
         divrow.append(divcolm);
         $(".container #cardsection").append(divrow);
     
     
     
     
     }







}
//Clear results
var clearbtn=document.querySelector("#clearbtn");
clearbtn.addEventListener("click",clear);

function clear(event){
    event.preventDefault();
    $("#cardsection").empty();

}


// // //This is a news api to show current entertaining events happening 
// var newsApiKey="03a11ab6a54d4a8b9145bf38cbc40c3d";
// const newsUrl="https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" + "https://newsapi.org/v2/top-headlines?category=entertainment&language=en&pageSize=5&sortBy=popularity&apiKey="+newsApiKey;
// //var req=new Request(newsUrl)
// //fetch(url, () => {});
// fetch(newsUrl, {})
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     console.log(data.articles[1].title);
//     // $("#entertainment .newstitle").text(data.articles[1].title);
//   });
 
 
 