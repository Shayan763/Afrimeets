import React from 'react';
import Footer from '@/components/Base/Footer/Index';
import TermsAndConditions from './termsandconditions';
import BlackHeader from '@/components/Base/BlackHeader';

export default async function page() {
    return (
        <div className="w-full">
            <BlackHeader />
            <TermsAndConditions />
            <div className='mt-16'>
                <Footer />
            </div>
        </div >
    );
}
