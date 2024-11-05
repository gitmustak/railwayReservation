// BookingForm.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingForm.css';

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [passengerName, setPassengerName] = useState('');
  const [date, setDate] = useState('');
  const [seatType, setSeatType] = useState('Sleeper');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { id, passengerName, date, seatType } });
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Passenger Name:
          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            required
          />
        </label>
        <label>
          Date of Journey:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Seat Type:
          <select value={seatType} onChange={(e) => setSeatType(e.target.value)}>
            <option value="Sleeper">Sleeper</option>
            <option value="AC">AC</option>
            <option value="General">General</option>
          </select>
        </label>
        <button type="submit" className="submit-button">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
