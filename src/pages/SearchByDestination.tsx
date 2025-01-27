import React, { useState } from 'react';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../utils/MyStyles.css';
import { formatTime } from '../utils/timeFormatter.tsx';
import TrainDetails from '../utils/trainDetails.tsx';
import { calculateJourneyTime } from '../utils/journeyTime.tsx';

const SearchByDestination: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [trains, setTrains] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);


  const handleSearch = () => {

    setError(null);
    setTrains([]);

    axios.get(`https://localhost:7159/Train/GetDestinationByTime/${destination}`)
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          setError('No trains found for the specified destination.');
        } else {
          setError('Failed to fetch train data. Please try again.');
        }
      });
  };

  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>Search by Destination</h1>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination"
        style={inputStyles}
      />
      <button onClick={handleSearch} style={buttonStyles}>Search</button>
      {error && <div style={errorStyles}>{error}</div>}
      <TransitionGroup component="ul" style={listStyles}>
        {trains.map((train: any) => (
          <CSSTransition key={train.id} timeout={1000} classNames="fade">
            <li style={listItemStyles}>
              <TrainDetails
                id={train.id}
                source={train.source}
                destination={train.destination}
                timeSource={formatTime(train.timeSource)}
                timeDestination={formatTime(train.timeDestination)}
                journeyTime={calculateJourneyTime(train.timeSource,train.timeDestination)}
              />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
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
  marginBottom: '10px',
  width: '100%',
  maxWidth: '730px',
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

const errorStyles: React.CSSProperties = {
  color: 'red',
  marginTop: '20px',
  fontSize: '1rem',
};

const listStyles: React.CSSProperties = {
  listStyleType: 'none',
  padding: '0',
  margin: '20px 0 0',
  textAlign: 'left',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const listItemStyles: React.CSSProperties = {
  fontSize: '1rem',
  color: '#000',
  margin: '10px 0',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fff',
};


export default SearchByDestination;
