import React from 'react';
import Navbar from '../Components/Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Home/Footer';
// min-h-[calc(100vh-260px)]

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
         <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;