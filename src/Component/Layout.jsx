// eslint-disable-next-line no-unused-vars
import React from "react";
import { Header } from "./Header";
import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../UserContex";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

  
function Layout() {

  const [userName,setUserName] = useState()

  useEffect(() =>{
    const data={
      name:"Aj"
    }
    setUserName(data.name)
  }, []);
  return (
    <>
    <Provider store={appStore}>

    <UserContext.Provider value={{loggedUser:userName}}>

 
      <Header />
        <div>
          <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>

      
    </>
  );
}

export default Layout;
