// Confirmation.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.css';

function Confirmation() {
  const { state } = useLocation();
  const { id, passengerName, date, seatType } = state || {};

  return (
    <div className="confirmation">
      <h2>Booking Confirmation</h2>
      {state ? (
        <div>
          <p>Train ID: {id}</p>
          <p>Passenger Name: {passengerName}</p>
          <p>Date of Journey: {date}</p>
          <p>Seat Type: {seatType}</p>
          <p>Your booking has been confirmed!</p>
        </div>
      ) : (
        <p>No booking details available.</p>
      )}
    </div>
  );
}

export default Confirmation;
