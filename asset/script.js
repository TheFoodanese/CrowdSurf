var apiKey="Mzk2OTE5NzR8MTcwNjczNjQ3MS45OTA5Mjc3";
var startDate=day.js().format("YYYY-MM-DD");
var endDate=day.js().format("YYYY-MM-DD");
var latitude=0;
var longitude=0;
var distance=10;

var apiUrl=`https://api.seatgeek.com/2/events?lat=${latitude}&lon=${longitude}&range=${distance}mi&&datetime_utc.gte=${startDate}&datetime_utc.lte=${endDate}&client_id=${apiKey}`;