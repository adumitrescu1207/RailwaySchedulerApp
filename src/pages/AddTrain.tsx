import React, { useState } from 'react';
import axios from 'axios';

const AddTrain: React.FC = () => {
  const [train, setTrain] = useState({id: '', source: '', destination: '', timeSource: '', timeDestination: '' });

  const handleSubmit = () => {
    axios.post('https://localhost:7159/Train/AddTrain', train)
      .then(() => {
        alert('Train added successfully');
      })
      .catch(error => {
        console.error('There was an error adding the train!', error);
      });
  };

  return (
    <div>
      <h1>Add Train</h1>
      <input type="text" placeholder="ID" onChange={e => setTrain({ ...train, id: e.target.value })} />
      <input type="text" placeholder="Source" onChange={e => setTrain({ ...train, source: e.target.value })} />
      <input type="text" placeholder="Destination" onChange={e => setTrain({ ...train, destination: e.target.value })} />
      <input type="text" placeholder="Time Source" onChange={e => setTrain({ ...train, timeSource: e.target.value })} />
      <input type="text" placeholder="Time Destination" onChange={e => setTrain({ ...train, timeDestination: e.target.value })} />
      <button onClick={handleSubmit}>Add Train</button>
    </div>
  );
};

export default AddTrain;