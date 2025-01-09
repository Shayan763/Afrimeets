import React from 'react';
import Footer from '@/components/Base/Footer/Index';
import TermsAndConditions from './termsandconditions';
import Header from '@/components/Base/Header';

export default async function page() {
    return (
        <div className="w-full">
            <Header />
            <TermsAndConditions />
            <div className='mt-16'>
                <Footer />
            </div>
        </div >
    );
}
