//import sunny from "../images/day/sunny.svg";
import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constant";

function WeatherCard({
  weatherData,
  defaultWeatherOptions,
  currentTemperatureUnit,
}) {
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
        {" "}
        {temperature}
        {currentTemperatureUnit}{" "}
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
/*return (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg;</p>
      <img className="weather-card__img" src={sunny} alt="sunny" />
    </section>
  );
}*/

export default WeatherCard;
