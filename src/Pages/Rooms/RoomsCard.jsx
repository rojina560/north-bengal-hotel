import React from 'react';
import { Link } from 'react-router-dom';

const RoomsCard = ({room}) => {
    const {room_size, room_description,booking_date,room_price,image,_id
    } = room || {}
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="p-3">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl h-72 w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
   <Link to={`/rooms/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default RoomsCard;