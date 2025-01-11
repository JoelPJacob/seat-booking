import React from "react";
import "../styles/Seat.css";

const Seat = ({ id, price, isSelected, onClick }) => {
  // Function to determine the CSS class based on seat selection and price
  const getSeatClass = () => {
    if (isSelected) return "seat selected";
    if (price === 100) return "seat silver";
    if (price === 150) return "seat gold";
    return "seat platinum";
  };

  return (
    <div
      className={getSeatClass()}
      onClick={onClick}
      title={`Seat: ${id} | Price: ₹${price}`}
    >
      {id}
    </div>
  );
};

export default Seat;
