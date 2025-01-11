import React from "react";
import "../styles/Summary.css";

const Summary = ({ selectedSeats, getSeatPrice, onBook, onClear, error }) => {
  // Calculate the total cost of selected seats by summing their prices
  const totalCost = selectedSeats.reduce((acc, seat) => acc + getSeatPrice(seat[0]), 0);

  return (
    <div className="summary">
      {/* Display the title of the summary section */}
      <h2 className="summary-title">Booking Summary</h2>

      {/* List the selected seats with their price */}
      <ul className="summary-list">
        {selectedSeats.map((seat) => (
          <li key={seat} className="summary-item">
            {/* Displaying the seat ID and its corresponding price */}
            Seat: {seat} | Price: ₹{getSeatPrice(seat[0])}
          </li>
        ))}
      </ul>

      {/* Display the total cost of all selected seats */}
      <p className="total-cost">Total: ₹{totalCost}</p>

      <div className="buttons">
        <div className="book-button" onClick={onBook} disabled={selectedSeats.length === 0}>
          Book Now
        </div>

        <div className="clear-button" onClick={onClear} disabled={selectedSeats.length === 0}>
          Clear
        </div>
      </div>

      {/* Display error message if there's any error */}
      {error && <p className="error">{error}</p>} 
    </div>
  );
};

export default Summary;
