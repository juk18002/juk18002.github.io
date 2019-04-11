//get the card container div
var templeDiv = document.getElementById("temple-div");
var templeList = document.getElementById("templelist");

//get the json data
var requestURL = 'https://juk18002.github.io/assignments/lesson-14/data/temples.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';

request.send();

request.onload = function () {
    var varJSON = request.response;

    createTemples(varJSON);
}

function createTemples(textJSON) {

    var templesJson = textJSON.temples;
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'templeNav');
    templeList.appendChild(ul);

    for (var i = 0; i < templesJson.length; i++) {
        var objJSON = templesJson[i];

        //set up links to individual temples
        var tempDiv = document.createElement('div');
        tempDiv.className = 'temple';
        tempDiv.id = objJSON.city;
        templeDiv.appendChild(tempDiv);
        var linkTemp = "<a href='#" + tempDiv.id + "'>" + objJSON.name + "<a>";
        var liTemple = document.createElement('li');
        liTemple.innerHTML = linkTemp;
        ul.appendChild(liTemple);

        //temple name
        var h1TempleName = document.createElement('h1');
        h1TempleName.textContent = objJSON.name;
        tempDiv.appendChild(h1TempleName);

        //Contact Div
        var contactDiv = document.createElement('div');
        contactDiv.className = 'temple-contact';
        tempDiv.appendChild(contactDiv);
        var pAddress = document.createElement('p');
        pAddress.textContent = objJSON.streetAddress.toString();
        var pCityZip = document.createElement('p');
        pCityZip.textContent = objJSON.city.toString() + ' ' + objJSON.state.toString() + ', ' + objJSON.postal_code.toString();
        var pCountry = document.createElement('p');
        pCountry.textContent = objJSON.country.toString();
        var pPhone = document.createElement('p');
        pPhone.textContent = objJSON.telephone.toString();
        var aURL = document.createElement('a');
        aURL.setAttribute('href', objJSON.ldsTempleURL);
        aURL.innerHTML = 'Church website'
        contactDiv.appendChild(pAddress);
        contactDiv.appendChild(pCityZip);
        contactDiv.appendChild(pCountry);
        contactDiv.appendChild(pPhone);
        contactDiv.appendChild(aURL);

        //Services
        var servDiv = document.createElement('div');
        servDiv.className = 'temple-serv';
        tempDiv.appendChild(servDiv);
        var objServ = objJSON.services;
        var pRental = document.createElement('p');
        if (objServ.clothingRental) {
            pRental.textContent = "Clothing rental available"
        } else {
            pRental.textContent = "No clothing rental available"
        }
        servDiv.appendChild(pRental);
        var pcafeteria = document.createElement('p');
        if (objServ.cafeteria) {
            pcafeteria.textContent = "Clothing rental available"
        } else {
            pcafeteria.textContent = "No clothing rental available"
        }
        servDiv.appendChild(pcafeteria);



        //ordinance schedule

        //closure schedule

        //history

    }
}