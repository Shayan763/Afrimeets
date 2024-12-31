import React from 'react'
import Container from '../Base/Container'
import Heading from '../Base/Heading'
import Button from '../Base/Button'

export default function SubscriptionCard() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full mt-24 space-y-6'>
        <Heading level={3} className='hover:scale-110 transition-transform duration-200 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black'><span className='text-primary'>Subscription </span>Plans</Heading>
        <Heading level={3} className='hover:scale-110 transition-transform duration-200 text-base md:text-lg lg:text-2xl xl:text-3xl text-black'>Choose Your Plan</Heading>
        <p className="hover:scale-110 transition-transform duration-200 text-white text-lg mb-6">Afrimeets offers flexible subscription plans designed to help you make the most of your experience. Unlock premium features, connect with more people, and build relationships that matter.</p>
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
                <Heading
                  level={5}
                  className="text-primary font-bold text-2xl md:text-3xl lg:text-4xl mb-3 hover:scale-110 transition-transform duration-200"
                >
                  $50/Month
                </Heading>
              </div>
              <div className="mt-4">
                <ul className="hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-light mb-6 list-disc pl-5">
                  <li>4 connections per month</li>
                  <li>Messaging access</li>
                  <li>Secure private chats</li>
                </ul>
                <Button
                  title="Subscribe Now"
                  className="bg-white text-black text-sm md:text-base font-medium py-3 px-6 rounded-full hover:bg-primary hover:text-white hover:scale-110 transition-transform duration-200"
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
                <Heading
                  level={5}
                  className="hover:scale-110 transition-transform duration-200 text-primary font-bold text-2xl md:text-3xl lg:text-4xl mb-3"
                >
                  $80/Month
                </Heading>
              </div>
              <div className="mt-4">
                <ul className="hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-light list-disc pl-5 mb-10">
                  <li>8 connections per month</li>
                  <li>Priority support</li>
                  <li>Access to video calls</li>
                </ul>
                <div className='mt-4'>
                  <Button
                    title="Subscribe Now"
                    className="bg-white mt-4 text-black text-sm md:text-base font-medium py-3 px-6 rounded-full hover:bg-primary hover:text-white"
                  />
                </div>
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
                <Heading
                  level={5}
                  className="hover:scale-110 transition-transform duration-200 text-primary font-bold text-2xl md:text-3xl lg:text-4xl mb-3"
                >
                  $120/Month
                </Heading>
              </div>
              <div className="mt-4">
                <ul className="hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-light mb-6 list-disc pl-5">
                  <li>15 connections per month</li>
                  <li>Advanced search filters</li>
                  <li>Access to exclusive community forums </li>
                </ul>
                <Button
                  title="Subscribe Now"
                  className="bg-white text-black text-sm md:text-base font-medium py-3 px-6 rounded-full hover:bg-primary hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
