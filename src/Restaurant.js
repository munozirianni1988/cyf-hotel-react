import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  //const pizzas = 0;
  function orderOne() {
    return setOrders(orders + 1);
  }
  const [orders, setOrders] = useState(0);
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton setOrder={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
