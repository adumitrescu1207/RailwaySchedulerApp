import React, { useState } from 'react';
import axios from 'axios';

const SearchById: React.FC = () => {
  const [id, setId] = useState('');
  const [train, setTrain] = useState({ id: '', source: '', destination: '', timeSource: '', timeDestination: '' });

  const handleSearch = () => {
    axios.get(`https://localhost:7159/Train/GetById/${id}`)
      .then(response => {
        console.log(response.data);
        setTrain(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the train!', error);
      });
  };

  return (
<div>
      <h1>Search by ID</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        <li>Id: {train.id}</li>
        <li>Source: {train.source}</li>
        <li>Destination: {train.destination} </li>
        <li>TimeSource: {train.timeSource} </li>
        <li>TimeDestination: {train.timeDestination}</li>
      </ul>
    </div>
  );
};

export default SearchById;
