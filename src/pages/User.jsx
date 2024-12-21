import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import { Link } from 'react-router-dom';


const User = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).firstName.split(" ")[0]);
    }
  }, []);

  return (
    <>
      <Header insideUser={true} />
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-8">
            <h1>Welcome <span style={{color:"#FA5B3C"}}>{username}</span>,</h1>
            <Profile />
          </div>
          <div className='col-lg-2'></div>

          <div className='col-lg-2'> {/* Link to redirect to /favorite */}
            <Link to="/favorite">
              <button className="btn btn-primary shadow" style={{border:"none",color: 'red', textDecoration: 'none', background: 'white', borderRadius: '10px', padding: '10px 20px', fontSize: '16px',display: 'inline-block',transition: 'all 0.3s ease',  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',marginBottom:'20px'}}to={'/user'} onMouseEnter={(e) => {e.target.style.background = 'linear-gradient(to right,rgb(243, 102, 73),rgb(248, 159, 71))';e.target.style.color = 'white';e.target.style.transform = 'translateY(-5px)';e.target.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)'; }} onMouseLeave={(e) => {e.target.style.background = 'white';e.target.style.color = 'red'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';}}>Go to Favorites <i class="fa-solid fa-heart"></i></button>
            </Link></div>


        </div>
      </div>
    </>
  );
};

export default User;
