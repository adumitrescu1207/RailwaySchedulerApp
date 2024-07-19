import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={containerStyles}>
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
  maxWidth: '300px',
};

const linkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: '#000',
  display: 'block',
  margin: '10px 0',
  fontSize: '1.1rem',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#fff',
};

export default Home;
