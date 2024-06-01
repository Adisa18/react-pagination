const initialState = {
    users: [],
    currentPage: 1,
    totalPages: 0,
    showPopup: false,
    selectedUser: null,
  };
  
  const RootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        return {
          ...state,
          users: action.payload.data,
          totalPages: action.payload.total_pages,
        };
      case 'SHOW_POPUP':
        return {
          ...state,
          showPopup: true,
          selectedUser: action.payload,
        };
      case 'HIDE_POPUP':
        return {
          ...state,
          showPopup: false,
          selectedUser: null,
        };
      default:
        return state;
    }
  };
  
  export default RootReducer;