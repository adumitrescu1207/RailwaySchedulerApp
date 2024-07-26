import React from 'react';

interface TrainDetailsProps {
  id: number;
  source: string;
  destination: string;
  timeSource: string;
  timeDestination: string;
  journeyTime: string;
}

const TrainDetails: React.FC<TrainDetailsProps> = ({ id, source, destination, timeSource, timeDestination, journeyTime }) => {
  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <span style={idStyle}>ID: {id}</span>
      </div>
      <div style={routeStyle}>
        <span style={stationStyle}>{source}</span>
        <span style={arrowStyle}>→</span>
        <span style={stationStyle}>{destination}</span>
      </div>
      <div style={timeStyle}>
        <span>{timeSource}</span>
        <span>{timeDestination}</span>
      </div>
      <div style={textStyle}>
        <span style={journeyStyle}>Journey Time: {journeyTime}</span>
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const textStyle: React.CSSProperties = {
  marginBottom: '10px',
};

const idStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#724F37'
};

const routeStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px 0',
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const stationStyle: React.CSSProperties = {
  margin: '0 10px',
};

const arrowStyle: React.CSSProperties = {
  margin: '0 10px',
  fontSize: '3rem'
};

const timeStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
  fontSize: '1.2rem',
  fontStyle: 'italic',
  fontWeight: 'bold',
  color: '#F5C09C'
};

const journeyStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#724F37'
};

export default TrainDetails;
