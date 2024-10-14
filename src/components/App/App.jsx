import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, addClothing, deleteClothing } from "../../utils/api";

function App() {
  //Global Functions
  const [weatherInfo, setWeatherInfo] = useState({
    type: "",
    temperature: { F: 999, C: 999 },
    city: "",
  });

  const [openModal, setOpenModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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

  const handleToggleChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const onAddItem = (item, formReset) => {
    console.log(item);
    addClothing(item)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        closeModal();
        formReset();
      })
      .catch(console.error);
  };

  const handleDeleteClick = () => {
    deleteClothing(selectedCard._id)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== selectedCard._id)
        );
        closeModal();
      })
      .catch(console.error);
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
        console.log(filterWeather);
        setWeatherInfo(filterWeather);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        console.log(data);
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  //Page Markup
  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleChange }}
      >
        <div className="page__content">
          <Header addButtonClick={addButtonClick} weatherInfo={weatherInfo} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherInfo={weatherInfo}
                  handleImageClick={handleImageClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleImageClick={handleImageClick}
                  addButtonClick={addButtonClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>

          <Footer />
        </div>

        <AddItemModal
          openModal={openModal}
          closeModal={closeModal}
          handleOverlay={handleOverlay}
          isOpen={openModal === "add clothing"}
          onAddItem={onAddItem}
        />
        <ItemModal
          openModal={openModal}
          card={selectedCard}
          closeModal={closeModal}
          handleOverlay={handleOverlay}
          handleDeleteClick={handleDeleteClick}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
