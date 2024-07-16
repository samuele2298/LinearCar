
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Swiper from 'swiper/bundle';
import { IoStar, IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import './Slider.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


<Carousel
    showArrows={true}
    selectedItem={currentSlide}
    onChange={handleSlideChange}
    showThumbs={false}
>
    {car.images.map((image, index) => (
        <div key={`${car.id}-${index}`}>
            <img
                src={`cars/${car.id}/${image}`}
                alt={`Car Image ${index}`}
                className="w-full rounded-lg shadow-lg"
            />
        </div>
    ))}</Carousel>


const Slider = () => {


    useEffect(() => {
        const trandingSlider = new Swiper('.tranding-slider', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, []);

    return (


        <Carousel
            showArrows={true}
            selectedItem={currentSlide}
            onChange={handleSlideChange}
            showThumbs={false}
        >
            {car.images.map((image, index) => (
                <div key={`${car.id}-${index}`}>
                    <img
                        src={`cars/${car.id}/${image}`}
                        alt={`Car Image ${index}`}
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            ))}</Carousel>
    );
};

export default Slider;


