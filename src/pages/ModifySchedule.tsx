import React from 'react';

const ModifySchedule: React.FC = () => {

  return (
    <div>
      <h1>Modify Schedule</h1>
      <nav>
        <ul>
          <li><a href="/modify/addTrain">AddTrain</a></li>
          <li><a href="/modify/updateTrain">UpdateTrain</a></li>
          <li><a href="/modify/removeTrain">RemoveTrain</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default ModifySchedule;
