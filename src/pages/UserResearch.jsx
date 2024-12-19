import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UserResearch = () => {
  const [researchData, setResearchData] = useState([]);
  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category'); // Capture category from query parameters

  useEffect(() => {
    if (category) {
      const fetchResearch = async () => {
        try {
          const response = await axios.get(`/api/research?category=${category}`);
          setResearchData(response.data);
        } catch (error) {
          console.error('Error fetching research:', error);
        }
      };

      fetchResearch();
    }
  }, [category]); // Re-fetch when category changes

  return (
    <div>
      <h1>{category} Research</h1>
      <ul>
        {researchData.length > 0 ? (
          researchData.map((research) => (
            <li key={research._id}>
              <h2>{research.title}</h2>
              <p>{research.description}</p>
              <p>Category: {research.category}</p>
            </li>
          ))
        ) : (
          <p>No research found in this category.</p>
        )}
      </ul>
    </div>
  );
};

export default UserResearch;
