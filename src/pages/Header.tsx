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
    padding: '50px'
  };
  const imageStyles: React.CSSProperties ={
    width: '230px',
    height: '230px'
  };
  
const Header: React.FC = () => {
  return (
    <header style={headerStyles}>
        <h1 style={titleStyles}>Railway Scheduler</h1>
        <img src={images} style={imageStyles}/>
        <Link to="/" style={linkStyles}>Home</Link>
    </header>
  );
};

export default Header;
