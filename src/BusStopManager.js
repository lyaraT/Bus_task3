// src/BusStopManager.js
import React, { useState } from 'react';
import './App.css';  // Add this line

function BusStopManager({ onSubscribe, onUnsubscribe, busStops }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubscribe = () => {
    onSubscribe(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h2>Bus Stop Manager</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter bus stop ID"
      />
      <button onClick={handleSubscribe}>Subscribe</button>
      <ul>
        {busStops.map(stopId => (
          <li key={stopId}>
            {stopId}
            <button onClick={() => onUnsubscribe(stopId)}>Unsubscribe</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusStopManager;
