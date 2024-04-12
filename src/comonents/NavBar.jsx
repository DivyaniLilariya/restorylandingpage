import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Service</Link>
      <Link to="/contact">Contact</Link>
     
    </div>
  )
}

export default NavBar