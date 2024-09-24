import "./ItemModal.css";

function ItemModal({ openModal, card, closeModal, handleOverlay }) {
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
        <img className="modal__image" src={card.link} alt={card.name} />
        <div className="modal__footer">
          <h2 className="modal__text">{card.name}</h2>
          <p className="modal__weather">weather:{card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
