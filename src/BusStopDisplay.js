// src/BusStopDisplay.js
import React from 'react';
import './App.css';  // Add this line

function BusStopDisplay({ data }) {
  return (
    <div>
      <h2>Bus Stop Display</h2>
      {Object.keys(data).map(stopId => (
        <div key={stopId}>
          <h3>Stop ID: {stopId}</h3>
          <ul>
            {data[stopId].map((bus, index) => (
              <li key={index}>
                Bus {bus.id} - Arriving at {bus.arrivalTime}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default BusStopDisplay;
