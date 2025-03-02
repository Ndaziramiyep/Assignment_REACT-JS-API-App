import React, { useState } from 'react';
import axios from 'axios';

const UpdateData = () => {
  const [updatedData, setUpdatedData] = useState('');

    const handleUpdate = async() =>{
      try {
        await axios.get('https://api.example.com/data/1', {updatedData});
        alert('Data updated successfully!')
        //optionally, fetch and update the displayed date
      } catch (error) {
        console.error('Error updated data:', error);
      }
    };

  return (
    <div>
      <h2>Update Data</h2>
      <input type='text' value ={updatedData} onChange = {(e) => setUpdatedData(e.target.value)}/>
      <button onClick= {handleUpdate} >Update</button>
    </div>
  );
};

export default UpdateData;