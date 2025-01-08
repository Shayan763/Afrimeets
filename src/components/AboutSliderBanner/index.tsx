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
import Link from "next/link";

export default function AboutSliderBanner() {
    const slides = [
        {
            title: "Connecting African and ",
            subtitle: "Black Communities Worldwide",
            description: "Start building meaningful relationships with individuals who share your values, culture, and heritage.",
            image: "/assets/images/about1.jpg",
        },
        {
            title: "Connecting African and ",
            subtitle: "Black Communities Worldwide",
            description: "Start building meaningful relationships with individuals who share your values, culture, and heritage.",
            image: "/assets/images/about2.jpg",
        },
        {
            title: "Connecting African and ",
            subtitle: "Black Communities Worldwide",
            description: "Start building meaningful relationships with individuals who share your values, culture, and heritage.",
            image: "/assets/images/about3.jpg",
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
                autoplay={{
                    delay: 5000, // Adjust the delay (5000ms = 5 seconds)
                    disableOnInteraction: false,
                }}
                speed={2000} // Adjust the transition speed (2000ms = 2 seconds)
                loop
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative overflow-x-hidden bg-cover bg-center h-full w-full flex flex-col justify-between p-5 sm:p-10"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            {/* 20% Black Overlay */}

                            <div className="px-4 z-50" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', maxWidth: '600px', marginTop: '20px' }}>
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                                <Container>
                                    <div className="z-50">
                                        <div className="flex space-x-4 text-white mb-4 z-50">
                                            <FaFacebook className="z-50 hover:scale-110 hover:text-blue-600 transition-transform duration-200" />
                                            <FaTwitter className="z-50 hover:scale-110 hover:text-blue-400 transition-transform duration-200" />
                                            <FaYoutube className="z-50 hover:scale-110 hover:text-red-500 transition-transform duration-200" />
                                            <FaInstagram className="z-50 hover:scale-110 hover:text-pink-500 transition-transform duration-200" />
                                            <FaTumblr className="z-50 hover:scale-110 hover:text-blue-800 transition-transform duration-200" />
                                        </div>

                                        <Heading level={1} className="z-50 hover:scale-110 transition-transform duration-200 text-white font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
                                            {slide.title} <br /> {slide.subtitle}
                                        </Heading>
                                        <p className="z-50 hover:scale-110 transition-transform duration-200 text-white text-lg mb-6">{slide.description}</p>
                                        <Link href='/subscription'>
                                            <Button
                                                title="Get Started"
                                                isPrimary
                                                className="z-50 bg-primary text-white py-3 px-8 border-none rounded-full text-lg hover:bg-purple-800"
                                            />
                                        </Link>
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
