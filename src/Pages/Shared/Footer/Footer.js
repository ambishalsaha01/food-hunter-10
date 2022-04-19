import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4 p-5 bg-dark text-light'>
            <p>copyright all right reserved @{year}</p>
        </footer>
    );
};

export default Footer;