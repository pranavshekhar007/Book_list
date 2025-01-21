import Booklist from "./components/Booklist"
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {

  return(
    <>
      <Header />
      <Outlet />
    </>
  )  
}

export default App
