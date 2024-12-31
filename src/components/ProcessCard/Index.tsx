import React from 'react'
import Container from '../Base/Container'
import BaseImage from '../Base/BaseImage'
import Heading from '../Base/Heading'
import Button from '../Base/Button'

export default function ProcessCard() {
    return (
        <Container>
            <div className='flex flex-col md:flex-row items-center justify-center w-full'>
                <div className='hover:scale-110 transition-transform duration-200 flex justify-center lg:justify-start md:w-1/2'>
                    <BaseImage
                        src='/assets/images/abtsec.png'
                        height={500}
                        width={500}
                        alt='homebanner2'
                        className='object-cover'
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className='flex flex-col items-center md:items-start md:w-1/2 w-3/4 space-y-4'>
                    <div className='text-center md:text-left'>
                        <Heading level={3} className='hover:scale-110 transition-transform duration-200 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black'>About Afrimeets –</Heading>
                        <Heading level={3} className='hover:scale-110 transition-transform duration-200 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black'><span className='text-primary'> Connecting</span> Communities</Heading>
                    </div>
                    <p className='hover:scale-110 transition-transform duration-200 text-[#20202080] text-center md:text-left'>Afrimeets is a global platform designed to connect African and Black individuals worldwide. We
                        celebrate culture, heritage, and the power of authentic relationships by creating a trusted and
                        inclusive space for individuals seeking meaningful connections—whether for friendship,
                        mentorship, networking, or community-building.
                    </p>
                    <p className='hover:scale-110 transition-transform duration-200 text-[#20202080] text-center md:text-left'>At Afrimeets, we honor the diversity of African and Black identities. Whether you're in Africa,
                        part of the diaspora, or beyond, our platform ensures seamless connections, bringing you closer
                        to like-minded individuals who share your values and aspirations.</p>
                    <Button title='Get Started' className='bg-[#1A1A1A] text-white rounded-full px-6 hover:bg-primary' />
                </div>
            </div>
            <div className='flex flex-col justify-center mb-24'>
                <Heading level={3} className='hover:scale-110 transition-transform duration-200 items-center text-center mt-12 mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black'>Why <span className='text-primary'>Afrimeets</span> Stands Out</Heading>
                <div className='grid grid-cols-1 lg:grid-cols-4 space-x-6 space-y-10 lg:space-y-0 items-center text-center'>
                    <div className='col-span-1 flex flex-col items-center text-center space-y-6 transform transition-transform hover:scale-105 duration-300'>
                        <BaseImage
                            src='/assets/images/srvsec31.png'
                            height={100}
                            width={100}
                            alt='homebanner2'
                            className='object-cover'
                        />
                        <div>
                            <Heading level={2} className='font-normal'>Thriving Community</Heading>
                            <p className='text-[#20202080]'>Join a global network that celebrates Black culture, traditions, and achievements.</p>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col items-center text-center space-y-6 transform transition-transform hover:scale-105 duration-300'>
                        <BaseImage
                            src='/assets/images/srvsec32.png'
                            height={100}
                            width={100}
                            alt='homebanner2'
                            className='object-cover'
                        />
                        <div>
                            <Heading level={2} className='font-normal'>Global Reach</Heading>
                            <p className='text-[#20202080]'>Connect with individuals worldwide, wherever you are.</p>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col items-center text-center space-y-6 transform transition-transform hover:scale-105 duration-300'>
                        <BaseImage
                            src='/assets/images/srvsec33.png'
                            height={100}
                            width={100}
                            alt='homebanner2'
                            className='object-cover'
                        />
                        <div>
                            <Heading level={2} className='font-normal'>Secure Conversations</Heading>
                            <p className='text-[#20202080]'>Communicate in a safe, trusted environment designed for meaningful exchanges.</p>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col items-center text-center space-y-6 transform transition-transform hover:scale-105 duration-300'>
                        <BaseImage
                            src='/assets/images/srvsec34.png'
                            height={100}
                            width={100}
                            alt='homebanner2'
                            className='object-cover'
                        />
                        <div>
                            <Heading level={2} className='font-normal'>Interactive Forums</Heading>
                            <p className='text-[#20202080]'>Share experiences, participate in discussions, and build lasting connections.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
