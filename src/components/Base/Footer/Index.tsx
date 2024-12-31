import React from 'react'
import BaseImage from '../BaseImage'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='flex flex-col md:flex-row justify-between bottom-0 w-full items-center pl-10 pr-10 pt-5 pb-5 bg-[#1A1A1A]'>
            <div className='flex flex-col justify-center md:justify-start'>
                <p className='text-white font-normal text-2xl mb-4'>Afrimeets</p>
                <ul className="font-normal list-none">
                    <Link href="/terms-and-conditions">
                        <li className="hover:text-primary hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-normal">
                            Terms and Conditions
                        </li>
                    </Link>
                    <Link href="/privacy-policy">
                        <li className="hover:text-primary hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-normal">
                            Privacy Policy
                        </li>
                    </Link>
                    <Link href="/cancellation-policy">
                        <li className="hover:text-primary hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-normal">
                            Cancellation Policy
                        </li>
                    </Link>
                </ul>

            </div>
            <div className='flex justify-center'>
                <p className='text-white font-light'>Copyright © 2024 Afrimeets. All rights reserved.</p>
            </div>
            <div className='flex flex-col justify-center md:justify-end space-y-6'>
                <div className='flex space-x-2'>
                    <BaseImage
                        src='/assets/images/fcb.png'
                        height={20}
                        width={30}
                        alt='Logo'
                        style={{ objectFit: 'cover' }}
                        className='object-cover rounded-lg'
                    />
                    <BaseImage
                        src='/assets/images/twt.png'
                        height={20}
                        width={30}
                        alt='Logo'
                        style={{ objectFit: 'cover' }}
                        className='object-cover rounded-lg'
                    />
                    <BaseImage
                        src='/assets/images/pint.png'
                        height={20}
                        width={30}
                        alt='Logo'
                        style={{ objectFit: 'cover' }}
                        className='object-cover rounded-lg'
                    />
                    <BaseImage
                        src='/assets/images/inst.png'
                        height={20}
                        width={30}
                        alt='Logo'
                        style={{ objectFit: 'cover' }}
                        className='object-cover rounded-lg'
                    />
                </div>
                <div className='flex flex-col'>
                    <p className="hover:text-primary hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-normal">Email:<a href="mailto:support@afrimeets.com">support@afrimeets.com</a></p>
                    <p className="hover:text-primary hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-normal">Phone:<a href="tel:4052190063">405-219-0063</a></p>
                </div>
            </div>
        </div>
    )
}
