import "./WeatherCard.css";
import sunny from "../../assets/sunny.png";

function WeatherCard({ weatherInfo }) {
  return (
    <section className="weather">
      <p className="weather__info">{weatherInfo.temp} &deg; F</p>
      <img className="weather__image" src={sunny} alt="Weather Image" />
    </section>
  );
}

export default WeatherCard;
