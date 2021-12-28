import './ProfileNav.css';

function ProfileNav({
  uniqueIdList,
  selectedProfileUniqueId,
  setSelectedProfileUniqueId,
}) {
  return (
    <div className="profile-nav">
      <ul>
        {uniqueIdList.map((unique_id) => (
          <li
            className={`${
              selectedProfileUniqueId === unique_id ? 'selected' : ''
            }`}
            onClick={() => setSelectedProfileUniqueId(unique_id)}
          >
            {unique_id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileNav;
