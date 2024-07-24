import React from 'react';

interface TrainDetailsProps {
  id: number;
  source: string;
  destination: string;
  timeSource: string;
  timeDestination: string;
}

const TrainDetails: React.FC<TrainDetailsProps> = ({ id, source, destination, timeSource, timeDestination }) => {
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
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

const headerStyle: React.CSSProperties = {
  marginBottom: '10px',
};

const idStyle: React.CSSProperties = {
  fontSize: '1.2rem',
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
};

const timeStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
  fontSize: '1.1rem',
  fontStyle: 'italic',
  color: '#F5C09C'
};

export default TrainDetails;
