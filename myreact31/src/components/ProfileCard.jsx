import './ProfileCard.css';

function ProfileCard({ name, profileImage, children }) {
  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <img src={profileImage} />
      {children}
    </div>
  );
}

export default ProfileCard;
