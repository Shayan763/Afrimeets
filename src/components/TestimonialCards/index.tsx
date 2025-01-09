"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Container from '../Base/Container';
import BaseImage from '../Base/BaseImage';
import Heading from '../Base/Heading';

export default function TestimonialCards() {
    return (
        <div
            style={{
                backgroundImage: `url(/assets/images/secbg4.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '40px 20px 100px 20px', // Adjusted padding for smaller screens
            }}
        >
            <Container>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20} // Reduced spacing for smaller screens
                    slidesPerView={1} // Default to 1 slide
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    className="mt-16"
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // 1 slide on small screens
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2, // 2 slides on medium screens
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3, // 3 slides on large screens
                            spaceBetween: 40,
                        },
                    }}
                >
                    {/* Map Over Testimonials to Avoid Repetition */}
                    {[
                        {
                            id: 1,
                            text: "Afrimeets gave me a space to connect with people who share my values and culture.",
                        },
                        {
                            id: 2,
                            text: "A unique platform that fosters genuine connections across the globe.",
                        },
                        {
                            id: 3,
                            text: "Afrimeets has helped me find incredible friendships and meaningful collaborations.",
                        },
                    ].map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="p-4">
                            <div className="flex flex-col items-center text-center space-y-3 border pt-20 pb-20 p-3 rounded-3xl border-white transition-transform transform hover:scale-105 hover:z-50">
                                <p className="text-white text-sm md:text-base lg:text-lg">
                                    {testimonial.text}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>     
    );
}
