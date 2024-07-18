import React, { useState } from 'react';
import axios from 'axios';

const RemoveTrain: React.FC = () => {
  const [id, setId] = useState('');

  const handleSubmit = () => {
    axios.delete(`https://localhost:7159/Train/RemoveTrain?id=${id}`)
      .then(() => {
        alert('Train removed successfully');
      })
      .catch(error => {
        console.error('There was an error removing the train!', error);
      });
  };

  return (
    <div>
      <h1>Remove Train</h1>
      <input type="text" placeholder="ID" onChange={e => setId(e.target.value)} />
      <button onClick={handleSubmit}>Remove Train</button>
    </div>
  );
};

export default RemoveTrain;