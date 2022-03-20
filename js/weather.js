const weather = document.querySelector("#weatherContainer span:first-child");
const city = document.querySelector("#weatherContainer span:last-child");
const loader = document.querySelector(".loader");
const API_KEY = "8266e2e7efc26f84f278ebac8d1fa01f";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
            }
    );
    loader.classList.add("hidden");
}

function onGeoError() {
    alert("Please allow location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);


