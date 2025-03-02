import React, { useState } from 'react';
import axios from 'axios';

const CreateData = () => {
  const [NewData, setNewData] = useState('');

    const handleCreate = async() =>{
      try {
        await axios.get('https://api.example.com/data', {newData});
        alert('Data created successfully!')
        //optionally, fetch and update date
      } catch (error) {
        console.error('Error creating data:', error);
      }
    };

  return (
    <div>
      <h2>Create new Data</h2>
      <input type='text' value ={newData} onChange = {(e) => setNewData(e.target.value)}/>
      <button onClick= {handleCreate} >Create</button>
    </div>
  );
};

export default CreateData;