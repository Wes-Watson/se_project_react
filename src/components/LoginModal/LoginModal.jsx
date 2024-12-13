import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  openModal,
  closeModal,
  handleOverlay,
  isOpen,
  logInUser,
  setOpenModal,
}) => {
  //useState functions

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  function formReset() {
    setEmail("");
    setPassword("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    logInUser({ email, password }, formReset);
  };

  const changeModal = (evt) => {
    evt.preventDefault();
    console.log("click");
    setOpenModal("register user");
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
      onSubmit={handleSubmit}
    >
      <label htmlFor="Email" className="modal__label">
        Email{" "}
        <input
          type="Email"
          className="modal__input"
          id="Log in"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="Input Password" className="modal__label">
        Password{" "}
        <input
          type="Password"
          className="modal__input"
          id="Input Password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
