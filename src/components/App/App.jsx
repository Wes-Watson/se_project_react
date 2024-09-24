import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { location } from "../../utils/constants";
import { APIkey } from "../../utils/constants";
import { callWeather } from "../../utils/weatherApi";
import { handleWeatherData } from "../../utils/weatherApi";

function App() {
  //Global Functions
  const [weatherInfo, setWeatherInfo] = useState({
    type: "",
    temperature: { F: 999 },
    city: "",
  });
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

  const handleOverlay = (evt) => {
    if (evt.target.classList.contains("modal_open")) {
      closeModal();
    }
  };

  // useEffect Functions
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

  useEffect(() => {
    callWeather(location, APIkey)
      .then((res) => {
        console.log(res);
        const filterWeather = handleWeatherData(res);
        setWeatherInfo(filterWeather);
      })
      .catch(console.error);
  }, []);

  //Page Markup
  return (
    <div className="page">
      <div className="page__content">
        <Header addButtonClick={addButtonClick} weatherInfo={weatherInfo} />
        <Main weatherInfo={weatherInfo} handleImageClick={handleImageClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        openModal={openModal}
        closeModal={closeModal}
        handleOverlay={handleOverlay}
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
        handleOverlay={handleOverlay}
      />
    </div>
  );
}

export default App;
