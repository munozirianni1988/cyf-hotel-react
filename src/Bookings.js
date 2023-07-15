import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
//https://cyf-react.glitch.me");
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);    
  const [error, setError] = useState(null);
  useEffect(() => {
      try{fetch("https://cyf-react.glitch.me/error")
        .then((response) => response.json())
        .then((data) => {
          setBookings(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }, []);

  const search = (searchVal) => {
    let result = bookings.filter((booking) => {
      return (
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(result);
    console.log(result);
  };
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="App-content">
      {bookings ? (
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      ) : (
        <div>No data to display.</div>
      )}
    </div>
  );
};
export default Bookings;
