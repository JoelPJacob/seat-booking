import React from "react";
import "../styles/Summary.css";

const Summary = ({ selectedSeats, getSeatPrice, onBook, onClear, error }) => {
  const totalCost = selectedSeats.reduce((acc, seat) => acc + getSeatPrice(seat[0]), 0);

  return (
    <div className="summary">
      <h2 className="summary-title">Booking Summary</h2>
      <ul className="summary-list">
        {selectedSeats.map((seat) => (
          <li key={seat} className="summary-item">
            Seat: {seat} | Price: ₹{getSeatPrice(seat[0])}
          </li>
        ))}
      </ul>
      <p className="total-cost">Total: ₹{totalCost}</p>
      <div className="buttons">
        <div className="book-button" onClick={onBook} disabled={selectedSeats.length === 0}>
          Book Now
        </div>
        <div className="clear-button" onClick={onClear} disabled={selectedSeats.length === 0}>
          Clear
        </div>
      </div>
      {error && <p className="error">{error}</p>} 
    </div>
  );
};

export default Summary;
