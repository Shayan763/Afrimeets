"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaFacebook, FaInstagram, FaTumblr, FaTwitter, FaYoutube } from 'react-icons/fa';
import Button from '../Base/Button';
import Heading from '../Base/Heading';
import Container from '../Base/Container';

export default function HomeSliderBanner() {
    const slides = [
        {
            title: "Connecting African and ",
            subtitle: "Black Communities Worldwide",
            description: "Start building meaningful relationships with individuals who share your values, culture, and heritage.",
            image: "/assets/images/homebanner.png",
        },
        {
            title: "Connecting African and ",
            subtitle: "Black Communities Worldwide",
            description: "Start building meaningful relationships with individuals who share your values, culture, and heritage.",
            image: "/assets/images/homebanner.png",
        },
        {
            title: "Connecting African and ",
            subtitle: "Black Communities Worldwide",
            description: "Start building meaningful relationships with individuals who share your values, culture, and heritage.",
            image: "/assets/images/homebanner.png",
        },
    ];

    return (
        <div className="h-screen w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="overflow-x-hidden bg-cover bg-center h-full w-full flex flex-col justify-between p-5 sm:p-10"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            <div className="mt-6">

                            </div>
                            <div className="px-4" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', maxWidth: '600px', marginTop: '20px' }}>
                                <Container>
                                    <div>
                                        <div className="flex space-x-4 text-white mb-4">
                                            <FaFacebook className="hover:scale-110 hover:text-blue-600 transition-transform duration-200" />
                                            <FaTwitter className="hover:scale-110 hover:text-blue-400 transition-transform duration-200" />
                                            <FaYoutube className="hover:scale-110 hover:text-red-500 transition-transform duration-200" />
                                            <FaInstagram className="hover:scale-110 hover:text-pink-500 transition-transform duration-200" />
                                            <FaTumblr className="hover:scale-110 hover:text-blue-800 transition-transform duration-200" />
                                        </div>

                                        <Heading level={1} className="hover:scale-110 transition-transform duration-200 text-white font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
                                            {slide.title} <br /> {slide.subtitle}
                                        </Heading>
                                        <p className="hover:scale-110 transition-transform duration-200 text-white text-lg mb-6">{slide.description}</p>
                                        <Button
                                            title="Get Started"
                                            isPrimary
                                            className="bg-primary text-white py-3 px-8 border-none rounded-full text-lg hover:bg-purple-800"
                                        />
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
