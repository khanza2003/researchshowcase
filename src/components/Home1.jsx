import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rotate from '../components/Rotate';


const Home1 = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // Check for token in sessionStorage
    if (sessionStorage.getItem('token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div className='container'>
      <div
        style={{background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)',marginTop:'30px',maxWidth:'100vw',textAlign:'center',minHeight:'500px'}}className="  rounded shadow w-100">
        <div>
          <Rotate/>
            <div>
              {/* Conditional Rendering of Buttons */}
              {isLogin ? (
                <Link to="/user" className="shadow" style={{color: 'black', textDecoration: 'none', background: 'white', borderRadius: '10px', padding: '10px 20px', fontSize: '16px',display: 'inline-block',transition: 'all 0.3s ease',  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',marginBottom:'20px'}} onMouseEnter={(e) => {e.target.style.background = 'linear-gradient(to right, #FA5B3C, #FFD2A6)';e.target.style.color = 'white';e.target.style.transform = 'translateY(-5px)';e.target.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)'; }} onMouseLeave={(e) => {e.target.style.background = 'white';e.target.style.color = 'black'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';}}>
                  MANAGE YOUR RESEARCH
                </Link>
              ) : (
                <Link to="/login" className="shadow" style={{color: 'black', textDecoration: 'none', background: 'white', borderRadius: '10px', padding: '10px 20px', fontSize: '16px',display: 'inline-block',transition: 'all 0.3s ease',  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',marginBottom:'20px'}} onMouseEnter={(e) => {e.target.style.background = 'linear-gradient(to right, #FA5B3C, #FFD2A6)';e.target.style.color = 'white';e.target.style.transform = 'translateY(-5px)';e.target.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)'; }} onMouseLeave={(e) => {e.target.style.background = 'white';e.target.style.color = 'black'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';}}>
                  PLEASE LOGIN
                </Link>
              )}
               </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
