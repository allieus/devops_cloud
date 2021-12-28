import { useEffect, useState } from 'react';
import './ProfileCard.css';

function ProfileCard({
  name,
  profileImage,
  role,
  mbti,
  instagramUrl,
  children,
}) {
  const [clsName, setClsName] = useState('fadeIn');

  useEffect(() => {
    return () => setClsName('fadeOut');
  }, []);

  return (
    <div className={`profile-card ${clsName}`}>
      <h3>{name}</h3>
      <ul>
        <li>{role}</li>
        <li>{mbti}</li>
        <li>
          <a href={instagramUrl} target="_blank">
            {instagramUrl}
          </a>
        </li>
      </ul>
      <img src={profileImage} />
      {children}
    </div>
  );
}

export default ProfileCard;
