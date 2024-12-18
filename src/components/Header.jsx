import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{ zIndex: 1, background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)' }} className="shadow border rounded  w-100">
      <Container>
        <Navbar.Brand>
          {/* Removed href and using Link for navigation */}
          <Link to={'/'} className='text-decoration-none fw-bolder' style={{ color: 'black' }}>
            Student Research Showcase
          </Link>
        </Navbar.Brand>
        <button style={{ color: 'black' }} className='btn btn-link fw-bolder'>
          Logout <i className='fa-solid fa-right-from-bracket ms-1'></i>
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;
