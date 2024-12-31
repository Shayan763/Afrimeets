import React from 'react'
import Container from '../Base/Container'
import Heading from '../Base/Heading'
import Button from '../Base/Button'

export default function AboutSubscriptionCard() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full mt-24 space-y-6'>
        <Heading level={3} className='text-primary hover:scale-110 transition-transform duration-200 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black'>Connecting African and Black Singles Worldwide</Heading>
      </div>
      <Container>
        <div className="w-full flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-8 mt-10">
          {/* Card 1 */}
          <div className='pb-4 pt-4'>
            <div
              className="bg-black bg-opacity-90 p-6 rounded-2xl flex flex-col justify-between w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url(/assets/images/sec6.png)`,
                overflow: 'hidden',
                width: '100% !important',
              }}
            >
              <div>
                <Heading
                  level={5}
                  className="hover:scale-110 transition-transform duration-200 text-white font-bold text-lg md:text-xl lg:text-2xl mb-3"
                >
                  LOREM IPSUM
                </Heading>
                <p className="hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-light mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem lum has
                </p>
                <Heading level={5} className="text-white font-bold whitespace-normal text-lg mb-1 hover:scale-110 transition-transform duration-200">$50/Month</Heading>
                <Heading level={5} className="text-primary font-bold whitespace-normal text-2xl mb-3 hover:scale-110 transition-transform duration-200"> or $540/Year (Save 10%)</Heading>
              </div>
              <div className="mt-4">
                <ul className="hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-light mb-6 list-disc pl-5">
                  <li>Connect with 4 individuals per month.</li>
                  <li>Unlimited Messaging to engage with anyone.</li>
                  <li>Access to secure private chats for meaningful conversations.</li>
                  <li>Exclusive access to connection recommendations tailored to your profile.</li>
                </ul>
                <div className='flex flex-row gap-1'>
                  <Heading level={4} className='text-primary text-xl'>Ideal For: </Heading>
                  <p className='text-white mt-1'> Individuals starting their journey to explore connections.</p>
                </div>
                <Button
                  title="Subscribe Now"
                  className="bg-white text-black text-sm md:text-base mt-3 font-medium py-3 px-6 rounded-full hover:bg-primary hover:text-white hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <div
              className="bg-black bg-opacity-90 p-6 rounded-2xl flex flex-col justify-between w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url(/assets/images/sec6.png)`,
                overflow: 'hidden',
                width: '100% !important',
              }}
            >
              <div>
                <Heading
                  level={5}
                  className="hover:scale-110 transition-transform duration-200 text-white font-bold text-lg md:text-xl lg:text-2xl mb-3"
                >
                  LOREM IPSUM
                </Heading>
                <p className="hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-light mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem lum has
                </p>
                <Heading level={5} className="text-white font-bold whitespace-normal text-lg mb-1 hover:scale-110 transition-transform duration-200">$120/Month</Heading>
                <Heading level={5} className="text-primary font-bold whitespace-normal text-2xl mb-3 hover:scale-110 transition-transform duration-200"> or $1,152/Year (Save 20%)</Heading>
              </div>
              <div className="mt-4">
                <ul className="hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-light mb-6 list-disc pl-5">
                  <li>Connect with 15 individuals per month.</li>
                  <li>Access to advanced search filters: Find people who align with your values, interests, and location.</li>
                  <li>Join exclusive community forums to engage in discussions and meet like-minded individuals.</li>
                  <li>Unlimited messaging and private chat access.</li>
                  <li>Access to verified profiles for secure and trusted connections.</li>
                </ul>
                <div className='flex flex-row gap-1'>
                  <Heading level={4} className='text-primary text-xl'>Ideal For: </Heading>
                  <p className='text-white mt-1'> Individuals seeking a more personalized and refined connection-building experience.</p>
                </div>
                <Button
                  title="Subscribe Now"
                  className="bg-white text-black text-sm md:text-base mt-3 font-medium py-3 px-6 rounded-full hover:bg-primary hover:text-white hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='pb-4 pt-4'>
            <div
              className="bg-black bg-opacity-90 p-6 rounded-2xl flex flex-col justify-between w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url(/assets/images/sec6.png)`,
                overflow: 'hidden',
                width: '100% !important',
              }}
            >
              <div>
                <Heading
                  level={5}
                  className="hover:scale-110 transition-transform duration-200 text-white font-bold text-lg md:text-xl lg:text-2xl mb-3"
                >
                  LOREM IPSUM
                </Heading>
                <p className="hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-light mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem lum has
                </p>
                <Heading level={5} className="text-white font-bold whitespace-normal text-lg mb-1 hover:scale-110 transition-transform duration-200">$50/Month</Heading>
                <Heading level={5} className="text-primary font-bold whitespace-normal text-2xl mb-3 hover:scale-110 transition-transform duration-200"> or $540/Year (Save 10%)</Heading>
              </div>
              <div className="mt-4">
                <ul className="hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-light mb-6 list-disc pl-5">
                  <li>Connect with 4 individuals per month.</li>
                  <li>Unlimited Messaging to engage with anyone.</li>
                  <li>Access to secure private chats for meaningful conversations.</li>
                  <li>Exclusive access to connection recommendations tailored to your profile.</li>
                </ul>
                <div className='flex flex-row gap-1'>
                  <Heading level={4} className='text-primary text-xl'>Ideal For: </Heading>
                  <p className='text-white mt-1'> Individuals starting their journey to explore connections.</p>
                </div>
                <Button
                  title="Subscribe Now"
                  className="bg-white text-black text-sm md:text-base mt-3 font-medium py-3 px-6 rounded-full hover:bg-primary hover:text-white hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
