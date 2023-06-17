import React from "react";

const Restaurant = () => {
<<<<<<< Updated upstream
  const pizzas = 0;
=======
  //const pizzas = 0;
  function orderOne(){
    return setOrders(orders + 1)
  }
  const [orders, setOrders] = useState(0);
>>>>>>> Stashed changes
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
<<<<<<< Updated upstream
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
=======
          Pizzas: {orders} <button onClick={orderOne}className="btn btn-primary">Add</button>
>>>>>>> Stashed changes
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
