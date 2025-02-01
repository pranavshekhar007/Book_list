import Booklist from "./components/Booklist"
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [userName , setUserName] = useState("Pranav Shekhar");

  return(
    <Provider store={appStore}>
      <userContext.Provider value={{loggedInUser: userName, setUserName}}>
      <Header />
        <Outlet />
      </userContext.Provider>
    </Provider>
  )  
}

export default App
