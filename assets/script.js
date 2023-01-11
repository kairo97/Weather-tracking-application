fetch ("http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=5&appid=2377ce6170fd23501dbc0eba2329d594",{
cache:'reload',
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
})