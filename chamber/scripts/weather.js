const apiKey = "6931ad55409e755a50fcfd0035e169ff";
const city = "Antipolo";
const country = "PH";

async function getWeather() {
    // Current weather
    const currentUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

    const currentResponse = await fetch(currentUrl);
    const currentData = await currentResponse.json();

    document.querySelector("#temperature").textContent =
        `Temperature: ${currentData.main.temp}°C`;

    document.querySelector("#description").textContent =
        `Conditions: ${currentData.weather[0].description}`;

    // 5-day forecast
    const forecastUrl =
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`;

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    displayForecast(forecastData);
}

function displayForecast(data) {
    const container = document.querySelector("#forecast-container");

    container.innerHTML = "";

    // Get one forecast for each of the next 3 days
    const days = {};

    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        if (!days[day]) {
            days[day] = item;
        }
    });

    const forecastDays = Object.values(days).slice(1, 4);

    forecastDays.forEach(item => {
        const date = new Date(item.dt * 1000);

        container.innerHTML += `
            <div class="forecast-card">
                <h4>
                    ${date.toLocaleDateString("en-US", {
                        weekday: "long"
                    })}
                </h4>

                <p>Temperature: ${item.main.temp}°C</p>

                <p>
                    ${item.weather[0].description}
                </p>
            </div>
        `;
    });
}

getWeather();