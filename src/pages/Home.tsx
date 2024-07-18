import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Railway Scheduler</h1>
      <nav>
        <ul>
          <li><a href="/getSourceByTime">Search by Source</a></li>
          <li><a href="/getDestinationByTime">Search by Destination</a></li>
          <li><a href="/getById">Search by ID</a></li>
          <li><a href="/modify">Modify Schedule</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
