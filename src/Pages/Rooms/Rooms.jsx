import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RoomsCard from './RoomsCard';

const Rooms = () => {
    const rooms = useLoaderData()
    console.log(rooms);
    return (
        <div>
            <h1>totall room:{rooms.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    rooms.map(room =><RoomsCard key={room._id} room={room}></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;