"use client";
import React, { useState } from 'react';
import Container from '@/components/Base/Container';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Container>
      <div className="bg-[#1A1A1A] pl-5 pt-4 pb-4">
        <div className="flex justify-between items-center w-full pb-2">
          {/* Left Links */}
          <div className="hidden md:flex text-white space-x-8 font-light">
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
          </div>

          {/* Center Brand */}
          <div className="text-white space-x-8 font-light text-2xl">
            <a href="/">Affrimeets</a>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex justify-end text-white space-x-8 font-light">
            <a href="/subscription">Subscription</a>
            <a href="/contact-us">Contact Us</a>
          </div>

          {/* Hamburger Menu */}
          <button
            className="block md:hidden text-white"
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
          <div className="absolute top-0 left-0 w-3/4 h-full bg-[#1A1A1A] shadow-lg z-50 flex flex-col space-y-4 p-6 md:hidden">
            <button
              className="self-end text-white"
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
            <a href="/" className="text-white text-lg">Home</a>
            <a href="/about-us" className="text-white text-lg">About Us</a>
            <a href="/subscription" className="text-white text-lg">Subscription</a>
            <a href="/contact-us" className="text-white text-lg">Contact Us</a>
          </div>
        )}
      </div>
    </Container>
  );
}
