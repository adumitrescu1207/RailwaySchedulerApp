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
      <footer style={footerStyles}>
      </footer>
    </div>
  );
};

const containerStyles: React.CSSProperties = {
  padding: '20px',
  textAlign: 'left',
};

const listStyles: React.CSSProperties = {
  listStyleType: 'none',
  padding: '0',
};

const linkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: '#cb9696',
  display: 'block',
  margin: '10px 0',
};

const footerStyles: React.CSSProperties = {
  marginTop: '20px',
};

export default Home;
