import React from 'react';
import Footer from '@/components/Base/Footer/Index';
import Header from '@/components/Base/Header';
import PrivacyPolicy from './privacypolicy';

export default async function page() {
    return (
        <div className="w-full">
            <Header />
            <PrivacyPolicy />
            <div className='mt-16'>
                <Footer />
            </div>
        </div >
    );
}
