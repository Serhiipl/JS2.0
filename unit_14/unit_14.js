"use strict";

// choose selects in variables
const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");

//new array
let cities = [];

// add listener on country select change
function selectedCountryFunc(event) {
  const selectedCountry = event.target.value;

  citySelect.innerHTML = "";

  const filteredCities = cities.filter(
    (city) => city.country === selectedCountry
  );

  filteredCities.forEach((city) => {
    let cityOpt = document.createElement("option");
    cityOpt.text = city.name;
    cityOpt.value = city.id;
    citySelect.appendChild(cityOpt);
  });
}

countrySelect.addEventListener("change", selectedCountryFunc);
// countrySelect.addEventListener("change", (event) => {
//   const selectedCountry = event.target.value;

//   citySelect.innerHTML = "";

//   const filteredCities = cities.filter(
//     (city) => city.country === selectedCountry
//   );

//   filteredCities.forEach((city) => {
//     let cityOpt = document.createElement("option");
//     cityOpt.text = city.name;
//     cityOpt.value = city.id;
//     citySelect.appendChild(cityOpt);
//   });
// });

// fetch parameters
const params = {
  url: "http://api.openweathermap.org/data/2.5/",
  apikey: "63b19f2b935cc04800813e5ba7ff3f10",
};

citySelect.addEventListener("change", (event) => {
  const selectedCity = event.target.value;
  getWeather();
});

function getWeather() {
  const cityId = document.querySelector("#city").value;
  // console.log(cityId);
  fetch(`${params.url}weather?id=${cityId}&units=metric&APPID=${params.apikey}`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}
function showWeather(weather) {
  console.log(weather);
  document.querySelector(".city-name").textContent = weather.name;
  document.querySelector(".actual-temp").innerHTML = `${
    Math.round(weather.main.temp) + "&deg"
  }`;
  document.querySelector(".min-temp").innerHTML = `Min:${
    Math.round(weather.main.temp_min) + "&deg"
  }`;
  document.querySelector(".max-temp").innerHTML = `Max:${
    Math.round(weather.main.temp_max) + "&deg"
  }`;
  document.querySelector(".description").textContent =
    weather.weather[0]["description"];
}

// download data from json file
fetch("cities.json")
  .then((response) => response.json())
  .then((data) => {
    cities = data;
    selectedCountryFunc({ target: countrySelect });
  })
  .then(getWeather)
  .catch((error) => {
    console.log("Download data error");
  });
