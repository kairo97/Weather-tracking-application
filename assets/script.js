var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=5&appid=2377ce6170fd23501dbc0eba2329d594"
var searchBar = document.querySelector('#searchbar')
var displayCity = document.querySelector('#city-display')
var searchBtn = document.querySelector('#search')

function handleSearchResult(event) {
var searchVal = document.querySelector('#searchbar').value;
if (!searchVal) {
console.error('you need a search input')
return;
}}
function getParams() {
var searchParamsArr = document.location.search.split('&');
var query = searchParamsArr[0].split('=').pop();
var format = searchParamsArr[1].split('=').pop();

searchApi(query, format);
};
function printResults(resultObj) {
    console.log(resultObj);
    
    var resultCard = document.createElement('div');
    resultCard.classList.add('card')
    var resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);
}

function searchApi(query, format) {
    var weathQueryUrl = "https://api.openweathermap.org/geo/1.0/direct?q=&limit=5&appid=2377ce6170fd23501dbc0eba2329d594"

if (format){
    weathQueryUrl = "https://api.openweathermap.org/" + format + "geo/1.0/direct?q=&limit=5&";
}
weathQueryUrl = weathQueryUrl 
+'q=&' + query;
fetch(weathQueryUrl)
.then(function(locRes) {
    searchBar.textContent = LocRes.search.query;
    console.log(LocRes);

    if (!LocRes.results.length) {
        console.log('No results found');
        resultContentEl.innerHTML = '<h3>No results found, search again</h3>';
    } else {
        resultContentEl.textContent = '';
        for (var i = 0; i < LocRes.results.length; i++) {
            printResults(LocRes.results[i]);
        }

    }
})
.catch(function(error) {
    console.error(error);
});
}
searchBtn.addEventListener('click', handleSearchResult);
getParams();