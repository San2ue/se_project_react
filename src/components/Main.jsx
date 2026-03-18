import "../blocks/Main.css";
import { useContext } from "react";
import { defaultClothingItems } from "../utils/constant";
import ItemCard from "./ItemCard";
import WeatherCard from "./WeatherCard";
import { defaultWeatherOptions } from "../utils/constant";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, handleCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredItems = defaultClothingItems.filter(
    (item) => item.weather === weatherData.type,
  );

  return (
    <main>
      <WeatherCard
        weatherData={weatherData}
        defaultWeatherOptions={defaultWeatherOptions}
        currentTemperatureUnit={currentTemperatureUnit}
      />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]}{" "}
          {currentTemperatureUnit} / You may want to wear
        </p>
        <ul className="cards__list">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            ))
          ) : (
            <p>No clothing items available for this weather.</p>
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;
