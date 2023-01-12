var searchBar = document.querySelector('#searchbar');
var city = document.querySelector('#city-results');
var searchBtn = document.querySelector('#search')
var resultsArea = document.querySelector('#resultsArea')
var mapQapiKey = "?key=8choJFlxyk4M6cqDGGvwd930sIqc7mjL&"
var mapQapi = "https://www.mapquestapi.com/geocoding/v1/address"
searchBtn.addEventListener('click', getWeather);{
     input = mapQapi + mapQapiKey + '&location=' + searchBar.value;
    ;
}

function getWeather() {

var weatherApi = "https://api.openweather.org/data/2.5/weather?"
var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?"
var weatherApiKey = "appid=2377ce6170fd23501dbc0eba2329d594"
var weather = {
    city: '',
    state: '',
    date: '',
    weatherType: '',
    temp: '',
    humidity: '',
    windSpeed: '',
};
var forecast = [];
fetch(mapQapi).then(function(res){
    return res.json();
}).then(function(data){
    if(data.results[0].locations[0].adminArea3 !=""){
        weather.state =", " +data.results[0].locations[0].adminArea3 + ", ";
    } else{
        weather.state =", "
    }
    returnedLat = 'lat=' + data.results[0].locations[0].latLng.lat;
    returnedLng = '&lon=' + data.results[0].locations[0].latLng.lng;

    weatherApi += returnedLat +returnedLng + weatherApiKey;
    forecastApi += returnedLat +returnedLng + weatherApiKey;

    fetch(weatherApi).then(function(res){
        return res.json();
    }).then(function(data){
        weather.city = data.name;
        weather.state += data.sys.country;
        weather.weatherType = data.weather[0],main;
        weather.temp = Math.round(1.8*(data.main.temp - 273) + 32);
        weather.humidity = data.main.humidity;
        weather.windSpeed = Math.round(data.wind.speed);
        input.value('')
    });
    fetch(forecastApi).then(function(res){
        return res.json();
    }).then(function(data){
        var dayCount = 0;
        var currentDay;
        var day1 = {
            date: '',
            weather: [],
            temp:  [],
            humidity: [],
            windSpeed: [],
        };
        var day2 = {
            date: '',
            weather: [],
            temp:  [],
            humidity: [],
            windSpeed: [],
        };
        var day3 = {
            date: '',
            weather: [],
            temp:  [],
            humidity: [],
            windSpeed: [],
        };
        var day4 = {
            date: '',
            weather: [],
            temp:  [],
            humidity: [],
            windSpeed: [],
        };
        var day5 = {
            date: '',
            weather: [],
            temp:  [],
            humidity: [],
            windSpeed: [],
        };
        forecast = [day1, day2, day3, day4, day5];
        for (var i = 0; i < data.list.length; i++) {
            currentDay = dayjs.unix(data.list[i].dt).format(MM/DD/YYYY)
            if(currentDay === jayjs.format(MM/DD/YYYY)){}
        }
        
        }
)})

}
