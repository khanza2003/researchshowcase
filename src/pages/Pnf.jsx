import React from 'react'
import pnf from '../assets/pagenotfound.gif'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div className='my-5 d-flex justify-content-center align-items-center flex-column'>
      <img src={pnf} alt="" />
      <h1>Look Like You're Lost</h1>
      <p>The page your looking for is not available</p>
      <Link to={'/'} className="btn btn-warning">Go To Home</Link>
    </div>
  )
}

export default Pnf