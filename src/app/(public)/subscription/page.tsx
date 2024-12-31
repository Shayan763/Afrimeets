import React from 'react';
import Footer from '@/components/Base/Footer/Index';
import Subscription from './subscription';

export default async function page() {
  return (
    <div className="w-full">
      <Subscription />
      <div className='mt-16'>
        <Footer />
      </div>
    </div >
  );
}
