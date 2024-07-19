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
    <div style={containerStyles}>
      <h1 style={headerStyles}>Search by Source</h1>
      <input
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Enter source"
        style={inputStyles}
      />
      <button onClick={handleSearch} style={buttonStyles}>Search</button>
      <ul style={listStyles}>
        {trains.map((train: any) => (
          <li key={train.id} style={listItemStyles}>
            <div>Id: {train.id}</div>
            <div>Source: {train.source}</div>
            <div>Destination: {train.destination}</div>
            <div>TimeSource: {train.timeSource}</div>
            <div>TimeDestination: {train.timeDestination}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const containerStyles: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9f9f9',
};

const headerStyles: React.CSSProperties = {
  fontSize: '2rem',
  color: '#000', // Black text color
  marginBottom: '20px',
};

const inputStyles: React.CSSProperties = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '10px',
  width: '100%',
  maxWidth: '300px',
  boxSizing: 'border-box',
};

const buttonStyles: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '1rem',
  color: '#fff', // White text color
  backgroundColor: '#cb9696', // Button background color
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const listStyles: React.CSSProperties = {
  listStyleType: 'none',
  padding: '0',
  margin: '20px 0 0',
  textAlign: 'left',
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const listItemStyles: React.CSSProperties = {
  fontSize: '1rem',
  color: '#000', // Black text color
  margin: '10px 0',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fff',
};

export default SearchBySource;
