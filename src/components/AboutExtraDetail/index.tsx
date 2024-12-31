import React from 'react'
import Container from '../Base/Container'
import Heading from '../Base/Heading'
import BaseImage from '../Base/BaseImage'

export default function AboutExtraDetail() {
  return (
    <div>
      <Heading level={2} className='hover:scale-110 transition-transform duration-200 text-primary mt-10 text-center text-3xl'>Why Subscribe to Afrimeets Premium?</Heading>
      <Heading level={4} className='hover:scale-110 transition-transform duration-200 text-center text-black mb-10'>Choose the plan that best suits your goals and start building genuine connections today!</Heading>
      <Container>
        <div className='flex flex-col md:flex-row'>
          <div className='hover:scale-110 transition-transform duration-200'>
            <BaseImage
              src='/assets/images/subscription1.png'
              height={700}
              width={700}
              alt='homebanner2'
            />
          </div>
          <div className='flex flex-col justify-center align-middle items-center space-y-4'>
            <ul className="hover:scale-110 transition-transform duration-200 text-black text-sm md:text-base font-light mb-6 list-disc pl-5">
              <li className='font-normal'><span className='text-primary text-xl font-normal'>More Opportunities:</span> Increase your chances of finding meaningful relationships.</li>
              <li className='font-normal'><span className='text-primary text-xl font-normal'>Enhanced Features:</span> Connect via messaging, video, and private chats.</li>
              <li className='font-normal'><span className='text-primary text-xl font-normal'>Authenticity & Trust:</span> Get access to verified and real profiles.</li>
              <li className='font-normal'><span className='text-primary text-xl font-normal'>Start Free:</span> Enjoy a 7-day free trial with no commitment.</li>
            </ul>
            <div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row mt-14 justify-between gap-4'>
          <div className='flex flex-col space-y-4 w-1/2 align-middle justify-center'>
            <Heading level={2} className='text-primary mt-10 text-left text-3xl hover:scale-110 transition-transform duration-200'>Subscription Add-On Plans</Heading>
            <p className='text-black whitespace-normal hover:scale-110 transition-transform duration-200'>Looking to boost your chances of building meaningful connections? Afrimeets offers exclusive Connect Add-On Plans designed to enhance your experience and help you interact with more individuals.</p>
          </div>
          <div className='hover:scale-110 transition-transform duration-200'>
            <BaseImage
              src='/assets/images/subscription1.png'
              height={700}
              width={700}
              alt='homebanner2'
            />
          </div>
        </div>


        {/* available add on packages open */}

        <div className='flex flex-col justify-center mb-10 w-full'>
          <Heading level={3} className='hover:scale-110 transition-transform duration-200 items-center text-center mt-12 mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black'>Available <span className='text-primary'>Add-On</span> Packages</Heading>
          <div className='grid grid-cols-1 lg:grid-cols-3 space-x-6 space-y-10 lg:space-y-0 gap-6 items-center text-center'>
            <div className='col-span-1 flex flex-col items-center text-center space-y-6 transform transition-transform hover:scale-105 duration-300'>
              <BaseImage
                src='/assets/images/srvsec31.png'
                height={100}
                width={100}
                alt='homebanner2'
                className='object-cover'
              />
              <div>
                <Heading level={2} className='font-normal'>5 Connects – $500</Heading>
                <p className='text-[#20202080]'>Send up to 5 additional connection requests to profiles of your choice.</p>
              </div>
            </div>
            <div className='col-span-1 flex flex-col items-center text-center space-y-6 transform transition-transform hover:scale-105 duration-300'>
              <BaseImage
                src='/assets/images/srvsec32.png'
                height={100}
                width={100}
                alt='homebanner2'
                className='object-cover'
              />
              <div>
                <Heading level={2} className='font-normal'>10 Connects – $700</Heading>
                <p className='text-[#20202080]'>Expand your opportunities with 10 extra connection requests to discover meaningful relationships.</p>
              </div>
            </div>
            <div className='col-span-1 flex flex-col items-center text-center space-y-6 transform transition-transform hover:scale-105 duration-300'>
              <BaseImage
                src='/assets/images/srvsec33.png'
                height={100}
                width={100}
                alt='homebanner2'
                className='object-cover'
              />
              <div>
                <Heading level={2} className='font-normal'>15 Connects – $1,000</Heading>
                <p className='text-[#20202080]'>Maximize your reach with 15 premium connection requests for the ultimate experience.</p>
              </div>
            </div>
          </div>
        </div>
        {/* available add on packages close */}

        {/* What are connect open */}
        <div className='flex flex-col md:flex-row'>
          <div className='hover:scale-110 transition-transform duration-200'>
            <BaseImage
              src='/assets/images/subscription1.png'
              height={700}
              width={700}
              alt='homebanner2'
            />
          </div>
          <div className='flex flex-col align-middle space-y-4'>
            <Heading level={2} className='text-primary mt-10 text-left text-3xl hover:scale-110 transition-transform duration-200'>What Are Connects?</Heading>
            <ul className="hover:scale-110 transition-transform duration-200 text-black text-sm md:text-base font-light mb-6 list-disc pl-5">
              <li className='font-normal'>Connects allow you to send targeted and exclusive requests to individuals you find interesting.</li>
              <li className='font-normal'>Once used, connects give your profile priority visibility, ensuring your interest stands out.</li>
              <li className='font-normal'>Connects can be added anytime on top of your existing subscription plan.</li>
            </ul>
            <div>
            </div>
          </div>
        </div>
        {/* What are connect close */}

        {/* Why Choose Add-On Connects? open */}
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='flex flex-col justify-center align-middle space-y-4'>
            <Heading level={2} className='text-primary mt-10 text-left text-3xl hover:scale-110 transition-transform duration-200'>Why Choose Add-On Connects?</Heading>
            <ul className="hover:scale-110 transition-transform duration-200 text-black text-sm md:text-base font-light mb-6 list-disc pl-5">
              <li className='font-normal'><span className='text-primary text-xl font-normal'>Enhanced Interaction: </span> Break limits and connect with more profiles instantly.</li>
              <li className='font-normal'><span className='text-primary text-xl font-normal'>Greater Visibility: </span> Stand out to users and increase response rates.</li>
              <li className='font-normal'><span className='text-primary text-xl font-normal'>Tailored Connections: </span> Handpick and prioritize individuals that match your preferences.</li>
            </ul>
            <div>
            </div>
          </div>
          <div className='hover:scale-110 transition-transform duration-200 pl-3'>
            <BaseImage
              src='/assets/images/subscription1.png'
              height={700}
              width={700}
              alt='homebanner2'
            />
          </div>
        </div>

        {/* Why Choose Add-On Connects? close */}

        {/* How to Purchase Add-On Plans open */}

        <div className='flex flex-col md:flex-row gap-10'>
          <div className='hover:scale-110 transition-transform duration-200 pl-3'>
            <BaseImage
              src='/assets/images/subscription1.png'
              height={700}
              width={700}
              alt='homebanner2'
            />
          </div>
          <div className='flex flex-col justify-center align-middle space-y-4'>
            <Heading level={2} className='text-primary mt-10 text-left text-3xl hover:scale-110 transition-transform duration-200'>How to Purchase Add-On Plans</Heading>
            <ul className="hover:scale-110 transition-transform duration-200 text-black text-sm md:text-base font-light mb-6 list-disc pl-5">
              <li className='font-normal'>Log in to your Afrimeets account.</li>
              <li className='font-normal'>Navigate to the Subscription Add-On section.</li>
              <li className='font-normal'>Select your desired Connect Add-On Plan (5, 10, or 15 Connects).</li>
              <li className='font-normal'>Complete the secure payment process.</li>
            </ul>
            <div>
            </div>
          </div>
        </div>
        {/* How to Purchase Add-On Plans close */}
      </Container>
    </div>
  )
}
