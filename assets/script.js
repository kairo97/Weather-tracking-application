var searchBar = document.querySelector('#searchbar');
var city = document.querySelector('#city-results');
var searchBtn = document.querySelector('#search')
var genralApi = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2377ce6170fd23501dbc0eba2329d594";
var geoApi1 = "http://api.openweathermap.org/geo/1.0/direct?q="
var geoApi2 = "&limit=5&appid=2377ce6170fd23501dbc0eba2329d594";

function searchCity(term){
 
fetch("http://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=2377ce6170fd23501dbc0eba2329d594").then(function(res){
    return res.json();
}).then(function(data){
    console.log(data);
})
}
searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    var searchTerm= searchBar.value;
    searchCity(searchTerm);
    city.textContent = `${searchTerm}`
})
// array index 3 and 4 with lat and lon