import "./WeatherCard.css";
import sunny from "../../assets/sunny.png";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherInfo }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(weatherInfo);
  return (
    <section className="weather">
      <p className="weather__info">
        {weatherInfo?.temp?.[currentTemperatureUnit]} &deg;
        {currentTemperatureUnit}
      </p>
      <img className="weather__image" src={sunny} alt="Weather Image" />
    </section>
  );
}

export default WeatherCard;
