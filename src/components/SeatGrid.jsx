// src/components/SeatGrid.jsx
import React from "react";
import Seat from "./Seat";
import "../styles/SeatGrid.css";

const SeatGrid = ({ rows, seatsPerRow, selectedSeats, getSeatPrice, toggleSeatSelection }) => {
    return (
        <>
            <h5 class="seat-legend">
                <span class="seat-platinum">Platinum (₹200)</span>
                <span class="seat-gold">Gold (₹150)</span>
                <span class="seat-silver">Silver (₹100)</span>
            </h5>
            <div className="seat-grid">
                {rows.map((row) => Array(seatsPerRow)
                    .fill()
                    .map((_, index) => {
                        const seatId = `${row}${index + 1}`;
                        const price = getSeatPrice(row);
                        return (
                            <Seat
                                key={seatId}
                                id={seatId}
                                price={price}
                                isSelected={selectedSeats.includes(seatId)}
                                onClick={() => toggleSeatSelection(seatId)} />
                        );
                    })
                )}
            </div>
        </>
    );
};

export default SeatGrid;
