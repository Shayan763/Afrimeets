import React from 'react'
import Container from '@/components/Base/Container'
import CancellationPolicyPage from '@/components/CancellationPolicyPage'
import BaseImage from '@/components/Base/BaseImage'

export default function CancellationPolicy() {
    return (
        <div>
            {/* Image container with 30% overlay */}
            <div className="relative w-full h-[580px]">
                <BaseImage
                    src='/assets/images/cancellationpolicies.jpg'
                    height={700}
                    width={700}
                    className='w-full h-full object-cover'
                    alt='Cancellation Policy'
                />
                {/* 30% black overlay */}
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>

            <Container>
                <CancellationPolicyPage />
            </Container>
        </div>
    )
}
