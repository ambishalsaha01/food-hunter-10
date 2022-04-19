import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100  custom-img-size"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>It is even better than an expensive cookery book</h1>
                    <p>There's definitely a time and a place for slow, intricate, patient dinners but that time is not now. Let's keep this quick and easy!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100  custom-img-size"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Enjoy your food</h1>
                    <p>We collect fresh and Authentic food from remote areas of different country districts and prepare it in the organic process to ensure quality.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;