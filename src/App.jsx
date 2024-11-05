// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TrainList from './components/TrainList';
import TrainDetails from './components/TrainDetails';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<TrainList />} />
          <Route path="/train/:id" element={<TrainDetails />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
