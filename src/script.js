let now = new Date();
let currentDate = document.querySelector(".currentDate");
let currentDay = now.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let currentMonth = months[now.getMonth()];
let currentYear = now.getFullYear();
currentDate.innerHTML = `${currentMonth}, ${currentDay}th ${currentYear}`;

function showTemperature(response) {
  let degres = document.querySelector(".degres");
  let temperature = Math.round(response.data.main.temp);
  degres.innerHTML = `${temperature}ºC`;
  let weatherDescription = document.querySelector(".weatherinfo");
  let description = response.data.weather[0].description;
  weatherDescription.innerHTML = `${description}`;
  let citySearched = document.querySelector(".city");

  citySearched.innerHTML = response.data.name;
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "702a27453c60ab3e15c6101724f06473";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const axios = require("axios");
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#citysearch");
form.addEventListener("submit", searchCity);

function searchPosition(position) {
  let apiKey = "702a27453c60ab3e15c6101724f06473";
  let lat = "position.coords.latitude";
  let lon = "position.coords.longitude";
  let apiPositionUrl = `https;//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const axios = require("axios");
  axios.get(apiPositionUrl).then(showTemperature);
}

function currentPositionWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchPosition);
}

let locationButton = document.querySelector("#currentlocation");
locationButton.addEventListener("click", currentPositionWeather);
