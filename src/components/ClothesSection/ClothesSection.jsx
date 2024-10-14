import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
function ClothesSection({ handleImageClick, addButtonClick }) {
  return (
    <div className="clothes">
      <div className="clothes__container">
        <p className="clothes__text">Your items</p>
        <button className="clothes__button" onClick={addButtonClick}>
          + Add new
        </button>
      </div>
      <ul className="cards__list">
        {defaultClothingItems
          //.filter((item) => {
          //return item.weather === weatherInfo.type;
          //})
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
    </div>
  );
}

export default ClothesSection;
