import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RoomsCard from './RoomsCard';

const Rooms = () => {
    const [rooms , setRooms] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(0)
    const {count }= useLoaderData()
    
    const numberOfPages = Math.ceil(count / itemsPerPage)
    console.log(numberOfPages);
    const pages = [...Array(numberOfPages).keys()]
    console.log(pages);
   
    useEffect(()=>{
        fetch(`http://localhost:5002/rooms?page=${currentPage}&size=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => setRooms(data))
    },[currentPage,itemsPerPage])
    const handleItemsChange = (e)=>{
        const val = parseInt(e.target.value)
        setItemsPerPage(val)
        setCurrentPage(0)
       

    } 
    const handlePrevBtn = ()=>{
        if(currentPage > 0){
            setCurrentPage(currentPage -1)
        }

    }
    const handleNextBtn =() =>{
        if(currentPage < pages.length-1){
            setCurrentPage(currentPage +1)
        }

    }

    return (
        <div>
            <h1>totall room:{rooms.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    rooms.map(room =><RoomsCard key={room._id} room={room}></RoomsCard>)
                }
            </div>
            <div className='text-center py-6'>
            <h1>currentPage{currentPage}</h1>
                <button className='btn' onClick={handlePrevBtn}>prev</button>
                
                { pages.map(page =><button className= {`btn ml-4 ${currentPage === page ? 'bg-orange-500':'undefined'}`}  
                 key={page}
                onClick={()=>setCurrentPage(page)}
                >{page}</button>)}
                 <button className='btn ml-4' onClick={handleNextBtn}>next</button>
                <select value={itemsPerPage} onChange={handleItemsChange} name="" id="">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
               
            </div>
        </div>
    );
};

export default Rooms;