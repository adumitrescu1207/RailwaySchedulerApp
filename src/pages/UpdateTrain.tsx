import React, { useState } from 'react';
import axios from 'axios';

const UpdateTrain: React.FC = () => {
  const [id, setId] = useState('');
  const [train, setTrain] = useState({
    id: '',
    source: '',
    destination: '',
    timeSource: '',
    timeDestination: '',
  });
  const [error, setError] = useState<string | null>(null);

  const validateForm = () => {
    if (train.source.length > 15) {
      setError('Source must have under 15 characters.');
      return false;
    }
    if (train.destination.length > 15) {
      setError('Destination must have under 15 characters.');
      return false;
    }
    if (parseInt(train.timeSource) < 0) {
      setError('Time Source must be positive.');
      return false;
    }
    if (parseInt(train.timeDestination) < 0) {
      setError('Time Destination must be positive.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSearch = () => {
    setError(null);
    axios.get(`https://localhost:7159/Train/GetById/${id}`)
      .then(response => {
        if (response.data) {
          setTrain(response.data);
        }
      })
      .catch(error => {
        if(error.response && error.response.status === 400){
          setError('No train found for the specified ID.');
        }
        else {
          setError('Failed to fetch train data. Please try again.');
        }
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTrain(prevTrain => ({
      ...prevTrain,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    axios.put('https://localhost:7159/Train/UpdateTrain/', train)
      .then(() => {
        alert('Train updated successfully');
      })
      .catch(error => {
        console.error('There was an error updating the train!', error);
        setError('There was an error updating the train. Please try again.');
      });
  };

  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>Update Train</h1>
      <h2 style={subHeaderStyles}>Search by ID</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
        style={inputStyles}
      />
      <button onClick={handleSearch} style={buttonStyles}>Search</button>
      {error && <div style={errorStyles}>{error}</div>}
      {train.id && (
        <div style={formContainerStyles}>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} style={formStyles}>
            <input
              type="text"
              name="source"
              value={train.source}
              onChange={handleChange}
              placeholder="Source"
              style={inputStyles}
            />
            <input
              type="text"
              name="destination"
              value={train.destination}
              onChange={handleChange}
              placeholder="Destination"
              style={inputStyles}
            />
            <input
              type="text"
              name="timeSource"
              value={train.timeSource}
              onChange={handleChange}
              placeholder="Time Source"
              style={inputStyles}
            />
            <input
              type="text"
              name="timeDestination"
              value={train.timeDestination}
              onChange={handleChange}
              placeholder="Time Destination"
              style={inputStyles}
            />
            <button type="submit" style={buttonStyles}>Update Train</button>
          </form>
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
};

const headerStyles: React.CSSProperties = {
  fontSize: '2rem',
  color: '#000',
  marginBottom: '20px',
};

const subHeaderStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#555',
  marginBottom: '20px',
};

const formContainerStyles: React.CSSProperties = {
  marginTop: '30px',
  marginBottom: '30px'
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

const errorStyles: React.CSSProperties = {
  color: 'red',
  marginTop: '20px',
  fontSize: '1rem',
};

export default UpdateTrain;
