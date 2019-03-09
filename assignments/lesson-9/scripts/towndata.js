//get the card container div
var cardHolder = document.getElementById("townDiv");

//get the json data
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';

request.send();

request.onload = function () {
    var townData = request.response;

    createTownCards(townData);
}

function createTownCards(jsonObj) {
    var townsJson = jsonObj['towns'];
    var testP = document.body.appendChild('p');
    testP.textContent = "This is a test";

    //create the card and add it to the container
    for (var i = 0; i < towns.length; i++) {
        //card for town
        var divCard = document.createElement('div');
        divCard.className = 'card';
        //town name
        var h2TownName = document.createElement('h2');
        h2TownName.textContent = townsJson[i].name;
        //motto
        var pMotto = document.createElement('p');
        pMotto.textContent = townsJson[i].motto;
        //year founded
        var pYear = document.createElement('p');
        pYear.textContent = townsJson[i].yearFounded;
        //current pop
        var pPopulation = document.createElement('p');
        pPopulation.textContent = townsJson[i].currentPopulation;
        //avg rainfall
        var pAvgRain = document.createElement('p');
        pAvgRain.textContent = townsJson[i].averageRainfall;

        //construct the card
        divCard.appendChild(h2TownName);
        divCard.appendChild(pMotto);
        divCard.appendChild(pYear);
        divCard.appendChild(pPopulation);
        divCard.appendChild(pAvgRain);
        cardHolder.appendChild(divCard);
    }
}