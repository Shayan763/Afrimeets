import React from 'react';
import Heading from '@/components/Base/Heading';
import Button from '@/components/Base/Button';
import Input from '@/components/Base/Input';
import BaseImage from '@/components/Base/BaseImage';

export default function Contactus() {
  return (
    <div className='w-full bg-white mb-40 md:mb-0'>
      <div className="relative w-full h-[580px]">
        <BaseImage
          src='/assets/images/contactus.jpg'
          height={1000}
          width={500}
          className='h-[580px] w-full object-auto'
          alt='Cancellation Policy'
        />
        {/* 30% black overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="flex flex-col lg:flex-row align-middle gap-4 space-x-8 justify-between items-center lg:items-start p-8 bg-white mb-10 sm:mb-0">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center items-start h-full">
          <Heading level={1} className="animate-fadeInFromLeft hover:scale-110 transition-transform duration-200 text-base lg:text-6xl font-normal text-primary mb-4 mt-8">
            CONTACT US
          </Heading>
          <p className="animate-fadeInFromLeft text-[#20202080] mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
          <Button
            title="Get Started"
            isPrimary
            className="bg-[#1A1A1A] text-white hover:bg-primary focus:ring-2 focus:bg-primary border-none"
          />
        </div>


        {/* Right Section */}
        <div className="w-full md:w-1/2  mt-10 bg-[#1A1A1A] text-white p-8 rounded-xl shadow-lg space-y-5">
          <Input
            type='text'
            placeholder='Name'
            labelClassName='text-[1rem]'
            className='bg-[#FFF7E533] rounded-2xl border-none text-white'
          />
          <Input
            type='email'
            placeholder='Email'
            labelClassName='text-[1rem]'
            className='bg-[#FFF7E533] rounded-2xl border-none text-white'
          />
          <Input
            type='phone'
            placeholder='Phone'
            labelClassName='text-[1rem]'
            className='bg-[#FFF7E533] rounded-2xl border-none text-white'
          />
          <textarea placeholder='Message' className='w-full p-4 rounded-xl bg-[#FFF7E533]'></textarea>
          <Button title='Submit' isPrimary className='hover:bg-white hover:text-primary border-none' />
        </div>
      </div>
    </div>
  );
}
