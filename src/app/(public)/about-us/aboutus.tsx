import React from 'react';
import Header from '@/components/Base/Header';
import HomeBottomSec from '@/components/HomeBottomSec';
import HomeSliderBanner from '@/components/HomeSliderBanner';
import AboutSubscriptionCard from '@/components/AboutSubscriptionCard';
import AboutUsDetailCardsOne from '@/components/AboutUsDetailCardsOne/Index';
import AboutExtraDetail from '@/components/AboutExtraDetail';

export default function AboutUs() {
  return (
    <div className='w-full -mt-4'>
      <Header />
      <HomeSliderBanner />
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
