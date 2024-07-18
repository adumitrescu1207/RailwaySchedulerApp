import React, { useState } from 'react';
import axios from 'axios';

const SearchBySource: React.FC = () => {
  const [source, setSource] = useState('');
  const [trains, setTrains] = useState([]);

  const handleSearch = () => {
    axios.get(`https://localhost:7159/Train/GetSourceByTime/${source}`)
      .then(response => {
        console.log(response.data);
        setTrains(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the trains!', error);
      });
  };

  return (
    <div>
      <h1>Search by Source</h1>
      <input
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Enter source"
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

export default SearchBySource;
