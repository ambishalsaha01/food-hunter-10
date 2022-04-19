import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button variant="primary" className='btn btn-warning text-light'>Order Now</button>
        </div>
    );
};

export default Service;