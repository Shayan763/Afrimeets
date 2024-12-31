import React from 'react';
import Home from './home';
import Footer from '@/components/Base/Footer/Index';

export default async function page() {
  return (
    <div className="bg-white">
      <Home />
      <Footer />
    </div >
  );
}
