import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images/train.png';

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
    fontSize: '1.2rem',
  };

  const titleStyles: React.CSSProperties = {
    padding: '50px',
    fontSize: '3.2rem'
  };
  const imageStyles: React.CSSProperties ={
    width: '15%',
    height: '15%'
  };
  
const Header: React.FC = () => {
  return (
    <header style={headerStyles}>
        <Link to="/about" style={titleStyles}>Railway Scheduler</Link>
        <img src={images} style={imageStyles}/>
        <Link to="/" style={linkStyles}>Home</Link>
    </header>
  );
};

export default Header;
