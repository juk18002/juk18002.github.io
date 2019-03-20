//get the town name from calling page
var script_tag = document.getElementById("forecastScript");
var town = script_tag.getAttribute("data-town");

var zip = getZipByTownName(town);

var d = new Date();

var d1 = new Date();
d1.setDate(d.getDate() + 1);

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var apiURLString = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",us&APPID=11bcd0d86618f285952a20f00a263c7c&units=imperial";
var baseIconURLString = "http://openweathermap.org/img/w/"
var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', apiURLString, true);
forecastRequest.send();

forecastRequest.onload = function () {
    let forecastData = JSON.parse(forecastRequest.responseText);
    forecastData = forecastData.list;

    for (i = 0; i < 5; i++) {
        var day = i + 1;
        var elem = "d" + day + "DofW";
        var elem1 = "d" + day + "temp";
        var elem2 = "d" + day + "icon";
        var d1 = new Date();
        d1.setDate(d.getDate() + (day));
        var year = d1.getFullYear();
        var month = ("00" + (d1.getMonth() + 1)).slice(-2);
        var day = ("00" + d1.getDate()).slice(-2);
        var dtText = year + "-" + month + "-" + day + " 18:00:00";

        for (var j = 0; j < forecastData.length; j++) {

            if (forecastData[j].dt_txt == dtText) {
                //update day
                document.getElementById(elem).innerHTML = weekday[d1.getDay()];
                //update temp
                document.getElementById(elem1).innerHTML = forecastData[j].main.temp.toFixed(0);
                //update icon
                var iconName = baseIconURLString + forecastData[j].weather[0].icon + ".png";
                var iconAlt = forecastData[j].weather[0].main;
                var divIcon = document.getElementById(elem2);
                var iIcon = document.createElement('img');
                iIcon.src = iconName;
                iIcon.alt = iconAlt;
                divIcon.appendChild(iIcon);
            }
        }


    }
}