"use client";
import React, { useState } from 'react';
import Container from '@/components/Base/Container';
import Dropdown from '../Dropdown';

type Option = {
  label: string;
  value: string;
};

const languageOptions = ["English", "Chinese", "Turkish", "Russian"];

export default function BlackHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [languageOptionsState, setlanguageOptionsState] = useState<Option | null>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Container className='w-full z-30 mt-10'>
      <div className="bg-transparent pl-5">
        <div className="flex justify-between items-center w-full pb-2">
          {/* Left Links */}
          <div className="hidden md:flex text-black space-x-8 font-normal">
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
          </div>

          {/* Center Brand */}
          <div className="text-black ml-4 space-x-8 font-normal text-2xl">
            <a href="/">Afrimeets</a>
          </div>

          {/* Right Links (Mobile Menu Button) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDrawer} className="text-black text-2xl">
              {/* Icon for Drawer toggle (hamburger) */}
              <span>&#9776;</span> {/* You can replace this with a hamburger icon */}
            </button>
          </div>

          {/* Right Links (Desktop Menu) */}
          <div className="hidden md:flex justify-end text-black space-x-8 font-normal">
            <a href="/subscription">Subscription</a>
            <a href="/contact-us">Contact Us</a>
            <Dropdown
              placeholder='English'
              className='border-none text-base mr-4 text-black'
              options={languageOptions}
              selectedOption={languageOptionsState}
              setSelectedOption={setlanguageOptionsState}
              required
            />
          </div>
        </div>

        {/* Drawer Menu for Mobile */}
        <div
          className={`fixed top-0 right-0 bg-[#1A1A1A] z-40 h-full w-2/3 transform transition-transform duration-300 ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleDrawer} className="text-black text-2xl">
              &times; {/* Close Icon */}
            </button>
          </div>
          <div className="flex flex-col items-start px-4 justify-start space-y-6 text-black">
            <a href="/" className="text-base">Home</a>
            <a href="/about-us" className="text-base">About Us</a>
            <a href="/subscription" className="text-base">Subscription</a>
            <a href="/contact-us" className="text-base">Contact Us</a>
            <Dropdown
              placeholder='English'
              className='border-none text-base text-black'
              options={languageOptions}
              selectedOption={languageOptionsState}
              setSelectedOption={setlanguageOptionsState}
              required
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
