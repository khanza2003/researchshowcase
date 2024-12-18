import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import rotate1 from '../assets/rotate1.png';
import rotate2 from '../assets/rotate2.png';
import rotate3 from '../assets/rotate3.png';
import rotate4 from '../assets/rotate4.png';
import rotate5 from '../assets/rotate5.png';
import rotate6 from '../assets/rotate6.png';
import rotate7 from '../assets/rotate7.png';
import rotate8 from '../assets/rotate8.png';
import rotate9 from '../assets/rotate9.png';

const images = [
  { src: rotate1, alt: 'rotate1', heading: 'Sustainable Development and Environment', content: 'Focuses on tackling global challenges like climate change, renewable energy, and conservation, making it highly impactful.' },
  { src: rotate2, alt: 'rotate2', heading: 'Medical and Health Sciences', content: 'Highlights advancements in healthcare and biotechnology, offering real-world applications.' },
  { src: rotate3, alt: 'rotate3', heading: 'Innovative Scientific Discoveries', content: 'Encourages students to showcase cutting-edge findings across various scientific disciplines.' },
  { src: rotate4, alt: 'rotate4', heading: 'Creative Arts and Expression', content: 'Showcases the diversity and talent in visual arts, music, theater, and dance.' },
  { src: rotate5, alt: 'rotate5', heading: 'Cultural Studies and History', content: 'Promotes an understanding of heritage and its relevance to contemporary issues.' },
  { src: rotate6, alt: 'rotate6', heading: 'Digital and Media Arts', content: 'Explores the intersection of art and technology through digital storytelling and design.' },
  { src: rotate7, alt: 'rotate7', heading: 'Artificial Intelligence and Machine Learning', content: 'Captures cutting-edge student research in AI, an area of growing significance.' },
  { src: rotate8, alt: 'rotate8', heading: 'Engineering and Robotics', content: 'Highlights student projects in automation and engineering, inspiring innovation.' },
  { src: rotate9, alt: 'rotate9', heading: 'Emerging Technologies', content: 'Showcases new and exciting fields like blockchain, quantum computing, and IoT.' },
];

const Rotate = () => {
  const [showModal, setShowModal] = useState({});

  const handleImageClick = (index) => {
    setShowModal((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleCloseModal = (index) => {
    setShowModal((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  return (
    <>
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: perspective(1000px) rotateY(0deg);
            }
            100% {
              transform: perspective(1000px) rotateY(360deg);
            }
          }

          .slider {
            position: relative;
            width: 100px;
            height: 500px;
            margin-left: 600px;
            top: 140px;
            transform-style: preserve-3d;
            animation: rotate 10s linear infinite;
          }

          .slider span {
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: center;
            transform-style: preserve-3d;
            transition: 3s;
          }

          .slider img {
            position: absolute;
            width: 80px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
          }

          .slider img:hover {
            transform: translateY(10px) scale(1.1);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }

          .center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            z-index: 10;
          }
        `}
      </style>

      <div className="slider">
        {images.map((image, index) => (
          <span
            key={index}
            style={{
              transform: `rotateY(calc(var(--i) * 45deg)) translateZ(350px)`,
              '--i': index + 1,
            }}
          >
            <img
              className="shadow rounded"
              style={{ background: 'white', padding: '10px', height: '150px', width: '100px' }}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(index)}
            />
          </span>
        ))}
      </div>

      {images.map((image, index) => (
        <Modal show={showModal[index]} onHide={() => handleCloseModal(index)} key={index}>
          <Modal.Header closeButton>
            <Modal.Title>{image.heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{image.content}</Modal.Body>
          <Modal.Footer>
            <Button style={{background:'orange'}} onClick={() => handleCloseModal(index)}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </>
  );
};

export default Rotate;
