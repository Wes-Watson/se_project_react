import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherInfo, handleImageClick }) {
  //const {currentTemperatureUnit}   = useContext(
  //CurrentTemperatureUnitContext
  //);
  //console.log(currentTemperatureUnit);
  const { currentTemperatureUnit, handleToggleChange } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <main>
      <WeatherCard weatherInfo={weatherInfo} />
      <section className="cards">
        <p className="cards__info">
          Today is {weatherInfo?.temp?.[currentTemperatureUnit]} &deg; / You may
          want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherInfo.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onImageClick={handleImageClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
