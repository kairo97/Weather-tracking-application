var searchBar = document.querySelector("#searchbar");
var city = document.querySelector("#city-results");
var searchBtn = document.querySelector("#search");
var resultsArea = document.querySelector("#resultsArea");

searchBtn.addEventListener("click", getWeather);

function getWeather() {
  var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=";
  var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?";
  var weatherApiKey = "&appid=2377ce6170fd23501dbc0eba2329d594";

  var weather = {
    city: "",
    state: "",
    date: "",
    weatherType: "",
    temp: "",
    humidity: "",
    windSpeed: "",
  };

  fetch(weatherApi + searchBar.value.trim() + weatherApiKey)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data)
      weather.city = data.name;
      weather.state = data.sys.country;
      weather.weatherType = data.weather[0].main;
      weather.temp = Math.round(1.8 * (data.main.temp - 273) + 32);
      weather.humidity = data.main.humidity;
      weather.windSpeed = Math.round(data.wind.speed);
      searchBar.value = "";
      weather.date = dayjs().format("MM/DD/YYYY");

      fetch(forecastApi + `lat=${data.coord.lat}&lon=${data.coord.lon}&cnt=5` + weatherApiKey)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
            console.log(data)
          var dayCount = 0;
          var currentDay;
          var day1 = {
            date: "",
            weather: "",
            temp: "",
            humidity: "",
            windSpeed: "",
          };
          var day2 = {
            date: "",
            weather: "",
            temp: "",
            humidity: "",
            windSpeed: "",
          };
          var day3 = {
            date: "",
            weather: "",
            temp: "",
            humidity: "",
            windSpeed: "",
          };
          var day4 = {
            date: "",
            weather: "",
            temp: "",
            humidity: "",
            windSpeed: "",
          };
          var day5 = {
            date: "",
            weather: "",
            temp: "",
            humidity: "",
            windSpeed: "",
          };
        
          var today = dayjs();
          var todayFormatted = today.format("MM/DD/YYYY");
          
          for (var i = 0; i < data.list.length; i++) {
            var currentDay = dayjs.unix(data.list[i].dt).format("MM/DD/YYYY");
            if (currentDay === todayFormatted) {
              day1.date = currentDay;
              day1.weather = data.list[i].weather[0].main;
              day1.temp = Math.round(1.8 * (data.list[i].main.temp - 273) + 32);
              day1.humidity = data.list[i].main.humidity;
              day1.windSpeed = Math.round(data.list[i].wind.speed);
            } else if (dayCount === 0 && currentDay !== todayFormatted) {
              dayCount++;
              day2.date = currentDay;
              day2.weather = data.list[i].weather[0].main;
              day2.temp = Math.round(1.8 * (data.list[i].main.temp - 273) + 32);
              day2.humidity = data.list[i].main.humidity;
              day2.windSpeed = Math.round(data.list[i].wind.speed);
            } else if (dayCount === 0 && currentDay !== todayFormatted) {
                dayCount++;
                day3.date = currentDay;
                day3.weather = data.list[i].weather[0].main;
                day3.temp = Math.round(1.8 * (data.list[i].main.temp - 273) + 32);
                day3.humidity = data.list[i].main.humidity;
                day3.windSpeed = Math.round(data.list[i].wind.speed);
            } else if (dayCount === 0 && currentDay !== todayFormatted) {
                dayCount++;
                day4.date = currentDay;
                day4.weather = data.list[i].weather[0].main;
                day4.temp = Math.round(1.8 * (data.list[i].main.temp - 273) + 32);
                day4.humidity = data.list[i].main.humidity;
                day4.windSpeed = Math.round(data.list[i].wind.speed);
            } else if (dayCount === 0 && currentDay !== todayFormatted) {
                dayCount++;
                day5.date = currentDay;
                day5.weather = data.list[i].weather[0].main;
                day5.temp = Math.round(1.8 * (data.list[i].main.temp - 273) + 32);
                day5.humidity = data.list[i].main.humidity;
                day5.windSpeed = Math.round(data.list[i].wind.speed);
            }  printResults(weather)
        };
    });
    function printResults(weather) {
        console.log(weather)
        var resultCard = document.createElement("div");
        resultCard.classList.add("card", "bg-light", "text-dark", "mb-3", "p-3");
      
        var resultBody = document.createElement("div");
        resultBody.classList.add("card-body");
        resultBody.append(resultCard);
      
        var titleEl = document.createElement("h3");
        titleEl.textContent = weather.city + ", " + weather.state;
        resultCard.append(titleEl);
      
        var bodyContentEl = document.createElement("p");
        bodyContentEl.innerHTML =
          "<strong>Date:</strong> " + weather.date + "<br/>" +
          "<strong>Weather:</strong> " + weather.weatherType + "<br/>" +
          "<strong>Temperature:</strong> " + weather.temp + " °F<br/>" +
          "<strong>Humidity:</strong> " + weather.humidity + "%<br/>" +
          "<strong>Wind Speed:</strong> " + weather.windSpeed + " mph<br/>";
      
        resultCard.append(bodyContentEl);
      
        resultsArea.innerHTML = "";
        resultsArea.append(resultBody);
    }})}