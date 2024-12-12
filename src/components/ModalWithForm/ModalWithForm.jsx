import "./ModalWithForm.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ModalWithForm({
  children,
  title,
  buttonText,
  openModal,
  closeModal,
  handleOverlay,
  isOpen,
  onSubmit,
  additionalText,
  changeModal,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div
      className={`modal modal_type_${title} ${isOpen ? "modal_open" : ""} `}
      onClick={handleOverlay}
    >
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeModal}
          type="button"
          className="modal__close"
        ></button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__submit_container">
            <button
              type="submit"
              className="modal__submit modal__submit_disabled"
            >
              {buttonText}
            </button>
            <button className="modal__change" onClick={changeModal}>
              {additionalText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
