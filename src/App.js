import React from "react";

import TouristInfoCards from "./TouristInfoCards";

import Bookings from "./Bookings";
import "./App.css";
import Footer from "./footer"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <Footer className="footer"/>
      <TouristInfoCards />
    </div>
  );
};

export default App;
