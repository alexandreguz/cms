import react from 'react';
import { useEffect, useState } from "react";

////////////////////////////////////////



const Home = (props) => {

const [customers, setCustomers] = useState([]);    
    
useEffect(() => {
  fetch('http://localhost:5000/api/customers')
    .then(res => res.json())
    .then(data => {
      setCustomers(data);
    })
}, []);


return (
  <div className="App">
    <ul>
      {customers.map(customer => (
        <li key={customer.id}>
          {customer.firstName} {customer.lastName}
        </li>
      ))}
    </ul>
  </div>
 );
};

export default Home