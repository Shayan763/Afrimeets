import React from 'react'
import Container from '../Base/Container'
import Heading from '../Base/Heading'
import BaseImage from '../Base/BaseImage'
import Button from '../Base/Button'

export default function HomeBottomSec() {
    return (
        <Container>
            <div className='grid grid-cols-1 lg:grid-cols-2 space-x-4 justify-center items-center space-y-24'>
                <div className='col-span-1 space-y-4'>
                    <div>
                        <Heading level={1} className='hover:scale-110 transition-transform duration-200 text-2xl md:text-8xl font-normal text-primary'>Afrimeets</Heading>
                        <Heading level={2} className='hover:scale-110 transition-transform duration-200 text-lg md:text-5xl font-normal'>On-the-Go</Heading>
                    </div>
                    <p className='hover:scale-110 transition-transform duration-200 text-base text-[#20202080]'>Download the Afrimeets app to connect with a global community at your fingertips. Build meaningful relationships faster and easier, wherever you are.​</p>
                    <Button title='Get Started' className='hover:scale-110 transition-transform duration-200 bg-[#1A1A1A] rounded-full text-white border-none space-x-6 hover:bg-primary' />
                </div>
                <div className='col-span-1'>
                    <BaseImage
                        src='/assets/images/mobile.png'
                        height={500}
                        width={500}
                        alt='homebanner2'
                        className='hover:scale-110 transition-transform duration-200 object-cover'
                    />
                </div>
            </div>
        </Container>
    )
}
