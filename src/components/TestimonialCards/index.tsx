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
                padding: '0px 40px 100px 40px',
            }}
        >
            <Container>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30} // Space between slides
                    slidesPerView={3} // Show 3 slides by default
                    loop={true} // Enable loop to continuously roll through slides
                    navigation // Enable navigation buttons
                    pagination={{ clickable: true }} // Enable clickable pagination
                    className="mt-36"
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // Show 1 slide on small screens
                        },
                        768: {
                            slidesPerView: 2, // Show 2 slides on medium screens
                        },
                        1024: {
                            slidesPerView: 3, // Show 3 slides on large screens
                        },
                    }}
                >
                    {/* Testimonial Card 1 */}
                    <SwiperSlide className='p-4'>
                        <div className='flex flex-col items-center text-center space-y-3 border p-3 rounded-3xl border-white transition-transform transform hover:scale-105 hover:z-50'>
                            <BaseImage
                                src='/assets/images/secinnr.png'
                                height={100}
                                width={100}
                                alt='homebanner2'
                                className='object-cover'
                            />
                            <p className='text-white'>
                                “Afrimeets gave me a space to connect with people who share my values and culture.”
                            </p>
                            <Heading level={6} className='text-white'>DEVON LARRET</Heading>
                            <Heading level={6} className='text-white font-light'>FOUNDER, SOME COMPANY</Heading>
                        </div>
                    </SwiperSlide>

                    {/* Testimonial Card 2 */}
                    <SwiperSlide className='p-4'>
                        <div className='flex flex-col items-center text-center space-y-3 border p-3 rounded-3xl border-white transition-transform transform hover:scale-105'>
                            <BaseImage
                                src='/assets/images/secinnr.png'
                                height={100}
                                width={100}
                                alt='homebanner2'
                                className='object-cover'
                            />
                            <p className='text-white'>
                                “A unique platform that fosters genuine connections across the globe.”
                            </p>
                            <Heading level={6} className='text-white'>DEVON LARRET</Heading>
                            <Heading level={6} className='text-white font-light'>FOUNDER, SOME COMPANY</Heading>
                        </div>
                    </SwiperSlide>

                    {/* Testimonial Card 3 */}
                    <SwiperSlide className='p-4'>
                        <div className='flex flex-col items-center text-center space-y-3 border p-3 rounded-3xl border-white transition-transform transform hover:scale-105'>
                            <BaseImage
                                src='/assets/images/secinnr.png'
                                height={100}
                                width={100}
                                alt='homebanner2'
                                className='object-cover'
                            />
                            <p className='text-white'>
                                “Afrimeets has helped me find incredible friendships and meaningful collaborations.”
                            </p>
                            <Heading level={6} className='text-white'>DEVON LARRET</Heading>
                            <Heading level={6} className='text-white font-light'>FOUNDER, SOME COMPANY</Heading>
                        </div>
                    </SwiperSlide>

                    {/* Testimonial Card 4 */}
                    <SwiperSlide className='p-4'>
                        <div className='flex flex-col items-center text-center space-y-3 border p-3 rounded-3xl border-white transition-transform transform hover:scale-105 hover:z-50'>
                            <BaseImage
                                src='/assets/images/secinnr.png'
                                height={100}
                                width={100}
                                alt='homebanner2'
                                className='object-cover'
                            />
                            <p className='text-white'>
                                “Afrimeets gave me a space to connect with people who share my values and culture.”
                            </p>
                            <Heading level={6} className='text-white'>DEVON LARRET</Heading>
                            <Heading level={6} className='text-white font-light'>FOUNDER, SOME COMPANY</Heading>
                        </div>
                    </SwiperSlide>

                    {/* Testimonial Card 5 */}
                    <SwiperSlide className='p-4'>
                        <div className='flex flex-col items-center text-center space-y-3 border p-3 rounded-3xl border-white transition-transform transform hover:scale-105'>
                            <BaseImage
                                src='/assets/images/secinnr.png'
                                height={100}
                                width={100}
                                alt='homebanner2'
                                className='object-cover'
                            />
                            <p className='text-white'>
                                “A unique platform that fosters genuine connections across the globe.”
                            </p>
                            <Heading level={6} className='text-white'>DEVON LARRET</Heading>
                            <Heading level={6} className='text-white font-light'>FOUNDER, SOME COMPANY</Heading>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    );
}
