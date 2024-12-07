import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather }, formReset);
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      additionalText="or Sign up"
      openModal={openModal}
      closeModal={closeModal}
      handleOverlay={handleOverlay}
      isOpen={openModal === "add clothing"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="Email" className="modal__label">
        Email{" "}
        <input
          type="Email"
          className="modal__input"
          id="Email"
          placeholder="Email"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="Password" className="modal__label">
        Password{" "}
        <input
          type="Password"
          className="modal__input"
          id="image"
          placeholder="Password"
          value={imageUrl}
          onChange={handleURLChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
