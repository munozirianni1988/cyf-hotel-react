import React from "react";

const Restaurant = () => {
  //const pizzas = 0;
  function orderOne(){
    return setOrders(orders + 1)
  }
  const [orders, setOrders] = useState(0);
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <button onClick={orderOne}className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
