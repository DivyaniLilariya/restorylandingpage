import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo_Restory.png'; // Adjust the path as per your project structure

const NavBar = () => {
  return (
    <div className=''>
      <header className="w-full bg-stone-100 py-5">
        <nav className="flex justify-between items-center font-semibold text-xl text-black">
          <div className='flex items-center'>
            <img src={Logo} alt="Restory Logo" className='w-50 h-20' />
          </div>
          <div className='flex gap-7'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <div className='w-5'></div> {/* Add a spacer div */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
