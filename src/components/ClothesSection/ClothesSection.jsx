import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ClothesSection({
  handleImageClick,
  addButtonClick,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter((item) => {
    return item.owner === currentUser._id;
  });
  return (
    <div className="clothes">
      <div className="clothes__container">
        <p className="clothes__text">Your items</p>
        <button className="clothes__button" onClick={addButtonClick}>
          + Add new
        </button>
      </div>
      <ul className="cards__list">
        {userItems
          //.filter((item) => {
          //return item.weather === weatherInfo.type;
          //})
          .map((item) => {
            return (
              <ItemCard
                isLoggedIn={isLoggedIn}
                key={item._id}
                item={item}
                onImageClick={handleImageClick}
                onCardLike={onCardLike}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
