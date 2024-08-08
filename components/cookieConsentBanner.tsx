'use client'

import React, { useEffect, useRef, useState } from 'react'

const CookieConsentBanner = () => {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        const element = ref.current;
        if (element) {
            const { top } = (element as HTMLElement).getBoundingClientRect();
            // Check if the element is in the viewport
            console.log(window.innerHeight)
            if (top < window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section ref={ref} className={`fixed transition-opacity duration-500 delay-500 z-40 max-w-md p-4 mx-auto bg-white border border-gray-200 mx-auto md:left-20 bottom-16 rounded-2xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="font-semibold text-2xl text-gray-800">🍪 Cookie Notice</h2>
            <p className="mt-4 text-sm text-gray-600 ">We use cookies to ensure that we give you the best experience on our website. <a href="/terms-and-policy" className="text-blue-500 hover:underline">Read cookies policies</a>. </p>
            <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
                <button className="text-xs text-gray-800 underline transition-colors duration-300 hover:text-gray-600 focus:outline-none">
                    Manage your preferences
                </button>
                <button onClick={() => {
                    setIsVisible(false);
                }} className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    Accept
                </button>
            </div>
        </section>
    )
}

export default CookieConsentBanner
