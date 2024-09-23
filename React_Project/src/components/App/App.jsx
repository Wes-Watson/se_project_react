import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({ type: "hot" });
  const [openModal, setOpenModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const addButtonClick = () => {
    setOpenModal("add clothing");
  };
  const closeModal = () => {
    setOpenModal("");
  };

  const handleImageClick = (card) => {
    setOpenModal("view image");
    setSelectedCard(card);
  };

  const handleModalClose = (evt) => {
    if (evt.target.classList.contains("modal__open")) {
      closeModal();
    }
  };

  useEffect(() => {
    if (!openModal) return;

    const handleEsc = (evt) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [openModal, closeModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header addButtonClick={addButtonClick} />
        <Main weatherInfo={weatherInfo} handleImageClick={handleImageClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        openModal={openModal}
        closeModal={closeModal}
        handleModalClose={handleModalClose}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="image" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="image"
            placeholder="Image URL"
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
            ></input>
            Hot
          </label>
          <label htmlFor="warm" className="modal__label modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              id="warm"
              name="answer"
            ></input>
            Warm
          </label>
          <label htmlFor="cold" className="modal__label modal__label_radio">
            <input
              type="radio"
              className="modal__radio-input"
              id="cold"
              name="answer"
            ></input>
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        openModal={openModal}
        card={selectedCard}
        closeModal={closeModal}
        handleModalClose={handleModalClose}
      />
    </div>
  );
}

export default App;
