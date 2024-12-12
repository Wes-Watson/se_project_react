import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import {
  getItems,
  addClothing,
  deleteClothing,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import * as auth from "../../utils/auth";
import ProtectedRoute from "../../utils/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  //Global Functions
  const [weatherInfo, setWeatherInfo] = useState({
    type: "",
    temperature: { F: 999, C: 999 },
    city: "",
  });

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const addButtonClick = () => {
    setOpenModal("add clothing");
  };

  const logInClick = () => {
    setOpenModal("log in");
  };

  const editUserClick = () => {
    setOpenModal("Edit");
  };

  const signUpClick = () => {
    setOpenModal("register user");
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
    const token = localStorage.getItem("jwt");

    addClothing(item, token)
      .then((item) => {
        setClothingItems([item.data, ...clothingItems]);
        closeModal();
        formReset();
      })

      .catch(console.error);
  };

  const registerUser = ({ email, password, name, avatar }, formReset) => {
    auth
      .signUp({ email, password, name, avatar })
      .then(() => {
        closeModal();
        formReset();
        logInUser({ email, password });
      })
      .catch(console.error);
  };

  const logInUser = ({ email, password }, formReset) => {
    if (!email || !password) {
      return;
    }
    auth
      .signIn({ email, password })
      .then((data) => {
        auth.getUser(data.token).then((user) => {
          setIsLoggedIn(true);
          setCurrentUser(user);
          closeModal();
          formReset();
          navigate("/profile");
        });
      })
      .catch(console.error);
  };

  const updateUser = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    auth
      .editUser({ name, avatar }, token)
      .then((user) => {
        setCurrentUser(user);
        closeModal();
      })
      .catch(console.error);
  };

  const handleDeleteClick = () => {
    const token = localStorage.getItem("jwt");
    deleteClothing(selectedCard._id, token)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== selectedCard._id)
        );
        closeModal();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ likes, _id }) => {
    const token = localStorage.getItem("jwt");
    const isLiked = likes.includes(currentUser._id);
    if (!isLiked) {
      addCardLike(_id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === _id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
    } else {
      removeCardLike(_id, token)
        .then((updatedCard) => {
          console.log(isLiked);
          setClothingItems((items) =>
            items.map((item) => (item._id === _id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const signOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return;
    }
    auth
      .getUser(token)
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch((err) => {
        console.error;
      });
  }, []);

  //Page Markup
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleChange }}
        >
          <div className="page__content">
            <Header
              addButtonClick={addButtonClick}
              weatherInfo={weatherInfo}
              logInClick={logInClick}
              signUpClick={signUpClick}
              isLoggedIn={isLoggedIn}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherInfo={weatherInfo}
                    handleImageClick={handleImageClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleImageClick={handleImageClick}
                      addButtonClick={addButtonClick}
                      clothingItems={clothingItems}
                      editUserClick={editUserClick}
                      signOut={signOut}
                      onCardLike={handleCardLike}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
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
          <LoginModal
            openModal={openModal}
            closeModal={closeModal}
            handleOverlay={handleOverlay}
            isOpen={openModal === "log in"}
            setOpenModal={setOpenModal}
            logInUser={logInUser}
          />
          <RegisterModal
            openModal={openModal}
            closeModal={closeModal}
            handleOverlay={handleOverlay}
            isOpen={openModal === "register user"}
            setOpenModal={setOpenModal}
            registerUser={registerUser}
          />
          <EditProfileModal
            openModal={openModal}
            closeModal={closeModal}
            handleOverlay={handleOverlay}
            isOpen={openModal === "Edit"}
            setOpenModal={setOpenModal}
            updateUser={updateUser}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
