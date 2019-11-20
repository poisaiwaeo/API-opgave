//Globale variabler
var wsurl;

//Det der skal ske når siden loader
//Man kan bestemmer hvilken dato man vil hente data fra fx fra 1.maj 2019. Man skriver sådan her  q=denmark&from=2019-1014&to=2019-10-21&sortBy 
window.onload = function () {

    //Url/adresse til webservicen i variabel
    wsurl = "https://newsapi.org/v2/everything?q=apple&from=2019-11-18&to=2019-11-18&sortBy=popularity&apiKey=b64ee07e378b44869b866cd6cc12d89b";
    

    document.getElementById("inpSoeg").addEventListener("keyup", function () {

        var soeg = document.getElementById("inpSoeg").value;

        wsurl = "https://newsapi.org/v2/everything?q=apple&from=2019-11-18&to=2019-11-18&sortBy=popularity&apiKey=b64ee07e378b44869b866cd6cc12d89b" + soeg;

        kaldWebservice();
    });

};


//Funktion til at kalde webservicen
function kaldWebservice() {

    fetch(wsurl, {
        method: 'get', //get' er/henter data
        

    }).then(function (response) {

        //Send resultatet/responset fra webservicen videre til næste stop - som json-format
        return response.json();

    }).then(function (jsonsvar) {

        //Kontroller data ii konsollen - inden næste stop
        console.log(jsonsvar);

        // Når data ser ok ud - kald funktion som udskriver data i htlml'en
        udskriveData(jsonsvar);

    }).catch(function (error) {

        //Håndter/vis eventuelle fejl
        console.log("Det er sket en fejl!!!");
        alert("FEJL!!!");
    })
};

//Funktion til at udskrive data eller resultatet ud i html

function udskriveData(jsondata) {


    var nyhedresultat = "";

    //Loop nyheder gennem jsondata
    for (var x in jsondata.articles) {

        nyhedresultat += "<div><img src='"+ jsondata.articles[x].urlToImage + ".png' alt='nyheder'/><h2>" + jsondata.articles[x].title + "</h2><p>" + jsondata.articles[x].description + "</p></div>";
        //<img src='" + jsondata.articles[x].urlToImage" 
    }

    //udskriv i html
    document.getElementById("nyheder").innerHTML = nyhedresultat;

};