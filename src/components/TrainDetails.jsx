// TrainDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './TrainDetails.css';

const TrainDetails = () => {
  const { id } = useParams();
  const train = { name: 'Express 1', route: 'City A - City B', duration: '5 hours' };

  return (
    <div className="train-details">
      <h2>{train.name}</h2>
      <p>Route: {train.route}</p>
      <p>Duration: {train.duration}</p>
      <Link to={`/book/${id}`} className="book-button">Book Ticket</Link>
    </div>
  );
};

export default TrainDetails;
