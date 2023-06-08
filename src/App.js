import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Footer from "./footer"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <Footer className="footer"/>
    </div>
  );
};

export default App;
