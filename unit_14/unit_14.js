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
