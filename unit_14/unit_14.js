"use strict";
// download data from json file
fetch("cities.json")
  .then((response) => response.json())
  .then((data) => {
    cities = data;
    console.log(cities);
  });

// choose selects in variables
const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");

//new array
let cities = [];

// add listener on country select change
countrySelect.addEventListener("change", (event) => {
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
});

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
  console.log(cityId);
  fetch(
    `${params.url}weather?id=${cityId}&units=metric&APPID=${params.apikey}`
  ).then((weather) => {
    return weather.json();
  });
  // .then(showWeather);
}
getWeather();
