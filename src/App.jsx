import React, { useState } from "react";
import SeatGrid from "./components/SeatGrid";
import Summary from "./components/Summary";
import "./styles/App.css";

const App = () => {
  const rows = ["A", "B", "C", "D", "E", "F"];
  const seatsPerRow = 10;
  const pricing = { Silver: 100, Gold: 150, Platinum: 200 };

  const [selectedSeats, setSelectedSeats] = useState([]);

  const getSeatPrice = (row) => {
    if (["A", "B"].includes(row)) return pricing.Silver;
    if (["C", "D"].includes(row)) return pricing.Gold;
    return pricing.Platinum;
  };

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : prev.length < 8
        ? [...prev, seat]
        : prev 
    );
  };

  const handleBookSeats = () => {
    if (selectedSeats.length > 0) {
      alert("Seats booked successfully!");
      setSelectedSeats([]); 
    }
  };

  const handleClearSeats = () => {
    setSelectedSeats([]);
  };

  return (
    <div className="app">
      <h1 className="app-title">Seat Booking System</h1>
      <SeatGrid
        rows={rows}
        seatsPerRow={seatsPerRow}
        selectedSeats={selectedSeats}
        getSeatPrice={getSeatPrice}
        toggleSeatSelection={toggleSeatSelection}
      />
      <Summary
        selectedSeats={selectedSeats}
        getSeatPrice={getSeatPrice}
        onBook={handleBookSeats}
        onClear={handleClearSeats}
      />
    </div>
  );
};

export default App;
