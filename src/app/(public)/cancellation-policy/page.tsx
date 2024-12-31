import React from 'react';
import Footer from '@/components/Base/Footer/Index';
import BlackHeader from '@/components/Base/BlackHeader';
import CancellationPolicy from './privacypolicy';

export default async function page() {
    return (
        <div className="w-full">
            <BlackHeader />
            <CancellationPolicy />
            <div className='mt-16'>
                <Footer />
            </div>
        </div >
    );
}
