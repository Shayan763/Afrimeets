import React from 'react';
import Header from '@/components/Base/Header';
import Container from '@/components/Base/Container';
import Heading from '@/components/Base/Heading';
import Button from '@/components/Base/Button';
import SubscriptionCard from '@/components/SubscriptionCard';
import { FaFacebook, FaInstagram, FaTumblr, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Subscription() {
  return (
    <div>

      <div
        className='overflow-x-hidden bg-cover bg-center h-screen w-full flex flex-col justify-between p-5 sm:p-10'
        style={{
          backgroundImage: `url(/assets/images/aboutusbanner.png)`,
          overflow: 'hidden',
          width: '100% !important',
          height: '100%',
        }}
      >
        <Header />
        <div className='px-4 mt-32 pb-20' style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', maxWidth: '600px' }}>
          <Container>
            <div>
              <div className='flex space-x-4 text-white mb-4'>
                <FaFacebook className="hover:scale-110 hover:text-blue-600 transition-transform duration-200" />
                <FaTwitter className="hover:scale-110 hover:text-blue-400 transition-transform duration-200" />
                <FaYoutube className="hover:scale-110 hover:text-red-500 transition-transform duration-200" />
                <FaInstagram className="hover:scale-110 hover:text-pink-500 transition-transform duration-200" />
                <FaTumblr className="hover:scale-110 hover:text-blue-800 transition-transform duration-200" />
              </div>
              <Heading level={1} className='hover:scale-110 transition-transform duration-200 text-white font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4'>
                Dating for Grown Ups <br /> Make a Real Connection
              </Heading>
              <p className='hover:scale-110 transition-transform duration-200 text-white text-lg mb-6'>Start meeting singles who are ready to commit today.</p>
              <Button
                title='Get Started'
                isPrimary
                className='hover:scale-110 transition-transform duration-200 bg-primary text-white py-3 px-8 border-none rounded-full text-lg hover:bg-primary'
              />
            </div>
          </Container>
        </div>
      </div>

      <SubscriptionCard />


    </div>
  );
}
