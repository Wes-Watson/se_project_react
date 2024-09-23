import "./WeatherCard.css";
import sunny from "../../assets/sunny.png";

function WeatherCard() {
  return (
    <section className="weather">
      <p className="weather__info">75 &deg; F</p>
      <img className="weather__image" src={sunny} alt="Weather Image" />
    </section>
  );
}

export default WeatherCard;
