import { useEffect, useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ name, profileImage, children }) {
  const [clsName, setClsName] = useState('fadeIn');

  useEffect(() => {
    return () => setClsName('fadeOut');
  }, []);

  return (
    <div className={`profile-card ${clsName}`}>
      <h3>{name}</h3>
      <img src={profileImage} />
      {children}
    </div>
  );
}

export default ProfileCard;
