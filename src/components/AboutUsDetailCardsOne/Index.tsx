import React from 'react'
import Container from '../Base/Container'
import BaseImage from '../Base/BaseImage'
import Heading from '../Base/Heading'

export default function AboutUsDetailCardsOne() {
    return (
        <Container className='mt-10'>
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
                        <Heading level={3} className='hover:scale-110 transition-transform duration-200 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black'>About <span className='text-primary'> Afrimeets</span></Heading>
                    </div>
                    <p className='hover:scale-110 transition-transform duration-200 text-[#20202080] text-center md:text-left'>Welcome to Afrimeets, the leading platform designed to connect African and Black singles worldwide. We are more than just a connection site—we are a community built to celebrate culture, heritage, and the power of meaningful relationships. Afrimeets provides a trusted, inclusive space for individuals seeking friendship, companionship, or meaningful connections that align with their values, traditions, and goals.
                    </p>
                    <p className='hover:scale-110 transition-transform duration-200 text-[#20202080] text-center md:text-left'>At Afrimeets, we understand the beauty and diversity of African and Black identities. Whether you’re in Africa, part of the diaspora, or anywhere around the globe, our platform brings you closer to individuals who truly understand your culture and aspirations.</p>
                    <p className='hover:scale-110 transition-transform duration-200 text-[#20202080] text-center md:text-left'>We believe relationships begin with authenticity and connection. Our easy-to-use platform, advanced features, and secure environment make it simple to meet like-minded individuals ready to build meaningful bonds.</p>
                </div>
            </div>
            <div className='flex flex-col justify-center mb-10'>
                <Heading level={3} className='hover:scale-110 transition-transform duration-200 items-center text-center mt-12 mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black'>Why Choose <span className='text-primary'>Afrimeets</span></Heading>
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
                            <Heading level={2} className='font-normal'>Cultural Connection</Heading>
                            <p className='text-[#20202080]'>Connect with individuals who celebrate and honor African and Black traditions.</p>
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
                            <p className='text-[#20202080]'>Build relationships with people worldwide, no matter where you are.</p>
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
                            <Heading level={2} className='font-normal'>Secure & Trusted</Heading>
                            <p className='text-[#20202080]'>Your privacy and safety are our top priorities.</p>
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
                            <Heading level={2} className='font-normal'>Authentic Connections</Heading>
                            <p className='text-[#20202080]'>We focus on helping you create deep and lasting bonds.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-[#20202080] text-center'>Afrimeets is where modern connections meet heritage, empowering individuals to create meaningful relationships on their terms.</p>
            </div>
        </Container>
    )
}
