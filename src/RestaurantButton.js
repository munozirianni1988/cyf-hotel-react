import React, { useState } from "react";

function RestaurantButton({ setOrder }) {
  return (
    <button className="btn btn-primary" onClick={setOrder}>
      Add
    </button>
  );
}

export default RestaurantButton;
