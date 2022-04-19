import React from 'react';
import img from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Please Go to the right URL</h2>
            <img className='w-100' src={img} alt="" />
        </div>
    );
};

export default NotFound;