import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemCard({
  item,
  onImageClick,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  const handleImageClick = () => {
    console.log(item);
    onImageClick(item);
  };
  const handlLike = () => {
    onCardLike(item);
  };

  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes;
  const likeButtonClassName = isLiked
    ? "card__like card__like_active"
    : "card__like";
  return (
    <li className="card">
      <div className="card__container">
        <h2 className="card__text">{item.name}</h2>
        {isLoggedIn ? (
          <button
            className={likeButtonClassName}
            type="button"
            onClick={handlLike}
          ></button>
        ) : (
          <></>
        )}
      </div>
      <img
        onClick={handleImageClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
