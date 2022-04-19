import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Blogs</h2>
            <div className='blogs-container'>
                <div className='blogs-item'>
                    <h4>Difference between authorization and authentication?</h4>
                    <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>
                </div>
                <div className='blogs-item'>
                    <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.  Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div className='blogs-item'>
                    <h4>What other services does firebase provide other than authentication?</h4>
                    <p>other services does firebase provide other than authentication is hosting, analytics, https etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;