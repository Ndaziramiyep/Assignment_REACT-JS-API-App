// src/components/ApiExampleAsync.js
// ... (previous imports)
import { useState, useEffect } from "react";
import React from "react";
const ApiExampleAsync = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState
  (true);
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Simulating a delay to show loading state
          setTimeout(async () => {
            const response = await fetch('https://api.example.com/posts?userId=1');
            const result = await response.json();
            setData(result);
            setLoading(false);
          }, 1000);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
      fetchData();
    }, []);
    return (
  <div>
  <h1>API Data</h1>
        {loading ? (
  <p>Loading...</p>
        ) : (
  <ul>
            {data.map((item) => (
  <li key={item.id}>{item.title}</li>
            ))}
  </ul>
        )}
  </div>
    );
  };
  export default ApiExampleAsync;