
import React, { useState, useEffect } from 'react';
import { getTopActiveUsersAPI } from '../services/allAPI'; // Ensure the correct path
import roi from "../assets/roi.png";
import { useNavigate } from 'react-router-dom';
import defaultProfile from "../assets/popper.gif"; // Default image
import imoji1 from "../assets/emoji1.gif";
import imoji2 from "../assets/emji2.gif";
import imoji3 from "../assets/emoji2.gif";

const Home3 = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const reqHeader = {}; // Add headers if required
        const response = await getTopActiveUsersAPI(reqHeader);
        setActiveUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching top active users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!Array.isArray(activeUsers) || activeUsers.length === 0) {
    return <div>No active users found.</div>;
  }

  const getQuoteForRank = (rank) => {
    const quotes = [
      "🌟 You’re a shining star! Your dedication and hard work are unmatched. Keep reaching for greatness!",
      "💪 Incredible effort! You’re just a step away from the top. Keep pushing forward!",
      "🚀 Fantastic achievement! Keep aiming high and breaking barriers!",
    ];
    return quotes[rank - 1];
  };

  const getImageForRank = (rank) => {
    if (rank === 1) return imoji1;
    if (rank === 2) return imoji3;
    return imoji2;
  };



  return (
    <div className="container">
      <div
        style={{
          background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)',
          marginTop: '30px',
          maxWidth: '100vw',
          textAlign: 'center',
          minHeight: '500px',
          padding: '20px',
        }}
        className="rounded shadow w-100"
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '40px',
            fontWeight: '900',
            marginBottom: '20px',
          }}
        >
          <img width={200} src={roi} alt="" />
          Top Performing Users
          <img width={200} src={roi} alt="" />
        </h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {activeUsers.map((user, index) => (
            <div
              key={user.id || index}
              className="user-card"
            >
              {/* Set a different image for each card based on rank */}
              <div
                className="user-image"
                style={{
                  backgroundImage: `url(${getImageForRank(index + 1)})`,
                }}
              />
              <div className="user-details">
                <img
                  src={user.profilePic || defaultProfile}
                  alt={`${user.firstName} ${user.lastName}`}
                  width={150}
                  height={150}
                  style={{ borderRadius: '50%', marginBottom: '10px' }}
                />
                <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '5px' }}>
                  {`${user.firstName} ${user.lastName}`}
                </div>
                <div style={{ color: '#555' }}>{getQuoteForRank(index + 1)}</div>
              </div>
            </div>
          ))}
        </div>
       
      </div>

      <style jsx>{`
        .user-card {
          background: white;
          width: 300px;
          height: 300px; /* Keep the height fixed */
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
        }

        .user-card:hover {
          transform: scale(1.05); /* Slight zoom on hover */
          background-color: white; /* Maintain white background on hover */
        }

        .user-image {
          background-size: cover;
          background-position: center;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: opacity 0.3s ease;
        }

        .user-details {
          opacity: 0; /* Initially hidden */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #555;
          text-align: center;
          transition: opacity 0.3s ease;
          width: 100%;
          padding: 10px;
        }

        .user-card:hover .user-details {
          opacity: 1; /* Show details on hover */
        }

        .user-card:hover .user-image {
          opacity: 0; /* Hide the image on hover */
        }
      `}</style>
    </div>
  );
};

export default Home3;
