//get the card container div
var cardHolder = document.getElementById("townDiv");

var townList = new Array("Preston", "Soda Springs", "Fish Haven");

//get the json data
//var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var requestURL = 'https://juk18002.github.io/assignments/lesson-9/data/towndata.json';
      
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';

request.send();

request.onload = function () {
    var varJSON = request.response;

    createTownCards(varJSON);
}

function createTownCards(textJSON) {

    var townsJson = textJSON.towns;

    for (var i = 0; i < townsJson.length; i++) {
        var objJSON = townsJson[i];

        if (townList.indexOf(objJSON.name) > -1) {
            var divCard = document.createElement('div');
            divCard.className = 'card';
            //town name
            var h2TownName = document.createElement('h2');
            h2TownName.textContent = objJSON.name;
            //Motto
            var h3Motto = document.createElement('h3');
            h3Motto.textContent = objJSON.motto;
            //year founded
            var pYear = document.createElement('p');
            pYear.textContent = "Year Founded: " + objJSON.yearFounded.toString();
            //current pop
            var pPopulation = document.createElement('p');
            pPopulation.textContent = "Current Population: " + objJSON.currentPopulation;
            //avg rainfall
            var pAvgRain = document.createElement('p');
            pAvgRain.textContent = 'Average Rainfall: ' + objJSON.averageRainfall + '"';
            //img
            var iPreston = document.createElement('img');
            iPreston.src = "images/preston-320.jpeg";
            iPreston.alt = "Preston";

            divCard.appendChild(h2TownName);
            divCard.appendChild(h3Motto);
            divCard.appendChild(pYear);
            divCard.appendChild(pPopulation);
            divCard.appendChild(pAvgRain);
            divCard.appendChild(iPreston);
            cardHolder.appendChild(divCard);
        }
    }
}