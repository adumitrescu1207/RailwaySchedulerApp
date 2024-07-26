import React from 'react';
import { Link } from 'react-router-dom';

const ModifySchedule: React.FC = () => {
  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>Modify Schedule</h1>
      <nav>
        <ul style={navListStyles}>
          <li style={listStyles}><Link to="/modify/addTrain" style={linkStyles}>Add Train</Link></li>
          <li style={listStyles}><Link to="/modify/updateTrain" style={linkStyles}>Update Train</Link></li>
          <li style={listStyles}><Link to="/modify/removeTrain" style={linkStyles}>Remove Train</Link></li>
        </ul>
      </nav>
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
export default ModifySchedule;
