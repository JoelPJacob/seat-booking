import React from "react";
import Seat from "./Seat";
import "../styles/SeatGrid.css";

const SeatGrid = ({ rows, seatsPerRow, selectedSeats, getSeatPrice, toggleSeatSelection }) => {
    return (
        <>
            {/* Displaying seat price */}
            <div className="seat-legend">
                <span className="seat-platinum">Platinum (₹200)</span>
                <span className="seat-gold">Gold (₹150)</span>
                <span className="seat-silver">Silver (₹100)</span>
            </div>

            {/* Seat grid container */}
            <div className="seat-grid">
                {/* Looping through each row */}
                {rows.map((row) => (
                    <React.Fragment key={row}>
                        {/* Looping through seats in each row */}
                        {Array(seatsPerRow)
                            .fill() // Creating an array of length 'seatsPerRow'
                            .map((_, index) => {
                                // Generating a unique seat ID based on row and seat number
                                const seatId = `${row}${index + 1}`;
                                // Determining the price based on the row
                                const price = getSeatPrice(row);
                                return (
                                    <Seat
                                        key={seatId}
                                        id={seatId}
                                        price={price}
                                        isSelected={selectedSeats.includes(seatId)} 
                                        onClick={() => toggleSeatSelection(seatId)} 
                                    />
                                );
                            })
                        }

                        {row === "F" && (
                            <>
                                <div className="screen-label">Screen</div>
                                <div className="screen"></div>
                            </>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default SeatGrid;
