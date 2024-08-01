import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const sidebarToggleHandler = () => {
    setOpenSidebarToggle((prevSate) => !prevSate);
  };

  return (
    <div className="grid-container">
      <Header openSidebar={sidebarToggleHandler} />
      <Sidebar sidebarToggle={openSidebarToggle} openSidebar={sidebarToggleHandler}/>
      <Home />
    </div>
  );
}

export default App;
