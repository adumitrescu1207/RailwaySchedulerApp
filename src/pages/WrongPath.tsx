import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images/sad.png';
import '../utils/WrongPathStyles.css';

const WrongPath: React.FC = () => {
    return (
        <div style={containerStyles}>
            <h1 style={headerStyles}>This page does not exist!</h1>
            <img src={images} className="rotating-image" style={imageStyles}/>
            <Link to="/" style={linkStyles}>Redirect me to Home</Link>
        </div>
    );
};

const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
};

const headerStyles: React.CSSProperties = {
    fontSize: '2rem',
    color: '#000',
    marginBottom: '20px',
};

const linkStyles: React.CSSProperties = {
    color: '#724F37',
    marginTop: '20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
};

const imageStyles: React.CSSProperties = {
    width: '30%',
    height: 'auto',
};

export default WrongPath;
