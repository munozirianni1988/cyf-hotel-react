import React from "react";

import TouristInfoCards from "./TouristInfoCards";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Footer from "./footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer className="footer" />
    </div>
  );
};

export default App;
