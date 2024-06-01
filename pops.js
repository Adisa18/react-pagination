import React from 'react';

const UserPopup = ({ user, onClose }) => {
  return (
    <div>
      <div>
        <img src={user.avatar} alt={user.first_name} />
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <p>{user.email}</p>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default UserPopup;

