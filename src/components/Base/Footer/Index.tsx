import React from 'react';
import BaseImage from '../BaseImage';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-5 bg-[#1A1A1A] space-y-6 md:space-y-0">
            {/* Afrimeets Section */}
            <div className="flex flex-col items-center md:items-start">
                <p className="text-white font-normal text-2xl mb-4">Afrimeets</p>
                <ul className="font-normal list-none text-center md:text-left">
                    <li className="mb-2 hover:text-primary hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-normal">
                        <Link href="/terms-and-conditions">
                                Terms and Conditions
                        </Link>
                    </li>
                    <li className="mb-2 ">
                        <Link href="/privacy-policy">
                                Privacy Policy
                        </Link>
                    </li>
                    <li className="hover:text-primary hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-normal">
                        <Link href="/cancellation-policy">
                                Cancellation Policy
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Copyright Section */}
            <div className="flex flex-col items-center text-center">
                <p className="text-white font-light text-sm md:text-base">
                    Copyright © 2024 Afrimeets. All rights reserved.
                </p>
            </div>

            {/* Social Media and Contact Section */}
            <div className="flex flex-col items-center md:items-end space-y-6">
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <BaseImage
                        src="/assets/images/fcb.png"
                        height={20}
                        width={30}
                        alt="Facebook"
                        style={{ objectFit: 'cover' }}
                        className="object-cover rounded-lg"
                    />
                    <BaseImage
                        src="/assets/images/twt.png"
                        height={20}
                        width={30}
                        alt="Twitter"
                        style={{ objectFit: 'cover' }}
                        className="object-cover rounded-lg"
                    />
                    <BaseImage
                        src="/assets/images/pint.png"
                        height={20}
                        width={30}
                        alt="Pinterest"
                        style={{ objectFit: 'cover' }}
                        className="object-cover rounded-lg"
                    />
                    <BaseImage
                        src="/assets/images/inst.png"
                        height={20}
                        width={30}
                        alt="Instagram"
                        style={{ objectFit: 'cover' }}
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-2">
                    <p className="hover:text-primary hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-normal">
                        Email: <a href="mailto:support@afrimeets.com">support@afrimeets.com</a>
                    </p>
                    <p className="hover:text-primary hover:scale-110 transition-transform duration-200 text-white text-sm md:text-base font-normal">
                        Phone: <a href="tel:4052190063">405-219-0063</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
