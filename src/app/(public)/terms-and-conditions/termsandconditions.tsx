import React from 'react'
import Container from '@/components/Base/Container'
import BaseImage from '@/components/Base/BaseImage'
import TermsAndConditionsPage from '@/components/TermsAndConditionsPage'


export default function TermsAndConditions() {
    return (
        <div>
            <div className="relative w-full h-[580px]">
                <BaseImage
                    src='/assets/images/termsconditions.jpg'
                    height={700}
                    width={700}
                    className='w-full h-full object-cover'
                    alt='Cancellation Policy'
                />
                {/* 30% black overlay */}
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <Container>
                <TermsAndConditionsPage />
            </Container>
        </div>
    )
}
