import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/SideBar";
import "./App.css";
import Dashboard from "./components/charts/dashboard/Dashboard";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Header />
      <div className="content-container">
        <Sidebar onOptionClick={handleOptionClick} />
        {selectedOption && <Dashboard />}
      </div>
    </div>
  );
}

export default App;
