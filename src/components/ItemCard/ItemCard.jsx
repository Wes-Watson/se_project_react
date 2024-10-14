import "./ItemCard.css";

function ItemCard({ item, onImageClick, clothingItems }) {
  const handleImageClick = () => {
    onImageClick(item);
  };
  return (
    <li className="card">
      <h2 className="card__text">{item.name}</h2>
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
