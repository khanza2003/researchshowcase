import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Home2 from '../components/Home2'

import Home1 from '../components/Home1';

const Home = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [research, setResearch] = useState([]);

  useEffect(() => {
    // Check if the user is logged in
    if (sessionStorage.getItem("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }

    // Fetch research data (this can be replaced with an actual API call)
    // Example: setResearch(fetchResearchData());
  }, []);

  const handleNavigateResearch = () => {
    // Navigate to the research page if the user is logged in
    if (sessionStorage.getItem("token")) {
      navigate('/research');
    } else {
      alert("Please login to get full access to our research collection");
    }
  };

  return (
    <>
      <div style={{ minHeight: '100vh' }} className='rounded  w-100'>
        <Home1/>
      </div>

      <div className='my-5 text-center'>
        <h1 className='mb-5'>Explore Our Research</h1>
          <Home2/>
        <button onClick={handleNavigateResearch} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE RESEARCHES</button>
      </div>

      <div className='d-flex justify-content-center align-items-center my-5 flex-column'>
        <h1>Our Testimonials</h1>
       
      </div>
    </>
  );
};

export default Home;
