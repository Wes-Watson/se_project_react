import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import userAvatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  addButtonClick,
  weatherInfo,
  logInClick,
  isLoggedIn,
  signUpClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="Header Logo" />
        </Link>
        <p className="header__information">
          {currentDate}, {weatherInfo.city}
        </p>
      </div>
      {isLoggedIn ? (
        <div className="header__container">
          <ToggleSwitch />

          <button
            onClick={addButtonClick}
            type="button"
            className="header__button"
          >
            + Add Clothes
          </button>

          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <p className="header__username">{currentUser.name}</p>
              {!currentUser.avatar ? (
                <img
                  className="header__avatar"
                  src={userAvatar}
                  alt="User Avatar"
                />
              ) : (
                <img
                  className="header__avatar"
                  src={currentUser.avatar}
                  alt="User Avatar"
                />
              )}
            </div>
          </Link>
        </div>
      ) : (
        <div className="header__container">
          <ToggleSwitch />
          <button onClick={logInClick} className="header__button">
            Log In
          </button>
          <button onClick={signUpClick} className="header__button">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
