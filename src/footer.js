import React from 'react';


const props = ["123 Fake Street, London, E1 4UD", 
"hello@fakehotel.com", "0123 456789"] // create an array with the data

function Footer(){
    const footerAddress = props.map((list)=>{
    return (<div className='footer' key={list}>
        <ul>
          <li>{list}</li>
        </ul>
        </div>
    )})
 return <div>{footerAddress}</div>

};

export default Footer;