const apiKey = "9480513d2fef858eeed72e312d4fff2b";
const form = document.querySelector("form");
const city = document.getElementById("city");
const icon = document.getElementById("icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feels = document.getElementById("feels");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = city.value;
  getWeather(cityValue);
});

async function getWeather(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`,
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log(data);
    temperature.textContent = `${Number(data.main.temp).toFixed(1)}℃`;

    const iconImage = data.weather[0].icon;
    icon.innerHTML = `<img class="h-full object-cover" src="http://openweathermap.org/img/wn/${iconImage}.png" alt="Weather Icon">`;

    description.textContent = `${data.weather[0].description}`;

    feels.textContent = `Feels like: ${Number(data.main.feels_like).toFixed(1)}`;
    humidity.textContent = `Humidity: ${Number(data.main.humidity)}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
  } catch (error) {
    console.error("Try again later");
  }
}
