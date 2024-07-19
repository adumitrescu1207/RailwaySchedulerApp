import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F5C09C',
    borderBottom: '1px solid #e0e0e0',
    width: '100vw',
    justifyContent: 'space-between',
    
  };
  
  const linkStyles: React.CSSProperties = {
    color: '#724F37',
    padding: '50px',
    fontSize: '1.1rem',
  };
  
const Header: React.FC = () => {
  return (
    <header style={headerStyles}>
        <h1>Railway Scheduler</h1>
        <Link to="/" style={linkStyles}>Home</Link>
    </header>
  );
};

export default Header;
