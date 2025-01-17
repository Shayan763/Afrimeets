import React from 'react'
import Container from '@/components/Base/Container'
import BaseImage from '@/components/Base/BaseImage'
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage'

export default function PrivacyPolicy() {
    return (
        <div>
            {/* Image container with 30% overlay */}
            <div className="relative w-full h-[580px]">
                <BaseImage
                    src='/assets/images/privacypolicies.jpg'
                    height={700}
                    width={700}
                    className='w-full h-full'
                    alt='Cancellation Policy'
                />
                {/* 30% black overlay */}
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <Container>
                <PrivacyPolicyPage />
            </Container>
        </div>
    )
}
