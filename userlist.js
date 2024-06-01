import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fetchusers from './action';
import UserPopup from './pops';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, currentPage, totalPages, showPopup, selectedUser } = useSelector((state) => state);

  useEffect(() => {
    dispatch(Fetchusers(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    dispatch(Fetchusers(page));
  };

  const handleUserClick = (user) => {
    if (showPopup) {
      alert('Popup is already open');
    } else {
      dispatch({ type: 'SHOW_POPUP', payload: user });
    }
  };

  const handleClosePopup = () => {
    dispatch({ type: 'HIDE_POPUP' });
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            <img src={user.avatar} alt={user.first_name} />
            <div>
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
      {showPopup && <UserPopup user={selectedUser} onClose={handleClosePopup} />}
    </div>
  );
};

export default UserList;



