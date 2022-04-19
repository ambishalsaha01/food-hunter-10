import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>About Us</h2>
            <div className='about-container'>
                <div className='about-item'>
                    <h3>Name: Bishal Saha</h3>
                </div>
                <div className='about-item'>
                    <h4>My Goal:</h4>
                    <p>my one and only major goal is be a professional web developer.As a Web developer, i want to be able to design Web pages that can effectively display material, provide interactivity. Another goal is to make sure users of the website have a good experience.</p>
                </div>
                <div className='about-item'>
                    <h4>How to achieve :</h4>
                    <p>to compleate my goal , my first step is to compleate programming hero web development course. day by day increase my self learning. i am doing lot off projects by boost my skills.</p>
                </div>
            </div>
        </div>
    );
};

export default About;