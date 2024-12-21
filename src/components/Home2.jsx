import React, { useState, useEffect } from 'react';
import science from '../assets/science.png';
import technology from '../assets/technology.png';
import art from '../assets/art.png';

const Slider = () => {
  const images = [
    {
      src: science,
      alt: 'Science',
      link: '/image1',
      smallImages: [technology, art],
    },
    {
      src: technology,
      alt: 'Technology',
      link: '/image2',
      smallImages: [art, science],
    },
    {
      src: art,
      alt: 'Art',
      link: '/image3',
      smallImages: [science, technology],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTransitioning(false);
      }, 1000); // Match the CSS animation duration
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container shadow rounded'
      style={{
        background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)',
        width: '100%',
        minHeight: '70vh',
       // display: 'flex',
       // justifyContent: 'center',
       // alignItems: 'center',
        padding: '50px 0',
       // marginTop:'0px'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          position: 'relative',
        }}
      >
        {/* Large Background Image with Sliding Animation */}
        <div
          style={{
            width: '100%',
            height: '600px',
            textAlign: 'center',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            marginLeft:'260px',
            background:'white'
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              //backgroundImage: `url(${images[currentIndex].src})`,
              transition: transitioning ? 'transform 1s ease-in-out' : 'none',
              transform: transitioning ? 'translateX(-100%)' : 'translateX(0)',
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover'
            }}
          >
            <img style={{marginTop:'100px',marginRight:'900px'}} src={images[currentIndex].src} alt="" />
          </div>

<div
  style={{
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage: `url(${
      images[(currentIndex + 1) % images.length].src
    })`,
    transition: transitioning ? 'transform 1s ease-in-out, opacity 1s ease-in-out' : 'none',
    transform: transitioning ? 'translateX(0)' : 'translateX(100%)',
    opacity: transitioning ? 1 : 0,
  }}
></div>

          {/* Small Images */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '10%',
              transform: 'translateY(-50%)',
              display: 'flex',
              gap: '10px',
              overflow: 'hidden',
              
            }}
            className='shadow rounded'
          >
            {/* First Small Image with Sliding Effect */}
            <div
              style={{
                width: '150px',
                height: '150px',
                 background:'rgba(237, 103, 6)',
                transition: transitioning ? 'transform 1s ease-in-out' : 'none',
                transform: transitioning ? 'translateX(-100%)' : 'translateX(0)',
              }}
            >
              <img
                src={images[currentIndex].smallImages[0]}
                alt={`Small Image 1`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
            </div>

            {/* Second Small Image (Static) */}
            <div
              style={{
                width: '150px',
                height: '150px',
                 background:'rgba(237, 103, 6)'
              }}
            >
              <img
                src={images[currentIndex].smallImages[1]}
                alt={`Small Image 2`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
            </div>
          </div>

          {/* Text and Button Overlaid */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign:'center'
            }}
          >
            <h1 style={{ fontSize: '2.5rem',color:'rgba(237, 103, 6)' }}>{images[currentIndex].alt}</h1>
            <p style={{ fontSize: '1.2rem',color:'black' }}>{images[currentIndex].alt} research involves exploring ideas, <br /> analyzing data, and discovering insights <br /> to solve problems or expand knowledge.</p>
    

          </div>
        </div>
      </div>

      <a
  href="/research"
  style={{
    color: 'black',
    textDecoration: 'none',
    background: 'white',
    borderRadius: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    marginTop:'30px'
  }}
  onMouseEnter={(e) => {
    e.target.style.background = 'linear-gradient(to right, #FA5B3C, #FFD2A6)';
    e.target.style.color = 'white';
    e.target.style.transform = 'translateY(-5px)';
    e.target.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
  }}
  onMouseLeave={(e) => {
    e.target.style.background = 'white';
    e.target.style.color = 'black';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  }}>
Explore All Research
</a>
    </div>
  );
};

export default Slider;
