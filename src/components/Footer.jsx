import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px',background: 'linear-gradient(to right, #FA5B3C, #FFD2A6)',width:'100vw'}} className='shadow mt-5 p-3'>
    <div className="d-flex justify-content-between">

      <div style={{width:'400px',fontSize:'17px'}}>
        <h5 style={{fontSize:"25px"}}><i className="fa-solid fa-computer me-2"></i>Student Research Showcase</h5>
        <p>Designed and built with all the love in the world by the  Student Research Showcase team with the help of our contributors.</p>
        <p>Code licensed MIT, docs CC BY 3.0.</p>
        <p>Currently v5.3.3.</p>
      </div>

      <div className='d-flex flex-column' style={{fontSize:'17px'}}>
          <h5 style={{fontSize:"25px"}}>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'black'}}>Home Page</Link>
          <Link to={'/login'} style={{textDecoration:'none',color:'black'}}>Login Page</Link>
          <Link to={'/register'} style={{textDecoration:'none',color:'black'}}>Register Page</Link>
      </div>

      <div className='d-flex flex-column' style={{fontSize:'17px'}}>
        <h5 style={{fontSize:"25px"}}>Guides</h5>
        <a style={{textDecoration:'none',color:'black'}} href='https://react.dev/' target='_blank'>React</a>
        <a style={{textDecoration:'none',color:'black'}} href='https://reactrouter.com/en/main' target='_blank'>React Router</a>
        <a style={{textDecoration:'none',color:'black'}} href='https://react-bootstrap.github.io/' target='_blank'>React Bootstrap</a>
      </div>      

      <div className=' d-flex flex-column' style={{fontSize:'17px'}}>
          <h5 style={{fontSize:"25px"}}>Contact</h5>
          <div className='d-flex'>
            <input placeholder='Enter your Email Here!!!' type="text" className='form-control me-2'/>
            <button style={{background:'#FA5B3C'}} className='btn'><i className='fa-solid fa-arrow-right fa-xl'></i></button>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'black'}} target='_blank'><i><i className="fa-brands fa-twitter fa-xl" ></i></i></a>
            <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'black'}} target='_blank'><i><i className="fa-brands fa-instagram fa-xl" ></i></i></a>
            <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'black'}} target='_blank'><i><i className="fa-brands fa-facebook fa-xl" ></i></i></a>
            <a href="https://www.linkedin.com/feed/" style={{textDecoration:'none',color:'black'}} target='_blank'><i><i className="fa-brands fa-linkedin fa-xl" ></i></i></a>
            <a href="https://github.com/dashboard" style={{textDecoration:'none',color:'black'}} target='_blank'><i><i className="fa-brands fa-github fa-xl" ></i></i></a>
            
          </div>
      </div>
    </div>
    <p style={{fontSize:'17px'}} className='text-center mt-3'>Copyright &copy; July 2024 Batch,Students Research Showcase App. Built with MERN</p>
  </div>
  )
}

export default Footer