import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  openModal,
  closeModal,
  handleOverlay,
  isOpen,
}) {
  return (
    <div
      className={`modal modal_type_${title} ${(isOpen =
        openModal === "add clothing" ? "modal_open" : "")} `}
      onClick={handleOverlay}
    >
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeModal}
          type="button"
          className="modal__close"
        ></button>
        <form className="modal__form">
          {children}
          <button
            type="submit"
            className="modal__submit modal__submit_disabled"
            disabled="disabled"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
