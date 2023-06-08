import React from 'react';
import './footer.css'

const props = ["123 Fake Street, London, E1 4UD", 
"hello@fakehotel.com", "0123 456789"]

function Footer(){
    const footerAddress = props.map((list)=>{
    return (<div className='address' key={list}>
        <ul>
          <li>{list}</li>
        </ul>
        </div>
    )})
 return <div>{address}</div>

};

export default Footer;