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

        var city = objJSON.city;
        var apiURLString = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&APPID=11bcd0d86618f285952a20f00a263c7c&units=imperial";
        var weatherRequest = new XMLHttpRequest();
        weatherRequest.open('GET', apiURLString, true);
        weatherRequest.send();
        weatherRequest.onload = function () {
            let weatherData = JSON.parse(weatherRequest.responseText);
            //console.log(weatherData);
            var weatherText = "The current weather condition in " + objJSON.city +" is " + weatherData.weather[0].main + ", the temperature is " + weatherData.main.temp + "."
           var pWeather = document.createElement('p');
           pWeather.textContent=weatherText;
           tempDiv.appendChild(pWeather);
        }
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
        var h4Serv = document.createElement('h4');
        h4Serv.textContent = "Services";
        servDiv.appendChild(h4Serv);
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
            pcafeteria.textContent = "Cafeteria available"
        } else {
            pcafeteria.textContent = "No cafeteria available"
        }
        servDiv.appendChild(pcafeteria);

        var pHousing = document.createElement('p');
        if (objServ.patronHousing) {
            pHousing.textContent = "Patron Housing available"
        } else {
            pHousing.textContent = "No patron housing available"
        }
        servDiv.appendChild(pHousing);

        var pDC = document.createElement('p');
        if (objServ.dcNear) {
            pDC.textContent = "Distribution center nearby"
        } else {
            pDC.textContent = "No distribution center nearby"
        }
        servDiv.appendChild(pDC);

        //ordinance schedule
        var ordDiv = document.createElement('div');
        ordDiv.className = 'temple-ord';
        tempDiv.appendChild(ordDiv);
        var h3Ord = document.createElement('h3');
        h3Ord.textContent = "Ordinance Schedule";
        var pLiving = document.createElement('p');
        pLiving.textContent = "To schedule living ordinances (such as own endownment or sealing) or group visits, please call: " + objJSON.telephone;
        ordDiv.appendChild(h3Ord);
        ordDiv.appendChild(pLiving);

        var h4Bap = document.createElement('h4');
        h4Bap.textContent = 'Baptistry Schedule'
        ordDiv.appendChild(h4Bap);
        var bapObj = objJSON.ordinanceSchedule.baptismal;
        for (j = 0; j < bapObj.length; j++) {
            var pBapSch = document.createElement('p');
            pBapSch.textContent = bapObj[j];
            ordDiv.appendChild(pBapSch);
        }

        var h4Init = document.createElement('h4');
        h4Init.textContent = 'Initiatory Schedule'
        ordDiv.appendChild(h4Init);
        var ordInit = objJSON.ordinanceSchedule.initiatory;
        for (k = 0; k < ordInit.length; k++) {
            var pInitSch = document.createElement('p');
            pInitSch.textContent = ordInit[k];
            ordDiv.appendChild(pInitSch);
        }

           var h4End = document.createElement('h4');
           h4End.textContent = 'Endowment Schedule'
           ordDiv.appendChild(h4End);
           var ordEnd = objJSON.ordinanceSchedule.endowment;
           for (l = 0; l < ordEnd.length; l++) {
               var pEndSch = document.createElement('p');
               pEndSch.textContent = ordEnd[l];
               ordDiv.appendChild(pEndSch);
           }

            var h4Seal = document.createElement('h4');
            h4Seal.textContent = 'Sealing Schedule'
            ordDiv.appendChild(h4Seal);
            var ordSeal = objJSON.ordinanceSchedule.sealing;
            for (m = 0; m < ordSeal.length; m++) {
                var pSealSch = document.createElement('p');
                pSealSch.textContent = ordSeal[m];
                ordDiv.appendChild(pSealSch);
            }

        //closure schedule
        var closeDiv = document.createElement('div');
        closeDiv.className = 'temple-close';
        tempDiv.appendChild(closeDiv);
        var h3Close = document.createElement('h3');
        h3Close.textContent = "Closure Schedule";
        closeDiv.appendChild(h3Close);
        var closeObj = objJSON.closures;
        for (n=0;n<closeObj.length;n++) {
            var pClose = document.createElement('p');
            pClose.textContent = closeObj[n];
            closeDiv.appendChild(pClose)
        }

        //history
        var histDiv = document.createElement('div');
        histDiv.className = 'temple-hist';
        tempDiv.appendChild(histDiv);
        var h3Hist = document.createElement('h3');
        h3Hist.textContent = "Temple History";
        histDiv.appendChild(h3Hist);
        var histObj = objJSON.milestones;
        for (o=0;o<histObj.length;o++) {
            var pHist = document.createElement('p');
            pHist.textContent = histObj[o];
            histDiv.appendChild(pHist)
        }
        var aReturn = document.createElement('a');
        aReturn.setAttribute('href', '#templelist');
        aReturn.innerHTML = 'Return to Temple List';
        tempDiv.appendChild(aReturn);
    }

}


