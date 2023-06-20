import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ orderType }) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    return setOrders(orders + 1);
  }
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton setOrder={orderOne} />
    </li>
  );
}

export default Order;
