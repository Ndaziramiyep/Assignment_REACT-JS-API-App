import React from 'react';
import axios from 'axios';

const DeleteData = () => {
    const handleDelete = async() =>{
      try {
        await axios.get('https://api.example.com/data/1');
        alert('Data Deleted successfully!')
        //optionally, fetch and update the displayed date
      } catch (error) {
        console.error('Error Deleting data:', error);
      }
    };

  return (
    <div>
      <h2>Delete Data</h2>
      <button onClick= {handleDelete} >Delete</button>
    </div>
  );
};

export default DeleteData;