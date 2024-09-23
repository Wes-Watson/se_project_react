import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherInfo, handleImageClick }) {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__info">Today is 75° F / You may want to wear:</p>
        <ul className="cards__list">
          {defaultClothingItems
            //.filter((item) => {
            //return item.weather === weatherInfo.type;
            //})
            .map((item) => {
              return <ItemCard key={item._id} item={item} onImageClick={handleImageClick}/>;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
