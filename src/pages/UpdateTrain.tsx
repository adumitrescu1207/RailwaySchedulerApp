import React, { useState } from 'react';
import axios from 'axios';

const UpdateTrain: React.FC = () => {
  const [id, setId] = useState('');
  const [train, setTrain] = useState({ id: '', source: '', destination: '', timeSource: '', timeDestination: '' });

  const handleSearch = () => {
    axios.get(`https://localhost:7159/Train/GetById/${id}`)
      .then(response => {
        console.log(response.data);
        setTrain(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the train!', error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTrain(prevTrain => ({
      ...prevTrain,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    axios.put(`https://localhost:7159/Train/UpdateTrain/`, train)
      .then(() => {
        alert('Train updated successfully');
      })
      .catch(error => {
        console.error('There was an error updating the train!', error);
      });
  };

  return (
    <div>
      <h1>Update Train</h1>
      <h2>Search by ID</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />
      <button onClick={handleSearch}>Search</button>
      {train.id && (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <input
            type="text"
            name="id"
            value={train.id}
            onChange={handleChange}
            placeholder="ID"
            readOnly
          />
          <input
            type="text"
            name="source"
            value={train.source}
            onChange={handleChange}
            placeholder="Source"
          />
          <input
            type="text"
            name="destination"
            value={train.destination}
            onChange={handleChange}
            placeholder="Destination"
          />
          <input
            type="text"
            name="timeSource"
            value={train.timeSource}
            onChange={handleChange}
            placeholder="Time Source"
          />
          <input
            type="text"
            name="timeDestination"
            value={train.timeDestination}
            onChange={handleChange}
            placeholder="Time Destination"
          />
          <button type="submit">Update Train</button>
        </form>
      )}
    </div>
  );
};

export default UpdateTrain;
