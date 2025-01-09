"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaTumblr, FaTwitter, FaYoutube } from "react-icons/fa";
import Button from "../Base/Button";
import Heading from "../Base/Heading";
import Container from "../Base/Container";
import Link from "next/link";

export default function AboutBanner() {
    const slide = {
        title: "Connecting African and ",
        subtitle: "Black Communities Worldwide",
        description: "Start building meaningful relationships with individuals who share your values, culture, and heritage.",
        image: "/assets/images/about1.jpg",
    };

    return (
        <div
            className="h-screen w-full relative overflow-x-hidden bg-cover bg-center flex flex-col justify-between p-5 sm:p-10"
            style={{
                backgroundImage: `url(${slide.image})`,
            }}
        >
            {/* 20% Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div
                className="px-4 z-50"
                style={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    maxWidth: "600px",
                    marginTop: "20px",
                }}
            >
                <Container>
                    <div className="z-50">
                        {/* Social Icons */}
                        <div className="flex space-x-4 text-white mb-4 z-50">
                            <FaFacebook className="z-50 hover:scale-110 hover:text-blue-600 transition-transform duration-200" />
                            <FaTwitter className="z-50 hover:scale-110 hover:text-blue-400 transition-transform duration-200" />
                            <FaYoutube className="z-50 hover:scale-110 hover:text-red-500 transition-transform duration-200" />
                            <FaInstagram className="z-50 hover:scale-110 hover:text-pink-500 transition-transform duration-200" />
                            <FaTumblr className="z-50 hover:scale-110 hover:text-blue-800 transition-transform duration-200" />
                        </div>

                        {/* Animated Text */}
                        <div className="text-animation">
                            <Heading
                                level={1}
                                className="z-50 text-white font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4"
                            >
                                {slide.title} <br /> {slide.subtitle}
                            </Heading>
                            <p className="z-50 text-white text-lg mb-6">
                                {slide.description}
                            </p>
                            <Link href="/subscription">
                                <Button
                                    title="Get Started"
                                    isPrimary
                                    className="z-50 bg-primary text-white py-3 px-8 border-none rounded-full text-lg hover:bg-purple-800"
                                />
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
