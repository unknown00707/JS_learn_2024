const API_KEY = '904fad5e298dff85547047118c5ab0bd';

function onGEoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weaterContainer = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            const windSpeed = document.querySelector('#weather2 span:nth-child(1)');
            const windDeg = document.querySelector('#weather2 span:nth-child(2)');
            const press = document.querySelector('#weather2 span:nth-child(3)');
            city.innerText = data.name;
            weaterContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            windSpeed.innerText = `wind speed : ${data.wind.speed}`;
            windDeg.innerText = `wind deg : ${data.wind.deg}`;
            press.innerText = `pressure : ${data.main.pressure}`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you..");
}

navigator.geolocation.getCurrentPosition(onGEoOk, onGeoError);
