//get the card container div
var cardHolder = document.getElementById("townDiv");

var textJSON = '{"towns":[{"name":"Franklin","motto":"Where you will grow!","yearFounded":1788,"currentPopulation":30458,"averageRainfall":21,"events":["March 4: March to the Drum of Donuts","September 5 - 11: Founder Days","December 1 - 26: Christmas in the Heart"]},{"name":"Fish Haven","motto":"This is Fish Heaven.","yearFounded":1864,"currentPopulation":501,"averageRainfall":14.2,"events":["April 1: How Big Was That Fish Day","May 15-30: Rush the Creek Days","July 24: Bear Lake Blunder Run","December 12: Light the Tree"]},{"name":"Greenville","motto":"Green is our way of life.","yearFounded":1805,"currentPopulation":33458,"averageRainfall":25,"events":["February 10-12: Greenbration","May 8 - 18: Greenville Founder Days","June 20: Verde and Valiant Day","November 15-16: Greensome Gathering"]},{"name":"Placerton","motto":"Positive Placement in Placerton.","yearFounded":1946,"currentPopulation":512,"averageRainfall":39,"events":["July 4: A Blaze of Glory","October 20: Fall through Fall"]},{"name":"Preston","motto":"Home of Napoleon Dynamite","yearFounded":1866,"currentPopulation":5204,"averageRainfall":16.65,"events":["March 29: Work Creek Revival","July 8-12: Napoleon Dynamite Festival","November 2-4: Freedom Days"]},{"name":"Soda Springs","motto":"Historic Oregon Trail Oasis. The Soda is on Us","yearFounded":1858,"currentPopulation":2985,"averageRainfall":15.75,"events":["February 29: Geyser Song Day","May 1-6: Days of May Celebration","October 15-16: Octoberfest"]},{"name":"Springfield","motto":"Where everyone is lifted.","yearFounded":1826,"currentPopulation":17852,"averageRainfall":17,"events":["January 8: Spring into Winter","April 10-20: Celebration of Life","July 31-Aug 15: Dog Days of Summer Festival"]}]}';

//get the json data
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';

request.send();

request.onload = function () {
    var textJSON = request.response;

    createTownCards(textJSON);
}

function createTownCards(textJason) {

    var townsJson = (JSON.parse(textJSON)).towns;

    for (var i = 0; i < townsJson.length; i++) {
        var objJSON = townsJson[i];

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