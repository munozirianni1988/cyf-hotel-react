import React,{useState} from "react";
import moment from "moment";

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
          {results.map((element) => {
            const startDate = moment(element.checkInDate);
            const endDate = moment(element.checkOutDate);
            const stay = endDate.diff(startDate, 'days');

            const [isRowSelected,SetIsRowSelected]= useState();
            const handleClick= ()=>{
              SetIsRowSelected(!isRowSelected);
            }

            let rowStyle= {}

            if (isRowSelected){
              rowStyle={ backgroundColor: "orange" };
            }
  
            return (
              
              <>
                <tr
                  onClick={handleClick} style={rowStyle} key={element.id}>
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
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SearchResults;
