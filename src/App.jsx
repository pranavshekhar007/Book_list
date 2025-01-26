import Booklist from "./components/Booklist"
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { useState } from "react";

function App() {
  const [userName , setUserName] = useState("Pranav Shekhar");

  return(
    <>
      <Header />
      <userContext.Provider value={{loggedInUser: userName, setUserName}}>
        <Outlet />
      </userContext.Provider>
    </>
  )  
}

export default App
