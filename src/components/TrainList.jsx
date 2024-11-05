// TrainList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TrainList.css';

const trains = [
  { id: 1, name: 'Express 1', route: 'City A - City B' },
  { id: 2, name: 'Express 2', route: 'City B - City C' },
];

function TrainList() {
  return (
    <div className="train-list">
      <h2>Available Trains</h2>
      <div className="train-cards">
        {trains.map((train) => (
          <Link to={`/train/${train.id}`} className="train-card" key={train.id}>
            <h3>{train.name}</h3>
            <p>{train.route}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrainList;
