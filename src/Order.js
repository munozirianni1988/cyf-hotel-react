import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order() {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    return setOrders(orders + 1);
  }
  return (
    <li>
      Pizzas: {orders} <RestaurantButton setOrder={orderOne} />
    </li>
  );
}

export default Order;
