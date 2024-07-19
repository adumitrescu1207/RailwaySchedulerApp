import React, { useState } from 'react';
import axios from 'axios';

const AddTrain: React.FC = () => {
  const [train, setTrain] = useState({
    id: '',
    source: '',
    destination: '',
    timeSource: '',
    timeDestination: '',
  });

  const handleSubmit = () => {
    axios.post('https://localhost:7159/Train/AddTrain', train)
      .then(() => {
        alert('Train added successfully');
        setTrain({
          id: '',
          source: '',
          destination: '',
          timeSource: '',
          timeDestination: '',
        });
      })
      .catch(error => {
        console.error('There was an error adding the train!', error);
      });
  };

  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>Add Train</h1>
      <form style={formStyles} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <input
          type="text"
          placeholder="ID"
          value={train.id}
          onChange={e => setTrain({ ...train, id: e.target.value })}
          style={inputStyles}
        />
        <input
          type="text"
          placeholder="Source"
          value={train.source}
          onChange={e => setTrain({ ...train, source: e.target.value })}
          style={inputStyles}
        />
        <input
          type="text"
          placeholder="Destination"
          value={train.destination}
          onChange={e => setTrain({ ...train, destination: e.target.value })}
          style={inputStyles}
        />
        <input
          type="text"
          placeholder="Time Source"
          value={train.timeSource}
          onChange={e => setTrain({ ...train, timeSource: e.target.value })}
          style={inputStyles}
        />
        <input
          type="text"
          placeholder="Time Destination"
          value={train.timeDestination}
          onChange={e => setTrain({ ...train, timeDestination: e.target.value })}
          style={inputStyles}
        />
        <button type="submit" style={buttonStyles}>Add Train</button>
      </form>
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

const formStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
  maxWidth: '500px',
  margin: '0 auto',
};

const inputStyles: React.CSSProperties = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
  maxWidth: '400px',
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

export default AddTrain;
