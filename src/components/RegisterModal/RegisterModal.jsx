import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
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

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const [weather, setTemp] = useState("");
  const handleTempChange = (e) => {
    setTemp(e.target.value);
    console.log(e.target.value);
  };

  function formReset() {
    setEmail("");
    setURL("");
    setName("");
    setPassword("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather }, formReset);
  };

  return (
    <ModalWithForm
      title="Register"
      buttonText="Sign Up"
      additionalText="or Login"
      openModal={openModal}
      closeModal={closeModal}
      handleOverlay={handleOverlay}
      isOpen={openModal === "register user"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="Email" className="modal__label">
        Email{" "}
        <input
          type="Email"
          className="modal__input"
          id="Email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor="Password" className="modal__label">
        Password{" "}
        <input
          type="Password"
          className="modal__input"
          id="image"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <label htmlFor="Name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="Name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="image" className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          className="modal__input"
          id="image"
          placeholder="Avatar URL"
          value={imageUrl}
          onChange={handleURLChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
