import "./Profile.css";
//import userAvatar from "../../assets/avatar.png";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleImageClick,
  addButtonClick,
  clothingItems,
  editUserClick,
  signOut,
  onCardLike,
  isLoggedIn,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar editUserClick={editUserClick} signOut={signOut} />
      </section>
      <section className="profile__clothing">
        <ClothesSection
          handleImageClick={handleImageClick}
          addButtonClick={addButtonClick}
          clothingItems={clothingItems}
          onCardLike={onCardLike}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </div>
  );
}

export default Profile;
