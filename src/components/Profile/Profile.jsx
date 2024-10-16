import "./Profile.css";
//import userAvatar from "../../assets/avatar.png";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ handleImageClick, addButtonClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar />
      </section>
      <section className="profile__clothing">
        <ClothesSection
          handleImageClick={handleImageClick}
          addButtonClick={addButtonClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
}

export default Profile;
