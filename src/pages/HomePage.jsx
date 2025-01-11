import React, { useState } from "react";
import SeatGrid from "../components/SeatGrid";
import Summary from "../components/Summary";
import "../styles/HomePage.css";

const HomePage = () => {
  // Defining rows and seats per row
  const rows = ["A", "B", "C", "D", "E", "F"];
  const seatsPerRow = 10;

  // Defining the price structure for different seat types
  const pricing = { Silver: 100, Gold: 150, Platinum: 200 };

  // State to keep track of selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to determine the price of a seat based on its row
  const getSeatPrice = (row) => {
    if (["A", "B"].includes(row)) return pricing.Platinum;
    if (["C", "D"].includes(row)) return pricing.Gold;
    return pricing.Silver;
  };

  // Toggle the selection of a seat
  const toggleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      // If seat is already selected, remove it from the selection
      setSelectedSeats((prev) => prev.filter((s) => s !== seat));
    } else {
      // If seat is not selected, add it to the selection, but limit to 8 seats
      if (selectedSeats.length < 8) {
        setSelectedSeats((prev) => [...prev, seat]);
      } else {
        // Alert if more than 8 seats are selected
        alert("You can only select up to 8 seats.");
      }
    }
  };

  // Handle the booking of selected seats
  const handleBookSeats = () => {
    if (selectedSeats.length > 0) {
      alert("Seats booked successfully!");
      setSelectedSeats([]); // Clear selected seats after booking
    }
  };

  // Handle clearing the selection of seats
  const handleClearSeats = () => {
    setSelectedSeats([]); // Reset the selected seats
  };

  return (
    <div className="app">
      <h1 className="app-title">Seat Booking System</h1>
      {/* Passing necessary props to the SeatGrid component */}
      <SeatGrid
        rows={rows}
        seatsPerRow={seatsPerRow}
        selectedSeats={selectedSeats}
        getSeatPrice={getSeatPrice}
        toggleSeatSelection={toggleSeatSelection}
      />
      {/* Passing necessary props to the Summary component */}
      <Summary
        selectedSeats={selectedSeats}
        getSeatPrice={getSeatPrice}
        onBook={handleBookSeats}
        onClear={handleClearSeats}
      />
    </div>
  );
}

export default HomePage;