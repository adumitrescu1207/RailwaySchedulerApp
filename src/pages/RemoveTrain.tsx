import React, { useState } from 'react';
import axios from 'axios';
import TrainDetails from '../utils/trainDetails';
import { formatTime } from '../utils/timeFormatter';
import { calculateJourneyTime } from '../utils/journeyTime';

const RemoveTrain: React.FC = () => {
  const [id, setId] = useState('');
  const [train, setTrain] = useState<Train | null>(null);
  const [error, setError] = useState<string | null>(null);

  interface Train {
    id: string;
    source: string;
    destination: string;
    timeSource: string;
    timeDestination: string;
  }

  const handleSearch = () => {
    setError(null);
    setTrain(null);
    axios.get(`https://localhost:7159/Train/GetById/${id}`)
      .then(response => {
        setTrain(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the train!', error);
        setError('No train found with the specified ID.');
      });
  };

  const handleSubmit = () => {
    if (!train) {
      setError('No train selected for removal.');
      return;
    }

    const confirm = window.confirm(`Are you sure you want to remove the train with ID ${train.id}?`);
    if (confirm) {
      axios.delete(`https://localhost:7159/Train/RemoveTrain?id=${id}`)
        .then(() => {
          alert('Train removed successfully');
          setId('');
          setTrain(null);
        })
        .catch(error => {
          console.error('There was an error removing the train!', error);
          setError('There was an error removing the train. Please try again.');
        });
    }
  };

  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>Remove Train</h1>
      <h2 style={subHeaderStyles}>Search by ID</h2>
      <input
        type="text"
        placeholder="Enter ID"
        onChange={e => setId(e.target.value)}
        value={id}
        style={inputStyles}
      />
      <button onClick={handleSearch} style={buttonStyles}>Search</button>
      {error && <div style={errorStyles}>{error}</div>}
      {train && (
        <div style={containerStyles}>
        <li style={listStyles}>
            <TrainDetails
              id={Number(train.id)}
              source={train.source}
              destination={train.destination}
              timeSource={formatTime(train.timeSource)}
              timeDestination={formatTime(train.timeDestination)}
              journeyTime={calculateJourneyTime(train.timeSource,train.timeDestination)}
            />
          </li>
          <button onClick={handleSubmit} style={buttonStyles}>Remove Train</button>
      </div>
      )}
    </div>
  );
};

const containerStyles: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f4',
  marginBottom: '30px'
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
  width: '100%',
  maxWidth: '800px',
  boxSizing: 'border-box',
  marginBottom: '20px',
};

const buttonStyles: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#cb9696',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
  transition: 'background-color 0.3s',
};

const subHeaderStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#555',
  marginBottom: '20px',
};

const listStyles: React.CSSProperties = {
  listStyleType: 'none',
  padding: '10px',
  margin: '20px 0 0',
  textAlign: 'left',
  maxWidth: '800px',
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

export default RemoveTrain;
