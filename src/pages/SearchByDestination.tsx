import React, { useState } from 'react';
import axios from 'axios';

const SearchByDestination: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [trains, setTrains] = useState([]);

  const handleSearch = () => {
    axios.get(`https://localhost:7159/Train/GetDestinationByTime/${destination}`)
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the trains!', error);
      });
  };

  return (
    <div>
      <h1>Search by Destination</h1>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
      {trains.map((train: any) => (
          <li key={train.id}>
            <li>Id: {train.id}</li>
            <li>Source: {train.source}</li>
            <li>Destination: {train.destination} </li>
            <li>TimeSource: {train.timeSource} </li>
            <li>TimeDestination: {train.timeDestination}</li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchByDestination;
