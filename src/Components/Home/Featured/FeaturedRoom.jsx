import React from 'react';
import banner from '../../../assets/images/banner.jpg'

const FeaturedRoom = () => {
    return (
      <div className=' grid grid-cols-1  md:grid-cols-2  gap-11 bg-pink-400 my-12 md:mt-[400px] lg:mt-[600px]'>
        <div className='h-[350px] lg:h-[500px]'>
          <img className='h-[360px] lg:h-[490px] w-full' src={banner} alt="" />

        </div>
        <div className=' p-3 space-y-3'>
          <h1 className='text-center text-2xl font-bold text-yellow-400'>Luxury Suite</h1>
          <p className='text-white'>
          Step into elegance and comfort with our Luxury Suite, designed for a lavish stay. This spacious room features a king-size bed, a private balcony offering breathtaking ocean views, and modern décor that exudes sophistication. Enjoy premium amenities, including a spa-like en-suite bathroom, a smart TV, high-speed Wi-Fi, and 24-hour room service. Whether you're unwinding in the cozy seating area or sipping coffee while admiring the sunset, </p>
        <button className='btn'>Book Now</button>

        </div>
      </div>
        
)};

export default FeaturedRoom;