import React from "react";

function SearchResults({results}) {
  return (
   <><table class="table table-hover table-white">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr id="1">
          <th scope="row">Mr</th>
          <td>John</td>
          <td>Doe</td>
          <td>johndoe@doe.com</td>
          <td>2</td>
          <td>2017-11-21</td>
          <td>2017-11-23</td>
        </tr>
        <tr id="2">
          <th scope="row">Dr</th>
          <td>Sadia</td>
          <td>Begum</td>
          <td>begum_sadia@sadia.org</td>
          <td>1</td>
          <td>2018-02-15</td>
          <td>2018-02-28</td>
        </tr>
        <tr id="3">
          <th scope="row">Prince</th>
          <td>Henry</td>
          <td>Wales</td>
          <td>harry@wales.com</td>
          <td>5</td>
          <td>2018-03-01</td>
          <td>2018-04-09</td>
        </tr>
        <tr id="4">
          <th scope="row">Dame</th>
          <td>Judy</td>
          <td>Dench</td>
          <td>Judi@dench.co.uk</td>
          <td>6</td>
          <td>2017-12-25</td>
          <td>2018-01-03</td>
        </tr>
        <tr id="5">
          <th scope="row">Madam</th>
          <td>Anuradha</td>
          <td>Selvam</td>
          <td>anu@selvam.net</td>
          <td>3</td>
          <td>2017-08-30</td>
          <td>2017-10-02</td>
        </tr> */}
        {results.map((element)=>{
     return <><tr><td>{element.id}</td>
     <td>{element.title}</td>
     <td>{element.firstName}</td>
     <td>{element.surname}</td>
     <td>{element.email}</td>
     <td>{element.roomId}</td>
     <td>{element.checkInDate}</td>
     <td>{element.checkOutDate}</td></tr></>
})}
      </tbody>
    </table></>
  );
}

export default SearchResults;
