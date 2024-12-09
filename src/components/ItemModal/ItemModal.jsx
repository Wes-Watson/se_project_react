import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemModal({
  openModal,
  card,
  closeModal,
  handleOverlay,
  handleDeleteClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  return (
    <div
      className={`modal ${openModal === "view image" ? "modal_open" : ""}`}
      onClick={handleOverlay}
    >
      <div className={`modal__container   modal__container_type_card`}>
        <button
          onClick={closeModal}
          type="button"
          className="modal__close"
        ></button>
        <img className="modal__image" src={card.imageUrl} alt={card.name} />
        <div className="modal__footer">
          <div>
            <h2 className="modal__text">{card.name}</h2>
            <p className="modal__weather">weather: {card.weather}</p>
          </div>
          {isOwn && (
            <button className="modal__delete" onClick={handleDeleteClick}>
              {" "}
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
