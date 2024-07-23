import React, { useState } from 'react';
import axios from 'axios';

const RemoveTrain: React.FC = () => {
  const [id, setId] = useState('');

  const handleSubmit = () => {
    const confirm = window.confirm('Are you sure you want to remove this train?');
    if (confirm) {
      axios.delete(`https://localhost:7159/Train/RemoveTrain?id=${id}`)
        .then(() => {
          alert('Train removed successfully');
          setId('');
        })
        .catch(error => {
          console.error('There was an error removing the train!', error);
        });
    }
  };

  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>Remove Train</h1>
      <input
        type="text"
        placeholder="Enter ID"
        onChange={e => setId(e.target.value)}
        value={id}
        style={inputStyles}
      />
      <button onClick={handleSubmit} style={buttonStyles}>Remove Train</button>
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
  maxWidth: '400px',
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
  transition: 'background-color 0.3s',
};

export default RemoveTrain;
