import "./Sidebar.css";
import userAvatar from "../../assets/avatar.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={userAvatar} alt="User Avatar" className="sidebar__avatar" />
      <p className="sidebar__username">User Name</p>
    </div>
  );
}

export default Sidebar;
