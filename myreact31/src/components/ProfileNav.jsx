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
          <li onClick={() => setSelectedProfileUniqueId(unique_id)}>
            {unique_id}
            {selectedProfileUniqueId === unique_id && '⬅ 선택됨'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileNav;
