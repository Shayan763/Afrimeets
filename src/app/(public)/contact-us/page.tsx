import React from 'react';
import Footer from '@/components/Base/Footer/Index';
import Contactus from './contactus';
import Header from '@/components/Base/Header';

export default async function page() {
  return (
    <div>
      <Header/>
      <Contactus />
      <Footer />
    </div >
  );
}
