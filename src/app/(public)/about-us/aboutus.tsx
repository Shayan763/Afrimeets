import React from 'react';
import Header from '@/components/Base/Header';
import HomeBottomSec from '@/components/HomeBottomSec';
import AboutSubscriptionCard from '@/components/AboutSubscriptionCard';
import AboutUsDetailCardsOne from '@/components/AboutUsDetailCardsOne/Index';
import AboutExtraDetail from '@/components/AboutExtraDetail';
import AboutSliderBanner from '@/components/AboutSliderBanner';
import AboutBanner from '@/components/AboutSliderBanner';

export default function AboutUs() {
  return (
    <div className='w-full -mt-4'>
      <Header />
      <AboutBanner />
      <AboutUsDetailCardsOne />
      {/* <TestimonialCards /> */}
      <div className='flex justify-center items-center'>
        {/* <BaseImage
          src="/assets/images/abttestsec.png"
          alt="Image Description"
          width={2080}
          height={420}
          style={{ objectFit: 'cover' }}
        /> */}
      </div>
      <AboutSubscriptionCard />
      <AboutExtraDetail />
      <HomeBottomSec />
    </div>
  );
}
