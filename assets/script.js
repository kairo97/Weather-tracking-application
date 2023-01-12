var searchBar = document.querySelector('#searchbar');
var city = document.querySelector('#city-results');
var searchBtn = document.querySelector('#search')
var genralApi = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2377ce6170fd23501dbc0eba2329d594";
var geoApi1 = "http://api.openweathermap.org/geo/1.0/direct?q="
var geoApi2 = "&limit=5&appid=2377ce6170fd23501dbc0eba2329d594";
var weatherApi = "https://api.openweather.org/data/3.0/onecall?lat="
var resultsArea = document.querySelector('#resultsArea');

function searchCity(city){
 
fetch("https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=2377ce6170fd23501dbc0eba2329d594").then(function(res){
    return res.json();
}).then(function(data){
    renderResults(data)
})
}
function renderResults(resultData){
    console.log(resultData)
    var newDiv = document.createElement('div')
    var newCard = document.createElement('card')
    newCard.textContent = resultData;
    newDiv.append(newCard);
    resultsArea.append(newDiv);
    

}

searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    var searchTerm= searchBar.value;
    searchCity(searchTerm);
    city.textContent = `${searchTerm}`
})
// function getLatLon(lat, lon){
// fetch("https://api.openweather.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=2377ce6170fd23501dbc0eba2329d594").then(function(resl){
//     return resl.json();
// }).then(function(temp)
// }

// array index 3 and 4 with lat and lon