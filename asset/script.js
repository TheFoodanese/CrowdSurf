var apiKey="Mzk2OTE5NzR8MTcwNjczNjQ3MS45OTA5Mjc3";
var startDate=dayjs().format("YYYY-MM-DD");
var endDate=dayjs().format("YYYY-MM-DD");


//Shortened Api url with API key for reusability. 

var apiUrl="https://api.seatgeek.com/2/";
var authKey=`client_id=${apiKey}`;



// <!-- Search for events by performers eg taylor swift  -->
//add listing_count.gt=0 for ticket listing and average_price
//sort sort=score.desc

function searchByPerformer(performerName){
      var searchUrl=`${apiUrl}performers?q=${performerName}&${authKey}`;

    fetch(searchUrl)
    .then(function(response){
        console.log(searchUrl);
        return response.json();
    }).then(function(data){
     

//Construct card for all the results from the response

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
 searchByPerformer("Taylor%20Swift");

// <!-- Search for events by category eg concert or sport  -->
function searchByCategory(type){
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
 searchByCategory("Music");

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

function searchByCityChoice(city){
    var searchUrl=`${apiUrl}events/?venue.city=${city}&${authKey}`;
    

  fetch(searchUrl)
  .then(function(response){
      console.log(searchUrl);
      return response.json();
  }).then(function(data){
    createCards(data);
      


  })


}
searchByCityChoice("Toronto");





var clearbtn=document.querySelector("#clearbtn");
clearbtn.addEventListener("click",clear);

function clear(event){
    event.preventDefault();
    $("#cardsection").empty();

}

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