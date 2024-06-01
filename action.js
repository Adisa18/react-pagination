 


let  Fetchusers = (page) => async (dispatch) => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await response.json();
  
      if (response.ok) {
        dispatch({ type: 'FETCH_USERS', payload: data });
      } else {
        throw new Error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  export default Fetchusers;