import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import landingimg from '../assets/rotate8.png';
import ResearchCard from '../components/ResearchCard';
import Card from 'react-bootstrap/Card';
import user from '../assets/user1.png'

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
      <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <h1 style={{ fontSize: '80px' }}><i className="fa-brands fa-docker"></i>  Research Showcase</h1>
              <p style={{ textAlign: 'justify' }}>
                One Stop Destination for all Academic and Scientific Research. Where Users can add and manage their research.
                As well as access all research available on our website... What are you waiting for!!! START TO EXPLORE
              </p>
              {isLogin ? (
                <Link to={'/user'} className='btn btn-warning'>MANAGE YOUR RESEARCH</Link>
              ) : (
                <Link to={'/login'} className='btn btn-warning'>START TO EXPLORE</Link>
              )}
            </div>
            <div className='col-lg-6'>
              <img className='img-fluid' src={landingimg} alt="Research Showcase" />
            </div>
          </div>
        </div>
      </div>

      <div className='my-5 text-center'>
        <h1 className='mb-5'>Explore Our Research</h1>
        <marquee>
          <div className='d-flex'>
            {research.length > 0 ? (
              <div className='me-5'>
                <ResearchCard displayData={research} />
              </div>
            ) : (
              <p>Loading research...</p>
            )}
          </div>
        </marquee>
        <button onClick={handleNavigateResearch} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE RESEARCHES</button>
      </div>

      <div className='d-flex justify-content-center align-items-center my-5 flex-column'>
        <h1>Our Testimonials</h1>
       
      </div>
    </>
  );
};

export default Home;
