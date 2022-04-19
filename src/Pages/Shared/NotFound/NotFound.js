import React from 'react';
import img from '../../../images/404.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound-container'>
            <h2 className='text-warning mt-5 text-center'>Please Go to the right URL</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;