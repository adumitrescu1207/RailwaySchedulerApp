import React from 'react';
import { Link } from 'react-router-dom';

const ModifySchedule: React.FC = () => {

  return (
    <div>
      <h1>Modify Schedule</h1>
      <nav>
        <ul>
          <li><Link to="/modify/addTrain">AddTrain</Link></li>
          <li><Link to="/modify/updateTrain">UpdateTrain</Link></li>
          <li><Link to="/modify/removeTrain">RemoveTrain</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default ModifySchedule;
