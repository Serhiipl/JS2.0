const cities = [
  {
    id: 702550,
    name: "Lviv",
    state: "",
    country: "UA",
    coord: {
      lon: 24.023239,
      lat: 49.838261,
    },
  },
  {
    id: 703448,
    name: "Kyiv",
    state: "",
    country: "UA",
    coord: {
      lon: 30.516666,
      lat: 50.433334,
    },
  },
  {
    id: 698740,
    name: "Odessa",
    state: "",
    country: "UA",
    coord: {
      lon: 30.732622,
      lat: 46.477474,
    },
  },
  {
    id: 691650,
    name: "Ternopil",
    state: "",
    country: "UA",
    coord: {
      lon: 25.60556,
      lat: 49.555889,
    },
  },
  {
    id: 706369,
    name: "Khmelnytskyi",
    state: "",
    country: "UA",
    coord: {
      lon: 26.996531,
      lat: 49.421612,
    },
  },
  {
    id: 710719,
    name: "Chernivtsi",
    state: "",
    country: "UA",
    coord: {
      lon: 25.94034,
      lat: 48.291489,
    },
  },
  {
    id: 756135,
    name: "Warsaw",
    state: "",
    country: "PL",
    coord: {
      lon: 21.01178,
      lat: 52.229771,
    },
  },
  {
    id: 3099434,
    name: "Gdańsk",
    state: "",
    country: "PL",
    coord: {
      lon: 18.64637,
      lat: 54.352051,
    },
  },
  {
    id: 3081368,
    name: "Wrocław",
    state: "",
    country: "PL",
    coord: {
      lon: 17.033331,
      lat: 51.099998,
    },
  },
  {
    id: 3088171,
    name: "Poznań",
    state: "",
    country: "PL",
    coord: {
      lon: 16.92993,
      lat: 52.406921,
    },
  },
  {
    id: 765876,
    name: "Lublin",
    state: "",
    country: "PL",
    coord: {
      lon: 22.566669,
      lat: 51.25,
    },
  },
  {
    id: 3093133,
    name: "Łódź",
    state: "",
    country: "PL",
    coord: {
      lon: 19.466669,
      lat: 51.75,
    },
  },
  {
    id: 2643743,
    name: "London",
    state: "",
    country: "GB",
    coord: {
      lon: -0.12574,
      lat: 51.50853,
    },
  },
  {
    id: 2643123,
    name: "Manchester",
    state: "",
    country: "GB",
    coord: {
      lon: -2.23743,
      lat: 53.480949,
    },
  },
  {
    id: 2650225,
    name: "Edinburgh",
    state: "",
    country: "GB",
    coord: {
      lon: -3.19648,
      lat: 55.952061,
    },
  },
];
const citySelect = document.getElementById("city");
let directionImg = document.querySelector(".wind-direction-img");
// змінні для функції напрямку вітру
let degree;
let direction;
// генеруємо опції в селект
for (let i = 0; i < cities.length; i++) {
  let cityOpt = document.createElement("option");
  cityOpt.text = cities[i].name;
  cityOpt.value = cities[i].id;
  citySelect.appendChild(cityOpt);
}
// параметри для запиту
const params = {
  url: "http://api.openweathermap.org/data/2.5/",
  apikey: "63b19f2b935cc04800813e5ba7ff3f10",
};

citySelect.addEventListener("change", getWeather);
// функція яка отримує погоду
function getWeather() {
  const cityId = document.querySelector("#city").value;
  console.log(cityId);
  fetch(`${params.url}weather?id=${cityId}&units=metric&APPID=${params.apikey}`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}
getWeather();

// функція напрямку вітру
function windDirection() {
  if (degree === 0 || degree === 360) {
    direction = "N";
  } else if (degree > 0 && degree < 90) {
    direction = "NE";
  } else if (degree === 90) {
    direction = "E";
  } else if (degree > 90 && degree < 180) {
    direction = "SE";
  } else if (degree === 180) {
    direction = "S";
  } else if (degree > 180 && degree < 270) {
    direction = "SW";
  } else if (degree === 270) {
    direction = "W";
  } else if (degree > 270 && degree < 360) {
    direction = "NW";
  } else {
    direction = "-";
  }

  return direction;
}
// функція показу погоди
function showWeather(weather) {
  console.log(weather);
  document.querySelector(".city-name").textContent = weather.name.toUpperCase();
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
  document.querySelector(
    "#icon"
  ).src = `https://openweathermap.org/img/wn/${weather.weather[0]["icon"]}@2x.png`;

  document.querySelector(".pressure-units").textContent = `Pressure:
  ${weather.main.pressure} hPa.`;
  document.querySelector(
    ".humidity-units"
  ).textContent = `Humidity: ${weather.main.humidity}%`;

  degree = weather.wind.deg;
  windDirection();
  document.querySelector(".wind-direction").textContent = `${direction}`;
  document.querySelector(
    ".speed"
  ).textContent = `Speed:${weather.wind.speed} m/s`;
  directionImg.style.rotate = degree + "deg";
}
