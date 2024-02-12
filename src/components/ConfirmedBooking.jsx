import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmedBooking.css';

export function ConfirmedBooking() {
    const navigate = useNavigate();
    const [reservationDetails, setReservationDetails] = useState(null);

    useEffect(() => {
        const bookingDetails = localStorage.getItem("reservationDetails");
        if (bookingDetails) {
            setReservationDetails(JSON.parse(bookingDetails));
        }
    }, []);

    return (
        <div className="confirmedBookingContainer">
            <div className="bookingHeader">
                <h1>Reservation Confirmed!</h1>
                <p>We can't wait to host you at Cozy Corner.</p>
            </div>
            {reservationDetails &&
            <div className="bookingDetails">
                <h2>Your Booking Details:</h2>
                <p><strong>Occasion:</strong> {reservationDetails.occasion}</p>
                <p><strong>Number of Guests:</strong> {reservationDetails.guests}</p>
                <p><strong>Date:</strong> {reservationDetails.date}</p>
                <p><strong>Time:</strong> {reservationDetails.time}</p>
            </div>
            }
            <button onClick={() => navigate("/")} className="homeButton">Return Home</button>
        </div>
    );
}
