//import sunny from "../images/day/sunny.svg";
import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constant";
import { defaultWeatherOptions } from "../utils/constant";

function WeatherCard({ weatherData, currentTemperatureUnit }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData?.isDay &&
      option.condition === weatherData?.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData?.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  const temperature =
    currentTemperatureUnit === "F"
      ? weatherData?.temp?.F
      : weatherData?.temp?.C;
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {Math.round(temperature)}&deg;{currentTemperatureUnit}
      </p>
      <img
        className={`weather-card__img ${
          weatherOption?.condition || "default-condition"
        }`}
        src={weatherOption?.url || "default-image-path"}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"} time ${
          weatherOption?.condition
        } weather`}
      />
    </section>
  );
}

export default WeatherCard;
