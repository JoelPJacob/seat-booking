// src/components/Summary.jsx
import React from "react";
// import "./Summary.css";

const Summary = ({ selectedSeats, getSeatPrice, onBook }) => {
  const totalCost = selectedSeats.reduce((acc, seat) => acc + getSeatPrice(seat[0]), 0);

  return (
    <div className="summary">
      <h2>Booking Summary</h2>
      <ul>
        {selectedSeats.map((seat) => (
          <li key={seat}>
            Seat: {seat} | Price: ₹{getSeatPrice(seat[0])}
          </li>
        ))}
      </ul>
      <p>Total: ₹{totalCost}</p>
      <button onClick={onBook} disabled={selectedSeats.length === 0}>
        Book Now
      </button>
      {selectedSeats.length > 8 && <p className="error">You can only select up to 8 seats.</p>}
    </div>
  );
};

export default Summary;
