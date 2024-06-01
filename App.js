import React from "react";
import UserList from "./userlist";
import RootReducer from "./reducer";
import { Provider } from 'react-redux';


import Fetchusers  from "./action";
import UserPopup from "./pops";





function App(){
  return(<Provider>
    <UserList />
    <RootReducer />
    <UserPopup />
    <Fetchusers />
  </Provider>)

}

export default App;

  
   
   

 


