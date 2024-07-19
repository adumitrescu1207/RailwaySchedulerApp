import React from 'react';
import { Link } from 'react-router-dom';

const ModifySchedule: React.FC = () => {
  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>Modify Schedule</h1>
      <nav>
        <ul style={navListStyles}>
          <li style={navItemStyles}><Link to="/modify/addTrain" style={linkStyles}>Add Train</Link></li>
          <li style={navItemStyles}><Link to="/modify/updateTrain" style={linkStyles}>Update Train</Link></li>
          <li style={navItemStyles}><Link to="/modify/removeTrain" style={linkStyles}>Remove Train</Link></li>
        </ul>
      </nav>
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

const navListStyles: React.CSSProperties = {
  listStyleType: 'none',
  padding: '0',
  margin: '0',
};

const navItemStyles: React.CSSProperties = {
  margin: '10px 0',
};

const linkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: '#cb9696',
  fontSize: '1.2rem',
  display: 'block',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s, color 0.3s',
};

export default ModifySchedule;
