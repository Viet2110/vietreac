import React from 'react';
import { FaSearch } from "react-icons/fa";

function Search({handleClickOpen , handleSearch , title}) {
    return (
        <div className='flex justify-between items-center p-3'>
            <p className='font-bold text-2xl'>List {title}</p>
            <div className='flex items-center '>
                <div className='font-bold bg-gray-400 p-2.5 rounded-l-2xl'><FaSearch/></div>
                <input onChange={handleSearch} className='w-100 p-1 border-2 rounded-r-2xl outline-blue-400' type="text" placeholder='Search' />
            </div>
            <button onClick={handleClickOpen} className='bg-blue-400 text-white p-2 rounded-2xl'>Add +</button>
        </div>
    );
}

export default Search;