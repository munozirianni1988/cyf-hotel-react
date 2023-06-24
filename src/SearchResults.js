import React, { useState } from "react";
import moment from "moment";
import SearchResultRow from "./SearchResultRow";

function SearchResults({ results }) {
  return (
    <>
      <table className="table table-hover table-white">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Number of Nights </th>
          </tr>
        </thead>
        <tbody>
          {results.map((element) => (
            <SearchResultRow element={element} key={element.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SearchResults;
