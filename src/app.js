function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
temperatureElement.innerHTML =  Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = response.data.weather[0].description;
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = response.data.main.humidity;
let windElement = document.querySelector("#wind");
windElement.innerHTML = Math.round(response.data.wind.speed);
}



let apiKey = "1de36ae5f38e4644748b891018ad8ef7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
