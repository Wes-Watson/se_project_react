import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({
  openModal,
  closeModal,
  handleOverlay,
  isOpen,
  onAddItem,
}) => {
  //useState functions
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setURL] = useState("");
  const handleURLChange = (e) => {
    console.log(e.target.value);
    setURL(e.target.value);
  };

  const [weather, setTemp] = useState("");
  const handleTempChange = (e) => {
    setTemp(e.target.value);
    console.log(e.target.value);
  };

  function formReset() {
    setTemp("");
    setURL("");
    setName("");
    console.log("reset");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather }, formReset);
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      openModal={openModal}
      closeModal={closeModal}
      handleOverlay={handleOverlay}
      isOpen={openModal === "add clothing"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="image" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="image"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleURLChange}
        />
      </label>
      <fieldset className="modal__radio">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="hot"
            name="answer"
            checked={weather === "hot"}
            value="hot"
            onChange={handleTempChange}
          ></input>
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="warm"
            name="answer"
            checked={weather === "warm"}
            value="warm"
            onChange={handleTempChange}
          ></input>
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="cold"
            name="answer"
            checked={weather === "cold"}
            value="cold"
            onChange={handleTempChange}
          ></input>
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export { formReset };

export default AddItemModal;
