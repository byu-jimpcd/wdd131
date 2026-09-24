const temperature = 15;
const windSpeed = 6;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

const windChillElement = document.querySelector("#windchill");
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)}°C`;
} else {
    windChillElement.textContent = "N/A";
}