import React from 'react';
import bannerMp4 from '../../../assets/vedio/hotel-vedio.mp4'
import './Banner.css'
const Banner = () => {
    return (
        <div className='text-white'>
            <div className=''> <video className='vedio' autoPlay loop muted>
            <source src={bannerMp4} type="video/mp4" />
            </video></div>
            <div className='text-center space-y-4'>
                <p className='text-wraper text-center '>Experience the pinnacle of luxury rentals</p>
                <p>Experience the ultimate in luxury vacation rentals and personalized services, meticulously crafted to suit your</p>
                <button className='border  p-2  lg:px-4 py-3'>Book Now</button>
            </div>
        </div>
    );
};

export default Banner;