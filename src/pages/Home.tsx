import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>Home</h1>
      <ul style={listStyles}>
        <li><Link to="/getSourceByTime" style={linkStyles}>Search by source</Link></li>
        <li><Link to="/getDestinationByTime" style={linkStyles}>Search by destination</Link></li>
        <li><Link to="/getById" style={linkStyles}>Search by ID</Link></li>
        <li><Link to="/modify" style={linkStyles}>Modify Schedule</Link></li>
      </ul>
    </div>
  );
};

const containerStyles: React.CSSProperties = {
  padding: '40px',
  textAlign: 'center',
  backgroundColor: '#f4f4f4',
  minHeight: '100%',
  fontFamily: 'Arial, sans-serif',
};

const listStyles: React.CSSProperties = {
  listStyleType: 'none',
  padding: '0',
  margin: '0 auto',
  maxWidth: '800px',
};

const linkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: '#000',
  display: 'block',
  margin: '10px 0',
  fontSize: '1.1rem',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#cb9696',
};

const headerStyles: React.CSSProperties = {
  fontSize: '2rem',
  color: '#000',
  marginBottom: '20px',
};

export default Home;
