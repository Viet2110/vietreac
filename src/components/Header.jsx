import React from 'react';
import { MENU } from '../utils/Contants';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='text-amber-300 items-center flex justify-between p-3 bg-black'>
            <h1>LOGO</h1>
            <ul className='flex gap-3'>
                {
                    MENU.map((item,index) => (
                        <Link to={item.path}>{item.name}</Link>
                    )) 
                }
            </ul>
        </div>
    );
}

export default Header;