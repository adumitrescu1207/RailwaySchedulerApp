import React, { useState } from 'react';
import axios from 'axios';

const SearchById: React.FC = () => {
  const [id, setId] = useState('');
  const [train, setTrain] = useState({
    id: '',
    source: '',
    destination: '',
    timeSource: '',
    timeDestination: '',
  });
  const [isSearched, setIsSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = () => {
    setIsSearched(false);
    setError(null);
    axios.get(`https://localhost:7159/Train/GetById/${id}`)
      .then(response => {
        setTrain(response.data);
        setIsSearched(true);
      })
      .catch(error => {
        if(error.response && error.response.status === 400){
          setError('No trains found for the specified ID.');
          setIsSearched(false);
        }
        else {
          setError('Failed to fetch train data. Please try again.');
        }
      });
  };

  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>Search by ID</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
        style={inputStyles}
      />
      <button onClick={handleSearch} style={buttonStyles}>Search</button>
      {error && <div style={errorStyles}>{error}</div>}
      {isSearched && !error && (
        <div style={containerStyles}>
          <ul style={listStyles}>
            <li>ID: {train.id}</li>
            <li>Source: {train.source}</li>
            <li>Destination: {train.destination}</li>
            <li>Time Source: {train.timeSource}</li>
            <li>Time Destination: {train.timeDestination}</li>
          </ul>
        </div>
      )}
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
  color: '#000',
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
  color: '#fff',
  backgroundColor: '#cb9696',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const listStyles: React.CSSProperties = {
  listStyleType: 'none',
  padding: '10px',
  margin: '20px 0 0',
  textAlign: 'left',
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: '1rem',
  color: '#000',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fff',
};

const errorStyles: React.CSSProperties = {
  color: 'red',
  marginTop: '20px',
  fontSize: '1rem',
};

export default SearchById;
