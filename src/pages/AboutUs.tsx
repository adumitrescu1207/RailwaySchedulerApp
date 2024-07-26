import React from 'react';
import images from '../assets/images/railway.png';

const AboutUs: React.FC = () => {
  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>About Us</h1>
      <div style={listItemStyles}>
        Welcome to the Railway Scheduler application. Our mission is to provide the best scheduling
        solution for railways.
      </div>
      <div style={listItemStyles}>
        This application allows you to search train schedules by source,
        destination, and ID. You can also modify the schedules as needed.
      </div>
      <div style={listItemStyles}>
        The schedule remains the same every day, so you don't have to worry.
      </div>
      <img src={images} style={imageStyles}/>
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

const listItemStyles: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#000',
  margin: '10px 0',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fff',
  textAlign: 'center',
  maxWidth: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const imageStyles: React.CSSProperties ={
    width: '30%',
    height: '30%'
  };

export default AboutUs;
