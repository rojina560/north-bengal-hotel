import React from 'react';
import { Link } from 'react-router-dom';
import hotelLogo from '../../assets/logo/hotel.logo.png'

const Navbar = () => {
    
        const navlinks = <>
        
            <Link>Rooms</Link>
            <Link>page</Link>
            <Link>about us</Link>
            <Link>contact us</Link>
        
        </>
    
    return (
      <div className="navbar bg-pink-400 h-24 text-gray-600">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm -m-[10px] dropdown-content  bg-pink-100  mt-6 w-52 p-2 shadow text-[20px]">
           
           {navlinks}
          
          </ul>
        </div>
        <img className='w-16 rounded-[50px]' src={hotelLogo} alt="" />
        <a className="btn btn-ghost text-xl">North <span>Bengal</span>Hotel</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className='flex gap-5'>
          {navlinks}
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
    );
};

export default Navbar;