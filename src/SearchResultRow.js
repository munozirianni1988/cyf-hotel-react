import React, { useState } from "react";
import moment from "moment";

function SearchResultRow({ element }) {
  const startDate = moment(element.checkInDate);
  const endDate = moment(element.checkOutDate);
  const stay = endDate.diff(startDate, "days");

  const [isRowSelected, SetIsRowSelected] = useState();

  const handleClick = (rowId) => {
    SetIsRowSelected(!isRowSelected);
  };

  let rowStyle = {};

  if (isRowSelected) {
    rowStyle = { backgroundColor: "orange" };
  }

  return (
    <tr onClick={handleClick} style={rowStyle} key={element.id}>
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.firstName}</td>
      <td>{element.surname}</td>
      <td>{element.email}</td>
      <td>{element.roomId}</td>
      <td>{element.checkInDate}</td>
      <td>{element.checkOutDate}</td>
      <td>{stay}</td>
    </tr>
  );
}

export default SearchResultRow;
