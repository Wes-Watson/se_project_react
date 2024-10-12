import "./WeatherCard.css";
import sunny from "../../assets/sunny.png";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherInfo }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <section className="weather">
      <p className="weather__info">
        {weatherInfo[currentTemperatureUnit]} &deg;{currentTemperatureUnit}
      </p>
      <img className="weather__image" src={sunny} alt="Weather Image" />
    </section>
  );
}

export default WeatherCard;
