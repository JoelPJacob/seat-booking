import React from "react";
import Seat from "./Seat";
import "../styles/SeatGrid.css";

const SeatGrid = ({ rows, seatsPerRow, selectedSeats, getSeatPrice, toggleSeatSelection }) => {
    return (
        <>
            <div className="seat-legend">
                <span className="seat-platinum">Platinum (₹200)</span>
                <span className="seat-gold">Gold (₹150)</span>
                <span className="seat-silver">Silver (₹100)</span>
            </div>
            <div className="seat-grid">
                {rows.map((row) => (
                    <React.Fragment key={row}>
                        {Array(seatsPerRow)
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
