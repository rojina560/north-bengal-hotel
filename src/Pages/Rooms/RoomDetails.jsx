import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {
    const{room_size, room_description,booking_date,room_price,image,_id} = useLoaderData()
    
   
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end ">
    <button className='btn'>date: {booking_date}</button>
    <button className='btn'>${room_price}</button>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default RoomDetails;