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

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const [weather, setTemp] = useState("");
  const handleTempChange = (e) => {
    setTemp(e.target.value);
    console.log(e.target.value);
  };

  function formReset() {
    setEmail("");
    setPassword("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather }, formReset);
  };

  const addButtonClick = () => {
    setOpenModal("add clothing");
  };

  const changeModal = () => {
    console.log("click");
    //openModal === "register user";
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      additionalText="or Sign up"
      openModal={openModal}
      closeModal={closeModal}
      handleOverlay={handleOverlay}
      isOpen={openModal === "log in"}
      changeModal={changeModal}
      //onSubmit={handleSubmit}
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
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
