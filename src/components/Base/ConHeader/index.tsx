"use client";
import React, { useState } from 'react';

type Option = {
  label: string;
  value: string;
};
import Container from '@/components/Base/Container';
import Dropdown from '@/components/Base/Dropdown';
import BaseImage from '../BaseImage';
import Link from 'next/link';

const languageOptions = ["English", "Chinese", "Turkish", "Russian"];

export default function ConHeader() {
  const [languageOptionsState, setlanguageOptionsState] = useState<Option | null>(
    null
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className='pl-5 pb-4 absolute top-0 w-full z-30 mt-10'>
      <Container className=''>
        <div className='flex justify-between items-center w-full'>
          <div className='flex text-white space-x-8 font-light text-base'>
            <Link href="/">
              <BaseImage
                src='/assets/images/logo11.png'
                height={30}
                width={30}
                alt='Logo'
                style={{ objectFit: 'cover' }}
                className='object-cover'
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className='hidden md:flex justify-center text-white space-x-8 font-normal text-base'>
            <a href="/" className='hover:scale-110 transition-transform duration-200'>Home</a>
            <a href="/about-us" className='hover:scale-110 transition-transform duration-200'>About Us</a>
            <a href="/subscription" className='hover:scale-110 transition-transform duration-200'>Subscription</a>
            <a href="/contact-us" className='hover:scale-110 transition-transform duration-200'>Contact Us</a>
          </div>

          {/* Language and Contact */}
          <div className='hidden md:flex items-center text-white space-x-8 font-light text-base'>
            <Dropdown
              placeholder='English'
              className='border-none text-base mr-4 text-white hover:scale-110 transition-transform duration-200'
              options={languageOptions}
              selectedOption={languageOptionsState}
              setSelectedOption={setlanguageOptionsState}
              required
            />
            <div className='bg-primary p-2 rounded-full px-6 text-base'>
              <a href="/contact-us">Contact Us</a>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className='block md:hidden text-white'
            onClick={toggleDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Drawer Menu */}
        {isDrawerOpen && (
          <div className='absolute top-0 left-0 w-3/4 h-full bg-[#1A1A1A] shadow-lg z-50 flex flex-col space-y-4 p-6 md:hidden'>
            <button
              className='self-end text-white'
              onClick={toggleDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a href="/" className='text-white text-base'>Home</a>
            <a href="/about-us" className='text-white text-base'>About Us</a>
            <a href="/subscription" className='text-white text-base'>Subscription</a>
            <a href="/contact-us" className='text-white text-base'>Contact Us</a>
            <Dropdown
              placeholder='English'
              className='border-none text-base text-white font-normal'
              options={languageOptions}
              selectedOption={languageOptionsState}
              setSelectedOption={setlanguageOptionsState}
              required
            />
          </div>
        )}
      </Container>
    </div>
  );
}
