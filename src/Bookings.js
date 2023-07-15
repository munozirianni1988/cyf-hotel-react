import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filterBookings, setFilterBookings] = useState([]);

  useEffect(() => {
    console.log("some text only when the page first renders on the screen");
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setFilterBookings(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // think about putting into separate useEffect
  // consider using useContext (requires more work)
  const search = (searchVal) => {
    let result = bookings.filter((booking) => {
      return (
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
      );
    });
    setFilterBookings(result);
    console.log(result);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={filterBookings} />
      </div>
    </div>
  );
};
export default Bookings;
