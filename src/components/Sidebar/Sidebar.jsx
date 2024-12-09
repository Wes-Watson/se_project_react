import "./Sidebar.css";
import userAvatar from "../../assets/avatar.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Sidebar({editUserClick}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__user-container">
        <img
          src={currentUser.avatar}
          alt="User Avatar"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__button-container">
        <button
          className="sidebar__button"
          type="button"
          onClick={editUserClick}
        >
          Change profile data
        </button>
        <button className="sidebar__button">Log out</button>
      </div>
    </div>
  );
}

export default Sidebar;
