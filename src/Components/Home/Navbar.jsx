import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import hotelLogo from '../../assets/logo/hotel.logo.png'
import AuthContext from '../../AuthProvider/Context';
import toast from 'react-hot-toast';

const Navbar = () => {
  const {user,logout} = useContext(AuthContext)
  const handleLogout = ()=>{
    logout()
    .then(()=>{
      toast('signout successfully')
    }).catch((error)=>{
      console.log(error);
    })
    

    
  }
    
        const navlinks = <>
        
            <Link to={'/rooms'}>Rooms</Link>
            <Link>bookings page</Link>
            <Link>about us</Link>
            <Link>contact us</Link>
        
        </>
    
    return (
      <div className="navbar bg-pink-400 h-20 text-gray-600">
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
            className="menu menu-sm -m-[10px] dropdown-content  text-pink-400  mt-6 w-52 p-2 shadow text-[20px]">
           
           {navlinks}
          
          </ul>
        </div>
       <img className=' w-10 md:w-16  rounded-[50px]' src={hotelLogo} alt="" />
       <p>North <span className='text-yellow-300 text-2xl'>Bengal</span> Hotel</p>
       </div>
   
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className='flex gap-5'>
          {navlinks}
          </div>
        </ul>
      </div>
      <div className='navbar-end mr-6'>
      {
        user ? <button className='btn' onClick={handleLogout}>logout</button>:
        <Link to={'/login'}><button className='btn'>Login</button></Link> 
      }
      
      </div>
      
    </div>
    );
};

export default Navbar;