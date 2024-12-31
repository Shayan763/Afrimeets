"use client";
import React from 'react';
import Button from '@/components/Base/Button';
import Heading from '@/components/Base/Heading';
import BaseImage from '@/components/Base/BaseImage';
import Container from '@/components/Base/Container';
import Footer from '@/components/Base/Footer/Index';
import SubscriptionCard from '@/components/SubscriptionCard';
import TestimonialCards from '@/components/TestimonialCards';
import ProcessCard from '@/components/ProcessCard/Index';
import HomeBottomSec from '@/components/HomeBottomSec';
import HomeSliderBanner from '@/components/HomeSliderBanner';
import Header from '@/components/Base/Header';
export default function Home() {
  return (
    <div className='w-full overflow-x-hidden'>
      <Header />
      <HomeSliderBanner />
      <Container className='bg-[#1A1A1A]'>
        <div className='px-5 md:px-20 grid grid-cols-1 lg:grid-cols-4 items-center justify-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-8 w-full p-4 lg:pl-10'>
          <div className='col-span-1 w-full flex justify-center lg:justify-start pb-4 hover:scale-110 transition-transform duration-200'>
            <BaseImage
              src='/assets/images/secimg1.png'
              className='mt-0 z-0 md:-mt-20 md:z-40 object-cover'
              height={250}
              width={250}
              alt='logo'
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='col-span-2 text-center lg:text-left'>
            <Heading level={3} className='hover:scale-110 transition-transform duration-200 text-2xl text-white'>Start Your Journey</Heading>
            <Heading level={6} className='hover:scale-110 transition-transform duration-200 text-base font-light text-white whitespace-normal'>Discover authentic connections that celebrate African and Black cultures. Build meaningful
              relationships that foster growth, unity, and shared purpose.
            </Heading>
          </div>
          <div className='col-span-1 flex justify-center lg:justify-end'>
            <Button title='Register Now' className='bg-white py-2 px-8 text-xs md:text-base border-none text-black rounded-full hover:bg-primary hover:text-white' />
          </div>
        </div>
      </Container>
      <ProcessCard />
      <TestimonialCards />
      <div className='hover:scale-110 transition-transform duration-200 flex justify-center items-center'>
        <BaseImage
          src="/assets/images/Group50.png"
          alt="Image Description"
          width={2080}
          height={420}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <SubscriptionCard />
      <HomeBottomSec />
      <Footer />
    </div>
  );
}
