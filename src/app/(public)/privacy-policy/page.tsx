import React from 'react';
import Footer from '@/components/Base/Footer/Index';
import BlackHeader from '@/components/Base/BlackHeader';
import PrivacyPolicy from './privacypolicy';

export default async function page() {
    return (
        <div className="w-full">
            <BlackHeader />
            <PrivacyPolicy />
            <div className='mt-16'>
                <Footer />
            </div>
        </div >
    );
}
