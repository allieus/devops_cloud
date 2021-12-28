import { useState } from 'react';
import ProfileCard from 'components/ProfileCard';
import profileListData from 'assets/profile-list.json';
import ProfileNav from 'components/ProfileNav';
import './PageProfile.css';

const uniqueIdList = profileListData.map(({ unique_id }) => unique_id);

function PageProfile() {
  const [selectedProfileUniqueId, setSelectedProfileUniqueId] = useState(
    profileListData[0].unique_id,
  );

  return (
    <div className="page-profile">
      <div className="profile-list">
        {profileListData
          .filter(({ unique_id }) => unique_id === selectedProfileUniqueId)
          .map((profile) => (
            <ProfileCard
              key={profile.unique_id}
              name={profile.name}
              profileImage={`${process.env.PUBLIC_URL}/profile-images/${profile.unique_id}.jpg`}
              role={profile.role}
              mbti={profile.mbti}
              instagramUrl={profile.instagram_url}
            >
              <ProfileNav
                uniqueIdList={uniqueIdList}
                selectedProfileUniqueId={selectedProfileUniqueId}
                setSelectedProfileUniqueId={setSelectedProfileUniqueId}
              />
            </ProfileCard>
          ))}
      </div>
    </div>
  );
}

export default PageProfile;
