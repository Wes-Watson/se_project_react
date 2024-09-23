import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import userAvatar from "../../assets/avatar.png";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ addButtonClick, weatherInfo }) {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="Header Logo" />
        <p className="header__information">
          {currentDate}, {weatherInfo.city}
        </p>
      </div>
      <div className="header__container">
        <button
          onClick={addButtonClick}
          type="button"
          className="header__button"
        >
          + Add Clothes
        </button>
        <div className="header__user-container">
          <p className="header__username">User Name</p>
          <img className="header__avatar" src={userAvatar} alt="User Avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
