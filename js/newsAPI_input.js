//Globale variabler
var wsurl;
let inpnyheder = document.getElementById("inpSoeg");



inpnyheder.addEventListener("input", function() {

    kaldWebservice(inpnyheder.value);

})



//Funktion til at kalde webservicen
function kaldWebservice(nyhedlister) {

    let  wsurl = 'https://newsapi.org/v2/everything?q=apple&from=2019-11-18&to=2019-11-18&sortBy=popularity&apiKey=b64ee07e378b44869b866cd6cc12d89b' + nyhedlister;


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



function udskriveData (nyhedData) {

    var nyhedresultat = "";

    //Loop nyheder gennem jsondata
    for (var x in nyhedData.articles) {

        nyhedresultat += "<div><img src='"+ nyhedData.articles[x].urlToImage + ".png' alt='nyheder'/><h2>" + nyhedData.articles[x].title + "</h2><p>" + nyhedData.articles[x].description + "</p></div>";
        //<img src='" + jsondata.articles[x].urlToImage" 
    }

    //udskriv i html
    document.getElementById("nyheder").innerHTML = nyhedresultat;
}




