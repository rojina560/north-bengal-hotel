import React from 'react';
import Navbar from '../Components/Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Home/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='min-h-[calc(100vh-270px)]'> <Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;