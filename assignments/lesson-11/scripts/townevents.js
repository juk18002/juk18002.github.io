//get the town name from calling page
var script_tag = document.getElementById("townEventScript");
var town = script_tag.getAttribute("data-event");
//get the card container div
var eventHolder = document.getElementById("event-div");
//get the json data
var requestURL = 'https://juk18002.github.io/assignments/lesson-9/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var varJSON = JSON.parse(request.response);
    insertTownEvents(varJSON);
}

function insertTownEvents(textJSON) {

    var townsJson = textJSON.towns;

    for (var i = 0; i < townsJson.length; i++) {
        var objJSON = townsJson[i];

        if (objJSON.name == town) {
            var newDiv = document.createElement('div');
            for (var j = 0; j < objJSON.events.length; j++) {
                var pEvent = document.createElement('p');
                pEvent.textContent = objJSON.events[j];
                newDiv.appendChild(pEvent);
            }
            eventHolder.appendChild(newDiv)
            document.getElementById("map").innerHTML = objJSON.googleMapsURL;
        }
    }
}