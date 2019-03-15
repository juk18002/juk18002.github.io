
var apiURLString = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=11bcd0d86618f285952a20f00a263c7c&units=imperial";

var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLString, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
   document.getElementById('current-temp').innerHTML = weatherData.main.temp;
}
