//get the town name from calling page
var script_tag = document.getElementById("weatherapiScript");
var town = script_tag.getAttribute("data-town");

var zip = getZipByTownName(town);

var apiURLString = "https://api.openweathermap.org/data/2.5/weather?ip=" + zip + ",usAPPID=11bcd0d86618f285952a20f00a263c7c&units=imperial";

var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLString, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('currentCond').innerHTML = weatherData.weather[0].main;
    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
    document.getElementById('highTemp').innerHTML = weatherData.main.temp_max;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity; //humidity
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed; //wind speed
    //wind chill
    let t = parseInt(document.getElementById("currentTemp").innerHTML);
    let s = parseInt(document.getElementById('windSpeed').innerHTML);

    // Processing - some random formula processing with the variable
    let f = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.427 * (t * (s ** 0.16)));

    // Output - round to one decimal and output string with HTML to innerHTML of a div
    document.getElementById('windChill').innerHTML = f.toFixed(0);
}