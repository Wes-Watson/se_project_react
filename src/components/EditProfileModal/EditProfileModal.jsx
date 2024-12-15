import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { useEffect } from "react";

const EditProfileModal = ({
  openModal,
  closeModal,
  handleOverlay,
  isOpen,
  setOpenModal,
  updateUser,
}) => {
  const currentUser = useContext(CurrentUserContext);
  //useState functions

  const [name, setName] = useState("");
  useEffect(() => {
    if (currentUser && currentUser.name) {
      setName(currentUser.name);
    } else {
      setName("");
    }
  }, [currentUser]);

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (currentUser && currentUser.avatar) {
      setAvatar(currentUser.avatar);
    } else {
      setAvatar("");
    }
  }, [currentUser]);
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
    console.log(e.target.value);
  };

  function formReset() {
    setName("");
    setAvatar("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, avatar }, formReset);
  };

  return (
    <ModalWithForm
      title="Edit Profile"
      buttonText="Save Changes"
      openModal={openModal}
      closeModal={closeModal}
      handleOverlay={handleOverlay}
      isOpen={openModal === "Edit"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="Edit Name" className="modal__label">
        Name{" "}
        <input
          type="Text"
          className="modal__input"
          id="Edit Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar{" "}
        <input
          type="url"
          className="modal__input"
          id="avatar"
          value={avatar}
          onChange={handleAvatarChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
